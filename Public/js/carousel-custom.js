'use strict';

(function(module,callback){
  callback(module);
}(window,function(global){
  
  
var carousel = function(id){
  this.id = id;
  this.speed = '1500';
  this.offset = this.select('.carousel-custom-item').width() + 4;
  console.log(this.offset);
  setInterval(fncall(this.run,this,null),3000);
};

carousel.prototype.select = function (selector) {
  return $('#' + this.id + ' ' + selector);
};

carousel.prototype.moveLeft = function () {
  this.select('.carousel-custom-wrap').eq(0).animate({left:-this.offset+'px'}, this.speed);
  return this;
};

carousel.prototype.reset = function() {
  this.select('.carousel-custom-wrap').eq(0).css({'left':'0px'});
  this.listItem();
  return this;
};

carousel.prototype.listItem = function() {
  var item = this.select('.carousel-custom-item').eq(0);
  console.log(item);
  this.select('.carousel-custom-wrap').
          eq(0).
          append(item);
};


/*
 *  test
 */
carousel.prototype.run = function () {
  this.moveLeft();
  setTimeout(fncall(this.reset,this,null),2500);
};




var fncall = function(fn,obj,value) {
  return function() {
    fn.apply(obj,value);
  };
};

global.carousel = carousel;
//  global.Carousel = Carousel;
}));