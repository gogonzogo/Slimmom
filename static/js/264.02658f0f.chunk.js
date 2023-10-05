"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[264],{5860:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(5861),a=n(4942),i=n(1413),l=n(9439),o=n(4687),s=n.n(o),u=n(2791),c={section:"CaloriesCalc_section__WB2nl",positionWrapper:"CaloriesCalc_positionWrapper__+O-50",heading:"CaloriesCalc_heading__fAzfD",formdiv:"CaloriesCalc_formdiv__+a6k+",calcform:"CaloriesCalc_calcform__iDf5l",tabs:"CaloriesCalc_tabs__MkAfR"},d=n(3855),h=n(5228),g=n(3896),p=n(4479),f=n(765),x=n(5523),m=n(7133),b=n(8502),y=n(5193),v=n(9095),Z=n(2739),_=n(627),j=n(4554),W=n(6151),C=n(1087),k=n(6292),F=n(3063),B=n(184),A=function(e){var t=e.handleClose,n=e.modalState,r=(0,y.Z)("(max-width: 480px)");return(0,B.jsx)(v.Z,{style:{top:r&&83},open:n.open,onClose:t,closeAfterTransition:!0,slots:{backdrop:Z.Z},slotProps:{backdrop:{timeout:500,sx:{top:r&&83,backgroundColor:"#2121211f"}}},disableScrollLock:!!r,children:(0,B.jsx)(_.Z,{in:n.open,children:(0,B.jsxs)(j.Z,{children:[(0,B.jsx)("div",{className:F.Z.backButtonMobbile,children:(0,B.jsx)("span",{className:F.Z.back,onClick:t,children:"\u23ce"})}),(0,B.jsxs)("div",{className:F.Z.modalBox,children:[(0,B.jsx)("span",{className:F.Z.closeButton,onClick:t,children:"\u2715"}),(0,B.jsxs)("p",{className:F.Z.modalTitle,children:["Your recommended daily",(0,B.jsx)("br",{})," calorie intake is"]}),(0,B.jsxs)("b",{className:F.Z.totalCalories,children:[(0,B.jsxs)("span",{className:F.Z.totalCaloriesNumber,children:[Math.round(n.totalCalories)," "]}),"kcal"]}),(0,B.jsxs)("div",{className:F.Z.notEat,children:[(0,B.jsx)("hr",{className:F.Z.hr}),(0,B.jsx)("b",{className:F.Z.text2,children:"Foods you should not eat"}),(0,B.jsx)(k.Z,{array:n.foodNotToEat.slice(0)}),(0,B.jsx)(C.rU,{to:"register",className:F.Z.buttonWrapper,children:(0,B.jsx)(W.Z,{className:F.Z.button,variant:"contained",children:"Start losing weight"})})]})]})]})})})},N=n(8441),S=n(1887),L=n(5821),T=n(2260),V=n(4142),w=n(1980),P=function(){var e=(0,u.useRef)(null),t=(0,u.useRef)(null),n=(0,u.useRef)(null),o=(0,u.useRef)(null),y=(0,u.useRef)(null),v=(0,u.useRef)(null),Z=(0,u.useRef)(null),_=(0,u.useState)("Submit"),j=(0,l.Z)(_,2),W=j[0],C=j[1],k=(0,w.a)().loggedIn,F=(0,d.I0)(),P=(0,d.v9)((function(e){return e.calculate.isHeightValid})),I=(0,d.v9)((function(e){return e.calculate.isAgeValid})),R=(0,d.v9)((function(e){return e.calculate.isCurrentValid})),M=(0,d.v9)((function(e){return e.calculate.isDesiredValid})),z=(0,d.v9)((function(e){return e.calculate.isBloodValid})),D=!!(P&&I&&R&&M&&z);(0,u.useEffect)((function(){C(k?"Update Calculator":"Start losing weight")}),[k]);var E=(0,d.v9)((function(e){return e.calculate.isHeightFeetValid})),H=(0,d.v9)((function(e){return e.calculate.isHeightInchValid})),K=(0,d.v9)((function(e){return e.calculate.isCurrentLbsValid})),O=(0,d.v9)((function(e){return e.calculate.isDesiredLbsValid})),U=!!(E&&H&&I&&K&&O&&z),Q=(0,d.v9)((function(e){return e.calCalories.cals.value})),q=(0,u.useState)({weight:!1,age:!1,currentWeight:!1,desiredWeight:!1,bloodType:!1}),X=(0,l.Z)(q,2),G=X[0],J=X[1],Y=(0,u.useState)(null),$=(0,l.Z)(Y,2),ee=$[0],te=$[1],ne=(0,u.useState)({open:!1,totalCalories:null,foodNotToEat:[]}),re=(0,l.Z)(ne,2),ae=re[0],ie=re[1],le=function(e){ie({open:!0,totalCalories:e.totalCalories,foodNotToEat:e.notAllowedFood})},oe=(0,u.useState)({height:Q.height,age:Q.age,currentWeight:Q.currentWeight,desiredWeight:Q.desiredWeight,bloodType:Q.bloodType,heightFeet:Q.heightFeet,heightInch:Q.heightInch,currentWeightLbs:Q.currentWeightLbs,desiredWeightLbs:Q.desiredWeightLbs,measurementType:""!==Q.measurementType?Q.measurementType:"M"}),se=(0,l.Z)(oe,2),ue=se[0],ce=se[1],de=(0,u.useState)("S"===Q.measurementType?1:0),he=(0,l.Z)(de,2),ge=he[0],pe=he[1],fe=function(){var e=(0,r.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(n),e.next=3,ce((function(e){return(0,i.Z)((0,i.Z)({},e),{},{measurementType:0===n?"M":"S"})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),xe=function(e){var t,n,r=e.target,l=r.name,o=r.value;switch(ce((0,i.Z)((0,i.Z)({},ue),{},(0,a.Z)({},l,o))),l){case"height":F((0,S.Sg)({fieldValue:o}));break;case"heightFeet":F((0,S.p_)({fieldValue:o}));break;case"heightInch":F((0,S.V)({fieldValue:o}));break;case"age":F((0,S._f)({fieldValue:o}));break;case"currentWeight":F((0,S.$1)({fieldValue:o}));break;case"currentWeightLbs":F((0,S.z8)({fieldValue:o}));break;case"desiredWeight":F((0,S.mA)({fieldValue:o}));break;case"desiredWeightLbs":F((0,S.Kv)({fieldValue:o}));break;case"bloodType":F((0,S.r4)({fieldValue:o}))}te(l),t=l,n=!0,J((0,i.Z)((0,i.Z)({},G),{},(0,a.Z)({},t,n)))},me=(0,d.v9)((function(e){return e.calculate.validationReqs})),be=function(){return(0,B.jsx)("div",{children:(0,B.jsx)(N.Z,{validationData:me[ee],visible:ee})})},ye=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,i,l,o,u,c,d,h,g,p,f,x,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=ue.height,r=ue.age,a=ue.currentWeight,i=ue.desiredWeight,l=ue.bloodType,o=ue.heightFeet,u=ue.heightInch,c=ue.currentWeightLbs,d=ue.desiredWeightLbs,h=ue.measurementType,k||F((0,L.storeCalulator)({height:n,age:r,currentWeight:a,desiredWeight:i,bloodType:l,heightFeet:o,heightInch:u,currentWeightLbs:c,desiredWeightLbs:d,measurementType:h})),g={currentWeight:"M"===h?a:.454*c,height:"M"===h?n:2.54*(12*o+1*u),age:r,desiredWeight:"M"===h?i:.454*d,bloodType:l},e.prev=4,e.next=7,F((0,V.Ri)(g));case 7:if(p=e.sent,f=p.payload.data,!k){e.next=27;break}x=0,e.t0=l,e.next="A"===e.t0?14:"B"===e.t0?16:"AB"===e.t0?18:"O"===e.t0?20:22;break;case 14:return x=1,e.abrupt("break",24);case 16:return x=2,e.abrupt("break",24);case 18:return x=3,e.abrupt("break",24);case 20:return x=4,e.abrupt("break",24);case 22:return x=1,e.abrupt("break",24);case 24:return m={height:"M"===h?n:2.54*(12*o+1*u),age:r,bloodType:x,currentWeight:"M"===h?a:.454*c,desiredWeight:"M"===h?i:.454*d,heightFeet:o,heightInch:u,currentWeightLbs:c,desiredWeightLbs:d,totalCalories:f.totalCalories,measurementType:h,originalDate:new Date,enteredDate:new Date},e.next=27,F((0,V.n4)(m));case 27:k?F((0,V.X_)()):le(f),ce({height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"",heightFeet:"",heightInch:"",currentWeightLbs:"",desiredWeightLbs:""}),F((0,S.Sg)({fieldValue:""})),F((0,S.p_)({fieldValue:""})),F((0,S.V)({fieldValue:""})),F((0,S._f)({fieldValue:""})),F((0,S.$1)({fieldValue:""})),F((0,S.z8)({fieldValue:""})),F((0,S.mA)({fieldValue:""})),F((0,S.Kv)({fieldValue:""})),F((0,S.r4)({fieldValue:""})),F((0,L.resetCalcState)()),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(4),console.error("returned Error",e.t1.message);case 35:case"end":return e.stop()}}),e,null,[[4,32]])})));return function(t){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:c.positionWrapper,children:(0,B.jsx)("div",{className:c.section,children:(0,B.jsxs)("div",{className:c.calcWrapper,children:[(0,B.jsx)("h1",{className:c.heading,children:"Calculate your daily calorie"}),(0,B.jsx)("h1",{className:c.heading,children:"intake right now"}),(0,B.jsx)("div",{className:c.tabs,children:(0,B.jsxs)(h.Z,{orientation:"horizontal",value:ge,onChange:fe,indicatorColor:"transparent",sx:{"& button":{marginTop:"25px",paddingTop:"5px",width:"100px",padding:"1rem",margin:"2px",borderRadius:"30px",fontFamily:"Verdana",fontSize:"9px",fontWeight:700,textTransform:"capitalize",border:"solid #fc842d"},"& button:focus":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"},"& button:hover":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}},children:[(0,B.jsx)(g.Z,{label:"Metric"}),(0,B.jsx)(g.Z,{label:"Standard US"})]})}),0===ge&&(0,B.jsxs)("form",{className:c.calcform,onSubmit:ye,children:[(0,B.jsxs)("div",{className:c.formdiv,children:[(0,B.jsx)(b.Z,{sx:{"& .MuiOutlinedInput-root.Mui-focused":{"& > fieldset":{borderColor:"orange"}},fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"height"!==ee||P?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputProps:{onKeyPress:function(t){"Enter"===t.key&&e.current.focus()}},label:"Height *",variant:"standard",onChange:xe,value:ue.height,name:"height",onFocus:function(){return te("height")},onBlur:function(){return te(null)}}),"height"===ee&&be(),(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==ee||I?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:e,inputProps:{onKeyPress:function(e){"Enter"===e.key&&t.current.focus()}},label:"Age *",variant:"standard",onChange:xe,value:ue.age,name:"age",onFocus:function(){return te("age")},onBlur:function(){return te(null)}}),"age"===ee&&be(),(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeight"!==ee||R?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:t,inputProps:{onKeyPress:function(e){"Enter"===e.key&&n.current.focus()}},label:"Current Weight *",variant:"standard",onChange:xe,value:ue.currentWeight,name:"currentWeight",onFocus:function(){return te("currentWeight")},onBlur:function(){return te(null)}}),"currentWeight"===ee&&be()]}),(0,B.jsxs)("div",{className:c.formdiv,children:[(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeight"!==ee||M?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:n,label:"Desired Weight *",variant:"standard",onChange:xe,value:ue.desiredWeight,name:"desiredWeight",onFocus:function(){return te("desiredWeight")},onBlur:function(){return te(null)}}),"desiredWeight"===ee&&be(),(0,B.jsx)(m.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,B.jsxs)(f.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ue.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:xe,onFocus:function(){return te("bloodType")},onBlur:function(){return te(null)},children:[(0,B.jsx)(x.Z,{value:"A",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"1"}),(0,B.jsx)(x.Z,{value:"B",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"2"}),(0,B.jsx)(x.Z,{value:"AB",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"3"}),(0,B.jsx)(x.Z,{value:"O",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"4"})]}),"bloodType"===ee&&be()]}),(0,B.jsx)(T.Z,{color:"orange",size:"wide",disabled:!D,children:W})]}),1===ge&&(0,B.jsxs)("form",{className:c.calcform,onSubmit:ye,children:[(0,B.jsxs)("div",{className:c.formdiv,children:[(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightFeet"!==ee||E?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputProps:{onKeyPress:function(e){"Enter"===e.key&&o.current.focus()}},type:"tel",label:"Height Feet *",variant:"standard",onChange:xe,value:ue.heightFeet,name:"heightFeet",onFocus:function(){return te("heightFeet")},onBlur:function(){return te(null)}}),"heightFeet"===ee&&be(),(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightInch"!==ee||H?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:o,inputProps:{onKeyPress:function(e){"Enter"===e.key&&y.current.focus()}},type:"tel",label:"Height Inch *",variant:"standard",onChange:xe,value:ue.heightInch,name:"heightInch",onFocus:function(){return te("heightInch")},onBlur:function(){return te(null)}}),"heightInch"===ee&&be(),(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==ee||I?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:y,inputProps:{onKeyPress:function(e){"Enter"===e.key&&v.current.focus()}},type:"tel",label:"Age *",variant:"standard",onChange:xe,value:ue.age,name:"age",onFocus:function(){return te("age")},onBlur:function(){return te(null)}}),"age"===ee&&be()]}),(0,B.jsxs)("div",{className:c.formdiv,children:[(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeightLbs"!==ee||K?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:v,inputProps:{onKeyPress:function(e){"Enter"===e.key&&Z.current.focus()}},type:"tel",label:"Current Weight Lbs *",variant:"standard",onChange:xe,value:ue.currentWeightLbs,name:"currentWeightLbs",onFocus:function(){return te("currentWeightLbs")},onBlur:function(){return te(null)}}),"currentWeightLbs"===ee&&be(),(0,B.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeightLbs"!==ee||O?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:Z,type:"tel",label:"Desired Weight Lbs *",variant:"standard",onChange:xe,value:ue.desiredWeightLbs,name:"desiredWeightLbs",onFocus:function(){return te("desiredWeightLbs")},onBlur:function(){return te(null)}}),"desiredWeightLbs"===ee&&be(),(0,B.jsx)(m.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,B.jsxs)(f.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ue.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:xe,onFocus:function(){return te("bloodType")},onBlur:function(){return te(null)},children:[(0,B.jsx)(x.Z,{value:"A",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"A"}),(0,B.jsx)(x.Z,{value:"B",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"B"}),(0,B.jsx)(x.Z,{value:"AB",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"AB"}),(0,B.jsx)(x.Z,{value:"O",control:(0,B.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"O"})]})]}),(0,B.jsx)(T.Z,{color:"orange",size:"wide",disabled:!U,children:W})]})]})})}),(0,B.jsx)(A,{handleClose:function(){ie((function(e){return(0,i.Z)((0,i.Z)({},e),{},{open:!1})})),setTimeout((function(){ie({open:!1,totalCalories:null,foodNotToEat:[]})}),250)},modalState:ae})]})}},9198:function(e,t,n){var r=n(2007),a=n(184),i=function(e){var t=e.children,n=e.className;return(0,a.jsx)("div",{className:n,children:t})};i.propTopes={children:r.node.isRequired,className:r.string},t.Z=i},2260:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),a=n(4942),i=n(5987),l={Button:"CustomButton_Button__wxqQ9",orange:"CustomButton_orange__JhdH3",white:"CustomButton_white__PAugr",disabled:"CustomButton_disabled__zn-Hl",wide:"CustomButton_wide__0zS2P"},o=n(6151),s=n(3733),u=n(184),c=["color","size","margin","children","disabled","className","style"],d=function(e){var t=e.color,n=e.size,d=(e.margin,e.children),h=e.disabled,g=e.className,p=e.style,f=(0,i.Z)(e,c);return(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({className:(0,s.Z)(l.Button,l[t],l[n],(0,a.Z)({},l.disabled,h),g),style:p,type:"submit",disabled:h},f),{},{children:d}))}},6292:function(e,t,n){var r=n(3063),a=n(184);t.Z=function(e){return(0,a.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,a.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},8441:function(e,t,n){n.d(t,{Z:function(){return d}});n(2791);var r=n(5527),a=n(493),i=n(4852),l=n(6259),o=n(8946),s=n(5146),u={},c=n(184),d=function(e){var t=e.validationData,n=e.visible;return(0,c.jsx)(r.Z,{elevation:8,className:u.validationPopup,children:(0,c.jsx)(a.Z,{className:u.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&t?t.map((function(e,t){var n=e[Object.keys(e)[0]],r=n.id,a=n.message,d=n.met,h=d?o.Z:s.Z,g=d?"green":"red";return(0,c.jsxs)(i.ZP,{className:u.validationPopupItem,disableGutters:!0,children:[(0,c.jsx)(h,{className:u.validationPopupIcon,style:{color:g}}),(0,c.jsx)(l.Z,{disableTypography:!0,primary:a,sx:{fontSize:"12px"}})]},r)})):null})})}},3063:function(e,t){t.Z={modalBox:"modal_modalBox__UnNX8",closeButton:"modal_closeButton__hYa4+",backButtonMobbile:"modal_backButtonMobbile__r5QHQ",back:"modal_back__V8JNM",modalTitle:"modal_modalTitle__3zeL5",totalCaloriesNumber:"modal_totalCaloriesNumber__bUxLg",totalCalories:"modal_totalCalories__U80Ut",notEat:"modal_notEat__P-szP",hr:"modal_hr__CzLPQ",text2:"modal_text2__9c6ek",notEatItem:"modal_notEatItem__hXM4C",buttonWrapper:"modal_buttonWrapper__NZCpm",button:"modal_button__GRC0s"}}}]);
//# sourceMappingURL=264.02658f0f.chunk.js.map