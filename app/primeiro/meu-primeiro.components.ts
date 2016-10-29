import { Component } from '@angular/core'
import { MeuPrimeiroService } from './meu-primeiro.service'

@Component({
    moduleId: module.id,
    selector: 'meu-primeiro-componente',
    templateUrl: 'meu-primeiro.component.html',
    providers: [MeuPrimeiroService]
})
export class MeuPrimeiroComponent { 
    _img:string
    alert() {
        alert('oi')
    }
    constructor(meuPrimeiroService:MeuPrimeiroService) {
        this.img = meuPrimeiroService.getLink()
    }
    get img():string {
        return this._img
    }

    set img(link:string) {
        this._img = link
    }
 }