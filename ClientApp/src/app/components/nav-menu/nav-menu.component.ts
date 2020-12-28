import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;
  selectedSideNavigationStyle="";
  arrowStyle = "";
  categories : Array<{id:string,name:string,icon:string,type:string,size?:string}>= 
  [
    {id:"surf",name:"Surf",icon:"surf",type:"image",size:"60px"},
    {id:"skate",name:"Skateboard",icon:"skateboard",type:"image",size:"60px"},
    {id:"standup",name:"StandUp Paddle",icon:"standUpPaddle",type:"image",size:"60px"},
    {id:"barcos",name:"Barcos",icon:"motorboat",type:"image",size:"60px"},
    {id:"jetski",name:"Jet-ski",icon:"jetSki",type:"image",size:"60px"},
  ]

  constructor(private router : Router){
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
    this.isExpanded = !this.isExpanded;
  }

  navigateCategory(category){
    if(this.isExpanded){
      this.sideNavToggle();
    }
    this.router.navigate(["category",category.id])
  }
}
