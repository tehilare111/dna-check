import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import {format} from 'date-fns'


@Directive({
  selector: '[dateValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateDirective, multi: true}]
})
export class DateDirective implements Validator {

  constructor() { }

   public validate(control: AbstractControl): {[key: string]: any} {
      let check = control.value
      if (check)
      { let date = typeof(check)=="string" ? new Date(check) : check; 
      check = format(date,"dd/MM/yyyy")
    }
    let regEx = /^\d\d\/\d\d\/\d\d\d\d$/i;
    let valid = regEx.test(check);
      return valid ? null : {'dateValidation': true};
    }
}

export function dateValidator(): ValidatorFn {
  let nameRe = /^\d\d\/\d\d\/\d\d\d\d$/i;
  return (control: AbstractControl): {[key: string]: any} | null => {
    let check = control.value
    if (check)
    { let date = typeof(check)=="string" ? new Date(check) : check; 
      check = format(date,"dd/MM/yyyy");}
    const forbidden = nameRe.test(check);
    return !forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}