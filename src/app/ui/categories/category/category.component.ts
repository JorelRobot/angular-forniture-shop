import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input()
  imageUrl: string = 'https://github.com/JorelRobot/forniture-shop/blob/main/img/categoria1.jpg?raw=true';
}
