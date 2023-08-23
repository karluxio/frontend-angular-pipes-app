import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Spiderman', canFly: false, color: Color.red },
    { name: 'Wonder Woman', canFly: true, color: Color.red },
    { name: 'Flash', canFly: true, color: Color.red },
    { name: 'Aquaman', canFly: true, color: Color.blue },
    { name: 'Hulk', canFly: true, color: Color.green },
    { name: 'Hawkeye', canFly: true, color: Color.green },
    { name: 'Black Widow', canFly: true, color: Color.black },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Deadpool', canFly: true, color: Color.red },
    { name: 'Captain America', canFly: true, color: Color.red },
  ];

  public orderBy?: keyof Hero | '';

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(key: keyof Hero | '') {
    this.orderBy = key;
  }
}
