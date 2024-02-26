import { NumberValueAccessor } from "@angular/forms";

export class Agent {
  firstName:string;
  lastName:string;
  email:string;
  npn: number;
  user_id?:number;
  group_id? :number;

  constructor (firstName:string,lastName:string,email:string, npn: number){
this.firstName= firstName;
this.lastName= lastName;
this.email= email;
this.npn=npn
   }
}
