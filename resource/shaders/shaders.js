"use strict";

/**Creates an array of shaders.
 * @return an array contain the necessary shader programs.
 */
function get_shaders()
{

    var shaders = [
        'attribute vec4 a_pos;\n' +
        'uniform mat4 u_xform;\n' +
        'void main(){\n' +
        '  gl_Position = u_xform * a_pos;\n' +
        '}\n'
                    ,
        'precision mediump float;\n' +
        'uniform vec4 u_color;\n' +
        'void main(){\n' +
        '  gl_FragColor = u_color;\n' +
        '}\n'];

    return shaders;
}
