import * as THREE from 'three'
import * as CORE from './core.js'

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        5, 50, 50
    ),
    new THREE.MeshBasicMaterial(
        {
            map: new THREE.TextureLoader().load('/01-3.jpg')
        }
    )
)

CORE.scene.add(sphere)

export function animate() {
    requestAnimationFrame(animate)
    CORE.renderer.render(CORE.scene, CORE.camera)
}
