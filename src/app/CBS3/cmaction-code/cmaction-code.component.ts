import { Component, OnInit } from '@angular/core';
import { CMActioncode } from 'src/app/Models/CMActioncode';
import { CMActionAPIService } from 'src/app/Services/cmaction-api.service';

@Component({
  selector: 'app-cmaction-code',
  templateUrl: './cmaction-code.component.html',
  styleUrls: ['./cmaction-code.component.css']
})
export class CMActionCodeComponent implements OnInit {

  CMactionCode: CMActioncode[];

  constructor(private CMActionService: CMActionAPIService) { }

  ngOnInit() {
      this.CMActionService
      .getCMActionCode()
      .subscribe(data => {
         this.CMactionCode = data;
        // console.log(data);
      });
  }

}
