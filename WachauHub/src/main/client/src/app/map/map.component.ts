import { Component, OnInit, ɵLifecycleHooksFeature } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import { MapTableItem } from '../tables/map-table/map-table-datasource';
import { SpeciesMapTableItem } from '../tables/species-map-table/species-map-table-datasource';
import * as L from 'leaflet';
import { GeojsonService } from '../services/geojson.service';


declare var ol: any;
declare var globmap: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  constructor(private service: RecordReqService, private geojsonService: GeojsonService) {}

  data: any;
  map: any;

  featureCollection = [];

  latitude: number = 48.40914;
  longitude: number = 15.612974;

  // map: any;

  ngOnInit() {

    // Vom Service die Daten holen und in einer Liste speichern
    this.initMap();

    var markerIcon = L.icon({
      iconUrl: '/images/dot.png',

      iconSize:     [15, 15], // size of the icon
  });

    this.service.getAllRecords().subscribe((data) => {
      // console.log(data);
      this.data = data;

      this.data.occurrences.forEach(element => {
        L.marker([element.decimalLatitude, element.decimalLongitude], {icon: markerIcon}).addTo(this.map)
        .bindPopup(element.scientificName)
        .openPopup();
      });
    });
  }

   private initMap() {
    this.map = L.map('mapbox').setView([48.35422, 15.42558], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

        const myStyle = {
          "color": "#786f6e",
          "weight": 3,
          "opacity": 0.4
      };

    this.geojsonService.getGeoJson().subscribe(data => {
          console.log(data);
          L.geoJson(data, {style: myStyle}).addTo(this.map);
      });

  }
}


