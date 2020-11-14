import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  
})
export class HeaderMenuComponent implements OnInit, AfterViewInit
{
  @ViewChild('header') public header : ElementRef;
  @ViewChild('logo') public logo : ElementRef;
  constructor(public renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.header.nativeElement,"position","relative")
    window.onscroll = this.scrollCheck
  }

  scrollCheck = () =>{
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.renderer.setStyle(this.header.nativeElement,"position","fixed")
      this.renderer.setStyle(this.logo.nativeElement,"position","fixed")
    } else {
      this.renderer.setStyle(this.header.nativeElement,"position","relative")
      this.renderer.setStyle(this.logo.nativeElement,"position","absolute")
    }
  }

}
