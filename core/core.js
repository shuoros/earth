import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)
camera.position.z = 15

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

export function addToScene(sphere) {
    scene.add(sphere)
}

export function animate(animation) {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    animation()
}
