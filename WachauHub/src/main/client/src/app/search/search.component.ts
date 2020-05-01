import { Component, OnInit } from '@angular/core';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: RecordReqService, private router: Router) { }

  data: any;
  speciesList: Species[] = [];

  ngOnInit() {
  }

  public searchEvent(searched) {
    // foreach element alle variablen durchgehen und schauen ob sie diesen wert irgendwo beinhalten (achtung großkleinschreibung)
    console.log('Es wurde gesucht:' + searched);
    this.router.navigate(['/searchResults', searched]);
  }

}

