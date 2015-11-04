
//  Retrieves the level, basically a look-up table, ideally, 
//this would be loaded from a file instead.

function load_level_layout()
{

    var output = 
    {
        bg_color:rgba32(92, 148, 252, 255),
        scene:
            [
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//0
            [[0],[0],[6],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[5],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[7],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//4
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//5
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//10
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//15
            [[0],[0],[2],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],//20
            [[0],[0],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1]],
            [[0],[0],[8],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//25
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],
            [[0],[0],[27],[25],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[28],[26],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],//30
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//35
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[27],[27],[25],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[28],[28],[26],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//40
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//45
            [[0],[0],[27],[27],[27],[25],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[28],[28],[28],[26],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[5],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//50
            [[0],[0],[7],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//55
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],
            [[0],[0],[27],[27],[27],[25],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[28],[28],[28],[25],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//60
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//65
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//70
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],//75
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],//80
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[14],[12],[-1]],//85
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[14],[12],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[15],[-1],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//90
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//95
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[5],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[7],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//100
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],//105
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//110
            [[0],[0],[2],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],//115
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],//120
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[13],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],//125
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1]],//130
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//135
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//140
            [[0],[0],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[5],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//145
            [[0],[0],[7],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//150
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//155
            [[0],[0],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//160
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[27],[25],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[28],[26],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//165
            [[0],[0],[8],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[9],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[29,-1,0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[11,-1,-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],//170
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//175
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[27],[25],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[28],[26],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1]],
            [[0],[0],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],//180
            [[0],[0],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1]],
            [[0],[0],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1],[-1]],//185
            [[0],[0],[1],[1],[1],[1],[1],[1],[1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[1],[1],[1],[1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[1],[1],[1],[1],[1],[1],[1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//190
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[5],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[7],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//195
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[1],[17],[17],[17],[17],[17],[17],[17],[17],[17],[16],[-1]], //197
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[13],[-1],[-1],[-1]],//200
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[14],[12],[-1],[-1]],
            [[0],[0],[18],[18],[19],[-1],[-1],[-1],[-1],[-1],[15],[-1],[-1],[-1]],
            [[0],[0],[18],[18],[20],[21],[19],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[24],[22],[20],[18],[19],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[18],[18],[20],[23],[19],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//205
            [[0],[0],[18],[18],[19],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[10],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[2],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[6],[3],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            [[0],[0],[4],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],//210
            [[0],[0],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1],[-1]],
            ]
    }

    return output;
}
