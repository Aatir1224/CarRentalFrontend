import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private allService: AllservicesService) {}
  data: any = [];
  envir: any = { ...environment, production: true };
  ngOnInit(): void {
    this.allService.getAllCars().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
      this.data.forEach((item) => {
        if (item.image1 != null && item.image2 != null && item.image3 != null) {
          var newchar = '';
          item.image1 = item.image1.split('public/').join(newchar);
          item.image2 = item.image2.split('public/').join(newchar);
          item.image3 = item.image3.split('public/').join(newchar);
        }
      });
    });
  }
}
