import { Component } from '@angular/core';
import { TextZoom,SetOptions,GetResult } from '@capacitor/text-zoom';
type OptionKey = 'option1' | 'option2' | 'option3' | 'option4' | 'option5';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  selectedOption: OptionKey = 'option3'
  constructor() {}
  onOptionChanged() {
    console.log('选中的选项是：', this.selectedOption);
    const zoomLevels = {
      'option1': 0.6,
      'option2': 0.8,
      'option3': 1,
      'option4': 2,
      'option5': 2.5
    };

    this.zooming(zoomLevels[this.selectedOption]);
  }
  zooming(val: number) {
    // 直接设置缩放值而不是计算增减
    const options: SetOptions = {
      value: val
    };
    TextZoom.set(options)
  }
}
