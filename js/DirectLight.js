class DirectLight extends THREE.DirectionalLight {

	turnOnOff() {
		if (this.intensity == 1) {
			this.intensity = 0;
		}
		else {
			this.intensity = 1;
		}
	}

	constructor() {
		'use strict';

		super(0xffffff, 1);

	}

}
