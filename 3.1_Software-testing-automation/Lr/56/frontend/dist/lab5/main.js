(self["webpackChunklab_at_56"] = self["webpackChunklab_at_56"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_app_component_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.component.service */ 8617);


class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'Калькулятор';
        this.num3 = 2;
        this.operations = [
            "Сложить",
            "Вычесть",
            "Поделить",
            "Умножить"
        ];
    }
    ;
    calc(calcData) {
        switch (calcData.selectedValue) {
            case (this.operations)[0]: {
                this.appService.addition(calcData.num1, calcData.num2, calcData.system).subscribe(res => { this.num3 = res; });
                break;
            }
            case (this.operations)[1]: {
                this.appService.subtraction(calcData.num1, calcData.num2, calcData.system).subscribe(res => { this.num3 = res; });
                break;
            }
            case (this.operations)[2]: {
                this.appService.division(calcData.num1, calcData.num2, calcData.system).subscribe(res => { this.num3 = res; });
                break;
            }
            case (this.operations)[3]: {
                this.appService.multiplication(calcData.num1, calcData.num2, calcData.system).subscribe(res => { this.num3 = res; });
                break;
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_component_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 5, consts: [[2, "text-align", "center"], [3, "calcDataEvent"], ["id", "input3", "type", "number", 3, "input", "redblackgreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "inputs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("calcDataEvent", function AppComponent_Template_inputs_calcDataEvent_3_listener($event) { return ctx.calc($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "rounding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("input", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, ctx.num3, 2));
    } }, encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.route */ 7529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_input_inputs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/input/inputs.component */ 7852);
/* harmony import */ var _shared_directive_redblackgreen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/directive/redblackgreen.directive */ 5951);
/* harmony import */ var _pipe_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/rounding.pipe */ 8459);
/* harmony import */ var _service_app_component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/app.component.service */ 8617);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_service_app_component_service__WEBPACK_IMPORTED_MODULE_5__.AppService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_route__WEBPACK_IMPORTED_MODULE_1__.routing,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _shared_input_inputs_component__WEBPACK_IMPORTED_MODULE_2__.InputsComponent, _shared_directive_redblackgreen_directive__WEBPACK_IMPORTED_MODULE_3__.RedblackgreenDirective, _pipe_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__.RoundingPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, [_shared_input_inputs_component__WEBPACK_IMPORTED_MODULE_2__.InputsComponent, _shared_directive_redblackgreen_directive__WEBPACK_IMPORTED_MODULE_3__.RedblackgreenDirective], [_pipe_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__.RoundingPipe]);


/***/ }),

/***/ 7529:
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);


const appRoutes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ 8459:
/*!***************************************!*\
  !*** ./src/app/pipe/rounding.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundingPipe": () => (/* binding */ RoundingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RoundingPipe {
    transform(value, decPlacesNum = 3) {
        return Number(value.toFixed(decPlacesNum));
    }
}
RoundingPipe.ɵfac = function RoundingPipe_Factory(t) { return new (t || RoundingPipe)(); };
RoundingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rounding", type: RoundingPipe, pure: true });


/***/ }),

/***/ 8617:
/*!**************************************************!*\
  !*** ./src/app/service/app.component.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class AppService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/calculations';
    }
    addition(param1, param2, param3) {
        return this.http.get(`${this.url + '/addition'}`, {
            params: {
                num1: param1,
                num2: param2,
                system: param3
            }
        });
    }
    subtraction(param1, param2, param3) {
        return this.http.get(`${this.url + '/subtraction'}`, {
            params: {
                num1: param1,
                num2: param2,
                system: param3
            }
        });
    }
    division(param1, param2, param3) {
        return this.http.get(`${this.url + '/division'}`, {
            params: {
                num1: param1,
                num2: param2,
                system: param3
            }
        });
    }
    multiplication(param1, param2, param3) {
        return this.http.get(`${this.url + '/multiplication'}`, {
            params: {
                num1: param1,
                num2: param2,
                system: param3
            }
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


/***/ }),

/***/ 5951:
/*!*************************************************************!*\
  !*** ./src/app/shared/directive/redblackgreen.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedblackgreenDirective": () => (/* binding */ RedblackgreenDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RedblackgreenDirective {
    constructor(el) {
        this.el = el;
        this.highlight('red');
    }
    ngOnChanges(changes) {
        if (this.input < 0) {
            this.highlight('red');
        }
        else if (this.input == 0) {
            this.highlight('black');
        }
        else if (this.input > 0) {
            this.highlight('green');
        }
        this.el.nativeElement.value = this.input;
    }
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
RedblackgreenDirective.ɵfac = function RedblackgreenDirective_Factory(t) { return new (t || RedblackgreenDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
RedblackgreenDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RedblackgreenDirective, selectors: [["", "redblackgreen", ""]], inputs: { redblackgreen: "redblackgreen", input: "input" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 7852:
/*!**************************************************!*\
  !*** ./src/app/shared/input/inputs.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputsComponent": () => (/* binding */ InputsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function InputsComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r2, "\n");
} }
function InputsComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", o_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r3);
} }
class InputsComponent {
    constructor() {
        this.calcDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputNum1 = '1';
        this.inputNum2 = '1';
        this.pattern = /[]/;
        this.operations = [
            "Сложить",
            "Вычесть",
            "Поделить",
            "Умножить"
        ];
        this.inputSelectedValue = (this.operations)[0];
        this.System = ['2', '8', '10', '16'];
    }
    changeSystem(e) {
        console.log(e.target.value);
        this.param3_val = e.target.value;
        return this.param3_val;
    }
    keyPress(event, pattern) {
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    getPatternParam() {
        if (this.param3_val == '2') {
            this.pattern = /[0-1]/;
        }
        if (this.param3_val == '8') {
            this.pattern = /[0-7]/;
        }
        if (this.param3_val == '16') {
            this.pattern = /[0-9A-F]/;
        }
        if (this.param3_val == '10') {
            this.pattern = /[0-9]/;
        }
        return this.pattern;
    }
    emitCalcData() {
        this.inputNum2 = this.inputNum2;
        const calcData = {
            num1: this.inputNum1,
            num2: this.inputNum2,
            selectedValue: this.inputSelectedValue,
            system: this.param3_val
        };
        this.calcDataEvent.emit(calcData);
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(); };
InputsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["inputs"]], outputs: { calcDataEvent: "calcDataEvent" }, decls: 26, vars: 5, consts: [["id", "system", 1, "custom-select", "mb-3", 3, "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["id", "input1", "name", "inputNum1", "type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["id", "operationSelector", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "input2", "name", "inputNum2", "oninput", "var e = document.getElementById(\"operationSelector\");\nvar text = e.options[e.selectedIndex].text;\nif (text.localeCompare(\"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\") === 0)\n{\n  if(!this.value.match(\"^[1-9][0-9]*$\"))\n    this.value=\"\";\n}\nelse {\n  if(!this.value.match(\"^[0-9]*$\"))\n    this.value=\"\";\n}", "pattern", "^[1-9][0-9]*$", "required", "", "type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["id", "calcButton", 3, "click"], [3, "ngValue"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputsComponent_Template_select_change_2_listener($event) { return ctx.changeSystem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputsComponent_option_5_Template, 2, 1, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.inputNum1 = $event; })("keypress", function InputsComponent_Template_input_keypress_10_listener($event) { return ctx.keyPress($event, ctx.getPatternParam()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_select_ngModelChange_13_listener($event) { return ctx.inputSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InputsComponent_option_14_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0412\u0442\u043E\u0440\u043E\u0435 \u0447\u0438\u0441\u043B\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.inputNum2 = $event; })("keypress", function InputsComponent_Template_input_keypress_19_listener($event) { return ctx.keyPress($event, ctx.getPatternParam()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_Template_button_click_22_listener() { return ctx.emitCalcData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.System);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputNum1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputNum2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map