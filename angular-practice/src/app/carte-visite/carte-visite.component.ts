import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  name = signal<string>('john');
  firstName = signal<string>('doe');
  job = signal<string>('Student');
  coverImage = signal<string>('https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  profileImage = signal<string>('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80');
  favoriteQuote = signal<string>("We don't rise to the level of our expectations, we fall to the level of our training. - Archilochus");
  workDescription = signal<string>('I am a passionate web designer with an interest in creating visually stunning and user-friendly websites.');
  workKeywords = signal<string>('Web design, angular, HTML5, CSS3, NestJs...');

  onCoverImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.convertToBase64(file).then(base64 => {
        this.coverImage.set(base64);
      });
    }
  }

  onProfileImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.convertToBase64(file).then(base64 => {
        this.profileImage.set(base64);
      });
    }
  }

  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}