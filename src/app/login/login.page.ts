import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    // Aquí puedes implementar la lógica de autenticación.
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Redirigir a otra página tras iniciar sesión (ejemplo)
    this.navCtrl.navigateForward('/home');
  }

  onForgotPassword() {
    // Aquí puedes implementar la lógica para manejar la recuperación de contraseña.
    console.log('Recuperar contraseña');
  }
}
