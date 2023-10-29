import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cartItems: any[] = [];

  //añadir al carrito
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  //eliminar del carrito
  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  //obtener los items del carrito
  getCartItems(): any[] {
    return this.cartItems;
  }

  //determinar si el carrito esta vacio
  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
