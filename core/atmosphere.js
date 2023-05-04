import * as THREE from 'three'
import vertexShader from './shaders/atmosphere/vertex.glsl'
import fragmentShader from './shaders/atmosphere/fragment.glsl'

export const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial(
        {
            vertexShader,
            fragmentShader,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        }
    )
)
mesh.scale.set(1.15, 1.15, 1.15)
