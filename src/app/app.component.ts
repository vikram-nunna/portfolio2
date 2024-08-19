import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
   catg='home';
   catgchange(event:Event):void {
    const target = event.target as HTMLButtonElement;
    this.catg=target.value;
    console.log(this.catg);
   }
}
