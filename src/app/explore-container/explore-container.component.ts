import { Component, Input } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { TextZoom,SetOptions,GetResult } from '@capacitor/text-zoom';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;


  // ngOnInit(): void {

  // } 

  zooming(val: any){
    TextZoom.get().then((val1:GetResult) =>{
      var currentZoom=val1.value;
      var options:SetOptions={
        value:currentZoom+parseFloat(val)
      }
      TextZoom.set(options)
    })

  }

  private zoomFactor: number = 1.0; // 默认缩放因子为1.0

  // 增加字体大小
  increaseTextSize() {
    this.zoomFactor += 0.1; // 每次增加10%
    this.applyZoom();
  }

  // 减少字体大小
  decreaseTextSize() {
    this.zoomFactor = Math.max(0.5, this.zoomFactor - 0.1); // 每次减少10%，但不小于0.5
    this.applyZoom();
  }

  // 重置字体大小
  resetTextSize() {
    this.zoomFactor = 1.0; // 重置为默认值
    this.applyZoom();
  }

  // 应用缩放
  private applyZoom() {
    document.documentElement.style.fontSize = `${this.zoomFactor}em`;
  }


}
