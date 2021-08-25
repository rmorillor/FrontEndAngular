import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private route: Router) { }

  registro() {
    this.route.navigateByUrl('/dashboard');
  }

}