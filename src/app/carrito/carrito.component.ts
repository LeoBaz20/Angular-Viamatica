import { Component } from '@angular/core';
import { CarritoService } from '../carritoservice/carrito.service';
import { FacturaComponent } from '../factura/factura.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: any[] = [];
  isCartEmpty: boolean = true;

  constructor(private carritoService: CarritoService, private dialog: MatDialog) {
    this.carrito = this.carritoService.getCartItems();
    this.isCartEmpty = this.carrito.length === 0;
  }

  removeFromCarrito(product: any) {
    this.carritoService.removeFromCart(product);
    console.log('Producto eliminado del carrito:', product);
    this.isCartEmpty = this.carritoService.isCartEmpty();
  }

  generarFactura() {
    const dialogRef = this.dialog.open(FacturaComponent, {
      width: '600px',
      data: { cart: this.carrito } 
    });
  }
}
