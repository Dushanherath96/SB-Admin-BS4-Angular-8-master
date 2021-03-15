import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    myForm:FormGroup;
    constructor() {}

    ngOnInit(): void {

    }

    login() {

    }
    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
    // }


}
