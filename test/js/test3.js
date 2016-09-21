/**
 * Created by Administrator on 2016/9/20.
 */
var H5=function(){
    this.id=("h5_c_"+Math.random()).replace(".","_");// replace将点儿替换成 “_”
    this.els=$('<div class="h5" id=" '+this.id+'">').hide();
    $("body").append(this.els);
    this.page=[];


    /* 新增一个页
    *
    *  @param {string} name组件的名称，会加入到className
    *
    *  @param {string} test 页内的默认文本
    *
    *  @return {H5} H5对象，可以重复使用H5对象支持的方法
    *
    * */
    this.addPage=function(name,text){
        var page=$("<div class='h5_page section'>");
        if(name!=undefined){
            page.addClass('h5_page_'+name);
        }
        if(text!=undefined){
            page.text(text);
        }
        this.els.append(page);
        this.page.push(page);
        return this;
    };
    /*新增组件*/
    this.addComponent=function(name,cfg){
        var cfg=cfg||{};   // 初始化，如果没有传入参数，就默认一个对象
        cfg= $.extend({
            type:"base"
        },cfg);  //如果cfg什么都么没有传的话；或者说你传的参数里面没有type这个参数的话，它会默认的加一个“base”的type

        var component;  //定义一个变量,存储 组件元素
        var page=this.page.slice(-1)[0]; //打断点，在控制台输入“page”，输出一个不完整的对象“[init[1]]”;  加“[0]”后；打断点，在控制台输入“page”，输出一个完整的对象“<div class="h5_page section h5_page_face">首页</div>”
        switch (cfg.type){
            case  'base':
                component=new  H5ComponentBase(name,cfg);
                break;

            default:


        }

        page.append(component);
        return this;

    };
    this.loader=function(){
        this.els.fullpage();
        this.els.show();
    };

    return this;  //返回出去
};