import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-try-it',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './try-it.component.html',
  styleUrl: './try-it.component.css',
})
export class TryItComponent {
  selectedImage: string | null = null;
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.selectedImage = e.target?.result as string);
      reader.readAsDataURL(file);
    }
  }
}
