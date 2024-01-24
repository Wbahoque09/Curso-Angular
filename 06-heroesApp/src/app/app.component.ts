import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroesApp';

  // constructor( private authService: AuthService ){} // Inyeccion del servicio de auth para la autenticacion

  // ngOnInit(): void {
  //   this.authService.chechAuthentication().subscribe( () => { // Aqui suscribimos para ejecutar la peticion
  //     console.log('checkAuthentication finished');
  //   })
  // }


}
