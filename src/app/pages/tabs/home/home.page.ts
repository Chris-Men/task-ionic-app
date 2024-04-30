
import { UtilsService } from 'src/app/services/utils.service';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { AddUpdateTaskComponent } from 'src/app/shared/components/add-update-task/add-update-task.component';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user = {} as User;
  tasks: Task[] = []
  loading: boolean = false;


  constructor(
    private firebaseSvc: FirebaseService,
    private UtilsSvc: UtilsService
  ) { }

  ngOnInit() {
    
  }

ionViewWillEnter(){
  this.getTasks()
  this.getUser()
}


getUser() {
  return this.user = this.UtilsSvc.getElementFromLocalStorage('user')

}

  getPercentage(task: Task) {
    return this.UtilsSvc.getPercentage(task)
  }

  async addOrUpdateTask(task?: Task) {
   let res = await this.UtilsSvc.presentModal({
      component: AddUpdateTaskComponent,
      componentProps: { task },
      cssClass: 'add-update-modal'
    })
    if(res && res.success){
      this.getTasks()
    }
  }

  getTasks() {
    let user: User = this.UtilsSvc.getElementFromLocalStorage('user')
   
    let path = `users/${user.uid}`;

this.loading = true;
   let sub = this.firebaseSvc.getSubcollection(path, 'tasks').subscribe({
      next: (res: Task[]) =>{
        console.log(res);
        this.tasks = res 
        sub.unsubscribe()
        this.loading  = false;
      }
    })
  }





confirmDeleteTask(task:  Task) {
  this.UtilsSvc.presentAlert(
    {
      header: 'Eliminar tarea',
      message: 'Quieres elimianr esta tarea?',
      mode:  'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
        }, {
          text: 'Si, cerrar',
          handler: () => {
            this.deleteTask(task)
          }
        }
      ]
    }
  )
}

  deleteTask(task: Task) {
    let path =  `users/${this.user.uid}/tasks/${task.id}`;
    this.UtilsSvc.presentLoading();
    

    this.firebaseSvc.deleteDocument(path).then(res => {
      
      this.UtilsSvc.presentToast({
        message: 'Tarea eliminada  correctamente',
        color: 'success',
        icon: 'checkmark-circle-outline',
        duration: 1500
      })

      this.getTasks()
      this.UtilsSvc.dismissLoading()

    }, error => {

      this.UtilsSvc.presentToast({
        message: error,
        color: 'warning',
        icon: 'alert-circle-outline',
        duration: 5000
      })

      this.UtilsSvc.dismissLoading()


    })

  }

}
 