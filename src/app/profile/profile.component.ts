// ./src/app/profile.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  @Input() name!: string;
  @Input() position!: string;
  @Input() description!: string;
  @Input() contactEmail!: string;
  @Input() imageUrl!: string;
}
