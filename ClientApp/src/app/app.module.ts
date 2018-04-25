import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tab-control/tabs.component';
import { DataBrowsingComponent } from './data-browsing/data-browsing.component';

// directives
import { TabsDirective } from './tab-control/tabs.directive';

// services
import { TabPanesService } from './tab-control/tab-panes.service';
import { TabItemsService } from './tab-control/tab-items.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TabsComponent,
    DataBrowsingComponent,
    TabsDirective
  ],
  // Generally, the Angular compiler generates a ComponentFactory
  // for any component referenced in a template. However,
  // there are no selector references in the templates for dynamically
  // loaded components since they load at runtime.
  // To ensure that the compiler still generates a factory,
  // add dynamically loaded components to the NgModule's entryComponents array
  entryComponents: [ HomeComponent, FetchDataComponent, CounterComponent ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'data-browser', component: DataBrowsingComponent },
    ])
  ],
  // must add services to providers array to be able to inject them
  providers: [TabPanesService, TabItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

