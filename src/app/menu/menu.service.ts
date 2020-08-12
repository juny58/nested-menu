import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { MenuItemInterface } from './menu.interface';
declare var require
var menuItems = require("./menu-items.json")

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenudata(): Observable<MenuItemInterface> {
    // API does not have enough data
    //return this.httpClient.get<MenuItemInterface>("https://96f494a7-9619-480a-afa3-1b07af4a30d8.mock.pstmn.io/api/web/location-options")
    return new Observable(observable => {
      observable.next(menuItems)
    })
  }
}
