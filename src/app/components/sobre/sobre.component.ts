import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrl: './sobre.component.scss',
    imports: [SectionTitleComponent]
})
export class SobreComponent {

}
