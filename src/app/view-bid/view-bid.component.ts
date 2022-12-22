import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-view-bid',
  templateUrl: './view-bid.component.html',
  styleUrls: ['./view-bid.component.css']
})
export class ViewBidComponent implements OnInit {
  sellerID!: number;
  seller!: Seller;
  constructor(private route: ActivatedRoute,private sellerService: SellerService){

  }
  ngOnInit(): void{
this.sellerID = this.route.snapshot.params['sellerID'];
this.seller = new Seller();
this.sellerService.getSellerById(this.sellerID).subscribe(data=>{
  this.seller=data;
})
  }
  

}

