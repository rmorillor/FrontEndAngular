import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    name: ['Text 2', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private route: Router, private authService: AuthService) { }

  registro() {

    const { email, password, name } = this.miFormulario.value;

    this.authService.registro(name, email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.route.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }

}