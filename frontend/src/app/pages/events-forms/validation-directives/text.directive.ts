import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';


@Directive({
  selector: '[textValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: TextDirective, multi: true}]
})
export class TextDirective implements Validator {

  constructor() { }

   public validate(control: AbstractControl): {[key: string]: any} {
      let regEx = /^.{0,100}$/i;
      let valid = regEx.test(control.value);
      return valid ? null : {'textValidation': true};
    }
}

export function textValidator(): ValidatorFn {
  let nameRe = /^.{0,100}$/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}