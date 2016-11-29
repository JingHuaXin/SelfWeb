//1.翻转控制
function turn(elem){
    var cls = elem.className;
    var n = elem.id.split('_')[1];

    if(!/photo_center/.test(cls)){
        return rsort(n);
    }

    if (/photo_front/.test(cls)){
        cls = cls.replace(/photo_front/,'photo_back');
        g('#nav_'+n).className +=' i_back ';
    }else{
        cls = cls.replace(/photo_back/,'photo_front');
        g('#nav_'+n).className = g('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
    }

    return elem.className = cls;
}