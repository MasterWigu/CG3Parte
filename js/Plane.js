class Plane extends THREE.Scene {

	rotateXX(side) {
		this.rotateX(side * 0.1);
	}

	rotateYY(side) {
		this.rotateY(side * 0.1);
	}

	makeWingR(x, y, z) { /* dir = -1 ou 1 em funcao da asa da sesquerda ou da direita */
		var geo = new THREE.Geometry();

		//adiciona o vertice a "lista"
		geo.vertices.push(new THREE.Vector3(0,0,0));
		geo.vertices.push(new THREE.Vector3(0,4,0));
		geo.vertices.push(new THREE.Vector3(0,0,10));
		geo.vertices.push(new THREE.Vector3(0,4,10));
		geo.vertices.push(new THREE.Vector3(50,0,10));
		geo.vertices.push(new THREE.Vector3(50,1,10));
		geo.vertices.push(new THREE.Vector3(50,0,6));
		geo.vertices.push(new THREE.Vector3(50,1,6));
		geo.vertices.push(new THREE.Vector3(45,0,1));
		geo.vertices.push(new THREE.Vector3(45,1,1));

		geo.faces.push(new THREE.Face3(0,2,1));
		geo.faces.push(new THREE.Face3(1,2,3));
		geo.faces.push(new THREE.Face3(2,5,3));
		geo.faces.push(new THREE.Face3(2,4,5));
		geo.faces.push(new THREE.Face3(2,6,4));
		geo.faces.push(new THREE.Face3(2,8,6));
		geo.faces.push(new THREE.Face3(0,8,2));
		geo.faces.push(new THREE.Face3(0,1,9));
		geo.faces.push(new THREE.Face3(0,9,8));
		geo.faces.push(new THREE.Face3(7,8,9));
		geo.faces.push(new THREE.Face3(6,8,7));
		geo.faces.push(new THREE.Face3(4,6,5));
		geo.faces.push(new THREE.Face3(5,6,7));
		geo.faces.push(new THREE.Face3(1,3,9));
		geo.faces.push(new THREE.Face3(3,7,9));
		geo.faces.push(new THREE.Face3(3,5,7));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);

	}

	makeWingL(x, y, z) { /* = -1 ou 1 em funcao da asa da sesquerda ou da ita */
		var geo = new THREE.Geometry();

		//adiciona o vertice a "lista"
		geo.vertices.push(new THREE.Vector3(-0,0,0));
		geo.vertices.push(new THREE.Vector3(-0,4,0));
		geo.vertices.push(new THREE.Vector3(-0,0,10));
		geo.vertices.push(new THREE.Vector3(-0,4,10));
		geo.vertices.push(new THREE.Vector3(-50,0,10));
		geo.vertices.push(new THREE.Vector3(-50,1,10));
		geo.vertices.push(new THREE.Vector3(-50,0,6));
		geo.vertices.push(new THREE.Vector3(-50,1,6));
		geo.vertices.push(new THREE.Vector3(-45,0,1));
		geo.vertices.push(new THREE.Vector3(-45,1,1));

		geo.faces.push(new THREE.Face3(0,1,2));
		geo.faces.push(new THREE.Face3(1,3,2));
		geo.faces.push(new THREE.Face3(2,3,5));
		geo.faces.push(new THREE.Face3(2,5,4));
		geo.faces.push(new THREE.Face3(2,4,6));
		geo.faces.push(new THREE.Face3(2,6,8));
		geo.faces.push(new THREE.Face3(0,2,8));
		geo.faces.push(new THREE.Face3(0,9,1));
		geo.faces.push(new THREE.Face3(0,8,9));
		geo.faces.push(new THREE.Face3(7,9,8));
		geo.faces.push(new THREE.Face3(6,7,8));
		geo.faces.push(new THREE.Face3(4,5,6));
		geo.faces.push(new THREE.Face3(5,7,6));
		geo.faces.push(new THREE.Face3(1,9,3));
		geo.faces.push(new THREE.Face3(3,9,7));
		geo.faces.push(new THREE.Face3(3,7,5));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);

	}

	makeHStabL(x, y, z) { /* dir = -1 ou 1 em funcao da asa da sesquerda ou da direita */
		var geo = new THREE.Geometry();

		//adiciona o vertice a "lista"
		geo.vertices.push(new THREE.Vector3(0, -0.5, 0));
		geo.vertices.push(new THREE.Vector3(0, 0.5, 0));
		geo.vertices.push(new THREE.Vector3(0, -0.5, 10));
		geo.vertices.push(new THREE.Vector3(0, 0.5, 10));
		geo.vertices.push(new THREE.Vector3(10, -0.5, 10));
		geo.vertices.push(new THREE.Vector3(10, 0, 10));
		geo.vertices.push(new THREE.Vector3(10, -0.5, 6));
		geo.vertices.push(new THREE.Vector3(10, 0, 6));
		geo.vertices.push(new THREE.Vector3(7, -0.5, 1));
		geo.vertices.push(new THREE.Vector3(7, 0, 1));

		geo.faces.push(new THREE.Face3(0,2,1));
		geo.faces.push(new THREE.Face3(1,2,3));
		geo.faces.push(new THREE.Face3(2,5,3));
		geo.faces.push(new THREE.Face3(2,4,5));
		geo.faces.push(new THREE.Face3(2,6,4));
		geo.faces.push(new THREE.Face3(2,8,6));
		geo.faces.push(new THREE.Face3(0,8,2));
		geo.faces.push(new THREE.Face3(0,1,9));
		geo.faces.push(new THREE.Face3(0,9,8));
		geo.faces.push(new THREE.Face3(7,8,9));
		geo.faces.push(new THREE.Face3(6,8,7));
		geo.faces.push(new THREE.Face3(4,6,5));
		geo.faces.push(new THREE.Face3(5,6,7));
		geo.faces.push(new THREE.Face3(1,3,9));
		geo.faces.push(new THREE.Face3(3,7,9));
		geo.faces.push(new THREE.Face3(3,5,7));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);
	}


	makeHStabR(x, y, z) { /* dir = -1 ou 1 em funcao da asa da sesquerda ou da direita */
		var geo = new THREE.Geometry();

		//adiciona o vertice a "lista"
		geo.vertices.push(new THREE.Vector3(0, -0.5, 0));
		geo.vertices.push(new THREE.Vector3(0, 0.5, 0));
		geo.vertices.push(new THREE.Vector3(0, -0.5, 10));
		geo.vertices.push(new THREE.Vector3(0, 0.5, 10));
		geo.vertices.push(new THREE.Vector3(-10, -0.5, 10));
		geo.vertices.push(new THREE.Vector3(-10, 0, 10));
		geo.vertices.push(new THREE.Vector3(-10, -0.5, 6));
		geo.vertices.push(new THREE.Vector3(-10, 0, 6));
		geo.vertices.push(new THREE.Vector3(-7, -0.5, 1));
		geo.vertices.push(new THREE.Vector3(-7, 0, 1));

		geo.faces.push(new THREE.Face3(0,1,2));
		geo.faces.push(new THREE.Face3(1,3,2));
		geo.faces.push(new THREE.Face3(2,3,5));
		geo.faces.push(new THREE.Face3(2,5,4));
		geo.faces.push(new THREE.Face3(2,4,6));
		geo.faces.push(new THREE.Face3(2,6,8));
		geo.faces.push(new THREE.Face3(0,2,8));
		geo.faces.push(new THREE.Face3(0,9,1));
		geo.faces.push(new THREE.Face3(0,8,9));
		geo.faces.push(new THREE.Face3(7,9,8));
		geo.faces.push(new THREE.Face3(6,7,8));
		geo.faces.push(new THREE.Face3(4,5,6));
		geo.faces.push(new THREE.Face3(5,7,6));
		geo.faces.push(new THREE.Face3(1,9,3));
		geo.faces.push(new THREE.Face3(3,9,7));
		geo.faces.push(new THREE.Face3(3,7,5));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);
	}

	makeVStab(x, y, z) {
		var geo = new THREE.Geometry();

		geo.vertices.push(new THREE.Vector3(-1,0,0));
		geo.vertices.push(new THREE.Vector3(-1,0,10));
		geo.vertices.push(new THREE.Vector3(1,0,10));
		geo.vertices.push(new THREE.Vector3(1,0,0));
		geo.vertices.push(new THREE.Vector3(-0.25,9,4));
		geo.vertices.push(new THREE.Vector3(-0.25,10,10));
		geo.vertices.push(new THREE.Vector3(0.25,10,10));
		geo.vertices.push(new THREE.Vector3(0.25,9,4));

		geo.faces.push(new THREE.Face3(0,2,1));
		geo.faces.push(new THREE.Face3(0,3,2));
		geo.faces.push(new THREE.Face3(0,4,3));
		geo.faces.push(new THREE.Face3(3,4,7));
		geo.faces.push(new THREE.Face3(1,2,5));
		geo.faces.push(new THREE.Face3(2,6,5));
		geo.faces.push(new THREE.Face3(4,5,6));
		geo.faces.push(new THREE.Face3(4,6,7));
		geo.faces.push(new THREE.Face3(0,1,4));
		geo.faces.push(new THREE.Face3(1,5,4));
		geo.faces.push(new THREE.Face3(2,3,7));
		geo.faces.push(new THREE.Face3(2,7,6));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);

	}


	makeBodyL(x, y, z) {
		var geo = new THREE.Geometry();

		geo.vertices.push(new THREE.Vector3(0,0,0));
		geo.vertices.push(new THREE.Vector3(2,0,0));
		geo.vertices.push(new THREE.Vector3(6,0,30));
		geo.vertices.push(new THREE.Vector3(6,0,40));
		geo.vertices.push(new THREE.Vector3(1,0,80));
		geo.vertices.push(new THREE.Vector3(0,0,80));
		geo.vertices.push(new THREE.Vector3(0,-5,10));
		geo.vertices.push(new THREE.Vector3(0,-5,60));
		geo.vertices.push(new THREE.Vector3(0,5,60));
		geo.vertices.push(new THREE.Vector3(0,5,15));
		geo.vertices.push(new THREE.Vector3(0,2,0));
		geo.vertices.push(new THREE.Vector3(2,-5,10));
		geo.vertices.push(new THREE.Vector3(2,-5,60));
		geo.vertices.push(new THREE.Vector3(2,5,60));
		geo.vertices.push(new THREE.Vector3(2,5,15));
		geo.vertices.push(new THREE.Vector3(2,2,0));

		geo.faces.push(new THREE.Face3(0,15,1));
		geo.faces.push(new THREE.Face3(0,10,15));
		geo.faces.push(new THREE.Face3(1,15,2));
		geo.faces.push(new THREE.Face3(2,15,14));
		geo.faces.push(new THREE.Face3(10,14,15));
		geo.faces.push(new THREE.Face3(9,14,10));
		geo.faces.push(new THREE.Face3(2,14,3));
		geo.faces.push(new THREE.Face3(3,14,13));
		geo.faces.push(new THREE.Face3(9,13,14));
		geo.faces.push(new THREE.Face3(8,13,9));
		geo.faces.push(new THREE.Face3(3,13,4));
		geo.faces.push(new THREE.Face3(4,13,8));
		geo.faces.push(new THREE.Face3(4,8,5));
		geo.faces.push(new THREE.Face3(0,1,11));
		geo.faces.push(new THREE.Face3(0,11,6));
		geo.faces.push(new THREE.Face3(6,11,12));
		geo.faces.push(new THREE.Face3(6,12,7));
		geo.faces.push(new THREE.Face3(1,2,11));
		geo.faces.push(new THREE.Face3(2,3,11));
		geo.faces.push(new THREE.Face3(3,12,11));
		geo.faces.push(new THREE.Face3(3,4,12));
		geo.faces.push(new THREE.Face3(4,5,7));
		geo.faces.push(new THREE.Face3(4,7,12));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);

	}

	makeBodyR(x, y, z) {
		var geo = new THREE.Geometry();

		geo.vertices.push(new THREE.Vector3(0,0,0));
		geo.vertices.push(new THREE.Vector3(-2,0,0));
		geo.vertices.push(new THREE.Vector3(-6,0,30));
		geo.vertices.push(new THREE.Vector3(-6,0,40));
		geo.vertices.push(new THREE.Vector3(-1,0,80));
		geo.vertices.push(new THREE.Vector3(0,0,80));
		geo.vertices.push(new THREE.Vector3(0,-5,10));
		geo.vertices.push(new THREE.Vector3(0,-5,60));
		geo.vertices.push(new THREE.Vector3(0,5,60));
		geo.vertices.push(new THREE.Vector3(0,5,15));
		geo.vertices.push(new THREE.Vector3(0,2,0));
		geo.vertices.push(new THREE.Vector3(-2,-5,10));
		geo.vertices.push(new THREE.Vector3(-2,-5,60));
		geo.vertices.push(new THREE.Vector3(-2,5,60));
		geo.vertices.push(new THREE.Vector3(-2,5,15));
		geo.vertices.push(new THREE.Vector3(-2,2,0));

		geo.faces.push(new THREE.Face3(0,1,15));
		geo.faces.push(new THREE.Face3(0,15,10));
		geo.faces.push(new THREE.Face3(1,2,15));
		geo.faces.push(new THREE.Face3(2,14,15));
		geo.faces.push(new THREE.Face3(10,15,14));
		geo.faces.push(new THREE.Face3(9,10,14));
		geo.faces.push(new THREE.Face3(2,3,14));
		geo.faces.push(new THREE.Face3(3,13,14));
		geo.faces.push(new THREE.Face3(9,14,13));
		geo.faces.push(new THREE.Face3(8,9,13));
		geo.faces.push(new THREE.Face3(3,4,13));
		geo.faces.push(new THREE.Face3(4,8,13));
		geo.faces.push(new THREE.Face3(4,5,8));
		geo.faces.push(new THREE.Face3(0,11,1));
		geo.faces.push(new THREE.Face3(0,6,11));
		geo.faces.push(new THREE.Face3(6,12,11));
		geo.faces.push(new THREE.Face3(6,7,12));
		geo.faces.push(new THREE.Face3(1,11,2));
		geo.faces.push(new THREE.Face3(2,11,3));
		geo.faces.push(new THREE.Face3(3,11,12));
		geo.faces.push(new THREE.Face3(3,12,4));
		geo.faces.push(new THREE.Face3(4,7,5));
		geo.faces.push(new THREE.Face3(4,12,7));


		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.bodyMats[1];
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        this.geos.push(mesh);

	}

	makeCockpit(x, y, z, dir) {
		var geo = new THREE.Geometry();

		geo.vertices.push(new THREE.Vector3(0,0,0));
		geo.vertices.push(new THREE.Vector3(4,0,0));
		geo.vertices.push(new THREE.Vector3(0,3,15));
		geo.vertices.push(new THREE.Vector3(4,3,15));
		geo.vertices.push(new THREE.Vector3(0,0,30));
		geo.vertices.push(new THREE.Vector3(4,0,30));

		geo.faces.push(new THREE.Face3(0,2,1));
		geo.faces.push(new THREE.Face3(1,2,3));
		geo.faces.push(new THREE.Face3(2,4,3));
		geo.faces.push(new THREE.Face3(3,4,5));
		geo.faces.push(new THREE.Face3(0,4,2));
		geo.faces.push(new THREE.Face3(1,3,5));
		geo.faces.push(new THREE.Face3(0,1,4));
		geo.faces.push(new THREE.Face3(1,5,4));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = this.cockpitMats[1]
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.cockpit = mesh;
        this.add(mesh);

    }


    changeMaterial() {
    	var i;
    	if (this.illumination == 0) //se o calculo de iluminacao estiver desligado, nao muda nada
    		return;


    	if (this.mat == 1) {
    		for (i=0; i < this.geos.length; i++)
    			this.geos[i].material = this.bodyMats[0];
    		this.mat = 0;
    		this.cockpit.material = this.cockpitMats[0];
    	}
    	else {
    		for (i=0; i < this.geos.length; i++)
    			this.geos[i].material = this.bodyMats[1];
    		this.mat = 1;
    		this.cockpit.material = this.cockpitMats[1];
    	}

    }

    turnOnOffIllumination() {
    	var i;
    	if (this.illumination == 1) {
    		for (i=0; i < this.geos.length; i++)
    			this.geos[i].material = this.bodyMats[2];
    		this.illumination = 0;
    		this.cockpit.material = this.cockpitMats[2];
    	}
    	else {
    		for (i=0; i < this.geos.length; i++)
    			this.geos[i].material = this.bodyMats[this.mat];
    		this.illumination = 1;
    		this.cockpit.material = this.cockpitMats[this.mat];
    	}

    }

    changeWireframe() {
    	var i;
    	for (i=0; i < this.bodyMats.length; i++) {
    		this.bodyMats[i].wireframe = !this.bodyMats[i].wireframe;
    	} 
    	for (i=0; i < this.cockpitMats.length; i++) {
    		this.cockpitMats[i].wireframe = !this.cockpitMats[i].wireframe;
    	} 
    }



	constructor() {
		'use strict';

		super();

		this.geos = []
		this.bodyMats = [new THREE.MeshLambertMaterial({ color:0xFF0000, wireframe: false }), new THREE.MeshPhongMaterial({ color:0xFF0000, wireframe: false }), new THREE.MeshBasicMaterial({ color:0xFF0000, wireframe: false })];
		this.cockpitMats = [new THREE.MeshLambertMaterial({ color:0x0000FF, wireframe: false, roughness: 0, metalness: 0 }), new THREE.MeshStandardMaterial({ color:0x0000FF, wireframe: false, roughness: 0, metalness: 0 }), new THREE.MeshBasicMaterial({ color:0x0000FF, wireframe: false })];
		this.mat = 1;
		this.illumination = 1;

		this.add(new THREE.AxisHelper(20));

		this.makeBodyL(0, 0, -40);
		this.makeBodyR(0, 0, -40);
		this.makeWingL(0, 0, -10);
		this.makeWingR(0, 0, -10);
		this.makeCockpit(-2, 5, -25);
		this.makeHStabL(0, 0, 30);
		this.makeHStabR(0, 0, 30);
		this.makeVStab(0, 0, 30);

	}

}
