(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{404:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(10),o=(r(61),r(108)),c=r(405);function d(){var t=Object(o.f)().$axios;function e(){return(e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(c.a)(),o=n.buildUrlQuery,d=o("/notes",r),e.prev=2,e.next=5,t.$get(d);case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(2),new Error("Failed to fetch notes");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function r(){return(r=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post("/notes",r);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Failed to create notes");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$patch("/notes/".concat(r.id),r);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Failed to create notes");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function I(){return(I=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$delete("/notes/".concat(r.id));case 3:return e.abrupt("return",!0);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Failed to create notes");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return{getNotes:function(t){return e.apply(this,arguments)},createNote:function(t){return r.apply(this,arguments)},updateNote:function(t){return d.apply(this,arguments)},deleteNote:function(t){return I.apply(this,arguments)}}}},405:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(46),r(109),r(52),r(51);function n(){return{buildUrlQuery:function(t,e){if(!e||0===Object.keys(e).length)return t;var r=Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&");return"".concat(t,"?").concat(r)}}}},407:function(t,e,r){var content=r(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("60d8852c",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(409),r(178);var n=r(133),o=Object(n.c)("notes",{state:function(){return{notes:null}},actions:{setNotes:function(t){this.notes=t},addNoteToStore:function(t){null===this.notes?this.notes=[t]:this.notes.push(t)},deleteNote:function(t){if(null!==this.notes){var e=this.notes.findIndex((function(e){return e.id===t.id}));-1!==e&&this.notes.splice(e,1)}}}})},409:function(t,e,r){"use strict";var n=r(1),o=r(89).findIndex,c=r(177),d="findIndex",I=!0;d in[]&&Array(1)[d]((function(){I=!1})),n({target:"Array",proto:!0,forced:I},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},412:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pg0KDQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCg0KPHRpdGxlLz4NCg0KPGcgaWQ9IkNvbXBsZXRlIj4NCg0KPGcgaWQ9ImFkZC1zcXVhcmUiPg0KDQo8Zz4NCg0KPHJlY3QgZGF0YS1uYW1lPSItLVJlY3RhbmdsZSIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyMCIgaWQ9Il8tLVJlY3RhbmdsZSIgcng9IjIiIHJ5PSIyIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB3aWR0aD0iMjAiIHg9IjIiIHk9IjIiLz4NCg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgeDE9IjE1LjUiIHgyPSI4LjUiIHkxPSIxMiIgeTI9IjEyIi8+DQoNCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTUuNSIgeTI9IjguNSIvPg0KDQo8L2c+DQoNCjwvZz4NCg0KPC9nPg0KDQo8L3N2Zz4="},413:function(t,e,r){t.exports=r.p+"img/save.60c6948.svg"},414:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi4xOSAySDcuODFDNC4xNyAyIDIgNC4xNyAyIDcuODFWMTYuMThDMiAxOS44MyA0LjE3IDIyIDcuODEgMjJIMTYuMThDMTkuODIgMjIgMjEuOTkgMTkuODMgMjEuOTkgMTYuMTlWNy44MUMyMiA0LjE3IDE5LjgzIDIgMTYuMTkgMlpNMTMuOTIgMTYuMTNIOUM4LjU5IDE2LjEzIDguMjUgMTUuNzkgOC4yNSAxNS4zOEM4LjI1IDE0Ljk3IDguNTkgMTQuNjMgOSAxNC42M0gxMy45MkMxNS4yIDE0LjYzIDE2LjI1IDEzLjU5IDE2LjI1IDEyLjNDMTYuMjUgMTEuMDEgMTUuMjEgOS45NyAxMy45MiA5Ljk3SDguODVMOS4xMSAxMC4yM0M5LjQgMTAuNTMgOS40IDExIDkuMSAxMS4zQzguOTUgMTEuNDUgOC43NiAxMS41MiA4LjU3IDExLjUyQzguMzggMTEuNTIgOC4xOSAxMS40NSA4LjA0IDExLjNMNi40NyA5LjcyQzYuMTggOS40MyA2LjE4IDguOTUgNi40NyA4LjY2TDguMDQgNy4wOUM4LjMzIDYuOCA4LjgxIDYuOCA5LjEgNy4wOUM5LjM5IDcuMzggOS4zOSA3Ljg2IDkuMSA4LjE1TDguNzcgOC40OEgxMy45MkMxNi4wMyA4LjQ4IDE3Ljc1IDEwLjIgMTcuNzUgMTIuMzFDMTcuNzUgMTQuNDIgMTYuMDMgMTYuMTMgMTMuOTIgMTYuMTNaIiBmaWxsPSIjMjkyRDMyIi8+DQo8L3N2Zz4="},415:function(t,e,r){"use strict";r(407)},416:function(t,e,r){var n=r(87)((function(i){return i[1]}));n.push([t.i,"form#add-note-form .actions #add-trigger,form#add-note-form .actions #save-trigger{align-items:center;background-color:#fab247;border-radius:5px;display:inline-flex;font-size:12px;gap:5px;padding:5px 10px}form#add-note-form .actions #add-trigger:hover,form#add-note-form .actions #save-trigger:hover{cursor:pointer;opacity:.8}form#add-note-form .actions #add-trigger.active,form#add-note-form .actions #save-trigger.active{opacity:.4}form#add-note-form .actions #add-trigger img,form#add-note-form .actions #save-trigger img{height:20px;opacity:1;width:20px}form#add-note-form .actions #save-trigger{background-color:#fff;outline:1px solid #b4d2d2}form#add-note-form .textarea-wrapper{position:relative}form#add-note-form .textarea-wrapper textarea{display:none;overflow:hidden;padding-right:40px;resize:none}form#add-note-form .textarea-wrapper textarea.active{display:block}form#add-note-form .textarea-wrapper img{height:26px;opacity:.4;padding:2px;position:absolute;right:15px;top:15px;width:26px}form#add-note-form .textarea-wrapper img:hover{cursor:pointer;opacity:1}",""]),n.locals={},t.exports=n},419:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(61),r(0)),c=r(108),d=r(404),I=r(408),l=Object(o.defineComponent)({props:{email:{type:Object,required:!0}},setup:function(t){var e=Object(c.d)(""),r=Object(d.a)().createNote,o=Object(I.a)(),l=function(){var c=Object(n.a)(regeneratorRuntime.mark((function n(c){var d,I;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),""!==e.value){n.next=4;break}return f.value=!1,n.abrupt("return",!1);case 4:return d={text:e.value,context:{message_id:t.email.identifiers.message_id}},n.next=7,r(d);case 7:I=n.sent,o.addNoteToStore(I),e.value="",f.value=!1;case 11:case"end":return n.stop()}}),n)})));return function(t){return c.apply(this,arguments)}}(),f=Object(c.d)(!1),m=function(){var textarea=document.querySelector("#add-note-form textarea");textarea&&(textarea.style.height="auto",textarea.style.height=textarea.scrollHeight+"px")};Object(c.c)((function(){var textarea=document.querySelector("#add-note-form textarea");textarea&&textarea.addEventListener("input",m)}));return{noteText:e,submitForm:l,addFormActive:f,autoExpandTextarea:m,discardNote:function(){e.value="",f.value=!1}}}}),f=l,m=(r(415),r(37)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("form",{attrs:{id:"add-note-form"}},[e("div",{staticClass:"actions"},[t.addFormActive?e("div",{attrs:{id:"save-trigger"}},[e("img",{attrs:{src:r(413),alt:"Add note",role:"presentation",focusable:"false"}}),t._v("\n      Save\n    ")]):e("div",{class:{active:t.addFormActive},attrs:{id:"add-trigger"},on:{click:function(e){t.addFormActive=!t.addFormActive}}},[e("img",{attrs:{src:r(412),alt:"Add note",role:"presentation",focusable:"false"}}),t._v("\n      Add a note\n    ")])]),t._v(" "),e("div",{staticClass:"textarea-wrapper"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteText,expression:"noteText"}],class:{active:t.addFormActive},attrs:{rows:"1"},domProps:{value:t.noteText},on:{blur:t.submitForm,input:[function(e){e.target.composing||(t.noteText=e.target.value)},t.autoExpandTextarea]}}),t._v(" "),e("img",{attrs:{src:r(414),alt:"Discard note",role:"presentation",focusable:"false"},on:{mousedown:t.discardNote}})])])}),[],!1,null,null,null);e.default=component.exports}}]);