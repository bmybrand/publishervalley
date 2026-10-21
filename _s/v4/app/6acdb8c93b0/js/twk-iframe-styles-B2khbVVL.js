import{p as r,L,D as u,d as it,i as rt,a8 as lt,n as K,O as st,J as ct,o as dt,B as mt,e as ut,f as pt,x as ht,v as ft,a4 as gt,a9 as bt,aa as wt}from"./twk-main.js";const J=["emitter","i18n","socket","jsApi","tawkWindow","widgetSettings","chatManager","audioPlayer","scheduler","sessionManager","activityMonitor","webStorage","logger"],X={colorYiq(i){const h=parseInt(i.slice(1,3),16),c=parseInt(i.slice(3,5),16),d=parseInt(i.slice(5,7),16);return(h*299+c*587+d*144)/1e3>=180?"#000000":"#FFFFFF"}};function kt(){return{isRTL:r(()=>u().isRTL),language:r(()=>u().language),headerBgColor:r(()=>u().headerBgColor),headerTxtColor:r(()=>u().headerTxtColor),visitorBgColor:r(()=>u().visitorBgColor),visitorTxtColor:r(()=>u().visitorTxtColor),agentBgColor:r(()=>u().agentBgColor),agentTxtColor:r(()=>u().agentTxtColor),mobileBrowserName:r(()=>L().mobileBrowserName),isIE:r(()=>L().isIE),browserVersion:r(()=>L().version)}}const vt=["id","srcdoc","src","title","width","height"],xt=it({name:"WidgetIFrame",__name:"WidgetIFrame",props:{width:{default:void 0},height:{default:void 0},cssLink:{default:void 0},styleObject:{default:()=>({})},classString:{default:""},isMaxWidget:{type:Boolean,default:!1},title:{default:void 0},onLoad:{type:[Function,null],default:null}},setup(i){const h=Object.fromEntries(J.map(t=>[t,rt(t,void 0)])),c=h.emitter,d=h.jsApi,{isRTL:T,language:y,headerBgColor:m,headerTxtColor:k,visitorBgColor:x,visitorTxtColor:$,agentBgColor:I,agentTxtColor:O,mobileBrowserName:_,isIE:M,browserVersion:W}=kt(),f=i,z=lt(),Q=K(st()),g=K(null),C=gt([]);function Z(){return f.styleObject?Object.entries(f.styleObject).map(([t,o])=>t+o).join(" "):""}function A(t,o){let e=`:root {
		--tawk-header-background-color: ${m.value} !important;
		--tawk-header-background-color-alpha: ${m.value}50 !important;
		--tawk-header-text-color: ${k.value} !important;
		--tawk-header-override-padding-top: ${t} !important;
		--tawk-footer-override-padding-bottom: ${o} !important;
	}`;return e+=`.tawk-chat-bubble code,
		.tawk-chat-bubble pre {
		border-color: ${X.colorYiq(x.value)}40 !important;
		background-color: ${X.colorYiq(x.value)}20 !important;
	}`,e+=`.tawk-visitor-chat-bubble {
		background: ${x.value} !important;
		color: ${$.value} !important;
	}`,e+=`.tawk-visitor-chat-bubble .tawk-timeago {
		color: ${$.value} !important;
	}`,e+=`.tawk-agent-chat-bubble {
		background: ${I.value} !important;
		color: ${O.value} !important;
	}`,e+=`.tawk-agent-chat-bubble .tawk-timeago {
		color: ${O.value} !important;
	}`,e+=`.tawk-agent-chat-bubble-dots {
		background: ${I.value} !important;
	}`,e}function tt(){let t="";return M.value&&W.value<=11&&(t+=`.tawk-custom-color-inverse {
			background-color: ${k.value} !important;
			color: ${m.value} !important;
		}
		.tawk-custom-border-color {
			border-color: ${m.value} !important;
		}
		.tawk-custom-border-left {
			border-left: 5px solid ${m.value} !important;
		}
		.tawk-custom-color {
			background-color: ${m.value} !important;
			color: ${k.value} !important;
		}
		.tawk-custom-text-color {
			color: ${m.value} !important;
		}
		.tawk-custom-text-color-inverse {
			color: ${k.value} !important;
		}
		.tawk-custom-image .tawk-image {
			max-height: 250px;
		}
		.tawk-timeago {
			font-size: .75rem !important;
			font-family: 'Lato', sans-serif !important;
		}
		.tawk-main-panel .tawk-chat-panel {
			height: 100%;
		}
		.tawk-tooltip-hover {
			max-width: 120px;
		}
		.card-container:first-child::before {
			background-color: ${m.value} !important;
		}
		.tawk-form-wrapper .tawk-input:-ms-input-placeholder,
		.tawk-form-wrapper .tawk-textarea:-ms-input-placeholder {
			opacity: 1 !important;
		}
		.tawk-home-list-chat-content {
			-ms-flex-grow:1;
			-ms-flex: 1;
			width: auto;
		}
		.tawk-home-list-chat-content .tawk-custom-chat-left {
			flex: 0 0 50%;
			max-width: 50%;
			display: inline-block;
		}
		.tawk-home-list-chat-content .tawk-custom-chat-right {
			flex: 0 0 40%;
			max-width: 40%;
			width: 100%;
		}
		.tawk-home-list-chat-content .tawk-custom-chat-right .tawk-timeago {
			display: inline-block;
			word-wrap: break-word;
			word-break: all;
			width: 100%;
		}`),M.value&&W.value<=10&&(t+=`
			.tawk-custom-flex-1 {
				flex: 0 0 auto !important;
			}
			.tawk-input, .tawk-select, .tawk-textarea, .tawk-chatinput-editor, .tawk-form-label {
				font-size: .812rem !important;
				font-family: 'Lato', sans-serif !important;
			}
		`),t}function D(){var e,n,s;let t="1rem",o="0";if(_.value){const a=(n=(e=d==null?void 0:d.local_API)==null?void 0:e.customStyle)==null?void 0:n.visibility;(s=a==null?void 0:a.mobile)!=null&&s.maximized&&(a.mobile.maximized.paddingTop&&(t=`${a.mobile.maximized.paddingTop}px`),a.mobile.maximized.paddingBottom&&(o=`${a.mobile.maximized.paddingBottom}px`))}return{paddingTop:t,paddingBottom:o}}function et(t){const{paddingTop:o,paddingBottom:e}=D(),n=document.createElement("style");n.classList.add("tawk-global-variables");let s=A(o,e);s+=tt(),n.appendChild(document.createTextNode(s)),t.appendChild(n)}function ot(){var w,b;const t=(w=g.value)==null?void 0:w.contentDocument;if(!t)return;const o=t.head,e=o.querySelector(".tawk-global-variables");e&&((b=e.parentNode)==null||b.removeChild(e));const{paddingTop:n,paddingBottom:s}=D(),a=document.createElement("style");a.classList.add("tawk-global-variables");let p=A(n,s);a.appendChild(document.createTextNode(p)),o.appendChild(a)}let F=null,l=null;function at(t){if(t.compatMode!=="BackCompat")return;try{t.open(),t.write("<!DOCTYPE html><html><head></head><body></body></html>")}catch{}finally{t.close()}const o=t.documentElement??t.appendChild(t.createElement("html"));t.head||o.insertBefore(t.createElement("head"),o.firstChild),t.body||o.appendChild(t.createElement("body"))}function N(){var P,R,H;const t=(P=g.value)==null?void 0:P.contentDocument;if(!t||t===F)return;F=t,l==null||l(),l=null,f.isMaxWidget&&at(t);const o=t.documentElement,e=t.body,n=t.head,s="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext",a=document.createElement("div");a.style.width="100%",a.style.height="100%";const p=document.createElement("link"),w=document.createElement("link");p.href=f.cssLink||"",p.rel="stylesheet",w.href=s,o.style.height="100%",e.style.height="100%",e.style.margin="0",e.appendChild(a),e.classList.add("font-lato"),T.value&&e.classList.add("tawk-rtl"),_.value&&(o.classList.add("tawk-mobile"),e.classList.add("tawk-mobile")),y.value&&o.setAttribute("lang",y.value);const b=document.createElement("meta");b.setAttribute("http-equiv","Content-Type"),b.content="text/html; charset=utf-8";const E=document.createElement("meta");E.name="viewport",E.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",n.appendChild(b),n.appendChild(E),et(n),(R=d==null?void 0:d.local_API)!=null&&R.disableWidgetFont||n.appendChild(w);const V=f.onLoad,q=z.default,G=(H=g.value)==null?void 0:H.contentWindow,U=window.__VUE_DEVTOOLS_GLOBAL_HOOK__;G&&U&&(G.__VUE_DEVTOOLS_GLOBAL_HOOK__=U);const S=bt({name:"WidgetIFrameApp",mounted(){typeof V=="function"&&V()},render(){return wt("div",{style:"width: 100%; height: 100%;"},C.value)}});for(const B of J)h[B]!==void 0&&S.provide(B,h[B]);let v="pending";const Y=()=>{v==="pending"&&(v="mounted",C.value=q?q():[],S.mount(a))};l=()=>{v==="mounted"&&S.unmount(),v="disposed"},p.onload=Y,p.onerror=Y,n.appendChild(p)}function j(){ot()}ct(()=>{const t=z.default;return t?t():[]},t=>{C.value=t},{flush:"pre"}),dt(()=>{c==null||c.on("updateWidgetSettings",j),(!f.isMaxWidget||nt())&&N()});function nt(){return!!g.value&&!g.value.hasAttribute("srcdoc")}return mt(()=>{c==null||c.off("updateWidgetSettings",j),l==null||l(),l=null}),(t,o)=>(ut(),pt("iframe",{id:Q.value,ref_key:"iframeRef",ref:g,srcdoc:i.isMaxWidget?"<html></html>":void 0,src:i.isMaxWidget?void 0:"about:blank",title:i.title,frameborder:"0",scrolling:"no",width:i.width,height:i.height,style:ft(Z()),class:ht(i.classString),referrerpolicy:"no-referrer-when-downgrade",onLoad:N},null,46,vt))}}),Ct={"outline:":"none !important;","visibility:":"visible !important;","resize:":"none !important;","box-shadow:":"none !important;","overflow:":"visible !important;","background:":"none !important;","opacity:":"1 !important;","filter:":"alpha(opacity=100) !important;","-ms-filter:":"progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;","-mz-opacity:":"1 !important;","-khtml-opacity:":"1 !important;","top:":"auto !important;","right:":"auto !important;","bottom:":"auto !important;","left:":"auto !important;","position:":"absolute !important;","border:":"0 !important;","min-height:":"auto !important;","min-width:":"auto !important;","max-height:":"none !important;","max-width:":"none !important;","padding:":"0 !important;","margin:":"0 !important;","-moz-transition-property:":"none !important;","-webkit-transition-property:":"none !important;","-o-transition-property:":"none !important;","transition-property:":"none !important;","transform:":"none !important;","-webkit-transform:":"none !important;","-ms-transform:":"none !important;","width:":"auto !important;","height:":"auto !important;","display:":"block !important;","z-index:":"auto !important;","background-color:":"transparent !important;","cursor:":"none !important;","float:":"none !important;","border-radius:":"unset !important;","pointer-events:":"auto !important;","clip:":"auto !important;","color-scheme:":"light !important;"};export{Ct as G,xt as _};
