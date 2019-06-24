import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }
  // window 스크롤 이벤트
  @HostListener('window:scroll') scrollHandler() {
    // 아이콘이 나타날 scroll 위치
    const toTopOffsetY = 100;

    // 스크롤 양에 따라 아이콘을 보여주거나 감춤
    if (window.pageYOffset > toTopOffsetY) this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    else this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

  // 아이콘을 클릭 했을 시 부드럽게 페이지 상단으로 이동
  @HostListener('click') clickHandler() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}