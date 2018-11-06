class Lamp extends THREE.Object3D {

	turnOnOff() {
		if (this.light.intensity == 5) {
			this.light.intensity = 0;
		}
		else {
			this.light.intensity = 5;
		}
	}

	createBase(x, y, z, numLampada) { //numLampada vai servir para saber qual a inclinacao a dar ao abajur de acordo com a position da lampada no referencial
		'use strict';
			this.obj = new THREE.Object3D();
      this.geometry = new THREE.ConeGeometry(4, 7, 10, 10);
      this.mesh = new THREE.Mesh(this.geometry, this.baseMaterial);
      this.mesh.position.set(x, y, z);

			if (numLampada == 1) {
				this.mesh.rotation.x = Math.PI / 4;
				this.mesh.rotation.z = -Math.PI / 4;
			}
			else if (numLampada == 2) {
				this.mesh.rotation.x = Math.PI / 4;
				this.mesh.rotation.z = Math.PI / 4;
			}

			else if (numLampada == 3) {
				this.mesh.rotation.x = -Math.PI / 4;
				this.mesh.rotation.z = -Math.PI / 4;
			}

			else if  (numLampada == 4) {
				this.mesh.rotation.x = -Math.PI / 4;
				this.mesh.rotation.z = Math.PI / 4;
			}

			this.add(this.mesh);
	}

	createLamp(x, y, z) {
		'use strict';
    this.geometry = new THREE.SphereGeometry(2, 10, 10);
    this.mesh = new THREE.Mesh(this.geometry, this.lampMaterial);
    this.mesh.position.set(x, y, z);
	  this.add(this.mesh);
	}

	createLight(x, y, z) {
		this.light = new THREE.SpotLight(0xffffff, 5, 200, Math.PI/12, 0.2);
		this.light.position.set( x, y, z );

		//this.spotter = new THREE.SpotLightHelper(this.light);
		//this.add(this.spotter);
		this.add(this.light);

	}
	
	constructor(x, y, z, numLampada) {
		'use strict';

		super();

		this.lampMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
		this.baseMaterial = new THREE.MeshBasicMaterial({ color: 0xff8700, wireframe: false });

		this.createBase(x, y, z, numLampada);
		this.createLamp(x, y, z);
		this.createLight(x, y, z);
	}

}
