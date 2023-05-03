import * as THREE from 'three'
import * as CORE from './core.js'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial(
        {
            vertexShader,
            fragmentShader,
            uniforms: {
                earth: {
                    value: new THREE.TextureLoader().load('01-3.jpg')
                }
            }
        }
    )
)

CORE.addToScene(sphere)

export function animate() {
    requestAnimationFrame(animate)
    CORE.render()
}
