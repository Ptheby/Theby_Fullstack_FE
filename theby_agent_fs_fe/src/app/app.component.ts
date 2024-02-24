import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserSignupComponent } from './auth/pages/user-signup/user-signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserSignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theby_agent_fs_fe';
}
