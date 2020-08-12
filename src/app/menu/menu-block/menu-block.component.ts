import { Component, OnInit, Input } from '@angular/core';
import { MenuItemInterface } from '../menu.interface';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss'],
  host: {class: 'shadow position-absolute'}
})
export class MenuBlockComponent implements OnInit {

  @Input() menuItems: MenuItemInterface

  constructor() { }

  ngOnInit(): void {
  }

}
