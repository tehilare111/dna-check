import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[markValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: MarkDirective, multi: true}]
})
export class MarkDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^(.{6}\-\d{3}|\d{9})$/i;
      let valid = regEx.test(control.value);
      
      return valid ? null : {'markValidation': true};
    }
}
