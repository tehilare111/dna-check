import { Injector, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInjector {

  private static _injector: Injector;

  /*constructor() { }*/

  static set injector(injector: Injector) {
    this._injector = injector;
  }

  static get injector(): Injector {
    return this._injector;
  }
}