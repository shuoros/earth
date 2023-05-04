import { animate, addToScene } from './core/core.js'
import * as EARTH from './core/earth.js'
import * as ATMOSPHERE from './core/atmosphere.js'

addToScene(EARTH.mesh)
addToScene(ATMOSPHERE.mesh)

animate(EARTH.animate)
