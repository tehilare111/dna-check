import { OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { RestApiService } from '../../services/rest-api.service';
import { AuthService } from '../../services/auth.service';
import { AppInjector } from '../../services/app-injector.service';


export abstract class FormBaseComponent implements OnInit {
  
  protected RestApiService: RestApiService;
  protected auth: AuthService;
  protected activatedRoute: ActivatedRoute;
  protected dialogService: NbDialogService;
  protected router: Router;

  constructor(
    ) { 
        this.RestApiService = AppInjector.injector.get(RestApiService);
        this.auth = AppInjector.injector.get(AuthService);
        this.activatedRoute = AppInjector.injector.get(ActivatedRoute);
        this.dialogService = AppInjector.injector.get(NbDialogService);
        this.router = AppInjector.injector.get(Router);
    }

  ngOnInit() {
    console.log('ngOnInit FormBaseComponent', typeof(this.RestApiService))
  }

}