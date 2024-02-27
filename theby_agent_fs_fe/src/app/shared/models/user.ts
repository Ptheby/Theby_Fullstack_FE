import { Agent } from './agent';

export class User {
  id?: number;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  agent?: Agent;

  constructor(email: string, password: string,password_confirmation:string, role: string, agent?: Agent) {
    this.email = email;
    this.password = password;
    this.password_confirmation= password_confirmation;
    this.role = role;
    this.agent = agent;
  }
}
