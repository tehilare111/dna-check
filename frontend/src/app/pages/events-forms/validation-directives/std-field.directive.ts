import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[stdFieldValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: StdFieldDirective, multi: true}]
})
export class StdFieldDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^.{0,30}$/i;
      let valid = regEx.test(control.value);
      return valid ? null : {'stdFieldValidation': true};
    }

}
