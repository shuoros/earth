import * as THREE from 'three'
import vertexShader from './shaders/earth/vertex.glsl'
import fragmentShader from './shaders/earth/fragment.glsl'

export const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial(
        {
            vertexShader,
            fragmentShader,
            uniforms: {
                earthTexture: {
                    value: new THREE.TextureLoader().load('01-3.jpg')
                }
            }
        }
    )
)

export function animate() {
    mesh.rotation.y += 0.001
}
