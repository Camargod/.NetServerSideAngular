import { Component } from '@angular/core';
import { Prateleiras } from 'src/app/objects/home-prateleiras';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  prateleiras = Prateleiras;
}
