import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {
    this.user = this.dataService.getUser();
  }
}
