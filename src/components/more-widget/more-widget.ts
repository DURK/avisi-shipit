import { Component, Input, ViewContainerRef, ComponentFactoryResolver, OnChanges, OnDestroy } from '@angular/core';
import { Widget } from './widget';

@Component({
  selector: 'more-widget',
  template: ''
})
export class MoreWidgetComponent implements OnChanges, OnDestroy {
  @Input()
  widget: Widget;
  private componentRef;

  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.renderComponent();
  }

  private renderComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.widget.mainComponent);
    const ref = this.viewContainerRef.createComponent(factory, 0, this.viewContainerRef.parentInjector);
    ref.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
