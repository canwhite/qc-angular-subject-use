import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //用根注入器将你的服务注册为提供者
})
export class HeroService {

  constructor() { }
}
