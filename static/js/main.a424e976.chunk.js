(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(6),o=a.n(i),s=(a(84),a(34)),c=a(35),l=a(37),d=a(36),m=a(38),u=a(73),g=a.n(u),h=a(13),v=a.n(h),p=a(78),f=a(77),w=a.n(f),E=(a(150),a(152),"/wuowuo-dinner-time/images/"),b=50;function y(e){return{width:v()(e).width(),height:v()(e).height()}}var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this))).onUpload=function(e){var t=document.querySelector("input[type=file]").files[0],n=new FileReader;a.setState({sliderValue:b}),t&&(n.readAsDataURL(t),n.onloadend=function(){var e=new Image;e.src=n.result,e.onload=function(a){var n=document.createElement("canvas"),r=e.width,i=e.height;r>i?r>262144&&(i*=262144/r,r=262144):i>262144&&(r*=262144/i,i=262144),function(e,t){var a=new FileReader;a.onload=function(e){var a=new DataView(e.target.result);if(65496!==a.getUint16(0,!1))return t(-2);for(var n=a.byteLength,r=2;r<n;){var i=a.getUint16(r,!1);if(r+=2,65505===i){if(1165519206!==a.getUint32(r+=2,!1))return t(-1);var o=18761===a.getUint16(r+=6,!1);r+=a.getUint32(r+4,o);var s=a.getUint16(r,o);r+=2;for(var c=0;c<s;c++)if(274===a.getUint16(r+12*c,o))return t(a.getUint16(r+12*c+8,o))}else{if(65280!==(65280&i))break;r+=a.getUint16(r,!1)}}return t(-1)},a.readAsArrayBuffer(e)}(t,function(t){var a=r,o=i,s=0;6===t?(console.log("rotate 90degree"),s=90):3===t?(console.log("rotate 180degree"),s=180):8===t&&(console.log("rotate 180degree"),s=270);var c=function(e,t,a){var n=a*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return i<0&&(i=-i),r<0&&(r=-r),[t*i+e*r,t*r+e*i]}(a,o,s);n.width=c[0],n.height=c[1];var l=n.getContext("2d");l.clearRect(0,0,n.width,n.height),l.save(),l.translate(n.width/2,n.height/2),l.rotate(s*Math.PI/180),l.drawImage(e,-a/2,-o/2,a,o),l.restore();var d=n.toDataURL("image/jpeg");document.getElementById("user-img").setAttribute("src",d)})}})},a.onImgLoad=function(e){var t=y(".cover-img"),n=t.width,r=t.height,i=1*n/r,o=y(".user-img"),s=o.width,c=o.height,l=1*s/c;i>l?(s=n,c=1*n/l):s=l*(c=5*r/7);var d=(y(".drag-area").width-s)/2,m=(y(".drag-area").height-r)/2+2*r/7;v()(".user-img").css("maxWidth",s+"px"),v()(".user-img").css("maxHeight",c+"px"),a.setState({draggablePostion:{x:d,y:m},userImgSize:{w:s,h:c}})},a.onResize=function(e){var t=a.state.userImgSize;v()(".user-img").css("maxWidth",t.w+t.w*(e-50)/100+"px"),v()(".user-img").css("maxHeight",t.h+t.h*(e-50)/100+"px"),a.setState({sliderValue:e})},a.onStart=function(){var e=a.state.activeDrags;a.setState({activeDrags:e+1,draggablePostion:null})},a.onStop=function(){var e=a.state.activeDrags;a.setState({activeDrags:e-1})},a.download=function(){var e=v()(".cover-img"),t=v()(".user-img"),a=new Image;a.src=e.attr("src");var n=new Image;n.src=t.attr("src");var r=document.getElementById("result");r.width=3*e.width(),r.height=3*e.height();var i=r.getContext("2d");i.rect(0,0,3*e.width(),3*e.height()),i.fillStyle="#CCCCCC",i.fill(),i.drawImage(n,3*t.offset().left-3*e.offset().left,3*t.offset().top-3*e.offset().top,3*t.width(),3*t.height()),i.drawImage(a,0,0,3*e.width(),3*e.height());var o=r.toDataURL("image/png"),s=document.createElement("a");s.href=o,s.setAttribute("download","wuo.png"),console.log("download:",o),document.body.appendChild(s),s.click()},a.onTouchMove=function(e){e.preventDefault()},a.state={activeDrags:0,sliderValue:b,draggablePostion:{x:0,y:100},userImgSize:{w:0,h:0}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){w.a.setAppElement("body"),document.getElementById("drag-area").addEventListener("touchmove",this.onTouchMove,!1)}},{key:"componentWillUnmount",value:function(){document.getElementById("drag-area").removeEventListener("touchmove",this.onTouchMove,!1)}},{key:"render",value:function(){var e={onStart:this.onStart,onStop:this.onStop},t=this.state,a=t.draggablePostion,n=t.sliderValue;return r.a.createElement("div",{className:"cover-editor"},r.a.createElement("div",{className:"upload"},r.a.createElement("label",null,r.a.createElement("div",{className:"upload-button"},"\u4e0a\u50b3\u7167\u7247"),r.a.createElement("input",{type:"file",id:"getval",accept:"image/*;capture=camera",onChange:this.onUpload}))),r.a.createElement("div",{className:"cover-box"},r.a.createElement("img",{className:"cover-img",draggable:"true",src:"".concat(E,"object/1.png"),alt:"img"}),r.a.createElement("div",{className:"drag-area",id:"drag-area"},r.a.createElement(g.a,Object.assign({bounds:"parent",handle:".user-img",position:a},e),r.a.createElement("div",{className:"user-img-wrapper"},r.a.createElement("img",{id:"user-img",className:"user-img",draggable:"false",src:"".concat(E,"wuo_sample.png"),alt:"img",onLoad:this.onImgLoad}))))),r.a.createElement("div",{className:"slider"},r.a.createElement(p.a,{min:0,max:100,defaultValue:b,value:n,onChange:this.onResize}),r.a.createElement("div",{className:"slider-minus"},"-"),r.a.createElement("div",{className:"slider-plus"},"+")),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"visit"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://wuo-wuo.com/nest-holding-newspaper/each-period-of-nest-reported/800-wo-bao-bao-vol-14-quot-cat-is-hungry-quot-cat-diet-special-issue.html",className:"visit-button"}," ")),r.a.createElement("div",{className:"download"},r.a.createElement("div",{className:"download-button",onClick:this.download}))))}}]),t}(n.Component),I=(a(154),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("canvas",{id:"result",className:"hide"}),r.a.createElement("div",{hidden:!0,className:"app-logo"}),r.a.createElement("div",{className:"app-title"},r.a.createElement("img",{src:"images/complete-title.png",alt:"",className:"app-main-title"})),r.a.createElement(N,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a(156)},84:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.a424e976.chunk.js.map