(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),o=n(2),u=(n(16),Object(a.createContext)()),E=function(){return(new Date).toISOString()},i=function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch,r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],m=c[1],s=Object(a.useState)(""),d=Object(o.a)(s,2),O=d[0],p=d[1],b=""===i||""===O;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"TODO\u7ba1\u7406"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formEventTitle"},"\u30bf\u30a4\u30c8\u30eb"),l.a.createElement("input",{className:"form-control",id:"formEventTitle",value:i,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formEventBody"},"\u8a73\u7d30"),l.a.createElement("textarea",{className:"form-control",id:"formEventBody",value:O,onChange:function(e){return p(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n({type:"CREATE_EVENT",title:i,body:O}),n({type:"ADD_OPERATION_LOGS",description:"TODO\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",operatedAt:E()}),m(""),p("")},disabled:b},"TODO\u3092\u4f5c\u6210\u3059\u308b"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),window.confirm("\u5168\u3066\u306eTODO\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&(n({type:"DELETE_ALL_EVENTS"}),n({type:"ADD_OPERATION_LOGS",description:"\u5168\u3066\u306eTODO\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002",operatedAt:E()}))},disabled:0===t.events.length},"\u5168\u3066\u306eTODO\u3092\u524a\u9664\u3059\u308b"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),window.confirm("\u5168\u3066\u306e\u64cd\u4f5c\u30ed\u30b0\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f")&&n({type:"DELETE_ALL_OPERATION_LOGS"})},disabled:0===t.operationLogs.length},"\u5168\u3066\u306e\u64cd\u4f5c\u30ed\u30b0\u3092\u524a\u9664\u3059\u308b")))},m=function(e){var t=e.event,n=Object(a.useContext)(u).dispatch,r=t.id;return l.a.createElement("tr",null,l.a.createElement("td",null,r),l.a.createElement("td",null,t.title),l.a.createElement("td",null,t.body),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){window.confirm("ID:".concat(r," \u306eTODO\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3057\u3087\u3046\u304b\uff1f"))&&(n({type:"DELETE_EVENT",id:r}),n({type:"ADD_OPERATION_LOGS",description:"ID:".concat(r," \u306eTODO\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002"),operatedAt:E()}))}},"\u524a\u9664")))},s=function(){var e=Object(a.useContext)(u).state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"TODO \u4e00\u89a7"),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"\u30bf\u30a4\u30c8\u30eb"),l.a.createElement("th",null,"\u8a73\u7d30"))),l.a.createElement("tbody",null,e.events.map(function(e,t){return l.a.createElement(m,{key:t,event:e})}))))},d=function(e){var t=e.operationLog;return l.a.createElement("tr",null,l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.operatedAt))},O=function(){var e=Object(a.useContext)(u).state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"\u64cd\u4f5c\u30ed\u30b0 \u4e00\u89a7"),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u64cd\u4f5c\u5185\u5bb9"),l.a.createElement("th",null,"\u65e5\u6642"))),l.a.createElement("tbody",null,e.operationLogs.map(function(e,t){return l.a.createElement(d,{key:t,operationLog:e})}))))},p=n(8),b=n(10),f=n(4),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EVENT":var n={title:t.title,body:t.body},a=e.length,l=0===a?1:e[a-1].id+1;return[].concat(Object(f.a)(e),[Object(b.a)({id:l},n)]);case"DELETE_EVENT":return e.filter(function(e){return e.id!==t.id});case"DELETE_ALL_EVENTS":return[];default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_OPERATION_LOGS":return[{description:t.description,operatedAt:t.operatedAt}].concat(Object(f.a)(e));case"DELETE_ALL_OPERATION_LOGS":return[];default:return e}},h=Object(p.a)({events:v,operationLogs:g}),T=function(){var e=localStorage.getItem("appWithRedux"),t=e?JSON.parse(e):{events:[],operationLogs:[]},n=Object(a.useReducer)(h,t),r=Object(o.a)(n,2),c=r[0],E=r[1];return Object(a.useEffect)(function(){localStorage.setItem("appWithRedux",JSON.stringify(c))},[c]),l.a.createElement(u.Provider,{value:{state:c,dispatch:E}},l.a.createElement("div",{className:"container"},l.a.createElement(i,null),l.a.createElement(s,null),l.a.createElement(O,null)))};c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.31ceddd3.chunk.js.map