import{b as e,_ as t,c as n,g as o,u as r,z as i,s,S as l,a,t as u,L as c,K as p,d}from"./Container-zAI8j8MC.js";import{b as h,r as f,j as m}from"./jsx-runtime-hUYqBQVk.js";function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,b(e,t)}const g=h.createContext(null);function x(e,t){var n=Object.create(null);return e&&f.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&f.isValidElement(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function R(e,t,n){var o=x(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var l={};for(var a in t){if(r[a])for(o=0;o<r[a].length;o++){var u=r[a][o];l[r[a][o]]=n(u)}l[a]=n(a)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}(t,o);return Object.keys(r).forEach((function(i){var s=r[i];if(f.isValidElement(s)){var l=i in t,a=i in o,u=t[i],c=f.isValidElement(u)&&!u.props.in;!a||l&&!c?a||!l||c?a&&l&&f.isValidElement(u)&&(r[i]=f.cloneElement(s,{onExited:n.bind(null,s),in:u.props.in,exit:y(s,"exit",e),enter:y(s,"enter",e)})):r[i]=f.cloneElement(s,{in:!1}):r[i]=f.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:y(s,"exit",e),enter:y(s,"enter",e)})}})),r}var M=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},E=function(n){function o(e,t){var o,r=(o=n.call(this,e,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}v(o,n);var r=o.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(e,t){var n,o,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,o=i,x(n.children,(function(e){return f.cloneElement(e,{onExited:o.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):R(e,r,i),firstRender:!1}},r.handleExited=function(t,n){var o=x(this.props.children);t.key in o||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState((function(n){var o=e({},n.children);return delete o[t.key],{children:o}})))},r.render=function(){var e=this.props,n=e.component,o=e.childFactory,r=t(e,["component","childFactory"]),i=this.state.contextValue,s=M(this.state.children).map(o);return delete r.appear,delete r.enter,delete r.exit,null===n?h.createElement(g.Provider,{value:i},s):h.createElement(g.Provider,{value:i},h.createElement(n,r,s))},o}(h.Component);E.propTypes={},E.defaultProps={component:"div",childFactory:function(e){return e}};const T=o("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),k=["center","classes","className"];let C,V,P,j,S=e=>e;const w=l(C||(C=S`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),$=l(V||(V=S`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),D=l(P||(P=S`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),L=s("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),B=s((function(e){const{className:t,classes:o,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:l,in:a,onExited:u,timeout:c}=e,[p,d]=f.useState(!1),h=n(t,o.ripple,o.rippleVisible,r&&o.ripplePulsate),b={width:l,height:l,top:-l/2+s,left:-l/2+i},v=n(o.child,p&&o.childLeaving,r&&o.childPulsate);return a||p||d(!0),f.useEffect((()=>{if(!a&&null!=u){const e=setTimeout(u,c);return()=>{clearTimeout(e)}}}),[u,a,c]),m.jsx("span",{className:h,style:b,children:m.jsx("span",{className:v})})}),{name:"MuiTouchRipple",slot:"Ripple"})(j||(j=S`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),T.rippleVisible,w,550,(({theme:e})=>e.transitions.easing.easeInOut),T.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),T.child,T.childLeaving,$,550,(({theme:e})=>e.transitions.easing.easeInOut),T.childPulsate,D,(({theme:e})=>e.transitions.easing.easeInOut)),O=f.forwardRef((function(o,s){const l=r({props:o,name:"MuiTouchRipple"}),{center:a=!1,classes:u={},className:c}=l,p=t(l,k),[d,h]=f.useState([]),b=f.useRef(0),v=f.useRef(null);f.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[d]);const g=f.useRef(!1),x=i(),y=f.useRef(null),R=f.useRef(null),M=f.useCallback((e=>{const{pulsate:t,rippleX:o,rippleY:r,rippleSize:i,cb:s}=e;h((e=>[...e,m.jsx(B,{classes:{ripple:n(u.ripple,T.ripple),rippleVisible:n(u.rippleVisible,T.rippleVisible),ripplePulsate:n(u.ripplePulsate,T.ripplePulsate),child:n(u.child,T.child),childLeaving:n(u.childLeaving,T.childLeaving),childPulsate:n(u.childPulsate,T.childPulsate)},timeout:550,pulsate:t,rippleX:o,rippleY:r,rippleSize:i},b.current)])),b.current+=1,v.current=s}),[u]),C=f.useCallback(((e={},t={},n=()=>{})=>{const{pulsate:o=!1,center:r=a||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&g.current)return void(g.current=!1);"touchstart"===(null==e?void 0:e.type)&&(g.current=!0);const s=i?null:R.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-l.left),c=Math.round(n-l.top)}if(r)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{M({pulsate:o,rippleX:u,rippleY:c,rippleSize:p,cb:n})},x.start(80,(()=>{y.current&&(y.current(),y.current=null)}))):M({pulsate:o,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[a,M,x]),V=f.useCallback((()=>{C({},{pulsate:!0})}),[C]),P=f.useCallback(((e,t)=>{if(x.clear(),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void x.start(0,(()=>{P(e,t)}));y.current=null,h((e=>e.length>0?e.slice(1):e)),v.current=t}),[x]);return f.useImperativeHandle(s,(()=>({pulsate:V,start:C,stop:P})),[V,C,P]),m.jsx(L,e({className:n(T.root,u.root,c),ref:R},p,{children:m.jsx(E,{component:null,exit:!0,children:d})}))}));function N(e){return a("MuiButtonBase",e)}const F=o("MuiButtonBase",["root","disabled","focusVisible"]),I=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],z=s("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${F.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),X=f.forwardRef((function(o,i){const s=r({props:o,name:"MuiButtonBase"}),{action:l,centerRipple:a=!1,children:h,className:b,component:v="button",disabled:g=!1,disableRipple:x=!1,disableTouchRipple:y=!1,focusRipple:R=!1,LinkComponent:M="a",onBlur:E,onClick:T,onContextMenu:k,onDragLeave:C,onFocus:V,onFocusVisible:P,onKeyDown:j,onKeyUp:S,onMouseDown:w,onMouseLeave:$,onMouseUp:D,onTouchEnd:L,onTouchMove:B,onTouchStart:F,tabIndex:X=0,TouchRippleProps:K,touchRippleRef:U,type:Y}=s,_=t(s,I),A=f.useRef(null),H=f.useRef(null),W=u(H,U),{isFocusVisibleRef:q,onFocus:G,onBlur:J,ref:Q}=c(),[Z,ee]=f.useState(!1);g&&Z&&ee(!1),f.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),A.current.focus()}})),[]);const[te,ne]=f.useState(!1);f.useEffect((()=>{ne(!0)}),[]);const oe=te&&!x&&!g;function re(e,t,n=y){return p((o=>{t&&t(o);return!n&&H.current&&H.current[e](o),!0}))}f.useEffect((()=>{Z&&R&&!x&&te&&H.current.pulsate()}),[x,R,Z,te]);const ie=re("start",w),se=re("stop",k),le=re("stop",C),ae=re("stop",D),ue=re("stop",(e=>{Z&&e.preventDefault(),$&&$(e)})),ce=re("start",F),pe=re("stop",L),de=re("stop",B),he=re("stop",(e=>{J(e),!1===q.current&&ee(!1),E&&E(e)}),!1),fe=p((e=>{A.current||(A.current=e.currentTarget),G(e),!0===q.current&&(ee(!0),P&&P(e)),V&&V(e)})),me=()=>{const e=A.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},be=f.useRef(!1),ve=p((e=>{R&&!be.current&&Z&&H.current&&" "===e.key&&(be.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),j&&j(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!g&&(e.preventDefault(),T&&T(e))})),ge=p((e=>{R&&" "===e.key&&H.current&&Z&&!e.defaultPrevented&&(be.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),S&&S(e),T&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&T(e)}));let xe=v;"button"===xe&&(_.href||_.to)&&(xe=M);const ye={};"button"===xe?(ye.type=void 0===Y?"button":Y,ye.disabled=g):(_.href||_.to||(ye.role="button"),g&&(ye["aria-disabled"]=g));const Re=u(i,Q,A),Me=e({},s,{centerRipple:a,component:v,disabled:g,disableRipple:x,disableTouchRipple:y,focusRipple:R,tabIndex:X,focusVisible:Z}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,i=d({root:["root",t&&"disabled",n&&"focusVisible"]},N,r);return n&&o&&(i.root+=` ${o}`),i})(Me);return m.jsxs(z,e({as:xe,className:n(Ee.root,b),ownerState:Me,onBlur:he,onClick:T,onContextMenu:se,onFocus:fe,onKeyDown:ve,onKeyUp:ge,onMouseDown:ie,onMouseLeave:ue,onMouseUp:ae,onDragLeave:le,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:Re,tabIndex:g?-1:X,type:Y},ye,_,{children:[h,oe?m.jsx(O,e({ref:W,center:a},K)):null]}))}));export{X as B,g as T,v as _};
//# sourceMappingURL=ButtonBase-CfSWLyPA.js.map
