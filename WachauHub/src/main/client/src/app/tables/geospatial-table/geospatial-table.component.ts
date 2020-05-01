import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GeospatialTableDataSource} from './geospatial-table-datasource';
import { ProfileTableItem } from 'src/app/models/ProfileTableItem';
import { Species } from 'src/app/models/Species';
import { RecordReqService } from 'src/app/services/record-req.service';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-geospatial-table',
  templateUrl: './geospatial-table.component.html',
  styleUrls: ['./geospatial-table.component.css']
})
export class GeospatialTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<ProfileTableItem>;
  dataSource: GeospatialTableDataSource;
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

      const spec = new Species(this.speciesdata, 'geoTable');
        this.species = spec;

      this.tableData = fillTable(this.species);
      this.dataSource = new GeospatialTableDataSource(this.tableData);
      console.log('Datasource:');
      console.log(this.dataSource);
      this.table.dataSource = this.dataSource;
    });
    this.dataSource = new GeospatialTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
  }
}

function fillTable(species) {
  const data: ProfileTableItem[] = [];

  data.push({description: 'Longitude', value: species.decimalLongitude});
  data.push({description: 'Latitude',  value: species.decimalLatitude});
  data.push({description: 'Geodätisches Datum',  value: species.geodeticDatum});

  return data;
}
