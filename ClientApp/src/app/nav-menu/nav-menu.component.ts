import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;
  selectedSideNavigationStyle="";
  arrowStyle = "";
  categories : Array<{name:string,icon:string,type:string,size?:string}>= 
  [
    {name:"Surf",icon:"surf",type:"image",size:"60px"},
    {name:"Skateboard",icon:"skateboard",type:"image",size:"60px"},
    {name:"StandUp Paddle",icon:"standUpPaddle",type:"image",size:"60px"},
    {name:"Barcos",icon:"motorboat",type:"image",size:"60px"},
    {name:"Jet-ski",icon:"jetSki",type:"image",size:"60px"},
  ]

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  sideNavToggle(){
    if(this.selectedSideNavigationStyle == "")
    {
      this.selectedSideNavigationStyle = "lateral-navigation-open"
      this.arrowStyle = "lateral-icon-open"
    }
    else
    {
      this.selectedSideNavigationStyle = ""
      this.arrowStyle = ""
    }
  }
}
