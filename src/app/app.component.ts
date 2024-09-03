import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavBar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {
  title = 'AngularBasics';
  message = 'Learning to love Angular'
  imgURL: string = 'https://aws-starter-bucket123.s3.amazonaws.com/jif-u-can-posts-urls/seedgraphic6.jpeg'
  isDisabled: boolean = false;
  isActive: boolean = true;

  userName: string = 'JamesAsk'

  buttonClick(){
    console.log('Button click')
  }

  keyEnter(event:any){
    console.log(event.keyCode)
    if(event.keyCode == 13){
      console.log('Enter Key Press')
    }
  }

  keyUpFiltering(user:HTMLInputElement){
    console.log(user.id)
  }

  updateUserName(username:HTMLInputElement){
    this.userName = username.value;
  }
}
