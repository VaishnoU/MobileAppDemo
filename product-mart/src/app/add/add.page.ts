import { Component } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss']
})
export class AddPage {
  productForm: FormGroup;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  constructor(public api: CommunicatorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required]
    });
  }

  async onFormSubmit(form:NgForm) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.postRequest("/addproduct",form)
      .subscribe(res => {
          let id = res['_id'];
          loading.dismiss();
          console.log(this.router);
          this.router.navigate(["main"]);
        }, (err) => {
          console.log(err);
          loading.dismiss();
        });
  }
}
