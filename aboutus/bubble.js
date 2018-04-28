

//var bubble_color = ['f44', 'f84', 'ff8', '8f8', '8ff', '88f', 'f88' ];
var img = ['001.png', '002.png', '003.png', '004.png', '005.png', '006.png', '007.png'] ;
var bubble_num = 14;
var bubble_img = "bubble3.svg";
var container=[bubble_num], bubble_ly, shadow_ly;
var picture_ly;
var Radius, Position, Destination;
var move = [bubble_num];
var count = 0;
var Long_Unit = 'vw';
var Short_Unit = 'vh';
var Screen_Longer_length = screen.width;
var Screen_Shorter_length = screen.height;
if (screen.width < screen.height) {
  Long_Unit = 'vh';
  Short_Unit = 'vw';
  Screen_Longer_length = screen.height;
  Screen_Shorter_length = screen.width;
}


function Bubble() {
  //--------basic variables----------
  Radius = 30;
  Position = { x: Math.random() * 80 + 1, y: Math.floor(Math.random() * 8)*20 + 100 };
  Destination = { x: Position.x, y: -10-2*Radius } ;
  this.Id = count;         // the owner of the bubble, from 0~6, initial = 0
  //count ++;
  //-----------create object for the bubble-------------
  container[count] = document.createElement( 'div' );        //where all the stuff goes       

  bubble_ly = document.createElement( 'div' );     //to create an element for bubble in body   //important!!
  picture_ly = document.createElement( 'div' );     //same as the one above, except this one is for picture
  shadow_ly = document.createElement( 'div' );     //same as the one above, except this one create the shadow_ly
  
  //----------include all the stuff into container, and include container into body
  document.body.appendChild( container[count] );
  
  container[count].appendChild( shadow_ly );          // place the element into the document // important!!!
  container[count].appendChild( picture_ly );          // place the element into the document // important!!!
  container[count].appendChild( bubble_ly );          // place the element into the document // important!!!
  
  //------set container-----
  container[count].style.position= 'absolute';
  //container.style.top= '60vh';
  //container.style.right= '80vw';
  //container.style.width = Radius+2+'vw';
  //container.style.height = Radius+2+'vw';

  //----------set bubble-----
  bubble_ly.style.position= 'absolute';
  bubble_ly.style.top= '0vw';
  bubble_ly.style.right= '0vw';

  //bubble_ly.style.width = Radius+'vw';
  //bubble_ly.style.height = Radius+'vw';
  bubble_ly.style.borderRadius = '50%';

  bubble_ly.style.background = 'url(' + bubble_img + ')';
  //me.style.background.size = '100%';
  
  //--------set picture-----
  picture_ly.style.position = 'absolute';
  picture_ly.style.top= '0.2vw';
  picture_ly.style.right= '0.2vw';
  picture_ly.style.position = 'center';

  //picture_ly.style.width = Radius-0.05+'vw';
  //picture_ly.style.height = Radius-0.05+'vw';
  picture_ly.style.borderRadius = '50%';

  //picture_ly.style.background = '#ffffff';
  //me.style.display= "block";

  //--------set shadow-----
  shadow_ly.style.position= 'absolute';
  shadow_ly.style.top= '0.1vw';
  shadow_ly.style.right= '0.1vw';

  //shadow_ly.style.width = Radius+0.5+'vw';
  //shadow_ly.style.height = Radius+0.5+'vw';
  shadow_ly.style.borderRadius = '50%';

  //shadow_ly.style.background = '#222222';
  //shadow_ly.style.opacity = 0.5;


  this.init();

};

Object.assign( Bubble.prototype, {
    
  constructor: Bubble,

  init: function() {
    this.setRadius();
    this.setPosition();
    this.setShadow();
    this.setID();
    this.setBG( img[count % 7] );
  },


  setPosition: function( x = Position.x, y = Position.y ) {       //set the starting point
    Position.x = x;
    Position.y = y;
    container[this.Id].style.top= Position.y + 'vh';
    container[this.Id].style.right= Position.x + 'vw';
  },
  
  setRadius: function( R = Radius ) {            //set the radius of the bubble
    Radius = R;

    container[this.Id].style.width = Radius+2+Short_Unit;
    container[this.Id].style.height = Radius+2+Short_Unit;
    bubble_ly.style.width = Radius+Short_Unit;
    bubble_ly.style.height = Radius+Short_Unit;
    picture_ly.style.width = Radius-0.5+Short_Unit;
    picture_ly.style.height = Radius-0.5+Short_Unit;
    shadow_ly.style.width = Radius+0.3+Short_Unit;
    shadow_ly.style.height = Radius+0.3+Short_Unit;
  },

  setShadow: function( c = '#333333' ) {        // set up the shadow, initial color = #333333
    shadow_ly.style.background = c;
    shadow_ly.style.opacity = 0.5;
    shadow_ly.classList.add("shadow") ;
  },

  setID: function( id = 0 ) {         //set ID, initial = 0
    this.Id = id;
    //container.name = id;
  },

  setBG: function( pic = '' ) {        // setup background, initial = NULL (haven't test yet)
    picture_ly.style.background = 'url(' + pic + ')';
    picture_ly.style.backgroundPosition = 'center top';
    picture_ly.style.overflow = 'hidden';
    picture_ly.style.backgroundSize = 'cover';
    /*
    function add_pic() {
      var p = document.createElement("IMG") ;
      p.setAttribute("src","001.png") ;
      p.setAttribute("width","160") ;
      p.setAttribute("height","200") ;
      picture_ly.appendChild(p) ;
    }
    add_pic() ;
    */
    //picture_ly.classList.add("pic") ;
  },

  startMoving: function( speed = 0.1, y = Destination.y, x = Destination.x ) {    //the destination of the bubble
    var me = this;
    Destination.x = x;
    Destination.y = y;
    var K = Screen_Shorter_length/1600;
    var tmp_pos = Position.y;
    var delay = Math.floor( ( Math.random() * 2000) + 500 );    //random a delay time
    var tmp = me.Id;
    move[count] = setInterval(frame, 100);
    count ++;

    function frame() {
      //var K = Short_Unit/Long_Unit;
      if (tmp_pos <= y) {
        //clearInterval(move);
        Position.x = Math.random() * 65 + 6;
        me.setPosition( Position.x, 105 );
        tmp_pos = Position.y;
        setTimeout( function(){}, delay);
      }   
      else {
        tmp_pos -= K;
        container[me.Id].style.top= tmp_pos + 'vh';  
      }
    }
  },

  restart: function(delay = 0) {
    this.setPosition();
  }

});







/*------------works the same as the functions above, save as backup
var Bubble = function() {
    bubble_ly = document.createElement( 'div' );
    this.Radius = '10';
    var radius = 10;
    this.Position = {x:20, y:20} ;
    this.Destination = {x:20, y:20} ;
    this.Color = 0 ;        // initial color = black
    this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
    //this.style.left = this.position.x+'px';     //bug
    //this.style.top = this.position.y+'px';      //bug
    document.body.appendChild( bubble_ly );
  };
//bject.defineProperty( Bubble, 'id', 1 );
  Bubble.prototype.init = function() {
    //var me = this;
    var rad = this.Radius;
    //var me = this;
    this.style.width = rad;
    //this.style.width = this.Radius;
    this.style.height = this.Radius;
    this.style.background = "black";
  };
*/
//-------------setup function name by yourself
/*
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.BUBBLE = {})));
}(this, (function (exports) { 'use strict';
  function Bubble() {
    Object.defineProperty( this, 'id', 1 );
    this.Radius = 10;
    this.Position = {x:20, y:20} ;
    this.Destination = {x:20, y:20} ;
    this.Color = 0 ;        // initial color = black
    this.Id = -1;         // the owner of the bubble, from 0~6, initial = -1
    //this.style.left = this.position.x+'px';     //bug
    //this.style.top = this.position.y+'px';      //bug
  };
//Object.defineProperty( Bubble, 'id', 1 );
  Bubble.prototype.init = function() {
    this.style.width = this.Radius;
    this.style.height = this.Radius;
    this.style.background = "black";
  };
})));
*/
