(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(60),o=n.n(i),j=n(6),s=n(9),a=n(17),l=n(0),u={name:"",img:"",isOnline:!1},b=Object(c.createContext)(void 0),d=Object(c.createContext)(void 0);function h(e,t){switch(t.type){case"login":return Object(a.a)(Object(a.a)({},t.info),{},{isOnline:!0});case"logout":default:return Object(a.a)({},u)}}function O(e){var t=e.children,n=Object(c.useReducer)(h,u),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(b.Provider,{value:i,children:Object(l.jsx)(d.Provider,{value:o,children:t})})}function x(){var e=Object(c.useContext)(b);if(!e)throw new Error("Provider not found");return e}function f(){var e=Object(c.useContext)(d);if(!e)throw new Error("Provider not found");return e}var p=n(61),m=n.n(p),v=n(3);function g(){var e=Object(v.f)(),t=f(),n=x().name;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ol",{children:[Object(l.jsx)("ul",{children:Object(l.jsx)(j.b,{to:"/",children:"main"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(j.b,{to:"/game",children:"game"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(j.b,{to:"/profile",children:"profile"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(j.b,{to:"/community",children:"community"})}),Object(l.jsx)("ul",{children:Object(l.jsx)(j.b,{to:"/channel",children:"channel"})}),Object(l.jsxs)("ul",{children:["Logged in: ",n]}),Object(l.jsx)("ul",{children:Object(l.jsx)("button",{onClick:function(){t({type:"logout"}),e.push("/")},children:"fake logout"})})]})})}var y=r.a.memo(g),P=n(63);function E(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),j=o[0],a=o[1],u=Object(c.useState)([]),b=Object(s.a)(u,2),d=b[0],h=b[1],O=Object(c.useState)(!0),x=Object(s.a)(O,2),f=x[0],p=x[1],m=Object(v.g)().channel,g=Object(v.f)();Object(c.useEffect)((function(){return n&&(p(!0),n.on("chat message",(function(e){h((function(t){return t.concat(e)}))})),n.on("connect_error",(function(){p(!1)}))),function(){n&&n.disconnect()}}),[n]),Object(c.useEffect)((function(){["channel1","channel2"].includes(m)||p(!1),h([]),r(Object(P.io)("http://localhost:3000/".concat(m)))}),[m,g]);return Object(l.jsx)("div",{children:f?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("li",{children:e.msg},"".concat(e.date).concat(e.msg))}))})}),Object(l.jsx)("div",{style:{position:"fixed",bottom:10},children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j&&(null===n||void 0===n||n.emit("chat message",j),a(""))},children:[Object(l.jsx)("input",{value:j,onChange:function(e){a(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"send"})]})})]}):Object(l.jsx)("h3",{children:"\uc798\ubabb\ub41c url\uc73c\ub85c \uc811\uc18d\ud558\uc600\uac70\ub098 \uc18c\ucf13 \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4"})})}var C=n(25),S=n.n(C),w={isError:!1,isLoading:!1},_=Object(c.createContext)(void 0),F=Object(c.createContext)(void 0);function L(e,t){switch(t.type){case"error":return{isError:!0,isLoading:!1};case"loading":return{isError:!1,isLoading:!0};default:return Object(a.a)({},w)}}function T(e){var t=e.children,n=Object(c.useReducer)(L,w),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(_.Provider,{value:i,children:Object(l.jsx)(F.Provider,{value:o,children:t})})}function k(){var e=Object(c.useContext)(_);if(!e)throw new Error("Provider not found");return e}function R(){var e=Object(c.useContext)(F);if(!e)throw new Error("Provider not found");return e}function A(e){var t=e.posts;return Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{children:"".concat(e.id,", ").concat(e.title)},e.id)}))})}function D(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,r=[],i=1;i<=Math.ceil(n/t);i++)r.push(i);return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:r.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("span",{onClick:function(){return c(e)},children:e})},e)}))})})})}function H(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(1),o=Object(s.a)(i,2),j=o[0],a=o[1],u=R(),b=k().isLoading;Object(c.useEffect)((function(){u({type:"loading"}),S.a.get("https://jsonplaceholder.typicode.com/posts").finally((function(){u({type:"init"})})).then((function(e){r(e.data),a(1)})).catch((function(e){u({type:"error",message:e.message})}))}),[]);var d=10*j,h=d-10;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Community"}),!b&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A,{posts:function(e){return e.slice(h,d)}(n)}),Object(l.jsx)(D,{postsPerPage:10,totalPosts:n.length,paginate:a})]})]})}function B(){var e=Object(v.f)(),t=f(),n=R();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Please Login"}),Object(l.jsx)("button",{onClick:function(){n({type:"loading"}),S.a.get("https://jsonplaceholder.typicode.com/users/1").finally((function(){n({type:"init"})})).then((function(n){t({type:"login",info:{name:n.data.name,img:"https://avatars.githubusercontent.com/u/57004991?v=4"}}),e.push("/")})).catch((function(e){n({type:"error",message:e.message})}))},children:"fake login"})]})}function K(e){var t=e.children;return Object(l.jsx)("div",{children:t})}function W(){var e=x(),t=e.name,n=e.img;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Hi, ",t]}),Object(l.jsx)("img",{alt:t,src:n})]})}function I(){var e=x().isOnline,t=k(),n=t.isError,c=t.isLoading,r=e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(v.a,{path:"/channel",render:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{children:Object(l.jsx)(j.c,{to:"/channel/channel1",children:"channel1"})}),Object(l.jsx)("button",{children:Object(l.jsx)(j.c,{to:"/channel/channel2",children:"channel2"})})]})}}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{path:"/game",render:function(){return Object(l.jsx)(K,{children:"game"})}}),Object(l.jsx)(v.a,{path:"/profile",component:W}),Object(l.jsx)(v.a,{path:"/community",component:H}),Object(l.jsx)(v.a,{exact:!0,path:"/channel/:channel",component:E}),Object(l.jsx)(v.a,{path:"/",render:function(){return Object(l.jsx)(K,{children:"main"})}})]})]}):Object(l.jsx)(v.a,{path:"/",component:B});return Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsx)(m.a,{type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3}),n?Object(l.jsx)("div",{children:"Error! Please refresh"}):r]})}o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/react-test-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PATH,children:Object(l.jsx)(O,{children:Object(l.jsx)(T,{children:Object(l.jsx)(I,{})})})})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.1583c82b.chunk.js.map