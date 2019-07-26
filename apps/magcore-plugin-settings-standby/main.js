module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function o(){this.events={}}o.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var n=this;this.events[t]=this.events[t]||[],this.events[t].push(function o(){n.removeListener(t,o),e.apply(n,arguments)})},addListeners:function(t){var e;for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},emit:function(t){var e,n=this.events[t];if(n)for(e=0;e<n.length;e++)n[e].apply(this,Array.prototype.slice.call(arguments,1))}},o.prototype.constructor=o,t.exports=o},function(t,e,n){"use strict";var o,a=n(2),r=n(4),i=n(0),s={triggers:[],standbyOn:function(){this.triggers.forEach(function(t){"function"==typeof t.standbyOn&&t.standbyOn()})},standbyOff:function(){this.triggers.forEach(function(t){"function"==typeof t.standbyOff&&t.standbyOff()})}};function d(t){var e=!gSTB.GetStandByStatus(),n=gSTB.StandByMode;t&&t.action&&("on"===t.action&&!e||"off"===t.action&&e)||(window.MODE_STALKER&&(n=gSTB.StandByMode=1),3===n?(s.standbyOn(),setTimeout(function(){gSTB.SetLedIndicatorMode(2),gSTB.StandBy(e),gSTB.SetLedIndicatorMode(1),s.standbyOff()},1e3)):1===n&&(e?(s.standbyOn(),gSTB.SetLedIndicatorMode(2),gSTB.StandBy(e),gSTB.Stop()):(gSTB.StandBy(e),gSTB.SetLedIndicatorMode(1),s.standbyOff())))}function u(){var t=this,e={};i.call(this),e.standbyOn=function(){if(t.events["standbyOn"])try{t.emit("standbyOn")}catch(t){}},e.standbyOff=function(){if(t.events["standbyOff"])try{t.emit("standbyOff")}catch(t){}},s.triggers.push(e),this.destroy=function(){s.triggers.splice(s.triggers.indexOf(e),1),this.events={}}}u.prototype=Object.create(i.prototype),u.prototype.constructor=u,t.exports={onInit:function(t,e){r.load({name:window.core.environment.language,path:t.path+"lang"},function(){var t=Number(JSON.parse(gSTB.GetEnv(JSON.stringify({varList:["standByMode"]}))).result.standByMode);o=r.gettext,window.MODE_PORTAL&&""===t&&gSTB.SetEnv(JSON.stringify({standByMode:gSTB.StandByMode})),gSTB.SupportedStandByModes&&-1!==gSTB.SupportedStandByModes.indexOf(t)&&(gSTB.StandByMode=t),window.core.addListener("keydown:"+a.power,function(t){t.altKey&&d()}),window.system.addListener("standby",function(t){d(t)}),window.MODE_PORTAL||window.MODE_STALKER||window.stbEvent.addListener("message",function(t){"portal.standbyMode"===t.message&&d(t)}),e()})},onAppInit:function(t,e){e(null,new u)},onSettingsInit:function(t,e){e(null,function(t){return window.MODE_PORTAL&&gSTB.SupportedStandByModes&&gSTB.SupportedStandByModes.length>1?{content:[{id:"standby",parent:"system",type:"option",name:o("Stand by mode"),description:[{label:o("Mode")+":",value:["",o("Active"),"",o("Deep")][gSTB.StandByMode]||""},{label:"",value:o("Selecting standby mode:\nDeep - all applications complete their work\nActive - most of the systems work, the screen dims and the player stops\nThese modes are activated by pressing the Power button on the remote control.")}],icon:"theme-icon-standby",environment:{standByMode:gSTB.StandByMode},render:t.api.renders.popupSelect,getter:t.api.getters.environment,prepareForRender:function(t,e){e([{value:1,name:o("Active"),selected:1===gSTB.StandByMode},{value:3,name:o("Deep"),selected:3===gSTB.StandByMode}])},prepareForSave:function(t,e){gSTB.StandByMode=t,gSTB.SetEnv(JSON.stringify({standByMode:gSTB.StandByMode})),this.environment["standByMode"]=t,e()},saver:t.api.savers.environment}]}:{content:[]}}(t))}}},function(t,e,n){"use strict";var o=n(3);o.back=o.backspace,o.channelNext=o.tab,o.channelPrev=o.tab+"s",o.ok=o.enter,o.exit=o.escape,o.volumeUp=107,o.volumeDown=109,o.f1="112c",o.f2="113c",o.f3="114c",o.f4="115c",o.refresh="116c",o.frame="117c",o.phone="119c",o.set="120c",o.tv="121c",o.menu="122c",o.app="123c",o.rewind="66a",o.forward="70a",o.audio="71a",o.standby="74a",o.keyboard="76a",o.usbMounted="80a",o.usbUnmounted="81a",o.playPause="82a",o.play=-1,o.pause=-1,o.stop="83a",o.power="85a",o.record="87a",o.info="89a",o.mute="192a",o.digit0=48,o.digit1=49,o.digit2=50,o.digit3=51,o.digit4=52,o.digit5=53,o.digit6=54,o.digit7=55,o.digit8=56,o.digit9=57,t.exports=o},function(t,e,n){"use strict";t.exports={backspace:8,tab:9,enter:13,escape:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,del:46}},function(t,e,n){"use strict";var o=n(0),a=n(5),r=new o;function i(t){var e=new a(t);r._=r.gettext=e.gettext,r.pgettext=e.pgettext,r.ngettext=e.ngettext}r.defaultLanguage="en",r.load=function(t,e){var n;e=e||null,t.ext=t.ext||"json",t.path=t.path||"lang",t.name===r.defaultLanguage?(i(),null!==e&&e(null)):((n=new XMLHttpRequest).onload=function(){var t,o;try{o=JSON.parse(n.responseText)}catch(e){t=e}t?n.onerror(t):(i(o),null!==e&&e(null),r.events["load"]&&r.emit("load"))},n.ontimeout=n.onerror=function(t){i(),null!==e&&e(null),r.events["error"]&&r.emit("error",t)},n.open("GET",t.path+"/"+t.name+"."+t.ext,!0),n.send(null))},t.exports=r},function(module,exports,__webpack_require__){"use strict";function Gettext(config){var data,meta;config=config||{},data=config.data||{},data[""]=data[""]||{},meta=config.meta,this.gettext=function(t){return data[""][t]||t},this.pgettext=function(t,e){return data[t]&&data[t][e]||e},this.ngettext=function(msgId,plural,value){var n,evalResult;return data&&meta&&data[""][msgId]?(evalResult=eval("n = "+value+"; "+meta.plural),"boolean"==typeof evalResult&&(evalResult=+evalResult),data[""][msgId][evalResult]):1===value?msgId:plural}}Gettext.prototype.constructor=Gettext,module.exports=Gettext}]);
//# sourceMappingURL=main.js.map