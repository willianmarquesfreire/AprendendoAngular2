import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `
})
export class AppComponent { }
