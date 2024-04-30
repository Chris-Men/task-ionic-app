import { User } from './../../../models/user.model';
import { UtilsService } from 'src/app/services/utils.service';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  user = {} as User

  constructor(
    private FirebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getUser();
  }


  getUser() {
    return this.user = this.utilsSvc.getElementFromLocalStorage('user')

  }

  singOut() {
    this.utilsSvc.presentAlert(
      {
        header: 'Cerrar  Sesión',
        message: 'Quieres cerrar sesión?',
        mode:  'ios',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            
          }, {
            text: 'Si, cerrar',
            handler: () => {
              this.FirebaseSvc.signOut();
            }
          }
        ]
      }
    )
  }

}
