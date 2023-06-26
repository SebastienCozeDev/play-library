import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carte-jeu-note',
  templateUrl: './carte-jeu-note.component.html',
  styleUrls: ['./carte-jeu-note.component.css']
})
export class CarteJeuNoteComponent implements OnInit {
  @Input() rating = 0;
  @Input() single = false;
  totalStar = 5;
  ratingArray: number[] = [];

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  iconStatus(index: number) {
    const val = Math.floor(this.rating * 100) / 10 - ((index) * 10);
    if (val >= 7.5) {
      return 'star';
    } else if (val >= 2.5 && val < 7.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }
}
