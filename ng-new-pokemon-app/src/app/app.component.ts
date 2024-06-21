import { Component, NgModule, OnInit } from '@angular/core';import { NgModel } from '@angular/forms';
import { RouterModule,Route, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [RouterOutlet,

    ]
})


export class AppComponent {  

}
