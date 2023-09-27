"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[743],{9357:function(e,t,n){n.d(t,{Z:function(){return Q}});var r=n(5861),a=n(4942),i=n(1413),o=n(9439),l=n(4687),s=n.n(l),c=n(2791),d={section:"CaloriesCalc_section__WB2nl",heading:"CaloriesCalc_heading__fAzfD",formdiv:"CaloriesCalc_formdiv__+a6k+",calcform:"CaloriesCalc_calcform__iDf5l",tabs:"CaloriesCalc_tabs__MkAfR",positionWrapper:"CaloriesCalc_positionWrapper__+O-50"},u=n(3855),h=n(5228),g=n(3896),p=n(4479),x=n(765),m=n(5523),f=n(7133),b=n(2700),_=n(5193),v=n(9095),j=n(2739),W=n(627),Z=n(4554),y=n(6151),C=n(1087),F="modal_modalBox__UnNX8",B="modal_closeButton__hYa4+",A="modal_backButtonMobbile__r5QHQ",k="modal_back__V8JNM",N="modal_modalTitle__3zeL5",S="modal_totalCaloriesNumber__bUxLg",L="modal_totalCalories__U80Ut",w="modal_notEat__P-szP",T="modal_hr__CzLPQ",V="modal_text2__9c6ek",I="modal_notEatItem__hXM4C",z="modal_buttonWrapper__NZCpm",H="modal_button__GRC0s",D=n(184),M=function(e){var t=e.handleClose,n=e.modalState,r=(0,_.Z)("(max-width: 480px)");return(0,D.jsx)(v.Z,{style:{top:r&&83},open:n.open,onClose:t,closeAfterTransition:!0,slots:{backdrop:j.Z},slotProps:{backdrop:{timeout:500,sx:{top:r&&83,backgroundColor:"#2121211f"}}},children:(0,D.jsx)(W.Z,{in:n.open,children:(0,D.jsxs)(Z.Z,{children:[(0,D.jsx)("div",{className:A,children:(0,D.jsx)("span",{className:k,onClick:t,children:"\u23ce"})}),(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)("span",{className:B,onClick:t,children:"\u2715"}),(0,D.jsxs)("p",{className:N,children:["Your recommended daily",(0,D.jsx)("br",{})," calorie intake is"]}),(0,D.jsxs)("b",{className:L,children:[(0,D.jsxs)("span",{className:S,children:[Math.round(n.totalCalories)," "]}),"kcal"]}),(0,D.jsxs)("div",{className:w,children:[(0,D.jsx)("hr",{className:T}),(0,D.jsx)("b",{className:V,children:"Foods you should not eat"}),(0,D.jsx)("ol",{children:n.foodNotToEat.slice(0).map((function(e){return(0,D.jsx)("li",{className:I,children:e.title},e._id)}))}),(0,D.jsx)(C.rU,{to:"register",className:z,children:(0,D.jsx)(y.Z,{className:H,variant:"contained",children:"Start losing weight"})})]})]})]})})})},P=n(1887),R=n(5128),E=n(2260),U=n(5168),O=n(7834),Q=function(){var e=(0,O.a)().loggedIn,t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.calculate.isHeightValid})),l=(0,u.v9)((function(e){return e.calculate.isAgeValid})),_=(0,u.v9)((function(e){return e.calculate.isCurrentValid})),v=(0,u.v9)((function(e){return e.calculate.isDesiredValid})),j=(0,u.v9)((function(e){return e.calculate.isBloodValid})),W=!!(n&&l&&_&&v&&j),Z=(0,u.v9)((function(e){return e.calculate.isHeightFeetValid})),y=(0,u.v9)((function(e){return e.calculate.isHeightInchValid})),C=(0,u.v9)((function(e){return e.calculate.isCurrentLbsValid})),F=(0,u.v9)((function(e){return e.calculate.isDesiredLbsValid})),B=!!(Z&&y&&l&&C&&F&&j),A=(0,u.v9)((function(e){return e.calCalories.cals.value})),k=(0,c.useState)({weight:!1,age:!1,currentWeight:!1,desiredWeight:!1,bloodType:!1}),N=(0,o.Z)(k,2),S=N[0],L=N[1],w=(0,c.useState)(0),T=(0,o.Z)(w,2),V=T[0],I=T[1],z=(0,c.useState)(null),H=(0,o.Z)(z,2),Q=H[0],q=H[1],J=(0,c.useState)({open:!1,totalCalories:null,foodNotToEat:[]}),K=(0,o.Z)(J,2),X=K[0],Y=K[1],G=function(e){Y({open:!0,totalCalories:e.totalCalories,foodNotToEat:e.notAllowedFood})},$=(0,c.useState)({height:A.height,age:A.age,currentWeight:A.currentWeight,desiredWeight:A.desiredWeight,bloodType:A.bloodType,heightFeet:A.heightFeet,heightInch:A.heightInch,currentWeightLbs:A.currentWeightLbs,desiredWeightLbs:A.desiredWeightLbs}),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],re=function(e){var n,r,o=e.target,l=o.name,s=o.value;switch(ne((0,i.Z)((0,i.Z)({},te),{},(0,a.Z)({},l,s))),l){case"height":t((0,P.Sg)({fieldValue:s}));break;case"heightFeet":t((0,P.p_)({fieldValue:s}));break;case"heightInch":t((0,P.V)({fieldValue:s}));break;case"age":t((0,P._f)({fieldValue:s}));break;case"currentWeight":t((0,P.$1)({fieldValue:s}));break;case"currentWeightLbs":t((0,P.z8)({fieldValue:s}));break;case"desiredWeight":t((0,P.mA)({fieldValue:s}));break;case"desiredWeightLbs":t((0,P.Kv)({fieldValue:s}));break;case"bloodType":t((0,P.r4)({fieldValue:s}))}if(1===V){var c=te.heightFeet,d=te.heightInch,u=te.currentWeightLbs,h=te.desiredWeightLbs;ne((function(e){return(0,i.Z)((0,i.Z)({},e),{},{height:2.54*(12*c+1*d),currentWeight:.454*u,desiredWeight:.454*h})}))}q(l),n=l,r=!0,L((0,i.Z)((0,i.Z)({},S),{},(0,a.Z)({},n,r)))},ae=function(){var n=(0,r.Z)(s().mark((function n(r){var a,o,l,c,d,u,h,g,p,x,m,f,b,_,v,j;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),1!==V){n.next=5;break}return a=te.heightFeet,o=te.heightInch,l=te.currentWeightLbs,c=te.desiredWeightLbs,n.next=5,ne((function(e){return(0,i.Z)((0,i.Z)({},e),{},{height:2.54*(12*a+1*o),currentWeight:.454*l,desiredWeight:.454*c})}));case 5:return d=te.height,u=te.age,h=te.currentWeight,g=te.desiredWeight,p=te.bloodType,t((0,R.KU)({height:d,age:u,currentWeight:h,desiredWeight:g,bloodType:p})),x={currentWeight:h,height:d,age:u,desiredWeight:g,bloodType:p},n.prev=8,n.next=11,t((0,U.Ri)(x));case 11:if(m=n.sent,f=m.payload.data,!e){n.next=35;break}b=0,n.t0=p,n.next="A"===n.t0?18:"B"===n.t0?20:"AB"===n.t0?22:"O"===n.t0?24:26;break;case 18:return b=1,n.abrupt("break",28);case 20:return b=2,n.abrupt("break",28);case 22:return b=3,n.abrupt("break",28);case 24:return b=4,n.abrupt("break",28);case 26:return b=1,n.abrupt("break",28);case 28:return _="",_="M",v={height:d,age:u,bloodType:b,currentWeight:h,desiredWeight:g,totalCalories:f.totalCalories,measurementType:_,originalWeight:0},n.next=33,t((0,U.n4)(v));case 33:j=n.sent,console.log(j);case 35:e||G(f),n.next=41;break;case 38:n.prev=38,n.t1=n.catch(8),console.error("returned Error",n.t1.message);case 41:case"end":return n.stop()}}),n,null,[[8,38]])})));return function(e){return n.apply(this,arguments)}}();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:d.positionWrapper,children:(0,D.jsx)("div",{className:d.section,children:(0,D.jsxs)("div",{className:d.calcWrapper,children:[(0,D.jsx)("h1",{className:d.heading,children:"Calculate your daily calorie"}),(0,D.jsx)("h1",{className:d.heading,children:"intake right now"}),(0,D.jsx)("div",{className:d.tabs,children:(0,D.jsxs)(h.Z,{orientation:"horizontal",value:V,onChange:function(e,t){I(t)},indicatorColor:"transparent",sx:{"& button":{marginTop:"25px",paddingTop:"5px",width:"100px",padding:"1rem",margin:"2px",borderRadius:"30px",fontFamily:"Verdana",fontSize:"9px",fontWeight:700,textTransform:"capitalize",border:"solid #fc842d"},"& button:focus":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"},"& button:hover":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}},children:[(0,D.jsx)(g.Z,{label:"Metric"}),(0,D.jsx)(g.Z,{label:"Standard US"})]})}),0===V&&(0,D.jsxs)("form",{className:d.calcform,onSubmit:ae,children:[(0,D.jsxs)("div",{className:d.formdiv,children:[(0,D.jsx)(b.Z,{sx:{"& .MuiOutlinedInput-root.Mui-focused":{"& > fieldset":{borderColor:"orange"}},fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"height"!==Q||n?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:122,max:214}},label:"Height *",variant:"standard",onChange:re,value:te.height,name:"height",onFocus:function(){return q("height")},onBlur:function(){return q(null)},error:"height"===Q&&!n}),(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==Q||l?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age *",variant:"standard",onChange:re,value:te.age,name:"age",onFocus:function(){return q("age")},onBlur:function(){return q(null)},error:"age"===Q&&!l}),(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeight"!==Q||_?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight *",variant:"standard",onChange:re,value:te.currentWeight,name:"currentWeight",onFocus:function(){return q("currentWeight")},onBlur:function(){return q(null)},error:"currentWeight"===Q&&!_})]}),(0,D.jsxs)("div",{className:d.formdiv,children:[(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeight"!==Q||v?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight *",variant:"standard",onChange:re,value:te.desiredWeight,name:"desiredWeight",onFocus:function(){return q("desiredWeight")},onBlur:function(){return q(null)},error:"age"===Q&&!v}),(0,D.jsx)(f.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,D.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:te.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:re,onFocus:function(){return q("bloodType")},onBlur:function(){return q(null)},children:[(0,D.jsx)(m.Z,{value:"A",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"1"}),(0,D.jsx)(m.Z,{value:"B",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"2"}),(0,D.jsx)(m.Z,{value:"AB",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"3"}),(0,D.jsx)(m.Z,{value:"O",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"4"})]})]}),(0,D.jsx)(E.Z,{className:"customButton",color:"orange",size:"wide",disabled:!W,children:"Start losing weight"})]}),1===V&&(0,D.jsxs)("form",{className:d.calcform,onSubmit:ae,children:[(0,D.jsxs)("div",{className:d.formdiv,children:[(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightFeet"!==Q||Z?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",label:"Height Feet *",variant:"standard",onChange:re,value:te.heightFeet,name:"heightFeet",onFocus:function(){return q("heightFeet")},onBlur:function(){return q(null)},error:"heightFeet"===Q&&!Z}),(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightInch"!==Q||y?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",label:"Height Inch *",variant:"standard",onChange:re,value:te.heightInch,name:"heightInch",onFocus:function(){return q("heightInch")},onBlur:function(){return q(null)},error:"heightInch"===Q&&!y}),(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==Q||l?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age *",variant:"standard",onChange:re,value:te.age,name:"age",onFocus:function(){return q("age")},onBlur:function(){return q(null)},error:"age"===Q&&!l})]}),(0,D.jsxs)("div",{className:d.formdiv,children:[(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeightLbs"!==Q||C?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight Lbs *",variant:"standard",onChange:re,value:te.currentWeightLbs,name:"currentWeightLbs",onFocus:function(){return q("currentWeightLbs")},onBlur:function(){return q(null)},error:"currentWeightLbs"===Q&&!C}),(0,D.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeightLbs"!==Q||F?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight Lbs *",variant:"standard",onChange:re,value:te.desiredWeightLbs,name:"desiredWeightLbs",onFocus:function(){return q("desiredWeightLbs")},onBlur:function(){return q(null)},error:"desiredWeightLbs"===Q&&!F}),(0,D.jsx)(f.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,D.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:te.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:re,onFocus:function(){return q("bloodType")},onBlur:function(){return q(null)},children:[(0,D.jsx)(m.Z,{value:"A",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"A"}),(0,D.jsx)(m.Z,{value:"B",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"B"}),(0,D.jsx)(m.Z,{value:"AB",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"AB"}),(0,D.jsx)(m.Z,{value:"O",control:(0,D.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"O"})]})]}),(0,D.jsx)(E.Z,{className:"customButton",color:"orange",size:"wide",disabled:!B,children:"Start losing weight"})]})]})})}),(0,D.jsx)(M,{handleClose:function(){Y((function(e){return(0,i.Z)((0,i.Z)({},e),{},{open:!1})})),setTimeout((function(){Y({open:!1,totalCalories:null,foodNotToEat:[]})}),250)},modalState:X})]})}},9198:function(e,t,n){var r=n(2007),a=n(184),i=function(e){var t=e.children,n=e.className;return(0,a.jsx)("div",{className:n,children:t})};i.propTopes={children:r.node.isRequired,className:r.string},t.Z=i},2260:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=n(4942),i=n(5987),o={Button:"CustomButton_Button__wxqQ9",orange:"CustomButton_orange__JhdH3",white:"CustomButton_white__PAugr",disabled:"CustomButton_disabled__zn-Hl",wide:"CustomButton_wide__0zS2P",customButton:"CustomButton_customButton__PS969"},l=n(6151),s=n(3733),c=n(184),d=["color","size","children","disabled","className","style"],u=function(e){var t=e.color,n=e.size,u=e.children,h=e.disabled,g=e.className,p=e.style,x=(0,i.Z)(e,d);return(0,c.jsx)(l.Z,(0,r.Z)((0,r.Z)({className:(0,s.Z)(o.Button,o[t],o[n],(0,a.Z)({},o.disabled,h),g),style:p,type:"submit",disabled:h},x),{},{children:u}))}}}]);
//# sourceMappingURL=743.50940442.chunk.js.map