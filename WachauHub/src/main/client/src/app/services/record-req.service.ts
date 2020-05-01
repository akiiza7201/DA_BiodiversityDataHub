import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordReqService {

  readonly URL;

  constructor(private http: HttpClient) {
     this.URL = 'http://localhost:8080/data';
   }


   getAllRecords() {
    return this.http.get(this.URL + '/records/all')
   }

   getOneRecord(uuid) {
     console.log(uuid);
     return this.http.get(this.URL + '/records/' + uuid);
   }

   /*getRecordCountforTaxon() {

   }*/

   getTaxonRecords(taxon) {
    return this.http.get(this.URL + '/records/taxon/'+ taxon);
   }

   getRecordBySearch(searched) {
    return this.http.get(this.URL + '/records/search/' + searched);
   }

   getWachauGrenzen() {
     // tslint:disable-next-line: max-line-length
     return this.http.get('https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json');
   }
}
