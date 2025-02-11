import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['September:1200€','October:1240€', 'November:1370€'];
  currentMonthIncome = '1600€';

  //Expense
  lastMonthsExpense = ['September:750€','October:750€', 'November:890€'];
  currentMonthExpense = '1000€';

  //To Do
  todoTransactions = [
    {description:'Pay phone & cellphone'},
    {description:'Pay maintenance fees'},
    {description:'Buy groceries'},
    {description:'Pay credit card'}
  ];

  totalCurrentMonthIncome = 1600;
  totalCurrentMonthExpense = 1000;

  constructor(public router:Router){}
  onIncome() {
    this.router.navigate(['/income']);
  }

  onExpense() {
    this.router.navigate(['/expense']);
  }

  onTodo() {
    this.router.navigate(['/todo']);
  }

  get currentMonthSavings(): number{
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
