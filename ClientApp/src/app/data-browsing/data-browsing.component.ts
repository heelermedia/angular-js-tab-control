import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
// serivces
import { TabPanesService } from '../tab-control/tab-panes.service';
import { TabItemsService } from '../tab-control/tab-items.service';
// models
import { TabPaneItem } from '../tab-control/tab-pane-item';
import { TabItem } from '../tab-control/tab-item';

@Component({
    selector: 'app-data-browsing',
    templateUrl: './data-browsing.component.html',
    styleUrls: ['./data-browsing.component.css']
})
export class DataBrowsingComponent implements OnInit, OnDestroy {
    @HostBinding('attr.class') class = 'col-md-9 ml-sm-auto col-lg-10 pt-3 px-4';

    // expose a public array of tab pane items
    public tabPaneItems: TabPaneItem[];
    // expose a public array of tab items
    public tabItems: TabItem[];

    constructor(private tabPanesService: TabPanesService, private tabItemsService: TabItemsService) {

    }

    public ngOnInit(): void {
        this.tabItems = this.tabItemsService.getTabItems();
        this.tabPaneItems = this.tabPanesService.getTabPanes();
    }

    public ngOnDestroy(): void {

    }
}
