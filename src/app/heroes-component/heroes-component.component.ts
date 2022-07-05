import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { BehaviorSubject ,Subscription} from 'rxjs';
import { skipWhile } from 'rxjs/operators';



@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.sass']
})
export class HeroesComponentComponent implements OnInit {

  @Input() comSubject!: BehaviorSubject<any>;
  @Input() rcomSubject!:BehaviorSubject<any>;
  data = "";
  subs:Subscription[] = [];

  constructor() { }

  OnDestroy():void{
    this.subs.forEach((item:any)=>{
      item.unsubscribe();
    })
  }

  ngOnInit(): void {
    //接收传进来的值
    const sub =  this.comSubject.pipe(skipWhile(val=>val===null)).subscribe((res:any)=>{
      this.data = res;
    })
    this.subs.push(sub);
  }
  backData(){
    this.rcomSubject.next("test");
  }

}
