"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[754],{9525:function(e,i,s){s.d(i,{Z:function(){return u}});var t=s(9439),n=s(2791),r=s(4901),l=s(2685),a=s(9527),o={filter_form:"Filter_filter_form__hoCaU",filter_label:"Filter_filter_label__5ITod",filter_input:"Filter_filter_input__eu2zm",filter_svg:"Filter_filter_svg__xifuw",filter_list:"Filter_filter_list__Cl8l3",filter_reset:"Filter_filter_reset__KbsYD"},c=s(184),u=function(e){var i=e.changeFilter,s=(0,n.useContext)(r.H),u=(0,n.useState)([]),h=(0,t.Z)(u,2),d=h[0],m=h[1],_=(0,n.useState)(!1),p=(0,t.Z)(_,2),f=p[0],x=p[1],g=(0,n.useState)(""),v=(0,t.Z)(g,2),j=v[0],L=v[1],w=function(e){return e.flatMap((function(e){return e.price_per_hour})).filter((function(e,i,s){return s.indexOf(e)===i}))}(d),N=(0,n.useState)(!1),k=(0,t.Z)(N,2),C=k[0],y=k[1],b=(0,n.useState)(""),F=(0,t.Z)(b,2),Z=F[0],M=F[1],B=function(e){return e.flatMap((function(e){return e.experience})).filter((function(e,i,s){return s.indexOf(e)===i}))}(d),P=function(e){e.preventDefault(),x((function(e){return!e}))},S=function(e){e.preventDefault(),y((function(e){return!e}))},E=function(e){e.preventDefault();var t={firstFilter:!s,filter:"experience",value:e.target.innerHTML};M(e.target.innerHTML),i(t),y(!1)},W=function(e){e.preventDefault();var t={firstFilter:!s,filter:"price_per_hour",value:e.target.innerHTML};L(e.target.innerHTML),i(t),x(!1)};return(0,n.useEffect)((function(){(0,l.jM)(a.Fs,(function(e){var i=e.val();m(i)}))}),[]),(0,c.jsx)("div",{className:o.filter,children:(0,c.jsxs)("form",{className:o.filter_form,children:[(0,c.jsxs)("label",{className:o.filter_label,children:["Rating",(0,c.jsx)("input",{className:o.filter_input,type:"text",placeholder:j}),f?(0,c.jsx)("svg",{onClick:P,className:o.filter_svg,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#FBFBFB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,c.jsx)("svg",{onClick:P,className:o.filter_svg,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#FBFBFB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),f&&(0,c.jsx)("ul",{className:o.filter_list,children:w.map((function(e,i){return(0,c.jsx)("li",{onClick:W,children:e},i)}))})]}),(0,c.jsxs)("label",{className:o.filter_label,children:["Experience",(0,c.jsx)("input",{className:o.filter_input,type:"text",placeholder:Z}),C?(0,c.jsx)("svg",{onClick:S,className:o.filter_svg,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#FBFBFB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,c.jsx)("svg",{onClick:S,className:o.filter_svg,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#FBFBFB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),C&&(0,c.jsx)("ul",{className:o.filter_list,children:B.map((function(e,i){return(0,c.jsx)("li",{onClick:E,children:e},i)}))})]}),(0,c.jsx)("button",{className:o.filter_reset,onClick:function(e){L(""),M(""),i(null)},children:"Reset"})]})})}},6796:function(e,i,s){s.d(i,{Z:function(){return E}});var t=s(9439),n=s(2791),r="PsychologistList_psychologist__r7J4K",l="PsychologistList_psychologistLi__ubNrd",a="PsychologistList_psychologist_avatar__+tYoV",o="PsychologistList_card_expirience__q1v-z",c="PsychologistList_card_rating__KMjXP",u="PsychologistList_card_h__0+S6G",h="PsychologistList_card_p__OR7YN",d="PsychologistList_card_name__oWQJF",m="PsychologistList_card_span__WacDT",_="PsychologistList_psychologist_list__rVVqk",p="PsychologistList_loadMore__A0GZU",f="PsychologistList_card_price__Y-caf",x="PsychologistList_card_rating_price__hJiEO",g="PsychologistList_bpyug__+8dcE",v="PsychologistList_card_reviews__mrWSX",j="PsychologistList_review_name__kLlOp",L="PsychologistList_review_rating__bYxhd",w="PsychologistList_review_comment__c1AOn",N="PsychologistList_review_list__cDl6j",k="PsychologistList_review_appointment__mDb0N",C="PsychologistList_card_readMore__5qDWJ",y="PsychologistList_card_svgActive__pT4Mv",b=s(4901),F=s(7694),Z=s(6864),M=s(8642),B=(s(5758),s(5749),s(937)),P=s(184),S=function(e){var i=e.closeModal;(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&i()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[i]);var s=(0,n.useState)("10:00"),r=(0,t.Z)(s,2),l=r[0],a=r[1];return(0,P.jsx)("div",{className:M.Z.modal_backdrop,onClick:i,children:(0,P.jsxs)("div",{className:M.Z.modal_window,children:[(0,P.jsxs)("svg",{className:M.Z.register_icon,onClick:i,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,P.jsx)("path",{d:"M24 8L8 24",stroke:"#191A15",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,P.jsx)("path",{d:"M8 8L24 24",stroke:"#191A15",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,P.jsx)("h2",{className:M.Z.register_h,children:"Make an appointment with a psychologists"}),(0,P.jsx)("p",{className:M.Z.register_p,children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."}),(0,P.jsx)(Z.J9,{initialValues:{email:"",name:"",number:""},validate:function(e){var i={};return e.email||e.name||e.number?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(i.email="Invalid email address"):(i.email="Required",i.name="Required",i.number="Required"),i},onSubmit:function(e,s){F.Notify.success("Great, you have made an appointment."),s.resetForm(),i()},children:function(e){var i=e.values,s=e.errors,t=e.touched,n=e.handleChange,r=e.handleBlur,o=e.handleSubmit,c=e.isSubmitting;return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("form",{className:M.Z.register_form,onSubmit:o,children:[s.name&&t.name&&s.name,(0,P.jsx)("input",{className:M.Z.register_input,placeholder:"Name",type:"text",name:"name",onChange:n,onBlur:r,value:i.name}),s.number&&t.number&&s.number,(0,P.jsxs)("div",{className:M.Z.picker,children:[(0,P.jsx)("input",{className:M.Z.register_input,placeholder:"+380",type:"number",name:"number",onChange:n,onBlur:r,value:i.number}),(0,P.jsx)(B.Z,{onChange:a,value:l})]}),s.email&&t.email&&s.email,(0,P.jsx)("input",{className:M.Z.register_input,placeholder:"Email",type:"email",name:"email",onChange:n,onBlur:r,value:i.email}),(0,P.jsx)("input",{className:M.Z.register_input,placeholder:"Comment",type:"text",name:"comment",onChange:n,onBlur:r,value:i.comment}),s.password&&t.password&&s.password,(0,P.jsx)("button",{className:M.Z.register_btn,type:"submit",disabled:c,children:"Send"})]})})}})]})})},E=function(e){var i=e.psychologists,s=(0,n.useContext)(b.g).isLoggedIn,Z=(0,n.useState)(3),M=(0,t.Z)(Z,2),B=M[0],E=M[1],W=i.slice(0,B),D=(0,n.useState)(""),T=(0,t.Z)(D,2),A=T[0],R=T[1],H=(0,n.useState)(""),q=(0,t.Z)(H,2),O=q[0],Y=q[1],z=(0,n.useState)(!1),J=(0,t.Z)(z,2),I=J[0],V=J[1],G=function(e){var i=e.target.innerHTML;console.log(i),Y("Make an appointment"===i?"appointment":"registration"),V(!0),document.body.classList.add("hidden")};return(0,P.jsxs)("div",{className:r,children:[(0,P.jsx)("ul",{className:_,children:W.map((function(e){return(0,P.jsxs)("li",{className:l,children:[(0,P.jsx)("img",{className:a,src:e.avatar_url,alt:""}),(0,P.jsxs)("svg",{className:y,width:"30",height:"20",viewBox:"0 0 14 14",fill:"#38CD3E",xmlns:"http://www.w3.org/2000/svg",children:[(0,P.jsx)("circle",{cx:"7",cy:"7",r:"7",fill:"#FBFBFB"}),(0,P.jsx)("circle",{cx:"7.00065",cy:"7.00009",r:"4.66667",fillRule:"#38CD3E"})]}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:c,children:[(0,P.jsxs)("p",{className:x,children:[(0,P.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,P.jsx)("g",{clipPath:"url(#clip0_42_1944)",children:(0,P.jsx)("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:"1.2"})}),(0,P.jsx)("defs",{children:(0,P.jsx)("clipPath",{id:"clip0_42_1944",children:(0,P.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}),"Rating:",e.rating]}),(0,P.jsxs)("p",{className:x,children:["Price / 1 hour:",(0,P.jsxs)("span",{className:f,children:[e.price_per_hour,"$"]}),(0,P.jsx)("svg",{onClick:function(){e.name,s||F.Notify.failure("This functionality is available only to authorized users")},width:"26",height:"22",viewBox:"0 0 26 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,P.jsx)("path",{d:"M22.5766 2.99416C22.0233 2.44058 21.3663 2.00144 20.6433 1.70184C19.9202 1.40223 19.1452 1.24802 18.3625 1.24802C17.5798 1.24802 16.8047 1.40223 16.0817 1.70184C15.3586 2.00144 14.7016 2.44058 14.1483 2.99416L13 4.14249L11.8516 2.99416C10.734 1.87649 9.21809 1.2486 7.63747 1.2486C6.05685 1.2486 4.54097 1.87649 3.4233 2.99416C2.30563 4.11183 1.67773 5.62771 1.67773 7.20833C1.67773 8.78895 2.30563 10.3048 3.4233 11.4225L4.57163 12.5708L13 20.9992L21.4283 12.5708L22.5766 11.4225C23.1302 10.8692 23.5693 10.2122 23.869 9.48913C24.1686 8.76605 24.3228 7.99102 24.3228 7.20833C24.3228 6.42563 24.1686 5.65061 23.869 4.92753C23.5693 4.20445 23.1302 3.54748 22.5766 2.99416Z",stroke:"#191A15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),(0,P.jsx)("h2",{className:u,children:"Psychologist"}),(0,P.jsx)("p",{className:d,children:e.name}),(0,P.jsxs)("div",{className:o,children:[(0,P.jsxs)("p",{className:h,children:["Experience:"," ",(0,P.jsx)("span",{className:m,children:e.experience})]}),(0,P.jsxs)("p",{className:h,children:["License:"," ",(0,P.jsx)("span",{className:m,children:e.license})]})]}),(0,P.jsxs)("div",{className:o,children:[(0,P.jsxs)("p",{className:h,children:["Specialization:"," ",(0,P.jsx)("span",{className:m,children:e.specialization})]}),(0,P.jsxs)("p",{className:h,children:["Initial_consultation:"," ",(0,P.jsx)("span",{className:m,children:e.initial_consultation})]})]}),(0,P.jsx)("p",{className:u,children:e.about}),A!=="".concat(e.name," ").concat(e.surname)&&(0,P.jsx)("button",{className:C,onClick:function(){return function(e){R(e)}("".concat(e.name," ").concat(e.surname))},children:"Read more"}),A==="".concat(e.name," ").concat(e.surname)&&(0,P.jsxs)("ul",{className:N,children:[e.reviews.map((function(e){return(0,P.jsxs)("li",{className:v,children:[(0,P.jsx)("div",{className:g}),(0,P.jsxs)("div",{children:[(0,P.jsx)("p",{className:j,children:e.reviewer}),(0,P.jsxs)("p",{className:L,children:[(0,P.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,P.jsx)("g",{clipPath:"url(#clip0_42_1944)",children:(0,P.jsx)("path",{d:"M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z",fill:"#FFC531",stroke:"#FFC531",strokeWidth:"1.2"})}),(0,P.jsx)("defs",{children:(0,P.jsx)("clipPath",{id:"clip0_42_1944",children:(0,P.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}),"   ",e.rating]}),(0,P.jsx)("p",{className:w,children:e.comment})]})]},e.reviewer)})),(0,P.jsx)("button",{onClick:G,className:k,children:"Make an appointment"})]})]})]},e.name)}))}),W.length<32&&(0,P.jsx)("button",{className:p,onClick:function(){E(B+3)},children:"Load More"}),I&&"appointment"===O&&(0,P.jsx)(S,{closeModal:function(e){(null===e||void 0===e?void 0:e.target)===(null===e||void 0===e?void 0:e.currentTarget)&&(V(!1),document.body.classList.remove("hidden"))}})]})}},7395:function(e,i,s){s.r(i);var t=s(9439),n=s(2791),r=s(2685),l=s(9527),a=s(6796),o=s(9525),c=s(4901),u=s(184);i.default=function(e){var i=e.changeFilter,s=(0,n.useContext)(c.g).currentUser.email,h=(0,n.useContext)(c.H),d=(0,n.useState)([]),m=(0,t.Z)(d,2),_=m[0],p=m[1];return(0,n.useEffect)((function(){h&&h.firstFilter&&(0,r.jM)(l.Fs,(function(e){var i;i="price_per_hour"===h.filter?e.val().filter((function(e){return e[h.filter]<=h.value})):e.val().filter((function(e){return e[h.filter].includes(h.value)})),p(i)}))}),[h]),(0,n.useEffect)((function(){(0,r.jM)(l.Fs,(function(e){var i=e.val().filter((function(e){return e.owner&&e.owner.includes(s)}));p(i)}))}),[s]),(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{changeFilter:i}),(0,u.jsx)(a.Z,{psychologists:_})]})}}}]);
//# sourceMappingURL=754.7e4aa3c3.chunk.js.map