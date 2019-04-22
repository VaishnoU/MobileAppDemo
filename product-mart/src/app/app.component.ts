import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Product } from './product';
import { CommunicatorService } from './communicator.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  products: Product[] = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private api: CommunicatorService,
    private appService: AppService
  ) {
    this.initializeApp();
    this.getProducts();
  }

  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getRequest("/getproduct")
      .subscribe(res => {
        this.products = res;
        this.appService.setProduct(this.products);
        console.log(this.products);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
