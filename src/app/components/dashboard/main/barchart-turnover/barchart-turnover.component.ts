import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barchart-turnover',
  templateUrl: './barchart-turnover.component.html',
  styleUrls: ['./barchart-turnover.component.scss']
})
export class BarchartTurnoverComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public bool: boolean = true;
  public Months: string[] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'];
  public barChartOptions: ChartConfiguration['options'] = { responsive: true };
  public barChartType: ChartType = 'line';
  public barChartData?: ChartData<'line'>;


  constructor() {
    if (this.bool) this.barChartData = this.test([65, 59, 80, 81, 56, 55, 40, 34, 24, 29, 34, 73])

  }

  test(data: number[]) {
    return {
      labels: this.Months,
      datasets: [{
        data,
        label: 'Évolution de la récurrence',
        backgroundColor: "#ff4646",
        borderWidth: 2,
        borderColor: "#78e0e4",
      }]
    };
  }

}
