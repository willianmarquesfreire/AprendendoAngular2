"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meu_primeiro_service_1 = require('./meu-primeiro.service');
var MeuPrimeiroComponent = (function () {
    function MeuPrimeiroComponent(meuPrimeiroService) {
        this.img = meuPrimeiroService.getLink();
    }
    MeuPrimeiroComponent.prototype.alert = function () {
        alert('oi');
    };
    Object.defineProperty(MeuPrimeiroComponent.prototype, "img", {
        get: function () {
            return this._img;
        },
        set: function (link) {
            this._img = link;
        },
        enumerable: true,
        configurable: true
    });
    MeuPrimeiroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'meu-primeiro-componente',
            templateUrl: 'meu-primeiro.component.html',
            providers: [meu_primeiro_service_1.MeuPrimeiroService]
        }), 
        __metadata('design:paramtypes', [meu_primeiro_service_1.MeuPrimeiroService])
    ], MeuPrimeiroComponent);
    return MeuPrimeiroComponent;
}());
exports.MeuPrimeiroComponent = MeuPrimeiroComponent;
//# sourceMappingURL=meu-primeiro.components.js.map