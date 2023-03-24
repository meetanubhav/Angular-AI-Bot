import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GPTbotComponent } from './Pages/GPTbot/GPTbot.component';

const routes: Routes = [
  { path: '', component: GPTbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
