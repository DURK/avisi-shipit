import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Widget } from '../../components/more-widget/widget';
import { WidgetService } from '../../providers/widget-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public widgets : Widget[];

  constructor(private navCtrl: NavController,
              private widgetService: WidgetService) {
  }

  ngOnInit(): void {
    this.widgets = this.widgetService.loadWidgets();
  }
}
