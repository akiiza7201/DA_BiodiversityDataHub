import { AfterViewInit, Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MapTableDataSource, MapTableItem } from './map-table-datasource';
import { RecordReqService } from 'src/app/services/record-req.service';
import { Species } from 'src/app/models/Species';
import {BehaviorSubject} from 'rxjs';
import { element } from 'protractor';
import { Taxon } from 'src/app/models/Taxon';
import * as subgroups from 'src/TaxonGroup/subgroups.json';
import { InteractionService } from 'src/app/services/interaction.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'map-table',
  templateUrl: './map-table.component.html',
  styleUrls: ['./map-table.component.css']
})

@Injectable()
export class MapTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MapTableItem>;
  dataSource: MapTableDataSource;

  constructor(private service: RecordReqService, private intService: InteractionService) { }
  selection = new SelectionModel<MapTableItem>(false, null);
  currentGroup = 'all';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['group', 'speciesCount'];
  tableData: MapTableItem[] = [];

  taxonData: any;
  taxonGroup: Taxon[] = [];

  recordData: any;
  recordCountData: any;
  recordCountData2: any;
  allRecordCount: any = 10000;

  ngOnInit() {
        this.tableData.push({group: 'Alle', speciesCount: this.allRecordCount});
        this.service.getAllRecords().subscribe((data) => {
        this.recordData = data;
        const count = this.recordData.totalRecords;
        this.tableData[0].speciesCount = count;
        this.dataSource = new MapTableDataSource(this.tableData);

         this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
        });
        this.taxonData = subgroups.default;

        this.selection.onChange.subscribe((a) =>
        {
            if (a.added[0])   // will be undefined if no selection
            {
              this.intService.updateGroup(a.added[0].group);
              console.log(a.added[0].group);
            }
        });

      Object.entries(this.taxonData).forEach(el => {
        this.taxonGroup.push(new Taxon(el));
      });
      console.log(this.taxonGroup);

       this.taxonGroup.forEach(el => {
        this.service.getRecordBySearch(el.speciesGroup).subscribe((data) => {
          this.recordCountData2 = data;
          const count2 = this.recordCountData2.totalRecords;
          this.tableData.push({group: el.speciesGroup, speciesCount: count2});
        });

        el.taxa.forEach(elm => {
          this.service.getRecordBySearch(elm).subscribe((dta) => {
            this.recordCountData = dta;
            const count = this.recordCountData.totalRecords;
            this.tableData.push({group: '\t' +  elm, speciesCount: count});
          });
          });
      });
  }

  ngAfterViewInit() {
    this.dataSource = new MapTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.table.dataSource = this.dataSource;


    this.dataSource = new MapTableDataSource(this.tableData);
  }
}
