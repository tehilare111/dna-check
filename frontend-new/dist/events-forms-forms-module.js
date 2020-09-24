(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-forms-forms-module"],{

/***/ "./src/app/pages/events-forms/components/chat/bot-replies.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/bot-replies.ts ***!
  \*******************************************************************/
/*! exports provided: gifsLinks, imageLinks, botReplies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gifsLinks", function() { return gifsLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLinks", function() { return imageLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "botReplies", function() { return botReplies; });
var botAvatar = 'https://i.ytimg.com/vi/Erqi5ckVoEo/hqdefault.jpg';
var gifsLinks = [
    'https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif',
    'https://i.gifer.com/no.gif',
    'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
    'http://www.reactiongifs.com/r/wnd1.gif',
];
var imageLinks = [
    'https://picsum.photos/320/240/?image=357',
    'https://picsum.photos/320/240/?image=556',
    'https://picsum.photos/320/240/?image=339',
    'https://picsum.photos/320/240/?image=387',
    'https://picsum.photos/320/240/?image=30',
    'https://picsum.photos/320/240/?image=271',
];
var fileLink = 'http://google.com';
var botReplies = [
    {
        regExp: /([H,h]ey)|([H,h]i)/g,
        answerArray: ['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([H,h]elp)/g,
        answerArray: ["No problem! Try sending a message containing word \"hey\", \"image\",\n    \"gif\", \"file\", \"map\", \"quote\", \"file group\" to see different message components"],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([I,i]mage)|(IMAGE)|([P,p]ic)|(Picture)/g,
        answerArray: ['Hey look at this!', 'Ready to work', 'Yes, master.'],
        type: 'pic',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: '',
                    type: 'image/jpeg',
                },
            ],
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([G,g]if)|(GIF)/g,
        type: 'gif',
        answerArray: ['No problem', 'Well done', 'You got it man'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: '',
                    type: 'image/gif',
                },
            ],
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([F,f]ile group)|(FILE)/g,
        type: 'group',
        answerArray: ['Take it!', 'Job Done.', 'As you wish'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: fileLink,
                    icon: 'nb-compose',
                },
                {
                    url: '',
                    type: 'image/gif',
                },
                {
                    url: '',
                    type: 'image/jpeg',
                },
            ],
            icon: 'nb-compose',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([F,f]ile)|(FILE)/g,
        type: 'file',
        answerArray: ['Take it!', 'Job Done.', 'As you wish'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'file',
            files: [
                {
                    url: fileLink,
                    icon: 'nb-compose',
                },
            ],
            icon: 'nb-compose',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([M,m]ap)|(MAP)/g,
        type: 'map',
        answerArray: ['Done.', 'My sight is yours.', 'I shall be your eyes.'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'map',
            latitude: 53.914321,
            longitude: 27.5998355,
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /([Q,q]uote)|(QUOTE)/g,
        type: 'quote',
        answerArray: ['Quoted!', 'Say no more.', 'I gladly obey.'],
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            type: 'quote',
            quote: '',
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
    {
        regExp: /(.*)/g,
        answerArray: ['Hello there! Try typing "help"'],
        type: 'text',
        reply: {
            text: '',
            reply: false,
            date: new Date(),
            user: {
                name: 'Bot',
                avatar: botAvatar,
            },
        },
    },
];


/***/ }),

/***/ "./src/app/pages/events-forms/components/chat/chat.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/chat.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\n    <nb-chat title=\"שיח רציף\" size=\"large\" status=\"primary\">\n    <nb-chat-message *ngFor=\"let msg of messages\"\n                        [type]=\"msg.type\"\n                        [message]=\"msg.text\"\n                        [reply]=\"msg.reply\"\n                        [sender]=\"msg.user.name\"\n                        [date]=\"msg.date\"\n                        [files]=\"msg.files\"\n                        [quote]=\"msg.quote\"\n                        [latitude]=\"msg.latitude\"\n                        [longitude]=\"msg.longitude\"\n                        [avatar]=\"msg.user.avatar\">\n    </nb-chat-message>\n    <nb-chat-form (send)=\"sendMessage($event)\" [dropFiles]=\"false\">\n    </nb-chat-form>\n    </nb-chat>\n</div>"

/***/ }),

/***/ "./src/app/pages/events-forms/components/chat/chat.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/chat.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ::ng-deep nb-layout-column {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.nb-theme-default :host nb-chat {\n  margin: 3rem auto 0;\n  width: 500px; }\n.nb-theme-default :host .chat-container {\n  margin-bottom: 2rem; }\n.nb-theme-default :host .chat-container li {\n    padding-top: 1rem; }\n.nb-theme-default :host .chart-description {\n  text-align: center;\n  margin: 0 auto;\n  width: 52%; }\n.nb-theme-default :host .chart-features {\n  margin-top: 2.75rem; }\n@media (max-width: 1599.98px) {\n  .nb-theme-default :host nb-chat {\n    width: 400px; } }\n@media (max-width: 991.98px) {\n  .nb-theme-default :host nb-chat {\n    width: 400px; }\n  .nb-theme-default :host .chart-description {\n    width: 90%; } }\n@media (max-width: 575.98px) {\n  .nb-theme-default :host nb-chat {\n    width: 300px; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ::ng-deep nb-layout-column {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.nb-theme-cosmic :host nb-chat {\n  margin: 3rem auto 0;\n  width: 500px; }\n.nb-theme-cosmic :host .chat-container {\n  margin-bottom: 2rem; }\n.nb-theme-cosmic :host .chat-container li {\n    padding-top: 1rem; }\n.nb-theme-cosmic :host .chart-description {\n  text-align: center;\n  margin: 0 auto;\n  width: 52%; }\n.nb-theme-cosmic :host .chart-features {\n  margin-top: 2.75rem; }\n@media (max-width: 1599.98px) {\n  .nb-theme-cosmic :host nb-chat {\n    width: 400px; } }\n@media (max-width: 991.98px) {\n  .nb-theme-cosmic :host nb-chat {\n    width: 400px; }\n  .nb-theme-cosmic :host .chart-description {\n    width: 90%; } }\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host nb-chat {\n    width: 300px; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host ::ng-deep nb-layout-column {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.nb-theme-corporate :host nb-chat {\n  margin: 3rem auto 0;\n  width: 500px; }\n.nb-theme-corporate :host .chat-container {\n  margin-bottom: 2rem; }\n.nb-theme-corporate :host .chat-container li {\n    padding-top: 1rem; }\n.nb-theme-corporate :host .chart-description {\n  text-align: center;\n  margin: 0 auto;\n  width: 52%; }\n.nb-theme-corporate :host .chart-features {\n  margin-top: 2.75rem; }\n@media (max-width: 1599.98px) {\n  .nb-theme-corporate :host nb-chat {\n    width: 400px; } }\n@media (max-width: 991.98px) {\n  .nb-theme-corporate :host nb-chat {\n    width: 400px; }\n  .nb-theme-corporate :host .chart-description {\n    width: 90%; } }\n@media (max-width: 575.98px) {\n  .nb-theme-corporate :host nb-chat {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvY2hhdC9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvY2hhdC9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvY2hhdC9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudHMtZm9ybXMvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcenhhczlcXHByb2plY3RzXFxkbmFcXGZyb250ZW5kLW5ldy9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2NoYXQvQzpcXFVzZXJzXFx6eGFzOVxccHJvamVjdHNcXGRuYVxcZnJvbnRlbmQtbmV3L25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvY2hhdC9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29zbWljLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2NoYXQvQzpcXFVzZXJzXFx6eGFzOVxccHJvamVjdHNcXGRuYVxcZnJvbnRlbmQtbmV3L25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ldmVudHMtZm9ybXMvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcenhhczlcXHByb2plY3RzXFxkbmFcXGZyb250ZW5kLW5ldy9zcmNcXGFwcFxccGFnZXNcXGV2ZW50cy1mb3Jtc1xcY29tcG9uZW50c1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FDSkg7Ozs7R0FJRztBQUdIOztHQUVHO0FDVEg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FDdlRGOzs7O0dBSUc7QUNKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBR3ZURjs7OztHQUlHO0FGSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBSXZURjs7OztHQUlHO0FISkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRHBNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWhJSjtFQUNFLHlCQUF1QjtNQUF2QixzQkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLHFCQUFhO0VBQWIscUJBQWE7RUFBYixjQUFhLEVBQ2Q7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7QUFFRDtFQUNFLG9CQUFtQixFQUtwQjtBQUhDO0lBQ0Usa0JBQWlCLEVBQ2xCO0FBR0g7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFdBQVUsRUFDWDtBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FQd0JDO0VPckJBO0lBQ0UsYUFBWSxFQUNiLEVBQUE7QVBtQkQ7RU9mQTtJQUNFLGFBQVksRUFDYjtFQUVEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7QVBTRDtFT0xBO0lBQ0UsYUFBWSxFQUNiLEVBQUE7QU44REQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1oSUo7RUFDRSx5QkFBdUI7TUFBdkIsc0JBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QixxQkFBYTtFQUFiLHFCQUFhO0VBQWIsY0FBYSxFQUNkO0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiO0FBRUQ7RUFDRSxvQkFBbUIsRUFLcEI7QUFIQztJQUNFLGtCQUFpQixFQUNsQjtBQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxXQUFVLEVBQ1g7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjtBUHdCQztFT3JCQTtJQUNFLGFBQVksRUFDYixFQUFBO0FQbUJEO0VPZkE7SUFDRSxhQUFZLEVBQ2I7RUFFRDtJQUNFLFdBQVUsRUFDWCxFQUFBO0FQU0Q7RU9MQTtJQUNFLGFBQVksRUFDYixFQUFBO0FOOEREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FNaElKO0VBQ0UseUJBQXVCO01BQXZCLHNCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWEsRUFDZDtBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGFBQVksRUFDYjtBQUVEO0VBQ0Usb0JBQW1CLEVBS3BCO0FBSEM7SUFDRSxrQkFBaUIsRUFDbEI7QUFHSDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsV0FBVSxFQUNYO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QVB3QkM7RU9yQkE7SUFDRSxhQUFZLEVBQ2IsRUFBQTtBUG1CRDtFT2ZBO0lBQ0UsYUFBWSxFQUNiO0VBRUQ7SUFDRSxXQUFVLEVBQ1gsRUFBQTtBUFNEO0VPTEE7SUFDRSxhQUFZLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuJGdyaWQtY29sdW1uczogMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZTogMjRweCAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aHM6IChcbiAgeHM6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBzbTogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIG1kOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbGc6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICB4bDogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2VcbikgIWRlZmF1bHQ7XG5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIGlzOiA0MDBweCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDAwcHgsXG4gIHh4eGw6IDE2MDBweFxuKTtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIGlzOiAzODBweCxcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHgsXG4gIHh4eGw6IDE1MDBweFxuKTtcblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ2NvcmUvYnJlYWtpbmctbm90aWNlJztcblxuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzOiBmYWxzZSAhZ2xvYmFsO1xuXG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgJHRtcDogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgICBAaWYgKCR0bXAgIT0gbnVsbCkge1xuICAgICAgQHJldHVybiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICR0bXApO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gY29udmVydC10by1jc3MtdmFyaWFibGVzKCR2YXJpYWJsZXMpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAkcmVzdWx0OiBtYXAtc2V0KCRyZXN1bHQsICR2YXIsICctLXZhcigjeyR2YXJ9KScpO1xuICB9XG5cbiAgQGRlYnVnICRyZXN1bHQ7XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4gICAgXG4vLyBBZGQgY29udGVudCBmb3IgdGhlbWUgaW50byBhIGxpc3Qgb2YgdGhlbWVzXG5AbWl4aW4gbmItZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJHRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBBZGQgY29udGVudCBleGNlcHQgZm9yIHRoZW1lIGludG8gYSBsaXN0IG9mIHRoZW1lc1xuQG1peGluIG5iLWV4Y2VwdC1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICAkdGVtcDogbmItYnJlYWtpbmctbm90aWNlLXNob3coJHRoZW1lKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1yYWRpYWwtZ3JhZGllbnQoJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMykge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItMjsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpkeGltYWdldHJhbnNmb3JtLm1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSckY29sb3ItMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yc3RyPSckY29sb3ItMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWRpZW50VHlwZT0xKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG5AbWl4aW4gbmItcmlnaHQtZ3JhZGllbnQoJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjNDBkYzdlLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctZGlzYWJsZWQ6IHRhYnMtZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1kaXNhYmxlZDogcm91dGUtdGFicy1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNwaW5uZXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHNwaW5uZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIHNwaW5uZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHNwaW5uZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgc3Bpbm5lci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBzcGlubmVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHNwaW5uZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHNwaW5uZXIteHhzbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci14c21hbGw6IDEuNXJlbSxcbiAgc3Bpbm5lci1zbWFsbDogMS43NXJlbSxcbiAgc3Bpbm5lci1tZWRpdW06IDJyZW0sXG4gIHNwaW5uZXItbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXIteGxhcmdlOiAyLjVyZW0sXG4gIHNwaW5uZXIteHhsYXJnZTogM3JlbSxcblxuICBzdGVwcGVyLWluZGV4LXNpemU6IDJyZW0sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC1zaXplOiBmb250LXNpemUtc20sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHN0ZXBwZXItY29tcGxldGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgc3RlcHBlci1mZzogY29sb3ItZmcsXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24tc2l6ZTogMS41cmVtLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXdlaWdodDogZm9udC13ZWlnaHQtdWx0cmEtYm9sZCxcbiAgc3RlcHBlci1zdGVwLXBhZGRpbmc6IHBhZGRpbmcsXG5cbiAgYWNjb3JkaW9uLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjY29yZGlvbi1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBhY2NvcmRpb24tc2VwYXJhdG9yLFxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhY2NvcmRpb24taXRlbS1iZzogY29sb3ItYmcsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taXRlbS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBhY2NvcmRpb24taXRlbS1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBhY2NvcmRpb24taXRlbS1zaGFkb3c6IHNoYWRvdyxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLWNvbG9yOiB0YWJzLXNlcGFyYXRvcixcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIxLjg3NXJlbSxcbiAgY2FsZW5kYXItYm9keS1oZWlnaHQ6IDI1LjYyNXJlbSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLXhsZyxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC10aGluLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWhvdmVyLWl0ZW0tYmc6IGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmcsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBjYWxlbmRhci1zZWxlY3RlZC1mZzogY29sb3Itd2hpdGUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjYWxlbmRhci1mZyxcbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLWluYWN0aXZlLW9wYWNpdHk6IDAuNSxcbiAgY2FsZW5kYXItZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogMS43NXJlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXNpemU6IGZvbnQtc2l6ZS14cyxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYWxlbmRhci13ZWVrZGF5LWZnOiBjb2xvci1mZyxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LWZnOiBjb2xvci1kYW5nZXIsXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZWJmYmYyLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyNC4zNzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmc6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgdG9vbHRpcC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRvb2x0aXAtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgdG9vbHRpcC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgdG9vbHRpcC1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuICB0b29sdGlwLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuXG4gIHNlbGVjdC1ib3JkZXItd2lkdGg6IDJweCxcbiAgc2VsZWN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBzZWxlY3QtYmc6IGNvbG9yLWJnLFxuXG4gIHNlbGVjdC1jaGVja2JveC1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3QtY2hlY2ttYXJrLWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogI2YyZjRmNyxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIHNlbGVjdC1vcHRpb24tcGFkZGluZzogMC43NXJlbSAxLjVyZW0sXG5cbiAgZGF0ZXBpY2tlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZGF0ZXBpY2tlci1iZzogY29sb3ItYmcsXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG4gIGRhdGVwaWNrZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICByYWRpby1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWZnOiBjb2xvci1mZy10ZXh0LFxuICByYWRpby1zaXplOiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmFkaW8tYm9yZGVyLWNvbG9yLFxuICByYWRpby1kaXNhYmxlZC1jaGVja21hcms6IHJhZGlvLWNoZWNrbWFyayxcblxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLWNvbG9yOiBzZXBhcmF0b3IsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1mb250LXdlaWdodDogYm9sZCxcbiAgdHJlZS1ncmlkLWhlYWRlci1iZzogY29sb3ItYmcsXG4gIHRyZWUtZ3JpZC1mb290ZXItYmc6IGNvbG9yLWJnLFxuICB0cmVlLWdyaWQtcm93LWJnOiBjb2xvci1iZyxcbiAgdHJlZS1ncmlkLXJvdy1iZy1ldmVuOiBjb2xvci1iZyxcbiAgdHJlZS1ncmlkLXJvdy1ob3Zlci1iZzogY29sb3ItYmcsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tY29sb3I6IGNvbG9yLWZnLXRleHQsXG4gIHRyZWUtZ3JpZC1pY29uLWNvbG9yOiBjb2xvci1mZy10ZXh0LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIHJhZGl1czogMC41cmVtLFxuXG4gIGNvbG9yLWJnOiAjM2QzNzgwLFxuICBjb2xvci1iZy1hY3RpdmU6ICNmZmYsXG4gIGNvbG9yLWZnOiAjYTFhMWU1LFxuICBjb2xvci1mZy1oZWFkaW5nOiAjZmZmZmZmLFxuICBjb2xvci1mZy10ZXh0OiAjZDFkMWZmLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICMwMGY5YTYsXG5cbiAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgY29sb3Itd2hpdGU6ICNmZmZmZmYsXG4gIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG5cbiAgY29sb3ItcHJpbWFyeTogIzc2NTlmZixcbiAgY29sb3Itc3VjY2VzczogIzAwZDk3NyxcbiAgY29sb3ItaW5mbzogIzAwODhmZixcbiAgY29sb3Itd2FybmluZzogI2ZmYTEwMCxcbiAgY29sb3ItZGFuZ2VyOiAjZmYzODZhLFxuXG4gIGxpbmstY29sb3I6ICMwMGY5YTYsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMxNGZmYmUsXG5cbiAgc2VwYXJhdG9yOiAjMzQyZTczLFxuICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDQwLCAzNywgODksIDAuNiksXG5cbiAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcblxuICBsYXlvdXQtYmc6ICNmZmYsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjNTU0ZGIzLFxuICBzY3JvbGxiYXItYmc6ICMzMzJlNzMsXG5cbiAgcmFkaWFsLWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICM0MjNmOGMsICMzMDJjNmUpLFxuICBsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc2lkZWJhci1mZzogY29sb3Itc2Vjb25kYXJ5LFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcblxuICBoZWFkZXItZmc6IGNvbG9yLXdoaXRlLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIGZvb3Rlci1mZzogY29sb3ItZmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG5cbiAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHVzZXItZmc6IGNvbG9yLWJnLFxuICB1c2VyLWJnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhpZ2hsaWdodCxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgcG9wb3Zlci1zaGFkb3c6IHNoYWRvdyxcblxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IGhlYWRlci1oZWlnaHQsXG5cbiAgc2lkZWJhci13aWR0aDogMTYuMjVyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy40NXJlbSxcblxuICBtZW51LWZnOiBjb2xvci1mZyxcbiAgbWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgbWVudS1ncm91cC1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1zdWJtZW51LWJnOiBsYXlvdXQtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtLFxuICBtZW51LWl0ZW0tc2VwYXJhdG9yOiB0cmFuc3BhcmVudCxcblxuICBidG4taGVyby1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDMzLCA3LCA3NywgMC41KSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgM3B4IDAgMCxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDJweCA4cHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtYmc6ICMzNzMyNzMsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICMzMTJjNjYsXG5cbiAgZm9ybS1jb250cm9sLWJnOiAjMzczMTdhLFxuICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHNlYXJjaC1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICMzYTM0N2EsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogY29sb3ItYmctYWN0aXZlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDJweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMiksXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoNjEsIDU1LCAxMjgsIDAuOSksXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDIwZGVnLFxuXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogIzRlNDA5NSxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogIzM1MmY2ZSxcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjMzEyZTc1LFxuXG4gIHRvYXN0ci1jb2xvci1mZzogY29sb3Itd2hpdGUsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjI1cmVtLFxuICB0b2FzdHItYm9yZGVyOiAwLFxuICB0b2FzdHItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjYmNjM2NjLFxuXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3Itd2hpdGUsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIGRhdGVwaWNrZXItc2hhZG93OiBzaGFkb3csXG5cbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1wcmltYXJ5LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4vLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4kdGhlbWU6IChcbiAgaGVhZGVyLWZnOiAjZjdmYWZiLFxuICBoZWFkZXItYmc6ICMxMTEyMTgsXG5cbiAgbGF5b3V0LWJnOiAjZjFmNWY4LFxuXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICMxODE4MTgsXG4gIGNvbG9yLWZnLXRleHQ6ICM0YjRiNGIsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogY29sb3ItZmcsXG5cbiAgc2VwYXJhdG9yOiAjY2RkNWRjLFxuXG4gIHJhZGl1czogMC4xN3JlbSxcblxuICBzY3JvbGxiYXItYmc6ICNlM2U5ZWUsXG5cbiAgY29sb3ItcHJpbWFyeTogIzczYTFmZixcbiAgY29sb3Itc3VjY2VzczogIzVkY2ZlMyxcbiAgY29sb3ItaW5mbzogI2JhN2ZlYyxcbiAgY29sb3Itd2FybmluZzogI2ZmYTM2YixcbiAgY29sb3ItZGFuZ2VyOiAjZmY2YjgzLFxuXG4gIGJ0bi1zZWNvbmRhcnktYmc6ICNlZGYyZjUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZWRmMmY1LFxuXG4gIGFjdGlvbnMtZmc6ICNkM2RiZTUsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHNpZGViYXItYmc6ICNlM2U5ZWUsXG5cbiAgYm9yZGVyLWNvbG9yOiAjZDVkYmUwLFxuXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1iZzogI2UzZTllZSxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBtZW51LWJnLFxuXG4gIG1lbnUtc3VibWVudS1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiAjY2RkNWRjLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWFjdGl2ZS1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAuMTI1cmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1jb250YWluZXItcGFkZGluZzogMCAxLjI1cmVtLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMC41cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMGRlZyxcbiAgYnRuLWhlcm8tcHJpbWFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8td2FybmluZy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiBidG4tYm9yZGVyLXJhZGl1cyxcblxuICBjYXJkLXNoYWRvdzogbm9uZSxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1jb2xvcixcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwLFxuXG4gIGxpbmstY29sb3I6ICM1ZGNmZTMsXG4gIGxpbmstY29sb3ItaG92ZXI6ICM3ZGNmZTMsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBhY3Rpb25zLXNlcGFyYXRvcjogI2YxZjRmNSxcblxuICBtb2RhbC1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZXBhcmF0b3I6ICNlYmVjZWUsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcblxuICByb3V0ZS10YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1zaGFkb3c6IG5vbmUsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcbiAgZm9vdGVyLWZnLWhpZ2hsaWdodDogIzJhMmEyYSxcblxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjYTJiMmM3LFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlM2VjZmUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjb2xvci13aGl0ZSxcblxuICB0b2FzdHItaWNvbi1yYWRpdXM6IHJhZGl1cyxcblxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL21peGlucy9icmVha3BvaW50cyc7XG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2dsb2JhbC9icmVha3BvaW50cyc7XG5cbkBpbXBvcnQgJy4uLy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIDo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgbmItY2hhdCB7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG8gMDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cblxuICAuY2hhdC1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAuY2hhcnQtZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNTIlO1xuICB9XG5cbiAgLmNoYXJ0LWZlYXR1cmVzIHtcbiAgICBtYXJnaW4tdG9wOiAyLjc1cmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHh4bCkge1xuICAgIG5iLWNoYXQge1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgIG5iLWNoYXQge1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cblxuICAgIC5jaGFydC1kZXNjcmlwdGlvbiB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihpcykge1xuICAgIG5iLWNoYXQge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/components/chat/chat.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/chat.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/pages/events-forms/components/chat/chat.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messages = this.chatService.loadMessages();
        //if (!this.messages) { this.messages = []; }
    }
    ChatComponent.prototype.ngOnInit = function () {
        //if (!this.messages) { this.messages = []; }
    };
    ChatComponent.prototype.sendMessage = function (event) {
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'nb-compose',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: false,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'ישראל ישראלי',
            },
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/events-forms/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/events-forms/components/chat/chat.component.scss")],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/components/chat/chat.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/chat.service.ts ***!
  \********************************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/app/pages/events-forms/components/chat/messages.ts");
/* harmony import */ var _bot_replies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bot-replies */ "./src/app/pages/events-forms/components/chat/bot-replies.ts");




var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    ChatService.prototype.loadMessages = function () {
        return _messages__WEBPACK_IMPORTED_MODULE_2__["messages"];
    };
    ChatService.prototype.loadBotReplies = function () {
        return _bot_replies__WEBPACK_IMPORTED_MODULE_3__["botReplies"];
    };
    ChatService.prototype.reply = function (message) {
        var botReply = this.loadBotReplies()
            .find(function (reply) { return message.search(reply.regExp) !== -1; });
        if (botReply.reply.type === 'quote') {
            botReply.reply.quote = message;
        }
        if (botReply.type === 'gif') {
            botReply.reply.files[0].url = _bot_replies__WEBPACK_IMPORTED_MODULE_3__["gifsLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_3__["gifsLinks"].length)];
        }
        if (botReply.type === 'pic') {
            botReply.reply.files[0].url = _bot_replies__WEBPACK_IMPORTED_MODULE_3__["imageLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_3__["imageLinks"].length)];
        }
        if (botReply.type === 'group') {
            botReply.reply.files[1].url = _bot_replies__WEBPACK_IMPORTED_MODULE_3__["gifsLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_3__["gifsLinks"].length)];
            botReply.reply.files[2].url = _bot_replies__WEBPACK_IMPORTED_MODULE_3__["imageLinks"][Math.floor(Math.random() * _bot_replies__WEBPACK_IMPORTED_MODULE_3__["imageLinks"].length)];
        }
        botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, botReply.reply);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/components/chat/messages.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/events-forms/components/chat/messages.ts ***!
  \****************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
var messages = [
    {
        text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        reply: false,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: 'https://i.gifer.com/no.gif',
        },
    },
    {
        text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        reply: true,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: 'https://i.gifer.com/no.gif',
        },
    },
    {
        text: 'Hey looks at that pic I just found!',
        reply: false,
        date: new Date(),
        type: 'file',
        files: [
            {
                url: 'https://i.gifer.com/no.gif',
                type: 'image/jpeg',
                icon: false,
            },
        ],
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'What do you mean by that?',
        reply: false,
        date: new Date(),
        type: 'quote',
        quote: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'Meet me there',
        reply: true,
        date: new Date(),
        type: 'map',
        latitude: 40.714728,
        longitude: -73.998672,
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'מצורפות תמונות מהאירוע האחרון',
        reply: false,
        date: new Date(),
        type: 'file',
        files: [
            {
                url: 'https://i.gifer.com/no.gif',
                icon: 'file-text-outline',
            },
        ],
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        text: 'האם תוכלו להעלות קבצים נוספים?',
        reply: true,
        date: new Date(),
        user: {
            name: 'פלגת חוד',
            avatar: '',
        },
    },
];


/***/ }),

/***/ "./src/app/pages/events-forms/components/event-details/event-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-details/event-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-body>\n      <div style=\"display: flex; justify-content: center;\">\n        <h6><u>כותרת האירוע</u></h6>\n      </div>\n      <form class=\"form-horizontal\">\n        <div class=\"form-group row\">\n          <label for=\"reference\" class=\"label col-sm-3 form-control-label\">סימכוין:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" nbInput fullWidth name=\"reference\" id=\"reference\" placeholder=\"יינתן לאחר השליחה\" readonly [(ngModel)]=\"form.reference\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"eventType\" class=\"label col-sm-3 form-control-label\">סוג האירוע:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" nbInput fullWidth name=\"eventType\" id=\"eventType\" placeholder=\"סוג האירוע\" readonly [(ngModel)]=\"form.eventType\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"date\" class=\"label col-sm-3 form-control-label\">תאריך:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" nbInput fullWidth name=\"date\" id=\"date\" placeholder=\"תאריך:\" readonly [(ngModel)]=\"form.date\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"reporterName\" class=\"label col-sm-3 form-control-label\">שם מדווח:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" nbInput fullWidth name=\"reporterName\" id=\"reporterName\" placeholder=\"שם מדווח\" readonly [(ngModel)]=\"form.reporterName\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"reporterUnit\" class=\"label col-sm-3 form-control-label\">יחידת מדווח:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" nbInput fullWidth name=\"reporterUnit\" id=\"reporterUnit\" placeholder=\"יחידת מדווח\" readonly [(ngModel)]=\"form.reporterUnit\">\n          </div>\n        </div>\n      </form>\n    </nb-card-body>\n  </nb-card>"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-details/event-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-details/event-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-details/event-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-details/event-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");



var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent() {
        this.form = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__["Form"]();
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__["Form"])
    ], EventDetailsComponent.prototype, "form", void 0);
    EventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-event-details',
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/pages/events-forms/components/event-details/event-details.component.html"),
            styles: [__webpack_require__(/*! ./event-details.component.scss */ "./src/app/pages/events-forms/components/event-details/event-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-body>\n      <div style=\"display: flex; justify-content: center;\">\n        <h6><u>סטאטוס אירוע</u></h6>\n      </div>\n      <form class=\"form-horizontal\">\n        <div class=\"form-group row\">\n          <label for=\"eventStatus\" class=\"label col-sm-3 form-control-label\">סטאטוס אירוע</label>\n          <div class=\"col-sm-9\">\n            <nb-select [disabled]=\"readonly\" name=\"eventStatus\" id=\"eventStatus\" placeholder=\"סטאטוס אירוע\" [(ngModel)]=\"eventForm.eventStatus\">\n              <nb-option *ngFor=\"let status of eventStatusOptions\" [value]=\"status\">{{status}}</nb-option>\n            </nb-select>\n          </div>\n        </div>\n      </form>\n    </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2V2ZW50LXN0YXR1cy1zaG9ydGVkL2V2ZW50LXN0YXR1cy1zaG9ydGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EventStatusShortedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventStatusShortedComponent", function() { return EventStatusShortedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");



var EventStatusShortedComponent = /** @class */ (function () {
    function EventStatusShortedComponent() {
        this.eventForm = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__["EventForm"]();
        this.readonly = true;
        this.eventStatusOptions = [];
    }
    EventStatusShortedComponent.prototype.ngOnInit = function () {
    };
    EventStatusShortedComponent.prototype.pushFormFields = function (form) {
        form.eventStatus = this.eventForm.eventStatus;
        return form;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _events_forms_templates__WEBPACK_IMPORTED_MODULE_2__["EventForm"])
    ], EventStatusShortedComponent.prototype, "eventForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EventStatusShortedComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventStatusShortedComponent.prototype, "eventStatusOptions", void 0);
    EventStatusShortedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-event-status-shorted',
            template: __webpack_require__(/*! ./event-status-shorted.component.html */ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.html"),
            styles: [__webpack_require__(/*! ./event-status-shorted.component.scss */ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventStatusShortedComponent);
    return EventStatusShortedComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status/event-status.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status/event-status.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <div style=\"display: flex; justify-content: center;\">\n      <h6><u>סטאטוס אירוע</u></h6>\n    </div>\n    <form class=\"form-horizontal\">\n      <div class=\"form-group row\">\n        <label for=\"caseIdOnMetzah\" class=\"label col-sm-3 form-control-label\">מס' תיק במצ''ח</label>\n        <div class=\"col-sm-9\">\n          <input [readonly]=\"readonly\" type=\"email\" nbInput fullWidth name=\"caseIdOnMetzah\" id=\"caseIdOnMetzah\" placeholder=\"מס' תיק במצ''ח\" [(ngModel)]=\"eventForm.caseIdOnMetzah\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"handlingResults\" class=\"label col-sm-3 form-control-label\">תוצאות טיפול</label>\n        <div class=\"col-sm-9\">\n          <nb-select [disabled]=\"readonly\" name=\"handlingResults\" id=\"handlingResults\" placeholder=\"תוצאות טיפול\" [(ngModel)]=\"eventForm.handlingResults\">\n            <nb-option *ngFor=\"let result of results\" [value]=\"result\">{{result}}</nb-option>  \n          </nb-select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"eventStatus\" class=\"label col-sm-3 form-control-label\">סטאטוס אירוע</label>\n        <div class=\"col-sm-9\">\n          <nb-select [disabled]=\"readonly\" name=\"eventStatus\" id=\"eventStatus\" placeholder=\"סטאטוס אירוע\" [(ngModel)]=\"eventForm.eventStatus\">\n            <nb-option *ngFor=\"let status of eventStatusOptions\" [value]=\"status\">{{status}}</nb-option>  \n          </nb-select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"handlingStatus\" class=\"label col-sm-3 form-control-label\">סטאטוס טיפול</label>\n        <div class=\"col-sm-9\">\n          <nb-select [disabled]=\"readonly\" name=\"handlingStatus\" id=\"handlingStatus\" placeholder=\"סטאטוס טיפול\" [(ngModel)]=\"eventForm.handlingStatus\">\n            <nb-option *ngFor=\"let status of handlingStatusOptions\" [value]=\"status\">{{status}}</nb-option>  \n          </nb-select>\n        </div>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status/event-status.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status/event-status.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9jb21wb25lbnRzL2V2ZW50LXN0YXR1cy9ldmVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/components/event-status/event-status.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/event-status/event-status.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EventStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventStatusComponent", function() { return EventStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");




// import { JwtService } from '../../../../services/jwt.service';
var EventStatusComponent = /** @class */ (function () {
    function EventStatusComponent(RestApiService) {
        this.RestApiService = RestApiService;
        this.eventForm = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_3__["EventForm"]();
        this.readonly = true;
        this.constatns_array = [];
        this.eventStatusOptions = [];
        this.results = ["פתוח", "סגור"];
        this.handlingStatusOptions = ["אבד", "נמצא"];
    }
    EventStatusComponent.prototype.ngOnInit = function () {
        // this.get_constas_feilds()
    };
    EventStatusComponent.prototype.get_constas_feilds = function () {
        var _this = this;
        this.constatns_array = ["eventStatus", "hamdlingStatus"];
        this.RestApiService.getConstansFialdsNotPermissions(this.constatns_array).subscribe(function (data_from_server) {
            _this.eventStatusOptions = data_from_server.data.eventStatus;
            _this.handlingStatusOptions = data_from_server.data.handlingStatus;
        });
    };
    EventStatusComponent.prototype.pushFormFields = function (form) {
        form.caseIdOnMetzah = this.eventForm.caseIdOnMetzah;
        form.handlingResults = this.eventForm.handlingResults;
        form.eventStatus = this.eventForm.eventStatus;
        form.handlingStatus = this.eventForm.handlingStatus;
        return form;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _events_forms_templates__WEBPACK_IMPORTED_MODULE_3__["EventForm"])
    ], EventStatusComponent.prototype, "eventForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EventStatusComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventStatusComponent.prototype, "eventStatusOptions", void 0);
    EventStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-event-status',
            template: __webpack_require__(/*! ./event-status.component.html */ "./src/app/pages/events-forms/components/event-status/event-status.component.html"),
            styles: [__webpack_require__(/*! ./event-status.component.scss */ "./src/app/pages/events-forms/components/event-status/event-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], EventStatusComponent);
    return EventStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/file-download-button/file-download-button.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"row\">\n    <label class=\"label\">\n      {{this.getFileName(this.fileFullName)}}\n    </label>\n  </div>\n  <div class=\"row\">\n    <a [href]=\"fileFullName\" class=\"download\">\n      <nb-card status=\"primary\"><i class=\"ion-arrow-down-c\"></i></nb-card>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/file-download-button/file-download-button.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download {\n  width: 100%; }\n\n.download nb-card {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #3366ff;\n  border-color: #3366ff;\n  color: #ffffff; }\n\n.download nb-card i {\n  width: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvZmlsZS1kb3dubG9hZC1idXR0b24vQzpcXFVzZXJzXFx6eGFzOVxccHJvamVjdHNcXGRuYVxcZnJvbnRlbmQtbmV3L3NyY1xcYXBwXFxwYWdlc1xcZXZlbnRzLWZvcm1zXFxjb21wb25lbnRzXFxmaWxlLWRvd25sb2FkLWJ1dHRvblxcZmlsZS1kb3dubG9hZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxhQUFZO0VBQ1oscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7TUFBdkIsc0JBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBeUI7RUFDekIsc0JBQXFCO0VBQ3JCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvbXBvbmVudHMvZmlsZS1kb3dubG9hZC1idXR0b24vZmlsZS1kb3dubG9hZC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kb3dubG9hZCBuYi1jYXJke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzY2ZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzM2NmZmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZG93bmxvYWQgbmItY2FyZCBpe1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/events-forms/components/file-download-button/file-download-button.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FileDownloadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDownloadButtonComponent", function() { return FileDownloadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/toast.service */ "./src/app/services/toast.service.ts");




var FileDownloadButtonComponent = /** @class */ (function () {
    function FileDownloadButtonComponent(RestApiService, ToastService) {
        this.RestApiService = RestApiService;
        this.ToastService = ToastService;
    }
    FileDownloadButtonComponent.prototype.ngOnInit = function () {
    };
    /*getFile(value){
      this.RestApiService.getFile(url: string).subscribe(
        data => { this.downloadFile(data); },
        error => { this.ToastService.showToast('fail', 'בעיה בהורדת הקובץ', '') },
      );
    }
  
    downloadFile(data) {
      var blob = new Blob([data], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.download = "file name";
      anchor.href = url;
      anchor.click();
    }*/
    FileDownloadButtonComponent.prototype.getFileName = function (fileNameWithPath) {
        if (fileNameWithPath)
            return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileDownloadButtonComponent.prototype, "fileFullName", void 0);
    FileDownloadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-file-download-button',
            template: __webpack_require__(/*! ./file-download-button.component.html */ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.html"),
            styles: [__webpack_require__(/*! ./file-download-button.component.scss */ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], FileDownloadButtonComponent);
    return FileDownloadButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/corruption-form/corruption-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/events-forms/corruption-form/corruption-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row col-md-12\" id=\"outOfPrint\">\n  <nb-card *ngIf=\"auth.check_permissions(['מנהלן מערכת', 'מדווח אירועים'])\">\n    <button type=\"submit\" nbButton status=\"primary\" (click)=\"onSubmit()\">שלח אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\">\n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"updateEditState()\">פתח/סגור אירוע לעריכה</button>\n  </nb-card>\n  <nb-card > \n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"printForm()\">הדפס אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\">\n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"deleteEventForm()\">מחק אירוע</button>\n  </nb-card>\n</div>\n\n<div class=\"row\" id=\"print-section\">\n  <div class=\"col-md-3\">\n    <ngx-event-details [form]=\"corruptionForm\"></ngx-event-details>\n    <ngx-event-status #status [eventForm]=\"corruptionForm\" [readonly]=\"this.corruptionForm.editStateBlocked\" [eventStatusOptions]=\"eventStatusOptions\"></ngx-event-status>\n  </div>\n\n  <div class=\"col-md-9\">\n    <nb-card>\n      <nb-card-body>\n        <div style=\"display: flex; justify-content: center;\">\n          <h6><u>פרטי האירוע</u></h6>\n        </div>\n        <form> <!--[ngFormOptions]=\"{updateOn: 'blur'}\">-->\n          <h6>פרטי החתום האחרון:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"signerUnit\" class=\"label\">יחידת החתום</label>\n                <nb-select [disabled]=\"this.corruptionForm.editStateBlocked\" name=\"signerUnit\" id=\"signerUnit\" status=\"primary\" placeholder=\"יחידת החתום\" [(ngModel)]=\"corruptionForm.signerUnit\">\n                  <nb-option *ngFor=\"let unit of units\" [value]=\"unit\">{{unit}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"signerName\" class=\"label\">שם החתום</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #signerName=\"ngModel\" name=\"signerName\" id=\"signerName\" status=\"primary\" placeholder=\"שם החתום\" [(ngModel)]=\"corruptionForm.signerName\" stdFieldValidation>\n                <div *ngIf=\"signerName.invalid&&signerName.dirty\"><label class=\"label red\">מוגבל ל-30 תווים</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"signerId\" class=\"label\">מ.א./ת.ז.</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"signerId\" id=\"signerId\" #signerId=\"ngModel\" status=\"primary\" placeholder=\"מ.א./ת.ז.\" [(ngModel)]=\"corruptionForm.signerId\" idValidation>\n                <div *ngIf=\"signerId.invalid&&signerId.dirty\" (click)=\"console.log(signerId)\"><label class=\"label red\">ת.ז מורכב מ-9 ספרות</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"rank\" class=\"label\">דרגה</label>\n                <div>\n                </div>\n                <nb-select [disabled]=\"this.corruptionForm.editStateBlocked\" name=\"rank\" id=\"rank\" status=\"primary\" placeholder=\"דרגה\" [(ngModel)]=\"corruptionForm.rank\">\n                  <nb-option *ngFor=\"let rank of ranks\" [value]=\"rank\">{{rank}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"position\" class=\"label\">תפקיד</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #position=\"ngModel\" name=\"position\" id=\"position\" status=\"primary\" placeholder=\"תפקיד\" [(ngModel)]=\"corruptionForm.position\" stdFieldValidation>\n                <div *ngIf=\"position.invalid&&position.dirty\"><label class=\"label red\">מוגבל ל-30 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6>פרטי הדיווח:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"eventDate\" class=\"label\">תאריך גילוי האירוע</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"eventDate\" id=\"eventDate\" #eventDate=\"ngModel\" status=\"primary\" placeholder=\"תאריך גילוי האירוע\" [(ngModel)]=\"corruptionForm.eventDate\" dateValidation>\n                <div *ngIf=\"eventDate.invalid&&eventDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"eventHour\" class=\"label\">שעת גילוי האירוע</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventHour name=\"eventHour\" id=\"eventHour\" status=\"primary\" placeholder=\"שעת גילוי האירוע\" [(ngModel)]=\"corruptionForm.eventHour\" timeValidation>\n                <div *ngIf=\"eventHour.invalid&&eventHour.dirty\"><label class=\"label red\">פורמט השעה: 00:00</label></div>\n              </div>\n            </div>\n          </div>\n          <h6>פרטי האובדן:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipment\" class=\"label\">ציוד/חומר</label>\n                <div>\n                </div>\n                <nb-select [disabled]=\"this.corruptionForm.editStateBlocked\" name=\"equipment\" id=\"equipment\" status=\"primary\" placeholder=\"ציוד/חומר\" [(ngModel)]=\"corruptionForm.equipment\">\n                  <nb-option *ngFor=\"let equipment of equipments\" value=\"equipment.name\" (click)=\"equipmentsTypeOptions=equipment.list; corruptionForm.equipmentType=''\">{{equipment.name}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipmentType\" class=\"label\">סוג ציוד/חומר</label>\n                <nb-select [disabled]=\"this.corruptionForm.editStateBlocked\" name=\"equipmentType\" id=\"equipmentType\" status=\"primary\" placeholder=\"סוג ציוד/חומר\" [(ngModel)]=\"corruptionForm.equipmentType\">\n                  <nb-option *ngFor=\"let equipment of equipmentsTypeOptions\" value=\"equipment\">{{equipment}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMark\" class=\"label\">סימון ציוד/חומר</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMark=\"ngModel\" name=\"equipmentMark\" id=\"equipmentMark\" status=\"primary\" placeholder=\"סימון ציוד/חומר\" [(ngModel)]=\"corruptionForm.equipmentMark\" markValidation>\n                <div *ngIf=\"equipmentMark.invalid&&equipmentMark.dirty\"><label class=\"label red\">XXXXXXXXX או YYYYYY-XXX</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMakat\" class=\"label\">מק\"ט ציוד/עותק חומר</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMakat=\"ngModel\" name=\"equipmentMakat\" id=\"equipmentMakat\" status=\"primary\" placeholder=\"מק''ט ציוד/עותק חומר\" [(ngModel)]=\"corruptionForm.equipmentMakat\" makatCopyValidation>\n                <div *ngIf=\"equipmentMakat.invalid&&equipmentMakat.dirty\"><label class=\"label red\">3 ספרות או 12 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6>גורמים ומקומות רלוונטים לאירוע:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventRelevantPlacesAndFactors=\"ngModel\" name=\"eventRelevantPlacesAndFactors\" id=\"eventRelevantPlacesAndFactors\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"corruptionForm.eventRelevantPlacesAndFactors\" textValidation>\n                <div *ngIf=\"eventRelevantPlacesAndFactors.invalid&&eventRelevantPlacesAndFactors.dirty\"><label class=\"label red\">עד 100 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6>פרטי המקרה כפי שידועים מהבירור הראשוני:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventInitialDetails=\"ngModel\" name=\"eventInitialDetails\" id=\"eventInitialDetails\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"corruptionForm.eventInitialDetails\" textValidation>\n                <div *ngIf=\"eventInitialDetails.invalid&&eventInitialDetails.dirty\"><label class=\"label red\">עד 100 תווים</label></div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div style=\"display: flex; justify-content: center;\">\n          <h6><u>טיפול באירוע</u></h6>\n        </div>\n        <form>\n          <h6>פרטי הבירור:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"investigationDate\" class=\"label\">תאריך הבירור</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"investigationDate\" #investigationDate=\"ngModel\" id=\"investigationDate\" status=\"primary\" placeholder=\"תאריך הבירור\" [(ngModel)]=\"corruptionForm.investigationDate\"  dateValidation>\n                <div *ngIf=\"investigationDate.invalid&&investigationDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n              </div>\n            </div>\n            <div *ngIf=\"corruptionForm.investigationFile\" class=\"col-md-3\">\n              <ngx-file-download-button [fileFullName]=\"corruptionForm.investigationFile\"></ngx-file-download-button>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"investigationFile\" class=\"label\">צרף קובץ</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"investigationFile\" id=\"investigationFile\">\n              </div>\n            </div>\n          </div>\n          <h6>פרטי הטיפול:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"handlingDate\" class=\"label\">תאריך הטיפול</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth #handlingDate=\"ngModel\" name=\"handlingDate\" id=\"handlingDate\" status=\"primary\" placeholder=\"תאריך הטיפול\" [(ngModel)]=\"corruptionForm.handlingDate\"  dateValidation>\n                <div *ngIf=\"handlingDate.invalid&&handlingDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n              </div>\n            </div>\n            <div *ngIf=\"corruptionForm.handlingFile\" class=\"col-md-3\">\n              <ngx-file-download-button [fileFullName]=\"corruptionForm.handlingFile\"></ngx-file-download-button>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"handlingFile\" class=\"label\">צרף קובץ</label>\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"handlingFile\" id=\"handlingFile\">\n              </div>\n            </div>\n          </div>\n          <!--<h6>הודעות</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.corruptionForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"messages\" id=\"messages\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"corruptionForm.messages\">\n              </div>\n            </div>\n          </div>-->\n          <chat id=\"outOfPrint\" messages=\"lostForm.messages\"></chat>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>  \n</div>\n\n\n<ng-template #dialog let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מעלה את הבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" routerLink=\"/pages/control-table\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialog2 let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מטפל בבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/events-forms/corruption-form/corruption-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/events-forms/corruption-form/corruption-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline [fullWidth] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\n.download {\n  width: 100%; }\n\n.download nb-card {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #3366ff;\n  border-color: #3366ff;\n  color: #ffffff; }\n\n.download nb-card nb-icon {\n  width: auto; }\n\n.red {\n  color: red; }\n\n@media only print {\n  /* Intended for paged material and for documents\n     viewed on screen in print preview mode .*/\n  #outOfPrint {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2NvcnJ1cHRpb24tZm9ybS9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvc3JjXFxhcHBcXHBhZ2VzXFxldmVudHMtZm9ybXNcXGNvcnJ1cHRpb24tZm9ybVxcY29ycnVwdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQU87TUFBUCxZQUFPO1VBQVAsUUFBTyxFQUNSOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHFCQUFhO0VBQWIscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO01BQXZCLHNCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRTsrQ0FDNkM7RUFDN0M7SUFDSSxjQUFhLEVBQ2hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMtZm9ybXMvY29ycnVwdGlvbi1mb3JtL2NvcnJ1cHRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNoZWNrYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcbiAgZmxleDogMTtcbn1cblxuLmZvcm0taW5saW5lID4gKiB7XG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XG59XG5cbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmRvd25sb2Fke1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRvd25sb2FkIG5iLWNhcmR7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY2ZmY7XG4gIGJvcmRlci1jb2xvcjogIzMzNjZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kb3dubG9hZCBuYi1jYXJkIG5iLWljb257XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucmVke1xuICBjb2xvcjogcmVkO1xufVxuXG5AbWVkaWEgb25seSBwcmludCB7XG4gIC8qIEludGVuZGVkIGZvciBwYWdlZCBtYXRlcmlhbCBhbmQgZm9yIGRvY3VtZW50c1xuICAgICB2aWV3ZWQgb24gc2NyZWVuIGluIHByaW50IHByZXZpZXcgbW9kZSAuKi9cbiAgI291dE9mUHJpbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/corruption-form/corruption-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/events-forms/corruption-form/corruption-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CorruptionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorruptionFormComponent", function() { return CorruptionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/event-status/event-status.component */ "./src/app/pages/events-forms/components/event-status/event-status.component.ts");
/* harmony import */ var _validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validation-directives/text.directive */ "./src/app/pages/events-forms/validation-directives/text.directive.ts");
/* harmony import */ var _validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation-directives/std-field.directive */ "./src/app/pages/events-forms/validation-directives/std-field.directive.ts");
/* harmony import */ var _validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation-directives/date.directive */ "./src/app/pages/events-forms/validation-directives/date.directive.ts");
/* harmony import */ var _validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validation-directives/id.directive */ "./src/app/pages/events-forms/validation-directives/id.directive.ts");
/* harmony import */ var _validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../validation-directives/makat-copy.directive */ "./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts");
/* harmony import */ var _validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../validation-directives/mark.directive */ "./src/app/pages/events-forms/validation-directives/mark.directive.ts");
/* harmony import */ var _validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../validation-directives/time.directive */ "./src/app/pages/events-forms/validation-directives/time.directive.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/auth-service */ "./src/app/services/auth-service.ts");
















var CorruptionFormComponent = /** @class */ (function () {
    function CorruptionFormComponent(auth, RestApiService, activatedRoute, dialogService, router) {
        this.auth = auth;
        this.RestApiService = RestApiService;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.router = router;
        this.eventType = 'השמדת ציוד';
        this.eventFilesFields = ['handlingFile', 'investigationFile'];
        this.corruptionForm = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_5__["CorruptionFormTemplate"]();
        this.uploadLoading = false;
        this.reference = undefined;
        this.formFiles = [];
        this.readonly = true;
        this.popUpDialogContext = '';
        this.msgs = [];
        this.baseUrl = '';
        // select fields options:
        this.eventStatusOptions = ["טופל", "טרם טופל"];
        this.units = ["מצוב", "מעוף", "מצפן", "פלגת חוד"];
        this.ranks = ["סמל", "רבט", "טוראי"];
        this.equipmentsType = ["סוג 1", "סוג 2", "סוג 3"];
        this.materialsType = ["חומר 1", "חומר 2", "חומר 3"];
        this.equipments = [{ "name": "ציוד", "list": this.equipmentsType }, { "name": "חומר פיסי", "list": this.materialsType }, { "name": "חומר לוגי", "list": this.materialsType }];
        this.constans_array = [];
        this.equipmentsTypeOptions = [];
        this.formGroupEle = [
            this.signerName,
            this.signerId,
            this.position,
            this.eventDate,
            this.eventHour,
            this.equipmentMark,
            this.equipmentMakat,
            this.eventRelevantPlacesAndFactors,
            this.eventInitialDetails,
            this.investigationDate,
            this.handlingDate
        ];
        this.baseUrl = this.RestApiService.baseUrl;
    }
    CorruptionFormComponent.prototype.handleFileUpload = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.formFiles.push({ 'id': target.attributes.id.value, 'file': target.files.item(0) });
    };
    CorruptionFormComponent.prototype.ngOnInit = function () {
        // Set eventType field according to the form event type
        this.corruptionForm.eventType = this.eventType;
        // Recieve form data from db according to its reference
        this.reference = this.activatedRoute.snapshot.params.reference;
        if (this.reference) {
            this.exisitingFormLoadData(this.reference);
        }
        else {
            this.readonly = false;
            this.newFormLoadData();
            this.get_constas_feilds();
        }
    };
    CorruptionFormComponent.prototype.get_constas_feilds = function () {
        var _this = this;
        this.constans_array = ["equipmentType", "rank", "materialType", "eventStatus"];
        this.RestApiService.getConstansFieldsAndUnitsArray().subscribe(function (data) {
            _this.equipmentsType = data.equipmentType;
            _this.ranks = data.rank;
            _this.materialsType = data.materialType;
            _this.eventStatusOptions = data.eventStatus;
            _this.eventStatusForm = data.eventStatus;
            _this.equipments = [{ "name": "ציוד", "list": _this.equipmentsType }, { "name": "חומר פיסי", "list": _this.materialsType }, { "name": "חומר לוגי", "list": _this.materialsType }];
        });
    };
    CorruptionFormComponent.prototype.newFormLoadData = function () {
        var _this = this;
        this.RestApiService.getNewEventForm().subscribe(function (data_from_server) {
            _this.corruptionForm.date = data_from_server.datetime;
        });
    };
    CorruptionFormComponent.prototype.exisitingFormLoadData = function (reference) {
        var _this = this;
        this.RestApiService.getExistingEventForm(reference).subscribe(function (data_from_server) {
            _this.corruptionForm = data_from_server;
            _this.msgs = _this.corruptionForm.messages.map(function (msg) { return JSON.parse(msg); });
        });
    };
    CorruptionFormComponent.prototype.save = function () {
        var _this = this;
        var formData = new FormData();
        this.corruptionForm = this.eventStatusForm.pushFormFields(this.corruptionForm);
        // insert corruptionForm to FormData object
        for (var _i = 0, _a = Object.entries(this.corruptionForm); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value && !this.eventFilesFields.includes(key)) {
                formData.append(key, value);
            }
        }
        // insert all files to FormData object
        for (var _c = 0, _d = this.formFiles; _c < _d.length; _c++) {
            var formFile = _d[_c];
            formData.append(formFile['id'], formFile['file'], formFile['file'].name);
        }
        if (this.reference) {
            this.RestApiService.updateExistingEventForm(this.reference, formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05EA\u05E2\u05D3\u05DB\u05DF \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
        else {
            this.RestApiService.createNewEventFormWithFiles(formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05D5\u05E6\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
        //this.corruptionForm = new CorruptionFormTemplate(); // initialize form
    };
    CorruptionFormComponent.prototype.openWithoutBackdropClick = function (dialog) {
        this.dialogService.open(dialog, {
            //context: this.formUploadResult.reference,
            closeOnBackdropClick: false,
        });
    };
    CorruptionFormComponent.prototype.checkFieldsValid = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'signerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.signerName, [Object(_validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_9__["stdFieldValidator"])()]),
            'signerId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.signerId, [Object(_validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_11__["idValidator"])()]),
            'position': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.position, [Object(_validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_9__["stdFieldValidator"])()]),
            'eventDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.eventDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])()]),
            'eventHour': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.eventHour, [Object(_validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_14__["timeValidator"])()]),
            'equipmentMark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.equipmentMark, [Object(_validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_13__["markValidator"])()]),
            'equipmentMakat': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.equipmentMakat, [Object(_validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_12__["makatCopyValidator"])()]),
            'eventRelevantPlacesAndFactors': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.eventRelevantPlacesAndFactors, [Object(_validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_8__["textValidator"])()]),
            'eventInitialDetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.eventInitialDetails, [Object(_validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_8__["textValidator"])()]),
            'investigationDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.investigationDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])()]),
            'handlingDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.corruptionForm.handlingDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__["dateValidator"])()]),
        });
        var fieldsValid = true;
        for (var field in formGroup.controls) {
            if (!formGroup.controls[field].valid) {
                //  if(field.valid && field.dirty) {
                fieldsValid = false;
            }
        }
        return fieldsValid;
    };
    CorruptionFormComponent.prototype.onSubmit = function () {
        this.uploadLoading = true;
        if (this.checkFieldsValid()) {
            this.openWithoutBackdropClick(this.dialog);
            this.save();
        }
        else {
            this.uploadLoading = false;
            this.popUpDialogContext = "\u05E9\u05D3\u05D4 \u05D0\u05D7\u05D3 \u05DC\u05E4\u05D7\u05D5\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D0\u05D5 \u05D7\u05E1\u05E8";
            this.openWithoutBackdropClick(this.dialog2);
        }
    };
    CorruptionFormComponent.prototype.printForm = function () {
        window.print();
    };
    CorruptionFormComponent.prototype.deleteEventForm = function () {
        var _this = this;
        this.uploadLoading = true;
        this.openWithoutBackdropClick(this.dialog);
        this.RestApiService.deleteExistingEventForm(this.reference)
            .subscribe(function (data) {
            _this.uploadLoading = false;
            _this.popUpDialogContext = "\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E2\u05DD \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF " + _this.reference + " \u05E0\u05DE\u05D7\u05E7";
        }, function (error) { return console.log(error); });
    };
    CorruptionFormComponent.prototype.getFileName = function (fileNameWithPath) {
        if (fileNameWithPath)
            return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1);
    };
    CorruptionFormComponent.prototype.updateEditState = function () {
        var _this = this;
        this.corruptionForm.editStateBlocked = !this.corruptionForm.editStateBlocked;
        this.uploadLoading = true;
        this.openWithoutBackdropClick(this.dialog2);
        var formData = new FormData();
        formData.append('editStateBlocked', (this.corruptionForm.editStateBlocked).toString());
        this.RestApiService.updateExistingEventForm(this.reference, formData)
            .subscribe(function (data) {
            _this.uploadLoading = false;
            if (data.editStateBlocked) {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E1\u05D2\u05E8 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
            else {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E4\u05EA\u05D7 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dialog"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "dialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dialog2"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "dialog2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("status"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_7__["EventStatusComponent"])
    ], CorruptionFormComponent.prototype, "eventStatusForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("signerName"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "signerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("signerId"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "signerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("position"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "eventDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventHour"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "eventHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("equipmentMark"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "equipmentMark", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("equipmentMakat"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "equipmentMakat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventRelevantPlacesAndFactors"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "eventRelevantPlacesAndFactors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventInitialDetails"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "eventInitialDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("investigationDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "investigationDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("handlingDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CorruptionFormComponent.prototype, "handlingDate", void 0);
    CorruptionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-form-layouts',
            styles: [__webpack_require__(/*! ./corruption-form.component.scss */ "./src/app/pages/events-forms/corruption-form/corruption-form.component.scss")],
            template: __webpack_require__(/*! ./corruption-form.component.html */ "./src/app/pages/events-forms/corruption-form/corruption-form.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CorruptionFormComponent);
    return CorruptionFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/equipment-review/equipment-review.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/events-forms/equipment-review/equipment-review.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\" id=\"outOfPrint\">\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת', 'מדווח אירועים'])\" >\n    <button type=\"submit\" nbButton status=\"primary\"  (click)=\"onSubmit()\">שלח אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\" >\n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"updateEditState()\">פתח/סגור אירוע לעריכה</button>\n  </nb-card>\n  <nb-card>\n    <button *ngIf=\"true\" nbButton status=\"primary\"  (click)=\"printForm()\">הדפס אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\"> \n    <button *ngIf=\"true\" nbButton status=\"primary\"(click)=\"deleteEventForm()\">מחק אירוע</button>\n  </nb-card>\n</div>\n\n<div class=\"row\" id=\"print-section\">\n  <div class=\"col-md-3\">\n    <ngx-event-details [form]=\"equipmentReview\"></ngx-event-details>\n    <ngx-event-status-shorted #status [eventForm]=\"equipmentReview\" [readonly]=\"this.equipmentReview.editStateBlocked\" [eventStatusOptions]=\"eventStatusOptions\"></ngx-event-status-shorted>\n  </div>\n\n  <div class=\"col-md-9\">\n    <nb-card>\n      <nb-card-body>\n        <div style=\"display: flex; justify-content: center;\">\n          <h6><u>פרטי האירוע</u></h6>\n        </div>\n        <form> <!--[ngFormOptions]=\"{updateOn: 'blur'}\">-->\n          <h6>פרטי הביקורת:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"reviewDate\" class=\"label\">תאריך הביקורת</label>\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"text\" nbInput fullWidth #reviewDate=\"ngModel\" name=\"reviewDate\" id=\"reviewDate\" status=\"primary\" placeholder=\"תאריך הביקורת\" [(ngModel)]=\"equipmentReview.reviewDate\"  dateValidation>\n                <div *ngIf=\"reviewDate.invalid&&reviewDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n              </div>\n            </div>\n            <div *ngIf=\"equipmentReview.reviewFile\" class=\"col-md-3\">\n              <ngx-file-download-button [fileFullName]=\"corruptionForm.reviewFile\"></ngx-file-download-button>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"reviewFile\" class=\"label\">צרף קובץ</label>\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"reviewFile\" id=\"reviewFile\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row col-md-12\">\n              <div>\n                  <p>הרני מאשר שביצעתי ביקורת מצאי מכשירי צ' ומסט\"בים ביחידתי,<br>\n                  המבוססת על ביקורת פיסית כמתואר בהוראת קשר\"ר בתחום הצו\"ב (510) 06-06-02 \"ביקורת ציוד תקשוב מסווג\"<br>\n                  ומצאתי כי:</p>\n              </div>\n              <div>\n                  <nb-radio-group [(value)]=\"equipmentReview.isMatchToReport\" name=\"isMatchToReport\" [(ngModel)]=\"equipmentReview.isMatchToReport\">\n                      <nb-radio\n                      [value]=\"true\">\n                      יש התאמה מלאה בין הנתונים שהופקו בדו\"ח אל מול הבדיקה הפיסית שנערכה\n                      </nb-radio>\n                      <nb-radio\n                      [value]=\"false\">\n                      אין התאמה מלאה בין הנתונים שהופקו בדו\"ח אל מול הבדיקה הפיסית שנערכה. להלן רשימת הסימונים החסרים\n                      </nb-radio>\n                  </nb-radio-group>\n              </div>\n          </div>\n          <h6>פרטי החוסרים:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipment\" class=\"label\">ציוד/חומר</label>\n                <div>\n                </div>\n                <nb-select [disabled]=\"this.equipmentReview.editStateBlocked\" name=\"equipment\" id=\"equipment\" status=\"primary\" placeholder=\"ציוד/חומר\" [(ngModel)]=\"equipmentReview.equipment\">\n                  <nb-option *ngFor=\"let equipment of equipments\" value=\"equipment.name\" (click)=\"equipmentsTypeOptions=equipment.list; equipmentReview.equipmentType=''\">{{equipment.name}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipmentType\" class=\"label\">סוג ציוד/חומר</label>\n                \n                <nb-select [disabled]=\"this.equipmentReview.editStateBlocked\" name=\"equipmentType\" id=\"equipmentType\" status=\"primary\" placeholder=\"סוג ציוד/חומר\" [(ngModel)]=\"equipmentReview.equipmentType\">\n                  <nb-option *ngFor=\"let equipment of equipmentsTypeOptions\" value=\"equipment\">{{equipment}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMark\" class=\"label\">סימון ציוד/חומר</label>\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMark=\"ngModel\" name=\"equipmentMark\" id=\"equipmentMark\" status=\"primary\" placeholder=\"סימון ציוד/חומר\" [(ngModel)]=\"equipmentReview.equipmentMark\" markValidation>\n                <div *ngIf=\"equipmentMark.invalid&&equipmentMark.dirty\"><label class=\"label red\">XXXXXXXXX או YYYYYY-XXX</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMakat\" class=\"label\">מק\"ט ציוד/עותק חומר</label>\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMakat=\"ngModel\" name=\"equipmentMakat\" id=\"equipmentMakat\" status=\"primary\" placeholder=\"מק''ט ציוד/עותק חומר\" [(ngModel)]=\"equipmentReview.equipmentMakat\" makatCopyValidation>\n                <div *ngIf=\"equipmentMakat.invalid&&equipmentMakat.dirty\"><label class=\"label red\">3 ספרות או 12 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6>התייחסות לביקורת:</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"text\" nbInput fullWidth #reviewReference=\"ngModel\" name=\"reviewReference\" id=\"reviewReference\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"equipmentReview.reviewReference\" textValidation>\n                <div *ngIf=\"reviewReference.invalid&&reviewReference.dirty\"><label class=\"label red\">עד 100 תווים</label></div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div style=\"display: flex; justify-content: center;\">\n          <h6><u>טיפול באירוע</u></h6>\n        </div>\n        <form>\n          <h6>הודעות</h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.equipmentReview.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"messages\" id=\"messages\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"equipmentReview.messages\">\n              </div>\n            </div>\n          </div>\n          <chat id=\"outOfPrint\" messages=\"lostForm.messages\"></chat>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>  \n</div>\n\n\n<ng-template #dialog let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מעלה את הבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" routerLink=\"/pages/control-table\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialog2 let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מטפל בבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/events-forms/equipment-review/equipment-review.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/events-forms/equipment-review/equipment-review.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9lcXVpcG1lbnQtcmV2aWV3L2VxdWlwbWVudC1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/equipment-review/equipment-review.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/events-forms/equipment-review/equipment-review.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EquipmentReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentReviewComponent", function() { return EquipmentReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/event-status/event-status.component */ "./src/app/pages/events-forms/components/event-status/event-status.component.ts");
/* harmony import */ var _validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation-directives/text.directive */ "./src/app/pages/events-forms/validation-directives/text.directive.ts");
/* harmony import */ var _validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validation-directives/date.directive */ "./src/app/pages/events-forms/validation-directives/date.directive.ts");
/* harmony import */ var _validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation-directives/makat-copy.directive */ "./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts");
/* harmony import */ var _validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation-directives/mark.directive */ "./src/app/pages/events-forms/validation-directives/mark.directive.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/auth-service */ "./src/app/services/auth-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");













var EquipmentReviewComponent = /** @class */ (function () {
    function EquipmentReviewComponent(auth, RestApiService, activatedRoute, dialogService, router) {
        this.auth = auth;
        this.RestApiService = RestApiService;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.router = router;
        this.eventType = 'ביקורת ציוד';
        this.eventFilesFields = ['reviewFile'];
        this.equipmentReview = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_4__["EquipmentReviewTemplate"]();
        this.uploadLoading = false;
        this.reference = undefined;
        this.formFiles = [];
        this.readonly = true;
        this.popUpDialogContext = '';
        this.constans_array = [];
        this.baseUrl = '';
        // select fields options:
        this.eventStatusOptions = ["טופל", "טרם טופל"];
        this.units = ["מצוב", "מעוף", "מצפן"];
        this.ranks = ["סמל", "רבט", "טוראי"];
        this.equipmentsType = ["סוג 1", "סוג 2", "סוג 3"];
        this.materialsType = ["חומר 1", "חומר 2", "חומר 3"];
        this.equipments = [{ "name": "ציוד", "list": this.equipmentsType }, { "name": "חומר פיסי", "list": this.materialsType }, { "name": "חומר לוגי", "list": this.materialsType }];
        this.equipmentsTypeOptions = [];
        this.formGroupEle = [
            this.signerName,
            this.signerId,
            this.position,
            this.eventDate,
            this.eventHour,
            this.equipmentMark,
            this.equipmentMakat,
            this.eventRelevantPlacesAndFactors,
            this.eventInitialDetails,
            this.investigationDate,
            this.findingDate,
            this.handlingDate
        ];
        this.baseUrl = this.RestApiService.baseUrl;
    }
    EquipmentReviewComponent.prototype.handleFileUpload = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.formFiles.push({ 'id': target.attributes.id.value, 'file': target.files.item(0) });
    };
    EquipmentReviewComponent.prototype.ngOnInit = function () {
        // Set eventType field according to the form event type
        this.equipmentReview.eventType = this.eventType;
        // Recieve form data from db according to its reference
        this.reference = this.activatedRoute.snapshot.params.reference;
        if (this.reference) {
            this.exisitingFormLoadData(this.reference);
        }
        else {
            this.readonly = false;
            this.newFormLoadData();
            this.get_constas_feilds();
        }
    };
    EquipmentReviewComponent.prototype.get_constas_feilds = function () {
        var _this = this;
        // this.constans_array=["equipmentType","rank","materialType","eventStatus"]
        this.RestApiService.getConstansFieldsAndUnitsArray().subscribe(function (data) {
            _this.equipmentsType = data.equipmentType;
            _this.ranks = data.rank;
            _this.materialsType = data.materialType;
            _this.eventStatusOptions = data.eventStatus;
            _this.equipments = [{ "name": "ציוד", "list": _this.equipmentsType }, { "name": "חומר פיסי", "list": _this.materialsType }, { "name": "חומר לוגי", "list": _this.materialsType }];
        });
    };
    EquipmentReviewComponent.prototype.newFormLoadData = function () {
        var _this = this;
        this.RestApiService.getNewEventForm().subscribe(function (data_from_server) {
            _this.equipmentReview.date = data_from_server.datetime;
        });
    };
    EquipmentReviewComponent.prototype.exisitingFormLoadData = function (reference) {
        var _this = this;
        this.RestApiService.getExistingEventForm(reference).subscribe(function (data_from_server) {
            _this.equipmentReview = data_from_server;
        });
    };
    EquipmentReviewComponent.prototype.save = function () {
        var _this = this;
        var formData = new FormData();
        console.log(this.eventStatusForm);
        this.equipmentReview = this.eventStatusForm.pushFormFields(this.equipmentReview);
        // insert equipmentReview to FormData object
        for (var _i = 0, _a = Object.entries(this.equipmentReview); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value && !this.eventFilesFields.includes(key)) {
                formData.append(key, value);
            }
        }
        // insert all files to FormData object
        for (var _c = 0, _d = this.formFiles; _c < _d.length; _c++) {
            var formFile = _d[_c];
            formData.append(formFile['id'], formFile['file'], formFile['file'].name);
        }
        if (this.reference) {
            this.RestApiService.updateExistingEventForm(this.reference, formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05EA\u05E2\u05D3\u05DB\u05DF \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
        else {
            this.RestApiService.createNewEventFormWithFiles(formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05D5\u05E6\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
    };
    EquipmentReviewComponent.prototype.openWithoutBackdropClick = function (dialog) {
        this.dialogService.open(dialog, {
            //context: this.formUploadResult.reference,
            closeOnBackdropClick: false,
        });
    };
    EquipmentReviewComponent.prototype.checkFieldsValid = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'equipmentMark': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.equipmentReview.equipmentMark, [Object(_validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_10__["markValidator"])()]),
            'equipmentMakat': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.equipmentReview.equipmentMakat, [Object(_validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_9__["makatCopyValidator"])()]),
            'reviewReference': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.equipmentReview.reviewReference, [Object(_validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_7__["textValidator"])()]),
            'reviewDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.equipmentReview.reviewDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_8__["dateValidator"])()]),
        });
        var fieldsValid = true;
        for (var field in formGroup.controls) {
            if (!formGroup.controls[field].valid) {
                //  if(field.valid && field.dirty) {
                fieldsValid = false;
            }
        }
        return fieldsValid;
    };
    EquipmentReviewComponent.prototype.onSubmit = function () {
        this.uploadLoading = true;
        if (this.checkFieldsValid()) {
            this.openWithoutBackdropClick(this.dialog);
            this.save();
        }
        else {
            this.uploadLoading = false;
            this.popUpDialogContext = "\u05E9\u05D3\u05D4 \u05D0\u05D7\u05D3 \u05DC\u05E4\u05D7\u05D5\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D0\u05D5 \u05D7\u05E1\u05E8";
            this.openWithoutBackdropClick(this.dialog2);
        }
    };
    EquipmentReviewComponent.prototype.printForm = function () {
        window.print();
    };
    EquipmentReviewComponent.prototype.deleteEventForm = function () {
        var _this = this;
        this.uploadLoading = true;
        this.openWithoutBackdropClick(this.dialog);
        this.RestApiService.deleteExistingEventForm(this.reference)
            .subscribe(function (data) {
            _this.uploadLoading = false;
            _this.popUpDialogContext = "\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E2\u05DD \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF " + _this.reference + " \u05E0\u05DE\u05D7\u05E7";
        }, function (error) { return console.log(error); });
    };
    EquipmentReviewComponent.prototype.getFileName = function (fileNameWithPath) {
        if (fileNameWithPath)
            return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1);
    };
    EquipmentReviewComponent.prototype.updateEditState = function () {
        var _this = this;
        this.equipmentReview.editStateBlocked = !this.equipmentReview.editStateBlocked;
        this.uploadLoading = true;
        this.openWithoutBackdropClick(this.dialog2);
        var formData = new FormData();
        formData.append('editStateBlocked', (this.equipmentReview.editStateBlocked).toString());
        this.RestApiService.updateExistingEventForm(this.reference, formData)
            .subscribe(function (data) {
            _this.uploadLoading = false;
            if (data.editStateBlocked) {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E1\u05D2\u05E8 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
            else {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E4\u05EA\u05D7 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("dialog"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "dialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("dialog2"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "dialog2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("status"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_6__["EventStatusComponent"])
    ], EquipmentReviewComponent.prototype, "eventStatusForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("signerName"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "signerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("signerId"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "signerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("position"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("eventDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "eventDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("eventHour"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "eventHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("equipmentMark"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "equipmentMark", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("equipmentMakat"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "equipmentMakat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("eventRelevantPlacesAndFactors"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "eventRelevantPlacesAndFactors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("eventInitialDetails"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "eventInitialDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("investigationDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "investigationDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("findingDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "findingDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ViewChild"])("handlingDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ElementRef"])
    ], EquipmentReviewComponent.prototype, "handlingDate", void 0);
    EquipmentReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
            selector: 'ngx-equipment-review',
            template: __webpack_require__(/*! ./equipment-review.component.html */ "./src/app/pages/events-forms/equipment-review/equipment-review.component.html"),
            styles: [__webpack_require__(/*! ./equipment-review.component.scss */ "./src/app/pages/events-forms/equipment-review/equipment-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EquipmentReviewComponent);
    return EquipmentReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/events-forms.templates.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/events-forms/events-forms.templates.ts ***!
  \**************************************************************/
/*! exports provided: Form, EventForm, LostFormTemplate, CorruptionFormTemplate, EquipmentReviewTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventForm", function() { return EventForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostFormTemplate", function() { return LostFormTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorruptionFormTemplate", function() { return CorruptionFormTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentReviewTemplate", function() { return EquipmentReviewTemplate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Form = /** @class */ (function () {
    function Form() {
    }
    return Form;
}());

var EventForm = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventForm, _super);
    function EventForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventForm;
}(Form));

var LostFormTemplate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LostFormTemplate, _super);
    function LostFormTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LostFormTemplate;
}(EventForm));

var CorruptionFormTemplate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CorruptionFormTemplate, _super);
    function CorruptionFormTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CorruptionFormTemplate;
}(EventForm));

var EquipmentReviewTemplate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EquipmentReviewTemplate, _super);
    function EquipmentReviewTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EquipmentReviewTemplate;
}(EventForm));



/***/ }),

/***/ "./src/app/pages/events-forms/form-inputs/form-inputs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/events-forms/form-inputs/form-inputs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Default Inputs</nb-card-header>\n      <nb-card-body>\n        <input type=\"text\" nbInput fullWidth placeholder=\"Project\">\n        <div class=\"full-name-inputs\">\n          <input type=\"text\" nbInput fullWidth placeholder=\"Nick\">\n          <input type=\"text\" nbInput fullWidth placeholder=\"Last Name\">\n        </div>\n        <input type=\"password\" nbInput fullWidth placeholder=\"Password\">\n        <input type=\"text\" nbInput fullWidth shape=\"rectangle\" placeholder=\"Rectangle border\">\n        <input type=\"text\" nbInput fullWidth shape=\"semi-round\" placeholder=\"Semi-round border\">\n        <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"Rounded border\">\n        <input type=\"text\" nbInput fullWidth placeholder=\"Disabled input\" disabled/>\n        <textarea rows=\"5\" nbInput fullWidth shape=\"round\"  placeholder=\"Text Area\"></textarea>\n        <input type=\"text\" nbInput fullWidth fieldSize=\"small\"  placeholder=\"Small Input\">\n        <input type=\"text\" nbInput fullWidth fieldSize=\"medium\"  placeholder=\"Medium Input\">\n        <input type=\"text\" nbInput fullWidth fieldSize=\"large\"  placeholder=\"Large Input\">\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n\n    <nb-card>\n      <nb-card-header>Select</nb-card-header>\n      <nb-card-body>\n        <nb-select selected=\"1\">\n          <nb-option value=\"1\">Option 1</nb-option>\n          <nb-option value=\"2\">Option 2</nb-option>\n        </nb-select>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Validation States</nb-card-header>\n      <nb-card-body>\n        <input type=\"text\" nbInput fullWidth status=\"info\"  placeholder=\"Input with Info\">\n        <input type=\"text\" nbInput fullWidth status=\"success\"  placeholder=\"Warning Input\">\n        <input type=\"text\" nbInput fullWidth status=\"warning\"  placeholder=\"Danger Input\">\n        <input type=\"text\" nbInput fullWidth status=\"danger\" placeholder=\"Danger Input\">\n        <input type=\"text\" nbInput fullWidth status=\"primary\"  placeholder=\"Input with Primary\">\n        <div class=\"validation-checkboxes\">\n          <nb-checkbox status=\"success\">Success Checkbox</nb-checkbox>\n          <nb-checkbox status=\"warning\">Warning Checkbox</nb-checkbox>\n          <nb-checkbox status=\"danger\">Danger Checkbox</nb-checkbox>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Checkboxes & Radios</nb-card-header>\n      <nb-card-body class=\"checkbox-radio\">\n        <div class=\"demo-items\">\n          <nb-checkbox>Checkbox 1</nb-checkbox>\n          <nb-checkbox [value]=\"true\">Checkbox 2</nb-checkbox>\n        </div>\n        <div class=\"demo-items\">\n          <nb-radio-group [(value)]=\"radioGroupValue\">\n            <nb-radio\n              [value]=\"'This is value 1'\">\n              Radio 1\n            </nb-radio>\n            <nb-radio\n              [value]=\"'This is value 2'\">\n              Radio 2\n            </nb-radio>\n            <nb-radio\n              [value]=\"'This is value 3'\">\n              Radio 3\n            </nb-radio>\n          </nb-radio-group>\n        </div>\n        <div class=\"demo-items\">\n          <nb-checkbox disabled>Disabled Checkbox</nb-checkbox>\n          <nb-radio-group disabled>\n            <nb-radio\n              [value]=\"'Disabled Value'\">\n              Disabled Radio\n            </nb-radio>\n          </nb-radio-group>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/events-forms/form-inputs/form-inputs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/events-forms/form-inputs/form-inputs.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-card-body {\n  overflow: visible;\n  padding-top: 0; }\n  nb-card-body > * {\n    margin-top: 1rem; }\n  .full-name-inputs,\n.validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 -0.5rem; }\n  .full-name-inputs > *,\n  .validation-checkboxes > * {\n    margin: 0 0.5rem; }\n  .checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .demo-items {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 33%;\n          flex: 1 0 33%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2Zvcm0taW5wdXRzL0M6XFxVc2Vyc1xcenhhczlcXHByb2plY3RzXFxkbmFcXGZyb250ZW5kLW5ldy9zcmNcXGFwcFxccGFnZXNcXGV2ZW50cy1mb3Jtc1xcZm9ybS1pbnB1dHNcXGZvcm0taW5wdXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLGVBQWMsRUFLZjtFQVBEO0lBS0ksaUJBQWdCLEVBQ2pCO0VBR0g7O0VBRUUscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYixrQkFBaUIsRUFLbEI7RUFSRDs7SUFNSSxpQkFBZ0IsRUFDakI7RUFHSDtFQUNFLHFCQUFhO0VBQWIscUJBQWE7RUFBYixjQUFhLEVBQ2Q7RUFFRDtFQUNFLG9CQUFhO01BQWIsa0JBQWE7VUFBYixjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMtZm9ybXMvZm9ybS1pbnB1dHMvZm9ybS1pbnB1dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZy10b3A6IDA7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5cbi5mdWxsLW5hbWUtaW5wdXRzLFxuLnZhbGlkYXRpb24tY2hlY2tib3hlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxufVxuXG4uY2hlY2tib3gtcmFkaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGVtby1pdGVtcyB7XG4gIGZsZXg6IDEgMCAzMyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/events-forms/form-inputs/form-inputs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/events-forms/form-inputs/form-inputs.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsComponent", function() { return FormInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
        this.starRate = 2;
        this.heartRate = 4;
        this.radioGroupValue = 'This is value 2';
    }
    FormInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-form-inputs',
            styles: [__webpack_require__(/*! ./form-inputs.component.scss */ "./src/app/pages/events-forms/form-inputs/form-inputs.component.scss")],
            template: __webpack_require__(/*! ./form-inputs.component.html */ "./src/app/pages/events-forms/form-inputs/form-inputs.component.html"),
        })
    ], FormInputsComponent);
    return FormInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/forms-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/events-forms/forms-routing.module.ts ***!
  \************************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/events-forms/forms.component.ts");
/* harmony import */ var _lost_form_lost_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lost-form/lost-form.component */ "./src/app/pages/events-forms/lost-form/lost-form.component.ts");
/* harmony import */ var _equipment_review_equipment_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment-review/equipment-review.component */ "./src/app/pages/events-forms/equipment-review/equipment-review.component.ts");
/* harmony import */ var _corruption_form_corruption_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corruption-form/corruption-form.component */ "./src/app/pages/events-forms/corruption-form/corruption-form.component.ts");




// import { FormInputsComponent } from './form-inputs/form-inputs.component';



// import { CorruptionFormComponent } from './corruption-form/corruption-form.component';
// import { EquipmentReviewComponent } from './equipment-review/equipment-review.component';
var routes = [
    {
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        children: [
            {
                path: 'lost-form',
                component: _lost_form_lost_form_component__WEBPACK_IMPORTED_MODULE_4__["LostFormComponent"],
            },
            {
                path: 'corruption-form',
                component: _corruption_form_corruption_form_component__WEBPACK_IMPORTED_MODULE_6__["CorruptionFormComponent"],
            },
            {
                path: 'equipment-review',
                component: _equipment_review_equipment_review_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentReviewComponent"],
            },
        ],
    },
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/forms.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/events-forms/forms.component.ts ***!
  \*******************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/forms.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/events-forms/forms.module.ts ***!
  \****************************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/pages/events-forms/forms-routing.module.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/events-forms/forms.component.ts");
/* harmony import */ var _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-inputs/form-inputs.component */ "./src/app/pages/events-forms/form-inputs/form-inputs.component.ts");
/* harmony import */ var _lost_form_lost_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lost-form/lost-form.component */ "./src/app/pages/events-forms/lost-form/lost-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/event-details/event-details.component */ "./src/app/pages/events-forms/components/event-details/event-details.component.ts");
/* harmony import */ var _validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation-directives/date.directive */ "./src/app/pages/events-forms/validation-directives/date.directive.ts");
/* harmony import */ var _validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validation-directives/id.directive */ "./src/app/pages/events-forms/validation-directives/id.directive.ts");
/* harmony import */ var _validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validation-directives/std-field.directive */ "./src/app/pages/events-forms/validation-directives/std-field.directive.ts");
/* harmony import */ var _validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validation-directives/time.directive */ "./src/app/pages/events-forms/validation-directives/time.directive.ts");
/* harmony import */ var _validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validation-directives/mark.directive */ "./src/app/pages/events-forms/validation-directives/mark.directive.ts");
/* harmony import */ var _validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validation-directives/makat-copy.directive */ "./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts");
/* harmony import */ var _validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./validation-directives/text.directive */ "./src/app/pages/events-forms/validation-directives/text.directive.ts");
/* harmony import */ var _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/event-status/event-status.component */ "./src/app/pages/events-forms/components/event-status/event-status.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/pages/events-forms/components/chat/chat.component.ts");
/* harmony import */ var _equipment_review_equipment_review_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./equipment-review/equipment-review.component */ "./src/app/pages/events-forms/equipment-review/equipment-review.component.ts");
/* harmony import */ var _components_event_status_shorted_event_status_shorted_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/event-status-shorted/event-status-shorted.component */ "./src/app/pages/events-forms/components/event-status-shorted/event-status-shorted.component.ts");
/* harmony import */ var _corruption_form_corruption_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./corruption-form/corruption-form.component */ "./src/app/pages/events-forms/corruption-form/corruption-form.component.ts");
/* harmony import */ var _components_file_download_button_file_download_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/file-download-button/file-download-button.component */ "./src/app/pages/events-forms/components/file-download-button/file-download-button.component.ts");








// import { CorruptionFormComponent } from './corruption-form/corruption-form.component';















var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forChild(),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormsRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbChatModule"]
            ],
            declarations: [
                _forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
                _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_6__["FormInputsComponent"],
                _lost_form_lost_form_component__WEBPACK_IMPORTED_MODULE_7__["LostFormComponent"],
                _corruption_form_corruption_form_component__WEBPACK_IMPORTED_MODULE_21__["CorruptionFormComponent"],
                _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailsComponent"],
                _validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_10__["DateDirective"],
                _validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_11__["IdDirective"],
                _validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_12__["StdFieldDirective"],
                _validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_13__["TimeDirective"],
                _validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_14__["MarkDirective"],
                _validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_15__["MakatCopyDirective"],
                _validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_16__["TextDirective"],
                _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_17__["EventStatusComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"],
                _equipment_review_equipment_review_component__WEBPACK_IMPORTED_MODULE_19__["EquipmentReviewComponent"],
                _components_event_status_shorted_event_status_shorted_component__WEBPACK_IMPORTED_MODULE_20__["EventStatusShortedComponent"],
                _components_file_download_button_file_download_button_component__WEBPACK_IMPORTED_MODULE_22__["FileDownloadButtonComponent"],
            ],
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/lost-form/lost-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/events-forms/lost-form/lost-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\" id=\"outOfPrint\">\n  \n  <nb-card *ngIf =\"checkPermissions()\" >\n    <button type=\"submit\" nbButton status=\"primary\" (click)=\"onSubmit()\">שלח אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\"> \n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"updateEditState()\">פתח/סגור אירוע לעריכה</button>\n  </nb-card>\n  <nb-card>\n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"printForm()\">הדפס אירוע</button>\n  </nb-card>\n  <nb-card *ngIf =\"auth.check_permissions(['מנהלן מערכת'])\" >\n    <button *ngIf=\"true\" nbButton status=\"primary\" (click)=\"deleteEventForm()\">מחק אירוע</button>\n  </nb-card>\n</div> \n<div class=\"row\" id=\"print-section\">\n<div class=\"col-md-3\">\n  <ngx-event-details [form]=\"lostForm\"></ngx-event-details>\n  <ngx-event-status #status [eventForm]=\"lostForm\" [readonly]=\"this.lostForm.editStateBlocked\" [eventStatusOptions]=\"eventStatusOptions\"></ngx-event-status>\n</div>\n<div class=\"col-md-9\">\n  <nb-card>\n    <nb-card-body>\n      <div style=\"display: flex; justify-content: center;\">\n        <h6><u>פרטי האירוע</u></h6>\n      </div>\n      <form> <!--[ngFormOptions]=\"{updateOn: 'blur'}\">-->\n        <h6><b>פרטי החתום האחרון:</b></h6>\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"signerUnit\" class=\"label\">יחידת החתום</label>\n              <nb-select name=\"signerUnit\" id=\"signerUnit\" status=\"primary\" placeholder=\"יחידת החתום\" [(ngModel)]=\"lostForm.signerUnit\">\n                <nb-option *ngFor=\"let unit of units\" [value]=\"unit\">{{unit}}</nb-option>  \n              </nb-select>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"signerName\" class=\"label\">שם החתום</label>\n              <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #signerName=\"ngModel\" name=\"signerName\" id=\"signerName\" status=\"primary\" placeholder=\"שם החתום\" [(ngModel)]=\"lostForm.signerName\" stdFieldValidation>\n              <div *ngIf=\"signerName.invalid&&signerName.dirty\"><label class=\"label red\">מוגבל ל-30 תווים</label></div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"signerId\" class=\"label\">מ.א./ת.ז.</label>\n              <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"signerId\" id=\"signerId\" #signerId=\"ngModel\" status=\"primary\" placeholder=\"מ.א./ת.ז.\" [(ngModel)]=\"lostForm.signerId\" idValidation>\n              <div *ngIf=\"signerId.invalid&&signerId.dirty\" (click)=\"console.log(signerId)\"><label class=\"label red\">ת.ז מורכב מ-9 ספרות</label></div>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"rank\" class=\"label\">דרגה</label>\n              <nb-select [disabled]=\"this.lostForm.editStateBlocked\" name=\"rank\" id=\"rank\" status=\"primary\" placeholder=\"דרגה\" [(ngModel)]=\"lostForm.rank\">\n                <nb-option *ngFor=\"let rank of ranks\" [value]=\"rank\">{{rank}}</nb-option>  \n              </nb-select>\n            </div>\n          </div>\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"position\" class=\"label\">תפקיד</label>\n              <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #position=\"ngModel\" name=\"position\" id=\"position\" status=\"primary\" placeholder=\"תפקיד\" [(ngModel)]=\"lostForm.position\" stdFieldValidation>\n              <div *ngIf=\"position.invalid&&position.dirty\"><label class=\"label red\">מוגבל ל-30 תווים</label></div>\n            </div>\n          </div>\n        </div>\n\n        <h6> <b>פרטי הדיווח:</b></h6>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"eventDate\" class=\"label\">תאריך גילוי האירוע</label>\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"eventDate\" id=\"eventDate\" #eventDate=\"ngModel\" status=\"primary\" placeholder=\"תאריך גילוי האירוע\" [(ngModel)]=\"lostForm.eventDate\" dateValidation>\n                <div *ngIf=\"eventDate.invalid&&eventDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"eventHour\" class=\"label\">שעת גילוי האירוע</label>\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventHour name=\"eventHour\" id=\"eventHour\" status=\"primary\" placeholder=\"שעת גילוי האירוע\" [(ngModel)]=\"lostForm.eventHour\" timeValidation>\n                <div *ngIf=\"eventHour.invalid&&eventHour.dirty\"><label class=\"label red\">פורמט השעה: 00:00</label></div>\n              </div>\n            </div>\n          </div>\n\n          <h6><b>פרטי האובדן:</b></h6>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipment\" class=\"label\">ציוד/חומר</label>\n                <nb-select [disabled]=\"this.lostForm.editStateBlocked\" name=\"equipment\" id=\"equipment\" status=\"primary\" placeholder=\"ציוד/חומר\" [(ngModel)]=\"lostForm.equipment\">\n                  <nb-option *ngFor=\"let equipment of equipments\" [value]=\"equipment.name\" (click)=\"equipmentsTypeOptions=equipment.list; lostForm.equipmentType=''\">{{equipment.name}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"equipmentType\" class=\"label\">סוג ציוד/חומר</label>\n                <nb-select [disabled]=\"this.lostForm.editStateBlocked\" name=\"equipmentType\" id=\"equipmentType\" status=\"primary\" placeholder=\"סוג ציוד/חומר\" [(ngModel)]=\"lostForm.equipmentType\">\n                  <nb-option *ngFor=\"let equipment of equipmentsTypeOptions\" [value]=\"equipment\">{{equipment}}</nb-option>  \n                </nb-select>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMark\" class=\"label\">סימון ציוד/חומר</label>\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMark=\"ngModel\" name=\"equipmentMark\" id=\"equipmentMark\" status=\"primary\" placeholder=\"סימון ציוד/חומר\" [(ngModel)]=\"lostForm.equipmentMark\" markValidation>\n                <div *ngIf=\"equipmentMark.invalid&&equipmentMark.dirty\"><label class=\"label red\">XXXXXXXXX או YYYYYY-XXX</label></div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"equipmentMakat\" class=\"label\">מק\"ט ציוד/עותק חומר</label>\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #equipmentMakat=\"ngModel\" name=\"equipmentMakat\" id=\"equipmentMakat\" status=\"primary\" placeholder=\"מק''ט ציוד/עותק חומר\" [(ngModel)]=\"lostForm.equipmentMakat\" makatCopyValidation>\n                <div *ngIf=\"equipmentMakat.invalid&&equipmentMakat.dirty\"><label class=\"label red\">3 ספרות או 12 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6><b>גורמים ומקומות רלוונטים לאירוע:</b></h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventRelevantPlacesAndFactors=\"ngModel\" name=\"eventRelevantPlacesAndFactors\" id=\"eventRelevantPlacesAndFactors\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"lostForm.eventRelevantPlacesAndFactors\" textValidation>\n                <div *ngIf=\"eventRelevantPlacesAndFactors.invalid&&eventRelevantPlacesAndFactors.dirty\"><label class=\"label red\">עד 100 תווים</label></div>\n              </div>\n            </div>\n          </div>\n          <h6><b>פרטי המקרה כפי שידועים מהבירור הראשוני:</b></h6>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #eventInitialDetails=\"ngModel\" name=\"eventInitialDetails\" id=\"eventInitialDetails\" status=\"primary\" placeholder=\"מלל חופשי\" [(ngModel)]=\"lostForm.eventInitialDetails\" textValidation>\n                <div *ngIf=\"eventInitialDetails.invalid&&eventInitialDetails.dirty\"><label class=\"label red\">עד 100 תווים</label></div>\n              </div>\n            </div>\n          </div>\n      </form>\n      <div style=\"display: flex; justify-content: center;\">\n        <h6><b><u>טיפול באירוע</u></b></h6>\n      </div>\n      <form>\n        <h6><b>פרטי הבירור:</b></h6>\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"investigationDate\" class=\"label\">תאריך הבירור</label>\n              <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth name=\"investigationDate\" #investigationDate=\"ngModel\" id=\"investigationDate\" status=\"primary\" placeholder=\"תאריך הבירור\" [(ngModel)]=\"lostForm.investigationDate\"  dateValidation>\n              <div *ngIf=\"investigationDate.invalid&&investigationDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n            </div>\n          </div>\n        \n        <div *ngIf=\"lostForm.investigationFile\" class=\"col-md-3\">\n          <ngx-file-download-button [fileFullName]=\"lostForm.investigationFile\"></ngx-file-download-button>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"investigationFile\" class=\"label\">צרף קובץ</label>\n            <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"investigationFile\" id=\"investigationFile\">\n          </div>\n        </div>\n      </div>\n      <h6><b>פרטי המציאה:</b></h6>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"findingDate\" class=\"label\">תאריך המציאה</label>\n            <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #findingDate=\"ngModel\" name=\"findingDate\" id=\"findingDate\" status=\"primary\" placeholder=\"תאריך המציאה\" [(ngModel)]=\"lostForm.findingDate\"  dateValidation>\n            <div *ngIf=\"findingDate.invalid&&findingDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n          </div>\n        </div>\n        <div *ngIf=\"lostForm.findingFile\" class=\"col-md-3\">\n          <ngx-file-download-button [fileFullName]=\"lostForm.findingFile\"></ngx-file-download-button>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"findingFile\" class=\"label\">צרף קובץ</label>\n            <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"findingFile\" id=\"findingFile\">\n          </div>\n        </div>\n      </div>\n      <h6><b>פרטי הטיפול:</b></h6>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"handlingDate\" class=\"label\">תאריך הטיפול</label>\n            <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"text\" nbInput fullWidth #handlingDate=\"ngModel\" name=\"handlingDate\" id=\"handlingDate\" status=\"primary\" placeholder=\"תאריך הטיפול\" [(ngModel)]=\"lostForm.handlingDate\"  dateValidation>\n            <div *ngIf=\"handlingDate.invalid&&handlingDate.dirty\"><label class=\"label red\">פורמט התאריך הוא: dd/mm/yyyy</label></div>\n          </div>\n        </div>\n        <div *ngIf=\"lostForm.handlingFile\" class=\"col-md-3\">\n          <ngx-file-download-button [fileFullName]=\"lostForm.handlingFile\"></ngx-file-download-button>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"handlingFile\" class=\"label\">צרף קובץ</label>\n            <input [readonly]=\"this.lostForm.editStateBlocked\" type=\"file\" (change)=\"handleFileUpload($event)\" name=\"handlingFile\" id=\"handlingFile\">\n          </div>\n        </div>\n      </div>\n      <!-- <div *ngIf=\"lostForm.reference\" #chatWrapper>\n        <chat #chat [messages]=\"msgs\" [reference]=\"lostForm.reference\"></chat>\n      </div> -->\n      <chat id=\"outOfPrint\" messages=\"lostForm.messages\"></chat>\n    </form>\n    </nb-card-body>\n  </nb-card>\n</div>\n</div>\n\n<ng-template #dialog let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מעלה את הבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" routerLink=\"/pages/control-table\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialog2 let-data let-ref=\"dialogRef\">\n  <nb-card [nbSpinner]=\"uploadLoading\" nbSpinnerSize=\"large\" nbSpinnerStatus=\"primary\">\n    <nb-card-header>מטפל בבקשה</nb-card-header>\n    <nb-card-body>{{this.popUpDialogContext}}</nb-card-body>\n    <nb-card-footer style=\"display: flex; justify-content: center;\">\n      <button nbButton (click)=\"ref.close()\" status=\"primary\" [disabled]=\"uploadLoading\" hero>סיום</button>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/events-forms/lost-form/lost-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/events-forms/lost-form/lost-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline [fullWidth] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n\n.red {\n  color: red; }\n\n/deep/ .cdk-global-scrollblock {\n  position: static;\n  overflow: hidden !important; }\n\n@media only print {\n  /* Intended for paged material and for documents\n       viewed on screen in print preview mode .*/\n  #outOfPrint {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzLWZvcm1zL2xvc3QtZm9ybS9DOlxcVXNlcnNcXHp4YXM5XFxwcm9qZWN0c1xcZG5hXFxmcm9udGVuZC1uZXcvc3JjXFxhcHBcXHBhZ2VzXFxldmVudHMtZm9ybXNcXGxvc3QtZm9ybVxcbG9zdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQU87TUFBUCxZQUFPO1VBQVAsUUFBTyxFQUNSOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUdEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFO2lEQUM2QztFQUM3QztJQUNJLGNBQWEsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy1mb3Jtcy9sb3N0LWZvcm0vbG9zdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2hlY2tib3gge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmZvcm0taW5saW5lID4gKiB7XG4gICAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcbiAgfVxuICBcbiAgbmItY2FyZC5pbmxpbmUtZm9ybS1jYXJkIG5iLWNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgXG4gIFxuICAucmVke1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC9kZWVwLyAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgLyogSW50ZW5kZWQgZm9yIHBhZ2VkIG1hdGVyaWFsIGFuZCBmb3IgZG9jdW1lbnRzXG4gICAgICAgdmlld2VkIG9uIHNjcmVlbiBpbiBwcmludCBwcmV2aWV3IG1vZGUgLiovXG4gICAgI291dE9mUHJpbnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/events-forms/lost-form/lost-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/events-forms/lost-form/lost-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: LostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostFormComponent", function() { return LostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _events_forms_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-forms.templates */ "./src/app/pages/events-forms/events-forms.templates.ts");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/event-status/event-status.component */ "./src/app/pages/events-forms/components/event-status/event-status.component.ts");
/* harmony import */ var _validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validation-directives/std-field.directive */ "./src/app/pages/events-forms/validation-directives/std-field.directive.ts");
/* harmony import */ var _validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation-directives/date.directive */ "./src/app/pages/events-forms/validation-directives/date.directive.ts");
/* harmony import */ var _validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation-directives/id.directive */ "./src/app/pages/events-forms/validation-directives/id.directive.ts");
/* harmony import */ var _validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validation-directives/makat-copy.directive */ "./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts");
/* harmony import */ var _validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../validation-directives/mark.directive */ "./src/app/pages/events-forms/validation-directives/mark.directive.ts");
/* harmony import */ var _validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../validation-directives/time.directive */ "./src/app/pages/events-forms/validation-directives/time.directive.ts");
/* harmony import */ var _validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../validation-directives/text.directive */ "./src/app/pages/events-forms/validation-directives/text.directive.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/auth-service */ "./src/app/services/auth-service.ts");
















var LostFormComponent = /** @class */ (function () {
    function LostFormComponent(auth, RestApiService, activatedRoute, dialogService, router) {
        this.auth = auth;
        this.RestApiService = RestApiService;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.router = router;
        this.eventType = 'אובדן ציוד';
        this.eventFilesFields = ['handlingFile', 'findingFile', 'investigationFile'];
        this.lostForm = new _events_forms_templates__WEBPACK_IMPORTED_MODULE_5__["LostFormTemplate"]();
        this.reference = undefined;
        this.formFiles = [];
        this.readonly = true;
        this.popUpDialogContext = '';
        this.uploadLoading = false;
        this.eventStatusOptions = ["טופל", "טרם טופל"];
        this.units = [];
        this.ranks = [];
        this.equipmentsType = ["סוג 1", "סוג 2", "סוג 3"];
        this.materialsType = ["חומר 1", "חומר 2", "חומר 3"];
        this.equipments = [{ "name": "ציוד", "list": this.equipmentsType }, { "name": "חומר פיסי", "list": this.materialsType }, { "name": "חומר לוגי", "list": this.materialsType }];
        this.equipmentsTypeOptions = [];
        this.formGroupEle = [
            this.signerName,
            this.signerId,
            this.position,
            this.eventDate,
            this.eventHour,
            this.equipmentMark,
            this.equipmentMakat,
            this.eventRelevantPlacesAndFactors,
            this.eventInitialDetails,
            this.investigationDate,
            this.findingDate,
            this.handlingDate
        ];
    }
    LostFormComponent.prototype.handleFileUpload = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.formFiles.push({ 'id': target.attributes.id.value, 'file': target.files.item(0) });
    };
    LostFormComponent.prototype.ngOnInit = function () {
        // Set eventType field according to the form event type
        this.lostForm.eventType = this.eventType;
        // Recieve form data from db according to its reference
        this.reference = this.activatedRoute.snapshot.params.reference;
        // Load all pages constants
        this.getConstasFeilds();
        if (this.reference) {
            this.exisitingFormLoadData(this.reference);
        }
        else {
            this.readonly = false;
            this.newFormLoadData();
        }
    };
    LostFormComponent.prototype.openWithoutBackdropClick = function (dialog) {
        this.dialogService.open(dialog, {
            //context: this.formUploadResult.reference,
            closeOnBackdropClick: true,
        });
    };
    LostFormComponent.prototype.checkFieldsValid = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'signerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.signerName, [Object(_validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_8__["stdFieldValidator"])()]),
            'signerId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.signerId, [Object(_validation_directives_id_directive__WEBPACK_IMPORTED_MODULE_10__["idValidator"])()]),
            'position': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.position, [Object(_validation_directives_std_field_directive__WEBPACK_IMPORTED_MODULE_8__["stdFieldValidator"])()]),
            'eventDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.eventDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])()]),
            'eventHour': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.eventHour, [Object(_validation_directives_time_directive__WEBPACK_IMPORTED_MODULE_13__["timeValidator"])()]),
            'equipmentMark': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.equipmentMark, [Object(_validation_directives_mark_directive__WEBPACK_IMPORTED_MODULE_12__["markValidator"])()]),
            'equipmentMakat': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.equipmentMakat, [Object(_validation_directives_makat_copy_directive__WEBPACK_IMPORTED_MODULE_11__["makatCopyValidator"])()]),
            'eventRelevantPlacesAndFactors': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.eventRelevantPlacesAndFactors, [Object(_validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_14__["textValidator"])()]),
            'eventInitialDetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.eventInitialDetails, [Object(_validation_directives_text_directive__WEBPACK_IMPORTED_MODULE_14__["textValidator"])()]),
            'investigationDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.investigationDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])()]),
            'findingDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.findingDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])()]),
            'handlingDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lostForm.handlingDate, [Object(_validation_directives_date_directive__WEBPACK_IMPORTED_MODULE_9__["dateValidator"])()]),
        });
        var fieldsValid = true;
        for (var field in formGroup.controls) {
            if (!formGroup.controls[field].valid) {
                //  if(field.valid && field.dirty) {
                fieldsValid = false;
            }
        }
        return fieldsValid;
    };
    LostFormComponent.prototype.onSubmit = function () {
        this.uploadLoading = true;
        if (this.checkFieldsValid()) {
            this.openWithoutBackdropClick(this.dialog);
            this.save();
        }
        else {
            this.uploadLoading = false;
            this.popUpDialogContext = "\u05E9\u05D3\u05D4 \u05D0\u05D7\u05D3 \u05DC\u05E4\u05D7\u05D5\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D0\u05D5 \u05D7\u05E1\u05E8";
            this.openWithoutBackdropClick(this.dialog2);
        }
    };
    LostFormComponent.prototype.getFileName = function (fileNameWithPath) {
        if (fileNameWithPath)
            return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1);
    };
    LostFormComponent.prototype.newFormLoadData = function () {
        var _this = this;
        this.RestApiService.getNewEventForm().subscribe(function (data_from_server) {
            _this.lostForm.date = data_from_server.datetime;
            _this.lostForm.reporterName = localStorage.getItem("firstName");
            _this.lostForm.reporterUnit = localStorage.getItem("unit");
        });
    };
    LostFormComponent.prototype.exisitingFormLoadData = function (reference) {
        var _this = this;
        this.RestApiService.getExistingEventForm(reference).subscribe(function (data_from_server) {
            _this.lostForm = data_from_server;
            console.log(data_from_server);
            if (_this.lostForm.editStateBlocked || _this.auth.check_permissions(['מנהלן מערכת', 'מדווח אירועים'])) {
                _this.lostForm.editStateBlocked = false;
            }
            else {
                _this.lostForm.editStateBlocked = true;
            }
        });
        // this.get_constas_feilds()
    };
    LostFormComponent.prototype.getConstasFeilds = function () {
        var _this = this;
        this.RestApiService.getConstansFieldsAndUnitsArray().subscribe(function (data) {
            _this.equipmentsType = data.equipmentType;
            _this.ranks = data.rank;
            _this.materialsType = data.materialType;
            _this.eventStatusOptions = data.eventStatus;
            _this.units = data.units;
            console.log(data);
            //this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
            //this.equipmentsTypeOptions = this.equipments.map(el => {if(el['name']==this.lostForm.equipment) return el['list']; else return undefined; }).filter(el => el!=null)[0]
        });
    };
    LostFormComponent.prototype.save = function () {
        var _this = this;
        var formData = new FormData();
        this.lostForm = this.eventStatusForm.pushFormFields(this.lostForm);
        // insert lostForm to FormData object
        for (var _i = 0, _a = Object.entries(this.lostForm); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value && !this.eventFilesFields.includes(key)) {
                formData.append(key, value);
            }
        }
        // insert all files to FormData object
        for (var _c = 0, _d = this.formFiles; _c < _d.length; _c++) {
            var formFile = _d[_c];
            formData.append(formFile['id'], formFile['file'], formFile['file'].name);
        }
        if (this.reference) {
            this.RestApiService.updateExistingEventForm(this.reference, formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05EA\u05E2\u05D3\u05DB\u05DF \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
        else {
            this.RestApiService.createNewEventFormWithFiles(formData)
                .subscribe(function (data) {
                _this.uploadLoading = false;
                _this.reference = data.reference;
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05D5\u05E6\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05E1\u05D9\u05DE\u05D5\u05DB\u05D9\u05DF: " + _this.reference;
            }, function (error) { return console.log(error); });
        }
        //this.lostForm = new LostFormTemplate(); // initialize form
    };
    LostFormComponent.prototype.checkPermissions = function () {
        return ((this.auth.check_permissions(['מדווח אירועים']) && localStorage.getItem('unit') == this.lostForm.reporterUnit) || this.auth.check_permissions(['מנהלן מערכת']));
    };
    LostFormComponent.prototype.updateEditState = function () {
        var _this = this;
        this.lostForm.editStateBlocked = !this.lostForm.editStateBlocked;
        this.uploadLoading = true;
        this.openWithoutBackdropClick(this.dialog2);
        var formData = new FormData();
        formData.append('editStateBlocked', (this.lostForm.editStateBlocked).toString());
        this.RestApiService.updateExistingEventForm(this.reference, formData)
            .subscribe(function (data) {
            _this.uploadLoading = false;
            if (data.editStateBlocked) {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E1\u05D2\u05E8 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
            else {
                _this.popUpDialogContext = "\u05D4\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E0\u05E4\u05EA\u05D7 \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4";
            }
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dialog"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "dialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dialog2"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "dialog2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("status"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_event_status_event_status_component__WEBPACK_IMPORTED_MODULE_7__["EventStatusComponent"])
    ], LostFormComponent.prototype, "eventStatusForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("signerName"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "signerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("signerId"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "signerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("position"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "eventDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventHour"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "eventHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("equipmentMark"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "equipmentMark", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("equipmentMakat"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "equipmentMakat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventRelevantPlacesAndFactors"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "eventRelevantPlacesAndFactors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("eventInitialDetails"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "eventInitialDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("investigationDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "investigationDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("findingDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "findingDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("handlingDate"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LostFormComponent.prototype, "handlingDate", void 0);
    LostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-form-layouts',
            template: __webpack_require__(/*! ./lost-form.component.html */ "./src/app/pages/events-forms/lost-form/lost-form.component.html"),
            styles: [__webpack_require__(/*! ./lost-form.component.scss */ "./src/app/pages/events-forms/lost-form/lost-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LostFormComponent);
    return LostFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/date.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/date.directive.ts ***!
  \****************************************************************************/
/*! exports provided: DateDirective, dateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDirective", function() { return DateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateValidator", function() { return dateValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DateDirective = /** @class */ (function () {
    function DateDirective() {
    }
    DateDirective_1 = DateDirective;
    DateDirective.prototype.validate = function (control) {
        var regEx = /^\d\d\/\d\d\/\d\d\d\d$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'dateValidation': true };
    };
    var DateDirective_1;
    DateDirective = DateDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dateValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: DateDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateDirective);
    return DateDirective;
}());

function dateValidator() {
    var nameRe = /^\d\d\/\d\d\/\d\d\d\d$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/id.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/id.directive.ts ***!
  \**************************************************************************/
/*! exports provided: IdDirective, idValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdDirective", function() { return IdDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idValidator", function() { return idValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var IdDirective = /** @class */ (function () {
    function IdDirective() {
    }
    IdDirective_1 = IdDirective;
    IdDirective.prototype.validate = function (control) {
        var regEx = /^[0-9]{7,9}$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'idValidation': true };
    };
    var IdDirective_1;
    IdDirective = IdDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[idValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: IdDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IdDirective);
    return IdDirective;
}());

function idValidator() {
    var nameRe = /^[0-9]{7,9}$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        console.log('fo', forbidden);
        return !forbidden ? { 'signerId': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/makat-copy.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: MakatCopyDirective, makatCopyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakatCopyDirective", function() { return MakatCopyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makatCopyValidator", function() { return makatCopyValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MakatCopyDirective = /** @class */ (function () {
    function MakatCopyDirective() {
    }
    MakatCopyDirective_1 = MakatCopyDirective;
    MakatCopyDirective.prototype.validate = function (control) {
        var regEx = /^(.{0,12}|\d{3})$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'makatCopyValidation': true };
    };
    var MakatCopyDirective_1;
    MakatCopyDirective = MakatCopyDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[makatCopyValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MakatCopyDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MakatCopyDirective);
    return MakatCopyDirective;
}());

function makatCopyValidator() {
    var nameRe = /^(.{0,12}|\d{3})$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/mark.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/mark.directive.ts ***!
  \****************************************************************************/
/*! exports provided: MarkDirective, markValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkDirective", function() { return MarkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markValidator", function() { return markValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MarkDirective = /** @class */ (function () {
    function MarkDirective() {
    }
    MarkDirective_1 = MarkDirective;
    MarkDirective.prototype.validate = function (control) {
        var regEx = /^(.{6}\-\d{3}|\d{9})$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'markValidation': true };
    };
    var MarkDirective_1;
    MarkDirective = MarkDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[markValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MarkDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarkDirective);
    return MarkDirective;
}());

function markValidator() {
    var nameRe = /^(.{6}\-\d{3}|\d{9})$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/std-field.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/std-field.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: StdFieldDirective, stdFieldValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StdFieldDirective", function() { return StdFieldDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdFieldValidator", function() { return stdFieldValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var StdFieldDirective = /** @class */ (function () {
    function StdFieldDirective() {
    }
    StdFieldDirective_1 = StdFieldDirective;
    StdFieldDirective.prototype.validate = function (control) {
        var regEx = /^.{0,30}$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'stdFieldValidation': true };
    };
    var StdFieldDirective_1;
    StdFieldDirective = StdFieldDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[stdFieldValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: StdFieldDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StdFieldDirective);
    return StdFieldDirective;
}());

function stdFieldValidator() {
    var nameRe = /^.{0,30}$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/text.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/text.directive.ts ***!
  \****************************************************************************/
/*! exports provided: TextDirective, textValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textValidator", function() { return textValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TextDirective = /** @class */ (function () {
    function TextDirective() {
    }
    TextDirective_1 = TextDirective;
    TextDirective.prototype.validate = function (control) {
        var regEx = /^.{0,100}$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'textValidation': true };
    };
    var TextDirective_1;
    TextDirective = TextDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[textValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: TextDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextDirective);
    return TextDirective;
}());

function textValidator() {
    var nameRe = /^.{0,100}$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/pages/events-forms/validation-directives/time.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events-forms/validation-directives/time.directive.ts ***!
  \****************************************************************************/
/*! exports provided: TimeDirective, timeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDirective", function() { return TimeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeValidator", function() { return timeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TimeDirective = /** @class */ (function () {
    function TimeDirective() {
    }
    TimeDirective_1 = TimeDirective;
    TimeDirective.prototype.validate = function (control) {
        var regEx = /^\d\d\:\d\d$/i;
        var valid = regEx.test(control.value);
        return valid ? null : { 'timeValidation': true };
    };
    var TimeDirective_1;
    TimeDirective = TimeDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[timeValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: TimeDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeDirective);
    return TimeDirective;
}());

function timeValidator() {
    var nameRe = /^\d\d\:\d\d$/i;
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return !forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ })

}]);
//# sourceMappingURL=events-forms-forms-module.js.map