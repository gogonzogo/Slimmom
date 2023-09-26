"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[743],{9357:function(e,t,n){n.d(t,{Z:function(){return q}});var a=n(5861),i=n(4942),r=n(1413),l=n(9439),o=n(4687),s=n.n(o),c=n(2791),d={section:"CaloriesCalc_section__WB2nl",heading:"CaloriesCalc_heading__fAzfD",formdiv:"CaloriesCalc_formdiv__+a6k+",calcform:"CaloriesCalc_calcform__iDf5l",tabs:"CaloriesCalc_tabs__MkAfR",positionWrapper:"CaloriesCalc_positionWrapper__+O-50"},u=n(3855),h=n(5228),p=n(3896),g=n(4479),x=n(765),m=n(5523),f=n(7133),b=n(2700),v=n(5193),j=n(9095),Z=n(2739),_=n(627),C=n(4554),W=n(6151),y=n(1087),F="modal_modalBox__UnNX8",k="modal_closeButton__hYa4+",A="modal_backButtonMobbile__r5QHQ",B="modal_back__V8JNM",N="modal_modalTitle__3zeL5",S="modal_totalCaloriesNumber__bUxLg",w="modal_totalCalories__U80Ut",L="modal_notEat__P-szP",T="modal_hr__CzLPQ",V="modal_text2__9c6ek",I="modal_notEatItem__hXM4C",D="modal_buttonWrapper__NZCpm",z="modal_button__GRC0s",P=n(184),H=function(e){var t=e.handleClose,n=e.modalState,a=(0,v.Z)("(max-width: 480px)");return(0,P.jsx)(j.Z,{style:{top:a&&83},open:n.open,onClose:t,closeAfterTransition:!0,slots:{backdrop:Z.Z},slotProps:{backdrop:{timeout:500,sx:{top:a&&83,backgroundColor:"#2121211f"}}},children:(0,P.jsx)(_.Z,{in:n.open,children:(0,P.jsxs)(C.Z,{children:[(0,P.jsx)("div",{className:A,children:(0,P.jsx)("span",{className:B,onClick:t,children:"\u23ce"})}),(0,P.jsxs)("div",{className:F,children:[(0,P.jsx)("span",{className:k,onClick:t,children:"\u2715"}),(0,P.jsxs)("p",{className:N,children:["Your recommended daily",(0,P.jsx)("br",{})," calorie intake is"]}),(0,P.jsxs)("b",{className:w,children:[(0,P.jsxs)("span",{className:S,children:[Math.round(n.totalCalories)," "]}),"kcal"]}),(0,P.jsxs)("div",{className:L,children:[(0,P.jsx)("hr",{className:T}),(0,P.jsx)("b",{className:V,children:"Foods you should not eat"}),(0,P.jsx)("ol",{children:n.foodNotToEat.slice(0).map((function(e){return(0,P.jsx)("li",{className:I,children:e.title},e._id)}))}),(0,P.jsx)(y.rU,{to:"register",className:D,children:(0,P.jsx)(W.Z,{className:z,variant:"contained",children:"Start losing weight"})})]})]})]})})})},M=n(8441),R=n(1887),E=n(5128),O=n(2260),U=n(5168),Q=n(7834),q=function(){var e=(0,Q.a)().loggedIn,t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.calculate.isHeightValid})),o=(0,u.v9)((function(e){return e.calculate.isAgeValid})),v=(0,u.v9)((function(e){return e.calculate.isCurrentValid})),j=(0,u.v9)((function(e){return e.calculate.isDesiredValid})),Z=(0,u.v9)((function(e){return e.calculate.isBloodValid})),_=!!(n&&o&&v&&j&&Z),C=(0,u.v9)((function(e){return e.calculate.isHeightFeetValid})),W=(0,u.v9)((function(e){return e.calculate.isHeightInchValid})),y=(0,u.v9)((function(e){return e.calculate.isCurrentLbsValid})),F=(0,u.v9)((function(e){return e.calculate.isDesiredLbsValid})),k=!!(C&&W&&o&&y&&F&&Z),A=(0,u.v9)((function(e){return e.calCalories.cals.value})),B=(0,c.useState)({weight:!1,age:!1,currentWeight:!1,desiredWeight:!1,bloodType:!1}),N=(0,l.Z)(B,2),S=N[0],w=N[1],L=(0,c.useState)(0),T=(0,l.Z)(L,2),V=T[0],I=T[1],D=(0,c.useState)(null),z=(0,l.Z)(D,2),q=z[0],G=z[1],J=(0,u.v9)((function(e){return e.calculate.validationReqs})),K=(0,c.useState)({open:!1,totalCalories:null,foodNotToEat:[]}),X=(0,l.Z)(K,2),Y=X[0],$=X[1],ee=function(e){$({open:!0,totalCalories:e.totalCalories,foodNotToEat:e.notAllowedFood})},te=(0,c.useState)({height:A.height,age:A.age,currentWeight:A.currentWeight,desiredWeight:A.desiredWeight,bloodType:A.bloodType,heightFeet:A.heightFeet,heightInch:A.heightInch,currentWeightLbs:A.currentWeightLbs,desiredWeightLbs:A.desiredWeightLbs}),ne=(0,l.Z)(te,2),ae=ne[0],ie=ne[1],re=function(e){var n,a,l=e.target,o=l.name,s=l.value;switch(ie((0,r.Z)((0,r.Z)({},ae),{},(0,i.Z)({},o,s))),o){case"height":t((0,R.Sg)({fieldValue:s}));break;case"heightFeet":t((0,R.p_)({fieldValue:s}));break;case"heightInch":t((0,R.V)({fieldValue:s}));break;case"age":t((0,R._f)({fieldValue:s}));break;case"currentWeight":t((0,R.$1)({fieldValue:s}));break;case"currentWeightLbs":t((0,R.z8)({fieldValue:s}));break;case"desiredWeight":t((0,R.mA)({fieldValue:s}));break;case"desiredWeightLbs":t((0,R.Kv)({fieldValue:s}));break;case"bloodType":t((0,R.r4)({fieldValue:s}))}if(1===V){var c=ae.heightFeet,d=ae.heightInch,u=ae.currentWeightLbs,h=ae.desiredWeightLbs;ie((function(e){return(0,r.Z)((0,r.Z)({},e),{},{height:2.54*(12*c+1*d),currentWeight:.454*u,desiredWeight:.454*h})}))}G(o),n=o,a=!0,w((0,r.Z)((0,r.Z)({},S),{},(0,i.Z)({},n,a)))},le=function(){var n=(0,a.Z)(s().mark((function n(a){var i,l,o,c,d,u,h,p,g,x,m,f,b,v,j,Z;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),1!==V){n.next=5;break}return i=ae.heightFeet,l=ae.heightInch,o=ae.currentWeightLbs,c=ae.desiredWeightLbs,n.next=5,ie((function(e){return(0,r.Z)((0,r.Z)({},e),{},{height:2.54*(12*i+1*l),currentWeight:.454*o,desiredWeight:.454*c})}));case 5:return d=ae.height,u=ae.age,h=ae.currentWeight,p=ae.desiredWeight,g=ae.bloodType,t((0,E.KU)({height:d,age:u,currentWeight:h,desiredWeight:p,bloodType:g})),x={currentWeight:h,height:d,age:u,desiredWeight:p,bloodType:g},n.prev=8,n.next=11,t((0,U.Ri)(x));case 11:if(m=n.sent,f=m.payload.data,!e){n.next=35;break}b=0,n.t0=g,n.next="A"===n.t0?18:"B"===n.t0?20:"AB"===n.t0?22:"O"===n.t0?24:26;break;case 18:return b=1,n.abrupt("break",28);case 20:return b=2,n.abrupt("break",28);case 22:return b=3,n.abrupt("break",28);case 24:return b=4,n.abrupt("break",28);case 26:return b=1,n.abrupt("break",28);case 28:return v="",v="M",j={height:d,age:u,bloodType:b,currentWeight:h,desiredWeight:p,totalCalories:f.totalCalories,measurementType:v,originalWeight:0},n.next=33,t((0,U.n4)(j));case 33:Z=n.sent,console.log(Z);case 35:e||ee(f),n.next=41;break;case 38:n.prev=38,n.t1=n.catch(8),console.error("returned Error",n.t1.message);case 41:case"end":return n.stop()}}),n,null,[[8,38]])})));return function(e){return n.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:d.positionWrapper,children:(0,P.jsx)("div",{className:d.section,children:(0,P.jsxs)("div",{className:d.calcWrapper,children:[(0,P.jsx)("h1",{className:d.heading,children:"Calculate your daily calorie"}),(0,P.jsx)("h1",{className:d.heading,children:"intake right now"}),(0,P.jsx)("div",{className:d.tabs,children:(0,P.jsxs)(h.Z,{orientation:"vertical",value:V,onChange:function(e,t){I(t)},indicatorColor:"transparent",sx:{"& button":{marginTop:"25px",paddingTop:"15px",width:"182px",padding:"1rem",margin:"2px",height:"44px",borderRadius:"30px",fontFamily:"Verdana",fontSize:"14px",fontWeight:700,textTransform:"capitalize",backgroundColor:"#fc842d",border:"solid #fc842d"},"& button:focus":{backgroundColor:"#ffffff",border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"},"& button:hover":{backgroundColor:"#ffffff",color:"#fc842d",border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}},children:[(0,P.jsx)(p.Z,{label:"Metric"}),(0,P.jsx)(p.Z,{label:"Standard US"})]})}),0===V&&(0,P.jsxs)("form",{className:d.calcform,onSubmit:le,children:[(0,P.jsxs)("div",{className:d.formdiv,children:[(0,P.jsx)(b.Z,{sx:{"& .MuiOutlinedInput-root.Mui-focused":{"& > fieldset":{borderColor:"orange"}},fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:122,max:214}},label:"Height *",variant:"standard",onChange:re,value:ae.height,name:"height",onFocus:function(){return G("height")},onBlur:function(){return G(null)}}),"height"===q&&(0,P.jsx)(M.Z,{validationData:J[q],visible:q}),(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age *",variant:"standard",onChange:re,value:ae.age,name:"age",onFocus:function(){return G("age")},onBlur:function(){return G(null)}}),"age"===q&&(0,P.jsx)(M.Z,{validationData:J[q],visible:q}),(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight *",variant:"standard",onChange:re,value:ae.currentWeight,name:"currentWeight",onFocus:function(){return G("currentWeight")},onBlur:function(){return G(null)}}),"currentWeight"===q&&(0,P.jsx)(M.Z,{validationData:J[q],visible:q})]}),(0,P.jsxs)("div",{className:d.formdiv,children:[(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight *",variant:"standard",onChange:re,value:ae.desiredWeight,name:"desiredWeight",onFocus:function(){return G("desiredWeight")},onBlur:function(){return G(null)}}),"desiredWeight"===q&&(0,P.jsx)(M.Z,{validationData:J[q],visible:q}),(0,P.jsx)(f.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,P.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ae.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:re,onFocus:function(){return G("bloodType")},onBlur:function(){return G(null)},children:[(0,P.jsx)(m.Z,{value:"A",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"1"}),(0,P.jsx)(m.Z,{value:"B",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"2"}),(0,P.jsx)(m.Z,{value:"AB",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"3"}),(0,P.jsx)(m.Z,{value:"O",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"4"})]}),"bloodType"===q&&(0,P.jsx)(M.Z,{validationData:J[q],visible:q})]}),(0,P.jsx)(O.Z,{className:d.customButton,color:"orange",size:"wide",disabled:!_,children:"Start losing weight"})]}),1===V&&(0,P.jsxs)("form",{className:d.calcform,onSubmit:le,children:[(0,P.jsxs)("div",{className:d.formdiv,children:[(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",label:"Height Feet *",variant:"standard",onChange:re,value:ae.heightFeet,name:"heightFeet",onFocus:function(){return G("heightFeet")},onBlur:function(){return G(null)}}),(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",label:"Height Inch *",variant:"standard",onChange:re,value:ae.heightInch,name:"heightInch",onFocus:function(){return G("heightInch")},onBlur:function(){return G(null)}}),(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age *",variant:"standard",onChange:re,value:ae.age,name:"age",onFocus:function(){return G("age")},onBlur:function(){return G(null)}})]}),(0,P.jsxs)("div",{className:d.formdiv,children:[(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight Lbs *",variant:"standard",onChange:re,value:ae.currentWeightLbs,name:"currentWeightLbs",onFocus:function(){return G("currentWeightLbs")},onBlur:function(){return G(null)}}),(0,P.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight Lbs *",variant:"standard",onChange:re,value:ae.desiredWeightLbs,name:"desiredWeightLbs",onFocus:function(){return G("desiredWeightLbs")},onBlur:function(){return G(null)}}),(0,P.jsx)(f.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,P.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ae.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:re,onFocus:function(){return G("bloodType")},onBlur:function(){return G(null)},children:[(0,P.jsx)(m.Z,{value:"A",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"A"}),(0,P.jsx)(m.Z,{value:"B",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"B"}),(0,P.jsx)(m.Z,{value:"AB",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"AB"}),(0,P.jsx)(m.Z,{value:"O",control:(0,P.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"O"})]})]}),(0,P.jsx)(M.Z,{validationData:J[q],visible:q}),(0,P.jsx)(O.Z,{color:"orange",size:"wide",disabled:!k,children:"Start losing weight"})]})]})})}),(0,P.jsx)(H,{handleClose:function(){$((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!1})})),setTimeout((function(){$({open:!1,totalCalories:null,foodNotToEat:[]})}),250)},modalState:Y})]})}},9198:function(e,t,n){var a=n(2007),i=n(184),r=function(e){var t=e.children,n=e.className;return(0,i.jsx)("div",{className:n,children:t})};r.propTopes={children:a.node.isRequired,className:a.string},t.Z=r},2260:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(1413),i=n(4942),r=n(5987),l={Button:"CustomButton_Button__wxqQ9",orange:"CustomButton_orange__JhdH3",white:"CustomButton_white__PAugr",disabled:"CustomButton_disabled__zn-Hl",wide:"CustomButton_wide__0zS2P"},o=n(6151),s=n(3733),c=n(184),d=["color","size","children","disabled","className","style"],u=function(e){var t=e.color,n=e.size,u=e.children,h=e.disabled,p=e.className,g=e.style,x=(0,r.Z)(e,d);return(0,c.jsx)(o.Z,(0,a.Z)((0,a.Z)({className:(0,s.Z)(l.Button,l[t],l[n],(0,i.Z)({},l.disabled,h),p),style:g,type:"submit",disabled:h},x),{},{children:u}))}},8441:function(e,t,n){n.d(t,{Z:function(){return u}});n(2791);var a=n(5527),i=n(493),r=n(4852),l=n(6259),o=n(8946),s=n(5146),c={},d=n(184),u=function(e){var t=e.validationData,n=e.visible;return(0,d.jsx)(a.Z,{elevation:8,className:c.validationPopup,children:(0,d.jsx)(i.Z,{className:c.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&t?t.map((function(e,t){var n=e[Object.keys(e)[0]],a=n.id,i=n.message,u=n.met,h=u?o.Z:s.Z,p=u?"green":"red";return(0,d.jsxs)(r.ZP,{className:c.validationPopupItem,disableGutters:!0,children:[(0,d.jsx)(h,{className:c.validationPopupIcon,style:{color:p}}),(0,d.jsx)(l.Z,{disableTypography:!0,primary:i,sx:{fontSize:"12px"}})]},a)})):null})})}}}]);
//# sourceMappingURL=743.d29c8f6d.chunk.js.map