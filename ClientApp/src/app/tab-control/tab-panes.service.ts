import { Injectable } from '@angular/core';

import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { HomeComponent } from '../home/home.component';

import { TabPaneItem } from './tab-pane-item';

@Injectable()
export class TabPanesService {
  public getTabPanes(): TabPaneItem[] {
    return [
      new TabPaneItem(CounterComponent),
      new TabPaneItem(FetchDataComponent),
      new TabPaneItem(HomeComponent),
      new TabPaneItem(CounterComponent)
    ];
  }
}
