import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private allService: AllservicesService) {}
  data: any = [];
  ngOnInit(): void {
    this.allService.getAllCars().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    });
  }
}
