import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavBar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasics';
  message = 'Learning to love Angular'
}
