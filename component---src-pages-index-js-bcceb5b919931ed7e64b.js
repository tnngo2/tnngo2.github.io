webpackJsonp([35783957827783],{23:function(e,t){"use strict";e.exports={site:{url:"",path:"/",shortTitle:"Tuan Ngo",fullTitle:"Tuan Ngo - Senior Software Engineer",description:"A simple personal website",language:"en"},information:{mail:"tnngo2@gmail.com",linkedIn:"https://www.linkedin.com/in/tuan-ngo-6ba2136/",twitter:null,facebook:null,github:"http://github.com/tnngo2"},appearance:{backgroundColor:"#fcfcfc",font:{headerFontFamily:"Avenir Next",bodyFontFamily:"Georgia",baseSize:"16px",baseLineHeight:1.5,headerWeight:700,bodyWeight:400,boldBodyWeight:700,headerColor:"#303030",bodyColor:"#4f4f4f"}}}},107:function(e,t){"use strict";function n(e,t,d){if("string"!=typeof t){if(s){var f=c(t);f&&f!==s&&n(e,f,d)}var m=l(t);i&&(m=m.concat(i(t)));for(var p=0;p<m.length;++p){var g=m[p];if(!(r[g]||a[g]||d&&d[g])){var b=u(t,g);try{o(e,g,b)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=n},31:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,u=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var s in r)o.call(r,s)&&(u[s]=r[s]);if(a){i=a(r);for(var d=0;d<i.length;d++)l.call(r,i[d])&&(u[i[d]]=r[i[d]])}}return u}},123:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(219),i=r(l);t.default=function(e){var t=e.children;return o.default.createElement("div",{className:i.default.index},o.default.createElement("div",{className:i.default.content},t))},e.exports=t.default},219:function(e,t){e.exports={index:"src-components----Container-module---index---3e-oh",content:"src-components----Container-module---content---136gi"}},124:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(220),i=r(l),u=n(23),c=u.site,s=function(e){var t=e.about.node.html;return o.default.createElement("div",{className:i.default.index},o.default.createElement("h1",null,c.shortTitle),o.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};t.default=s,e.exports=t.default},220:function(e,t){e.exports={index:"src-components----Header-module---index---3uZAU"}},125:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),l=n(221),i=r(l),u=function(e){var t=e.project.node,n=t.html,r=t.frontmatter,a=function(e){if(e)return o.default.createElement("img",{src:e.childImageSharp.sizes.src,alt:"Project cover"})};return o.default.createElement("div",{className:i.default.project},a(r.cover),o.default.createElement("h3",{className:i.default.title},r.title),o.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},c=function(e){var t=e.projects;return o.default.createElement("div",{className:i.default.index},o.default.createElement("h5",{className:i.default.heading},"Recent Projects"),o.default.createElement("div",{className:i.default.container},t.map(function(e,t){return o.default.createElement(u,{project:e,key:t})})))};t.default=c,e.exports=t.default},221:function(e,t){e.exports={index:"src-components----List-module---index---1te_k",heading:"src-components----List-module---heading---QGqpz",project:"src-components----List-module---project---2MOHi",title:"src-components----List-module---title---1_1lG"}},126:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(e.value)return l.default.createElement("a",{href:e.value,className:u.default.link,key:t},e.label)}t.__esModule=!0;var o=n(1),l=r(o),i=n(222),u=r(i),c=function(e){var t=e.links,n=[{label:"Mail",value:"mailto:"+t.mail},{label:"Twitter",value:t.twitter},{label:"Facebook",value:t.facebook},{label:"LinkedIn",value:t.linkedIn},{label:"GitHub",value:t.github}];return l.default.createElement("div",{className:u.default.index},n.map(function(e,t){return a(e,t)}))};t.default=c,e.exports=t.default},222:function(e,t){e.exports={index:"src-components----Navigation-module---index---1B9Sa",link:"src-components----Navigation-module---link---Vjc8X"}},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(1),o=r(a),l=n(223),i=(r(l),n(123)),u=r(i),c=n(126),s=r(c),d=n(124),f=r(d),m=n(125),p=r(m),g=n(23),b=function(e){var t=e.data.about.edges[0],n=e.data.projects.edges;return o.default.createElement(u.default,null,o.default.createElement(s.default,{links:g.information}),o.default.createElement("div",{style:{maxWidth:"500px"}},o.default.createElement(f.default,{about:t}),o.default.createElement(p.default,{projects:n})))};t.pageQuery="** extracted graphql fragment **";t.default=b}});
//# sourceMappingURL=component---src-pages-index-js-bcceb5b919931ed7e64b.js.map