import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homemessage=signal('Welcome to the home page');
  keyUpHandler(event:KeyboardEvent) {
    console.log(`user is working on the input ${event.key} key`);
  }


}
