function create_sprite(type, item, br, tex_coords)
{

    var stage1;
    if( type == 1 )
        stage1 =
        {
            width: 1/12,
            height: 1/12
        };
    else
    {
        stage1 =
        {
            width: 1/12,
            height: 2/12
        };
    }

    var output = 
    {
        dim:stage1,
        verts:new Float32Array
            ([
             -(stage1.width / 2), -(stage1.height / 2),
             -(stage1.width / 2),  (stage1.height / 2),
             (stage1.width / 2),  (stage1.height / 2),
             (stage1.width / 2), -(stage1.height / 2)
            ]),
        x: 0,
        y: 0,
        tex_coord: tex_coords,
        collide:function(sprite){},
        create_item: function(id){},
        breakable: br,
        draw: false
    };

    switch( item )
    {
        case 0:
            output.collide = function(sprite){ return false; };
            break;
        case 1:
            output.collide = function(sprite)
            {
                if( 
                        this.x < (sprite.x + sprite.dim.width / 2) &&
                        (this.x + this.dim.width / 2) > sprite.x &&
                        this.y < (sprite.y + sprite.dim.height / 2) &&
                        (this.y + this.dim.height / 2) > sprite.y )
                {
                    return true;
                }
                return false;
            };
        case 2:
            output.collide = function(sprite)
            {
                if( 
                        this.x < (sprite.x + sprite.dim.width / 2) &&
                        (this.x + this.dim.width / 2) > sprite.x &&
                        this.y < (sprite.y + sprite.dim.height / 2) &&
                        (this.y + this.dim.height / 2) > sprite.y )
                {
                    if( this.y < sprite.y )
                    {
                        this.create_item();
                    }
                    return true;
                }
                return false;
            };
            break;
        default:
    }

    return output;
}

function init_sprites(gl, n, spr_arr, u_sampler )
{

    var texture = gl.createTexture();
    if(!texture) 
    {
        console.log("Could not create texture object.");
        return;
    }
    else
    {
        console.log("Create texture object  SUCCESS");
    }

    if( u_sampler == 0 )
    {
        shader_vars.u_sampler = gl.getUniformLocation( gl.program, 'u_sampler' );
        if ( shader_vars.u_sampler < 0 )
        {
            console.log("Failed to get 'u_sampler'.");
            return -1;
        }
        else
        {
            console.log("'u_sampler'      SUCCESS");
        }
    }    

    var sprite_sheet = new Image();
    sprite_sheet.onload = function() { texture( gl, 1, texture, u_sampler, sprite_sheet, spr_arr ); };
    image.src = '../sheet_1.png';

    while( spr_arr.length == 0)
        ;
}

//world_sprite_images.onload = function() { texture(gl, n, tex, u_sampler, 1, world_sprite_images); };
function textures( gl, n, tex, u_sampler, image_obj, spr_arr )
{
    //    for( 
    switch( img_num )
    {
        case 1:
            sheet_1( gl, tex, u_sampler, image_obj, spr_arr );
            return 1;
        default:
            console.log("Texture set #" + img_num + " does not exist.");
            return -1;
    }
}

function sheet_1(gl, n, tex, u_sampler, image_obj )
{
    for( var x = 0; x < 13; x++ )
    {
        for( var y = 0; y < 11; y++ )
        {
            if( y < 9 || x < 9 )
            {
                var x1 = 17 * x;
                var y1 = 17 * y;

                var tex_coords = new Float32Array
                    ([
                     x1,        y1, (x1 + 16),        y1,
                     x1, (y1 + 16), (x1 + 16), (y1 + 16)
                    ]);
                var sprite = create_sprite( 1, 0, false, tex_coords );

                image_obj.push(sprite);
            }
        }
    }
}

