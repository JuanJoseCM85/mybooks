import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "app-registro", component: RegistroComponent},
  {path: "app-perfil", component: PerfilComponent},
  {path: "app-libros", component: LibrosComponent},
  {path: "app-login", component: LoginComponent}
 // { path: "**", pathMatch: "full", redirectTo: "app-home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
