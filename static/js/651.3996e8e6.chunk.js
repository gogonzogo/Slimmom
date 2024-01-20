"use strict";(self.webpackChunkslimmom=self.webpackChunkslimmom||[]).push([[651],{9198:function(e,t,a){var r=a(2007),n=a(184),c=function(e){var t=e.children,a=e.className;return(0,n.jsx)("div",{className:a,children:t})};c.propTopes={children:r.node.isRequired,className:r.string},t.Z=c},651:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var r=a(7689),n=a(5861),c=a(9439),i=a(4687),s=a.n(i),l=a(5022),o=a(4415),u=a(2791),h=a(4142),d=a(3855),m="ArchiveByDate_row__pxg8K",v="ArchiveByDate_report__4lH9R",f="ArchiveByDate_firstColumn__JwJr2",g="ArchiveByDate_otherColumn__ZPyWC",x="ArchiveByDate_totalColumn__U6yrO",p="ArchiveByDate_centerText__vQ3vN",j="ArchiveByDate_dateHeader__eUO3c",D="ArchiveByDate_logo__fmLy8",y="ArchiveByDate_buttons__m83ei",N=a(1146),_=a(2260),E=a(606),w=a(7393),A=a(6448),S=a(1529),Z=a(8897),C=a.n(Z),B=a(184);var T=function(e){var t,a=(0,u.useState)(e.archivesData.archiveinfo),r=(0,c.Z)(a,2),i=r[0],Z=r[1],T=e.archivesData.userinfo,k=e.archivesData.calculatorInfo,R=(0,u.useState)(e.archivesData.archiveDates),F=(0,c.Z)(R,2),P=F[0],b=F[1],H=(0,d.I0)(),W=(0,u.useState)(0),I=(0,c.Z)(W,2),q=I[0],G=I[1],L=(0,u.useState)(!1),M=(0,c.Z)(L,2),z=M[0],O=M[1],J=(0,u.useState)(!0),K=(0,c.Z)(J,2),Q=K[0],U=K[1],Y=(0,u.useState)(!1),V=(0,c.Z)(Y,2),X=V[0],$=V[1],ee=(0,u.useRef)(null),te=(0,d.v9)(S.h),ae=(0,u.useRef)(),re="archive".concat(i[0].startDate,"-").concat(i[0].endDate,".pdf");(0,u.useEffect)((function(){X&&ee.current&&ee.current()}),[X]);var ne=(0,N.useReactToPrint)({content:function(){return ae.current},onBeforeGetContent:function(){return t=te,H((0,A.qe)("light")),O(!0),U(!1),new Promise((function(e){ee.current=e,$(!0)}))},onAfterPrint:function(){H((0,A.qe)(t)),O(!1),U(!0),ee.current=null,$(!1)}}),ce=(0,N.useReactToPrint)({content:function(){return ae.current},onBeforeGetContent:function(){return t=te,H((0,A.qe)("light")),O(!0),U(!1),new Promise((function(e){ee.current=e,$(!0)}))},onAfterPrint:function(){H((0,A.qe)(t)),O(!1),U(!0),ee.current=null,$(!1)},removeAfterPrint:!0,print:function(){var e=(0,n.Z)(s().mark((function e(t){var a,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.contentDocument,r={margin:.5,filename:re,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}},a&&(n=a.getElementById("element-to-download-as-pdf"),new(C())(n,r).getPdf(!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),ie=function(){var e=(0,n.Z)(s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={archiveDate:i[0].archiveDate,startDate:i[0].startDate,endDate:i[0].endDate},e.next=3,H((0,h.eQ)(t));case 3:a=e.sent,b(a.payload.archiveDates);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,n.Z)(s().mark((function e(t){var a,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,G(t.target.value),r={archiveDate:P[a]._id.archiveDate,startDate:P[a]._id.startDate,endDate:P[a]._id.endDate},e.next=5,H((0,h.YK)(r));case 5:(n=e.sent)&&(Z(n.payload.archiveReturnData),re="archive".concat(P[a]._id.startDate,"-").concat(P[a]._id.endDate,".pdf"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=[];return P.forEach((function(e,t){le.push((0,B.jsxs)(l.Z,{value:t,children:["Archive Date ",e._id.archiveDate,"From ",e._id.startDate," To  ",e._id.endDate," "]},t))})),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{className:v,children:[(0,B.jsxs)("div",{children:[(0,B.jsx)("h1",{children:"archive by date"}),(0,B.jsx)(o.Z,{sx:{marginTop:0,width:700,height:20},value:q,onChange:se,children:le})]}),(0,B.jsxs)("div",{ref:ae,id:"element-to-download-as-pdf",children:[z&&(0,B.jsx)("div",{className:D,children:(0,B.jsx)(E.r,{className:w.Z.imageLogo,alt:"A waistline with a green measuring tape"})}),(0,B.jsx)("h3",{className:p,children:"Dairy Archive Summary for "}),(0,B.jsxs)("h5",{className:p,children:[T[0].name,"   (",T[0].email,")"]}),(0,B.jsxs)("h5",{className:p,children:["Archived on ",i[0].archiveDate]}),(0,B.jsxs)("h5",{className:p,children:[i[0].startDate," through ",i[0].endDate]}),"S"!==k[0].calculatorEntries[0].calculatorEntry[0].unitOfMeasure?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("h5",{className:p,children:["Height:  ",k[0].calculatorEntries[0].calculatorEntry[0].height.toString(),"cm  Age:  ",k[0].calculatorEntries[0].calculatorEntry[0].age.toString(),"  BloodType:   ",k[0].calculatorEntries[0].calculatorEntry[0].bloodType," "]}),(0,B.jsxs)("h5",{className:p,children:["Current Weight:  ",k[0].calculatorEntries[0].calculatorEntry[0].currentWeight.toString(),"kg  Desired Weight:  ",k[0].calculatorEntries[0].calculatorEntry[0].desiredWeight.toString(),"kg"]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("h5",{className:p,children:["Height:  ",k[0].calculatorEntries[0].calculatorEntry[0].heightFeet.toString(),"  feet ",k[0].calculatorEntries[0].calculatorEntry[0].heightInch.toString(),"  inches  Age:  ",k[0].calculatorEntries[0].calculatorEntry[0].age.toString(),"  BloodType:   ",k[0].calculatorEntries[0].calculatorEntry[0].bloodType," "]}),(0,B.jsxs)("h5",{className:p,children:["Current Weight:  ",k[0].calculatorEntries[0].calculatorEntry[0].currentWeightLbs.toString(),"lbs    Desired Weight:  ",k[0].calculatorEntries[0].calculatorEntry[0].desiredWeightLbs.toString(),"lbs"]})]}),i.map((function(e,t){return(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:m,children:(0,B.jsxs)("h4",{className:j,children:[" ",e.date]},"date-".concat(t))}),(0,B.jsxs)("div",{className:m,children:[(0,B.jsx)("h4",{className:f,children:"Food Name"},"FoodTitle-".concat(t)),(0,B.jsx)("h4",{className:g,children:" Grams"},"gramsTitle-".concat(t)),(0,B.jsx)("h4",{className:g,children:"Calories"},"calsTitle-".concat(t))]},"rowTitle-".concat(t)),e.foodItems.map((function(e,t){return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("div",{className:m,children:[(0,B.jsx)("p",{className:f,children:e.title},"title-".concat(t)),(0,B.jsx)("p",{className:g,children:e.weight},"weight-".concat(t)),(0,B.jsx)("p",{className:g,children:e.calories},"calories-".concat(t))]},"foodGeroup-".concat(t))})})),(0,B.jsxs)("div",{className:m,children:[(0,B.jsx)("p",{className:x,children:"Daily Rate:"},"totalHeadDaily-".concat(t)),(0,B.jsx)("p",{className:x,children:"Calories consumed"},"totalHeadconsumed-".concat(t)),(0,B.jsx)("p",{className:x,children:"Remaining calories"},"totalHeadRemaining-".concat(t))]},"totalHead-".concat(t)),(0,B.jsxs)("div",{className:m,children:[(0,B.jsx)("p",{className:x,children:Math.round(100*e.dailyRate)/100},"totalamtDaily-".concat(t)),(0,B.jsx)("p",{className:x,children:(Math.round(100*e.foodItems.reduce((function(e,t){return e+t.calories}),0))/100).toFixed(2)},"totalamtconsumed-".concat(t)),(0,B.jsx)("p",{className:x,children:(Math.round(100*(e.dailyRate-e.foodItems.reduce((function(e,t){return e+t.calories}),0)))/100).toFixed(2)},"totalamtRemaining-".concat(t))]},"totalamtd-".concat(t))]},"archiveDate-".concat(t))})),(0,B.jsxs)("div",{className:y,children:[Q&&(0,B.jsx)(_.Z,{onClick:function(){ne()},color:"orange",size:"archive",children:"Print Summary"}),Q&&(0,B.jsx)(_.Z,{onClick:ie,color:"orange",size:"archive",children:"Restore Archive"}),Q&&(0,B.jsx)(_.Z,{onClick:function(){ce()},color:"orange",size:"archive",children:"Save as PDF"})]})]})]}),(0,B.jsx)("div",{style:{height:"70px"}})]})},k=a(9198);var R=function(){var e=(0,r.TH)().state;return(0,B.jsx)("div",{className:"background Calc-DairyBackground",children:(0,B.jsx)("section",{children:(0,B.jsx)(k.Z,{children:(0,B.jsx)(T,{archivesData:e})})})})}}}]);
//# sourceMappingURL=651.3996e8e6.chunk.js.map