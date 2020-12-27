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

  main : HTMLElement;
  constructor(public renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.header.nativeElement,"position","relative")
    window.onscroll = this.scrollCheck
    this.main = document.getElementById("main");
    this.main.onscroll = this.scrollCheck;
  }

  scrollCheck = () =>{
    if (this.main.scrollTop > 100) {
      this.renderer.setStyle(this.header.nativeElement,"position","fixed")
      this.renderer.setStyle(this.logo.nativeElement,"position","fixed")
      this.renderer.setStyle(this.header.nativeElement,"background-color","transparent")
      // document.body.scrollTo({top:document.body.scrollTop + 20,behavior:"auto"})
      this.renderer.setStyle(this.main,"height","100%");
    } else {
      this.renderer.setStyle(this.header.nativeElement,"position","relative")
      this.renderer.setStyle(this.logo.nativeElement,"position","absolute")
      this.renderer.setStyle(this.header.nativeElement,"background-color","#FFFAFA")
      this.renderer.setStyle(this.main,"height","calc(100% - 100px)");
    }
  }

}
