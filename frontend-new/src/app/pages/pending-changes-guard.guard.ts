import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import{Injectable}from '@angular/core'

export interface componentCanDeactivate {
  canDeactivate:() => boolean |  Observable<boolean> ;
}

export class PendingChangesGuardGuard implements CanDeactivate<componentCanDeactivate> {
  canDeactivate(component: componentCanDeactivate): boolean | Observable<boolean> {
    if(component['fieldsValid']==true) 
    {return component.canDeactivate ? confirm("האם ברצונך לעזוב את הדף ? ייתכן שהשינויים שביצעת לא יישמרו.") :true ;}
    else {return true}
  }
}