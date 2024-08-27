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
  imgURL: string = 'https://aws-starter-bucket123.s3.amazonaws.com/jif-u-can-posts-urls/seedgraphic6.jpeg'
  isDisabled: boolean = true;
}
