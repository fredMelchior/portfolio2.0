import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
    selector: 'app-projetos',
    standalone: true,
    templateUrl: './projetos.component.html',
    styleUrl: './projetos.component.scss',
    imports: [CardComponent, SectionTitleComponent]
})
export class ProjetosComponent {

}
