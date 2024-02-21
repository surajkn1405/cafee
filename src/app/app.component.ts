import { Component } from '@angular/core';
import { CafeService } from './cafe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafe';
  cafe:any[]=[]
  constructor(private cafeservices:CafeService) {
    this.cafeservices.getData().subscribe((data:any)=>{
      this.cafe=data
    })
  }
}
