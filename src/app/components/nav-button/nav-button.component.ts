import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {

  @Input() iconName: string = '';
  @Input() title: string = '';


}
