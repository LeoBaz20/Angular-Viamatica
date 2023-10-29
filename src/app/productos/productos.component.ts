import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productoservice/productos.service';
import { CarritoService } from '../carritoservice/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  products: any[] = [];
  selectedProduct: any | null = null;
  cart: any[] = [];


  constructor(private productService: ProductosService,private carritoService: CarritoService, private router :Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  irACarrito() {
    this.router.navigate(['carrito']);
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
  }

  addToCart(product: any) {
    this.carritoService.addToCart(product);
    console.log('Producto agregado al carrito:', product);
    alert("Se ha agregado el producto al carrito");
  }
}
