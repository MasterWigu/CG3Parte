class Plane extends THREE.Scene {

	makeWing(x, y, z, dir) { /* dir = -1 ou 1 em funcao da asa da sesquerda ou da direita */
		var geo = new THREE.Geometry();
		
		//adiciona o vertice a "lista"
		geo.vertices.push(new THREE.Vector3(dir*0,0,0));
		geo.vertices.push(new THREE.Vector3(dir*0,4,0));
		geo.vertices.push(new THREE.Vector3(dir*0,0,10));
		geo.vertices.push(new THREE.Vector3(dir*0,4,10));
		geo.vertices.push(new THREE.Vector3(dir*50,0,10));
		geo.vertices.push(new THREE.Vector3(dir*50,1,10));
		geo.vertices.push(new THREE.Vector3(dir*50,0,6));
		geo.vertices.push(new THREE.Vector3(dir*50,1,6));
		geo.vertices.push(new THREE.Vector3(dir*45,0,1));
		geo.vertices.push(new THREE.Vector3(dir*45,1,1));

		geo.faces.push(new THREE.Face3(0,1,2));
		geo.faces.push(new THREE.Face3(1,2,3));
		geo.faces.push(new THREE.Face3(2,3,5));
		geo.faces.push(new THREE.Face3(2,4,5));
		geo.faces.push(new THREE.Face3(2,4,6));
		geo.faces.push(new THREE.Face3(2,6,8));
		geo.faces.push(new THREE.Face3(0,2,8));
		geo.faces.push(new THREE.Face3(0,1,9));
		geo.faces.push(new THREE.Face3(0,8,9));
		geo.faces.push(new THREE.Face3(7,8,9));
		geo.faces.push(new THREE.Face3(6,7,8));
		geo.faces.push(new THREE.Face3(4,5,6));
		geo.faces.push(new THREE.Face3(5,6,7));
		geo.faces.push(new THREE.Face3(1,3,9));
		geo.faces.push(new THREE.Face3(3,7,9));
		geo.faces.push(new THREE.Face3(3,5,7));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = new THREE.MeshBasicMaterial({ color:0xFF0000, side: THREE.DoubleSide, wireframe: true });
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);

	}

	makeBody(x, y, z, dir) {
		var geo = new THREE.Geometry();

		geo.vertices.push(new THREE.Vector3(dir*0,0,0));
		geo.vertices.push(new THREE.Vector3(dir*2,0,0));
		geo.vertices.push(new THREE.Vector3(dir*6,0,30));
		geo.vertices.push(new THREE.Vector3(dir*6,0,40));
		geo.vertices.push(new THREE.Vector3(dir*1,0,80));
		geo.vertices.push(new THREE.Vector3(dir*0,0,80));
		geo.vertices.push(new THREE.Vector3(dir*0,-5,10));
		geo.vertices.push(new THREE.Vector3(dir*0,-5,60));
		geo.vertices.push(new THREE.Vector3(dir*0,5,60));
		geo.vertices.push(new THREE.Vector3(dir*0,5,15));
		geo.vertices.push(new THREE.Vector3(dir*0,2,0));
		geo.vertices.push(new THREE.Vector3(dir*2,-5,10));
		geo.vertices.push(new THREE.Vector3(dir*2,-5,60));
		geo.vertices.push(new THREE.Vector3(dir*2,5,60));
		geo.vertices.push(new THREE.Vector3(dir*2,5,15));
		geo.vertices.push(new THREE.Vector3(dir*2,2,0));

		geo.faces.push(new THREE.Face3(0,1,15));
		geo.faces.push(new THREE.Face3(0,10,15));
		geo.faces.push(new THREE.Face3(1,2,15));
		geo.faces.push(new THREE.Face3(2,14,15));
		geo.faces.push(new THREE.Face3(10,14,15));
		geo.faces.push(new THREE.Face3(9,10,14));
		geo.faces.push(new THREE.Face3(2,3,14));
		geo.faces.push(new THREE.Face3(3,14,13));
		geo.faces.push(new THREE.Face3(9,14,13));
		geo.faces.push(new THREE.Face3(8,9,13));
		geo.faces.push(new THREE.Face3(3,4,13));
		geo.faces.push(new THREE.Face3(4,8,13));
		geo.faces.push(new THREE.Face3(4,5,8));
		geo.faces.push(new THREE.Face3(0,1,11));
		geo.faces.push(new THREE.Face3(0,6,11));
		geo.faces.push(new THREE.Face3(6,11,12));
		geo.faces.push(new THREE.Face3(6,7,12));
		geo.faces.push(new THREE.Face3(1,2,11));
		geo.faces.push(new THREE.Face3(2,3,11));
		geo.faces.push(new THREE.Face3(3,11,12));
		geo.faces.push(new THREE.Face3(3,4,12));
		geo.faces.push(new THREE.Face3(4,5,7));
		geo.faces.push(new THREE.Face3(4,7,12));

		geo.computeFaceNormals();
		geo.computeVertexNormals();

		var material = new THREE.MeshBasicMaterial({ color:0xFF0000, side: THREE.DoubleSide, wireframe: true });
		var mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, y, z);
        this.add(mesh);

	}

	constructor() {
		'use strict';

		super();

		this.makeBody(0, 0, 0, 1);
		this.makeBody(0, 0, 0, -1);
		this.makeWing(0, 0, 30, 1);
		this.makeWing(0, 0, 30, -1);

	}

}