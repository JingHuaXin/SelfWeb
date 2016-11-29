/**
 * Created by Administrator on 2016/11/24 0024.
 */

//海报模板
var photo_model ='<!--photo 负责平移、旋转-->'+
    '<div class="photo photo_front" onclick="turn(this)" id="photo_{{index}}">'+
    '<!--photo_wrap 负责翻转ת-->'+
    '<div class="photo-wrap">'+
    ' <div class="side side-front">'+
    '<p class="image"><img src="img/{{image}}"/></p>'+
    '<p class="caption">{{caption}}</p>'+
    '</div>'+
    '<div class="side side-back">'+
    '<p class="desc">{{desc}}</p>'+
    '</div>'+
    '</div>'+
    '</div>';