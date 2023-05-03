uniform sampler2D earth;
varying vec2 vertexUV;

void main() {
    gl_FragColor = texture2D(earth, vertexUV);
}