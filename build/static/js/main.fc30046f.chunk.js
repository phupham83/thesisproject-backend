(this.webpackJsonpthesisproject=this.webpackJsonpthesisproject||[]).push([[0],{102:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(39),r=n.n(c),s=n(6),l=(n(102),n(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"404 Not Found"})})},i=n(7),u=n(5),d=n(2),b=n.n(d),j=n(8),x=n(17),p=n.n(x),h="/api/login",f=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(h,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h+"/local_login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h+"/logout");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={login:f,signup:function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),localLogin:m,logOut:O,revoke:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("/api/users/revoke");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},v={getConsent:function(){window.location.href="/api/obpApi/connect"},getAccounts:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/obpApi/getMyAccounts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getTransactions:function(){var e=Object(j.a)(b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/obpApi/getTransactions/"+t+"/"+n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getBalance:function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/obpApi/getBalance/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.localLogin();case 2:n=e.sent,t({type:"LOCAL_LOGIN",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){var a,c,r,s,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=23;break}if(!e.consent){t.next=20;break}return t.prev=2,t.next=5,v.getAccounts();case 5:return a=t.sent,c=function(e,t){return e&&t?[].concat(Object(i.a)(t),Object(i.a)(e)):t},r=a.accounts.map(function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getBalance(t.bank_id);case 2:return n=e.sent,e.next=5,v.getTransactions(t.bank_id,t.id);case 5:return a=e.sent,r=n.accounts.reduce((function(e,n){return n.account_id===t.id?(e.push(n.balances.reduce(c)),e):e}),[]),e.abrupt("return",Object(u.a)(Object(u.a)({},t),{},{transactions:a.transactions,balances:r}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=10,Promise.all(r);case 10:s=t.sent,l=Object(u.a)(Object(u.a)({},e),{},{accounts:s}),n({type:"GET_TRANSACTIONS",data:l}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0);case 18:t.next=21;break;case 20:n({type:"NO_ACCOUNTS"});case 21:t.next=24;break;case 23:n({type:"NO_ACCOUNTS"});case 24:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOCAL_LOGIN":return t.data,t.data;case"LOGOUT":return null;case"SIGN_UP":case"GET_CONSENT":return console.log(t.data),e;case"REVOKE_CONSENT":case"GET_ACCOUNTS":return t.data;case"NO_ACCOUNTS":return e;case"GET_TRANSACTIONS":case"GET_BALANCE":return t.data;default:console.log("")}return e},k=n(3),A=n(40),C=function(e){var t=e.transactions,n=e.totalBalance;if(t[0]){t.sort((function(e,t){return new Date(t.details.completed)-new Date(e.details.completed)}));var a=n,c=(t=t.map((function(e){var t=a;a-=Number(e.details.value.amount);var n=new Date(e.details.completed),c=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();return Object(u.a)(Object(u.a)({},e),{},{details:Object(u.a)(Object(u.a)({},e.details),{},{completed:c,new_balance:Object(u.a)(Object(u.a)({},e.details.new_balance),{},{amount:t})})})}))).map((function(e){return e.details.completed})),r=null,s={labels:c,datasets:[{label:"Balance (EUR)",data:t.map((function(e){return e.details.new_balance.amount})),fill:!1,lineTension:.5,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"500px",width:"1000px"},children:Object(l.jsx)(A.a,{data:s,options:{scales:{yAxes:{grid:{display:!0},ticks:{beginAtZero:!0}},xAxes:{grid:{display:!1},ticks:{display:!0,autoSkip:!0,autoSkipPadding:50}}}}})}),Object(l.jsx)("div",{className:"bg-white shadow-xl rounded-lg w-1/2",children:Object(l.jsx)("ul",{className:"divide-y divide-gray-300",children:t.map((function(e){return e.details.completed!==r?r=e.details.completed:e.details.completed=null,Object(l.jsxs)("div",{children:[e.details.completed?Object(l.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 md:text-2xl",children:e.details.completed}):console.log(),Object(l.jsxs)("li",{className:"p-4 hover:bg-gray-50 cursor-pointer",children:["Balance: ",e.details.new_balance.amount.toFixed(2)," Transfer amount: ",e.details.value.amount," Description: ",e.details.description]})]},e.id)}))})})]})}return Object(l.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:Object(l.jsxs)("div",{className:"flex justify-center items-center space-x-1 text-sm text-gray-700 ",children:[Object(l.jsx)("svg",{fill:"none",className:"w-12 h-12 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})}),Object(l.jsx)("div",{className:"text-3xl",children:"Loading ..."})]})})},S=function(e){var t=e.transactions,n=e.balances;if(t[0]){var a=(t=t.map((function(e){var t=new Date(e.details.completed),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return Object(u.a)(Object(u.a)({},e),{},{details:Object(u.a)(Object(u.a)({},e.details),{},{completed:n})})}))).map((function(e){return e.details.completed})),c=null,r={labels:a,datasets:[{label:"Balance (EUR)",data:t.map((function(e){return e.details.new_balance.amount})),fill:!1,lineTension:.5,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"500px",width:"1000px"},children:Object(l.jsx)(A.a,{data:r,options:{scales:{yAxes:{grid:{display:!0},ticks:{beginAtZero:!0}},xAxes:{grid:{display:!1},ticks:{display:!0,autoSkip:!0,autoSkipPadding:50}}}}})}),Object(l.jsx)("div",{className:"bg-white shadow-xl rounded-lg w-1/2",children:Object(l.jsx)("ul",{className:"divide-y divide-gray-300",children:t.map((function(e){return e.details.completed!==c?c=e.details.completed:e.details.completed=null,Object(l.jsxs)("div",{children:[e.details.completed?Object(l.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 md:text-2xl",children:e.details.completed}):console.log(),Object(l.jsxs)("li",{className:"p-4 hover:bg-gray-50 cursor-pointer",children:["Balance: ",e.details.new_balance.amount," Transfer amount: ",e.details.value.amount," Description: ",e.details.description]})]},e.id)}))})})]})}if(n[0])return Object(l.jsxs)("div",{children:[n.map((function(e){return Object(l.jsxs)("h3",{className:"text-3xl font-semibold text-gray-800 md:text-2xl",children:["Balance: ",e.amount]},e.amount)})),"No recent transactions"]})},T=n(9),E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user}));Object(a.useEffect)((function(){e(y(t))}),[]);var n=Object(k.g)(),c=t.accounts?t.accounts:[],r=t.accounts&&t.accounts[0].transactions?t.accounts.map((function(e){return e.transactions})):null,o=t.accounts&&t.accounts[0].balances?t.accounts.map((function(e){return e.balances})):null,u=r?r.reduce((function(e,t){return e?[].concat(Object(i.a)(t),Object(i.a)(e)):t}),[]):[],d=o?o.reduce((function(e,t){return e+t.reduce((function(e,t){return e+Number(t.amount)}),0)}),0):0,b="px-4 py-3 bg-gray-200 text-gray-500 text-xs font-semibold rounded hover:bg-gray-600 hover:text-white";return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-3xl font-semibold text-gray-800 md:text-4xl",children:"Transactions"}),t.consent?Object(l.jsx)("div",{children:Object(l.jsxs)(T.a,{children:[Object(l.jsxs)("div",{className:"space-x-4",children:[Object(l.jsx)(T.b,{to:"/transactions/All_accounts",children:Object(l.jsx)("button",{className:b,children:"All accounts"})}),c.map((function(e){return Object(l.jsx)(T.b,{to:"/transactions/"+e.bank_id+"/"+e.id,children:Object(l.jsx)("button",{className:b,children:e.bank_id})},e.id)})),Object(l.jsx)("button",{onClick:function(n){n.preventDefault(),e(w()),e(y(t))},className:b,children:"Refresh"})]}),Object(l.jsxs)(k.d,{children:[c.map((function(e){return Object(l.jsx)(k.b,{path:"/transactions/"+e.bank_id+"/"+e.id,children:Object(l.jsx)(S,{transactions:e.transactions,balances:e.balances})},e.id)})),Object(l.jsx)(k.b,{path:"/transactions/All_accounts",children:Object(l.jsx)(C,{transactions:u,totalBalance:d})}),Object(l.jsx)(k.b,{exact:!0,path:"/transactions",children:Object(l.jsx)(C,{transactions:u,totalBalance:d})})]})]})}):Object(l.jsxs)("div",{className:"addAccount",children:[Object(l.jsx)("p",{children:"Please add an account to start"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),n.push("/consent")},className:"px-4 py-3 bg-gray-200 text-gray-500 text-xs font-semibold rounded hover:bg-gray-600 hover:text-white",children:"Add account"})]})]})},_=function(e){return function(t){t({type:"SET_MESSAGE",data:e}),setTimeout((function(){return t({type:"SET_MESSAGE",data:null})}),3e3)}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return t.data;default:console.log("")}return e},D=function(){var e=Object(s.c)((function(e){return e.message})),t=e?"alert flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300":"hidden";return Object(l.jsxs)("div",{className:t,children:[Object(l.jsx)("div",{className:"alert-icon flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full",children:Object(l.jsx)("span",{className:"text-blue-500",children:Object(l.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"h-6 w-6",children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})})}),Object(l.jsxs)("div",{className:"alert-content ml-4",children:[Object(l.jsx)("div",{className:"alert-title font-semibold text-lg text-blue-800",children:"Info"}),Object(l.jsx)("div",{className:"alert-description text-sm text-blue-600",children:e})]})]})},G=function(){var e=Object(s.b)(),t=Object(k.g)(),n="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ";return Object(l.jsx)("section",{className:"App h-screen w-full flex justify-center items-center bg-gray-700 ",children:Object(l.jsxs)("div",{className:"w-full max-w-md bg-gray-800",children:[Object(l.jsx)(D,{}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.Username.value,c=n.target.Password.value;e(function(e,t,n,a){return function(){var c=Object(j.a)(b.a.mark((function c(r){var s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,g.login({username:e,password:t});case 3:s=c.sent,r({type:"LOGIN",data:s}),n(),c.next=12;break;case 8:c.prev=8,c.t0=c.catch(0),console.log(c.t0),a("Wrong username or password");case 12:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}(a,c,(function(){return t.push("/")}),(function(t){e(_(t))})))},className:" bg-white shadow-md rounded px-8 py-8 pt-8",children:[Object(l.jsxs)("div",{className:"px-4 pb-4",children:[Object(l.jsx)("label",{htmlFor:"text",className:"text-sm block font-bold pb-2",children:"USERNAME"}),Object(l.jsx)("input",{type:"text",name:"Username",id:"username",className:n,placeholder:"John97"})]}),Object(l.jsxs)("div",{className:"px-4 pb-4",children:[Object(l.jsx)("label",{htmlFor:"password",className:"text-sm block font-bold pb-2",children:"PASSWORD"}),Object(l.jsx)("input",{type:"password",name:"Password",id:"password",className:n,placeholder:"Enter your password"})]}),Object(l.jsx)("button",{id:"login-button",type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Login"})]})]})})},B=function(){var e=Object(s.b)(),t=Object(k.g)();return Object(l.jsx)("button",{onClick:function(n){n.preventDefault();e(function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.logOut();case 2:n({type:"LOGOUT"}),e();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}((function(){return t.push("/")})))},children:" Log out"})},R=function(){var e=Object(s.b)(),t=Object(k.g)();return Object(l.jsx)("section",{className:"App h-screen w-full flex justify-center items-center bg-gray-700 ",children:Object(l.jsxs)("div",{className:"w-full max-w-md bg-gray-800",children:[Object(l.jsx)(D,{}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.Username.value,c=n.target.Password.value,r=n.target.Name.value;e(function(e,t,n,a,c){return function(){var r=Object(j.a)(b.a.mark((function r(s){var l;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,g.signup({username:e,name:t,password:n});case 3:l=r.sent,s({type:"SIGN_UP",data:l}),c("Sign up successful"),a(),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0),c(r.t0.response.data.error);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(a,r,c,(function(){return t.push("/")}),(function(t){e(_(t))})))},className:" bg-white shadow-md rounded px-8 py-8 pt-8",children:[Object(l.jsxs)("div",{className:"px-4 pb-4",children:[Object(l.jsx)("label",{htmlFor:"text",className:"text-sm block font-bold pb-2",children:"USERNAME"}),Object(l.jsx)("input",{type:"text",name:"Username",id:"username",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"John97"})]}),Object(l.jsxs)("div",{className:"px-4 pb-4",children:[Object(l.jsx)("label",{htmlFor:"text",className:"text-sm block font-bold pb-2",children:"NAME"}),Object(l.jsx)("input",{type:"text",name:"Name",id:"name",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"John Pham"})]}),Object(l.jsxs)("div",{className:"px-4 pb-4",children:[Object(l.jsx)("label",{htmlFor:"password",className:"text-sm block font-bold pb-2",children:"PASSWORD"}),Object(l.jsx)("input",{type:"password",name:"Password",id:"password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300",placeholder:"Enter your password"})]}),Object(l.jsx)("button",{id:"signup-button",type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Sign up"})]})]})})},U=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user}));return Object(l.jsx)("div",{children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-3xl font-semibold text-gray-800 md:text-4xl",children:"Consent confirmation"}),Object(l.jsx)("p",{children:"By accepting you are allowing your data to be accessed"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e(function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getConsent();case 3:n=e.sent,t({type:"GET_CONSENT",data:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},className:"px-4 py-3 bg-gray-200 text-gray-500 text-xs font-semibold rounded hover:bg-gray-600 hover:text-white",children:"Confirm"})]}):Object(l.jsx)(k.a,{to:"/"})})},P=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user}));Object(a.useEffect)((function(){e(function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.consent){t.next=17;break}if(!e.accounts){t.next=5;break}try{n({type:"GET_ACCOUNTS",data:Object(u.a)({},e)})}catch(c){console.log(c)}t.next=15;break;case 5:return t.prev=5,t.next=8,v.getAccounts();case 8:a=t.sent,n({type:"GET_ACCOUNTS",data:Object(u.a)(Object(u.a)({},e),{},{accounts:a.accounts})}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0);case 15:t.next=18;break;case 17:n({type:"NO_ACCOUNTS"});case 18:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]);var n=Object(k.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-3xl font-semibold text-gray-800 md:text-4xl",children:"Accounts"}),t.consent?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"bg-white shadow-xl rounded-lg w-1/2",children:Object(l.jsx)("ul",{className:"divide-y divide-gray-300",children:t.accounts?t.accounts.map((function(e){return Object(l.jsx)("li",{className:"p-4 hover:bg-gray-50 cursor-pointer",children:e.bank_id},e.id)})):Object(l.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:Object(l.jsxs)("div",{className:"flex justify-center items-center space-x-1 text-sm text-gray-700 ",children:[Object(l.jsx)("svg",{fill:"none",className:"w-12 h-12 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})}),Object(l.jsx)("div",{className:"text-3xl",children:"Loading ..."})]})})})}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e(function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.revoke();case 3:n=e.sent,t({type:"REVOKE_CONSENT",data:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},className:"px-4 py-3 bg-gray-200 text-gray-500 text-xs font-semibold rounded hover:bg-gray-600 hover:text-white",children:"Revoke Consent"})]}):Object(l.jsxs)("div",{className:"addAccount",children:[Object(l.jsx)("p",{children:"Please add an account to start"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),n.push("/consent")},className:"px-4 py-3 bg-gray-200 text-gray-500 text-xs font-semibold rounded hover:bg-gray-600 hover:text-white",children:"Add account"})]})]})},M=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(w())}),[e]);var t=Object(s.c)((function(e){return e.user})),n="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white hover:shadow-lg ",c="flex items-center bg-gray-800 p-3 flex-wrap";return Object(l.jsx)("div",{className:"App",children:null===t?Object(l.jsx)(T.a,{children:Object(l.jsxs)(k.d,{children:[Object(l.jsxs)(k.b,{path:"/login",children:[Object(l.jsxs)("nav",{className:c,children:[Object(l.jsx)(T.b,{to:"/",children:Object(l.jsx)("span",{className:n,children:"Home"})}),Object(l.jsx)(T.b,{to:"/signup",children:Object(l.jsx)("span",{className:n,children:"Sign up"})})]}),Object(l.jsx)(G,{})]}),Object(l.jsxs)(k.b,{path:"/signup",children:[Object(l.jsxs)("nav",{className:c,children:[Object(l.jsx)(T.b,{to:"/",children:Object(l.jsx)("span",{className:n,children:"Home"})}),Object(l.jsx)(T.b,{to:"/login",children:Object(l.jsx)("span",{className:n,children:"Log in"})})]}),Object(l.jsx)(R,{})]}),Object(l.jsxs)(k.b,{exact:!0,path:"/",children:[Object(l.jsxs)("nav",{className:c,children:[Object(l.jsx)(T.b,{to:"/login",children:Object(l.jsx)("span",{className:n,children:"Login"})}),Object(l.jsx)(T.b,{to:"/signup",children:Object(l.jsx)("span",{className:n,children:"Sign up"})})]}),Object(l.jsx)(D,{}),Object(l.jsxs)("div",{className:"flex bg-white h-screen",children:[Object(l.jsx)("div",{className:"flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"text-3xl font-semibold text-gray-800 md:text-4xl",children:["Personal finance for ",Object(l.jsx)("span",{className:"text-indigo-600",children:"You"})]}),Object(l.jsx)("p",{className:"mt-2 text-sm text-gray-500 md:text-base",children:"This application would connect all finances into one covinient dashboard, from which you can start shaping your personal finace"}),Object(l.jsx)("div",{className:"flex justify-center lg:justify-start mt-6",children:Object(l.jsx)(T.b,{to:"/login",children:Object(l.jsx)("span",{className:"px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800",children:"Get Started"})})})]})}),Object(l.jsx)("div",{className:"hidden lg:block lg:w-1/2 ",children:Object(l.jsx)("div",{className:"h-full object-cover bg-hero-pattern",children:Object(l.jsx)("div",{className:"h-full bg-black opacity-25"})})})]})]}),Object(l.jsxs)(k.b,{path:"*",children:[Object(l.jsx)("nav",{className:c,children:Object(l.jsx)(T.b,{to:"/",children:Object(l.jsx)("div",{className:n,children:"Home"})})}),Object(l.jsx)(o,{})]})]})}):Object(l.jsxs)(T.a,{children:[Object(l.jsxs)("nav",{className:c,children:[Object(l.jsx)("img",{className:"w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden",src:"https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"}),Object(l.jsx)("span",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center",children:t.username}),Object(l.jsx)(T.b,{to:"/transactions",children:Object(l.jsx)("span",{className:n,children:"Transactions"})}),Object(l.jsx)(T.b,{to:"/accounts",children:Object(l.jsx)("span",{className:n,children:"Accounts"})}),Object(l.jsx)(T.b,{to:"/",children:Object(l.jsx)("span",{className:n,children:"Home"})}),Object(l.jsx)("div",{className:"block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"}),Object(l.jsxs)("span",{className:n,children:[Object(l.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Object(l.jsx)(B,{})]})]}),Object(l.jsxs)(k.d,{children:[Object(l.jsx)(k.b,{path:"/transactions",children:Object(l.jsx)(E,{})}),Object(l.jsx)(k.b,{path:"/accounts",children:Object(l.jsx)(P,{})}),Object(l.jsx)(k.b,{path:"/consent",children:Object(l.jsx)(U,{})}),Object(l.jsx)(k.b,{exact:!0,path:"/",children:Object(l.jsx)("h1",{className:"text-3xl font-semibold text-gray-800 md:text-4xl",children:"Welcome to your budget planner"})}),Object(l.jsxs)(k.b,{path:"*",children:[Object(l.jsx)(T.b,{to:"/",children:"Home"}),Object(l.jsx)(o,{})]})]})]})})},F=n(29),I=n(91),H=n(92),z=Object(F.combineReducers)({user:N,message:L}),J=Object(F.createStore)(z,Object(H.composeWithDevTools)(Object(F.applyMiddleware)(I.a))),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};r.a.render(Object(l.jsx)(s.a,{store:J,children:Object(l.jsx)(M,{})}),document.getElementById("root")),W()}},[[231,1,2]]]);
//# sourceMappingURL=main.fc30046f.chunk.js.map