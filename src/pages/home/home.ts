import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('slider') slider: Slides;
	public segmentPage = 'camera';

  constructor(public navCtrl: NavController) {

  }

	selectedTab(index) {
		this.slider.slideTo(index);
	}
	
	slideChanged() {
	if (this.slider.getActiveIndex().toString() !== this.segmentPage)				
		switch(this.slider.getActiveIndex()) {
			case 0: this.segmentPage = 'camera'; break;
			case 1:	this.segmentPage = 'bookmark'; break;
		}
	}
}
