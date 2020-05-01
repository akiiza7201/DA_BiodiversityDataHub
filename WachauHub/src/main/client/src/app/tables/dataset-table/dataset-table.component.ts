import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DatasetTableDataSource} from './dataset-table-datasource';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';
import { Species } from 'src/app/models/Species';
import { RecordReqService } from 'src/app/services/record-req.service';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-dataset-table',
  templateUrl: './dataset-table.component.html',
  styleUrls: ['./dataset-table.component.css']
})
export class DatasetTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<ProfileTableItem>;
  dataSource: DatasetTableDataSource;
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

    this.service.getOneRecord(this.uuid
      ).subscribe((data) => {
      // console.log(data);
      this.speciesdata = data;
        console.log(this.speciesdata);
        const spec = new Species(this.speciesdata, 'dataTable');
        this.species = spec;

      this.tableData = fillTable(this.species);
      this.dataSource = new DatasetTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.table.dataSource = this.dataSource;
    });
    this.dataSource = new DatasetTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
  }

}

function fillTable(species) {
  const data: ProfileTableItem[] = [];

  data.push({description: 'Datenpartner', value: species.dataProviderName});
  data.push({description: 'Datenressourcen Name', value: species.dataResourceName});
  data.push({description: 'Datenressourcen ID',  value: species.dataResourceUid});
  data.push({description: 'Vorkommens-ID',  value: species.occurrenceId});
  data.push({description: 'Beobachter',  value: 'unbekannt'});
  data.push({description: 'Basis der Aufzeicnnung',  value: species.basisOfRecord});
  data.push({description: 'Vorkommensstatus',  value: species.occurrenceStatus});

  return data;
}
