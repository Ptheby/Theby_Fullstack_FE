import { NumberValueAccessor } from "@angular/forms";
import { User } from "./user";

export class Agent {
  firstName:string;
  lastName:string;
  email:string;
  npn: number;
  user?:User;
  group? :Group;

  constructor (firstName:string,lastName:string,email:string, npn: number,user?:User,group?:Group){
this.firstName= firstName;
this.lastName= lastName;
this.email= email;
this.npn=npn
this.user=user;
this.group=group
   }
}
