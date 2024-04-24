import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ModelosComponent } from "../../components/modelos/modelos.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ModelosComponent, FooterComponent]
})
export class HomeComponent {

}
