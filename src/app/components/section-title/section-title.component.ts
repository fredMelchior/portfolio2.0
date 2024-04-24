import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input()
  title = ''
  @Input()
  subtitle = ''
  @Input()
  btnclass = ''
  @Input()
  titleclass = ''

  url = ''

  sendToWhatsApp(){
    this.url = "https://whats.link/fredmelchior"
    window.open(this.url, '_blank')
  }
}
