const canvas = document.querySelector("canvas");

const gl = canvas.getContext("gl");

const vertex = ` attribute vec2 position; void main() { gl_PointSize = 1.0; gl_Position = vec4(position, 1.0, 1.0); }`;

const fragment = ` precision mediump float; void main() { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); } `;
