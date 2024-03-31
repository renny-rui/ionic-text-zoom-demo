import { Component, Input } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { TextZoom } from '@capacitor/text-zoom';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;


  ngOnInit(): void {
    this.setTextZoomLevel();
    this.getTextZoomLevel();
  } 

  async setTextZoomLevel() {
    if (Capacitor.getPlatform() !== 'web') {
      await TextZoom.set({ value: 1.5 }); // 例如，放大到150%
    } else {
      console.log('TextZoom plugin is not implemented on web');
    }
  }
  
  async getTextZoomLevel() {
    if (Capacitor.getPlatform() !== 'web') {
      const zoomLevel = await TextZoom.get();
      console.log(zoomLevel.value); // 输出当前的缩放级别
    } else {
      console.log('TextZoom plugin is not implemented on web');
    }
  }


}
