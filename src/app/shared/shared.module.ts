import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddUpdateTaskComponent } from './components/add-update-task/add-update-task.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    AddUpdateTaskComponent
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    NgCircleProgressModule,
    AddUpdateTaskComponent
  ],
  imports: [
    CommonModule, // Asegúrate de importar CommonModule
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })
  ]
})
export class SharedModule { }
