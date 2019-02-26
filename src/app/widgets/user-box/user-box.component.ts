import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from '../../models/user';
import { UserService } from '../../services/user.service';
import {Subscription} from "rxjs";

@Component({
  selector: '.userBox',
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit, OnDestroy {
  private currentUser: User = new User();
  private subscriptions : Subscription = new Subscription;

  constructor(private userService: UserService) {
    let userSubscription = this.userService.currentUser.subscribe((user: User) => this.currentUser = user);
    this.subscriptions.add(userSubscription);
  }

  public ngOnInit(){
    console.log(this.currentUser.profile)
  }

  appLogout(){
    this.userService.logout();
  }

  public ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
