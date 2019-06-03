import { Component, OnDestroy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from '../Models/MenuItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  mobileQuery: MediaQueryList;
  navItem: NavItem[] = [
    {
      displayName: "Basic Data",
      iconName: "insert_chart",
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group'
        }]
    },
    {
      displayName: "Objects",
      iconName: "bookmark"
    },
    {
      displayName: "Explorer",
      iconName: "extension"
    },
    {
      displayName: "Services",
      iconName: "room_service"
    },
    {
      displayName: "Process Rule",
      iconName: "insert_link"
    },
    {
      displayName: "Report",
      iconName: "fingerprint"
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

   onItemSelected(item: NavItem) {
    if (item.children && item.children.length) {
      console.log(this.expanded);
      this.expanded = !this.expanded;
    }
  }
}
