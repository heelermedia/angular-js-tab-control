import { Directive, ViewContainerRef } from '@angular/core';
// Before you can add components you have to define an anchor point to tell Angular where to insert components.
@Directive({
  selector: '[appTabs]',
})
// TabsDirective injects ViewContainerRef to gain access to the
// view container of the element that will host the dynamically added component.
export class TabsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
