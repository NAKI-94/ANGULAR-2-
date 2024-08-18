import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

interface Product {
  id: number;
  name : string;
  price : number;
}

const PRODUCTS:Product[]=[
  {id:1, name:"productos A", price: 10},
  {id:2, name:"productos B", price: 20},
  {id:3, name:"productos C", price: 30},
  {id:4, name:"productos D", price: 40}
]


@Component({
  selector: 'app-signal-ejemplo7',
  standalone: true,
  imports: [MatButton,NgFor,NgIf],
  templateUrl: './signal-ejemplo7.component.html',
  styleUrl: './signal-ejemplo7.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export   default class SignalEjemplo7Component {
  Products =signal(PRODUCTS);
  cart =signal <Product[]>([]);


  totalPrice = computed(  ()=>{
    return this.cart().reduce( (acc, curr)=> acc +curr.price, 0)
  })

  selectProductsIds =computed(()=>{
    return this.cart().map((product)=>product.id);
  })

  addToCart(product:Product){
    this.cart.update((products)=>{
      return [...products, product]
    })
  }

  removeFromCart(product:Product){
    this.cart.update ((products )=>{
      return products.filter((pro)=>pro.id !== product.id)
    })
  }

}
