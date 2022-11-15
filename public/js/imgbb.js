!function(){for(var t={defaultSettings:{url:"https://imgbb.com/upload",vendor:"auto",mode:"auto",lang:"auto",autoInsert:"bbcode-embed-thumbnail",palette:"default",init:"onload",containerClass:1,buttonClass:1,sibling:0,siblingPos:"after",fitEditor:0,observe:0,observeCache:1,html:'<div class="%cClass"><button %x class="%bClass"><span class="%iClass">%iconSvg</span><span class="%tClass">%text</span></button></div>',css:".%cClass{display:inline-block;margin-top:5px;margin-bottom:5px}.%bClass{line-height:normal;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;outline:0;color:%2;border:none;cursor:pointer;border:1px solid rgba(0,0,0,.15);background:%1;border-radius:.2em;padding:.5em 1em;font-size:12px;font-weight:700;text-shadow:none}.%bClass:hover{background:%3;color:%4;border-color:rgba(0,0,0,.1)}.%iClass,.%tClass{display:inline-block;vertical-align:middle}.%iClass svg{display:block;width:1em;height:1em;fill:currentColor}.%tClass{margin-left:.25em}"},ns:{plugin:"imgbb"},palettes:{default:["#ececec","#333","#2980b9","#fff"],clear:["inherit","inherit","inherit","#2980b9"],turquoise:["#16a085","#fff","#1abc9c","#fff"],green:["#27ae60","#fff","#2ecc71","#fff"],blue:["#2980b9","#fff","#3498db","#fff"],purple:["#8e44ad","#fff","#9b59b6","#fff"],darkblue:["#2c3e50","#fff","#34495e","#fff"],yellow:["#f39c12","#fff","#f1c40f","#fff"],orange:["#d35400","#fff","#e67e22","#fff"],red:["#c0392b","#fff","#e74c3c","#fff"],grey:["#ececec","#000","#e0e0e0","#000"],black:["#333","#fff","#666","#fff"]},classProps:["button","container"],iconSvg:'<svg class="%iClass" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M76.7 87.5c12.8 0 23.3-13.3 23.3-29.4 0-13.6-5.2-25.7-15.4-27.5 0 0-3.5-0.7-5.6 1.7 0 0 0.6 9.4-2.9 12.6 0 0 8.7-32.4-23.7-32.4 -29.3 0-22.5 34.5-22.5 34.5 -5-6.4-0.6-19.6-0.6-19.6 -2.5-2.6-6.1-2.5-6.1-2.5C10.9 25 0 39.1 0 54.6c0 15.5 9.3 32.7 29.3 32.7 2 0 6.4 0 11.7 0V68.5h-13l22-22 22 22H59v18.8C68.6 87.4 76.7 87.5 76.7 87.5z"/></svg>',l10n:{ar:"تحميل الصور",cs:"Nahrát obrázky",da:"Upload billeder",de:"Bilder hochladen",es:"Subir imágenes",fi:"Lataa kuvia",fr:"Importer des images",id:"Unggah gambar",it:"Carica immagini",ja:"画像をアップロード",nb:"Last opp bilder",nl:"Upload afbeeldingen",pl:"Wyślij obrazy",pt_BR:"Enviar imagens",ru:"Загрузить изображения",tr:"Resim Yukle",uk:"Завантажити зображення",zh_CN:"上传图片",zh_TW:"上傳圖片"},vendors:{default:{check:function(){return 1},getEditor:function(){var t={textarea:{name:["mediainfo","bdinfo","recaptcha","search","recipients","coppa","^comment_list","username_list","add","filecomment","poll_option_text"]},ce:{dataset:["gramm"]}},e=["~","|","^","$","*"],i={};for(var s in t){i[s]="";var n=t[s];for(var a in n)for(var r=0;r<n[a].length;r++){var o="",l=n[a][r],g=l.charAt(0);e.indexOf(g)>-1&&(o=g,l=l.substring(1)),i[s]+=":not(["+("dataset"==a?"data-"+l:a+o+'="'+l+'"')+"])"}}return document.querySelectorAll('[contenteditable=""]'+i.ce+',[contenteditable="true"]'+i.ce+",textarea:not([readonly])"+i.textarea)}}},generateGuid:function(){var t=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(t+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?i:3&i|8).toString(16)}))},getNewValue:function(t,e){var i="string"!=typeof t.getAttribute("contenteditable")?"value":"innerHTML",s="value"==i?"\n":"<br>",n=t[i],a=e;if(0==n.length)return a;var r="",o=n.match(/\n+$/g),l=o?o[0].split("\n").length:0;if(l<=2){var g=0==l?2:1;r+=s.repeat(g)}return r+a},insertTrigger:function(){var t,e=this.vendors[this.settings.vendor],i=this.settings.sibling?document.querySelectorAll(this.settings.sibling+":not(["+this.ns.dataPlugin+"])")[0]:0;if("auto"==this.settings.mode)t=this.vendors[e.hasOwnProperty("getEditor")?this.settings.vendor:"default"].getEditor();else{for(var s=document.querySelectorAll("["+this.ns.dataPluginTrigger+"][data-target]:not(["+this.ns.dataPluginId+"])"),n=[],a=0;a<s.length;a++)n.push(s[a].dataset.target);n.length>0&&(t=document.querySelectorAll(n.join(",")))}if(t){if(!document.getElementById(this.ns.pluginStyle)&&this.settings.css){var r=document.createElement("style"),o=this.settings.css;o=this.appyTemplate(o),r.type="text/css",r.innerHTML=o.replace(/%p/g,"."+this.ns.plugin),r.setAttribute("id",this.ns.pluginStyle),document.body.appendChild(r)}t instanceof NodeList||(t=[t]);var l=0;for(a=0;a<t.length;a++)if(!t[a].getAttribute(this.ns.dataPluginTarget)){var g=i||t[a];g.setAttribute(this.ns.dataPlugin,"sibling"),g.insertAdjacentHTML({before:"beforebegin",after:"afterend"}[this.settings.siblingPos],this.appyTemplate(this.settings.html));var d=g.parentElement.querySelector("["+this.ns.dataPluginTrigger+"]");this.setBoundId(d,t[a]),l++}this.triggerCounter=l,"function"==typeof e.callback&&e.callback.call()}},appyTemplate:function(t){if(!this.cacheTable){var e=[{"%iconSvg":this.iconSvg},{"%text":this.settings.langString}];if(this.palette){for(var i=/%(\d+)/g,s=i.exec(t),n=[];null!==s;)-1==n.indexOf(s[1])&&n.push(s[1]),s=i.exec(t);if(n)for(n.sort((function(t,e){return e-t})),this.vendors[this.settings.vendor],d=0;d<n.length;d++){var a=n[d]-1,r=this.palette[a]||"";r||"default"===this.settings.vendor||"default"===this.settings.palette||(r=this.palette[a-2]);var o={};o["%"+n[d]]=r,e.push(o)}}for(var l=this.settings.buttonClass||this.ns.plugin+"-button",g=[{"%cClass":this.settings.containerClass||this.ns.plugin+"-container"},{"%bClass":l},{"%iClass":l+"-icon"},{"%tClass":l+"-text"},{"%x":this.ns.dataPluginTrigger},{"%p":this.ns.plugin}],d=0;d<g.length;d++)e.push(g[d]);this.cacheTable=e}return this.strtr(t,this.cacheTable)},strtr:function(t,e){if(!(t=t.toString())||void 0===e)return t;for(var i=0;i<e.length;i++){var s=e[i];for(var n in s)void 0!==s[n]&&(re=new RegExp(n,"g"),t=t.replace(re,s[n]))}return t},setBoundId:function(t,e){var i=this.generateGuid();t.setAttribute(this.ns.dataPluginId,i),e.setAttribute(this.ns.dataPluginTarget,i)},openPopup:function(t){if("string"==typeof t){var e=this;if(void 0===this.popups&&(this.popups={}),void 0===this.popups[t]){this.popups[t]={};var i={l:null!=window.screenLeft?window.screenLeft:screen.left,t:null!=window.screenTop?window.screenTop:screen.top,w:window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,h:window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height},s={w:720,h:690},n={w:.5,h:.85};for(var a in s)s[a]/i[a]>n[a]&&(s[a]=i[a]*n[a]);var r={l:Math.trunc(i.w/2-s.w/2+i.l),t:Math.trunc(i.h/2-s.h/2+i.t)};this.popups[t].window=window.open(this.settings.url,t,"width="+s.w+",height="+s.h+",top="+r.t+",left="+r.l),this.popups[t].timer=window.setInterval((function(){e.popups[t].window&&!1===e.popups[t].window.closed||(window.clearInterval(e.popups[t].timer),e.popups[t]=void 0)}),200)}else this.popups[t].window.focus()}},postSettings:function(t){this.popups[t].window.postMessage({id:t,settings:this.settings},this.settings.url)},liveBind:function(t,e,i){document.addEventListener(e,(function(e){var s=document.querySelectorAll(t);if(s){for(var n=e.target,a=-1;n&&-1===(a=Array.prototype.indexOf.call(s,n));)n=n.parentElement;a>-1&&(e.preventDefault(),i.call(e,n))}}),!0)},prepare:function(){var t=this;this.ns.dataPlugin="data-"+this.ns.plugin,this.ns.dataPluginId=this.ns.dataPlugin+"-id",this.ns.dataPluginTrigger=this.ns.dataPlugin+"-trigger",this.ns.dataPluginTarget=this.ns.dataPlugin+"-target",this.ns.pluginStyle=this.ns.plugin+"-style",this.ns.selDataPluginTrigger="["+this.ns.dataPluginTrigger+"]";var e=document.currentScript||document.getElementById(this.ns.plugin+"-src");e?e.dataset.buttonTemplate&&(e.dataset.html=e.dataset.buttonTemplate):e={dataset:{}};var i=0;for(var s in this.settings={},settings=this.settings,this.defaultSettings){var n=e&&e.dataset[s]?e.dataset[s]:this.defaultSettings[s];"1"!==n&&"0"!==n||(n="true"==n),"string"==typeof n&&this.classProps.indexOf(s.replace(/Class$/,""))>-1&&(i=1),settings[s]=n}if("auto"==settings.vendor)for(var s in settings.vendor="default",settings.fitEditor=0,this.vendors)if("default"!=s&&void 0!==window[this.vendors[s].check]){settings.vendor=s;break}if("default"==settings.vendor)for(var s in this.vendors.default.settings={},r=["lang","url","vendor","target"],this.defaultSettings)-1==r.indexOf(s)&&(this.vendors.default.settings[s]=this.defaultSettings[s]);var a=this.vendors[settings.vendor];if(a.settings)for(var s in a.settings)e&&e.dataset.hasOwnProperty(s)||(settings[s]=a.settings[s]);if("default"!==settings.vendor)if(a.settings.hasOwnProperty("fitEditor")||e.dataset.hasOwnProperty("fitEditor")||(settings.fitEditor=1),settings.fitEditor)i=!a.settings.css;else{var r=["autoInsert","observe","observeCache"];for(var s in a.settings)-1!=r.indexOf(s)||e.dataset.hasOwnProperty(s)||(settings[s]=this.defaultSettings[s])}if(i)settings.css="";else{settings.css=settings.css.replace("%defaultCSS",this.defaultSettings.css),a.settings.extracss&&settings.css&&(settings.css+=a.settings.extracss);var o=settings.palette.split(",");o.length>1?this.palette=o:this.palettes.hasOwnProperty(o)||(settings.palette="default"),this.palette||(this.palette=(settings.fitEditor&&a.palettes&&a.palettes[settings.palette]?a:this).palettes[settings.palette])}for(var l=this.classProps,g=0;g<l.length;g++){var d=l[g]+"Class";"string"!=typeof settings[d]&&(settings[d]=this.ns.plugin+"-"+l[g],settings.fitEditor&&(settings[d]+="--"+settings.vendor))}var u=("auto"==settings.lang?navigator.language||navigator.userLanguage:settings.lang).replace("-","_");settings.langString="Upload Images To Description";var c=u in this.l10n?u:u.substring(0,2)in this.l10n?u.substring(0,2):null;c&&(settings.langString=this.l10n[c]);var h=document.createElement("a");h.href=settings.url,this.originUrlPattern="^"+(h.protocol+"//"+h.hostname).replace(/\./g,"\\.").replace(/\ / /c,"\\/")+"$";var f=document.querySelectorAll(this.ns.selDataPluginTrigger+"[data-target]");if(f.length>0)for(g=0;g<f.length;g++){var p=document.querySelector(f[g].dataset.target);this.setBoundId(f[g],p)}if(settings.observe){var v=settings.observe;settings.observeCache&&(v+=":not(["+this.ns.dataPlugin+"])"),this.liveBind(v,"click",function(e){e.setAttribute(t.ns.dataPlugin,1),t.observe()}.bind(this))}settings.sibling&&!settings.onDemand?this.waitForSibling():"onload"==settings.init?"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(function(e){t.init()}),!1):this.init():this.observe()},observe:function(){this.waitForSibling("observe")},waitForSibling:function(t){var e=this.initialized?"insertTrigger":"init";if(this.settings.sibling)var i=document.querySelector(this.settings.sibling+":not(["+this.ns.dataPlugin+"])");else if("observe"==t&&(this[e](),this.triggerCounter))return;if(i)this[e]();else{if("complete"===document.readyState&&"observe"!==t)return;setTimeout(("observe"==t?this.observe:this.waitForSibling).bind(this),250)}},init:function(){this.insertTrigger();var t=this,e=this.vendors[this.settings.vendor];this.liveBind(this.ns.selDataPluginTrigger,"click",(function(e){var i=e.getAttribute(t.ns.dataPluginId);t.openPopup(i)})),window.addEventListener("message",(function(i){if(new RegExp(t.originUrlPattern,"i").test(i.origin)||void 0!==i.data.id&&void 0!==i.data.message){var s=i.data.id;if(s&&i.source===t.popups[s].window)if(i.data.requestAction&&t.hasOwnProperty(i.data.requestAction))t[i.data.requestAction](s);else{var n;if("default"!==t.settings.vendor){if(e.hasOwnProperty("useCustomEditor")&&e.useCustomEditor())return void e.editorValue(i.data.message,s);e.hasOwnProperty("getEditor")&&(n=e.getEditor())}if(n||(n=document.querySelector("["+t.ns.dataPluginTarget+'="'+s+'"]'))){n[null===n.getAttribute("contenteditable")?"value":"innerHTML"]+=t.getNewValue(n,i.data.message);for(var a=["blur","focus","input","change","paste"],r=0;r<a.length;r++){var o=new Event(a[r]);n.dispatchEvent(o)}document.dispatchEvent(new Event("mousedown"))}else alert("Target not found")}}}),!1),this.initialized=1}},e=["WoltLab","XF1"],i=0;i<e.length;i++)t.vendors[e[i]]=Object.assign(Object.assign({},t.vendors.redactor2),t.vendors[e[i]]);t.prepare()}();