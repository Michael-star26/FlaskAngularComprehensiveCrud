import { ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiDataList, TuiDropdownService, TuiIcon, TuiLink, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import {TuiNavigation} from '@taiga-ui/layout';

import {
  TuiBadge,
  TuiBreadcrumbs,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiFade,
} from '@taiga-ui/kit';
import { CommonModule,KeyValuePipe} from '@angular/common';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { AdduserComponent } from '../adduser/adduser.component';
import { MembersComponent } from '../members/members.component';
import { TuiAppearance, TuiSurface } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-dashboard',
  imports: [TuiNavigation,
    TuiButton,
    TuiIcon,
    FormsModule,
    TuiDataList,
    TuiDataListDropdownManager,
    CommonModule,
    TuiFade,
    TuiBadge,
    TuiTextfield,
    TuiBreadcrumbs,
    TuiLink,
    TuiItem,
    TuiChevron,
    ReactiveFormsModule,
    AdduserComponent,
    MembersComponent,
    TuiAppearance, 
    TuiSurface,
    TuiCardLarge, 
    TuiCardMedium, 
    TuiCell,
    TuiThumbnailCard,
    TuiRipple,
    MembersComponent,
    TuiTitle
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[TuiDropdownService]
})
export class DashboardComponent {
  protected open=false;
  protected expanded=signal(false)
  protected handleToggle():void{
    this.expanded.update((e)=>!e)
  }
}