import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SpeciesMapTableDataSource, SpeciesMapTableItem } from './species-map-table-datasource';
import { RecordReqService } from 'src/app/services/record-req.service';
import { MapTableItem } from '../map-table/map-table-datasource';
import { Species } from 'src/app/models/Species';
import { MapTableComponent } from '../map-table/map-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-species-map-table',
  templateUrl: './species-map-table.component.html',
  styleUrls: ['./species-map-table.component.css']
})
export class SpeciesMapTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<SpeciesMapTableItem>;
  dataSource: SpeciesMapTableDataSource;

  constructor(private service: RecordReqService, private router: Router, private intService: InteractionService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['species', 'recordCount'];
  tableData: SpeciesMapTableItem[] = [];

  group = 'all';
  speciesdata: any;
  speciesList: Species[] = [];

  ngOnInit() {
    this.service.getTaxonRecords(this.group).subscribe((data) => {
      // console.log(data);
      this.speciesdata = data;

      this.speciesdata.occurrences.forEach(element => {
        const spec = new Species(element, 'SpeciesMapTable');
        this.speciesList.push(spec);
        this.fillTable(spec);
      });

      this.dataSource = new SpeciesMapTableDataSource(this.tableData);
      this.dataSource.sort = this.sort;
      this.table.dataSource = this.dataSource;
    });

    this.dataSource = new SpeciesMapTableDataSource(this.tableData);


    this.intService.currentGroup.subscribe(
      currGroup => {
        this.groupChanged(currGroup);
      });
  }

  groupChanged(currGroup) {
    if (currGroup === 'Alle') {
      currGroup = '*';
    }
    this.tableData = [];
    this.speciesList = [];
    this.service.getTaxonRecords(currGroup).subscribe((data) => {
      this.speciesdata = data;

      this.speciesdata.occurrences.forEach(element => {
        const spec = new Species(element, 'SpeciesMapTable');
        this.speciesList.push(spec);
        this.fillTable(spec);
      });

      this.dataSource = new SpeciesMapTableDataSource(this.tableData);
      this.dataSource.sort = this.sort;
      this.table.dataSource = this.dataSource;
    });

    this.dataSource = new SpeciesMapTableDataSource(this.tableData);

  }

  ngAfterViewInit() {
  }

  fillTable(species) {
    this.tableData.push({species: species.rawScientificName, recordCount: '1'});
  }

  onRowClicked(row, index) {
    console.log(index);
    this.router.navigate(['/profile', this.speciesList[index].uuid]);
  }
}
