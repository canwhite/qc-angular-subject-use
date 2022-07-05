import { Component, OnInit,AfterViewInit,OnDestroy} from '@angular/core';
import  { Router } from '@angular/router';
import {BehaviorSubject,Subscription} from "rxjs";
import {map,pluck,skipWhile} from "rxjs/operators"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  comSubject = new BehaviorSubject("");
  rcomSubject = new BehaviorSubject("");
  test = "";
  subs:Subscription[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    const sub :Subscription =  this.rcomSubject.pipe(skipWhile(val=>val===null)).subscribe((res:any)=>{
      console.log("---res---",res);
      this.test = res;
    })
    this.subs?.push(sub)
  }
  //虚节点已经转化为实节点
  AfterViewInit():void{
    //在这里传一个值
  }


  //销毁时候
  OnDestroy():void{
    this.subs?.forEach((item:any)=>{
      item?.unsubscribe();
    })
  }

  sendData(){
    console.log("--123---");
    this.comSubject.next("123")
  }
  //跳转操作
  gotoDetails(params:string) {
    /* this.router.navigate(0) */
    const pa={
      id:1
    }
    this.router.navigate(['/detail'], {queryParams: pa });
  }
}
