/**
 * Created by Administrator on 2016/9/14.
 */
//散点图表组件

var H5ComponentPoint=function(name,cfg){
    var component=new H5ComponentBase(name,cfg);
    var base=cfg.data[0][1];  //以第一个数据的第二项为比例大小的100%
    $.each(cfg.data,function(idx,item){
       var point=$('<div class="point point_'+idx+'" >');

        point.text(item[0]+'_'+item[1]);  //data的第一项   第二项
        var per=(item[1]/base)*100+"%";  //0.4/base(0.4)=0.5=50%
        point.width(per).height(per);

        if(item[2]){  //判断data的第三项是否有颜色值
            point.css("backgroundColor",item[2]);
        }

        if(item[3] !==undefined &&item[4]!==undefined){ //位置定义;如果data的第四项和第五项定义;可以重新修正
            point.css({
                'left':item[3],
                'top':item[4]
            })
        }

        component.append(point);
    });


    return component;
};