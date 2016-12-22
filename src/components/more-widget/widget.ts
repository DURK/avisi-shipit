import { Component, Type } from '@angular/core';

export class Widget {
  id: string;
  name: string;
  mainComponentName: string;
  mainComponent: Type<Component>;

  constructor(id: string, name: string, mainComponentName: string, mainComponent: Type<Component>) {
    this.id = id;
    this.name = name;
    this.mainComponentName = mainComponentName;
    this.mainComponent = mainComponent;
  }
}