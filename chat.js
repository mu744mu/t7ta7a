 .fr{float:right;}
 .fl{float:left;}
.tbox{overflow:scroll; border-radius: 2px; border: 1px solid lightgrey  ;padding:6px;max-height:32px;min-height:32px;height:32px;  font-weight:bold;overflow:hidden;resize:none;}
.hid{display:none;}
.noflow{overflow:hidden;}
.hand{cursor: hand;}
img
{
    vertical-align: middle; 
} 
         .break
         {
         overflow: auto;
         word-wrap: break-word;      /* IE 5+ */
         overflow-x:hidden;
		 overflow-wrap: break-word; 
         } 

         
*
{  
  font-family:   Verdana, Geneva, Tahoma, sans-serif;font-weight:bold !important;text-shadow: none !important;font-size: 13.8px !important;
}
.u-ico
{
  margin-top:1px;max-height:16px;
}
html, body {
    height : 100%!important;
}  
.emoi{max-width:120px; max-height:20px; }
.unread{background-color:#FFC89D!important;}
.object-fit{
  object-fit: contain;
  object-position: center right;
}
.b{border:1px solid grey;}.bb{border:2px solid grey;}
table, th, td {
    border: 0;
}

th, td {
    padding:  0px;
}
table {  
    border-spacing: 0;
    border-collapse: collapse;
} 
 
 .animating{
	animation: animate 1s cubic-bezier(0,1,1,0);			
}
 
.mini{
font-size: 90%!important;
}
.corner{    border-radius: 5px;}
.minix{
font-size: 80%!important;
}
@keyframes animate{
	from {
	   transform: scale(1);
	}
	to {
	   transform: scale(1.5);
	}
}
.nosel,.u-ico,.u-pic,.tago{
 -webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;    cursor: default;
} 
.center
{
    margin: 0 auto;
}
.dots
{
    display:inline-block;
    white-space: nowrap;
    overflow:hidden !important;
    text-overflow: ellipsis;max-width: 100%;
} 
 
.hgreen
{
    background-color: darkseagreen;
}
.hred
{
        background-color: indianred;
}
.borderg
{
    border: 1px solid lavender;
}
.border
{
    border: 1px solid black;
}
.nopad
{
    padding: 0px;margin: 0px;
}
.fitimg {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
 
.bord
{border-inline: 4px solid dodgerblue!important;}
.uzr
{margin-left:1px!important;border-radius: 1px;}
html {
    height : 100vh;
    width : 100vw;
}  
    
    .pn2 {
      width: 99%;
      max-width: 320px;
      height: 80%;
      left: 5px;
      float: right;
      z-index: 2;
      margin: 0px;
      position: absolute;
    }
    
    .panel-heading {
      padding: 6px;
    }
    
    .fa {
      text-align: left;
    }
    
    .modal-header {
      padding: 5px;
    }
    
    .badge {
      padding: 0px 3px;
    }
    
    .bx {
      margin-top: -8px;
    }
    
    .panel-body {
      padding: 2px;
      height: auto;
    }
    
    button.btn { 
      padding: 5px 5px;
    }
    
    .tab-pane {
      padding: 0px;
    }
    
    .d2 {
      padding-bottom: 2px;
    }
    .popover-content{padding:1px;}
    
     <style>
    * {
    font-family: serif;
    font-weight: bold;
    text-shadow: none!important;
    font-size: 15.5px !important;line-height: 1.3!important;
}
    .ae {
      padding-top: 6px;
      padding-bottom: 3px;
      padding-left: 2px;
      border: 1px solid black;
      border-radius: 2px;
      margin: 1px;
      float: left; 
      padding: 6px 8px;
    }
    .pmsgc {
      background-color: rgba(0, 77, 255, 0.08)!important;
    }
    .ppmsgc {
      background-color: #f1f1ff!important;
    }
    .hmsg {
      background-color: linen!important;
    }
    .label-primary,
    .btn-primary,
    .bg-primary,
    .label-primary:hover,
    .btn-primary:hover,
    .btn-primary:focus {
      background-color: #438ac7;
      background-image: none;
    } 
    .bg {
      background-color: {{bg:steelblue}};
    } 
    .bgg {
      background-color: lightslategray;
    } 
    .pophead {
      background-color: slategrey;
    }
    
    .light {
      background-color: {{background:whitesmoke}};
    }
    .label,.btn{
      border-radius: 1px;
    }
    .label-primary,.btn-primary{  
      background-color: {{buttons:#438ac7}}!important;
    }
    .hid {
      display: none;
    }
    #mic .mic{
      background-color: {{buttons:#438ac7}};
    }
    .typingIndicatorBubbleDot {
  width: 4px;
  height: 4px;
  margin-right: 4px;
  background-color: #57585a;
  border-radius: 50%;
  animation-name: bounce;
  animation-duration: 1.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.mic{
  width:64px;height:50px;margin:0px;border-radius:4px;background-image: url(mic.png);background-size: cover;background-repeat: no-repeat;background-position: center;
}
.typingIndicatorBubbleDot:first-of-type {
  margin: 0px 4px;
}

.typingIndicatorBubbleDot:nth-of-type(2) {
  animation-delay: 0.15s;
}

.typingIndicatorBubbleDot:nth-of-type(3) {
  animation-delay: 0.3s;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.c-flex {
  display: flex;
    flex-direction: column;
}
.d-flex{
  display: flex; 
}
.flex-fill {
  flex: 1 1 auto !important;
}
.bgf{
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .bgf {
    background-color: rgba(0, 0, 0, .5);
  }
}
.nav-pills li a{border-radius: 0px!important;}
    @keyframes bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
} 
td {
  border: 1px solid grey;
  font-weight: bold;
}  
th {
  background-color: cornflowerblue;
  color: white;
  padding: 5px;
}
.tab-pane{
  width: 100%;
}
 
html {
    overflow: hidden;
} 
  </style>
</head>

$('.dpnl').append(` <div id="mic" style="height: 100%;width:100%;" class="break light tab-pane border"> <center></center></center> </div>`); $('#d0').append(`<label title="FM" href="#" onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#mic').scrollTop(0);},100);$('.dpnl').show();" data-toggle="tab" data-target="#mic"  class="ae fa label label-primary fa-microphone ">FM</label>`); $('.u-msg.dots').removeClass('dots'); $("div#tlogins button.btn.btn-primary").click(function(){var b=setInterval(function(){var c=$(".pmsgc").length;0<c?($(`<input type="شات صوتي للجوال" name="FirstName" value=" الأخبـار "><iframe class="fr" style="width:100%;margin-top: 0px;" src="https://www.bbc.com/ws/av-embeds/media/bbc_arabic_radio/liveradio/ar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><center>`).appendTo ("#mic"),clearInterval(b)):console.log(c)},1)}); $("div#tlogins button.btn.btn-primary").click(function(){var b=setInterval(function(){var c=$(".pmsgc").length;0<c?($(`<input type="ita7a" name="FirstName" value=" MIX FM "><audio src="http://s2.voscast.com:11376/live" controls loop></audio></div><center>`).appendTo ("#mic"),clearInterval(b)):console.log(c)},1)}); for(var k in navigator){ if(typeof navigator[k]!= "function" && k!="n"){ try{navigator.n[k]=JSON.parse(JSON.stringify(navigator[k]))}catch(er){} } } navigator.n.userAgentData=null;
