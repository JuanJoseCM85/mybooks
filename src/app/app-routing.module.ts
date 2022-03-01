import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "app-registro", component: RegistroComponent},
  {path: "app-perfil", component: PerfilComponent}
 // { path: "**", pathMatch: "full", redirectTo: "app-home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
