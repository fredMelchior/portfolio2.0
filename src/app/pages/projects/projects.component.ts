import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ProjetosComponent } from "../../components/projetos/projetos.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [FooterComponent, HeaderComponent, ProjetosComponent]
})
export class ProjectsComponent {

}
