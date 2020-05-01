import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import {PageEvent} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: RecordReqService, private router: Router, public snackBar: MatSnackBar) { }
  data: any;
  speciesList: Species[] = [];
  searched: any;

  // Pagination
  pageIndex:number = 0;
  pageSize:number = 6;
  lowValue:number = 0;
  highValue:number = 7;

  getPaginatorData(event) {
    console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }
       this.pageIndex = event.pageIndex;

  }


  ngOnInit() {
    const searched = this.route.snapshot.paramMap.get('searched');
    console.log('Gesucht:' + searched);
    this.searched = searched;
    this.search(this.searched);
  }

  public showProfile(uuid) {
    this.router.navigate(['/profile', uuid]);
  }

  public search(searched) {
    this.speciesList = [];
    this.service.getRecordBySearch(searched).subscribe((data) => {
      console.log(data);
      this.data = data;

      if (this.data.occurrences.length === 0) {
        this.snackBar.open('Keine Ergebnisse gefunden', 'OK');
      }
      this.data.occurrences.forEach(element => {
        const spec = new Species(element, 'searchResults');
        this.speciesList.push(spec);
      });

    });
  }
}
