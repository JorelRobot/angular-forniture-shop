import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  imageUrl: string = 'https://github.com/JorelRobot/forniture-shop/blob/main/img/producto1.jpg?raw=true';
}
