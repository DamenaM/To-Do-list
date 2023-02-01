(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(81),a=n.n(r),s=n(645),o=n.n(s)()(a());o.push([t.id,".all-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  border-radius: 4px;\r\n  justify-content: center;\r\n  margin-top: 150px;\r\n  text-align: left;\r\n  box-shadow: rgba(19, 18, 18, 0.2) 0 2px 8px 0;\r\n}\r\n\r\n.task_list_container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ni {\r\n  color: #a1a1a1;\r\n}\r\n\r\n.edit-task {\r\n  margin-left: 98%;\r\n}\r\n\r\n#refresh {\r\n  margin-right: 0;\r\n}\r\n\r\n.header-list > h1 {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin: 0;\r\n  color: #525252;\r\n}\r\n\r\n.header-list #refresh {\r\n  color: grey;\r\n}\r\n\r\n.container-main {\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  border-radius: 3px;\r\n  justify-content: center;\r\n  margin-top: 40%;\r\n}\r\n\r\n.header-list {\r\n  margin-top: -200px;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ebebeb;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 40px;\r\n}\r\n\r\n.container-form {\r\n  padding: 10px;\r\n}\r\n\r\n.todo-list {\r\n  margin-left: -40px;\r\n}\r\n\r\n.todo-list > li {\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 150px;\r\n}\r\n\r\n.input {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: #525252;\r\n  font-size: 15px;\r\n  width: 89%;\r\n}\r\n\r\n.description-task {\r\n  padding: 30px;\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type=text] {\r\n  outline: 0;\r\n  font-style: italic;\r\n}\r\n\r\ninput:focus {\r\n  border-color: rgb(195, 188, 190);\r\n}\r\n\r\n.div-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-bottom: 1px solid #ebebeb;\r\n  gap: 50px;\r\n}\r\n\r\n.todo-footer {\r\n  background-color: #f7f7f7;\r\n  text-align: center;\r\n  padding: 16px;\r\n}\r\n\r\n.cleartodo a {\r\n  margin-left: 20px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  color: #525252;\r\n  text-decoration: none;\r\n}\r\n",""]);const i=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},o=[],i=0;i<t.length;i++){var c=t[i],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=a(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var s=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var i=n(s[o]);e[i].references--}for(var c=r(t,a),l=0;l<s.length;l++){var d=n(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),s=n(569),o=n.n(s),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.tasks=JSON.parse(localStorage.getItem("tasks"))||[],this.taskTitle=document.querySelector("#task-description"),this.taskStatus=document.querySelector("#author"),this.taskDisplay=document.querySelector("#display"),this.buttonAdd=document.querySelector("#add"),this.clearall=document.querySelector("#clearall"),this.checkboxStatus=document.querySelector("#checkboxid"),this.render()}addTask(t,e,n){this.tasks.push({id:t,title:e,status:n}),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.render()}removeTask(t){this.tasks.splice(t,1),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.render()}addTaskUpdate(t){this.tasks.splice(t,0),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.render()}myCheckbox(t){this.tasks.forEach((e=>{t.id===e.id&&(t.checked?e.status=!0:e.status=!1)})),localStorage.setItem("tasks",JSON.stringify(this.tasks))}render(){this.taskDisplay.innerHTML="",this.taskDisplay.classList.add("task_container"),0===this.tasks.length&&this.taskDisplay.classList.remove("task_container"),this.tasks.forEach(((t,e)=>{const n=document.createElement("div");n.innerHTML=`\n      <div>\n      <input type="checkbox" class="checkbox" id=${t.id}>\n       &nbsp ${t.title} &nbsp\n      </div>\n      <div>\n      <button class="remove-button"  data-index="${e}">Remove</button>\n                <br><br>\n      </div>\n       \n      \n            `,n.style.background=e%2==0?"#dddddd":"#fff",this.taskDisplay.appendChild(n),n.classList.add("task_list_container")})),document.querySelectorAll(".remove-button").forEach((t=>{t.addEventListener("click",(()=>{this.removeTask(t.getAttribute("data-index"))}))})),document.querySelectorAll(".checkbox").forEach((t=>{t.addEventListener("click",(t=>{this.myCheckbox(t.target)}))})),document.querySelectorAll(".clear-completed-task").forEach((t=>{t.addEventListener("click",(()=>{this.tasks=this.tasks.filter((t=>!t.status)),localStorage.setItem("tasks",JSON.stringify(this.tasks)),document.querySelectorAll(".checkbox").forEach((t=>t.remove()))}))}))}};m.buttonAdd.addEventListener("click",(()=>{const t=`${(new Date).getTime()}`,e=m.taskTitle.value;m.addTask(t,e,!1),m.taskTitle.value="",m.taskStatus.value=""}))})()})();