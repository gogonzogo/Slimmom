"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[8],{9198:function(e,a,t){var r=t(2007),s=t(184),n=function(e){var a=e.children,t=e.className;return(0,s.jsx)("div",{className:t,children:a})};n.propTopes={children:r.node.isRequired,className:r.string},a.Z=n},6292:function(e,a,t){var r=t(3063),s=t(184);a.Z=function(e){return(0,s.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,s.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},1533:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(5193),s=t(9095),n=t(2739),i=t(627),l=t(4554),c=t(6151),d=t(1087),o=t(6292),u=t(3063),x=t(184),h=function(e){var a=e.handleModalClose,t=e.modalState;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:u.Z.backButtonMobbile,children:(0,x.jsx)("span",{className:u.Z.back,onClick:a,children:"\u23ce"})}),(0,x.jsxs)("div",{className:u.Z.modalBox,children:[(0,x.jsx)("span",{className:u.Z.closeButton,onClick:a,children:"\u2715"}),(0,x.jsxs)("p",{className:u.Z.modalTitle,children:["Your recommended daily",(0,x.jsx)("br",{})," calorie intake is"]}),(0,x.jsxs)("b",{className:u.Z.dailyRate,children:[(0,x.jsxs)("span",{className:u.Z.totalCaloriesNumber,children:[Math.round(t.dailyRate)," "]}),"kcal"]}),(0,x.jsxs)("div",{className:u.Z.notEat,children:[(0,x.jsx)("hr",{className:u.Z.hr}),(0,x.jsx)("b",{className:u.Z.text2,children:"Foods you should not eat"}),(0,x.jsx)(o.Z,{array:t.foodNotToEat.slice(0)}),(0,x.jsx)(d.rU,{to:"register",className:u.Z.buttonWrapper,children:(0,x.jsx)(c.Z,{className:u.Z.button,variant:"contained",children:"Start losing weight"})})]})]})]})};var m=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:u.Z.modalBox,children:[(0,x.jsxs)("p",{className:u.Z.modalTitle,children:["Caloric daily rate required",(0,x.jsx)("br",{})," to use diary!"]}),(0,x.jsx)(d.rU,{to:"/calculator",className:u.Z.buttonWrapper,children:(0,x.jsx)(c.Z,{className:u.Z.button,variant:"contained",children:"Click Here"})})]})})},p=function(e){var a=e.handleModalClose,t=e.modalState,c=(0,r.Z)("(max-width: 480px)");return(0,x.jsx)(s.Z,{style:{top:c&&83},open:t.open,onClose:a,closeAfterTransition:!0,slots:{backdrop:n.Z},slotProps:{backdrop:{timeout:500,sx:{top:c&&83,backgroundColor:"#2121211f"}}},disableScrollLock:!!c,children:(0,x.jsx)(i.Z,{in:t.open,children:(0,x.jsx)(l.Z,{children:"calculator"===t.source?(0,x.jsx)(h,{handleModalClose:a,modalState:t}):(0,x.jsx)(m,{handleModalClose:a})})})})}},1680:function(e,a,t){var r=t(5336),s=t(8496),n=t(2791),i=t(184);a.Z=function(e){var a=(0,r.a)().calculator;return(0,i.jsx)("div",{className:s.Z.sideBarContainer,children:n.cloneElement(e.children,{calculator:a})})}},5008:function(e,a,t){t.r(a),t.d(a,{default:function(){return me}});var r=t(1413),s=t(9439),n=t(2791),i=t(3855),l=t(9198),c=t(9251),d=t(5527),o=t(1582),u=t(5904),x=t(1618),h="DiaryAddProductForm_section__OMkqD",m="DiaryAddProductForm_diaryform__I65-r",p="DiaryAddProductForm_formdiv__wXEO1",j="DiaryAddProductForm_diaryFormBtn__knET2",Z=t(4142),f=t(2260),_=t(5336),y=t(763),g=t(5821),v=t(1300),N="DiaryAddButton_circlePlus__7yYCy",B=t(3400),C=t(2419),b=t(184);function k(e){var a=e.onClick,t=e.disabled;return(0,b.jsx)(B.Z,{variant:"outlined",className:N,type:"button",onClick:a,disabled:t,children:(0,b.jsx)(C.Z,{})})}function D(e){var a=e.diaryBackBtn,t=(0,n.useState)(""),l=(0,s.Z)(t,2),c=l[0],d=l[1],N=(0,n.useState)(""),B=(0,s.Z)(N,2),C=B[0],D=B[1],S=(0,_.a)(),I=S.calendarDate,F=S.allFoodsList,w=(0,i.I0)(),M=F?F.map((function(e){return e.title})):[],T=(0,v.Z)().width,P=(0,y.debounce)((function(e){w((0,Z.VU)(e))}),500),A=function(e){e.preventDefault();var t=F.find((function(e){return e.title===c})),r=Math.ceil(t.calories/100*C)||0;w((0,Z.NA)({calendarDate:I,productName:c,grams:C,calories:r})),w((0,g.setFoodsList)([])),d(""),D(""),w((0,g.setDiaryBackBtn)(!a))};return(0,b.jsx)("div",{className:h,children:(0,b.jsxs)("form",{className:m,onSubmit:A,children:[(0,b.jsx)("div",{className:p,children:(0,b.jsx)(o.Z,{spacing:2,children:(0,b.jsx)(u.Z,{id:"size-small-standard",sx:{"@media (min-width: 768px)":{width:"240px"}},freeSolo:!0,size:"small",options:M,value:c,onChange:function(e,a){null!==a&&d(a)},inputValue:c,onInputChange:function(e){var a=e.target.value||"";e&&(d(a),P(a))},renderInput:function(e){return(0,b.jsx)(x.Z,(0,r.Z)((0,r.Z)({required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",marginBottom:"8px","@media (min-width: 768px)":{width:"240px",marginBottom:"0"}}},e),{},{variant:"standard",label:"Enter product name"}))}})})}),(0,b.jsx)("div",{className:p,children:(0,b.jsx)(x.Z,{required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left","@media (min-width: 768px)":{width:"106px",paddingBottom:"0",marginRight:"100px",marginLeft:"22px",textAlign:"right"}},id:"standard-basic",label:"Grams",variant:"standard",type:"number",value:C,onChange:function(e){D(e.target.value)}})}),T>768?(0,b.jsx)(k,{onClick:A,disabled:""===c||""===C}):(0,b.jsx)(f.Z,{className:j,color:"orange",disabled:""===c||""===C,children:"Add"})]})})}var S=t(7892),I=t.n(S),F=t(3634),w=t(1652),M=t(4979),T=t(4659),P=t(1098),A=t(6886),E=t(5570),L=t(627),R={btnPopperContainer:"DiaryCalendar_btnPopperContainer__UUGlP",dateText:"DiaryCalendar_dateText__ujwTY",paper:"DiaryCalendar_paper__ek8Ei"};function Y(){var e=(0,n.useState)(I()()),a=(0,s.Z)(e,2),t=a[0],l=a[1],c=(0,n.useState)(I()().format("MM/DD/YYYY")),o=(0,s.Z)(c,2),u=o[0],x=o[1],h=(0,i.I0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(w._,{dateAdapter:F.y,children:(0,b.jsx)("div",{className:R.calendarContainer,children:(0,b.jsx)(A.ZP,{variant:"popper",popupId:"demo-popup-popper",children:function(e){return(0,b.jsxs)("div",{className:R.btnPopperContainer,children:[(0,b.jsx)("h2",{className:R.dateText,children:u}),(0,b.jsx)(B.Z,(0,r.Z)((0,r.Z)({"aria-label":"delete"},(0,E.LI)(e)),{},{children:(0,b.jsx)(M.Z,{})})),(0,b.jsx)(P.Z,(0,r.Z)((0,r.Z)({},(0,E.Rg)(e)),{},{transition:!0,children:function(a){var s=a.TransitionProps;return(0,b.jsx)(L.Z,(0,r.Z)((0,r.Z)({},s),{},{timeout:100,children:(0,b.jsx)(d.Z,{className:R.paper,sx:{backgroundColor:"white",color:"black"},children:(0,b.jsx)(T.W,{value:t,onChange:function(a){l(a),function(e){var a=I()("".concat(e)).format("MM/DD/YYYY");x(a),h((0,g.setCalDate)(a)),h((0,Z.gl)(a))}(a),e.close()},showDaysOutsideCurrentMonth:!0,fixedWeekNumber:6,referenceDate:I()(),views:["year","month","day"]})})}))}}))]})}})})})})}var W=t(1680),q="style_productListItem__51ZJu",U="style_productDeleteButton__dWPC9",V="style_title__mYDl8",z="style_titlePrimary__L77IB",X="style_weight__oqhza",H="style_calories__fB7Dk",O="style_caloriesPrimary__Evuxy",G="style_caloriesSecondary__rImu7",J=t(4852),Q=t(9900),K=t(7247),$=t(890);var ee=function(e){var a=e.product,t=e.handleDelete;return(0,b.jsxs)(J.ZP,{className:q,children:[(0,b.jsx)(Q.Z,{className:V,primary:(0,b.jsx)($.Z,{className:z,children:a.title})}),(0,b.jsx)(Q.Z,{className:X,primary:(0,b.jsxs)($.Z,{className:z,children:[a.weight," g"]})}),(0,b.jsx)(Q.Z,{className:H,primary:(0,b.jsx)($.Z,{className:O,children:a.calories}),secondary:(0,b.jsx)($.Z,{className:G,children:"kcal"})}),(0,b.jsx)(B.Z,{className:U,"aria-label":"delete",onClick:function(){return t(a._id)},children:(0,b.jsx)(K.Z,{})})]})},ae="style_productList__83D9D",te=t(493);var re=function(){var e=(0,i.I0)(),a=(0,_.a)(),t=a.calendarDate,r=a.diaryList;function s(a){var r=t.replaceAll("/","-");e((0,Z.jx)({formatDate:r,entryId:a}))}return(0,b.jsx)(b.Fragment,{children:r.length<1?(0,b.jsx)("p",{children:"No Entires for this day"}):(0,b.jsx)(te.Z,{className:ae,children:r.map((function(e,a){return(0,b.jsx)(ee,{product:e,handleDelete:s},"".concat(e._id,"-").concat(a))}))})})},se=t(5193),ne=t(4110),ie=t(6292),le=t(8496),ce=function(e){var a=e.date,t=e.summary,r=e.searchInputChange,s=e.searchResults,n=(0,se.Z)("(min-width: 769px)");return(0,b.jsxs)("div",{className:le.Z.sideBarContentWrapper,children:[(0,b.jsxs)("div",{className:le.Z.sideBarContent,children:[(0,b.jsxs)("p",{className:le.Z.sideBarTitle,children:["Summary for ",a.replaceAll("-","/")]}),(0,b.jsxs)("ul",{className:le.Z.statsBox,children:[(0,b.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,b.jsx)("p",{children:"Left"}),(0,b.jsx)("p",{children:t.left.toFixed(1)})]}),(0,b.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,b.jsx)("p",{children:"Consumed"}),(0,b.jsx)("p",{children:t.totalConsumed.toFixed(1)})]}),(0,b.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,b.jsx)("p",{children:"Daily rate"}),(0,b.jsx)("p",{children:t.dailyRate.toFixed(1)})]}),(0,b.jsxs)("li",{className:le.Z.statsBoxItem,children:[(0,b.jsx)("p",{children:"n% of normal"}),(0,b.jsxs)("p",{children:[t.percentage,"%"]})]})]})]}),(0,b.jsxs)("div",{className:le.Z.sideBarContent,children:[(0,b.jsx)("p",{className:le.Z.sideBarTitle,children:"Food not recommended"}),(0,b.jsxs)("div",{children:[(0,b.jsx)(ne.Z,{placeholder:"type here..",onChange:r}),(0,b.jsx)(ie.Z,{array:s,style:{height:n?400:150}})]})]})]})};ce.defaultProps={date:"DATE",summary:{left:0,totalConsumed:0,dailyRate:0,percentage:0}};var de=ce,oe=function(e){var a=e.calculator,t=(0,_.a)(),r=t.diaryList,s=t.calendarDate,n=t.diaryDailyRate,l=t.notAllowedFoods,c=t.calculatorDailyRate,d=(0,i.I0)(),o=((n||c)>1?n||c:0)||0,u=r?r.reduce((function(e,a){return e+a.calories}),0):0,x={left:null===u||isNaN(u)?0:Math.max(o-u,0),totalConsumed:u,dailyRate:o,percentage:0!==o?Math.round(u/o*100):0},h=a.bloodType,m=(0,y.debounce)((function(e){var a=e.target.value;a.length>0&&d((0,Z.Xj)({title:a,bloodType:h}))}),400);return(0,b.jsx)(de,{date:s,summary:x,searchInputChange:m,searchResults:l})},ue=t(1529),xe=t(1533),he=t(1980);var me=function(){var e=(0,i.I0)(),a=(0,_.a)(),t=a.diaryBackBtn,o=a.calculator,u=a.diaryIsLoading,x=a.calculatorIsLoading,h=(0,he.a)(),m=h.loggedIn,p=h.refreshing,j=(0,v.Z)().width,Z=(0,n.useState)(""),f=(0,s.Z)(Z,2),y=f[0],N=f[1],B=(0,n.useState)(""),C=(0,s.Z)(B,2),S=C[0],I=C[1],F=(0,n.useState)(!0),w=(0,s.Z)(F,2),M=w[0],T=w[1],P=(0,i.v9)(ue.h),A=(0,n.useState)({open:!1,source:"diary"}),E=(0,s.Z)(A,2),L=E[0],R=E[1];return(0,n.useEffect)((function(){T(!1)}),[e]),(0,n.useEffect)((function(){!1===t?(N("block"),I("none")):(N("none"),I("block"))}),[t]),(0,n.useEffect)((function(){o.startDate||R((function(e){return(0,r.Z)((0,r.Z)({},e),{},{open:!0})}))}),[]),(0,b.jsx)("div",{className:"background Calc-DairyBackground",style:{display:"flex",flexDirection:"column"},children:u||x||p||!m||M?(0,b.jsx)(c.Z,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("section",{className:"top-bottom",children:(0,b.jsx)(l.Z,{className:"left-right",children:j>767?(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{children:[(0,b.jsx)(Y,{}),(0,b.jsx)(D,{}),(0,b.jsx)(re,{})]})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:{display:"".concat(S)},children:(0,b.jsx)(D,{diaryBackBtn:t})}),(0,b.jsxs)("div",{style:{display:"".concat(y)},children:[(0,b.jsx)(Y,{}),(0,b.jsx)(re,{}),(0,b.jsx)(k,{onClick:function(){e((0,g.setDiaryBackBtn)(!t))}})]})]})})}),(0,b.jsx)("section",{className:"no-bottom",children:(0,b.jsxs)(l.Z,{className:"no-left-right",children:[(0,b.jsx)(d.Z,{className:"".concat(le.Z.sidebarBox," ").concat("dark"===P?le.Z.darkMode:le.Z.lightMode)}),(0,b.jsx)(W.Z,{children:(0,b.jsx)(oe,{})})]})}),(0,b.jsx)(xe.Z,{modalState:L})]})})}},8496:function(e,a){a.Z={sideBarContainer:"rightSideBar_sideBarContainer__rWrUX",sidebarBox:"rightSideBar_sidebarBox__q9pRQ",sideBarContentWrapper:"rightSideBar_sideBarContentWrapper__EDhJV",sideBarContent:"rightSideBar_sideBarContent__TIFBc",sideBarTitle:"rightSideBar_sideBarTitle__1pky6",statsBox:"rightSideBar_statsBox__0Xanq",statsBoxItem:"rightSideBar_statsBoxItem__Vk8lb",darkMode:"rightSideBar_darkMode__52h21",lightMode:"rightSideBar_lightMode__SLrv9"}}}]);
//# sourceMappingURL=8.1dc78a15.chunk.js.map