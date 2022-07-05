import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//引入组件
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//在这里放上routes数组
const routes:Routes = [
  {path:"",redirectTo:"heroes",pathMatch:"full"},
  {path:'heroes',component:HeroesComponent},
  {path: 'detail', component: HeroDetailComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //通过forRoot方法，用routes配置它
    RouterModule.forRoot(routes)
  ],
  //导出RouterModule，以便它在整个应用程序中有效
  exports:[RouterModule]

})
export class AppRountingModule { }
