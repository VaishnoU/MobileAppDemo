import { Component } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'delete.page.html',
  styleUrls: ['delete.page.scss']
})
export class DeletePage {
  productForm: FormGroup;
  id:number=null;
  constructor(public api: CommunicatorService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'id' : [null, Validators.required]
    });
  }

  async onFormSubmit(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.deleteRequest("/deleteproduct/"+id)
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
