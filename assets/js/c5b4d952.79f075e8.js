"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6884],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(r),d=a,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3996:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return k}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/AreaStyleOptions",id:"api/interfaces/AreaStyleOptions",isDocsHomePage:!1,title:"Interface: AreaStyleOptions",description:"Represents style options for an area series.",source:"@site/docs/api/interfaces/AreaStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/AreaStyleOptions",permalink:"/lightweight-charts/api/interfaces/AreaStyleOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TickMarkType",permalink:"/lightweight-charts/api/enums/TickMarkType"},next:{title:"AutoScaleMargins",permalink:"/lightweight-charts/api/interfaces/AutoScaleMargins"}},u=[{value:"Properties",id:"properties",children:[{value:"topColor",id:"topcolor",children:[],level:3},{value:"bottomColor",id:"bottomcolor",children:[],level:3},{value:"lineColor",id:"linecolor",children:[],level:3},{value:"lineStyle",id:"linestyle",children:[],level:3},{value:"lineWidth",id:"linewidth",children:[],level:3},{value:"lineType",id:"linetype",children:[],level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",children:[],level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",children:[],level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",children:[],level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",children:[],level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",children:[],level:3}],level:2}],c={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents style options for an area series."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"topcolor"},"topColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"topColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of the top part of the area."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"'rgba( 46, 220, 135, 0.4)'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bottomcolor"},"bottomColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bottomColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of the bottom part of the area."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@defaultValue ",(0,i.kt)("inlineCode",{parentName:"li"},"'rgba( 40, 221, 100, 0)'"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linecolor"},"lineColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Line color."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@defaultValue ",(0,i.kt)("inlineCode",{parentName:"li"},"'#33D778'"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linestyle"},"lineStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LineStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,i.kt)("p",null,"Line style."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LineStyle#solid"},"LineStyle.Solid")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linewidth"},"lineWidth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/#linewidth"},(0,i.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,i.kt)("p",null,"Line width in pixels."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linetype"},"lineType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineType"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LineType"},(0,i.kt)("inlineCode",{parentName:"a"},"LineType"))),(0,i.kt)("p",null,"Line type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LineType#simple"},"LineType.Simple")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Show the crosshair marker."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Crosshair marker radius in pixels."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"''")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"''")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LastPriceAnimationMode"},(0,i.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,i.kt)("p",null,"Last price animation mode."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/api/enums/LastPriceAnimationMode#disabled"},"LastPriceAnimationMode.Disabled")))}k.isMDXComponent=!0}}]);