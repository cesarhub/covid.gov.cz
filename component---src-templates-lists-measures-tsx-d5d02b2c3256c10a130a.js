(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"19eF":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("R99l"),o=n("dT4H"),r=n("j++a"),c=n("q1tI"),l=n.n(c),u=n("rBsq"),i=n.n(u),m=function(e){var t=e.name,n=e.path,c=e.iconCode;return l.a.createElement(o.a,{to:n,className:i.a.categoryItem+" py-1"},l.a.createElement(r.a,{className:i.a.categoryItemIcon,code:c}),l.a.createElement("span",{className:i.a.categoryItemTitle},t),l.a.createElement(a.a,{style:{fontSize:16},className:"color-yellow"}))}},"2u68":function(e,t,n){e.exports={"btn-small-black":"variants-module--btn-small-black--398fP",btnSmallBlack:"variants-module--btn-small-black--398fP"}},"I+D7":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),o=n.n(a),r=n("W+yO"),c=n.n(r),l=function(e){var t=e.children;return o.a.createElement("h1",{className:c.a.headline},t)}},I9eX:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return d}));var a=n("q1tI"),o=n.n(a),r=n("ptG0"),c=n("6Hpx"),l=n("n214"),u=n("QoFz"),i=n("I+D7"),m=n("19eF"),s=n("21qS"),b=n("jufJ");t.default=function(e){var t=e.data,n=e.pageContext.langCode,a=t.allTaxonomyTermMeasureType.nodes,d=new Intl.Collator([n]);return a.sort((function(e,t){return d.compare(e.name,t.name)})),o.a.createElement(s.a,null,o.a.createElement(l.a,{title:Object(b.b)("current_measures"),description:Object(b.b)("current_measures_overview_meta"),pagePath:Object(b.b)("slug_measures"),htmlLanguage:n,schema:'{\n          "@type": "WebSite",\n          "@id": "https://covid.gov.cz/#website",\n          "url": "https://covid.gov.cz/measures",\n          "name": "Current Measures | Covid Portál",\n          "publisher": {\n            "@id": "https://gov.cz"\n          }\n        }'}),o.a.createElement(c.a,{className:"pt-1"},o.a.createElement(u.a,{items:[{title:Object(b.b)("home"),url:"/"},{title:Object(b.b)("current_measures"),url:Object(b.b)("slug_measures")}],variant:"inverse"})),o.a.createElement(c.a,{className:"mt-3"},o.a.createElement(i.a,null,Object(b.b)("current_measures_overview"))),o.a.createElement(c.a,{className:"mt-3"},o.a.createElement(r.a,{noPadding:!0},a.map((function(e){var t;return null!==e.relationships.measure&&o.a.createElement(m.a,{key:e.id,name:e.name,path:e.path.alias,iconCode:null===(t=e.relationships.field_ref_icon)||void 0===t?void 0:t.code})})))))};var d="1612053270"},QoFz:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("TSYQ"),o=n.n(a),r=n("q1tI"),c=n.n(r),l=n("dT4H"),u=n("pvlE"),i=n.n(u),m=function(e){return o()("breadcrumb",i.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,n=e.variant,a=void 0===n?"normal":n,r=function(e){var n;return o()("breadcrumb__item",i.a.breadcrumbItem,((n={})[i.a.breadcrumbItemActive]=e===t.length-1,n))};return c.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},c.a.createElement("ol",{className:m(a)},t.map((function(e,t){return c.a.createElement("li",{key:"breadcrumb-item-"+t,className:r(t)},function(e){return void 0!==e.title}(e)?c.a.createElement(l.a,{to:e.url,className:"breadcrumb__link",label:e.title}):c.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},R99l:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("LYUY");t.a=Object(r.a)(o.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight")},"W+yO":function(e,t,n){e.exports={headline:"headline-module--headline--2EZlD"}},"j++a":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("TSYQ"),c=n.n(r);t.a=function(e){var t=e.className,n=e.code,a=c()(t,"material-icons");return o.a.createElement("i",{className:a},n||"folder")}},lYOF:function(e,t,n){e.exports={contentBoxTitle:"content-box-module--contentBoxTitle--3E5Vo",contentBoxDescription:"content-box-module--contentBoxDescription--O2FI4",contentBox:"content-box-module--contentBox--3WK0J",contentBoxNoPadding:"content-box-module--contentBoxNoPadding--2vKlZ","contentBox--white":"content-box-module--contentBox--white--2fBcG",contentBoxWhite:"content-box-module--contentBox--white--2fBcG","contentBox--blue":"content-box-module--contentBox--blue--243gT",contentBoxBlue:"content-box-module--contentBox--blue--243gT","content-box-btn":"content-box-module--content-box-btn--281FR",contentBoxBtn:"content-box-module--content-box-btn--281FR","content-box-btn--blue":"content-box-module--content-box-btn--blue--22dPm",contentBoxBtnBlue:"content-box-module--content-box-btn--blue--22dPm"}},ptG0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),o=n.n(a),r=n("TSYQ"),c=n.n(r),l=n("zoQI"),u=n("uJxA"),i=n("lYOF"),m=n.n(i),s=function(e){var t,n=e.children,a=e.title,r=e.description,i=e.buttonVariant,s=e.buttonText,b=e.buttonHref,d=e.variant,x=void 0===d?"":d,v=e.noPadding;return o.a.createElement("div",{className:c()(m.a.contentBox,m.a["contentBox--"+x],v&&m.a.contentBoxNoPadding,"row")},o.a.createElement(u.a,{col:12},a&&o.a.createElement("h2",{className:m.a.contentBoxTitle,dangerouslySetInnerHTML:{__html:a}}),r&&o.a.createElement("p",{className:m.a.contentBoxDescription},r),n,s&&o.a.createElement(l.a,{href:b,variant:i,text:s,className:c()(m.a.contentBoxBtn,(t={},t[m.a.contentBoxBtnBlue]="white"===x,t))})))}},pvlE:function(e,t,n){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},rBsq:function(e,t,n){e.exports={categoryItem:"category-item-module--categoryItem--3V8HX",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o"}},zoQI:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),o=n.n(a),r=n("TSYQ"),c=n.n(r),l=n("2u68"),u=n.n(l),i=n("dT4H"),m=function(e,t){var n,a;return c()({btn:"small-black"!==e},{"btn-primary":"contained"===e},{"btn-outline-primary":"outline"===e},{"btn-outline-dark":"outline-black"===e},{"btn-outline-yellow":"outline-yellow"===e},{"btn-yellow":"yellow"===e},{"text-black":"outline-black"===e},{"btn-secondary":"secondary"===e},((n={})[u.a.btnSmallBlack]="small-black"===e,n),((a={})[t]=t,a))},s=function(e){var t=e.variant,n=e.onClick,a=e.text,r=e.href,c=void 0===r?"":r,l=e.className,u=e.disabled,s=void 0!==u&&u,b=e.icon,d=e.linkTitle,x=void 0===d?"":d;return""===c||s?o.a.createElement("button",{type:"button",className:m(t,l),onClick:n||null,disabled:s},a,b):o.a.createElement(i.a,{to:c,label:x,dataTestId:"button-link"},o.a.createElement("button",{type:"button",className:m(t,l),onClick:n||null,disabled:s},a,b))}}}]);
//# sourceMappingURL=component---src-templates-lists-measures-tsx-d5d02b2c3256c10a130a.js.map