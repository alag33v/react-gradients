(this["webpackJsonpgradient-app"]=this["webpackJsonpgradient-app"]||[]).push([[0],{54:function(n,t,e){"use strict";e.r(t);var r,i,o,a,c,s,l=e(1),d=e.n(l),p=e(25),x=e.n(p),b=e(14),f=e(20),u=e(33),j=e(21),g="gradient/NEW_GRADIENT",h="gradient/EDIT_GRADIENT",m="gradient/DELETE_GRADIENT",O={gradients:[{id:"0",firstColor:"#e66465",secondColor:"#9198e5"},{id:"1",firstColor:"#23c27a",secondColor:"#395580"},{id:"2",firstColor:"#9198a3",secondColor:"#1c1b1b"}]},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)(Object(j.a)({},n),{},{gradients:[].concat(Object(u.a)(n.gradients),[t.payload])});case h:return Object(j.a)(Object(j.a)({},n),{},{gradients:[].concat(Object(u.a)(n.gradients.filter((function(n){return n.id!==t.payload.id}))),[t.payload])});case m:return Object(j.a)(Object(j.a)({},n),{},{gradients:n.gradients.filter((function(n){return n.id!==t.payload}))});default:return n}},v=Object(f.b)({gradient:w}),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.c,C=Object(f.d)(v,y()),k=e(18),_=e(4),N=e(23),E=e(11),z=e(7),S=z.default.div(r||(r=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 0;\n\n  .header-left__wrapper {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #eee;\n  }\n\n  h2 {\n    font-size: 30px;\n\n    @media (max-width: 400px) {\n      font-size: 24px;\n    }\n  }\n\n  .victory {\n    margin-left: 10px;\n    width: 28px;\n    height: 28px;\n  }\n\n  .circle {\n    fill: black;\n    animation: infinite-spinning 5s linear infinite;\n  }\n\n  @keyframes infinite-spinning {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),F=e(2),D=function(){return Object(F.jsxs)(S,{children:[Object(F.jsxs)(k.b,{className:"header-left__wrapper",to:"/react-gradients",children:[Object(F.jsx)("h2",{children:"Gradients"}),Object(F.jsx)(N.b,{className:"victory"})]}),Object(F.jsxs)("svg",{className:"circle",width:"80",height:"80",children:[Object(F.jsxs)("linearGradient",{id:"linearColors",x1:"0",y1:"0",x2:"1",y2:"1",children:[Object(F.jsx)("stop",{offset:"5%",stopColor:"#01E400"}),Object(F.jsx)("stop",{offset:"25%",stopColor:"#FEFF01"}),Object(F.jsx)("stop",{offset:"40%",stopColor:"#FF7E00"}),Object(F.jsx)("stop",{offset:"60%",stopColor:"#FB0300"}),Object(F.jsx)("stop",{offset:"80%",stopColor:"#9B004A"}),Object(F.jsx)("stop",{offset:"100%",stopColor:"#7D0022"})]}),Object(F.jsx)("circle",{r:"34",cx:"40",cy:"40",strokeWidth:"4",fill:"none",stroke:"url(#linearColors)"})]})]})},I=e(39),A=e(40),G=z.default.div(i||(i=Object(E.a)(["\n  ","\n  border-radius: 5px;\n  width: 800px;\n  max-width: 100%;\n  height: 100px;\n"])),(function(n){var t=n.firstColor,e=n.secondColor;return"background: linear-gradient(90deg, ".concat(t," 0%, ").concat(e," 100%);")})),T=function(n){var t=n.gradient,e=n.onEdit,r=n.onDeleteGradient;return Object(F.jsxs)("li",{className:"gradient-item",children:[Object(F.jsx)(G,{firstColor:t.firstColor,secondColor:t.secondColor}),Object(F.jsx)("span",{className:"first-color",children:t.firstColor}),Object(F.jsx)("span",{className:"second-color",children:t.secondColor}),Object(F.jsx)(I.a,{className:"edit",onClick:function(){return e(t.id)}}),Object(F.jsx)(A.a,{className:"delete",onClick:function(){return r(t.id)}})]})},q=z.default.div(o||(o=Object(E.a)(["\n  .gradient-item__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n    margin: 10px 0 25px;\n    padding: 0;\n  }\n\n  .gradient-item {\n    font-size: 20px;\n    list-style: none;\n    height: 100px;\n    width: 800px;\n    max-width: 100%;\n    margin-bottom: 25px;\n    position: relative;\n    cursor: pointer;\n  }\n\n  .first-color {\n    text-transform: lowercase;\n    left: 10px;\n    bottom: 0;\n    transform: translateY(-50%);\n    position: absolute;\n  }\n\n  .second-color {\n    text-transform: lowercase;\n    right: 10px;\n    bottom: 0;\n    transform: translateY(-50%);\n    position: absolute;\n  }\n\n  .btn {\n    font-size: 20px;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: rgb(255, 255, 255);\n    background-color: rgb(72, 48, 240);\n    border: 1px solid #fff;\n    border-radius: 10px;\n    padding: 20px 30px;\n    margin: 0 auto 50px;\n    width: 400px;\n    max-width: 100%;\n    display: block;\n    transition: 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgb(65 44 209);\n    }\n\n    &:active {\n      background-color: rgb(47 26 191);\n    }\n\n    @media (max-width: 500px) {\n      font-size: 16px;\n      padding: 15px;\n      width: 300px;\n    }\n  }\n\n  .edit {\n    fill: #ccc;\n    width: 24px;\n    height: 24px;\n    top: 5px;\n    right: 40px;\n    position: absolute;\n    transition: 0.3s;\n\n    &:hover {\n      fill: #fff;\n    }\n  }\n\n  .delete {\n    fill: #ccc;\n    width: 30px;\n    height: 30px;\n    top: 2px;\n    right: 5px;\n    position: absolute;\n    transition: 0.3s;\n\n    &:hover {\n      fill: #fff;\n    }\n  }\n"]))),R=function(){var n=Object(_.f)(),t=Object(b.c)((function(n){return n.gradient.gradients})),e=Object(b.b)(),r=function(t){n.push("/edit/".concat(t))},i=function(n){e(function(n){return{type:m,payload:n}}(n))};return Object(F.jsxs)(q,{children:[Object(F.jsx)("ul",{className:"gradient-item__wrapper",children:t&&t.map((function(n){return Object(F.jsx)(T,{gradient:n,onEdit:r,onDeleteGradient:i},"".concat(n.id))}))}),Object(F.jsx)("button",{className:"btn",onClick:function(){n.push("/new")},children:"New"})]})},$=e(15),B=z.default.div(a||(a=Object(E.a)(["\n  position: relative;\n\n  .input__wrapper {\n    display: flex;\n    justify-content: center;\n    padding: 75px 0 50px;\n\n    @media (max-width: 550px) {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n  label {\n    cursor: pointer;\n\n    @media (max-width: 550px) {\n      width: 100%;\n    }\n\n    span {\n      font-size: 12px;\n      display: block;\n      margin: 0 0 4px 25px;\n\n      @media (max-width: 550px) {\n        text-align: center;\n        margin: 0 0 4px;\n      }\n    }\n\n    input {\n      font-size: 16px;\n      text-align: center;\n      text-transform: lowercase;\n      color: #000;\n      background-color: #f2f2f2;\n      border: none;\n      border-radius: 5px;\n      display: block;\n      width: 300px;\n      max-width: 100%;\n      height: 40px;\n      margin: 0 25px;\n      padding: 0 15px;\n      outline: none;\n      cursor: pointer;\n\n      @media (max-width: 750px) {\n        width: 200px;\n      }\n\n      @media (max-width: 550px) {\n        width: 100%;\n        margin: 0 0 25px;\n      }\n    }\n  }\n\n  .error {\n    font-size: 16px;\n    text-align: center;\n    text-transform: capitalize;\n    letter-spacing: 1px;\n    color: tomato;\n    margin-bottom: 10px;\n  }\n\n  .btn {\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: rgb(255, 255, 255);\n    background-color: rgb(72, 48, 240);\n    border: 1px solid #fff;\n    border-radius: 10px;\n    padding: 15px;\n    margin: 0 auto;\n    width: 300px;\n    max-width: 100%;\n    display: block;\n    transition: 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgb(65 44 209);\n    }\n\n    &:active {\n      background-color: rgb(47 26 191);\n    }\n  }\n\n  .btn-disable {\n    background-color: rgb(137 135 147);\n\n    &:hover {\n      background-color: rgb(118 117 122);\n    }\n\n    &:active {\n      background-color: rgb(109 109 110);\n    }\n  }\n\n  .back {\n    fill: #ccc;\n    width: 30px;\n    height: 30px;\n    top: 0;\n    left: 0;\n    position: absolute;\n    transition: 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      fill: #fff;\n    }\n  }\n"]))),V=function(){var n=Object(_.f)(),t=Object(b.b)(),e={id:Date.now().toString(),firstColor:"",secondColor:""};return Object(F.jsxs)(B,{children:[Object(F.jsx)($.c,{initialValues:e,validate:function(n){var t={};return/^#([0-9A-F]{3}){1,2}$/i.test(n.firstColor)?/^#([0-9A-F]{3}){1,2}$/i.test(n.secondColor)||(t.text="Invalid second color"):t.text="Invalid first color",t},onSubmit:function(e){t({type:g,payload:e}),n.push("/react-gradients")},children:function(n){var t=n.isSubmitting,e=n.errors;return Object(F.jsxs)($.b,{children:[Object(F.jsxs)("div",{className:"input__wrapper",children:[Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{children:"First color"}),Object(F.jsx)($.a,{type:"text",name:"firstColor",required:!0})]}),Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{children:"Second color"}),Object(F.jsx)($.a,{type:"text",name:"secondColor",required:!0})]})]}),e.text?Object(F.jsx)("div",{className:"error",children:e.text}):null,Object(F.jsx)("button",{className:"btn ".concat(e.text?"btn-disable":""),type:"submit",disabled:t,children:"Add"})]})}}),Object(F.jsx)(N.a,{className:"back",onClick:function(){n.push("/react-gradients")}})]})},J=z.default.div(c||(c=Object(E.a)(["\n  position: relative;\n\n  .input__wrapper {\n    display: flex;\n    justify-content: center;\n    padding: 75px 0 50px;\n\n    @media (max-width: 550px) {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n  label {\n    cursor: pointer;\n\n    @media (max-width: 550px) {\n      width: 100%;\n    }\n\n    span {\n      font-size: 12px;\n      display: block;\n      margin: 0 0 4px 25px;\n\n      @media (max-width: 550px) {\n        text-align: center;\n        margin: 0 0 4px;\n      }\n    }\n\n    input {\n      font-size: 16px;\n      text-align: center;\n      text-transform: lowercase;\n      color: #000;\n      background-color: #f2f2f2;\n      border: none;\n      border-radius: 5px;\n      display: block;\n      width: 300px;\n      max-width: 100%;\n      height: 40px;\n      margin: 0 25px;\n      padding: 0 15px;\n      outline: none;\n      cursor: pointer;\n\n      @media (max-width: 750px) {\n        width: 200px;\n      }\n\n      @media (max-width: 550px) {\n        width: 100%;\n        margin: 0 0 25px;\n      }\n    }\n  }\n\n  .error {\n    font-size: 16px;\n    text-align: center;\n    text-transform: capitalize;\n    letter-spacing: 1px;\n    color: tomato;\n    margin-bottom: 10px;\n  }\n\n  .btn {\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: rgb(255, 255, 255);\n    background-color: rgb(72, 48, 240);\n    border: 1px solid #fff;\n    border-radius: 10px;\n    padding: 15px;\n    margin: 0 auto;\n    width: 300px;\n    max-width: 100%;\n    display: block;\n    transition: 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgb(65 44 209);\n    }\n\n    &:active {\n      background-color: rgb(47 26 191);\n    }\n  }\n\n  .btn-disable {\n    background-color: rgb(137 135 147);\n\n    &:hover {\n      background-color: rgb(118 117 122);\n    }\n\n    &:active {\n      background-color: rgb(109 109 110);\n    }\n  }\n\n  .back {\n    fill: #ccc;\n    width: 30px;\n    height: 30px;\n    top: 0;\n    left: 0;\n    position: absolute;\n    transition: 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      fill: #fff;\n    }\n  }\n"]))),L=function(n){var t=Object(_.f)(),e=Object(b.c)((function(n){return n.gradient.gradients})),r=Object(b.b)(),i=e.filter((function(t){return t.id===n.match.params.id})),o={id:i[0].id,firstColor:i[0].firstColor,secondColor:i[0].secondColor};return Object(F.jsxs)(J,{children:[Object(F.jsx)($.c,{initialValues:o,validate:function(n){var t={};return/^#([0-9A-F]{3}){1,2}$/i.test(n.firstColor)?/^#([0-9A-F]{3}){1,2}$/i.test(n.secondColor)||(t.text="Invalid second color"):t.text="Invalid first color",t},onSubmit:function(n){r({type:h,payload:n}),t.push("/react-gradients")},children:function(n){var t=n.isSubmitting,e=n.errors;return Object(F.jsxs)($.b,{children:[Object(F.jsxs)("div",{className:"input__wrapper",children:[Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{children:"First color"}),Object(F.jsx)($.a,{type:"text",name:"firstColor",required:!0})]}),Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{children:"Second color"}),Object(F.jsx)($.a,{type:"text",name:"secondColor",required:!0})]})]}),e.text?Object(F.jsx)("div",{className:"error",children:e.text}):null,Object(F.jsx)("button",{className:"btn ".concat(e.text?"btn-disable":""),type:"submit",disabled:t,children:"Edit"})]})}}),Object(F.jsx)(N.a,{className:"back",onClick:function(){t.push("/react-gradients")}})]})},M=e(43),W=Object(z.createGlobalStyle)(s||(s=Object(E.a)(["\n  ","\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    font-family: 'Open Sans', sans-serif;\n    max-width: 1200px;\n    padding: 0 25px;\n    margin: 0 auto;\n    color: #eee;\n    background-color: #50585E;\n  }\n"])),M.normalize),X=function(){return Object(F.jsxs)(k.a,{children:[Object(F.jsx)(W,{}),Object(F.jsx)(D,{}),Object(F.jsxs)(_.c,{children:[Object(F.jsx)(_.a,{path:"/react-gradients",component:R}),Object(F.jsx)(_.a,{path:"/new",component:V}),Object(F.jsx)(_.a,{path:"/edit/:id",component:L})]})]})};x.a.render(Object(F.jsx)(d.a.StrictMode,{children:Object(F.jsx)(b.a,{store:C,children:Object(F.jsx)(X,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.714dada9.chunk.js.map