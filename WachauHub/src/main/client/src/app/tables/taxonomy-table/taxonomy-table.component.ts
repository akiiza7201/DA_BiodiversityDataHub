import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TaxonomyTableDataSource} from './taxonomy-table-datasource';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';
import { Species } from 'src/app/models/Species';
import { RecordReqService } from 'src/app/services/record-req.service';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-taxonomy-table',
  templateUrl: './taxonomy-table.component.html',
  styleUrls: ['./taxonomy-table.component.css']
})
export class TaxonomyTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<ProfileTableItem>;
  dataSource: TaxonomyTableDataSource;
  constructor(private service: RecordReqService, private data: ProfileComponent) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['description', 'value'];
  tableData: ProfileTableItem[];

  uuid: any;
  speciesdata: any;
  species: Species;

  ngOnInit() {
    this.data.currentUuid.subscribe(uuid => this.uuid = uuid);
    console.log('Empfangene Uuid:' + this.uuid);

    this.service.getOneRecord(this.uuid).subscribe((data) => {
      // console.log(data);
      this.speciesdata = data;

      const spec = new Species(this.speciesdata, 'taxTable');
        this.species = spec;

      this.tableData = fillTable(this.species);
      this.dataSource = new TaxonomyTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.table.dataSource = this.dataSource;
    });
    this.dataSource = new TaxonomyTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
  }
}

function fillTable(species) {
  const data: ProfileTableItem[] = [];

  data.push({description: 'Wissenschaftlicher Name', value: species.scientificName});
  data.push({description: 'Taxon-Rang',  value: species.taxonRank});
  data.push({description: 'Gebräuchlicher Name',  value: species.vernacularName});
  data.push({description: 'Reich',  value: species.kingdom});
  data.push({description: 'Stamm',  value: species.phylum});
  data.push({description: 'Klasse',  value: species.classID});
  data.push({description: 'Ordnung',  value: species.order});
  data.push({description: 'Familie',  value: species.family});
  data.push({description: 'Gattung',  value: species.genus});
  data.push({description: 'Spezies',  value: species.species});

  return data;
}
