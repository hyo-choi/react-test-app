(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(27),o=n.n(i),s=n(9),j=n(10),a=n(12),l=n(1),u={name:"",img:"",isOnline:!1},d=Object(c.createContext)(void 0),b=Object(c.createContext)(void 0);function h(e,t){switch(t.type){case"login":return Object(a.a)(Object(a.a)({},t.info),{},{isOnline:!0});case"logout":default:return Object(a.a)({},u)}}function O(e){var t=e.children,n=Object(c.useReducer)(h,u),r=Object(j.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(d.Provider,{value:i,children:Object(l.jsx)(b.Provider,{value:o,children:t})})}function x(){var e=Object(c.useContext)(d);if(!e)throw new Error("Provider not found");return e}function f(){var e=Object(c.useContext)(b);if(!e)throw new Error("Provider not found");return e}var p=n(28),v=n.n(p),m=n(3);function g(){var e=Object(m.f)(),t=f(),n=x().name;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ol",{children:[Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/",children:"main"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/game",children:"game"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/profile",children:"profile"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/community",children:"community"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/channel",children:"channel"})}),Object(l.jsxs)("ul",{children:["Logged in: ",n]}),Object(l.jsx)("ul",{children:Object(l.jsx)("button",{onClick:function(){t({type:"logout"}),e.push("/")},children:"fake logout"})})]})})}var y=r.a.memo(g),P=n(13),w=n.n(P),C={isError:!1,isLoading:!1},E=Object(c.createContext)(void 0),k=Object(c.createContext)(void 0);function L(e,t){switch(t.type){case"error":return{isError:!0,isLoading:!1};case"loading":return{isError:!1,isLoading:!0};default:return Object(a.a)({},C)}}function F(e){var t=e.children,n=Object(c.useReducer)(L,C),r=Object(j.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(E.Provider,{value:i,children:Object(l.jsx)(k.Provider,{value:o,children:t})})}function S(){var e=Object(c.useContext)(E);if(!e)throw new Error("Provider not found");return e}function B(){var e=Object(c.useContext)(k);if(!e)throw new Error("Provider not found");return e}function J(e){var t=e.posts;return Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{children:"".concat(e.id,", ").concat(e.title)},e.id)}))})}function M(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,r=[],i=1;i<=Math.ceil(n/t);i++)r.push(i);return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:r.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("span",{onClick:function(){return c(e)},children:e})},e)}))})})})}function R(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(1),o=Object(j.a)(i,2),s=o[0],a=o[1],u=B(),d=S().isLoading;Object(c.useEffect)((function(){u({type:"loading"}),w.a.get("https://jsonplaceholder.typicode.com/posts").finally((function(){u({type:"init"})})).then((function(e){r(e.data),a(1)})).catch((function(e){u({type:"error",message:e.message})}))}),[]);var b=10*s,h=b-10;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Community"}),!d&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(J,{posts:function(e){return e.slice(h,b)}(n)}),Object(l.jsx)(M,{postsPerPage:10,totalPosts:n.length,paginate:a})]})]})}function H(){var e=Object(m.f)(),t=f(),n=B();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Please Login"}),Object(l.jsx)("button",{onClick:function(){n({type:"loading"}),w.a.get("https://jsonplaceholder.typicode.com/users/1").finally((function(){n({type:"init"})})).then((function(n){t({type:"login",info:{name:n.data.name,img:"https://avatars.githubusercontent.com/u/57004991?v=4"}}),e.push("/")})).catch((function(e){n({type:"error",message:e.message})}))},children:"fake login"})]})}function I(e){var t=e.children;return Object(l.jsx)("div",{children:t})}function q(){var e=x(),t=e.name,n=e.img;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Hi, ",t]}),Object(l.jsx)("img",{alt:t,src:n})]})}function z(){var e=x().isOnline,t=S(),n=t.isError,c=t.isLoading,r=e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/game",render:function(){return Object(l.jsx)(I,{children:"game"})}}),Object(l.jsx)(m.a,{path:"/profile",component:q}),Object(l.jsx)(m.a,{path:"/community",component:R}),Object(l.jsx)(m.a,{path:"/channel",render:function(){return Object(l.jsx)(I,{children:"channel"})}}),Object(l.jsx)(m.a,{path:"/",render:function(){return Object(l.jsx)(I,{children:"main"})}})]})]}):Object(l.jsx)(m.a,{path:"/",component:H});return Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsx)(v.a,{type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3}),n?Object(l.jsx)("div",{children:"Error! Please refresh"}):r]})}o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{basename:"/react-test-app",children:Object(l.jsx)(O,{children:Object(l.jsx)(F,{children:Object(l.jsx)(z,{})})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.309aac83.chunk.js.map