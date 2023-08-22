import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems?: MenuItem[];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              console.log('Update');
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              console.log('Delete');
            },
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            // url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            // routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
}
