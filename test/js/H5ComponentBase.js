/**
 * Created by Administrator on 2016/9/14.
 */
//基本图文组件

var H5ComponentBase=function(name,cfg){
    var cfg=cfg||{};  // 初始化，如果没有传入参数，就默认一个对象
    var id=("h5_c_"+Math.random()).replace(".","_");// replace将点儿替换成 “_”
    var cls='h5_component_'+cfg.type ;  //吧当前组件类型添加到样式中进行标记
    var component=$('<div class="h5_component '+cls+'  h5_component_name_+'+name+'" id=" '+id+'">');

    //如果有参数就传进去
    cfg.text && component.text(cfg.text); //文本
    cfg.width && component.width(cfg.width/2);  //宽度
    cfg.height && component.height(cfg.height/2); //高度
    cfg.css && component.css(cfg.css);  //css
    cfg.bg && component.css("backgroundImage","url("+cfg.bg+")");
    if(cfg.center===true){
        component.css({
            marginLeft:(cfg.width/4*-1)+'px',
            left:"50%"
        })
    }


    //
    component.on('onLoad',function(){ //component是当前组件的一个对象
        component.addClass(cls+"_Load").removeClass(cls+'_Leave');  //测试  $(".h5_component").trigger('onLoad')
        cfg.animateIn && component.animate(cfg.animateIn);
        return false;
    });
    component.on('onLeave',function(){
        component.addClass(cls+"_Leave").removeClass(cls+'_Load');  //测试  $(".h5_component").trigger('onLeave')
        cfg.animateOut && component.animate(cfg.animateOut);
        return false;
    });


    return component;
};