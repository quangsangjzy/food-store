import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  // styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() products: any;
  @Output() onremoveProduct = new EventEmitter();

  removeProduct(productId: string): void {
    this.onremoveProduct.emit(productId)
    // console.log(confirmed);
  }

  updateQuantity(element: HTMLInputElement) {
    var quantityValue = element.value;
    console.log(quantityValue);
  }
}
