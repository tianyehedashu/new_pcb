import{r as e,j as t}from"./jsx-runtime-hUYqBQVk.js";import{r as i}from"./index-DSSWKfIi.js";import{E as o,i as r,d as n,c as a,m as s,s as _,b as w,g as d,e as u,f as l,h as m,j as x,R as f,k as c,l as p,n as v}from"./components-DiRXzZl3.js";
/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
let C,h,M,R=!1;function y(t){if(!h){if(window.__remixContext.future.v3_singleFetch){if(!C){let e=window.__remixContext.stream;r(e,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,C=n(e,window).then((e=>{window.__remixContext.state=e.value,C.value=!0})).catch((e=>{C.error=e}))}if(C.error)throw C.error;if(!C.value)throw C}let e,t=a(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode);if(!window.__remixContext.isSpaMode){e={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let i=s(t,window.location,window.__remixContext.basename);if(i)for(let t of i){let i=t.route.id,o=window.__remixRouteModules[i],r=window.__remixManifest.routes[i];o&&_(r,o,window.__remixContext.isSpaMode)&&(o.HydrateFallback||!r.hasLoader)?e.loaderData[i]=void 0:r&&!r.hasLoader&&(e.loaderData[i]=null)}e&&e.errors&&(e.errors=function(e){if(!e)return null;let t=Object.entries(e),i={};for(let[n,a]of t)if(a&&"RouteErrorResponse"===a.__type)i[n]=new o(a.status,a.statusText,a.data,!0===a.internal);else if(a&&"Error"===a.__type){if(a.__subType){let e=window[a.__subType];if("function"==typeof e)try{let t=new e(a.message);t.stack=a.stack,i[n]=t}catch(r){}}if(null==i[n]){let e=new Error(a.message);e.stack=a.stack,i[n]=e}}else i[n]=a;return i}(e.errors))}h=w({routes:t,history:l(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:!0===window.__remixContext.future.v3_singleFetch},hydrationData:e,mapRouteProperties:v,dataStrategy:window.__remixContext.future.v3_singleFetch&&!window.__remixContext.isSpaMode?u(window.__remixManifest,window.__remixRouteModules,(()=>h)):void 0,patchRoutesOnNavigation:d(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),h.state.initialized&&(R=!0,h.initialize()),h.createRoutesForHMR=m,window.__remixRouter=h,M&&M(h)}let[i,y]=e.useState(void 0),[S,g]=e.useState(h.state.location);return e.useLayoutEffect((()=>{R||(R=!0,h.initialize())}),[]),e.useLayoutEffect((()=>h.subscribe((e=>{e.location!==S&&g(e.location)}))),[S]),x(h,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),e.createElement(e.Fragment,null,e.createElement(f.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:i,isSpaMode:window.__remixContext.isSpaMode}},e.createElement(c,{location:S},e.createElement(p,{router:h,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?e.createElement(e.Fragment,null):null)}var S;new Promise((e=>{M=e})).catch((()=>{}));var g=i;g.createRoot,S=g.hydrateRoot,e.startTransition((()=>{S(document,t.jsx(e.StrictMode,{children:t.jsx(y,{})}))}));
//# sourceMappingURL=entry.client-LfJPHCk4.js.map
