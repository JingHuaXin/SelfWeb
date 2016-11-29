/**
 * Created by Administrator on 2016/11/24 0024.
 */

//document.write("<script language='javascript' charset='gb2312' src='general_fun.js'></script>");

//6.计算左右分区的范围 { left:{ x:[], y:[]}, right:{ x:[], y:[]}}
function range(){
    var range = { left:{ x:[], y:[]}, right:{ x:[], y:[]}}

    var wrap = {
        w:g('#wrap').clientWidth,
        h:g('#wrap').clientHeight
    }

    var photo = {
        w:g('.photo')[0].clientWidth,
        h:g('.photo')[0].clientHeight
    }

    range.wrap = wrap;
    range.photo = photo;

    /*极值法，计算左右分区的范围*/
    //range.left.x = [ 0-photo.w, wrap.w/2-photo.w/2];
    //range.left.y = [ 0-photo.h, wrap.h];
    //range.right.x = [ wrap.w/2+photo.w/2, wrap.w+photo.w];
    //range.right.y = range.left.y;

    /*自定义范围，图片在指定区域内*/
    range.left.x = [1, wrap.w/2-photo.w/2-1 ]
    range.left.y = [1, wrap.h-1]

    range.right.x = [ wrap.w/2+photo.w/2+1, wrap.w-1];
    range.right.y = range.left.y;

    return range;
}