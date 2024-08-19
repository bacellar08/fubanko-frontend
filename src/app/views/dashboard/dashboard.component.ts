import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/template/header/header.component";
import {DashboardService} from "./dashboard.service";
import {TransactionModel} from "./transaction.model";
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, NgForOf, MatIconModule, MatBadge, DatePipe, UpperCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  userData : {
    username : string,
    balance : number,
    transactions : TransactionModel[]
  } = {
    username: '',
    balance: 0,
    transactions: []
  }

  constructor (private dashBoardService: DashboardService) {}

  ngOnInit(): void {

    this.dashBoardService.getUserName()
      .subscribe({
        next: data => {this.dashBoardService.getUserData(data.username)
          .subscribe({
            next: response => this.userData = response,
            error: error => console.log(error)})
        },
        error: error => console.log(error)
      })

    console.log(this.userData)
  }




}
