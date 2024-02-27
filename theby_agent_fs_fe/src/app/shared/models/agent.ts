import { NumberValueAccessor } from '@angular/forms';
import { User } from './user';
import { GroupByOptionsWithElement } from 'rxjs';

export class Agent {
  firstName: string;
  lastName: string;
  email: string;
  npn: number;
  state:string;
  user?: User;
  // group?: Group; future feature

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    npn: number,
    state:string,
    user?: User
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.npn = npn;
    this.user = user;
    this.state=state;
  }
}
