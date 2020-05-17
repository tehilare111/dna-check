import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
      <span class="created-by">
        דלתא - מס' טלפון: 6630
      </span>
      <div class="socials">
        <p> פלגת חו"ד בשבילך ♥</p>  
      </div>
  `,
})
export class FooterComponent {
}
