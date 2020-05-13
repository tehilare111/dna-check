import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[makatCopyValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: MakatCopyDirective, multi: true}]
})
export class MakatCopyDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^(.{0,12}|\d{3})$/i;
      let valid = regEx.test(control.value);
      
      return valid ? null : {'makatCopyValidation': true};
    }
}
