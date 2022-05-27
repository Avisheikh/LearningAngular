import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './userService/user.service';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsImplementation } from './analytics-demo/analytics-demo-interface';

@NgModule({
  declarations: [
    AppComponent,
    PriceServiceDemoComponent,
    UserDemoComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AnalyticsService,
      useFactory(){
        const loggingImplementation: AnalyticsImplementation = {
          console.log('The metric is: ', metric);
        }
      };

    
      return new AnalyticsService(loggingImplementation);
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
