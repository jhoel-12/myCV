import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbautComponent } from './components/abaut/abaut.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch :'full' },
  {path: 'home', component:HomeComponent},
  {path: 'abaut', component:AbautComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'contact', component:ContactComponent},
  {path:'skill', component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
