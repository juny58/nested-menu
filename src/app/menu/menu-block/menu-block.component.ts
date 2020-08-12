import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MenuItemInterface } from '../menu.interface';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss'],
  host: { class: 'shadow position-absolute bg-white' }
})
export class MenuBlockComponent implements OnInit {

  @Input() menuItems: MenuItemInterface
  @Input() usedWidth: number

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // checking if the menublock is going outside of the mobile width including its own width, 150 is the each menu-block component's width
    if (this.usedWidth + 150 > window.innerWidth) {
      // if going outside, get it inside by showing the child on left instead of normal right
      this.elementRef.nativeElement.style.left = "-150px"
      this.usedWidth -= 150
    } else {
      this.elementRef.nativeElement.style.left = "150px"
      this.usedWidth += 150
    }
  }

  check() {
    console.log(this.usedWidth, window.innerWidth)
  }

}
