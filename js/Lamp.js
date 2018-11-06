class Lamp extends THREE.Object3D {

	turnOnOff() {
		if (this.light.intensity == 5) {
			this.light.intensity = 0;
			this.baseMaterial.color.setHex(0x683700);
		}
		else {
			this.light.intensity = 5;
			this.baseMaterial.color.setHex(0xff8700);
		}
	}

	createBase(x, y, z) { //numLampada vai servir para saber qual a inclinacao a dar ao abajur de acordo com a position da lampada no referencial
		'use strict';
		this.obj = new THREE.Object3D();
      	this.geometry = new THREE.ConeGeometry(4, 7, 10, 10);
      	this.mesh = new THREE.Mesh(this.geometry, this.baseMaterial);
      	this.mesh.position.set(x, y, z);
		this.obj.add(this.mesh);
	}


	createLamp(x, y, z) {
		'use strict';
    	this.geometry = new THREE.SphereGeometry(2, 10, 10);
    	this.mesh = new THREE.Mesh(this.geometry, this.lampMaterial);
    	this.mesh.position.set(x, y-3, z);
		this.obj.add(this.mesh);
	}


	placeObj(x, y, z, numLampada) {
		if (numLampada == 1) {
			this.obj.rotation.x = Math.PI / 4;
			this.obj.rotation.z = -Math.PI / 4;
		}
		else if (numLampada == 2) {
			this.obj.rotation.x = Math.PI / 4;
			this.obj.rotation.z = Math.PI / 4;
		}
			else if (numLampada == 3) {
			this.obj.rotation.x = -Math.PI / 4;
			this.obj.rotation.z = -Math.PI / 4;
		}
			else if  (numLampada == 4) {
			this.obj.rotation.x = -Math.PI / 4;
			this.obj.rotation.z = Math.PI / 4;
		}

		this.obj.position.set(x, y, z);

		this.add(this.obj);
	}


	createLight(x, y, z) {
		this.light = new THREE.SpotLight(0xffffff, 5, 200, Math.PI/12, 0.2);
		this.light.position.set( x, y, z );

		//this.spotter = new THREE.SpotLightHelper(this.light);
		//this.add(this.spotter);
		this.add(this.light);

	}

	changeWireframe() {
		this.lampMaterial.wireframe = !this.lampMaterial.wireframe;
        this.baseMaterial.wireframe = !this.baseMaterial.wireframe;
	}
	
	constructor(x, y, z, numLampada) {
		'use strict';

		super();

		this.lampMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
		this.baseMaterial = new THREE.MeshBasicMaterial({ color: 0xff8700, wireframe: false });

		this.createBase(0, 0, 0);
		this.createLamp(0, 0, 0);
		this.placeObj(x, y, z, numLampada);
		this.createLight(x, y, z);
	}

}
