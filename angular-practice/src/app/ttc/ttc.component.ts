import { Component,signal,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ttc',
  imports: [FormsModule,CommonModule],
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css'
})
export class TTCComponent {
  prixHT = signal<number>(0);
  TVA = signal<number>(18);
  quantite = signal<number>(1);
  prixUnitaireTTC = computed(() => {
    return this.prixHT() * (1 + this.TVA() / 100);
  })
  prixTotalTTC = computed(() => {
    return this.prixUnitaireTTC() * this.quantite();
  })
  discount = computed(() => {
    if (this.quantite() >= 10 && this.quantite() <= 15) {
      return this.prixTotalTTC() * 0.2;
    } else if (this.quantite() > 15) {
      return this.prixTotalTTC() * 0.3;
    }
    else {
      return 0;
    }
  })




}
