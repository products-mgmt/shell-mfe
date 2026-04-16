import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string | null = null;

  ngOnInit() {
    this.userName = localStorage.getItem('username');
  }

  logout() {
    localStorage.clear();
    this.userName = null;
  }

}
