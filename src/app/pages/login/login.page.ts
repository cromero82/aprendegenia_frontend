import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service'
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', null) slides: IonSlides;

  loginUser = {
    email: 'test1@test.com',
    password: '123456'
  };

  registerUser: UsuarioModel =  {
    email: 'test@mail.co',
    password: '123456',
    nombre: 'Test',
    apellido: 'Test',
    avatar: 'av-1.png',
    repetirPassword: null,
    rol: '',
    username: '',
    id: 0,
    roles: []
  };

  constructor( private usuarioService: UsuarioService,
               private navCtrl: NavController,
               private uiService: UiService ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }
  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }

  }


  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
