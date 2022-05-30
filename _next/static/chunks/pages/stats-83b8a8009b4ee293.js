(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{3397:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return r(7830)}])},9116:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t,r=e.children,s=e.type,c=e.key,a=e.extraClasses;switch(s){case"success":t="bg-blue-500";break;case"warning":t="bg-yellow-300 text-yellow-800";break;default:t="bg-red-500"}var o="text-white text-center p-2 rounded mt-4 ".concat(t," ").concat(a);return(0,n.jsx)("div",{className:o,children:r},c)}},8644:function(e,t,r){"use strict";var n=r(5893),s=r(1664),c=r.n(s);t.Z=function(e){var t=e.href,r=e.children;return(0,n.jsx)(c(),{href:t,children:(0,n.jsx)("a",{className:"underline underline-offset-1 text-blue-700",children:r})})}},8923:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children,r="text-4xl text-green-900 font-semibold "+e.extraClasses;return(0,n.jsx)("h1",{className:r,children:t})}},7830:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(4051),s=r.n(n),c=r(5893),a=r(7294),o=r(3967),i=r(3040),u=r(8923),l=r(8644),d=r(9116),f=r(4491),h=r(6008);function x(e,t,r,n,s,c,a){try{var o=e[c](a),i=o.value}catch(u){return void r(u)}o.done?t(i):Promise.resolve(i).then(n,s)}var m=function(){var e,t=(e=s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={operation:"delete",schema:"productivity_timer",table:"tasks",hash_values:[t]},e.next=3,(0,h.n)(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var c=e.apply(t,r);function a(e){x(c,n,s,a,o,"next",e)}function o(e){x(c,n,s,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function v(e,t,r,n,s,c,a){try{var o=e[c](a),i=o.value}catch(u){return void r(u)}o.done?t(i):Promise.resolve(i).then(n,s)}var p=function(e){var t=e.children;return(0,c.jsx)("th",{className:"border border-slate-300 rounded-top p-4",children:t})},b=function(e){var t=e.children;return(0,c.jsx)("td",{className:"border border-slate-300 p-4",children:t})},j=function(){var e=(0,a.useState)(""),t=e[0],r=e[1],n=(0,a.useContext)(o.S).username,h=(0,a.useContext)(i.S),x=h.tasks,j=h.getAndSetTasks,w=function(){var e,t=(e=s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(""),confirm("Are you sure you want to delete this row?")){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,m(t);case 7:if(200!==e.sent.response.status){e.next=11;break}return j(n),e.abrupt("return");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:r("Whoops, something went wrong :(");case 17:case"end":return e.stop()}}),e,null,[[4,13]])})),function(){var t=this,r=arguments;return new Promise((function(n,s){var c=e.apply(t,r);function a(e){v(c,n,s,a,o,"next",e)}function o(e){v(c,n,s,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,c.jsxs)("div",{children:[!n&&(0,c.jsxs)(d.Z,{type:"warning",extraClasses:"mb-12",children:["Please ",(0,c.jsx)(l.Z,{href:"/login",children:"log in"})," or"," ",(0,c.jsx)(l.Z,{href:"/signup",children:"create an account"})," to use Super Productivity Timer"]}),(0,c.jsx)(u.Z,{extraClasses:"mb-6 text-center mt-8",children:"Stats"}),t&&(0,c.jsx)("p",{className:"text-center text-red-500 mb-8",children:t}),(0,c.jsx)("div",{className:"overflow-x-auto ",children:(0,c.jsxs)("table",{className:"table-auto border-collapse border border-slate-400 w-full sm:w-3/4 mx-auto",children:[(0,c.jsx)("thead",{className:"bg-slate-100 text-left",children:(0,c.jsxs)("tr",{children:[(0,c.jsx)(p,{children:"Task"}),(0,c.jsx)(p,{children:"Total Time"}),(0,c.jsx)(p,{children:"Last Updated"}),(0,c.jsx)(p,{children:"Start Date"}),(0,c.jsx)(p,{children:"Delete"})]})}),(0,c.jsx)("tbody",{children:x.length>0&&x.map((function(e){return(0,c.jsxs)("tr",{children:[(0,c.jsx)(b,{children:e.task_name}),(0,c.jsx)(b,{children:(0,f.dP)(e.time_in_seconds)}),(0,c.jsx)(b,{children:(0,f.Td)(e.__updatedtime__)}),(0,c.jsx)(b,{children:(0,f.Td)(e.__createdtime__)}),(0,c.jsx)(b,{children:(0,c.jsx)("button",{onClick:function(){return w(e.id)},className:"bg-red-500 text-white rounded px-3 py-1",children:"x"})})]},e.id)}))})]})})]})}},4491:function(e,t,r){"use strict";r.d(t,{Td:function(){return c},dP:function(){return s},mr:function(){return a}});var n=3600,s=function(e){var t=a(e),r=t.formattedHours,n=t.formattedMins,s=t.formattedSecs;return"".concat(r,"h ").concat(n,"m ").concat(s,"s")},c=function(e){return new Date(e).toLocaleDateString()},a=function(e){var t=i(e),r=t.hours,n=t.mins,s=t.secs;return{formattedHours:o(r),formattedMins:o(n),formattedSecs:o(s)}},o=function(e){return e<10?"0".concat(e):"".concat(e)},i=function(e){return{hours:u(e),mins:l(e),secs:d(e)}},u=function(e){return Math.floor(e/n)},l=function(e){return Math.floor(e%n/60)},d=function(e){return Math.floor(e%n%60)}}},function(e){e.O(0,[774,888,179],(function(){return t=3397,e(e.s=t);var t}));var t=e.O();_N_E=t}]);