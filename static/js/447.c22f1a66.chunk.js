"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[447],{4447:function(n,e,r){r.r(e),r.d(e,{default:function(){return nn}});var t,a,i,o,d,s,c,l,u,x,p,m,h=r(2791),g=r(168),f=r(6444),b=f.ZP.section(t||(t=(0,g.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n"]))),Z=r(184),v=function(n){var e=n.children;return(0,Z.jsx)(b,{children:e})},j=r(2132),y=f.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  height: 100%;\n  border: 1px solid darkgrey;\n  border-radius: 5px;\n  max-height: calc(100vh - 193px);\n  min-height: calc(100vh - 193px);\n  padding: 12px;\n"]))),w=r(7689),k=function(){return(0,Z.jsx)(y,{children:(0,Z.jsx)(w.j3,{})})},C=f.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),P=f.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  gap: 16px;\n  width: 100%;\n  height: 100%;\n"]))),_=r(9434),L=r(1438),F=r(9996),z=function(n){return n.filter},A="ContactList_contactList__UFVCg",T=r(1087),N=f.ZP.li(d||(d=(0,g.Z)(["\n  margin-bottom: 10px;\n\n  animation-duration: 1s;\n  animation-name: addContact;\n"]))),q=f.ZP.span(s||(s=(0,g.Z)(["\n  /* margin-right: 10px; */\n"]))),I=(0,f.ZP)(T.OL)(c||(c=(0,g.Z)(["\n  text-transform: capitalize;\n  padding: 3px 4px;\n  border-radius: 5px;\n  border-bottom: 1px dashed darkgrey;\n  display: grid;\n  gap: 16px;\n  grid-template: 'a b' / 1.6fr 0.64fr;\n  &:hover {\n    background-color: darkgrey;\n  }\n  &.active {\n    background-color: darkgrey;\n    &:hover {\n      background-color: grey;\n    }\n  }\n"]))),B=function(n){var e=n.id,r=n.name,t=n.number;return(0,Z.jsx)(N,{children:(0,Z.jsxs)(I,{to:"/contacts/".concat(e),children:[(0,Z.jsxs)("span",{children:[r,":"]}),(0,Z.jsx)(q,{children:t})]})})},D=function(){var n=(0,_.v9)(L.m),e=function(n,e){var r=n.toLowerCase().trim();return e.filter((function(n){return n.name.toLowerCase().includes(r)})).sort((function(n,e){return n.name.localeCompare(e.name)}))}((0,_.v9)(z),n),r=(0,_.I0)();return(0,h.useEffect)((function(){r((0,F.CL)())}),[r]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("ul",{className:A,children:e.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,Z.jsx)(B,{id:e,name:r,number:t},e)}))})})},E=r(1413),J=r(9420),M={name:{label:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0},number:{label:"Number",type:"tel",name:"number",title:"The phone number must be ten digits. e.g. 0970066415",minLength:"10",maxLength:"10",required:!0}},O=r(8551),S=f.ZP.form(l||(l=(0,g.Z)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  padding: 12px;\n  margin-bottom: 16px;\n  border: 1px solid darkgrey;\n  border-radius: 5px;\n"]))),U=r(1579),V=function(){var n=(0,_.v9)(L.m),e=(0,_.I0)();return(0,Z.jsxs)(S,{autoComplete:"off",onSubmit:function(r){r.preventDefault();var t=r.currentTarget.name.value.toLowerCase(),a=(0,U.a)(r.currentTarget.number.value);(0,U.l)(t,n)||(e((0,F.xe)({name:t,number:a})),r.currentTarget.reset())},children:[(0,Z.jsx)(J.Z,(0,E.Z)({},M.name)),(0,Z.jsx)(J.Z,(0,E.Z)({pattern:"\\d*"},M.number)),(0,Z.jsx)(O.Z,{text:"Add contact",type:"submit"})]})},$=r(9439),G=r(1634),H=r(458),K=f.ZP.label(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  padding: 0 24px;\n  margin-bottom: 16px;\n"]))),Q=f.ZP.input(x||(x=(0,g.Z)(["\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 1px solid darkgrey;\n  outline: none;\n  padding: 5px 6px;\n  transition: all 0.2s ease;\n  width: 100%;\n\n  &:focus {\n    box-shadow: darkgrey 0px 1px;\n  }\n"]))),R=f.ZP.div(p||(p=(0,g.Z)(["\n  position: relative;\n  max-width: 600px;\n  flex: 1;\n"]))),W=(0,f.ZP)(H.w75)(m||(m=(0,g.Z)(["\n  position: absolute;\n  color: grey;\n  right: 4px;\n  top: 2px;\n"]))),X=function(){var n=(0,T.lr)(),e=(0,$.Z)(n,2)[1],r=(0,_.I0)(),t=(0,_.v9)(z),a=(0,w.s0)();return(0,Z.jsx)(K,{htmlFor:"idFilter",children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(Q,{autoComplete:"off",id:"idFilter",name:"filter",value:t,onFocus:function(){return a("/contacts")},onChange:function(n){var t=n.target;e({query:t.value}),r((0,G.T)(t.value))},placeholder:"Find contacts by name"}),(0,Z.jsx)(W,{size:22})]})})},Y=function(){return(0,Z.jsx)(v,{children:(0,Z.jsxs)(j.Z,{children:[(0,Z.jsx)(X,{}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(C,{children:[(0,Z.jsx)(V,{}),(0,Z.jsx)(D,{})]}),(0,Z.jsx)(k,{})]})]})})};Y.defaultProps={};var nn=Y},2132:function(n,e,r){r.d(e,{Z:function(){return d}});r(2791);var t,a=r(168),i=r(6444).ZP.div(t||(t=(0,a.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  /* @media screen and (min-width: 480px) {\n    max-width: 480px;\n  }*/\n\n  @media screen and (min-width: 900px) {\n    max-width: 900px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),o=r(184),d=function(n){var e=n.children;return(0,o.jsx)(i,{children:e})}}}]);
//# sourceMappingURL=447.c22f1a66.chunk.js.map