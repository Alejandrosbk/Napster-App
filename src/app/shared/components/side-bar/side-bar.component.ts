import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  // MENU PRINCIPAL CON DOS OBJETOS QUE A SU VEZ CONTIENEN UN ARRAY
  mainMenu: {defaultOptions: Array<any>, accessLink: Array<any>} = { defaultOptions: [], accessLink: [] }

  // ARRAY PARA TENER LA DATA
  customOptions: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'songs']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites']
      }
    ]

    this.customOptions = [
      {
        name: 'Tus canciones favoritas en 2022',
        router: ['/']
      },
      {
        name: 'Tus canciones favoritas en 2021',
        router: ['/']
      },
      {
        name: 'Tus canciones favoritas en 2020',
        router: ['/']
      }
    ]
      
  }

  // goTo($event: any): void {
  //   this.router.navigate(['/', 'favorites'], {
  //     queryParams: {
  //       key1: 'value1',
  //       key2: 'value2',
  //       key3: 'value3'
  //     }
  //   })
  //   console.log($event)
  // }
}