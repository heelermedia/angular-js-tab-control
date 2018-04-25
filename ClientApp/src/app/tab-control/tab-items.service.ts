import { Injectable } from '@angular/core';

import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { HomeComponent } from '../home/home.component';

import { TabItem } from './tab-item';
// when you create a service make sure to register it
@Injectable()
export class TabItemsService {
    public getTabItems(): TabItem[] {
        return [
            new TabItem('Counter', true),
            new TabItem('Fetch', false),
            new TabItem('Home', false),
            new TabItem('Counter', false)
        ];
    }
}