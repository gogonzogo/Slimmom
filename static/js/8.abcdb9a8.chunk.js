"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[8],{9198:function(e,a,t){var r=t(2007),n=t(184),s=function(e){var a=e.children,t=e.className;return(0,n.jsx)("div",{className:t,children:a})};s.propTopes={children:r.node.isRequired,className:r.string},a.Z=s},6292:function(e,a,t){var r=t(3063),n=t(184);a.Z=function(e){return(0,n.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,n.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},1533:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(5193),n=t(9095),s=t(2739),i=t(627),l=t(4554),o=t(6151),c=t(1087),d=t(6292),u=t(3063),x=t(184),h=function(e){var a=e.handleModalClose,t=e.modalState;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:u.Z.backButtonMobbile,children:(0,x.jsx)("span",{className:u.Z.back,onClick:a,children:"\u23ce"})}),(0,x.jsxs)("div",{className:u.Z.modalBox,children:[(0,x.jsx)("span",{className:u.Z.closeButton,onClick:a,children:"\u2715"}),(0,x.jsxs)("p",{className:u.Z.modalTitle,children:["Your recommended daily",(0,x.jsx)("br",{})," calorie intake is"]}),(0,x.jsxs)("b",{className:u.Z.dailyRate,children:[(0,x.jsxs)("span",{className:u.Z.totalCaloriesNumber,children:[Math.round(t.dailyRate)," "]}),"kcal"]}),(0,x.jsxs)("div",{className:u.Z.notEat,children:[(0,x.jsx)("hr",{className:u.Z.hr}),(0,x.jsx)("b",{className:u.Z.text2,children:"Foods you should not eat"}),(0,x.jsx)(d.Z,{array:t.foodNotToEat.slice(0)}),(0,x.jsx)(c.rU,{to:"register",className:u.Z.buttonWrapper,children:(0,x.jsx)(o.Z,{className:u.Z.button,variant:"contained",children:"Start losing weight"})})]})]})]})};var m=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:u.Z.modalBox,children:[(0,x.jsxs)("p",{className:u.Z.modalTitle,children:["Caloric daily rate required",(0,x.jsx)("br",{})," to use diary!"]}),(0,x.jsx)(c.rU,{to:"/calculator",className:u.Z.buttonWrapper,children:(0,x.jsx)(o.Z,{className:u.Z.button,variant:"contained",children:"Click Here"})})]})})},p=function(e){var a=e.handleModalClose,t=e.modalState,o=(0,r.Z)("(max-width: 480px)");return(0,x.jsx)(n.Z,{style:{top:o&&83},open:t.open,onClose:a,closeAfterTransition:!0,slots:{backdrop:s.Z},slotProps:{backdrop:{timeout:500,sx:{top:o&&83,backgroundColor:"#2121211f"}}},disableScrollLock:!!o,children:(0,x.jsx)(i.Z,{in:t.open,children:(0,x.jsx)(l.Z,{children:"calculator"===t.source?(0,x.jsx)(h,{handleModalClose:a,modalState:t}):(0,x.jsx)(m,{handleModalClose:a})})})})}},1680:function(e,a,t){var r=t(5336),n=t(8496),s=t(2791),i=t(184);a.Z=function(e){var a=(0,r.a)().calculator;return(0,i.jsx)("div",{className:n.Z.sideBarContainer,children:s.cloneElement(e.children,{calculator:a})})}},5008:function(e,a,t){t.r(a),t.d(a,{default:function(){return pe}});var r=t(1413),n=t(9439),s=t(2791),i=t(3855),l=t(9198),o=t(9251),c=t(5527),d=t(1582),u=t(5904),x=t(1618),h="DiaryAddProductForm_section__OMkqD",m="DiaryAddProductForm_diaryform__I65-r",p="DiaryAddProductForm_formdiv__wXEO1",j="DiaryAddProductForm_diaryFormBtn__knET2",Z="DiaryAddProductForm_notAllowedFood__Roq5j",f=t(4142),y=t(2260),_=t(5336),g=t(763),N=t(5821),v=t(1300),B="DiaryAddButton_circlePlus__7yYCy",b=t(3400),C=t(2419),k=t(184);function D(e){var a=e.onClick,t=e.disabled;return(0,k.jsx)(b.Z,{variant:"outlined",className:B,type:"button",onClick:a,disabled:t,children:(0,k.jsx)(C.Z,{})})}function S(e){var a=e.diaryBackBtn,t=(0,s.useState)(""),l=(0,n.Z)(t,2),o=l[0],c=l[1],B=(0,s.useState)(""),b=(0,n.Z)(B,2),C=b[0],S=b[1],w=(0,_.a)(),I=w.calendarDate,F=w.allFoodsSearchList,T=w.calculator,A=(0,i.I0)(),M=(F||[]).map((function(e){return{title:e.title,groupBloodNotAllowed:e.groupBloodNotAllowed}})),P=(0,v.Z)().width,E="M"===T.unitOfMeasure?T.bloodTypesMetric.indexOf(T.bloodType):T.bloodTypesStandard.indexOf(T.bloodType),L=(0,g.throttle)((function(e){A((0,f.VU)(e))}),500),R=function(e){try{e.preventDefault();var t=F.find((function(e){return e.title===o})),r=Math.ceil(t.calories/100*C)||0;A((0,f.NA)({calendarDate:I,productName:o,grams:C,calories:r})),A((0,N.clearAllFoodsSearchList)()),c(""),S(""),A((0,N.setDiaryBackBtn)(!a))}catch(n){throw new Error("Error submitting diary entry"+n.message)}};return(0,k.jsx)("div",{className:h,children:(0,k.jsxs)("form",{className:m,onSubmit:R,children:[(0,k.jsx)("div",{className:p,children:(0,k.jsx)(d.Z,{spacing:2,children:(0,k.jsx)(u.Z,{id:"size-small-standard",sx:{"@media (min-width: 768px)":{width:"240px"}},freeSolo:!0,autoComplete:!0,includeInputInList:!0,filterSelectedOptions:!0,size:"small",value:o,onChange:function(e,a){null!==a&&c(a.title)},inputValue:o,onInputChange:function(e){if(e&&e.target){var a=e.target.value||"";""===a&&A((0,N.clearAllFoodsSearchList)()),c(a),L(a)}},renderInput:function(e){return(0,k.jsx)(x.Z,(0,r.Z)((0,r.Z)({required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",marginBottom:"8px","@media (min-width: 768px)":{width:"240px",marginBottom:"0"}}},e),{},{variant:"standard",label:"Enter product name"}))},noOptionsText:"No locations",options:M,renderOption:function(e,a){var t=a.groupBloodNotAllowed[E];return(0,k.jsx)("li",(0,r.Z)((0,r.Z)({},e),{},{children:(0,k.jsxs)("div",{children:[t&&(0,k.jsx)("p",{className:Z,children:"Not Recommended"}),a.title]})}))},getOptionLabel:function(e){return e.title||""}})})}),(0,k.jsx)("div",{className:p,children:(0,k.jsx)(x.Z,{required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left","@media (min-width: 768px)":{width:"106px",paddingBottom:"0",marginRight:"100px",marginLeft:"22px",textAlign:"right"}},id:"standard-basic",label:"Grams",variant:"standard",type:"number",value:C,onChange:function(e){S(e.target.value)}})}),P>768?(0,k.jsx)(D,{onClick:R,disabled:""===o||""===C}):(0,k.jsx)(y.Z,{className:j,color:"orange",disabled:""===o||""===C,children:"Add"})]})})}var w=t(7892),I=t.n(w),F=t(3634),T=t(1652),A=t(4979),M=t(4659),P=t(1098),E=t(6886),L=t(5570),R=t(627),Y={btnPopperContainer:"DiaryCalendar_btnPopperContainer__UUGlP",dateText:"DiaryCalendar_dateText__ujwTY",paper:"DiaryCalendar_paper__ek8Ei"};function W(){var e=(0,s.useState)(I()()),a=(0,n.Z)(e,2),t=a[0],l=a[1],o=(0,s.useState)(I()().format("MM/DD/YYYY")),d=(0,n.Z)(o,2),u=d[0],x=d[1],h=(0,i.I0)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(T._,{dateAdapter:F.y,children:(0,k.jsx)("div",{className:Y.calendarContainer,children:(0,k.jsx)(E.ZP,{variant:"popper",popupId:"demo-popup-popper",children:function(e){return(0,k.jsxs)("div",{className:Y.btnPopperContainer,children:[(0,k.jsx)("h2",{className:Y.dateText,children:u}),(0,k.jsx)(b.Z,(0,r.Z)((0,r.Z)({"aria-label":"delete"},(0,L.LI)(e)),{},{children:(0,k.jsx)(A.Z,{})})),(0,k.jsx)(P.Z,(0,r.Z)((0,r.Z)({},(0,L.Rg)(e)),{},{transition:!0,children:function(a){var n=a.TransitionProps;return(0,k.jsx)(R.Z,(0,r.Z)((0,r.Z)({},n),{},{timeout:100,children:(0,k.jsx)(c.Z,{className:Y.paper,sx:{backgroundColor:"white",color:"black"},children:(0,k.jsx)(M.W,{value:t,onChange:function(a){l(a),function(e){var a=I()("".concat(e)).format("MM/DD/YYYY");x(a),h((0,N.setCalDate)(a)),h((0,f.gl)(a))}(a),e.close()},showDaysOutsideCurrentMonth:!0,fixedWeekNumber:6,referenceDate:I()(),views:["year","month","day"]})})}))}}))]})}})})})})}var O=t(1680),q="style_productListItem__51ZJu",U="style_productDeleteButton__dWPC9",V="style_title__mYDl8",z="style_titlePrimary__L77IB",X="style_weight__oqhza",H="style_calories__fB7Dk",G="style_caloriesPrimary__Evuxy",J="style_caloriesSecondary__rImu7",Q=t(4852),K=t(9900),$=t(7247),ee=t(890);var ae=function(e){var a=e.product,t=e.handleDelete;return(0,k.jsxs)(Q.ZP,{className:q,children:[(0,k.jsx)(K.Z,{className:V,primary:(0,k.jsx)(ee.Z,{className:z,children:a.title})}),(0,k.jsx)(K.Z,{className:X,primary:(0,k.jsxs)(ee.Z,{className:z,children:[a.weight," g"]})}),(0,k.jsx)(K.Z,{className:H,primary:(0,k.jsx)(ee.Z,{className:G,children:a.calories}),secondary:(0,k.jsx)(ee.Z,{className:J,children:"kcal"})}),(0,k.jsx)(b.Z,{className:U,"aria-label":"delete",onClick:function(){return t(a._id)},children:(0,k.jsx)($.Z,{})})]})},te="style_productList__83D9D",re=t(493);var ne=function(){var e=(0,i.I0)(),a=(0,_.a)(),t=a.calendarDate,r=a.diaryList;function n(a){var r=t.replaceAll("/","-");e((0,f.jx)({formatDate:r,entryId:a}))}return(0,k.jsx)(k.Fragment,{children:r.length<1?(0,k.jsx)("p",{children:"No Entires for this day"}):(0,k.jsx)(re.Z,{className:te,children:r.map((function(e,a){return(0,k.jsx)(ae,{product:e,handleDelete:n},"".concat(e._id,"-").concat(a))}))})})},se=t(5193),ie=t(4110),le=t(6292),oe=t(8496),ce=function(e){var a=e.date,t=e.summary,r=e.searchInputChange,n=e.searchResults,s=(0,se.Z)("(min-width: 769px)");return(0,k.jsxs)("div",{className:oe.Z.sideBarContentWrapper,children:[(0,k.jsxs)("div",{className:oe.Z.sideBarContent,children:[(0,k.jsxs)("p",{className:oe.Z.sideBarTitle,children:["Summary for ",a.replaceAll("-","/")]}),(0,k.jsxs)("ul",{className:oe.Z.statsBox,children:[(0,k.jsxs)("li",{className:oe.Z.statsBoxItem,children:[(0,k.jsx)("p",{children:"Left"}),(0,k.jsx)("p",{children:t.left.toFixed(1)})]}),(0,k.jsxs)("li",{className:oe.Z.statsBoxItem,children:[(0,k.jsx)("p",{children:"Consumed"}),(0,k.jsx)("p",{children:t.totalConsumed.toFixed(1)})]}),(0,k.jsxs)("li",{className:oe.Z.statsBoxItem,children:[(0,k.jsx)("p",{children:"Daily rate"}),(0,k.jsx)("p",{children:t.dailyRate.toFixed(1)})]}),(0,k.jsxs)("li",{className:oe.Z.statsBoxItem,children:[(0,k.jsx)("p",{children:"n% of normal"}),(0,k.jsxs)("p",{children:[t.percentage,"%"]})]})]})]}),(0,k.jsxs)("div",{className:oe.Z.sideBarContent,children:[(0,k.jsx)("p",{className:oe.Z.sideBarTitle,children:"Food not recommended"}),(0,k.jsxs)("div",{children:[(0,k.jsx)(ie.Z,{placeholder:"type here..",onChange:r}),(0,k.jsx)(le.Z,{array:n,style:{height:s?400:150}})]})]})]})};ce.defaultProps={date:"DATE",summary:{left:0,totalConsumed:0,dailyRate:0,percentage:0}};var de=ce,ue=function(e){var a=e.calculator,t=(0,_.a)(),r=t.diaryList,n=t.calendarDate,s=t.diaryDailyRate,l=t.notAllowedFoods,o=t.calculatorDailyRate,c=(0,i.I0)(),d=((s||o)>1?s||o:0)||0,u=r?r.reduce((function(e,a){return e+a.calories}),0):0,x={left:null===u||isNaN(u)?0:Math.max(d-u,0),totalConsumed:u,dailyRate:d,percentage:0!==d?Math.round(u/d*100):0},h=a.bloodType,m=(0,g.throttle)((function(e){var a=e.target.value;a.length>0&&c((0,f.Xj)({title:a,bloodType:h}))}),400);return(0,k.jsx)(de,{date:n,summary:x,searchInputChange:m,searchResults:l})},xe=t(1529),he=t(1533),me=t(1980);var pe=function(){var e=(0,i.I0)(),a=(0,_.a)(),t=a.diaryBackBtn,d=a.calculator,u=a.calculatorIsLoading,x=(0,me.a)().refreshing,h=(0,v.Z)().width,m=(0,s.useState)(""),p=(0,n.Z)(m,2),j=p[0],Z=p[1],f=(0,s.useState)(""),y=(0,n.Z)(f,2),g=y[0],B=y[1],b=(0,i.v9)(xe.h),C=(0,s.useState)({open:!1,source:"diary"}),w=(0,n.Z)(C,2),I=w[0],F=w[1];return(0,s.useEffect)((function(){!1===t?(Z("block"),B("none")):(Z("none"),B("block"))}),[t]),(0,s.useEffect)((function(){d.startDate?F((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!1})})):F((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!0})}))}),[d.startDate]),(0,k.jsx)("div",{className:"background Calc-DairyBackground",style:{display:"flex",flexDirection:"column"},children:u||x?(0,k.jsx)(o.Z,{}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("section",{className:"top-bottom",children:(0,k.jsx)(l.Z,{className:"left-right",children:h>767?(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{children:[(0,k.jsx)(W,{}),(0,k.jsx)(S,{}),(0,k.jsx)(ne,{})]})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{style:{display:"".concat(g)},children:(0,k.jsx)(S,{diaryBackBtn:t})}),(0,k.jsxs)("div",{style:{display:"".concat(j)},children:[(0,k.jsx)(W,{}),(0,k.jsx)(ne,{}),(0,k.jsx)(D,{onClick:function(){e((0,N.setDiaryBackBtn)(!t))}})]})]})})}),(0,k.jsx)("section",{className:"no-bottom",children:(0,k.jsxs)(l.Z,{className:"no-left-right",children:[(0,k.jsx)(c.Z,{className:"".concat(oe.Z.sidebarBox," ").concat("dark"===b?oe.Z.darkMode:oe.Z.lightMode)}),(0,k.jsx)(O.Z,{children:(0,k.jsx)(ue,{})})]})}),(0,k.jsx)(he.Z,{modalState:I})]})})}},8496:function(e,a){a.Z={sideBarContainer:"rightSideBar_sideBarContainer__rWrUX",sidebarBox:"rightSideBar_sidebarBox__q9pRQ",sideBarContentWrapper:"rightSideBar_sideBarContentWrapper__EDhJV",sideBarContent:"rightSideBar_sideBarContent__TIFBc",sideBarTitle:"rightSideBar_sideBarTitle__1pky6",statsBox:"rightSideBar_statsBox__0Xanq",statsBoxItem:"rightSideBar_statsBoxItem__Vk8lb"}}}]);
//# sourceMappingURL=8.abcdb9a8.chunk.js.map