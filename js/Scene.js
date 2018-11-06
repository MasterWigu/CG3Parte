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

        //Camera temporaria movível
        
        this.camera = new THREE.PerspectiveCamera(30,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         100000000);
        this.camera.position.x = 125;
        this.camera.position.y = 125;
        this.camera.position.z = 125;
        this.camera.lookAt(this.position);
        /*
        this.distance = 10;
        this.camera = new THREE.OrthographicCamera(-window.innerWidth / this.distance,
                                                    window.innerWidth / this.distance,
                                                    window.innerHeight / this.distance,
                                                    -window.innerHeight / this.distance, 
                                                    1, 
                                                    1000);
        this.camera.position.x = 0;
        this.camera.position.y = 50;
        this.camera.position.z = 0;
        this.camera.lookAt(this.position);
        */
    }

    onResize() { /* CORRIGIR VER PEDREIRA */
        'use strict';
        if (window.innerHeight > 0 && window.innerWidth > 0) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
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
        case 76: //L
            this.plane.turnOnOffIllumination();
            break;
        case 71: //G
            this.plane.changeMaterial();
            break;
        case 78: //N
            this.directLight.turnOnOff();
            break;
        case 65: //A
        case 97: //a
            this.lamp1.changeWireframe();
            this.lamp2.changeWireframe();
            this.lamp3.changeWireframe();
            this.lamp4.changeWireframe();
            this.plane.changeWireframe();
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
