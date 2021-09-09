import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css'],
})
export class ViewpageComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private allService: AllservicesService,
    private router: Router
  ) {}
  id: any;
  data: any = {};
  price: any;
  ngOnInit(): void {
    let premiumPrice = 1000;
    let regularPrice = 500;

    this.id = this.route.snapshot.params.id;
    this.allService.getSingleCar(this.id).subscribe((res: any) => {
      console.log(res);
      this.data = res.data[0];
      if (this.data.CarTypeId == 1) {
        this.price = premiumPrice * this.data.DaysRented;
        // console.log(price);
      } else if (this.data.CarTypeId == 2) {
        let day = 3;
        let newDay = this.data.DaysRented - day;
        this.price = regularPrice * 1 + regularPrice * newDay;
        // console.log(price);
      } else if (this.data.CarTypeId == 3) {
        let day = 5;
        let newDay = this.data.DaysRented - day;
        this.price = regularPrice * 1 + regularPrice * newDay;
        // console.log(price);
      }
    });
  }
  buy(data, e) {
    e.target.disabled = true;
    data.price = this.price;
    console.log(data);
    this.allService.rentCars(data).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('receipt', JSON.stringify(data));
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2000);
    });
  }
}
