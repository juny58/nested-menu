import { Component, OnInit } from '@angular/core';
import { MenuItemInterface } from './menu.interface';
declare var require
var menuItems = require("./menu-items.json")

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems: MenuItemInterface = menuItems
}
