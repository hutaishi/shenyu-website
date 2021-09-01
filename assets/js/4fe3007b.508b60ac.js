"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7039],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8108:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Custom Load Balance",keywords:["LoadBalance"],description:"Custom Load Balance"},c=void 0,p={unversionedId:"developer/spi/custom-load-balance",id:"developer/spi/custom-load-balance",isDocsHomePage:!1,title:"Custom Load Balance",description:"Custom Load Balance",source:"@site/docs/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/docs/next/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/developer/spi/custom-load-balance.md",version:"current",frontMatter:{title:"Custom Load Balance",keywords:["LoadBalance"],description:"Custom Load Balance"},sidebar:"tutorialSidebar",previous:{title:"Custom Condition Match",permalink:"/docs/next/developer/spi/custom-condition-match"},next:{title:"Custom Metrics Monitor",permalink:"/docs/next/developer/spi/custom-metrics-monitor"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../deployment-custom"},"custom deployment"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This article describes how to customize the extension of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.divide.balance.LoadBalance")," ."))),(0,i.kt)("h2",{id:"extension"},"Extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new class ",(0,i.kt)("inlineCode",{parentName:"li"},"${you class}"),", implements ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.divide.balance.LoadBalance"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ${you class} implements LoadBalance {\n   \n    /**\n     * select one from upstream list.\n     *\n     * @param upstreamList upstream list\n     * @param ip ip\n     * @return divide upstream\n     */\n    @Override\n    public DivideUpstream doSelect(final List<DivideUpstream> upstreamList, \n                                   final String ip) {\n        //coding and return\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the project  ",(0,i.kt)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,i.kt)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.divide.balance.LoadBalance"),".\nadd ",(0,i.kt)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin")," service ---\x3e BasicConfig ---\x3e Dictionary ,  Find the dictionary code as ",(0,i.kt)("inlineCode",{parentName:"li"},"LOAD_BALANCE"),", add a new piece of data, pay attention to the dictionary name: ",(0,i.kt)("inlineCode",{parentName:"li"},"${you spi name}"),".")),(0,i.kt)("img",{src:"/static/img/shenyu/custom/custom-load-balance-en.jpg",width:"40%",height:"30%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Or execute the following custom ",(0,i.kt)("inlineCode",{parentName:"li"},"SQL")," statement\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT IGNORE INTO `shenyu_dict` (\n        `id`,\n        `type`,\n        `dict_code`,\n        `dict_name`,\n        `dict_value`,\n        `desc`,\n        `sort`,\n        `enabled`,\n        `date_created`,\n        `date_updated`\n    )\nVALUES (\n        'you id',\n        'matchMode',\n        'MATCH_MODE',\n        'you spi name',\n        'you value',\n        'you spi name',\n        0,\n        1,\n        '2021-08-30 19:29:10',\n        '2021-08-30 20:15:23'\n    );\n")))}d.isMDXComponent=!0}}]);