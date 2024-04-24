import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { CardComponent } from "../card/card.component";
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
    selector: 'app-modelos',
    standalone: true,
    templateUrl: './modelos.component.html',
    styleUrl: './modelos.component.scss',
    imports: [BannerComponent, CardComponent, SectionTitleComponent]
})
export class ModelosComponent {

}
