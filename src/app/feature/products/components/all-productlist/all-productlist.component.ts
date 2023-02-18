import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../../services/data-fetch.service';

@Component({
  selector: 'app-all-productlist',
  templateUrl: './all-productlist.component.html',
  styleUrls: ['./all-productlist.component.scss']
})
export class AllProductlistComponent implements OnInit {

  public productList: any = [];
  constructor(private dataFetchService: DataFetchService) { }

  ngOnInit(): void {
    this.fetchProduct();
  }


  fetchProduct() {
    this.dataFetchService.fetchProduct().subscribe((res) => {
      this.productList = res
      console.log('res :>> ', res);
    })
  }
}
