"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[8],{9198:function(e,a,t){var r=t(2007),n=t(184),s=function(e){var a=e.children,t=e.className;return(0,n.jsx)("div",{className:t,children:a})};s.propTopes={children:r.node.isRequired,className:r.string},a.Z=s},6292:function(e,a,t){var r=t(3063),n=t(184);a.Z=function(e){return(0,n.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,n.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},1533:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(5193),n=t(9095),s=t(2739),i=t(627),l=t(4554),o=t(6151),d=t(1087),c=t(6292),u=t(3063),h=t(184),x=function(e){var a=e.handleModalClose,t=e.modalState;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:u.Z.backButtonMobbile,children:(0,h.jsx)("span",{className:u.Z.back,onClick:a,children:"\u23ce"})}),(0,h.jsxs)("div",{className:u.Z.modalBox,children:[(0,h.jsx)("span",{className:u.Z.closeButton,onClick:a,children:"\u2715"}),(0,h.jsxs)("p",{className:u.Z.modalTitle,children:["Your recommended daily",(0,h.jsx)("br",{})," calorie intake is"]}),(0,h.jsxs)("b",{className:u.Z.dailyRate,children:[(0,h.jsxs)("span",{className:u.Z.totalCaloriesNumber,children:[Math.round(t.dailyRate)," "]}),"kcal"]}),(0,h.jsxs)("div",{className:u.Z.notEat,children:[(0,h.jsx)("hr",{className:u.Z.hr}),(0,h.jsx)("b",{className:u.Z.text2,children:"Foods you should not eat"}),(0,h.jsx)(c.Z,{array:t.foodNotToEat.slice(0)}),(0,h.jsx)(d.rU,{to:"register",className:u.Z.buttonWrapper,children:(0,h.jsx)(o.Z,{className:u.Z.button,variant:"contained",children:"Start losing weight"})})]})]})]})};var m=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:u.Z.modalBox,children:[(0,h.jsxs)("p",{className:u.Z.modalTitle,children:["Caloric daily rate required",(0,h.jsx)("br",{})," to use diary!"]}),(0,h.jsx)(d.rU,{to:"/calculator",className:u.Z.buttonWrapper,children:(0,h.jsx)(o.Z,{className:u.Z.button,variant:"contained",children:"Click Here"})})]})})},p=function(e){var a=e.handleModalClose,t=e.modalState,o=(0,r.Z)("(max-width: 480px)");return(0,h.jsx)(n.Z,{style:{top:o&&83},open:t.open,onClose:a,closeAfterTransition:!0,slots:{backdrop:s.Z},slotProps:{backdrop:{timeout:500,sx:{top:o&&83,backgroundColor:"#2121211f"}}},disableScrollLock:!!o,children:(0,h.jsx)(i.Z,{in:t.open,children:(0,h.jsx)(l.Z,{children:"calculator"===t.source?(0,h.jsx)(x,{handleModalClose:a,modalState:t}):(0,h.jsx)(m,{handleModalClose:a})})})})}},1680:function(e,a,t){var r=t(5336),n=t(8496),s=t(2791),i=t(184);a.Z=function(e){var a=(0,r.a)().calculator;return(0,i.jsx)("div",{className:n.Z.sideBarContainer,children:s.cloneElement(e.children,{calculator:a})})}},5008:function(e,a,t){t.r(a),t.d(a,{default:function(){return me}});var r=t(1413),n=t(9439),s=t(2791),i=t(3855),l=t(9198),o=t(9251),d=t(5527),c=t(1582),u=t(5904),h=t(1618),x="DiaryAddProductForm_section__OMkqD",m="DiaryAddProductForm_diaryform__I65-r",p="DiaryAddProductForm_formdiv__wXEO1",j="DiaryAddProductForm_diaryFormBtn__knET2",Z=t(4142),f=t(2260),y=t(5336),_=t(763),g=t(5821),N=t(1300),v="DiaryAddButton_circlePlus__7yYCy",B=t(3400),b=t(2419),C=t(184);function k(e){var a=e.onClick,t=e.disabled;return(0,C.jsx)(B.Z,{variant:"outlined",className:v,type:"button",onClick:a,disabled:t,children:(0,C.jsx)(b.Z,{})})}function D(e){var a=e.diaryBackBtn,t=(0,s.useState)(""),l=(0,n.Z)(t,2),o=l[0],d=l[1],v=(0,s.useState)(""),B=(0,n.Z)(v,2),b=B[0],D=B[1],S=(0,y.a)(),w=S.calendarDate,I=S.allFoodsSearchList,M=S.calculator,F=(0,i.I0)(),T=(I||[]).map((function(e){return{title:e.title,groupBloodNotAllowed:e.groupBloodNotAllowed}})),A=(0,N.Z)().width,P="M"===M.unitOfMeasure?M.bloodTypesMetric.indexOf(M.bloodType):M.bloodTypesStandard.indexOf(M.bloodType),E=(0,_.throttle)((function(e){F((0,Z.VU)(e))}),500),L=function(e){try{e.preventDefault();var t=I.find((function(e){return e.title===o})),r=Math.ceil(t.calories/100*b)||0;F((0,Z.NA)({calendarDate:w,productName:o,grams:b,calories:r})),F((0,g.clearAllFoodsSearchList)()),d(""),D(""),F((0,g.setDiaryBackBtn)(!a))}catch(n){throw new Error("Error submitting diary entry"+n.message)}};return(0,C.jsx)("div",{className:x,children:(0,C.jsxs)("form",{className:m,onSubmit:L,children:[(0,C.jsx)("div",{className:p,children:(0,C.jsx)(c.Z,{spacing:2,children:(0,C.jsx)(u.Z,{id:"size-small-standard",sx:{"@media (min-width: 768px)":{width:"240px"}},freeSolo:!0,size:"small",options:T,value:o,onChange:function(e,a){null!==a&&d(a.title)},inputValue:o,onInputChange:function(e){if(e&&e.target){var a=e.target.value||"";d(a),E(a)}},getOptionLabel:function(e){return e.title||""},renderInput:function(e){return(0,C.jsx)(h.Z,(0,r.Z)((0,r.Z)({required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",marginBottom:"8px","@media (min-width: 768px)":{width:"240px",marginBottom:"0"}}},e),{},{variant:"standard",label:"Enter product name"}))},renderOption:function(e,a){return console.log("Option:",a.title),console.log("Is not allowed:",a.groupBloodNotAllowed[P]),(0,C.jsx)("li",(0,r.Z)((0,r.Z)({},e),{},{children:(0,C.jsx)("div",{className:a.groupBloodNotAllowed[P]?"not-allowed-food":"",children:a.title})}))}})})}),(0,C.jsx)("div",{className:p,children:(0,C.jsx)(h.Z,{required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left","@media (min-width: 768px)":{width:"106px",paddingBottom:"0",marginRight:"100px",marginLeft:"22px",textAlign:"right"}},id:"standard-basic",label:"Grams",variant:"standard",type:"number",value:b,onChange:function(e){D(e.target.value)}})}),A>768?(0,C.jsx)(k,{onClick:L,disabled:""===o||""===b}):(0,C.jsx)(f.Z,{className:j,color:"orange",disabled:""===o||""===b,children:"Add"})]})})}var S=t(7892),w=t.n(S),I=t(3634),M=t(1652),F=t(4979),T=t(4659),A=t(1098),P=t(6886),E=t(5570),L=t(627),R={btnPopperContainer:"DiaryCalendar_btnPopperContainer__UUGlP",dateText:"DiaryCalendar_dateText__ujwTY",paper:"DiaryCalendar_paper__ek8Ei"};function Y(){var e=(0,s.useState)(w()()),a=(0,n.Z)(e,2),t=a[0],l=a[1],o=(0,s.useState)(w()().format("MM/DD/YYYY")),c=(0,n.Z)(o,2),u=c[0],h=c[1],x=(0,i.I0)();return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(M._,{dateAdapter:I.y,children:(0,C.jsx)("div",{className:R.calendarContainer,children:(0,C.jsx)(P.ZP,{variant:"popper",popupId:"demo-popup-popper",children:function(e){return(0,C.jsxs)("div",{className:R.btnPopperContainer,children:[(0,C.jsx)("h2",{className:R.dateText,children:u}),(0,C.jsx)(B.Z,(0,r.Z)((0,r.Z)({"aria-label":"delete"},(0,E.LI)(e)),{},{children:(0,C.jsx)(F.Z,{})})),(0,C.jsx)(A.Z,(0,r.Z)((0,r.Z)({},(0,E.Rg)(e)),{},{transition:!0,children:function(a){var n=a.TransitionProps;return(0,C.jsx)(L.Z,(0,r.Z)((0,r.Z)({},n),{},{timeout:100,children:(0,C.jsx)(d.Z,{className:R.paper,sx:{backgroundColor:"white",color:"black"},children:(0,C.jsx)(T.W,{value:t,onChange:function(a){l(a),function(e){var a=w()("".concat(e)).format("MM/DD/YYYY");h(a),x((0,g.setCalDate)(a)),x((0,Z.gl)(a))}(a),e.close()},showDaysOutsideCurrentMonth:!0,fixedWeekNumber:6,referenceDate:w()(),views:["year","month","day"]})})}))}}))]})}})})})})}var W=t(1680),O="style_productListItem__51ZJu",q="style_productDeleteButton__dWPC9",U="style_title__mYDl8",V="style_titlePrimary__L77IB",z="style_weight__oqhza",X="style_calories__fB7Dk",H="style_caloriesPrimary__Evuxy",G="style_caloriesSecondary__rImu7",J=t(4852),Q=t(9900),K=t(7247),$=t(890);var ee=function(e){var a=e.product,t=e.handleDelete;return(0,C.jsxs)(J.ZP,{className:O,children:[(0,C.jsx)(Q.Z,{className:U,primary:(0,C.jsx)($.Z,{className:V,children:a.title})}),(0,C.jsx)(Q.Z,{className:z,primary:(0,C.jsxs)($.Z,{className:V,children:[a.weight," g"]})}),(0,C.jsx)(Q.Z,{className:X,primary:(0,C.jsx)($.Z,{className:H,children:a.calories}),secondary:(0,C.jsx)($.Z,{className:G,children:"kcal"})}),(0,C.jsx)(B.Z,{className:q,"aria-label":"delete",onClick:function(){return t(a._id)},children:(0,C.jsx)(K.Z,{})})]})},ae="style_productList__83D9D",te=t(493);var re=function(){var e=(0,i.I0)(),a=(0,y.a)(),t=a.calendarDate,r=a.diaryList;function n(a){var r=t.replaceAll("/","-");e((0,Z.jx)({formatDate:r,entryId:a}))}return(0,C.jsx)(C.Fragment,{children:r.length<1?(0,C.jsx)("p",{children:"No Entires for this day"}):(0,C.jsx)(te.Z,{className:ae,children:r.map((function(e,a){return(0,C.jsx)(ee,{product:e,handleDelete:n},"".concat(e._id,"-").concat(a))}))})})},ne=t(5193),se=t(4110),ie=t(6292),le=t(8496),oe=function(e){var a=e.date,t=e.summary,r=e.searchInputChange,n=e.searchResults,s=(0,ne.Z)("(min-width: 769px)");return(0,C.jsxs)("div",{className:le.Z.sideBarContentWrapper,children:[(0,C.jsxs)("div",{className:le.Z.sideBarContent,children:[(0,C.jsxs)("p",{className:le.Z.sideBarTitle,children:["Summary for ",a.replaceAll("-","/")]}),(0,C.jsxs)("ul",{className:le.Z.statsBox,children:[(0,C.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,C.jsx)("p",{children:"Left"}),(0,C.jsx)("p",{children:t.left.toFixed(1)})]}),(0,C.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,C.jsx)("p",{children:"Consumed"}),(0,C.jsx)("p",{children:t.totalConsumed.toFixed(1)})]}),(0,C.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,C.jsx)("p",{children:"Daily rate"}),(0,C.jsx)("p",{children:t.dailyRate.toFixed(1)})]}),(0,C.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,C.jsx)("p",{children:"n% of normal"}),(0,C.jsxs)("p",{children:[t.percentage,"%"]})]})]})]}),(0,C.jsxs)("div",{className:le.Z.sideBarContent,children:[(0,C.jsx)("p",{className:le.Z.sideBarTitle,children:"Food not recommended"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(se.Z,{placeholder:"type here..",onChange:r}),(0,C.jsx)(ie.Z,{array:n,style:{height:s?400:150}})]})]})]})};oe.defaultProps={date:"DATE",summary:{left:0,totalConsumed:0,dailyRate:0,percentage:0}};var de=oe,ce=function(e){var a=e.calculator,t=(0,y.a)(),r=t.diaryList,n=t.calendarDate,s=t.diaryDailyRate,l=t.notAllowedFoods,o=t.calculatorDailyRate,d=(0,i.I0)(),c=((s||o)>1?s||o:0)||0,u=r?r.reduce((function(e,a){return e+a.calories}),0):0,h={left:null===u||isNaN(u)?0:Math.max(c-u,0),totalConsumed:u,dailyRate:c,percentage:0!==c?Math.round(u/c*100):0},x=a.bloodType,m=(0,_.throttle)((function(e){var a=e.target.value;a.length>0&&d((0,Z.Xj)({title:a,bloodType:x}))}),400);return(0,C.jsx)(de,{date:n,summary:h,searchInputChange:m,searchResults:l})},ue=t(1529),he=t(1533),xe=t(1980);var me=function(){var e=(0,i.I0)(),a=(0,y.a)(),t=a.diaryBackBtn,c=a.calculator,u=a.calculatorIsLoading,h=(0,xe.a)().refreshing,x=(0,N.Z)().width,m=(0,s.useState)(""),p=(0,n.Z)(m,2),j=p[0],Z=p[1],f=(0,s.useState)(""),_=(0,n.Z)(f,2),v=_[0],B=_[1],b=(0,i.v9)(ue.h),S=(0,s.useState)({open:!1,source:"diary"}),w=(0,n.Z)(S,2),I=w[0],M=w[1];return(0,s.useEffect)((function(){!1===t?(Z("block"),B("none")):(Z("none"),B("block"))}),[t]),(0,s.useEffect)((function(){c.startDate?M((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!1})})):M((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!0})}))}),[c.startDate]),(0,C.jsx)("div",{className:"background Calc-DairyBackground",style:{display:"flex",flexDirection:"column"},children:u||h?(0,C.jsx)(o.Z,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("section",{className:"top-bottom",children:(0,C.jsx)(l.Z,{className:"left-right",children:x>767?(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{children:[(0,C.jsx)(Y,{}),(0,C.jsx)(D,{}),(0,C.jsx)(re,{})]})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{style:{display:"".concat(v)},children:(0,C.jsx)(D,{diaryBackBtn:t})}),(0,C.jsxs)("div",{style:{display:"".concat(j)},children:[(0,C.jsx)(Y,{}),(0,C.jsx)(re,{}),(0,C.jsx)(k,{onClick:function(){e((0,g.setDiaryBackBtn)(!t))}})]})]})})}),(0,C.jsx)("section",{className:"no-bottom",children:(0,C.jsxs)(l.Z,{className:"no-left-right",children:[(0,C.jsx)(d.Z,{className:"".concat(le.Z.sidebarBox," ").concat("dark"===b?le.Z.darkMode:le.Z.lightMode)}),(0,C.jsx)(W.Z,{children:(0,C.jsx)(ce,{})})]})}),(0,C.jsx)(he.Z,{modalState:I})]})})}},8496:function(e,a){a.Z={sideBarContainer:"rightSideBar_sideBarContainer__rWrUX",sidebarBox:"rightSideBar_sidebarBox__q9pRQ",sideBarContentWrapper:"rightSideBar_sideBarContentWrapper__EDhJV",sideBarContent:"rightSideBar_sideBarContent__TIFBc",sideBarTitle:"rightSideBar_sideBarTitle__1pky6",statsBox:"rightSideBar_statsBox__0Xanq",statsBoxItem:"rightSideBar_statsBoxItem__Vk8lb",darkMode:"rightSideBar_darkMode__52h21",lightMode:"rightSideBar_lightMode__SLrv9"}}}]);
//# sourceMappingURL=8.6d7471d7.chunk.js.map