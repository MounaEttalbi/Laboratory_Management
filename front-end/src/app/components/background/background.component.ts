import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {
  
  constructor(private router: Router) {}
  onLoginClick(): void {
    this.router.navigate(['/login']);
  }

}
