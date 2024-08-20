import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavButtonComponent} from "../../nav-button/nav-button.component";

@Component({
  selector: 'app-nav-slide',
  standalone: true,
  imports: [
    NavButtonComponent
  ],
  templateUrl: './nav-slide.component.html',
  styleUrl: './nav-slide.component.scss'
})
export class NavSlideComponent {

  // @ViewChild('navSlideContainer', { read: ElementRef }) navSlideContainer!: ElementRef;
  //
  // scrollLeft() {
  //   this.navSlideContainer.nativeElement.scrollBy({
  //     left: -200,
  //     behavior: 'smooth'
  //   });
  // }
  //
  // scrollRight() {
  //   this.navSlideContainer.nativeElement.scrollBy({
  //     left: 200,
  //     behavior: 'smooth'
  //   });
  // }

}
