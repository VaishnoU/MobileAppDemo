import { Component, OnInit, AfterViewChecked, OnChanges, AfterViewInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicatorService } from '../communicator.service';
import { Product } from '../product';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private header: HttpHeaders;
  products: Product[] = [];
  constructor(public api: CommunicatorService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,private appService: AppService) {
      this.header = new HttpHeaders({'Content-type': 'application/json'});
       this.getProducts();
       if(this.appService.getProduct()){
           this.products = this.appService.getProduct();
       }
     }
  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getRequest("/getproduct",this.header)
      .subscribe(res => {
        this.products = res;
        this.appService.setProduct(res);
        console.log(this.products);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
