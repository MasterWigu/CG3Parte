var controls;

class Scene extends THREE.Scene {

    createScene() {
        'use strict';

        this.plane = new Plane();
        this.add(this.plane);

        this.directLight = new DirectLight();
        this.add(this.directLight);

        this.lamp1 = new Lamp(75, 75, 75, 1);
        this.add(this.lamp1);

        this.lamp2 = new Lamp(-75, 75, 75, 2);
        this.add(this.lamp2);

        this.lamp3 = new Lamp(75, 75, -75, 3);
        this.add(this.lamp3);

        this.lamp4 = new Lamp(-75, 75, -75, 4);
        this.add(this.lamp4);

    }

    createCamera() { /* 1 CAMARA PERSPETIVA */
        'use strict';
        this.distance = 10;

        //Camera temporaria movível
        this.camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         100000000);
        this.camera.position.x = 125;
        this.camera.position.y = 125;
        this.camera.position.z = 125;
        this.camera.lookAt(this.position);

    }

    onResize() { /* CORRIGIR VER PEDREIRA */
        'use strict';

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }


    onKeyDown(e) {
        'use strict';
        switch (e.keyCode) {
        case 37: //esquerda
            this.plane.rotateYY(1);
            break;
        case 38: //cima
            this.plane.rotateXX(1);
            break;
        case 39: //direita
            this.plane.rotateYY(-1);
            break;
        case 40: //baixo
            this.plane.rotateXX(-1);
            break;

        case 49: //para a lampada 1
            this.lamp1.turnOnOff();
            break;
        case 50: //para a lampada 2
            this.lamp2.turnOnOff();
            break;
        case 51: //para a lampada 3
            this.lamp3.turnOnOff();
            break;
        case 52: //para a lampada 4
            this.lamp4.turnOnOff();
            break;

        case 78:
            this.directLight.turnOnOff();
            break;
        case 65: //A
        case 97: //a
            this.lamp1.lampMaterial.wireframe = !this.lamp1.lampMaterial.wireframe;
            this.lamp1.baseMaterial.wireframe = !this.lamp1.baseMaterial.wireframe;
            this.lamp2.lampMaterial.wireframe = !this.lamp2.lampMaterial.wireframe;
            this.lamp2.baseMaterial.wireframe = !this.lamp2.baseMaterial.wireframe;
            this.lamp3.lampMaterial.wireframe = !this.lamp3.lampMaterial.wireframe;
            this.lamp3.baseMaterial.wireframe = !this.lamp3.baseMaterial.wireframe;
            this.lamp4.lampMaterial.wireframe = !this.lamp4.lampMaterial.wireframe;
            this.lamp4.baseMaterial.wireframe = !this.lamp4.baseMaterial.wireframe;

            /*this.screen.wallMaterial.wireframe = !this.screen.wallMaterial.wireframe;
            this.screen.floorMaterial.wireframe = !this.screen.floorMaterial.wireframe;
            for (var i = 0; i < this.ballVector.length; i++) {
                this.ballVector[i].material.wireframe = !this.ballVector[i].material.wireframe;
            }*/
            break;
        case 69:  //E
        case 101: //e
            this.traverse(function (node) {
                if (node instanceof THREE.AxisHelper) {
                    node.visible = !node.visible;
                }
            });
            break;
        }
    }

    render() {
        'use strict';
        this.renderer.render(this, this.camera);
    }

    constructor() {
        'use strict';

        super();
        this.background = new THREE.Color( 0x0 );

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.createScene();
        this.createCamera();

        this.controls = new THREE.TrackballControls(this.camera); //para a camara movivel

        this.render();

        window.addEventListener("keydown", this.onKeyDown.bind(this)); //tem de se usar o bind() por ser uma classe ou wtv, apenas sei que funciona assim
        window.addEventListener("resize", this.onResize.bind(this));
    }

    animate() {
        'use strict';

        this.render();
        this.controls.update(); //para a camara movivel (apagar)
        requestAnimationFrame(this.animate.bind(this));

    }
}
