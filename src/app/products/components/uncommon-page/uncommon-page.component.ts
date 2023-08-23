import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  // i18nSelect:
  public name: string = 'Luciano';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.gender = this.gender === 'male' ? 'female' : 'male';
    this.name = this.name === 'Luciano' ? 'Emma' : 'Luciano';
  }

  // i18nPlural:
  public clients: string[] = ['Luciano', 'Emma', 'Elias', 'Daniel', 'Carlos'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos 1 cliente',
    other: 'tenemos # clientes',
  };

  removeClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe:
  public person = {
    name: 'Luciano',
    age: 42,
    address: 'Buenos Aires, Argentina',
    gender: 'male',
  };

  // Async Pipe:
  public myObservableTimer = interval(1000).pipe(
    tap((value) => console.log('Timer: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Value');
      console.log('Promise Value');
    }, 3500);
  });
}
