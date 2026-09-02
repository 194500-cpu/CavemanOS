import * as THREE from "./lib/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 0, 9);


const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

document.body.appendChild(renderer.domElement);


renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "1";
renderer.domElement.style.pointerEvents = "none";

const bodyWire = new THREE.MeshBasicMaterial({
    color: 0xff7b00,
    wireframe: true,
    transparent: true,
    opacity: 0.8
});


const headWire = new THREE.MeshBasicMaterial({
    color: 0xffc857,
    wireframe: true,
    transparent: true,
    opacity: 0.9
});


const trunkWire = new THREE.MeshBasicMaterial({
    color: 0xffa238,
    wireframe: true,
    transparent: true,
    opacity: 0.9
});


const legWire = new THREE.MeshBasicMaterial({
    color: 0xa84f13,
    wireframe: true,
    transparent: true,
    opacity: 0.9
});


const tuskMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: false
});



const tailWire = new THREE.MeshBasicMaterial({
    color: 0xcc6500,
    wireframe: true,
    transparent: true,
    opacity: 0.85
});



const mammoth = new THREE.Group();

scene.add(mammoth);


mammoth.position.set(
    0,
    -0.3,
    0
);



const baseMammothRotation =
    -Math.PI / 2;

mammoth.rotation.y =
    baseMammothRotation;


const body = new THREE.Mesh(

    new THREE.SphereGeometry(
        1.6,
        12,
        9
    ),

    bodyWire
);

body.scale.set(
    1.7,
    1,
    1
);

body.position.x = -0.6;

mammoth.add(body);


const headGroup =
    new THREE.Group();

headGroup.position.set(
    1.4,
    0.4,
    0
);

mammoth.add(headGroup);


const head = new THREE.Mesh(

    new THREE.SphereGeometry(
        0.95,
        12,
        8
    ),

    headWire
);

head.position.x = 0.4;

head.scale.set(
    1,
    0.9,
    0.9
);

headGroup.add(head);


function createEar(z) {

    const ear = new THREE.Mesh(

        new THREE.SphereGeometry(
            0.55,
            8,
            6
        ),

        headWire
    );


    ear.scale.set(
        0.35,
        0.8,
        1
    );


    ear.position.set(
        0,
        0.1,
        z
    );


    return ear;
}


headGroup.add(
    createEar(0.75)
);

headGroup.add(
    createEar(-0.75)
);


const trunkCurve =
    new THREE.CatmullRomCurve3([

        new THREE.Vector3(
            1.0,
            -0.3,
            0
        ),

        new THREE.Vector3(
            1.2,
            -0.8,
            0
        ),

        new THREE.Vector3(
            1.1,
            -1.3,
            0
        ),

        new THREE.Vector3(
            1.25,
            -1.8,
            0
        ),

        new THREE.Vector3(
            1.5,
            -1.6,
            0
        )

    ]);


const trunkGeometry =
    new THREE.TubeGeometry(
        trunkCurve,
        20,
        0.16,
        6,
        false
    );


const trunk =
    new THREE.Mesh(
        trunkGeometry,
        trunkWire
    );


headGroup.add(trunk);



function createTusk(z) {

    const tuskCurve =
        new THREE.CatmullRomCurve3([

            new THREE.Vector3(
                0.8,
                -0.4,
                z
            ),

            new THREE.Vector3(
                1.4,
                -0.6,
                z
            ),

            new THREE.Vector3(
                1.8,
                -0.3,
                z
            ),

            new THREE.Vector3(
                2.0,
                0.1,
                z
            )

        ]);


    const tuskGeometry =
        new THREE.TubeGeometry(
            tuskCurve,
            15,
            0.065,
            6,
            false
        );


    return new THREE.Mesh(
        tuskGeometry,
        tuskMaterial
    );
}


headGroup.add(
    createTusk(0.35)
);

headGroup.add(
    createTusk(-0.35)
);


function createLeg(x, z) {

    const leg =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.3,
                0.4,
                1.9,
                7
            ),

            legWire
        );


    leg.position.set(
        x,
        -1.9,
        z
    );


    return leg;
}




mammoth.add(
    createLeg(-1.5, 0.65)
);

mammoth.add(
    createLeg(-1.5, -0.65)
);



mammoth.add(
    createLeg(0.3, 0.65)
);

mammoth.add(
    createLeg(0.3, -0.65)
);



const tailCurve =
    new THREE.CatmullRomCurve3([

        new THREE.Vector3(
            -2.1,
            0.2,
            0
        ),

        new THREE.Vector3(
            -2.6,
            0,
            0
        ),

        new THREE.Vector3(
            -2.8,
            -0.5,
            0
        )

    ]);


const tailGeometry =
    new THREE.TubeGeometry(
        tailCurve,
        10,
        0.06,
        5,
        false
    );


const tail =
    new THREE.Mesh(
        tailGeometry,
        tailWire
    );


mammoth.add(tail);


let mouseX = 0;
let mouseY = 0;


document.addEventListener(
    "mousemove",
    function(event) {

        mouseX =
            (event.clientX /
            window.innerWidth)
            * 2 - 1;


        mouseY =
            (event.clientY /
            window.innerHeight)
            * 2 - 1;

    }
);


function animate(time) {

    requestAnimationFrame(animate);

    const targetHeadY =
        mouseX * 0.45;


    const targetHeadX =
        -mouseY * 0.2;


    headGroup.rotation.y +=
        (
            targetHeadY -
            headGroup.rotation.y
        )
        * 0.025;


    headGroup.rotation.x +=
        (
            targetHeadX -
            headGroup.rotation.x
        )
        * 0.025;


    const targetBodyY =
        baseMammothRotation
        +
        mouseX * 0.05;


    mammoth.rotation.y +=
        (
            targetBodyY -
            mammoth.rotation.y
        )
        * 0.008;

    mammoth.position.y =
        -0.3
        +
        Math.sin(
            time * 0.0015
        )
        * 0.04;


    headGroup.position.y =
        0.4
        +
        Math.sin(
            time * 0.002
        )
        * 0.025;


    renderer.render(
        scene,
        camera
    );

}


requestAnimationFrame(animate);


window.addEventListener(
    "resize",
    function() {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);