(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toasts/toasts.component */ "./src/app/components/toasts/toasts.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toasts");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_2__["ToastsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _views_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user-panel/user-panel.component */ "./src/app/views/user-panel/user-panel.component.ts");
/* harmony import */ var _views_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/login-card/login-card.component */ "./src/app/views/login-card/login-card.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_injectable_redirect_to_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/injectable/redirect-to-panel */ "./src/app/guards/injectable/redirect-to-panel.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/challenges-list/challenges-list.component */ "./src/app/components/challenges-list/challenges-list.component.ts");
/* harmony import */ var _components_challenge_create_form_challenge_create_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/challenge-create-form/challenge-create-form.component */ "./src/app/components/challenge-create-form/challenge-create-form.component.ts");
/* harmony import */ var _views_challenge_submission_challenge_submission_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/challenge-submission/challenge-submission.component */ "./src/app/views/challenge-submission/challenge-submission.component.ts");
/* harmony import */ var _components_submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/submission-form/submission-form.component */ "./src/app/components/submission-form/submission-form.component.ts");
/* harmony import */ var _components_challenge_submission_form_challenge_submission_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/challenge-submission-form/challenge-submission-form.component */ "./src/app/components/challenge-submission-form/challenge-submission-form.component.ts");
/* harmony import */ var _components_challenge_list_group_challenge_list_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/challenge-list-group/challenge-list-group.component */ "./src/app/components/challenge-list-group/challenge-list-group.component.ts");
/* harmony import */ var _components_challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/challenge-display/challenge-display.component */ "./src/app/components/challenge-display/challenge-display.component.ts");
/* harmony import */ var _views_challenge_evaluation_challenge_evaluation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/challenge-evaluation/challenge-evaluation.component */ "./src/app/views/challenge-evaluation/challenge-evaluation.component.ts");
/* harmony import */ var _components_submission_list_group_submission_list_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/submission-list-group/submission-list-group.component */ "./src/app/components/submission-list-group/submission-list-group.component.ts");
/* harmony import */ var _components_challenge_list_group_item_challenge_list_group_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/challenge-list-group-item/challenge-list-group-item.component */ "./src/app/components/challenge-list-group-item/challenge-list-group-item.component.ts");
/* harmony import */ var _components_evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/evaluation-form/evaluation-form.component */ "./src/app/components/evaluation-form/evaluation-form.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/submission-list-group-item/submission-list-group-item.component */ "./src/app/components/submission-list-group-item/submission-list-group-item.component.ts");
/* harmony import */ var _components_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/submission-display/submission-display.component */ "./src/app/components/submission-display/submission-display.component.ts");
/* harmony import */ var _views_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/user-register/user-register.component */ "./src/app/views/user-register/user-register.component.ts");
/* harmony import */ var _views_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/my-submissions/my-submissions.component */ "./src/app/views/my-submissions/my-submissions.component.ts");
/* harmony import */ var _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/toasts/toasts.component */ "./src/app/components/toasts/toasts.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

































Object(_angular_common__WEBPACK_IMPORTED_MODULE_24__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_23___default.a);
const routes = [
    { path: 'panel', component: _views_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '', component: _views_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_7__["LoginCardComponent"], pathMatch: 'full', resolve: [_guards_injectable_redirect_to_panel__WEBPACK_IMPORTED_MODULE_10__["RedirectToPanel"]] },
    { path: '**', redirectTo: '' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-CL' },
        _guards_injectable_redirect_to_panel__WEBPACK_IMPORTED_MODULE_10__["RedirectToPanel"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbToastModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"],
        _views_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelComponent"],
        _views_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_7__["LoginCardComponent"],
        _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_12__["ChallengesListComponent"],
        _components_challenge_create_form_challenge_create_form_component__WEBPACK_IMPORTED_MODULE_13__["ChallengeCreateFormComponent"],
        _views_challenge_submission_challenge_submission_component__WEBPACK_IMPORTED_MODULE_14__["ChallengeSubmissionComponent"],
        _components_submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_15__["SubmissionFormComponent"],
        _components_challenge_submission_form_challenge_submission_form_component__WEBPACK_IMPORTED_MODULE_16__["ChallengeSubmissionFormComponent"],
        _components_challenge_list_group_challenge_list_group_component__WEBPACK_IMPORTED_MODULE_17__["ChallengeListGroupComponent"],
        _components_challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_18__["ChallengeDisplayComponent"],
        _views_challenge_evaluation_challenge_evaluation_component__WEBPACK_IMPORTED_MODULE_19__["ChallengeEvaluationComponent"],
        _components_submission_list_group_submission_list_group_component__WEBPACK_IMPORTED_MODULE_20__["SubmissionListGroupComponent"],
        _components_challenge_list_group_item_challenge_list_group_item_component__WEBPACK_IMPORTED_MODULE_21__["ChallengeListGroupItemComponent"],
        _components_evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_22__["EvaluationFormComponent"],
        _components_submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_25__["SubmissionListGroupItemComponent"],
        _components_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_26__["SubmissionDisplayComponent"],
        _views_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_27__["UserRegisterComponent"],
        _views_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_28__["MySubmissionsComponent"],
        _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_29__["ToastsComponent"],
        _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_29__["ToastsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"],
                    _views_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelComponent"],
                    _views_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_7__["LoginCardComponent"],
                    _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_12__["ChallengesListComponent"],
                    _components_challenge_create_form_challenge_create_form_component__WEBPACK_IMPORTED_MODULE_13__["ChallengeCreateFormComponent"],
                    _views_challenge_submission_challenge_submission_component__WEBPACK_IMPORTED_MODULE_14__["ChallengeSubmissionComponent"],
                    _components_submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_15__["SubmissionFormComponent"],
                    _components_challenge_submission_form_challenge_submission_form_component__WEBPACK_IMPORTED_MODULE_16__["ChallengeSubmissionFormComponent"],
                    _components_challenge_list_group_challenge_list_group_component__WEBPACK_IMPORTED_MODULE_17__["ChallengeListGroupComponent"],
                    _components_challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_18__["ChallengeDisplayComponent"],
                    _views_challenge_evaluation_challenge_evaluation_component__WEBPACK_IMPORTED_MODULE_19__["ChallengeEvaluationComponent"],
                    _components_submission_list_group_submission_list_group_component__WEBPACK_IMPORTED_MODULE_20__["SubmissionListGroupComponent"],
                    _components_challenge_list_group_item_challenge_list_group_item_component__WEBPACK_IMPORTED_MODULE_21__["ChallengeListGroupItemComponent"],
                    _components_evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_22__["EvaluationFormComponent"],
                    _components_submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_25__["SubmissionListGroupItemComponent"],
                    _components_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_26__["SubmissionDisplayComponent"],
                    _views_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_27__["UserRegisterComponent"],
                    _views_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_28__["MySubmissionsComponent"],
                    _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_29__["ToastsComponent"],
                    _components_toasts_toasts_component__WEBPACK_IMPORTED_MODULE_29__["ToastsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbToastModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-CL' },
                    _guards_injectable_redirect_to_panel__WEBPACK_IMPORTED_MODULE_10__["RedirectToPanel"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/challenge-create-form/challenge-create-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/challenge-create-form/challenge-create-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChallengeCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeCreateFormComponent", function() { return ChallengeCreateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-data/challenge.service */ "./src/app/services/wp-data/challenge.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ChallengeCreateFormComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeCreateFormComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El t\u00EDtulo debe ser de m\u00EDnimo ", ctx_r10.title.errors.minlength.requiredLength, " car\u00E1cteres");
} }
function ChallengeCreateFormComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El t\u00EDtulo debe ser de m\u00E1ximo ", ctx_r11.title.errors.maxlength.requiredLength, " car\u00E1cteres");
} }
function ChallengeCreateFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeCreateFormComponent_div_8_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeCreateFormComponent_div_8_span_2_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChallengeCreateFormComponent_div_8_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.maxlength);
} }
function ChallengeCreateFormComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeCreateFormComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La descripci\u00F3n debe ser de m\u00E1ximo 255 car\u00E1cteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeCreateFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeCreateFormComponent_div_17_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeCreateFormComponent_div_17_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.description.errors.maxlength);
} }
function ChallengeCreateFormComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type__r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type__r14.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type__r14.name);
} }
function ChallengeCreateFormComponent_div_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debes elegir un tipo de desaf\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeCreateFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeCreateFormComponent_div_27_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.type.errors.required);
} }
function ChallengeCreateFormComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No pueden quedar campos de requisitos vac\u00EDos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeCreateFormComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeCreateFormComponent_div_39_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const idx_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.removeRequirement(idx_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r17 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", idx_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.loading);
} }
function ChallengeCreateFormComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 35);
} }
function ChallengeCreateFormComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crear desaf\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengeCreateFormComponent {
    constructor(challenges) {
        this.challenges = challenges;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
        this.types = this.challenges.types;
    }
    ngOnInit() {
        this.challengeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.challenges.types[0].slug, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            requirements: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.addRequirement();
        this.addRequirement();
    }
    get title() {
        return this.challengeForm.get('title');
    }
    get description() {
        return this.challengeForm.get('description');
    }
    get type() {
        return this.challengeForm.get('type');
    }
    get requirements() {
        return this.challengeForm.get('requirements');
    }
    addRequirement() {
        this.requirements.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
    }
    removeRequirement(idx) {
        this.requirements.removeAt(idx);
    }
    submit() {
        const challenge = this.challengeForm.value;
        this.loading = true;
        return this.challenges.create(challenge)
            .then(() => this.submitted.emit())
            .catch((e) => {
            console.error(e);
            this.loading = false;
        });
    }
}
ChallengeCreateFormComponent.ɵfac = function ChallengeCreateFormComponent_Factory(t) { return new (t || ChallengeCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"])); };
ChallengeCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeCreateFormComponent, selectors: [["app-challenge-create-form"]], outputs: { submitted: "submitted" }, decls: 46, vars: 15, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "col-sm-6"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "required", "", 1, "form-control"], [1, "col-8"], ["class", "text-sm-left text-danger", 4, "ngIf"], [1, "col-4"], [1, "text-sm-right", "w-100", 3, "ngClass"], ["for", "description"], ["id", "description", "formControlName", "description", "required", "", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "type"], ["id", "type", "name", "type", "formControlName", "type", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-12"], ["type", "button", 1, "btn", "rounded-circle", "btn-primary", 3, "disabled", "click"], ["formArrayName", "requirements", 1, "col-12"], ["class", "col-12 text-danger mb-4", 4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row", "mt-5"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "90%", 3, "disabled"], ["class", "spinner-border text-light", 4, "ngIf", "ngIfElse"], ["waiting", ""], [1, "text-sm-left", "text-danger"], [4, "ngIf"], [1, "text-danger"], [3, "value"], [1, "col-12", "text-danger", "mb-4"], [1, "col-10"], [2, "width", "100%"], ["placeholder", "Subir un...", "required", "", 1, "form-control", 2, "resize", "none", 3, "formControlName"], [1, "col-2"], ["type", "button", 1, "btn", "bg-transparent", 3, "disabled", "click"], [1, "spinner-border", "text-light"]], template: function ChallengeCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChallengeCreateFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChallengeCreateFormComponent_div_8_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00BFQu\u00E9 hay que hacer para este desaf\u00EDo?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChallengeCreateFormComponent_div_17_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tipo de Desaf\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChallengeCreateFormComponent_option_24_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChallengeCreateFormComponent_div_27_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeCreateFormComponent_Template_button_click_34_listener() { return ctx.addRequirement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ChallengeCreateFormComponent_div_38_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ChallengeCreateFormComponent_div_39_Template, 7, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChallengeCreateFormComponent_div_43_Template, 1, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChallengeCreateFormComponent_ng_template_44_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.challengeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title.invalid && (ctx.title.dirty || ctx.title.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.title.errors == null ? null : ctx.title.errors.maxlength) ? "text-danger" : "text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title.value.length, " / 40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.description.errors == null ? null : ctx.description.errors.maxlength) ? "text-danger" : "text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.description.value.length, " / 255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type.invalid && (ctx.type.dirty || ctx.type.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.requirements.length >= 4 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requirements.invalid && (ctx.requirements.dirty || ctx.requirements.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requirements.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.challengeForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r7);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["form[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2UtY3JlYXRlLWZvcm0vY2hhbGxlbmdlLWNyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYWxsZW5nZS1jcmVhdGUtZm9ybS9jaGFsbGVuZ2UtY3JlYXRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeCreateFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-create-form',
                templateUrl: './challenge-create-form.component.html',
                styleUrls: ['./challenge-create-form.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }]; }, { submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/challenge-display/challenge-display.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/challenge-display/challenge-display.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChallengeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeDisplayComponent", function() { return ChallengeDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ChallengeDisplayComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", requirement_r3.description, " ");
} }
function ChallengeDisplayComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeDisplayComponent_li_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evidence_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](evidence_r4.description);
} }
function ChallengeDisplayComponent_li_17_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evidence_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", evidence_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](evidence_r4.description);
} }
function ChallengeDisplayComponent_li_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Evidencia sin descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeDisplayComponent_li_17_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeDisplayComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeDisplayComponent_li_17_span_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeDisplayComponent_li_17_a_2_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChallengeDisplayComponent_li_17_span_3_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChallengeDisplayComponent_li_17_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evidence_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", evidence_r4.description !== "" && !ctx_r2.isValidURL(evidence_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", evidence_r4.description !== "" && ctx_r2.isValidURL(evidence_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", evidence_r4.description === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isValid(evidence_r4));
} }
class ChallengeDisplayComponent {
    constructor() { }
    ngOnInit() { }
    get published() {
        return new Date(this.challenge.published);
    }
    isValidURL(url) {
        const urlReg = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        return url.match(urlReg);
    }
    isValid(evidence) {
        return evidence.description !== '' && evidence.url !== '' && this.isValidURL(evidence.url);
    }
}
ChallengeDisplayComponent.ɵfac = function ChallengeDisplayComponent_Factory(t) { return new (t || ChallengeDisplayComponent)(); };
ChallengeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeDisplayComponent, selectors: [["app-challenge-display"]], inputs: { challenge: "challenge", evidences: "evidences" }, decls: 18, vars: 8, consts: [[1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1", "unselectable"], [1, "text-muted"], [1, "list-group", "list-group-flush"], ["class", "list-group-item unselectable", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "list-group", "list-group-flush", "limit-scroll"], [1, "list-group-item", "unselectable"], [4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "text-muted text-sm-center", 4, "ngIf"], ["class", "text-sm-center text-danger", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "text-muted", "text-sm-center"], [1, "text-sm-center", "text-danger"]], template: function ChallengeDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00BFQu\u00E9 hay que hacer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChallengeDisplayComponent_li_14_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChallengeDisplayComponent_small_15_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChallengeDisplayComponent_li_17_Template, 5, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challenge.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Publicado el ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.published), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challenge.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.challenge.requirements);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evidences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evidences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".limit-scroll[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  height: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2UtZGlzcGxheS9jaGFsbGVuZ2UtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbGxlbmdlLWRpc3BsYXkvY2hhbGxlbmdlLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW1pdC1zY3JvbGwge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-display',
                templateUrl: './challenge-display.component.html',
                styleUrls: ['./challenge-display.component.css']
            }]
    }], function () { return []; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], evidences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/challenge-list-group-item/challenge-list-group-item.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/challenge-list-group-item/challenge-list-group-item.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChallengeListGroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeListGroupItemComponent", function() { return ChallengeListGroupItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ChallengeListGroupItemComponent_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.challenge.title);
} }
function ChallengeListGroupItemComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.challenge.title);
} }
function ChallengeListGroupItemComponent_small_13_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeListGroupItemComponent_small_13_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); $event.stopPropagation(); $event.preventDefault(); return ctx_r7.select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subir entrega ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeListGroupItemComponent_small_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ya entregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeListGroupItemComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeListGroupItemComponent_small_13_a_1_Template, 2, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeListGroupItemComponent_small_13_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.challenge.submitted_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.challenge.submitted_to);
} }
function ChallengeListGroupItemComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeListGroupItemComponent_small_14_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.stopPropagation(); $event.preventDefault(); return ctx_r9.select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Seleccionar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeListGroupItemComponent_div_19_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", requirement_r12.description, " ");
} }
function ChallengeListGroupItemComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Requisitos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChallengeListGroupItemComponent_div_19_li_4_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.challenge.requirements);
} }
class ChallengeListGroupItemComponent {
    constructor() {
        this.notSubmittedOnly = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expand = false;
    }
    ngOnInit() {
    }
    select() {
        this.selected.emit(this.challenge);
    }
    get published() {
        return new Date(this.challenge.published);
    }
}
ChallengeListGroupItemComponent.ɵfac = function ChallengeListGroupItemComponent_Factory(t) { return new (t || ChallengeListGroupItemComponent)(); };
ChallengeListGroupItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeListGroupItemComponent, selectors: [["app-challenge-list-group-item"]], inputs: { challenge: "challenge", notSubmittedOnly: "notSubmittedOnly" }, outputs: { selected: "selected" }, decls: 20, vars: 9, consts: [[1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", 3, "click"], [1, "row", "text-left"], [1, "col"], ["class", "mb-1 unselectable", 4, "ngIf"], ["class", "mb-1 unselectable text-muted", 4, "ngIf"], [1, "col", "text-right"], [1, "row"], [1, "unselectable", "w-100", "text-right"], ["class", "col", 4, "ngIf"], [1, "text-muted"], [1, "mb-1", "unselectable"], [4, "ngIf"], [1, "mb-1", "unselectable", "text-muted"], ["class", "participate text-right w-100", 3, "click", 4, "ngIf"], ["class", "text-dark text-right", 4, "ngIf"], [1, "participate", "text-right", "w-100", 3, "click"], [1, "text-dark", "text-right"], [1, "list-group", "list-group-flush"], ["class", "list-group-item unselectable", 4, "ngFor", "ngForOf"], [1, "list-group-item", "unselectable"]], template: function ChallengeListGroupItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeListGroupItemComponent_Template_a_click_0_listener() { return ctx.expand = !ctx.expand; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChallengeListGroupItemComponent_h5_3_Template, 2, 1, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChallengeListGroupItemComponent_h5_5_Template, 2, 1, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChallengeListGroupItemComponent_small_13_Template, 3, 2, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChallengeListGroupItemComponent_small_14_Template, 3, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BFQu\u00E9 hay que hacer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChallengeListGroupItemComponent_div_19_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notSubmittedOnly || ctx.notSubmittedOnly && !ctx.challenge.submitted_to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notSubmittedOnly && !!ctx.challenge.submitted_to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Publicado el ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.published), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expand && ctx.notSubmittedOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expand && !ctx.notSubmittedOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.challenge.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".list-group-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:active {\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n\r\n.unselectable[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.participate[_ngcontent-%COMP%] {\r\n  color: dodgerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.participate[_ngcontent-%COMP%]:hover {\r\n  color: dodgerblue;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2UtbGlzdC1ncm91cC1pdGVtL2NoYWxsZW5nZS1saXN0LWdyb3VwLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFFekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYWxsZW5nZS1saXN0LWdyb3VwLWl0ZW0vY2hhbGxlbmdlLWxpc3QtZ3JvdXAtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udW5zZWxlY3RhYmxlIHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGF0ZSB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFydGljaXBhdGU6aG92ZXIge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeListGroupItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-list-group-item',
                templateUrl: './challenge-list-group-item.component.html',
                styleUrls: ['./challenge-list-group-item.component.css']
            }]
    }], function () { return []; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notSubmittedOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/challenge-list-group/challenge-list-group.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/challenge-list-group/challenge-list-group.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChallengeListGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeListGroupComponent", function() { return ChallengeListGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _challenge_list_group_item_challenge_list_group_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../challenge-list-group-item/challenge-list-group-item.component */ "./src/app/components/challenge-list-group-item/challenge-list-group-item.component.ts");




function ChallengeListGroupComponent_app_challenge_list_group_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-challenge-list-group-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChallengeListGroupComponent_app_challenge_list_group_item_2_Template_app_challenge_list_group_item_selected_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const challenge_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(challenge_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenge_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notSubmittedOnly", ctx_r0.notSubmittedOnly)("challenge", challenge_r2);
} }
function ChallengeListGroupComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No existen todav\u00EDa desaf\u00EDos en esta categor\u00EDa... pero pronto habr\u00E1n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengeListGroupComponent {
    constructor() {
        this.notSubmittedOnly = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    select(challenge) {
        this.selected.emit(challenge);
    }
}
ChallengeListGroupComponent.ɵfac = function ChallengeListGroupComponent_Factory(t) { return new (t || ChallengeListGroupComponent)(); };
ChallengeListGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeListGroupComponent, selectors: [["app-challenge-list-group"]], inputs: { challenges: "challenges", notSubmittedOnly: "notSubmittedOnly" }, outputs: { selected: "selected" }, decls: 4, vars: 2, consts: [[1, "challenge-list"], [1, "list-group"], [3, "notSubmittedOnly", "challenge", "selected", 4, "ngFor", "ngForOf"], ["class", "text-muted text-center w-100", 4, "ngIf"], [3, "notSubmittedOnly", "challenge", "selected"], [1, "text-muted", "text-center", "w-100"]], template: function ChallengeListGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeListGroupComponent_app_challenge_list_group_item_2_Template, 1, 2, "app-challenge-list-group-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChallengeListGroupComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.challenges);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.challenges.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _challenge_list_group_item_challenge_list_group_item_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeListGroupItemComponent"]], styles: [".challenge-list[_ngcontent-%COMP%] {\r\n  height: 60vh;\r\n  overflow-y: auto;\r\n}\r\n\r\na.list-group-item[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2UtbGlzdC1ncm91cC9jaGFsbGVuZ2UtbGlzdC1ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYWxsZW5nZS1saXN0LWdyb3VwL2NoYWxsZW5nZS1saXN0LWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbGxlbmdlLWxpc3Qge1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeListGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-list-group',
                templateUrl: './challenge-list-group.component.html',
                styleUrls: ['./challenge-list-group.component.css']
            }]
    }], function () { return []; }, { challenges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notSubmittedOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/challenge-submission-form/challenge-submission-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/challenge-submission-form/challenge-submission-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChallengeSubmissionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeSubmissionFormComponent", function() { return ChallengeSubmissionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-data/challenge.service */ "./src/app/services/wp-data/challenge.service.ts");
/* harmony import */ var _challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../challenge-display/challenge-display.component */ "./src/app/components/challenge-display/challenge-display.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ChallengeSubmissionFormComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El comentario debe ser de m\u00E1ximo 255 car\u00E1cteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeSubmissionFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeSubmissionFormComponent_div_11_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment.errors.maxlength);
} }
function ChallengeSubmissionFormComponent_div_27_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "La descripci\u00F3n es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeSubmissionFormComponent_div_27_div_1_div_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La URL no puede estar vac\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeSubmissionFormComponent_div_27_div_1_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La URL no es v\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeSubmissionFormComponent_div_27_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeSubmissionFormComponent_div_27_div_1_div_20_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeSubmissionFormComponent_div_27_div_1_div_20_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.url.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.url.errors.pattern);
} }
function ChallengeSubmissionFormComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeSubmissionFormComponent_div_27_div_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.showPreviousEvidence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeSubmissionFormComponent_div_27_div_1_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showNextEvidence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChallengeSubmissionFormComponent_div_27_div_1_div_18_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChallengeSubmissionFormComponent_div_27_div_1_div_20_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9)("hidden", i_r9 !== ctx_r8.shownEvidenceIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r8.shownEvidenceIdx <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Evidencia ", ctx_r8.shownEvidenceIdx + 1, " / ", ctx_r8.evidences.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r8.shownEvidenceIdx >= ctx_r8.evidences.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.description.invalid && (ctx_r8.description.dirty || ctx_r8.description.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.url.invalid && (ctx_r8.url.dirty || ctx_r8.url.touched));
} }
function ChallengeSubmissionFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeSubmissionFormComponent_div_27_div_1_Template, 21, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rangeEvidence);
} }
function ChallengeSubmissionFormComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay evidencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeSubmissionFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
} }
function ChallengeSubmissionFormComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subir participaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengeSubmissionFormComponent {
    constructor(challenges) {
        this.challenges = challenges;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shownEvidenceIdx = 0;
        this.loading = false;
        this.types = this.challenges.types;
    }
    ngOnInit() {
        this.submissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)
            ]),
            evidence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.addEvidence();
        this.addEvidence();
    }
    get comment() {
        return this.submissionForm.get('comment');
    }
    get evidences() {
        return this.submissionForm.get('evidence');
    }
    get parsedEvidences() {
        return this.evidences.value;
    }
    get description() {
        return this.evidences.at(this.shownEvidenceIdx).get('description');
    }
    get url() {
        return this.evidences.at(this.shownEvidenceIdx).get('url');
    }
    get rangeEvidence() {
        return [...Array(this.evidences.length).keys()];
    }
    addEvidence() {
        const urlReg = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(urlReg)])
        });
        this.evidences.push(group);
        this.shownEvidenceIdx++;
        this.showPreviousEvidence();
    }
    removeEvidence() {
        this.evidences.removeAt(this.evidences.length - 1);
        this.shownEvidenceIdx--;
        this.showNextEvidence();
    }
    submit() {
        this.loading = true;
        return this.challenges.submit(this.submissionForm.value, this.challenge)
            .then(() => this.submitted.emit())
            .catch(() => this.loading = false);
    }
    showPreviousEvidence() {
        this.shownEvidenceIdx = Math.max(this.shownEvidenceIdx - 1, 0);
    }
    showNextEvidence() {
        this.shownEvidenceIdx = Math.min(this.shownEvidenceIdx + 1, this.evidences.length - 1);
    }
}
ChallengeSubmissionFormComponent.ɵfac = function ChallengeSubmissionFormComponent_Factory(t) { return new (t || ChallengeSubmissionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"])); };
ChallengeSubmissionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeSubmissionFormComponent, selectors: [["app-challenge-submission-form"]], inputs: { challenge: "challenge" }, outputs: { submitted: "submitted" }, decls: 36, vars: 13, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-4"], [3, "challenge", "evidences"], [1, "col-8"], [1, "col-12"], ["for", "comment"], ["id", "comment", "formControlName", "comment", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "text-sm-right", "w-100", 3, "ngClass"], ["type", "button", 1, "btn", "rounded-circle", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "rounded-circle", "btn-danger", 3, "disabled", "click"], ["formArrayName", "evidence", 1, "col-12"], [4, "ngIf", "ngIfElse"], ["noEvidence", ""], [1, "row", "mt-5"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "90%", 3, "disabled"], ["class", "spinner-border text-light", 4, "ngIf", "ngIfElse"], ["waiting", ""], [1, "text-danger"], [4, "ngIf"], ["class", "row", 3, "formGroupName", "hidden", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName", "hidden"], [1, "col-3"], [1, "text-center", "seq-btn", "unselectable", 3, "hidden", "click"], [1, "col-6", "text-center", "text-muted"], ["type", "text", "formControlName", "url", "placeholder", "https://www.example.com/evidence/file.png", "required", "", 1, "form-control", 2, "resize", "none"], ["type", "text", "formControlName", "description", "placeholder", "Foto/video/comprimido que tiene...", "required", "", 1, "form-control", 2, "resize", "none"], ["class", "col-12 text-danger mb-4", 4, "ngIf"], [1, "col-12", "text-danger", "mb-4"], [1, "col-12", "text-center", "text-muted"], [1, "spinner-border", "text-light"]], template: function ChallengeSubmissionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChallengeSubmissionFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-challenge-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comentario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChallengeSubmissionFormComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Evidencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeSubmissionFormComponent_Template_button_click_21_listener() { return ctx.addEvidence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeSubmissionFormComponent_Template_button_click_23_listener() { return ctx.removeEvidence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChallengeSubmissionFormComponent_div_27_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChallengeSubmissionFormComponent_ng_template_28_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ChallengeSubmissionFormComponent_div_33_Template, 1, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChallengeSubmissionFormComponent_ng_template_34_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.submissionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("challenge", ctx.challenge)("evidences", ctx.parsedEvidences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment.invalid && (ctx.comment.dirty || ctx.comment.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.comment.errors == null ? null : ctx.comment.errors.maxlength) ? "text-danger" : "text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.comment.value.length, " / 255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.evidences.length >= 10 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.evidences.length <= 1 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evidences.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submissionForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeDisplayComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".seq-btn[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: #eeeeee;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n}\r\n\r\n.seq-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.seq-btn[_ngcontent-%COMP%]:active {\r\n  background-color: #bbbbbb;\r\n}\r\n\r\n.unselectable[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2Utc3VibWlzc2lvbi1mb3JtL2NoYWxsZW5nZS1zdWJtaXNzaW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbGxlbmdlLXN1Ym1pc3Npb24tZm9ybS9jaGFsbGVuZ2Utc3VibWlzc2lvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VxLWJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uc2VxLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLnNlcS1idG46YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYmJiO1xyXG59XHJcblxyXG4udW5zZWxlY3RhYmxlIHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeSubmissionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-submission-form',
                templateUrl: './challenge-submission-form.component.html',
                styleUrls: ['./challenge-submission-form.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"] }]; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/challenges-list/challenges-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/challenges-list/challenges-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChallengesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesListComponent", function() { return ChallengesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wp-data/challenge.service */ "./src/app/services/wp-data/challenge.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _challenge_list_group_challenge_list_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../challenge-list-group/challenge-list-group.component */ "./src/app/components/challenge-list-group/challenge-list-group.component.ts");





function ChallengesListComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengesListComponent_div_0_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const type_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectedType = type_r5; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const challenges_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", type_r5.name)("ngClass", ctx_r4.selectedType === type_r5 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", type_r5.emoji, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.filterByType(type_r5.slug, challenges_r3).length);
} }
function ChallengesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChallengesListComponent_div_0_a_4_Template, 4, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-challenge-list-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChallengesListComponent_div_0_Template_app_challenge_list_group_selected_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selected.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenges_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.challengeTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notSubmittedOnly", ctx_r0.notSubmittedOnly)("challenges", ctx_r0.filterByType(ctx_r0.selectedType.slug, challenges_r3));
} }
function ChallengesListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cargando desaf\u00EDos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChallengesListComponent {
    constructor(challenges) {
        this.challenges = challenges;
        this.interactive = false;
        this.notSubmittedOnly = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.challenges$ = this.challenges.getAll();
        this.challengeTypes = this.challenges.types;
        this.selectedType = this.challengeTypes[0];
    }
    filterByType(type, challenges) {
        return challenges.filter(challenge => challenge.type === type);
    }
    selectChallenge(challenge) {
        this.selected.emit(challenge);
    }
}
ChallengesListComponent.ɵfac = function ChallengesListComponent_Factory(t) { return new (t || ChallengesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"])); };
ChallengesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengesListComponent, selectors: [["app-challenges-list"]], inputs: { interactive: "interactive", notSubmittedOnly: "notSubmittedOnly" }, outputs: { selected: "selected" }, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "row"], [1, "col-12"], [1, "nav", "nav-pills", "justify-content-center"], ["class", "nav-item nav-link", "data-toggle", "tooltip", "data-placement", "top", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10"], [3, "notSubmittedOnly", "challenges", "selected"], ["data-toggle", "tooltip", "data-placement", "top", 1, "nav-item", "nav-link", 3, "title", "ngClass", "click"], [1, "badge", "badge-light"], [1, "col-12", "text-center"], [1, "spinner-border", "text-danger"], [1, "col-12", "text-center", "text-danger"]], template: function ChallengesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChallengesListComponent_div_0_Template, 8, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengesListComponent_ng_template_2_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.challenges$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _challenge_list_group_challenge_list_group_component__WEBPACK_IMPORTED_MODULE_3__["ChallengeListGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.nav-link.active[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\nbackground-color: rgb(236, 26, 92);\r\nborder-radius: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFsbGVuZ2VzLWxpc3QvY2hhbGxlbmdlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYWxsZW5nZXMtbGlzdC9jaGFsbGVuZ2VzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluay5hY3RpdmUge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmV7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDI2LCA5Mik7XHJcbmJvcmRlci1yYWRpdXM6IDIycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenges-list',
                templateUrl: './challenges-list.component.html',
                styleUrls: ['./challenges-list.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"] }]; }, { interactive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notSubmittedOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/evaluation-form/evaluation-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/evaluation-form/evaluation-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: EvaluationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationFormComponent", function() { return EvaluationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wp-data/challenge.service */ "./src/app/services/wp-data/challenge.service.ts");
/* harmony import */ var _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-data/submissions.service */ "./src/app/services/wp-data/submissions.service.ts");
/* harmony import */ var _submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../submission-display/submission-display.component */ "./src/app/components/submission-display/submission-display.component.ts");
/* harmony import */ var _challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../challenge-display/challenge-display.component */ "./src/app/components/challenge-display/challenge-display.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class EvaluationFormComponent {
    constructor(challenges, submissions) {
        this.challenges = challenges;
        this.submissions = submissions;
        this.challenge = null;
        this.submission = null;
        this.evaluated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = '';
        this.loading = false;
        this.baseScore = 0;
        this.bonusScore = 0;
    }
    ngOnInit() {
        this.updateScore();
    }
    ngOnChanges(changes) {
        if (changes.challenge)
            this.updateScore();
    }
    get totalScore() {
        return this.baseScore + this.bonusScore;
    }
    updateScore() {
        if (this.challenge) {
            this.baseScore = this.challenges.typeBySlug[this.challenge.type].defaultScore;
        }
        else {
            this.baseScore = 0;
        }
    }
    approve() {
        this.loading = true;
        this.submissions.approve(this.submission, this.comment, this.totalScore)
            .then(() => this.evaluated.emit())
            .catch(() => this.loading = false);
    }
    reject() {
        this.loading = true;
        return this.submissions.reject(this.submission, this.comment)
            .then(() => this.evaluated.emit());
    }
}
EvaluationFormComponent.ɵfac = function EvaluationFormComponent_Factory(t) { return new (t || EvaluationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionsService"])); };
EvaluationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationFormComponent, selectors: [["app-evaluation-form"]], inputs: { challenge: "challenge", submission: "submission" }, outputs: { evaluated: "evaluated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 13, consts: [[1, "row"], [1, "col-6"], [3, "submission"], [3, "challenge"], [1, "col-12"], [1, "w-100"], ["id", "comment", 1, "form-control", "w-100", 3, "ngModel", "ngModelChange"], [1, "col-12", "text-center"], [1, "row", "justify-content-center", "mb-4"], [1, "col-2"], ["for", "baseScore"], ["id", "baseScore", "type", "number", 1, "form-control", 3, "value", "disabled"], ["for", "bonusScore"], ["id", "bonusScore", "type", "number", 1, "form-control", 3, "ngModel", "max", "min", "ngModelChange"], [1, "col-2", "text-lg-center", "text-black-50"], [1, "col-6", "text-center"], [1, "btn", "btn-outline-success", "btn-lg", "w-100", 3, "disabled", "click"], [1, "btn", "btn-outline-danger", "btn-lg", "w-100", 3, "disabled", "click"]], template: function EvaluationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-submission-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-challenge-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Comentario Evaluaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EvaluationFormComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Puntaje base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Puntaje bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EvaluationFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.bonusScore = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationFormComponent_Template_button_click_33_listener() { return ctx.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationFormComponent_Template_button_click_36_listener() { return ctx.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Reprobar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submission", ctx.submission);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("challenge", ctx.challenge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.baseScore)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bonusScore)("max", ctx.baseScore)("min", 0 - ctx.baseScore + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.totalScore, " puntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Aprobar con ", ctx.totalScore, " punto", ctx.totalScore == 1 ? "" : "s", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_3__["SubmissionDisplayComponent"], _challenge_display_challenge_display_component__WEBPACK_IMPORTED_MODULE_4__["ChallengeDisplayComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZhbHVhdGlvbi1mb3JtL2V2YWx1YXRpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evaluation-form',
                templateUrl: './evaluation-form.component.html',
                styleUrls: ['./evaluation-form.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_challenge_service__WEBPACK_IMPORTED_MODULE_1__["ChallengeService"] }, { type: _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionsService"] }]; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], evaluated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/forbidden-error */ "./src/app/errors/forbidden-error.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginFormComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            username: '',
            password: ''
        };
        this.disabled = false;
        this.error = null;
    }
    login() {
        this.error = null;
        this.disabled = true;
        this.auth.login(this.credentials.username, this.credentials.password)
            .then(() => {
            return this.router.navigate(['panel']);
        })
            .catch((err) => {
            if (err instanceof _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_1__["ForbiddenError"]) {
                this.error = 'Usuario y contraseña no coinciden';
            }
            else {
                this.error = 'Error desconocido';
            }
            this.disabled = false;
        });
    }
    ngOnInit() { }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 11, vars: 3, consts: [[1, "login-form", "text-left"], [1, "form-group"], ["for", "username"], ["id", "username", "type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", "required", ""], ["id", "password", "type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled", "click"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_4_listener($event) { return ctx.credentials.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_9_listener($event) { ctx.login(); return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-bottom: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/submission-display/submission-display.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/submission-display/submission-display.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubmissionDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionDisplayComponent", function() { return SubmissionDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SubmissionDisplayComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evidence_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", evidence_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](evidence_r1.description);
} }
class SubmissionDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubmissionDisplayComponent.ɵfac = function SubmissionDisplayComponent_Factory(t) { return new (t || SubmissionDisplayComponent)(); };
SubmissionDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmissionDisplayComponent, selectors: [["app-submission-display"]], inputs: { submission: "submission" }, decls: 11, vars: 6, consts: [[1, "container-fluid"], [1, "col-12"], [1, "text-muted"], [1, "list-group", "list-group-flush", "limit-scroll"], ["class", "list-group-item unselectable", 4, "ngFor", "ngForOf"], [1, "list-group-item", "unselectable"], ["target", "_blank", 3, "href"]], template: function SubmissionDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Evidencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SubmissionDisplayComponent_li_10_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Entrega del ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.submission.submitted, "fullDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submission.submission.comment, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.submission.submission.evidence);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWlzc2lvbi1kaXNwbGF5L3N1Ym1pc3Npb24tZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submission-display',
                templateUrl: './submission-display.component.html',
                styleUrls: ['./submission-display.component.css']
            }]
    }], function () { return []; }, { submission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/submission-form/submission-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/submission-form/submission-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubmissionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionFormComponent", function() { return SubmissionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SubmissionFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubmissionFormComponent.ɵfac = function SubmissionFormComponent_Factory(t) { return new (t || SubmissionFormComponent)(); };
SubmissionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmissionFormComponent, selectors: [["app-submission-form"]], decls: 2, vars: 0, template: function SubmissionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "submission-form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWlzc2lvbi1mb3JtL3N1Ym1pc3Npb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submission-form',
                templateUrl: './submission-form.component.html',
                styleUrls: ['./submission-form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/submission-list-group-item/submission-list-group-item.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/submission-list-group-item/submission-list-group-item.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SubmissionListGroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionListGroupItemComponent", function() { return SubmissionListGroupItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SubmissionListGroupItemComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmissionListGroupItemComponent_a_8_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.stopPropagation(); $event.preventDefault(); return ctx_r10.select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Evaluar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aprobado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rechazado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esperando evaluaci\u00F3n...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " evidencias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " evidencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comentario: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.submission.submission.comment, " ");
} }
function SubmissionListGroupItemComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay comentario adjunto a la entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comentario Evaluador: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.submission.evaluation.comment, " ");
} }
function SubmissionListGroupItemComponent_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " El evaluador no coment\u00F3 la entrega ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupItemComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubmissionListGroupItemComponent_div_21_small_1_Template, 5, 1, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubmissionListGroupItemComponent_div_21_small_2_Template, 3, 0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.submission.evaluation.comment && ctx_r9.submission.evaluation.comment !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.submission.evaluation.comment || ctx_r9.submission.evaluation.comment === "");
} }
class SubmissionListGroupItemComponent {
    constructor() {
        this.forEvaluation = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    select() {
        this.selected.emit();
    }
}
SubmissionListGroupItemComponent.ɵfac = function SubmissionListGroupItemComponent_Factory(t) { return new (t || SubmissionListGroupItemComponent)(); };
SubmissionListGroupItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmissionListGroupItemComponent, selectors: [["app-submission-list-group-item"]], inputs: { submission: "submission", forEvaluation: "forEvaluation" }, outputs: { selected: "selected" }, decls: 22, vars: 14, consts: [[1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", 3, "click"], [1, "row"], [1, "col-12"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1", "unselectable"], ["class", "participate", 3, "click", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "col-12", "text-muted"], [4, "ngIf"], [1, "col-12", "text-left"], [4, "ngIf", "ngIfElse"], ["noComments", ""], ["class", "col-12 text-left", 4, "ngIf"], [1, "participate", 3, "click"], [1, "text-success"], [1, "text-danger"], [1, "text-muted"]], template: function SubmissionListGroupItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmissionListGroupItemComponent_Template_a_click_0_listener() { return ctx.select(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SubmissionListGroupItemComponent_a_8_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SubmissionListGroupItemComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SubmissionListGroupItemComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubmissionListGroupItemComponent_span_11_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SubmissionListGroupItemComponent_span_15_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SubmissionListGroupItemComponent_span_16_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SubmissionListGroupItemComponent_small_18_Template, 5, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SubmissionListGroupItemComponent_ng_template_19_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SubmissionListGroupItemComponent_div_21_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Entrega del ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 11, ctx.submission.submitted, "fullDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submission.evaluation && ctx.forEvaluation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.submission.evaluation && ctx.submission.evaluation.approved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.submission.evaluation && !ctx.submission.evaluation.approved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submission.evaluation && !ctx.forEvaluation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submission.submission.evidence.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submission.submission.evidence.length !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submission.submission.evidence.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submission.submission.comment && ctx.submission.submission.comment !== "")("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submission.evaluation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".participate[_ngcontent-%COMP%] {\r\n  color: dodgerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.participate[_ngcontent-%COMP%]:hover {\r\n  color: dodgerblue;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXNzaW9uLWxpc3QtZ3JvdXAtaXRlbS9zdWJtaXNzaW9uLWxpc3QtZ3JvdXAtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXNzaW9uLWxpc3QtZ3JvdXAtaXRlbS9zdWJtaXNzaW9uLWxpc3QtZ3JvdXAtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY2lwYXRlIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGF0ZTpob3ZlciB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionListGroupItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submission-list-group-item',
                templateUrl: './submission-list-group-item.component.html',
                styleUrls: ['./submission-list-group-item.component.css']
            }]
    }], function () { return []; }, { submission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forEvaluation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/submission-list-group/submission-list-group.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/submission-list-group/submission-list-group.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SubmissionListGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionListGroupComponent", function() { return SubmissionListGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wp-data/submissions.service */ "./src/app/services/wp-data/submissions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submission-list-group-item/submission-list-group-item.component */ "./src/app/components/submission-list-group-item/submission-list-group-item.component.ts");






function SubmissionListGroupComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmissionListGroupComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const filter_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.activeFilter = filter_r4[0]; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r0.activeFilter === filter_r4[0] ? "nav-link active" : "nav-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r4[1].name);
} }
function SubmissionListGroupComponent_div_4_app_submission_list_group_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-submission-list-group-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function SubmissionListGroupComponent_div_4_app_submission_list_group_item_2_Template_app_submission_list_group_item_selected_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const submission_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.select(submission_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submission_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submission", submission_r11);
} }
function SubmissionListGroupComponent_div_4_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No quedan entregas pendientes para revisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupComponent_div_4_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Todav\u00EDa no hay participantes en esta desaf\u00EDo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubmissionListGroupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubmissionListGroupComponent_div_4_app_submission_list_group_item_2_Template, 1, 1, "app-submission-list-group-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubmissionListGroupComponent_div_4_p_3_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubmissionListGroupComponent_div_4_p_4_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submissions_r7 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", submissions_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submissions_r7.length === 0 && ctx_r1.filterCode === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submissions_r7.length === 0 && ctx_r1.filterCode === "all");
} }
function SubmissionListGroupComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando entregas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SubmissionListGroupComponent {
    constructor(submissions) {
        this.submissions = submissions;
        this.onlyNotEvaluated = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filters = {
            pending: { name: 'Pendientes', options: { notEvaluated: true } },
            all: { name: 'Todo', options: {} },
        };
        this.filtersItems = Object.entries(this.filters);
        this.filterCode = 'pending';
    }
    onChallengeUpdate(challenge) {
        const options = this.filters[this.filterCode].options;
        this.submissions$ = this.submissions.getFromChallenge(challenge, options);
    }
    ngOnInit() {
        this.onChallengeUpdate(this.challenge);
    }
    set activeFilter(code) {
        this.filterCode = code;
        const options = this.filters[this.filterCode].options;
        this.submissions$ = this.submissions.getFromChallenge(this.challenge, options);
    }
    get activeFilter() {
        return this.filterCode;
    }
    ngOnChanges(changes) {
        if (changes.challenge) {
            const challenge = changes.challenge.currentValue;
            this.onChallengeUpdate(challenge);
            return;
        }
    }
    select(submission) {
        if (this.onlyNotEvaluated && !!submission.evaluation)
            return;
        this.selected.emit(submission);
    }
}
SubmissionListGroupComponent.ɵfac = function SubmissionListGroupComponent_Factory(t) { return new (t || SubmissionListGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_1__["SubmissionsService"])); };
SubmissionListGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmissionListGroupComponent, selectors: [["app-submission-list-group"]], inputs: { challenge: "challenge", onlyNotEvaluated: "onlyNotEvaluated" }, outputs: { selected: "selected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 5, consts: [[1, "row"], [1, "col-12", "mb"], [1, "nav", "nav-pills", "nav-fill"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["class", "challenge-list", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "nav-item"], [3, "routerLink", "className", "click"], [1, "challenge-list"], [1, "list-group"], [3, "submission", "selected", 4, "ngFor", "ngForOf"], ["class", "text-muted text-center w-100", 4, "ngIf"], [3, "submission", "selected"], [1, "text-muted", "text-center", "w-100"], [1, "row", "mt-2"], [1, "col-12", "text-center"], [1, "spinner-border", "text-danger"], [1, "text-danger"]], template: function SubmissionListGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubmissionListGroupComponent_li_3_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubmissionListGroupComponent_div_4_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubmissionListGroupComponent_ng_template_6_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtersItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.submissions$))("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionListGroupItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWlzc2lvbi1saXN0LWdyb3VwL3N1Ym1pc3Npb24tbGlzdC1ncm91cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionListGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submission-list-group',
                templateUrl: './submission-list-group.component.html',
                styleUrls: ['./submission-list-group.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_1__["SubmissionsService"] }]; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onlyNotEvaluated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/toasts/toasts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/toasts/toasts.component.ts ***!
  \*******************************************************/
/*! exports provided: ToastsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsComponent", function() { return ToastsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function ToastsComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastsComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toast_r1.text, "\n");
} }
class ToastsComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() { }
}
ToastsComponent.ɵfac = function ToastsComponent_Factory(t) { return new (t || ToastsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
ToastsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastsComponent, selectors: [["app-toasts"]], hostVars: 2, hostBindings: function ToastsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
    } }, decls: 1, vars: 1, consts: [[3, "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"]], template: function ToastsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsComponent_ngb_toast_0_Template, 2, 5, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3RzL3RvYXN0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toasts',
                templateUrl: './toasts.component.html',
                styleUrls: ['./toasts.component.css'],
                host: { '[class.ngb-toasts]': 'true' }
            }]
    }], function () { return [{ type: _services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/errors/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/errors/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError extends Error {
    constructor(message, error) {
        super(message ? message : error === null || error === void 0 ? void 0 : error.message);
        this.error = error;
    }
}


/***/ }),

/***/ "./src/app/errors/forbidden-error.ts":
/*!*******************************************!*\
  !*** ./src/app/errors/forbidden-error.ts ***!
  \*******************************************/
/*! exports provided: ForbiddenError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenError", function() { return ForbiddenError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/errors/app-error.ts");

class ForbiddenError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/errors/invalid-error.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/invalid-error.ts ***!
  \*****************************************/
/*! exports provided: InvalidError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidError", function() { return InvalidError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/errors/app-error.ts");

class InvalidError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/errors/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/errors/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/errors/app-error.ts");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/errors/unauthorized-error.ts":
/*!**********************************************!*\
  !*** ./src/app/errors/unauthorized-error.ts ***!
  \**********************************************/
/*! exports provided: UnauthorizedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedError", function() { return UnauthorizedError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/errors/app-error.ts");

class UnauthorizedError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.isAuthenticated())
            return true;
        this.desiredUrl = state.url;
        this.router.navigate(['/']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/injectable/redirect-to-panel.ts":
/*!********************************************************!*\
  !*** ./src/app/guards/injectable/redirect-to-panel.ts ***!
  \********************************************************/
/*! exports provided: RedirectToPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectToPanel", function() { return RedirectToPanel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




class RedirectToPanel {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    resolve() {
        if (this.authService.isAuthenticated())
            this.router.navigate(['/panel']);
    }
}
RedirectToPanel.ɵfac = function RedirectToPanel_Factory(t) { return new (t || RedirectToPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
RedirectToPanel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RedirectToPanel, factory: RedirectToPanel.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedirectToPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _errors_invalid_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/invalid-error */ "./src/app/errors/invalid-error.ts");
/* harmony import */ var _wp_data_page_manger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wp-data/page-manger.service */ "./src/app/services/wp-data/page-manger.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast.service */ "./src/app/services/toast.service.ts");






class AuthService {
    constructor(pm, toasts) {
        this.pm = pm;
        this.toasts = toasts;
    }
    static get token() {
        var _a;
        return (_a = this.auth) === null || _a === void 0 ? void 0 : _a.token;
    }
    static get auth() {
        return JSON.parse(localStorage.getItem('t'));
    }
    static set auth(auth) {
        localStorage.setItem('t', JSON.stringify(auth));
    }
    login(username, password) {
        return this.pm.post('auth/login', { username, password })
            .then(auth => {
            AuthService.auth = auth;
            return AuthService.auth;
        })
            .catch((err) => {
            this.toasts.showError('Credenciales inválidas');
            throw err;
        });
    }
    registerUser(email, displayName, isAdmin = false) {
        return this.pm.post('users', {
            email, display_name: displayName, admin: isAdmin
        })
            .then((user) => {
            this.toasts.showSuccess(`El usuario ${user.username} ha sido registrado`);
            return user;
        })
            .catch((err) => {
            if (err instanceof _errors_invalid_error__WEBPACK_IMPORTED_MODULE_2__["InvalidError"]) {
                if (err.error.error.code === 'EMAIL_IN_USE') {
                    this.toasts.showError('Este correo ya está registrado');
                }
                else {
                    this.toasts.showError('Unknown error');
                }
            }
            else {
                this.toasts.showError('Unknown error');
            }
            throw err;
        });
    }
    me() {
        return this.pm.get('auth/me');
    }
    logout() {
        AuthService.auth = null;
    }
    isAuthenticated() {
        if (AuthService.auth) {
            const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
            if (jwtHelper.isTokenExpired(AuthService.auth.token))
                this.logout();
        }
        return !!AuthService.auth;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_wp_data_page_manger_service__WEBPACK_IMPORTED_MODULE_3__["PageMangerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _wp_data_page_manger_service__WEBPACK_IMPORTED_MODULE_3__["PageMangerService"] }, { type: _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastService {
    constructor() {
        this.toasts = [];
    }
    showError(text) {
        this.show(text, { classname: 'bg-danger text-light', delay: 15000 });
    }
    showSuccess(text) {
        this.show(text, { classname: 'bg-success text-light', delay: 15000 });
    }
    show(text, options = {}) {
        const toast = Object.assign({ text }, options);
        this.toasts.push(toast);
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/wp-data/challenge.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/wp-data/challenge.service.ts ***!
  \*******************************************************/
/*! exports provided: ChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_manger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manger.service */ "./src/app/services/wp-data/page-manger.service.ts");



class ChallengeService {
    constructor(pm) {
        this.pm = pm;
        this.types = [
            { slug: 'art2d', name: 'Desafío de Arte 2D', emoji: '🎨', defaultScore: 35 },
            { slug: 'programming', name: 'Desafío de Programación', emoji: '💻', defaultScore: 35 },
            { slug: 'music', name: 'Desafío de Música', emoji: '🎶', defaultScore: 35 },
            { slug: 'art3d', name: 'Desafío de Arte 3D', emoji: '🎲', defaultScore: 35 },
            { slug: 'gamedev', name: 'Desafío de Desarrollo', emoji: '🎮', defaultScore: 100 }
        ];
    }
    get typeBySlug() {
        const types = {};
        this.types.forEach(elem => {
            types[elem.slug] = {
                name: elem.name,
                emoji: elem.emoji,
                defaultScore: elem.defaultScore
            };
        });
        return types;
    }
    create(challenge) {
        challenge.notify = true;
        return this.pm.post('challenges', challenge);
    }
    submit(submission, challenge) {
        return this.pm.post(`challenges/${challenge.id}/submissions`, submission);
    }
    getAll() {
        return this.pm.get('challenges');
    }
}
ChallengeService.ɵfac = function ChallengeService_Factory(t) { return new (t || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_page_manger_service__WEBPACK_IMPORTED_MODULE_1__["PageMangerService"])); };
ChallengeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChallengeService, factory: ChallengeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _page_manger_service__WEBPACK_IMPORTED_MODULE_1__["PageMangerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/wp-data/page-manger.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/wp-data/page-manger.service.ts ***!
  \*********************************************************/
/*! exports provided: PageMangerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMangerService", function() { return PageMangerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _errors_app_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/app-error */ "./src/app/errors/app-error.ts");
/* harmony import */ var _errors_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/not-found-error */ "./src/app/errors/not-found-error.ts");
/* harmony import */ var _errors_invalid_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/invalid-error */ "./src/app/errors/invalid-error.ts");
/* harmony import */ var _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors/forbidden-error */ "./src/app/errors/forbidden-error.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors_unauthorized_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/unauthorized-error */ "./src/app/errors/unauthorized-error.ts");











class PageMangerService {
    constructor(http) {
        this.http = http;
        this.url = 'https://usmgpm.herokuapp.com/api';
    }
    static get headers() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const t = JSON.parse(localStorage.getItem('t'));
        if (t) {
            headers = headers.set('Authorization', `Bearer ${t.token}`);
        }
        return headers;
    }
    static processError(error) {
        console.log(error.error);
        if (error.status === 404) {
            return new _errors_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"](`Could not find this resource: ${error.url}`, error);
        }
        else if (error.status === 400) {
            return new _errors_invalid_error__WEBPACK_IMPORTED_MODULE_4__["InvalidError"]('Invalid data sent', error);
        }
        else if (error.status === 403) {
            return new _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_5__["ForbiddenError"]('Forbidden', error);
        }
        else if (error.status === 401) {
            return new _errors_unauthorized_error__WEBPACK_IMPORTED_MODULE_8__["UnauthorizedError"]('Unauthorized', error);
        }
        else {
            return new _errors_app_error__WEBPACK_IMPORTED_MODULE_2__["AppError"]('Unknown error', error);
        }
    }
    processHttpObservableToPromise(obs) {
        return obs.toPromise()
            .catch(error => {
            throw PageMangerService.processError(error);
        })
            .then(payload => payload);
    }
    processHttpObservable(obs) {
        return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(PageMangerService.processError(err))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(data => data));
    }
    get(namespace, params) {
        const options = {
            params, headers: PageMangerService.headers
        };
        return this.processHttpObservable(this.http.get(this.url + '/' + namespace, options));
    }
    post(namespace, data) {
        const options = {
            headers: PageMangerService.headers
        };
        return this.processHttpObservableToPromise(this.http.post(this.url + '/' + namespace, data, options));
    }
}
PageMangerService.ɵfac = function PageMangerService_Factory(t) { return new (t || PageMangerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PageMangerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageMangerService, factory: PageMangerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageMangerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/wp-data/submissions.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/wp-data/submissions.service.ts ***!
  \*********************************************************/
/*! exports provided: SubmissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsService", function() { return SubmissionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _page_manger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manger.service */ "./src/app/services/wp-data/page-manger.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast.service */ "./src/app/services/toast.service.ts");





class SubmissionsService {
    constructor(pm, toasts) {
        this.pm = pm;
        this.toasts = toasts;
    }
    static _parseAPISubmission(sub) {
        sub.submitted = Date.parse(sub.submitted);
        return sub;
    }
    get(user, challenge) {
        return this.pm.get(`challenges/${challenge.id}/submissions/${user.id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(SubmissionsService._parseAPISubmission));
    }
    getFromUser(user, options = {}) {
        const params = {};
        if (options.notEvaluated)
            params.not_evaluated = options.notEvaluated;
        return this.pm.get(`users/${user.id}/submissions`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((subs) => subs.map(SubmissionsService._parseAPISubmission)));
    }
    getFromChallenge(challenge, options = {}) {
        const params = {};
        if (options.notEvaluated)
            params.not_evaluated = options.notEvaluated;
        return this.pm.get(`challenges/${challenge.id}/submissions`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((subs) => subs.map(SubmissionsService._parseAPISubmission)));
    }
    approve(submission, comment, points) {
        return this.pm.post(`challenges/${submission.challenge_id}/submissions/${submission.user_id}/evaluate`, { approved: true, comment, points })
            .then((data) => {
            this.toasts.showSuccess('Se ha aprobado esta entrega');
            return data;
        });
    }
    reject(submission, comment) {
        return this.pm.post(`challenges/${submission.challenge_id}/submissions/${submission.user_id}/evaluate`, { approved: false, comment, points: 0 })
            .then((data) => {
            this.toasts.showSuccess('Se ha rechazado esta entrega');
            return data;
        });
    }
}
SubmissionsService.ɵfac = function SubmissionsService_Factory(t) { return new (t || SubmissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_page_manger_service__WEBPACK_IMPORTED_MODULE_2__["PageMangerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
SubmissionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubmissionsService, factory: SubmissionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmissionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _page_manger_service__WEBPACK_IMPORTED_MODULE_2__["PageMangerService"] }, { type: _toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/challenge-evaluation/challenge-evaluation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/challenge-evaluation/challenge-evaluation.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChallengeEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEvaluationComponent", function() { return ChallengeEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/evaluation-form/evaluation-form.component */ "./src/app/components/evaluation-form/evaluation-form.component.ts");
/* harmony import */ var _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/challenges-list/challenges-list.component */ "./src/app/components/challenges-list/challenges-list.component.ts");
/* harmony import */ var _components_submission_list_group_submission_list_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/submission-list-group/submission-list-group.component */ "./src/app/components/submission-list-group/submission-list-group.component.ts");






function ChallengeEvaluationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-evaluation-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evaluated", function ChallengeEvaluationComponent_div_0_Template_app_evaluation_form_evaluated_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeEvaluationComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("challenge", ctx_r0.challenge)("submission", ctx_r0.submission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.challenge === null);
} }
function ChallengeEvaluationComponent_ng_template_1_app_submission_list_group_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-submission-list-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChallengeEvaluationComponent_ng_template_1_app_submission_list_group_4_Template_app_submission_list_group_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.submission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("challenge", ctx_r6.challenge);
} }
function ChallengeEvaluationComponent_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selecciona un desaf\u00EDo de la lista a la izquierda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeEvaluationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-challenges-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChallengeEvaluationComponent_ng_template_1_Template_app_challenges_list_selected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.challenge = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChallengeEvaluationComponent_ng_template_1_app_submission_list_group_4_Template, 1, 1, "app-submission-list-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChallengeEvaluationComponent_ng_template_1_ng_template_5_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interactive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.challenge)("ngIfElse", _r7);
} }
class ChallengeEvaluationComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    goBack() {
        if (this.submission) {
            this.submission = null;
            return;
        }
        if (this.challenge) {
            this.challenge = null;
        }
    }
}
ChallengeEvaluationComponent.ɵfac = function ChallengeEvaluationComponent_Factory(t) { return new (t || ChallengeEvaluationComponent)(); };
ChallengeEvaluationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeEvaluationComponent, selectors: [["app-challenge-evaluation"]], inputs: { challenge: "challenge", submission: "submission" }, outputs: { submitted: "submitted" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["waitingSubmission", ""], [1, "row"], [1, "col-12"], [3, "challenge", "submission", "evaluated"], [1, "col-2"], [1, "btn", "btn-dark", 3, "disabled", "click"], [1, "col-5"], [3, "interactive", "selected"], [1, "col-7"], [3, "challenge", "selected", 4, "ngIf", "ngIfElse"], ["waitingChallenge", ""], [3, "challenge", "selected"], [1, "text-muted", "text-center"]], template: function ChallengeEvaluationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChallengeEvaluationComponent_div_0_Template, 8, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeEvaluationComponent_ng_template_1_Template, 7, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submission)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_evaluation_form_evaluation_form_component__WEBPACK_IMPORTED_MODULE_2__["EvaluationFormComponent"], _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_3__["ChallengesListComponent"], _components_submission_list_group_submission_list_group_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionListGroupComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYWxsZW5nZS1ldmFsdWF0aW9uL2NoYWxsZW5nZS1ldmFsdWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeEvaluationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-evaluation',
                templateUrl: './challenge-evaluation.component.html',
                styleUrls: ['./challenge-evaluation.component.css']
            }]
    }], function () { return []; }, { challenge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/challenge-submission/challenge-submission.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/challenge-submission/challenge-submission.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChallengeSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeSubmissionComponent", function() { return ChallengeSubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_challenge_submission_form_challenge_submission_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/challenge-submission-form/challenge-submission-form.component */ "./src/app/components/challenge-submission-form/challenge-submission-form.component.ts");
/* harmony import */ var _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/challenges-list/challenges-list.component */ "./src/app/components/challenges-list/challenges-list.component.ts");





function ChallengeSubmissionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-challenge-submission-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function ChallengeSubmissionComponent_div_0_Template_app_challenge_submission_form_submitted_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submitted.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("challenge", ctx_r0.challenge);
} }
function ChallengeSubmissionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-challenges-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChallengeSubmissionComponent_ng_template_1_Template_app_challenges_list_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.challenge = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notSubmittedOnly", true)("interactive", true);
} }
class ChallengeSubmissionComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
ChallengeSubmissionComponent.ɵfac = function ChallengeSubmissionComponent_Factory(t) { return new (t || ChallengeSubmissionComponent)(); };
ChallengeSubmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeSubmissionComponent, selectors: [["app-challenge-submission"]], outputs: { submitted: "submitted" }, decls: 3, vars: 2, consts: [["class", "row", 4, "ngIf", "ngIfElse"], ["waitingChallenge", ""], [1, "row"], [1, "col-12"], [3, "challenge", "submitted"], [3, "notSubmittedOnly", "interactive", "selected"]], template: function ChallengeSubmissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChallengeSubmissionComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeSubmissionComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.challenge)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_challenge_submission_form_challenge_submission_form_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeSubmissionFormComponent"], _components_challenges_list_challenges_list_component__WEBPACK_IMPORTED_MODULE_3__["ChallengesListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYWxsZW5nZS1zdWJtaXNzaW9uL2NoYWxsZW5nZS1zdWJtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChallengeSubmissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-challenge-submission',
                templateUrl: './challenge-submission.component.html',
                styleUrls: ['./challenge-submission.component.css']
            }]
    }], null, { submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/login-card/login-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/login-card/login-card.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCardComponent", function() { return LoginCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");



class LoginCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) { return new (t || LoginCardComponent)(); };
LoginCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginCardComponent, selectors: [["app-login-card"]], decls: 13, vars: 0, consts: [[1, "jumbotron", "vertical-center"], [1, "container", "text-center"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-sm-8", "align-self-center"], [1, "card"], [1, "card-body"], [1, "row", "justify-content-center"], [1, "col-10"], [1, "text-muted", "text-left"]], template: function LoginCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "USM Games Page Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Utiliza tus credenciales de usmgames.cl para acceder a esta aplicaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"]], styles: [".container[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border-radius: 12px;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.vertical-center[_ngcontent-%COMP%] {\r\n  min-height: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items : center;\r\n\r\n  width: 100%;\r\n  justify-content : center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztBQUViO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQU1qQixhQUFhO0VBTWIsb0JBQW9COztFQUVwQixXQUFXO0VBTVgsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyID4gLmNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcbi5jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLXdlYmtpdC1ib3gtYWxpZ24gOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbiA6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbiA6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC13ZWJraXQtYm94LXBhY2sgOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtcGFjayA6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrIDogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-card',
                templateUrl: './login-card.component.html',
                styleUrls: ['./login-card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/my-submissions/my-submissions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/my-submissions/my-submissions.component.ts ***!
  \******************************************************************/
/*! exports provided: MySubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubmissionsComponent", function() { return MySubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wp-data/submissions.service */ "./src/app/services/wp-data/submissions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/submission-list-group-item/submission-list-group-item.component */ "./src/app/components/submission-list-group-item/submission-list-group-item.component.ts");
/* harmony import */ var _components_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/submission-display/submission-display.component */ "./src/app/components/submission-display/submission-display.component.ts");







function MySubmissionsComponent_div_0_app_submission_list_group_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-submission-list-group-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function MySubmissionsComponent_div_0_app_submission_list_group_item_4_Template_app_submission_list_group_item_selected_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const submission_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.selectedSubmission = submission_r9; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submission_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submission", submission_r9)("forEvaluation", false);
} }
function MySubmissionsComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No has realizado entregas a\u00FAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MySubmissionsComponent_div_0_app_submission_display_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-submission-display", 13);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submission", ctx_r6.selectedSubmission);
} }
function MySubmissionsComponent_div_0_ng_template_8_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selecciona una entrega de la lista a la izquierda ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MySubmissionsComponent_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MySubmissionsComponent_div_0_ng_template_8_p_0_Template, 2, 0, "p", 7);
} if (rf & 2) {
    const submissions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submissions_r3.length !== 0);
} }
function MySubmissionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MySubmissionsComponent_div_0_app_submission_list_group_item_4_Template, 1, 2, "app-submission-list-group-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MySubmissionsComponent_div_0_p_5_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MySubmissionsComponent_div_0_app_submission_display_7_Template, 1, 1, "app-submission-display", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MySubmissionsComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submissions_r3 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", submissions_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submissions_r3.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.selectedSubmission)("ngIfElse", _r7);
} }
function MySubmissionsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando entregas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MySubmissionsComponent {
    constructor(submissions) {
        this.submissions = submissions;
        this.selectedSubmission = null;
    }
    ngOnInit() {
        this.updateSubmissions();
    }
    updateSubmissions() {
        if (this.user) {
            this.submissions$ = this.submissions.getFromUser(this.user);
        }
        else {
            this.submissions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Promise.resolve(null));
        }
    }
    ngOnChanges(changes) {
        if (changes.user) {
            this.updateSubmissions();
        }
    }
}
MySubmissionsComponent.ɵfac = function MySubmissionsComponent_Factory(t) { return new (t || MySubmissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionsService"])); };
MySubmissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MySubmissionsComponent, selectors: [["app-my-submissions"]], inputs: { user: "user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [["class", "challenge-list", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "challenge-list"], [1, "row"], [1, "col-5"], [1, "list-group"], [3, "submission", "forEvaluation", "selected", 4, "ngFor", "ngForOf"], ["class", "text-muted text-center w-100", 4, "ngIf"], [1, "col-7"], [3, "submission", 4, "ngIf", "ngIfElse"], ["noSubmission", ""], [3, "submission", "forEvaluation", "selected"], [1, "text-muted", "text-center", "w-100"], [3, "submission"], [1, "row", "mt-2"], [1, "col-12", "text-center"], [1, "spinner-border", "text-danger"], [1, "text-danger"]], template: function MySubmissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MySubmissionsComponent_div_0_Template, 10, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MySubmissionsComponent_ng_template_2_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.submissions$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_submission_list_group_item_submission_list_group_item_component__WEBPACK_IMPORTED_MODULE_4__["SubmissionListGroupItemComponent"], _components_submission_display_submission_display_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL215LXN1Ym1pc3Npb25zL215LXN1Ym1pc3Npb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MySubmissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-submissions',
                templateUrl: './my-submissions.component.html',
                styleUrls: ['./my-submissions.component.css']
            }]
    }], function () { return [{ type: _services_wp_data_submissions_service__WEBPACK_IMPORTED_MODULE_2__["SubmissionsService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/user-panel/user-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/user-panel/user-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/forbidden-error */ "./src/app/errors/forbidden-error.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_challenge_create_form_challenge_create_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/challenge-create-form/challenge-create-form.component */ "./src/app/components/challenge-create-form/challenge-create-form.component.ts");
/* harmony import */ var _challenge_evaluation_challenge_evaluation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../challenge-evaluation/challenge-evaluation.component */ "./src/app/views/challenge-evaluation/challenge-evaluation.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-register/user-register.component */ "./src/app/views/user-register/user-register.component.ts");
/* harmony import */ var _challenge_submission_challenge_submission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../challenge-submission/challenge-submission.component */ "./src/app/views/challenge-submission/challenge-submission.component.ts");
/* harmony import */ var _my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../my-submissions/my-submissions.component */ "./src/app/views/my-submissions/my-submissions.component.ts");














function UserPanelComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx_r17.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Crear Desaf\u00EDo \uD83C\uDD95 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx_r19.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Evaluar desaf\u00EDos \uD83D\uDC4D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx_r21.openModal(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Registrar usuario \uD83D\uDC7D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserPanelComponent_div_0_div_8_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserPanelComponent_div_0_div_9_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserPanelComponent_div_0_div_10_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx_r23.openModal(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mis entregas \uD83D\uDC7E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx_r25.openModal(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Realizar Entrega \uD83D\uDC7E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cerrar Sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenid@: ", user_r13.display_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r13.roles.includes("administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r13.roles.includes("administrator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r13.roles.includes("administrator"));
} }
function UserPanelComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando usuario...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crear Desaf\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const modal_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.closeModal(modal_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-challenge-create-form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function UserPanelComponent_ng_template_4_Template_app_challenge_create_form_submitted_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const modal_r27 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.closeModal(modal_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Evaluar desaf\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ng_template_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const modal_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.closeModal(modal_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-challenge-evaluation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registrar Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ng_template_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const modal_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.closeModal(modal_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-user-register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Realizar entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ng_template_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const modal_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.closeModal(modal_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-challenge-submission", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitted", function UserPanelComponent_ng_template_10_Template_app_challenge_submission_submitted_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const modal_r37 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.closeModal(modal_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mis entregas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ng_template_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const modal_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.closeModal(modal_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-my-submissions", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx_r12.user$));
} }
class UserPanelComponent {
    constructor(auth, router, modalService, toasts) {
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.toasts = toasts;
    }
    ngOnInit() {
        this.user$ = this.auth.me()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            if (err instanceof _errors_forbidden_error__WEBPACK_IMPORTED_MODULE_2__["ForbiddenError"]) {
                return this.logout().then(() => null);
            }
        }));
    }
    openModal(content) {
        return this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result;
    }
    closeModal(modal) {
        modal.dismiss();
    }
    logout() {
        this.auth.logout();
        return this.router.navigate(['/']);
    }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
UserPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], decls: 20, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], ["createChallenge", ""], ["evaluateChallenge", ""], ["registerUser", ""], ["submitChallenge", ""], ["mySubmissions", ""], [1, "row", "mb-2", "info"], [1, "col-12"], [1, "alert", "alert-info"], ["href", "https://github.com/usm-games/usmgames-page-manager/issues", "target", "_blank"], [1, "container-fluid"], [1, "row"], [1, "card", "bg-dark", "mb-3", "col-12", "text-center"], [1, "card-body"], [1, "col", "col-panel-buttons"], ["class", "row-8 text-center align-items-center", 4, "ngIf"], ["class", "row-6 text-center align-items-center", 4, "ngIf"], [1, "row-6", "text-center", "align-items-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row-4", "text-center", "align-items-center"], ["type", "button", "id", "exit", 1, "btn", "btn-primary", 3, "click"], [1, "row-8", "text-center", "align-items-center"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "row", "mt-2"], [1, "col-12", "text-center"], [1, "spinner-border", "text-danger"], [1, "text-danger"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "submitted"], [3, "user"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserPanelComponent_div_0_Template, 20, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPanelComponent_ng_template_2_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserPanelComponent_ng_template_4_Template, 8, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserPanelComponent_ng_template_6_Template, 8, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserPanelComponent_ng_template_8_Template, 8, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserPanelComponent_ng_template_10_Template, 8, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserPanelComponent_ng_template_12_Template, 9, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Esta aplicaci\u00F3n se encuentra en Beta. Si encuentra un error o tiene alguna consulta, por favor no dude en poner un issue en nuestro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "repositorio de GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.user$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_challenge_create_form_challenge_create_form_component__WEBPACK_IMPORTED_MODULE_8__["ChallengeCreateFormComponent"], _challenge_evaluation_challenge_evaluation_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeEvaluationComponent"], _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_10__["UserRegisterComponent"], _challenge_submission_challenge_submission_component__WEBPACK_IMPORTED_MODULE_11__["ChallengeSubmissionComponent"], _my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_12__["MySubmissionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".bg-dark[_ngcontent-%COMP%] {\r\n  background-color: #E80049 !important;\r\n  border: solid 1px #272727 !important;\r\n  color: aliceblue;\r\n  box-shadow: 0px 12px 24px #14131538;\r\n}\r\ndiv[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.col-panel-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  min-height: 60px;\r\n  background-color: #E80049;\r\n  border-color: rgb(238, 34, 99);\r\n  color: aliceblue;\r\n  margin-top: 15px;\r\n  box-shadow: 0px 12px 24px #1413158e;\r\n  min-width: 200px;\r\n  border-radius: 12px;\r\n}\r\n.col-panel-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(238, 34, 99);\r\n}\r\n#exit[_ngcontent-%COMP%]{\r\n background-color:#141315;\r\n border-width: 3px;\r\n min-width: 150px;\r\n\r\n\r\n}\r\n#exit[_ngcontent-%COMP%]:hover{\r\n background-color:#1b181d;\r\n border-width: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7Ozs7R0FJRztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjs7O0FBR2pCO0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MDA0OSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMyNzI3MjcgIWltcG9ydGFudDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggIzE0MTMxNTM4O1xyXG59XHJcbmRpdiAuY29udGFpbmVyLWZsdWlke1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gIC5jb2wtcGFuZWwtYnV0dG9uc3tcclxuICAgIFxyXG4gIH1cclxufSAqL1xyXG5cclxuLmNvbC1wYW5lbC1idXR0b25zIGJ1dHRvbntcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFODAwNDk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAzNCwgOTkpO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4ICMxNDEzMTU4ZTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmNvbC1wYW5lbC1idXR0b25zIGJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAzNCwgOTkpO1xyXG59XHJcbiNleGl0e1xyXG4gYmFja2dyb3VuZC1jb2xvcjojMTQxMzE1O1xyXG4gYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiBtaW4td2lkdGg6IDE1MHB4O1xyXG5cclxuXHJcbn1cclxuI2V4aXQ6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiMxYjE4MWQ7XHJcbiBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-panel',
                templateUrl: './user-panel.component.html',
                styleUrls: ['./user-panel.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/user-register/user-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/user-register/user-register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function UserRegisterComponent_div_33_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*El correo electr\u00F3nico es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_div_33_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Correo electr\u00F3nico inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserRegisterComponent_div_33_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserRegisterComponent_div_33_p_2_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.email);
} }
function UserRegisterComponent_div_34_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_div_34_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*El nombre debe tener al menos 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserRegisterComponent_div_34_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserRegisterComponent_div_34_p_2_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.displayName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.displayName.errors.minlength);
} }
class UserRegisterComponent {
    constructor(users) {
        this.users = users;
        this.loading = false;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
            ]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    }
    get email() {
        return this.registerForm.get('email');
    }
    get displayName() {
        return this.registerForm.get('displayName');
    }
    get isAdmin() {
        return this.registerForm.get('isAdmin');
    }
    register() {
        this.loading = true;
        return this.users.registerUser(this.email.value, this.displayName.value, this.isAdmin.value)
            .then(() => {
            this.email.setValue('');
            this.displayName.setValue('');
            this.isAdmin.setValue(false);
        })
            .finally(() => this.loading = false);
    }
}
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegisterComponent, selectors: [["app-user-register"]], decls: 35, vars: 10, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-sm-12"], [3, "formGroup", "submit"], [1, "row"], [1, "col-12", "mb-4"], ["for", "email"], ["type", "text", "id", "email", "name", "email", 1, "form-control", 3, "formControl"], ["for", "displayName"], ["type", "text", "id", "displayName", "name", "displayName", 1, "form-control", 3, "formControl"], [1, "col-12"], [1, "col-6", "text-center"], ["for", "isAdmin"], ["type", "radio", "id", "isAdmin", "name", "isAdmin", 1, "form-control", 3, "formControl", "value"], ["for", "isNotAdmin"], ["type", "radio", "id", "isNotAdmin", "name", "isAdmin", 1, "form-control", 3, "formControl", "value"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "text-sm-left text-danger text-center col-12", 4, "ngIf"], [1, "text-sm-left", "text-danger", "text-center", "col-12"], [4, "ngIf"]], template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UserRegisterComponent_Template_form_submit_3_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre y Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Es administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Registrar Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserRegisterComponent_div_33_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserRegisterComponent_div_34_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.isAdmin)("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.isAdmin)("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || ctx.registerForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayName.invalid && (ctx.displayName.dirty || ctx.displayName.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".big-checkbox[_ngcontent-%COMP%] {\r\n  -ms-transform: scale(2); \r\n  -moz-transform: scale(2); \r\n  -webkit-transform: scale(2); \r\n  -o-transform: scale(2); \r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBRSxPQUFPO0VBQ2hDLHdCQUF3QixFQUFFLE9BQU87RUFDakMsMkJBQTJCLEVBQUUsc0JBQXNCO0VBQ25ELHNCQUFzQixFQUFFLFVBQVU7RUFDbEMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci1yZWdpc3Rlci91c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWNoZWNrYm94IHtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogSUUgKi9cclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIEZGICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIE9wZXJhICovXHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-register',
                templateUrl: './user-register.component.html',
                styleUrls: ['./user-register.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pcamp\WebstormProjects\usmgames-page-manager-interface\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map