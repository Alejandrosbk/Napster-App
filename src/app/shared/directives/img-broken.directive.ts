import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  // CUSTOM IMG CON EL OBSERVABLE
  @Input() customImg: string = '';

  // DECLARAMOS EL HOST QUE VA A ESCUCHAR EL CAMBIO DE LA IMG
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    // console.log('esta imagen revento', this.elHost);
    elNative.src = this.customImg; // PUEDE SER RUTA LOCAL O EL CUSTOM-IMG
  }

  constructor( private elHost: ElementRef ) { 
    // console.log(this.elHost);
  }

}
