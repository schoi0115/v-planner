(this["webpackJsonpvacation-planner"]=this["webpackJsonpvacation-planner"]||[]).push([[0],{15:function(e,t,c){},24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(16),r=c.n(a),s=(c(24),c(15),c(3)),l=c(10),j=c(2);var i=function(){var e="http://localhost:3000/home";console.log(e);var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then(r)}),[]),console.log(a),Object(j.jsxs)("div",{className:"backgroundPic",children:[Object(j.jsx)("h3",{children:" ."}),Object(j.jsx)("h1",{className:"title",children:"Shawn \u2661 Barbies Planner"})]})};var d=function(){return Object(j.jsx)("div",{className:"next",children:Object(j.jsx)("form",{children:Object(j.jsx)("input",{placeholder:"Where are you going?"})})})},b=c(19);c(26);var o=function(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],d=s[1];return Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)("div",{className:"calendar-container",children:Object(j.jsx)(b.a,{className:"calendar-body",onChange:a,value:c,selectRange:!0,nextLabel:"month>",nextAriaLabel:"Go to next month",next2Label:"year>",next2AriaLabel:"Go to next year",prevLabel:"<month",prevAriaLabel:"Go to prev month",prev2Label:"<year",prev2AriaLabel:"Go to prev year"})}),c.length>0?Object(j.jsxs)("p",{className:"calendar-select-dates",children:[Object(j.jsx)("span",{children:"Start: "}),c[0].toDateString(),Object(j.jsx)("span",{children:" ~ End:"})," ",c[1].toDateString(),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"add-event-btn",onClick:function(){d(!i)},children:i?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"add-event-btn",children:"Add Event"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Location"}),Object(j.jsx)("input",{placeholder:"Car / Flight / Train"}),Object(j.jsx)("input",{placeholder:"Hello?"}),Object(j.jsx)("input",{placeholder:"hm ...."})]})]}):Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"add-event-btn",children:"Add Event"})})})]}):Object(j.jsx)("p",{children:Object(j.jsxs)("span",{className:"calendar-select-dates-defualt",children:["Selected Date: ",c.toDateString()]})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Select Your Vacation Date!"})})})]})},h=c(8);var x=function(){return Object(j.jsxs)("div",{className:"nav-container",children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)(h.b,{className:"margin",to:"/v-planner",children:"Home"}),Object(j.jsx)(h.b,{className:"margin",to:"/calendar",children:"Calendar"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(h.b,{to:"/next",children:Object(j.jsx)("a",{className:"marginNext",children:"Next"})})})]})};var O=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"bgcolor",children:[Object(j.jsx)(x,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/v-planner",children:Object(j.jsx)(i,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/next",children:Object(j.jsx)(d,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/calendar",children:Object(j.jsx)(o,{})})]})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};r.a.render(Object(j.jsx)(h.a,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.febe3989.chunk.js.map