import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { SpaceX } from './Ispace';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  selectedYear: number;
  landing: boolean;
  launch: boolean;
  spaceXArray: SpaceX[] = [];
  yearsArray = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getspaceXData();
  }

  getspaceXData() {
    this.spinner.show();
    this.sharedService
      .getSpaceXData(this.launch, this.landing, this.selectedYear)
      .subscribe(
        (res: SpaceX[]) => {
          this.spaceXArray = res;
          this.spinner.hide();
        },
        () => {
          this.spinner.hide();
        }
      );
  }
}
