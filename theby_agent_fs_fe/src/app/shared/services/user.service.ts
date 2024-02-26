import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Agent } from '../models/agent';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Set apiUrl based on environment (development or production)
    this.apiUrl = 'http://localhost:3000/users/create_with_agent';
  }

  createUserAndAgent(user: User, agent: Agent): Observable<User> {
    // Create the user and agent at the same time
    return this.http.post<User>(`${this.apiUrl}/users/create_with_agent`, { user, agent });
  }
}

