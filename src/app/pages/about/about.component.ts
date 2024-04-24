import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SobreComponent } from "../../components/sobre/sobre.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [HeaderComponent, FooterComponent, SobreComponent]
})
export class AboutComponent {

}
