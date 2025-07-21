import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  id: number = 100;
  name: string = 'Papas fritas';
  price: number = 0.4;
}
