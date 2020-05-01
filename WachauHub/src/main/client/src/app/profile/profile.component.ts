import { Component, OnInit, Injectable} from '@angular/core';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import { stringify } from 'querystring';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import * as L from 'leaflet';
import { GeojsonService } from '../services/geojson.service';

declare var ol: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: RecordReqService, private route: ActivatedRoute, private geojsonService: GeojsonService) { }
  latitude: number = 48.409140;
  longitude: number = 15.612974;

  map: any;
  private uuidSource = new BehaviorSubject<string>('bca43e78-5869-41e7-9a04-d556b62a5258');
  currentUuid = this.uuidSource.asObservable();
  data: any;
  speciesList: Species[] = [];

  ngOnInit() {

    const uuid = this.route.snapshot.paramMap.get('uuid');
    console.log('Gesucht:' + uuid);
    this.uuidSource.next(uuid);

    this.service.getOneRecord(uuid).subscribe((data) => {
      this.data = data;
      const spec = new Species(data, 'profile');

        this.initMap(spec);
    });

  }

  private initMap(species) {
    this.map = L.map('mapbox').setView([species.decimalLatitude, species.decimalLongitude], 10);

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

      var markerIcon = L.icon({
        iconUrl: '/images/dot.png',
        iconSize:     [15, 15], // size of the icon
    });

      L.marker([species.decimalLatitude, species.decimalLongitude], {icon: markerIcon}).addTo(this.map);

  }

}

function buildMap(species){
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  // Map erstellen, Center in Spitz an der Donau
  mapboxgl.accessToken =
    'pk.eyJ1IjoianVsaWEwNDEyIiwiYSI6ImNrNjExYTBkMDBjdjQzZm9ha3VnZHZ6NzQifQ.4Hw-RyHSXwM7oNDxDbcu7w';
  const map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: [species.decimalLongitude, species.decimalLatitude]
  });
    map.on('load', function() {
      // Add zoom and rotation controls to the map. FUNKTIONIERT NICHT
      map.addControl(new mapboxgl.NavigationControl());

      // Add resize for loaded map so it doesnt look broken ;)
      map.resize();

      /* Image: An image is loaded and added to the map. */
      map.loadImage('images/dot.png', function(error, image) {
        if (error) {
          throw error;
        }

        // Marker zur Map hinzufügen
        map.addImage('custom-marker', image);

        map.addLayer({
          id: 'markers',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    description: '<strong>Krems an der Donau</strong>'
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [species.decimalLongitude, species.decimalLatitude]
                  }
                },
              ]
            }
          },
          layout: {
            'icon-image': 'custom-marker'
          }
        });
      });


      // Wachau-Polygon zur Map hinzufügen
      map.addSource('wachau', {
        type: 'geojson',
        // tslint:disable-next-line: max-line-length
        data:
          'https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json'
      });

      map.addLayer({
        id: 'maine',
        type: 'line',
        source: 'wachau',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#888',
          'line-width': 2
        }
      });
    });

}
