(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1362:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>m});var n=r(2115),a=(e,t,r,n,a,s,l,o)=>{let i=document.documentElement,c=["light","dark"];function m(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?a.map(e=>s[e]||e):a;r?(i.classList.remove(...n),i.classList.add(s&&s[t]?s[t]:t)):i.setAttribute(e,t)}),r=t,o&&c.includes(r)&&(i.style.colorScheme=r)}if(n)m(n);else try{let e=localStorage.getItem(t)||r,n=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(n)}catch(e){}},s=["light","dark"],l="(prefers-color-scheme: dark)",o=n.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(o))?e:i},m=e=>n.useContext(o)?n.createElement(n.Fragment,null,e.children):n.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=a?"system":"light",attribute:v="data-theme",value:p,children:g,nonce:E,scriptProps:S}=e,[k,w]=n.useState(()=>y(c,u)),[C,T]=n.useState(()=>"system"===k?b():k),_=p?Object.values(p):m,L=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=b());let n=p?p[t]:t,l=r?f(E):null,o=document.documentElement,c=e=>{"class"===e?(o.classList.remove(..._),n&&o.classList.add(n)):e.startsWith("data-")&&(n?o.setAttribute(e,n):o.removeAttribute(e))};if(Array.isArray(v)?v.forEach(c):c(v),i){let e=s.includes(u)?u:null,r=s.includes(t)?t:e;o.style.colorScheme=r}null==l||l()},[E]),N=n.useCallback(e=>{let t="function"==typeof e?e(k):e;w(t);try{localStorage.setItem(c,t)}catch(e){}},[k]),A=n.useCallback(e=>{T(b(e)),"system"===k&&a&&!t&&L("system")},[k,t]);n.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?w(e.newValue):N(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),n.useEffect(()=>{L(null!=t?t:k)},[t,k]);let P=n.useMemo(()=>({theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?C:k,themes:a?[...m,"system"]:m,systemTheme:a?C:void 0}),[k,N,t,C,a,m]);return n.createElement(o.Provider,{value:P},n.createElement(h,{forcedTheme:t,storageKey:c,attribute:v,enableSystem:a,enableColorScheme:i,defaultTheme:u,value:p,themes:m,nonce:E,scriptProps:S}),g)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([s,r,i,t,m,c,l,o]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},5650:e=>{e.exports={style:{fontFamily:"'Orbitron', 'Orbitron Fallback'",fontStyle:"normal"},className:"__className_9fd9c5",variable:"__variable_9fd9c5"}},6908:(e,t,r)=>{Promise.resolve().then(r.bind(r,9304)),Promise.resolve().then(r.t.bind(r,5650,23)),Promise.resolve().then(r.t.bind(r,9324,23))},9304:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>s});var n=r(5155);r(2115);var a=r(1362);function s(e){let{children:t,...r}=e;return(0,n.jsx)(a.N,{...r,children:t})}},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[491,441,684,358],()=>t(6908)),_N_E=e.O()}]);