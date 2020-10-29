import { Inject, Injectable, LOCALE_ID, NgModule, Optional } from '@angular/core';
import { NB_DATE_SERVICE_OPTIONS, NbDateService, NbNativeDateService } from '@nebular/theme';
import parse from 'date-fns/parse';
import formatDate from 'date-fns/format';
import getWeek from 'date-fns/getWeek';

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDateFnsDateService extends NbNativeDateService {
    constructor(locale, options) {
        super(locale);
        this.options = options || {};
    }
    format(date, format) {
        if (date) {
            console.log(date)
            date = (typeof(date)=='string') ? new Date(date) : date
            return formatDate(date, format || this.options.format, this.options.formatOptions);
        }
        return '';
    }
    parse(date, format) {
        date = (typeof(date)=='string') ? new Date(date) : date
        return parse(date, format || this.options.format, new Date(), this.options.parseOptions);
    }
    getId() {
        return 'date-fns';
    }
    getWeekNumber(date) {
        date = (typeof(date)=='string') ? new Date(date) : date
        return getWeek(date, this.options.getWeekOptions);
    }
    getDateFormat() {
        return 'YYYY-MM-dd';
    }
}
NbDateFnsDateService.decorators = [
    { type: Injectable }
];
NbDateFnsDateService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_DATE_SERVICE_OPTIONS,] }] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const dateFnsServiceProvider = { provide: NbDateService, useClass: NbDateFnsDateService };
class NbDateFnsDateModule {
    static forRoot(options) {
        return {
            ngModule: NbDateFnsDateModule,
            providers: [
                dateFnsServiceProvider,
                { provide: NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    }
    static forChild(options) {
        return {
            ngModule: NbDateFnsDateModule,
            providers: [
                dateFnsServiceProvider,
                { provide: NB_DATE_SERVICE_OPTIONS, useValue: options },
            ],
        };
    }
}
NbDateFnsDateModule.decorators = [
    { type: NgModule, args: [{
                providers: [dateFnsServiceProvider],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NbDateFnsDateService, NbDateFnsDateModule };
