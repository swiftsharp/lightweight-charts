"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1504],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1969:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/ChartOptions",id:"api/interfaces/ChartOptions",isDocsHomePage:!1,title:"Interface: ChartOptions",description:"Structure describing options of the chart. Series options are to be set separately",source:"@site/docs/api/interfaces/ChartOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ChartOptions",permalink:"/lightweight-charts/api/interfaces/ChartOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChartOptions",title:"Interface: ChartOptions",sidebar_label:"ChartOptions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CandlestickStyleOptions",permalink:"/lightweight-charts/api/interfaces/CandlestickStyleOptions"},next:{title:"CrosshairLineOptions",permalink:"/lightweight-charts/api/interfaces/CrosshairLineOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"width",id:"width",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"watermark",id:"watermark",children:[],level:3},{value:"layout",id:"layout",children:[],level:3},{value:"leftPriceScale",id:"leftpricescale",children:[],level:3},{value:"rightPriceScale",id:"rightpricescale",children:[],level:3},{value:"overlayPriceScales",id:"overlaypricescales",children:[],level:3},{value:"timeScale",id:"timescale",children:[],level:3},{value:"crosshair",id:"crosshair",children:[],level:3},{value:"grid",id:"grid",children:[],level:3},{value:"localization",id:"localization",children:[],level:3},{value:"handleScroll",id:"handlescroll",children:[],level:3},{value:"handleScale",id:"handlescale",children:[],level:3},{value:"kineticScroll",id:"kineticscroll",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Structure describing options of the chart. Series options are to be set separately"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"width"},"width"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"width"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Width of the chart in pixels"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"height"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Height of the chart in pixels"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," If ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"watermark"},"watermark"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"watermark"),": ",(0,l.kt)("a",{parentName:"p",href:"WatermarkOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"WatermarkOptions"))),(0,l.kt)("p",null,"Watermark options."),(0,l.kt)("p",null,"A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it."),(0,l.kt)("p",null,"Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.\nWe recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"layout"},"layout"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"layout"),": ",(0,l.kt)("a",{parentName:"p",href:"LayoutOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"LayoutOptions"))),(0,l.kt)("p",null,"Layout options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"leftpricescale"},"leftPriceScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"leftPriceScale"),": ",(0,l.kt)("a",{parentName:"p",href:"PriceScaleOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,l.kt)("p",null,"Left price scale options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rightpricescale"},"rightPriceScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rightPriceScale"),": ",(0,l.kt)("a",{parentName:"p",href:"PriceScaleOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,l.kt)("p",null,"Right price scale options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"overlaypricescales"},"overlayPriceScales"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"overlayPriceScales"),": ",(0,l.kt)("a",{parentName:"p",href:"../#overlaypricescaleoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"OverlayPriceScaleOptions"))),(0,l.kt)("p",null,"Overlay price scale options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"timescale"},"timeScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"timeScale"),": ",(0,l.kt)("a",{parentName:"p",href:"TimeScaleOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"TimeScaleOptions"))),(0,l.kt)("p",null,"Time scale options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crosshair"},"crosshair"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"crosshair"),": ",(0,l.kt)("a",{parentName:"p",href:"CrosshairOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"CrosshairOptions"))),(0,l.kt)("p",null,"Crosshair options"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"grid"},"grid"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"grid"),": ",(0,l.kt)("a",{parentName:"p",href:"GridOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"GridOptions"))),(0,l.kt)("p",null,"Grid options."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"localization"},"localization"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"localization"),": ",(0,l.kt)("a",{parentName:"p",href:"LocalizationOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"LocalizationOptions"))),(0,l.kt)("p",null,"Localization options."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlescroll"},"handleScroll"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"handleScroll"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"HandleScrollOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"HandleScrollOptions"))),(0,l.kt)("p",null,"Scroll options, or a boolean flag that enables/disables scrolling"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlescale"},"handleScale"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"handleScale"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"HandleScaleOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"HandleScaleOptions"))),(0,l.kt)("p",null,"Scale options, or a boolean flag that enables/disables scaling"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"kineticscroll"},"kineticScroll"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"kineticScroll"),": ",(0,l.kt)("a",{parentName:"p",href:"KineticScrollOptions"},(0,l.kt)("inlineCode",{parentName:"a"},"KineticScrollOptions"))),(0,l.kt)("p",null,"Kinetic scroll options"))}d.isMDXComponent=!0}}]);