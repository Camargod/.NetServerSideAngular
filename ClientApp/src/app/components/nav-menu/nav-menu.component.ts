import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  // isExpanded = false;
  @ViewChild('navmenu') navMenuDiv : ElementRef<HTMLDivElement>; 
  categories : Array<{id:string,name:string,icon:string,type:string,size?:string}>= 
  [
    {id:"surf",name:"Surf",icon:"surf",type:"image",size:"60px"},
    {id:"skate",name:"Skateboard",icon:"skateboard",type:"image",size:"60px"},
    {id:"standup",name:"StandUp Paddle",icon:"standUpPaddle",type:"image",size:"60px"},
    {id:"barcos",name:"Barcos",icon:"motorboat",type:"image",size:"60px"},
    {id:"jetski",name:"Jet-ski",icon:"jetSki",type:"image",size:"60px"},
  ]

  isOpenMobile = false;
  isSizedMobile = false;

  constructor(private router : Router, private renderer: Renderer2){
  }

  navigateCategory(category){
    this.router.navigate(["category",category.id])
  }
  openMenuMobileClick(){
    !this.isOpenMobile ? this.menuOpen() : this.menuClose();  
  }

  menuOpen(){
    this.isOpenMobile = true;
    this.renderer.setStyle(this.navMenuDiv.nativeElement,"display","flex"); 
  }

  menuClose(){
    this.isOpenMobile = false;
    this.renderer.setStyle(this.navMenuDiv.nativeElement,"display","none");
  }

  @HostListener("window:resize", ['$event'])
  onWindowResize(event){
    let {innerWidth} = event.srcElement;
    if(innerWidth >= 1024){
      if(this.isSizedMobile){
        this.menuOpen(); 
        this.isSizedMobile = false;

      }
    }
    else{
      if(!this.isSizedMobile){
        this.menuClose(); 
        this.isSizedMobile = true
      }
    } 
  }
}
