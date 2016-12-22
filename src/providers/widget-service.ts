import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Widget } from '../components/more-widget/widget';
import { MoreWidgetText } from 'more2-widget-text';

@Injectable()
export class WidgetService {

  loadWidgets() {
    return [
      new Widget('1', 'Text', 'MoreWidgetText', MoreWidgetText)
    ];
  }
}
