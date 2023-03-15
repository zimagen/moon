"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(25773),r=(n(27378),n(35318));const a={title:"install"},l=void 0,i={unversionedId:"proto/commands/install",id:"proto/commands/install",title:"install",description:"The proto install  command will download and install a tool by unpacking their archive to",source:"@site/docs/proto/commands/install.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/install",permalink:"/docs/proto/commands/install",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/install.mdx",tags:[],version:"current",frontMatter:{title:"install"},sidebar:"proto",previous:{title:"global",permalink:"/docs/proto/commands/global"},next:{title:"list",permalink:"/docs/proto/commands/list"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proto install <tool>")," command will download and install a tool by unpacking their archive to\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/<tool>"),". If the tool has already been installed, the command will exit early."),(0,r.kt)("p",null,"The command is also smart enough to resolve partial versions, so 1, 1.2, and 1.2.3 are all\nacceptable. It even supports aliases when applicable, like ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beta"),", etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install deno 1.31\n")),(0,r.kt)("p",null,"Some tools run ",(0,r.kt)("a",{parentName:"p",href:"../tools"},"post-install hooks")," that support arbitrary arguments that can be passed\nafter ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install go -- --no-gobin\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<tool>")," - Type of tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[version]"),' - Version of tool. Defaults to "latest".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[-- <args>]")," - Additional arguments to pass to post-install hooks.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pin")," - Pin the resolved version as the global default.")))}m.isMDXComponent=!0}}]);