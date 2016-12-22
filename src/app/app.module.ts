import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoreWidgetText, MoreWidgetTextModule} from 'more2-widget-text';
import { MoreWidgetComponent } from '../components/more-widget/more-widget';
import { WidgetService } from '../providers/widget-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoreWidgetComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MoreWidgetTextModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoreWidgetText
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WidgetService
  ]
})
export class AppModule {}
