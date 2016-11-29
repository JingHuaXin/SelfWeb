/**
 * Created by Administrator on 2016/11/24 0024.
 */
//3.通用函数
function g(selector){
    var method = selector.substr(0,1) =='.' ? 'getElementsByClassName': 'getElementById';
    return document[method](selector.substr(1));
}

//随机生成一个值 支持取值范围。 random([min,max])
function random( range ){
    var max = Math.max( range[0], range[1]);
    var min = Math.min( range[0], range[1]);

    var diff = max-min;

    var number = Math.ceil((Math.random()*diff + min));
    //console.log(number);

    return number;
}