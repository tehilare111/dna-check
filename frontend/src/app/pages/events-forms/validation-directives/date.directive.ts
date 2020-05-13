import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[dateValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateDirective, multi: true}]
})
export class DateDirective implements Validator {

  constructor() { }

   public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^\d\d\/\d\d\/\d\d\d\d$/i;
      let valid = regEx.test(control.value);
      return valid ? null : {'dateValidation': true};
    }
}