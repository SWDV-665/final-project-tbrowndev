import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController, ActionSheetController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/*
  Generated class for the RecordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecordServiceProvider {

  constructor(public modalCtrl: ModalController, public actionCtrl: ActionSheetController) {
    //console.log('Hello RecordServiceProvider Provider');
  }

  presentRecordModal(item?) {
    let recordModal = this.modalCtrl.create(RecordModal, item);
    recordModal.present();
  }
}

@Component({
  templateUrl: 'record.html'
})
export class RecordModal {
  item;
  type;

  constructor(params: NavParams, public dataService: DataServiceProvider, public toastCtrl:ToastController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.item = params.data;
    this.type = this.item.constructor.name;
  }

  //close payment modal
  close() {
    this.viewCtrl.dismiss();
  }

  updateRecord(item){
    //this.dataService.updateItem(item);
    this.close();
  }
}
