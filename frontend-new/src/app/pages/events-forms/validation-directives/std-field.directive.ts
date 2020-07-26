import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

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

export function stdFieldValidator(): ValidatorFn {
  let nameRe = /^.{0,30}$/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
