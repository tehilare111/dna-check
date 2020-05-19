import { Component, Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPosition,
  NbGlobalPhysicalPosition,
  NbToastrService,
  NbToastrConfig,
  NbIconConfig
} from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastrService: NbToastrService) {}

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];
  icons: NbIconConfig[] = [
    { icon: 'checkmark-circle-2-outline', pack: 'eva' },
    { icon: 'alert-triangle-outline', pack: 'eva' },
  ]

  alerts = {
    'success': {'type': this.types[1], 'icon': this.icons[0]},
    'fail': {'type': this.types[4], 'icon': this.icons[1]},
  }

  showToast(alert: string, title: string, body: string) {
    const config = {
      status: this.alerts[alert].type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
      icon: this.alerts[alert].icon
    };
    const titleContent = title ? `  ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
