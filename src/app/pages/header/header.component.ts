import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    const body = document.body;
    const script = document.createElement('script');
    script.innerHTML= '';
    script.async =true;
    script.defer=true;
    body.appendChild(script);
  }

}