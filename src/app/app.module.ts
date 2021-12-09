import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { NavBarComponent } from './components/dashboard/nav-bar/nav-bar.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { BarchartTurnoverComponent } from './components/dashboard/main/barchart-turnover/barchart-turnover.component';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './components/dashboard/main/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    NavBarComponent,
    MainComponent,
    BarchartTurnoverComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
