import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserModel} from '../../../../models/userModels/userModel';

@Component({
    selector: 'app-logonnav',
    templateUrl: './logonnav.component.html',
    styleUrls: ['./logonnav.component.css']
})
export class LogonnavComponent implements OnInit {

    constructor(private store: Store<{ user: { user: UserModel } }>) {
    }

    ngOnInit(): void {
    }

    signOut() {

    }
}
