var m={},R={get exports(){return m},set exports(r){m=r}},_,T;function S(){if(T)return _;T=1;var r=!1,i,p,c,f,s,e,t,o,u,d,A,v,w,M,F;function a(){if(!r){r=!0;var l=navigator.userAgent,n=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(l),E=/(Mac OS X)|(Windows)|(Linux)/.exec(l);if(v=/\b(iPhone|iP[ao]d)/.exec(l),w=/\b(iP[ao]d)/.exec(l),d=/Android/i.exec(l),M=/FBAN\/\w+;/i.exec(l),F=/Mobile/i.exec(l),A=!!/Win64/.exec(l),n){i=n[1]?parseFloat(n[1]):n[5]?parseFloat(n[5]):NaN,i&&document&&document.documentMode&&(i=document.documentMode);var W=/(?:Trident\/(\d+.\d+))/.exec(l);e=W?parseFloat(W[1])+4:i,p=n[2]?parseFloat(n[2]):NaN,c=n[3]?parseFloat(n[3]):NaN,f=n[4]?parseFloat(n[4]):NaN,f?(n=/(?:Chrome\/(\d+\.\d+))/.exec(l),s=n&&n[1]?parseFloat(n[1]):NaN):s=NaN}else i=p=c=s=f=NaN;if(E){if(E[1]){var P=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(l);t=P?parseFloat(P[1].replace("_",".")):!0}else t=!1;o=!!E[2],u=!!E[3]}else t=o=u=!1}}var h={ie:function(){return a()||i},ieCompatibilityMode:function(){return a()||e>i},ie64:function(){return h.ie()&&A},firefox:function(){return a()||p},opera:function(){return a()||c},webkit:function(){return a()||f},safari:function(){return h.webkit()},chrome:function(){return a()||s},windows:function(){return a()||o},osx:function(){return a()||t},linux:function(){return a()||u},iphone:function(){return a()||v},mobile:function(){return a()||v||w||d||F},nativeApp:function(){return a()||M},android:function(){return a()||d},ipad:function(){return a()||w}};return _=h,_}var x,U;function g(){if(U)return x;U=1;var r=!!(typeof window<"u"&&window.document&&window.document.createElement),i={canUseDOM:r,canUseWorkers:typeof Worker<"u",canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};return x=i,x}var D,X;function q(){if(X)return D;X=1;var r=g(),i;r.canUseDOM&&(i=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function p(c,f){if(!r.canUseDOM||f&&!("addEventListener"in document))return!1;var s="on"+c,e=s in document;if(!e){var t=document.createElement("div");t.setAttribute(s,"return;"),e=typeof t[s]=="function"}return!e&&i&&c==="wheel"&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}return D=p,D}var N,b;function O(){if(b)return N;b=1;var r=S(),i=q(),p=10,c=40,f=800;function s(e){var t=0,o=0,u=0,d=0;return"detail"in e&&(o=e.detail),"wheelDelta"in e&&(o=-e.wheelDelta/120),"wheelDeltaY"in e&&(o=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=o,o=0),u=t*p,d=o*p,"deltaY"in e&&(d=e.deltaY),"deltaX"in e&&(u=e.deltaX),(u||d)&&e.deltaMode&&(e.deltaMode==1?(u*=c,d*=c):(u*=f,d*=f)),u&&!t&&(t=u<1?-1:1),d&&!o&&(o=d<1?-1:1),{spinX:t,spinY:o,pixelX:u,pixelY:d}}return s.getEventType=function(){return r.firefox()?"DOMMouseScroll":i("wheel")?"wheel":"mousewheel"},N=s,N}var I;function z(){return I||(I=1,function(r){r.exports=O()}(R)),m}export{z as r};
