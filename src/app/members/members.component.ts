import { Component, OnInit } from '@angular/core';
import { TuiAppearance, TuiScrollbar, TuiSurface } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarOutline, TuiBadge } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import { CommonModule } from '@angular/common';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  imports: [
    TuiBadge,
    TuiCardLarge,
    TuiCardMedium,
    TuiCell,
    TuiAppearance,
    TuiSurface,
    TuiThumbnailCard,
    TuiTable,
    CommonModule,
    TuiAvatar,
    TuiAvatarOutline,
    TuiScrollbar,
    WaIntersectionObserver
    
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.less'
})
export class MembersComponent implements OnInit {
  constructor(private members:MembersService){}
  memberData:any=[]
  ngOnInit(): void {
    this.members.data$.subscribe(
      (memberData)=>{
        this.memberData=memberData
      }
    )
  }


  data=[
    {
      id:'',
      image:'',
      username:'',
      fname:'',
      lname:'',
      email:'',
      ip:'',
      Mac:'',
      uuid:''

    }

  ]
columns=Object.keys(this.data[0])
}
