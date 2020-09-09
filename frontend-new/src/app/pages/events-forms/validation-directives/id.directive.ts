import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[idValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdDirective, multi: true}]
})
export class IdDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^[0-9]{7,9}$/i;
      let valid = regEx.test(control.value);
      return valid ? null : {'idValidation': true};
    }

}

export function idValidator(): ValidatorFn {
  let nameRe = /^[0-9]{7,9}$/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? {'signerId': {value: control.value}} : null;
  };
}