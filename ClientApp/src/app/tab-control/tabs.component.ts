import { Component, HostBinding, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { TabsDirective } from './tabs.directive';
import { TabItem } from './tab-item';
import { TabPaneItem } from './tab-pane-item';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {
    @HostBinding('attr.class') class = 'col-md-9 ml-sm-auto col-lg-10 pt-3 px-4';
    // the array of tab items for the tab control passed in from the hosting component
    @Input() tabItems: TabItem[];
    // the array of child components for the tab control passed in from hosting component
    @Input() tabPaneItems: TabPaneItem[];
    // todo: comment
    @ViewChild(TabsDirective) tabPane: TabsDirective;
    // todo: comment
    private selectedTabItemIndex = 0;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    public loadTabPaneComponent(selectedIndex: number): void {
        const tabPaneItem = this.tabPaneItems[selectedIndex];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabPaneItem.component);
        const tabPaneRef = this.tabPane.viewContainerRef;
        tabPaneRef.clear();

        tabPaneRef.createComponent(componentFactory);
    }

    public onTabClicked(tabItem: TabItem): void {
        this.setActiveTabItem(tabItem);
    }

    public setActiveTabItem(tabItem: TabItem): void {
        this.tabItems.forEach((value: TabItem, index: Number) => {
            value.isSelected = false;
        });
        tabItem.isSelected = true;
        this.loadTabPaneComponent(this.tabItems.indexOf(tabItem));
    }

    public ngOnInit(): void {
        // todo get initial index from route parameter
        this.loadTabPaneComponent(0);
    }

    public ngOnDestroy(): void {

    }

}
