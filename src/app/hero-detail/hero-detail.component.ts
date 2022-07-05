import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  myId  = "";
  constructor(private route :ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    //在这里接收一下值
    this.route.queryParams.subscribe((res:any)=>{
      this.myId = res.id;
    })
  }
  goBack(){
    this.location.back();
  }

}
