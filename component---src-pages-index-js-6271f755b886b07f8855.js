webpackJsonp([35783957827783],{23:function(e,t){"use strict";e.exports={site:{url:"",path:"/",shortTitle:"Tuan Ngo",fullTitle:"Tuan Ngo - Senior Software Engineer",description:"A simple personal website",language:"en"},information:{mail:"tnngo2@gmail.com",linkedIn:"https://www.linkedin.com/in/tuan-ngo-6ba2136/",twitter:null,facebook:null,github:"http://github.com/tnngo2",blog:"https://medium.com/@tnngo2"},appearance:{backgroundColor:"#fcfcfc",font:{headerFontFamily:"Avenir Next",bodyFontFamily:"Georgia",baseSize:"18px",baseLineHeight:1.5,headerWeight:700,bodyWeight:400,boldBodyWeight:700,headerColor:"#303030",bodyColor:"#4f4f4f"}}}},246:function(e,t){e.exports={articles:[{title:"Strange behavior in Firefox handling asynchronous, synchronous",url:"https://medium.com/@tnngo2/strange-behavior-in-firefox-handling-asynchronous-synchronous-4a4eda40c2dd",date:"Feb 22 2019"}]}},108:function(e,t){"use strict";function n(e,t,s){if("string"!=typeof t){if(d){var f=c(t);f&&f!==d&&n(e,f,s)}var m=o(t);u&&(m=m.concat(u(t)));for(var p=0;p<m.length;++p){var g=m[p];if(!(a[g]||r[g]||s&&s[g])){var h=i(t,g);try{l(e,g,h)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,o=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,d=c&&c(Object);e.exports=n},31:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,u,i=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var d in a)l.call(a,d)&&(i[d]=a[d]);if(r){u=r(a);for(var s=0;s<u.length;s++)o.call(a,u[s])&&(i[u[s]]=a[u[s]])}}return i}},124:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(105),u=a(o),i=function(e){var t=e.articles;return l.default.createElement("div",{className:u.default.index},l.default.createElement("h5",{className:u.default.heading},"Blog:"),l.default.createElement("ol",null,t.map(function(e,t){return l.default.createElement("li",null,l.default.createElement("a",{href:"{article.url}"},e.title),l.default.createElement("i",null,l.default.createElement("span",null,e.date)))})))};t.default=i,e.exports=t.default},125:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(221),u=a(o);t.default=function(e){var t=e.children;return l.default.createElement("div",{className:u.default.index},l.default.createElement("div",{className:u.default.content},t))},e.exports=t.default},221:function(e,t){e.exports={index:"src-components----Container-module---index---3e-oh",content:"src-components----Container-module---content---136gi"}},126:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(222),u=a(o),i=n(23),c=i.site,d=function(e){var t=e.about.node.html;return l.default.createElement("div",{className:u.default.index},l.default.createElement("h1",null,c.shortTitle),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};t.default=d,e.exports=t.default},222:function(e,t){e.exports={index:"src-components----Header-module---index---3uZAU"}},127:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),o=n(105),u=a(o),i=function(e){var t=e.project.node,n=t.html,a=t.frontmatter,r=function(e){if(e)return l.default.createElement("img",{src:e.childImageSharp.sizes.src,alt:"Project cover"})};return l.default.createElement("div",{className:u.default.project},r(a.cover),l.default.createElement("h3",{className:u.default.title},a.title),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},c=function(e){var t=e.projects;return l.default.createElement("div",{className:u.default.index},l.default.createElement("h5",{className:u.default.heading},"Recent Projects"),l.default.createElement("div",{className:u.default.container},t.map(function(e,t){return l.default.createElement(i,{project:e,key:t})})))};t.default=c,e.exports=t.default},105:function(e,t){e.exports={index:"src-components----List-module---index---1te_k",heading:"src-components----List-module---heading---QGqpz",project:"src-components----List-module---project---2MOHi",title:"src-components----List-module---title---1_1lG"}},128:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e.value)return o.default.createElement("a",{href:e.value,className:i.default.link,key:t},e.label)}t.__esModule=!0;var l=n(1),o=a(l),u=n(223),i=a(u),c=function(e){var t=e.links,n=[{label:"Mail",value:"mailto:"+t.mail},{label:"Twitter",value:t.twitter},{label:"Facebook",value:t.facebook},{label:"LinkedIn",value:t.linkedIn},{label:"GitHub",value:t.github}];return o.default.createElement("div",{className:i.default.index},n.map(function(e,t){return r(e,t)}))};t.default=c,e.exports=t.default},223:function(e,t){e.exports={index:"src-components----Navigation-module---index---1B9Sa",link:"src-components----Navigation-module---link---Vjc8X"}},131:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=n(1),l=a(r),o=n(224),u=(a(o),n(125)),i=a(u),c=n(128),d=a(c),s=n(126),f=a(s),m=n(127),p=a(m),g=n(124),h=a(g),b=n(246),v=a(b),y=n(23),x=function(e){var t=e.data.about.edges[0],n=e.data.projects.edges;return l.default.createElement(i.default,null,l.default.createElement(d.default,{links:y.information}),l.default.createElement("div",{style:{maxWidth:"500px"}},l.default.createElement(f.default,{about:t}),l.default.createElement(h.default,{articles:v.default.articles}),l.default.createElement(p.default,{projects:n})))};t.pageQuery="** extracted graphql fragment **";t.default=x}});
//# sourceMappingURL=component---src-pages-index-js-6271f755b886b07f8855.js.map