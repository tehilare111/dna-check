import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

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

export function markValidator(): ValidatorFn {
  let nameRe = /^(.{6}\-\d{3}|\d{9})$/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return !forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}