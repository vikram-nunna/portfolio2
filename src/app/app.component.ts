import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
   catg='home';
   toggle=true;
   catgchange(event:Event):void {
    const target = event.target as HTMLButtonElement;
    this.catg=target.value;
    console.log(this.catg);
    
   }
   changetoggle(event:Event):void
    {
      this.toggle=!this.toggle;
    }
    
    
    @HostListener('click', ['$event'])
  onDivClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Traverse up the DOM tree to ensure we are on the actual div
    const clickableDiv = targetElement.closest('.clickable-div');
    
    if (clickableDiv) {
      console.log('Clicked div ID:', clickableDiv.id);
      this.toggle=true;
    }
  }
}
