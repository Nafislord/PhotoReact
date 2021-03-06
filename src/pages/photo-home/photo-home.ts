import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoVotePage } from '../photo-vote/photo-vote';

/**
 * Generated class for the PhotoHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-home',
  templateUrl: 'photo-home.html',
})
export class PhotoHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoHomePage');
  }

  openImage(){
    this.navCtrl.push(PhotoVotePage);
  }
}
