const BACK = 0; const SOLID = 1;// const QB = 3;
const PASS = 0; const BLOCK = 0; 
const UP = 1; const DOWN = 2; const SIDE = 3;

const BRICK = 11; const Q_BOX = 29;
const COIN = 30; const ENEMY = 31;

const GIVE_COIN = 3; const GIVE_ITEM = 4; 

//delete these

function get_tex_coords(s_x, s_y)
{
    const SPRITE_W = 16/208; const SPRITE_H = 16/176;

    return new Float32Array
        ([
         s_x * SPRITE_W,       s_y * SPRITE_H,
         (s_x + 1) * SPRITE_W, s_y * SPRITE_H,
         (s_x + 1) * SPRITE_W, (s_y + 1) * SPRITE_H,
         s_x * SPRITE_W, (s_y + 1) * SPRITE_H
        ])
}

function create_scene_sprites(gl, sprite, shader_vars)
{

    sprite.common.buffer = gl.createBuffer();
    if( !sprite.common.buffer )
    {
        console.log("Unable to create scene sprite buffer.");
        return false;
    } 

    gl.bindBuffer(
            gl.ARRAY_BUFFER,
            sprite.common.buffer);
    gl.bufferData(
            gl.ARRAY_BUFFER,
            sprite.common.verts,
            gl.STATIC_DRAW);
    var FSIZE = sprite.common.verts.BYTES_PER_ELEMENT;
    gl.vertexAttribPointer(
            shader_vars.a_pos,
            2,
            gl.FLOAT,
            false,
            0,
            0);
    gl.enableVertexAttribArray(shader_vars.a_pos);

    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(0, 0)
    }); //floor 0
    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(2, 2)
    }); //facetted block 1
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 1)
    }); //hill0 2
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 0)
    }); //hill1 3 
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(2, 1)
    }); //hill2 4
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(3, 1)
    }); //hill3 5
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 1)
    }); //hill4 6
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(4, 1)
    }); //hill5 7
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(8, 10)
    }); //bush0 8
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(9, 10)
    }); //bush1 9
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(10, 10)
    }); //bush2 10
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 5)
    }); //brick 11
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 9)
    }); //cloud0 12
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 10)
    }); //cloud1 13
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 10)
    }); //cloud2 14
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(2, 10)
    }); //cloud3 15
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(3, 2)
    }); //flag topper 16
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(11, 7)
    }); //flag pole 17
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(2, 4)
    }); //castle0 18
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 4)
    }); //castle1 19
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(2, 6)
    }); //castle2 20
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 5)
    }); //castle3 21
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 5)
    }); //castle4 22
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(2, 5)
    }); //castle5 23
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(1, 6)
    }); //castle6 24
    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(0, 2)
    }); //pipe0 25
    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(1, 2)
    }); //pipe1 26
    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(0, 3)
    }); //pipe2 27
    sprite.unique.push({
        col:get_collision(SOLID),
        tex_coords:get_tex_coords(1, 3)
    }); //pipe3 28
    sprite.unique.push({
        col:get_collision(BACK),
        tex_coords:get_tex_coords(0, 6)
    }); //empty box 29

    var count = 0; var buffs = 0;
    for(var i = 0; i < sprite.unique.length; i++)
    {
        count++;
        sprite.unique[i].tex_buff = gl.createBuffer();
        if( sprite.unique[i].tex_buff )
        {
            buffs++;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.unique[i].tex_buff);
        gl.bufferData(gl.ARRAY_BUFFER, sprite.unique[i].tex_coords, gl.STATIC_DRAW);
    }
    console.log( buffs + " out of " + count + " attempted tex coord buffers created.");

    return true;
}

function create_usable_sprites(gl, sprite, shader_vars)
{
    sprite.common.buffer = gl.createBuffer();
    if( !sprite.common.buffer )
    {
        console.log("Unable to create scene sprite buffer.");
        return false;
    } 

    gl.bindBuffer(
            gl.ARRAY_BUFFER,
            sprite.common.buffer);
    gl.bufferData(
            gl.ARRAY_BUFFER,
            sprite.common.verts,
            gl.STATIC_DRAW);
    var FSIZE = sprite.common.verts.BYTES_PER_ELEMENT;
    gl.vertexAttribPointer(
            shader_vars.a_pos,
            2,
            gl.FLOAT,
            false,
            0,
            0);
    gl.enableVertexAttribArray(shader_vars.a_pos);

    sprite.unique.push({
        col:get_collision(Q_BOX),
        tex_coords:get_tex_coords(0, 0)
    }); //question mark box 0
    sprite.unique.push({
        col:get_collision(BRICK),
        tex_coords:get_tex_coords(0, 1)
    }); //brick 1
}

function get_collision(type)
{
    switch( type )
    {
        default: //fallthrough
        case BACK:
            return function(target){ return false };
        case SOLID:
            return function(target){
                if( 
                        this.x < (target.x + target.dim.width / 2) &&
                        (this.x + this.dim.width / 2) > target.x &&
                        this.y < (target.y + target.dim.height / 2) &&
                        (this.y + this.dim.height / 2) > target.y )
                {
                    return BLOCK;
                }
                return PASS;
            };
        case Q_BOX: //fallthrough
        case BRICK:
            return function(target){ 
                if( 
                        this.x < (target.x + target.dim.width / 2) &&
                        (this.x + this.dim.width / 2) > target.x &&
                        this.y < (target.y + target.dim.height / 2) &&
                        (this.y + this.dim.height / 2) > target.y )
                {
                    if( this.y < target.y && 
                            this.x > target.dim.width / 2 - target.unique.x &&
                            this.x < target.dim.width / 2 - target.unique.y)
                    {
                        target.unique.action();
                    }
                    return BLOCK;
                }
                return PASS;
            };

    }
}

const SCENERY = 0; const USABLE = 1;

function make_level(gl, layout, scenery, usable, lev)
{



    for(var i = 0; i < layout.scene.length; i++)
    {
        lev.bg.push([]);
        var x_coor = (i * (1/13)) - 8/13;
        for(var j = 0; j < 14; j++)
        {        
            var cur_item = layout.scene[i][j];
            var y_coor = (j * (1/13)) - (27/26);

            var i_xform = new Matrix4;
            i_xform.setTranslate(x_coor, y_coor, 0);
            if( cur_item[0] == -1 )
            {
                lev.bg[i].push({draw:false,x:x_coor,y:y_coor});
            }
            else
            {
                if( layout.scene[i][j].length == 3 )
                {
                    if( cur_item[0] == BRICK )
                    {
                        lev.bg[i].push(
                                {draw:false,
                                    x:x_coor,
                                    y:x_coor});
                    }
                    else
                    {
                        lev.bg[i].push(
                                {draw:true,
                                    x:x_coor,
                                    y:y_coor,
                                    xform:i_xform,
                                    info:scenery.unique[Q_BOX]});
                    }
                    lev.fg.push(
                            {draw:true,
                                x:x_coor,
                                y:y_coor,
                                xform:i_xform,
                                info:scenery.unique[cur_item[0]]});
                }
                else
                {
                    lev.bg[i].push({draw:true,x:x_coor,y:y_coor,
                        xform:i_xform,
                        info:scenery.unique[cur_item[0]]});
                }
            }
        }
    }
    return;
}
