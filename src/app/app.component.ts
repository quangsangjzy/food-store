import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PromoComponent } from "./promo/promo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, PromoComponent]
})
export class AppComponent {
  title = 'shopping-cart';
  products = [
    {
      id: '1',
      name: 'Iphone 13 Pro Max',
      description: 'Description for product item number 1',
      price: 141,
      quantity: 1,
      image: 'assets/images/apple_image.png',
    },
    {
      id: '2',
      name: 'Samsung S22 Ultra',
      description: 'Description for product item number 2',
      price: 124,
      quantity: 1,
      image: 'assets/images/samsung_image.png',
    },
    {
      id: '3',
      name: 'Samsung S22 Ultra',
      description: 'Description for product item number 3',
      price: 124,
      quantity: 3,
      image: 'assets/images/samsung_image.png',
    },
  ];

  numberItems = 3;
  subTotal: number = 460.15;

  removeProduct(productId: string) {
    // xoa san pham
    const confirmed = confirm('Are you sure you want to remove');
    if (confirmed) {
      const index = this.products.findIndex(
        (product: { id: string }) => product.id == productId
      );
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }

    // Tinh lai gia tri
    let numberItems = 0;
    let subTotal = 0;

    // for (const product of this.products) {
    //   numberItems += product.quantity;
    //   subTotal += product.price * product.quantity;

    //   this.numberItems = numberItems;
    //   this.subTotal = subTotal;
    // }
  }
}
