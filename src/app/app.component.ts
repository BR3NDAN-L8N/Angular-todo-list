import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'Angular Todo List';
    
    // constructor runs before component loads
    constructor() {
        // this.changeName('john');
        
    }

    // changeName(name) {
    //     this.title = name;
    // }
}
