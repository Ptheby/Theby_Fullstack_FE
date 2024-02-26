import { Agent } from "./agent";

export class User {
  id?: number ;
  email: string;
  password:string;
  role:string;
  agent?:Agent;

constructor(email:string,password:string,role:string,agent?:Agent) {

 this.email = email;
 this.password = password;
 this.role =role;
 this.agent= agent;

}
}
