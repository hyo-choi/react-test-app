(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(27),o=n.n(i),s=n(9),j=n(10),a=n(12),l=n(1),u={name:"",img:"",isOnline:!1},d=Object(c.createContext)(void 0),b=Object(c.createContext)(void 0);function h(e,t){switch(t.type){case"login":return Object(a.a)(Object(a.a)({},t.info),{},{isOnline:!0});case"logout":default:return Object(a.a)({},u)}}function O(e){var t=e.children,n=Object(c.useReducer)(h,u),r=Object(j.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(d.Provider,{value:i,children:Object(l.jsx)(b.Provider,{value:o,children:t})})}function x(){var e=Object(c.useContext)(d);if(!e)throw new Error("Provider not found");return e}function f(){var e=Object(c.useContext)(b);if(!e)throw new Error("Provider not found");return e}var p=n(28),v=n.n(p),g=n(3);function m(){var e=Object(g.f)(),t=f();return Object(l.jsx)("nav",{children:Object(l.jsxs)("ol",{children:[Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/",children:"main"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/game",children:"game"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/profile",children:"profile"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/community",children:"community"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(s.b,{to:"/channel",children:"channel"})}),Object(l.jsx)("ul",{children:Object(l.jsx)("button",{onClick:function(){t({type:"logout"}),e.push("/")},children:"fake logout"})})]})})}var y=n(13),P=n.n(y),w={isError:!1,isLoading:!1},C=Object(c.createContext)(void 0),E=Object(c.createContext)(void 0);function k(e,t){switch(t.type){case"error":return{isError:!0,isLoading:!1};case"loading":return{isError:!1,isLoading:!0};default:return Object(a.a)({},w)}}function F(e){var t=e.children,n=Object(c.useReducer)(k,w),r=Object(j.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(C.Provider,{value:i,children:Object(l.jsx)(E.Provider,{value:o,children:t})})}function L(){var e=Object(c.useContext)(C);if(!e)throw new Error("Provider not found");return e}function S(){var e=Object(c.useContext)(E);if(!e)throw new Error("Provider not found");return e}function B(e){var t=e.posts;return Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{children:"".concat(e.id,", ").concat(e.title)},e.id)}))})}function J(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,r=[],i=1;i<=Math.ceil(n/t);i++)r.push(i);return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:r.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("span",{onClick:function(){return c(e)},children:e})},e)}))})})})}function M(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(1),o=Object(j.a)(i,2),s=o[0],a=o[1],u=S(),d=L().isLoading;Object(c.useEffect)((function(){u({type:"loading"}),P.a.get("https://jsonplaceholder.typicode.com/posts").finally((function(){u({type:"init"})})).then((function(e){r(e.data),a(1)})).catch((function(e){u({type:"error",message:e.message})}))}),[]);var b=10*s,h=b-10;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Community"}),!d&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{posts:function(e){return e.slice(h,b)}(n)}),Object(l.jsx)(J,{postsPerPage:10,totalPosts:n.length,paginate:a})]})]})}function R(){var e=Object(g.f)(),t=f(),n=S();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Please Login"}),Object(l.jsx)("button",{onClick:function(){n({type:"loading"}),P.a.get("https://jsonplaceholder.typicode.com/users/1").finally((function(){n({type:"init"})})).then((function(n){t({type:"login",info:{name:n.data.name,img:"https://avatars.githubusercontent.com/u/57004991?v=4"}}),e.push("/")})).catch((function(e){n({type:"error",message:e.message})}))},children:"fake login"})]})}function H(e){var t=e.children,n=x();return Object(l.jsxs)("div",{children:[t,Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:["Hi, ",n.name]}),Object(l.jsx)("img",{alt:n.name,src:n.img})]})]})}function I(){var e=x().isOnline,t=L(),n=t.isError,c=t.isLoading,r=e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{path:"/game",render:function(){return Object(l.jsx)(H,{children:"game"})}}),Object(l.jsx)(g.a,{path:"/profile",render:function(){return Object(l.jsx)(H,{children:"profile"})}}),Object(l.jsx)(g.a,{path:"/community",component:M}),Object(l.jsx)(g.a,{path:"/channel",render:function(){return Object(l.jsx)(H,{children:"channel"})}}),Object(l.jsx)(g.a,{path:"/",render:function(){return Object(l.jsx)(H,{children:"main"})}})]})]}):Object(l.jsx)(g.a,{path:"/",component:R});return Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsx)(v.a,{type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3}),n?Object(l.jsx)("div",{children:"Error! Please refresh"}):r]})}o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(O,{children:Object(l.jsx)(F,{children:Object(l.jsx)(I,{})})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d70c9c8b.chunk.js.map