var controls;

class Scene extends THREE.Scene {

    createScene() {
        'use strict';

        //this.add(new THREE.AxisHelper(10));

        this.plane = new Plane();
        this.add(this.plane);

    }
    
    createCamera() { /* 1 CAMARA PERSPETIVA */
        'use strict';
        this.distance = 10;
        //this.activeCamera = 0;  //guarda qual a camara que estamos a usar (para o render) no onkeydown, de acordo com a tecla premida

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
        //this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    
    onKeyDown(e) {
        'use strict';
        switch (e.keyCode) {
        case 37: //esquerda
            this.plane.rotateYY(-1);
            break;
        case 38: //cima
            this.plane.rotateXX(1);
            break;
        case 39: //direita
            this.plane.rotateYY(1);
            break;
        case 40: //baixo
            this.plane.rotateXX(-1);
            break;

        case 49:
            //this.activeCamera = 1;
            break;
        case 50:
            //this.activeCamera = 2;
            break;
        case 51:
            //this.activeCamera = 3;
            break;
        case 52: //para camara movivel
            //this.activeCamera = 0;
            break;

        case 65: //A
        case 97: //a
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
        this.background = new THREE.Color( 0xfff7c4 );

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
