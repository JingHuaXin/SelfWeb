/**
 * Created by Administrator on 2016/11/24 0024.
 */

//4.输出所有海报

function addPhotos(){
    var html = [];
    var nav = [];

    //7.控制海报填充内容
    for(var s in data){

        var _html = photo_model
            .replace('{{index}}',s)
            .replace('{{image}}',data[s].img)
            .replace('{{caption}}',data[s].caption)
            .replace('{{desc}}',data[s].desc)

        html.push( _html );
        nav.push('<span class="i" id="nav_'+s+'" onclick = "turn( g(\'#photo_'+s+'\'))">&nbsp;</span>');
    }
    html.push('<div class="nav">'+nav.join('')+'</div>');

    g('#wrap').innerHTML = html.join('');
    //console.log(html);
    rsort( random([0,data.length-1]) );
}