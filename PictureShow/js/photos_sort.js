/**
 * Created by Administrator on 2016/11/24 0024.
 */

//5.翻转
function rsort( n ){
    var _photo = g('.photo')// '_',表示为临时变量
    var photos = [];

    for( var s = 0 ; s < _photo.length ; s++){
        _photo[s].className = _photo[s].className.replace(/\s*photo_center\s*/, ' ');
        _photo[s].className = _photo[s].className.replace(/\s*photo_front\s*/, ' ');
        _photo[s].className = _photo[s].className.replace(/\s*photo_back\s*/, ' ');

        _photo[s].className += ' photo_front ';
        _photo[s].style.left='';
        _photo[s].style.top='';

        _photo[s].style['-webkit-transform']='rotate(360deg)';

        photos.push( _photo[s] );
    }

    var photo_center = g('#photo_'+n);
    photo_center.className += ' photo_center';
    photo_center = photos.splice( n, 1)[0];

    //把余下的海报分为左右区域
    var photo_left = photos.splice( 0, Math.ceil(photos.length/2));
    var photo_right = photos;

    var ranges = range();
    for ( s in photo_left){
        var photo = photo_left[s];

        photo.style.left = random(ranges.left.x)+'px';
        photo.style.top = random(ranges.left.y)+'px';
        photo.style['-webkit-transform'] = 'rotate('+random([-100,100])+'deg)';
    }
    for ( s in photo_right){
        var photo = photo_right[s];

        photo.style.left = random(ranges.right.x)+'px';
        photo.style.top = random(ranges.right.y)+'px';
        photo.style['-webkit-transform'] = 'rotate('+random([-100,100])+'deg)';
    }

    //控制按钮处理
    var navs = g('.i');
    for(var s = 0; s<navs.length;s++){
        navs[s].className = navs[s].className.replace(/\s*i_current\s*/,' ');
        navs[s].className = navs[s].className.replace(/\s*i_back\s*/,' ');
    }
    g( '#nav_'+n).className +=' i_current ';
}