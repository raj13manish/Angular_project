import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  proceedToCheckout() {
    this.cartService.clearCart(); // Assuming you have a clearCart method in your cartService
    this.router.navigate(['/']); // Navigate to home page
  }
}