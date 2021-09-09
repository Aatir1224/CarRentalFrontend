import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  constructor(
    private allService: AllservicesService,
    public route: ActivatedRoute
  ) {}
  data: any = {};
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.allService.getInvoice(this.id).subscribe((res: any) => {
      console.log(res);
      this.data = res.data[0];
    });
  }
}
