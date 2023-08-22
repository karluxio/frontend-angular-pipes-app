import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower = 'figueroa';
  public nameUpper = 'FIGUEROA';
  public nameFull = 'FiGueRoa luCiANo';
  public customDate = new Date();
}
