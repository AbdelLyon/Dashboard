import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = { responsive: true };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['acheté', 'abondonnés',],
    datasets: [{
      data: [300, 500],
      backgroundColor: ["#ff4646", "#78e0e4"],

    },]
  };
  public pieChartType: ChartType = 'pie';

  constructor() { }

}