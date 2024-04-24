import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  title = ''
  @Input()
  image = ''
  @Input()
  desc = ''
  @Input()
  link = ''

  showLink() {
    console.log(this.link)
  }

  cardClickOpenLink() {
    window.open(this.link, '_blank')
  }
}
