import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  formError = '';
  authForm;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  shouldShowError(controlName: 'email' | 'password'): boolean {
    const control = this.authForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  get emailErrorMessage(): string {
    const control = this.authForm.get('email');
    if (!control || !(control.dirty || control.touched)) {
      return '';
    }
    if (control.hasError('required')) {
      return 'L\'adresse email est obligatoire.';
    }
    if (control.hasError('email')) {
      return 'Format d\'adresse email invalide.';
    }
    return '';
  }

  get passwordErrorMessage(): string {
    const control = this.authForm.get('password');
    if (!control || !(control.dirty || control.touched)) {
      return '';
    }
    if (control.hasError('required')) {
      return 'Le mot de passe est obligatoire.';
    }
    if (control.hasError('minlength')) {
      return 'Le mot de passe doit contenir au moins 4 caractères.';
    }
    return '';
  }

  submitAuth(): void {
    if (this.authForm.invalid) {
      this.formError = 'Veuillez corriger les erreurs avant de continuer.';
      this.authForm.markAllAsTouched();
      return;
    }

    this.formError = '';
    console.log('Formulaire valide :', this.authForm.value);
    alert('Authentification réussie !');
  }
}
