import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile = [];

  inDarkMode: boolean = false;

  errorMessage: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public dataService: DataServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadProfile();
    })
  }

  ionViewDidLoad() {
    this.loadProfile();
  }

  loadProfile() {
    this.dataService.getProfile().subscribe(
      profile => this.profile = profile,
      error => this.errorMessage = <any>error
    );
  }

  onEditProfileDetails(profileData) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Profile Details',
      inputs: [{
        name: 'name',
        placeholder: 'Name',
        value: profileData.name
      }, {
        name: 'nickname',
        placeholder: 'Nickname',
        value: profileData.nickname
      }, {
        name: 'jobtitle',
        placeholder: 'Occupation',
        value: profileData.jobtitle
      }, {
        name: 'email',
        placeholder: 'Email',
        value: profileData.email
      }, {
        name: 'phone',
        placeholder: 'Phone',
        value: profileData.phone
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Update',
        handler: data => {
          this.dataService.updateProfile(profileData._id, data);
        }
      }]
    })
    prompt.present();
  }
  
}
