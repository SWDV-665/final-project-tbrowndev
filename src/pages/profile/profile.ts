import { Component } from '@angular/core';
import { NavController, Button } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;
  inDarkMode: boolean = true;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public dataService: DataServiceProvider) {
    this.user = this.dataService.fetchProfile();
  }

  public themes = [
    {title: "Theme 1", active: false},
    {title: "Theme 2", active: false},
    {title: "Theme 3", active: false},
    {title: "Theme 4", active: false},
    {title: "Theme 5", active: false},
    {title: "Theme 6", active: false},
    {title: "Theme 7", active: false},
  ]

  onEditProfileDetails(){
    const prompt = this.alertCtrl.create({
      title: 'Edit Profile Details',
      inputs:[{
        name:'name',
        placeholder: 'Name',
        value: this.user.name
      },{
        name: 'nickname',
        placeholder:'Nickname',
        value: this.user.nickname
      }, {
        name: 'jobtitle',
        placeholder: 'Occupation',
        value: this.user.jobTitle
      }, {
        name:'email',
        placeholder: 'Email',
        value: this.user.email
      },{
        name:'phone',
        placeholder: 'Phone',
        value: this.user.phone
      }],
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Update',
        handler: data =>{
          this.user.name = data.name;
          this.user.nickname = data.nickname;
          this.user.jobTitle = data.jobtitle;
          this.user.email = data.email;
          this.user.phone = data.phone;
        }
      }]
    })
    prompt.present();
  }
}
