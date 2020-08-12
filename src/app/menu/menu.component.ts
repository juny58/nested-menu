import { Component, OnInit } from '@angular/core';
import { MenuItemInterface } from './menu.interface';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItemInterface
  showMenu: boolean = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenudata().subscribe((data: MenuItemInterface) => {
      this.menuItems = data
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

}
