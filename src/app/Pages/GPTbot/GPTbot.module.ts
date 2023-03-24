import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GPTbotComponent } from './GPTbot.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GPTbotComponent]
})
export class GPTbotModule { }
