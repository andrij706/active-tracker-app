(function(e){function t(t){for(var n,a,o=t[0],u=t[1],s=t[2],b=0,g=[];b<o.length;b++)a=o[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&g.push(c[a][0]),c[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(t);while(g.length)g.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},c={app:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var i=u;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=Object(n["t"])({user:null}),l={setUser:function(e){c.user=e?e.user:null}},a={state:c,methods:l},o=r("940b"),u="https://lecruecuevhqihmyrlfm.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY3J1ZWN1ZXZocWlobXlybGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNTk1NDIsImV4cCI6MjAxMzYzNTU0Mn0.ZGk8ZYjqZfnM13yWNRAv35_SRd15a_NY4c5uofxUBuw",i=Object(o["a"])(u,s),b=i,g=r("1da1"),d=(r("96cf"),r("38e9")),f=r.n(d),p=r("6c02"),O={class:"bg-at-light-green text-white"},j={class:"container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"},x=Object(n["g"])("div",{class:"flex items-center gap-x-4"},[Object(n["g"])("img",{class:"w-14",src:f.a}),Object(n["g"])("h1",{class:"text-lg"},"Active Tracker")],-1),m={class:"flex flex-1 justify-end gap-x-10"},v=Object(n["h"])("Home"),h=Object(n["h"])("Create"),y=Object(n["h"])("Login"),w={setup:function(e){var t=Object(p["d"])(),r=Object(n["b"])((function(){return a.state.user})),c=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.auth.signOut();case 2:t.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,t){var l=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("header",O,[Object(n["g"])("nav",j,[x,Object(n["g"])("ul",m,[Object(n["i"])(l,{class:"cursor-pointer",to:{name:"Home"}},{default:Object(n["D"])((function(){return[v]})),_:1}),Object(n["z"])(r)?(Object(n["r"])(),Object(n["d"])(l,{key:0,class:"cursor-pointer",to:{name:"Create"}},{default:Object(n["D"])((function(){return[h]})),_:1})):Object(n["e"])("",!0),Object(n["z"])(r)?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])(l,{key:1,class:"cursor-pointer",to:{name:"Login"}},{default:Object(n["D"])((function(){return[y]})),_:1})),Object(n["z"])(r)?(Object(n["r"])(),Object(n["f"])("li",{key:2,onClick:c,class:"cursor-pointer"},"Logout")):Object(n["e"])("",!0)])])])}}},k=w,U={key:0,class:"min-h-full font-Poppins box-border"},V={setup:function(e){var t=Object(n["u"])(null),r=b.auth.user();return r||(t.value=!0),b.auth.onAuthStateChange((function(e,r){a.methods.setUser(r),t.value=!0})),function(e,r){var c=Object(n["w"])("router-view");return t.value?(Object(n["r"])(),Object(n["f"])("div",U,[Object(n["i"])(k),Object(n["i"])(c)])):Object(n["e"])("",!0)}}},E=(r("821f"),V),T=(r("45fc"),r("f7da")),C=r.n(T),R=r("a25c"),B=r.n(R),S={key:0,class:"container mt-10 px-4"},I={key:0,class:"w-full flex flex-col items-center"},q=Object(n["g"])("h1",{class:"text-2xl"},"Looks empty here...",-1),W=Object(n["h"])(" Create Workout "),P={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},N={key:0,src:C.a,class:"h-24 w-auto"},_={key:1,src:B.a,class:"h-24 w-auto"},A={class:"mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg"},D={class:"mt-8 mb-2 text-center text-xl text-at-light-green"},L={setup:function(e){var t=Object(n["u"])([]),r=Object(n["u"])(null),c=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("workouts").select("*");case 3:if(n=e.sent,c=n.data,l=n.error,!l){e.next=8;break}throw l;case 8:t.value=c,r.value=!0,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.warn(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return c(),function(e,c){var l=Object(n["w"])("router-link");return r.value?(Object(n["r"])(),Object(n["f"])("div",S,[0===t.value.length?(Object(n["r"])(),Object(n["f"])("div",I,[q,Object(n["i"])(l,{to:{name:"Create"},class:"mt-6 py-2 px-6 rounded-sm self-center text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"},{default:Object(n["D"])((function(){return[W]})),_:1})])):(Object(n["r"])(),Object(n["f"])("div",P,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(t.value,(function(e,t){return Object(n["r"])(),Object(n["d"])(l,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(n["D"])((function(){return["cardio"===e.workoutType?(Object(n["r"])(),Object(n["f"])("img",N)):(Object(n["r"])(),Object(n["f"])("img",_)),Object(n["g"])("p",A,Object(n["y"])(e.workoutType),1),Object(n["g"])("h1",D,Object(n["y"])(e.workoutName),1)]})),_:2},1032,["to"])})),128))]))])):Object(n["e"])("",!0)}}},J=L,Z=(r("4795"),{class:"max-w-screen-sm mx-auto px-4 py-10"}),z={key:0,class:"mb-10 p-4 rounded-mb bg-kight-grey"},M={class:"text-red-500"},H=["onSubmit"],Y=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Login",-1),F={class:"flex flex-col mb-2"},X=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),G={class:"flex flex-col mb-2"},Q=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),K=Object(n["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Login ",-1),$=Object(n["h"])(" Don't have an account? "),ee=Object(n["g"])("span",{class:"text-at-light-green"},"Register",-1),te={setup:function(e){var t=Object(p["d"])(),r=Object(n["u"])(null),c=Object(n["u"])(null),l=Object(n["u"])(null),a=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.auth.signIn({email:r.value,password:c.value});case 3:if(n=e.sent,a=n.error,!a){e.next=7;break}throw a;case 7:t.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),l.value="Error: ".concat(e.t0.message),setTimeout((function(){l.value=null}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return function(e,t){var o=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",Z,[l.value?(Object(n["r"])(),Object(n["f"])("div",z,[Object(n["g"])("p",M,Object(n["y"])(l.value),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:Object(n["F"])(a,["prevent"]),class:"p-8 flex flex-col bg-light-grey rounded-mb shadow-lg"},[Y,Object(n["g"])("div",F,[X,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e})},null,512),[[n["B"],r.value]])]),Object(n["g"])("div",G,[Q,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.value=e})},null,512),[[n["B"],c.value]])]),K,Object(n["i"])(o,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(n["D"])((function(){return[$,ee]})),_:1})],40,H)])}}},re=te,ne={class:"max-w-screen-sm mx-auto px-4 py-10"},ce={key:0,class:"mb-10 p-4 rounded-mb bg-kight-grey"},le={class:"text-red-500"},ae=["onSubmit"],oe=Object(n["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),ue={class:"flex flex-col mb-2"},se=Object(n["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ie={class:"flex flex-col mb-2"},be=Object(n["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),ge={class:"flex flex-col mb-2"},de=Object(n["g"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),fe=Object(n["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register ",-1),pe=Object(n["h"])(" Already have an account? "),Oe=Object(n["g"])("span",{class:"text-at-light-green"},"Login",-1),je={setup:function(e){var t=Object(p["d"])(),r=Object(n["u"])(null),c=Object(n["u"])(null),l=Object(n["u"])(null),a=Object(n["u"])(null),o=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c.value!==l.value){e.next=16;break}return e.prev=1,e.next=4,b.auth.signUp({email:r.value,password:c.value});case 4:if(n=e.sent,o=n.error,!o){e.next=8;break}throw o;case 8:t.push({name:"Login"}),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),a.value=e.t0.message,setTimeout((function(){a.value=null}),5e3);case 15:return e.abrupt("return");case 16:a.value="Error: Passwords do not match",setTimeout((function(){a.value=null}),5e3);case 18:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return function(e,t){var u=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["f"])("div",ne,[a.value?(Object(n["r"])(),Object(n["f"])("div",ce,[Object(n["g"])("p",le,Object(n["y"])(a.value),1)])):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:Object(n["F"])(o,["prevent"]),class:"p-8 flex flex-col bg-light-grey rounded-mb shadow-lg"},[oe,Object(n["g"])("div",ue,[se,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e})},null,512),[[n["B"],r.value]])]),Object(n["g"])("div",ie,[be,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.value=e})},null,512),[[n["B"],c.value]])]),Object(n["g"])("div",ge,[de,Object(n["E"])(Object(n["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.value=e})},null,512),[[n["B"],l.value]])]),fe,Object(n["i"])(u,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(n["D"])((function(){return[pe,Oe]})),_:1})],40,ae)])}}},xe=je,me=(r("4de4"),r("9b82")),ve=r.n(me),he=r("8a77"),ye={class:"max-w-screen-md mx-auto px-4 py-10"},we={key:0,class:"mb-10 p-4 bg-light-grey rounded-md shadow-lg"},ke={class:"text-at-light-green"},Ue={class:"text-red-500"},Ve={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},Ee=["onSubmit"],Te=Object(n["g"])("h1",{class:"text-2xl text-at-light-green"},"Record Workout",-1),Ce={class:"flex flex-col"},Re=Object(n["g"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"}," Workout Name ",-1),Be={class:"flex flex-col"},Se=Object(n["g"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"}," Workout Type ",-1),Ie=Object(n["g"])("option",{value:"select-workout"},"Select Workout",-1),qe=Object(n["g"])("option",{value:"strength"},"Strength Training",-1),We=Object(n["g"])("option",{value:"cardio"},"Cardio",-1),Pe=[Ie,qe,We],Ne={key:0,class:"flex flex-col gap-y-4"},_e={class:"flex flex-col md:w-1/3"},Ae=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),De=["onUpdate:modelValue"],Le={class:"flex flex-col flex-1"},Je=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Ze=["onUpdate:modelValue"],ze={class:"flex flex-col flex-1"},Me=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),He=["onUpdate:modelValue"],Ye={class:"flex flex-col flex-1"},Fe=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight ",-1),Xe=["onUpdate:modelValue"],Ge=["onClick"],Qe={key:1,class:"flex flex-col gap-y-4"},Ke={class:"flex flex-col md:w-1/3"},$e=Object(n["g"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),et=["onUpdate:modelValue"],tt=Object(n["g"])("option",{value:"#"},"Select Type",-1),rt=Object(n["g"])("option",{value:"run"},"Runs",-1),nt=Object(n["g"])("option",{value:"walk"},"Walk",-1),ct=[tt,rt,nt],lt={class:"flex flex-col flex-1"},at=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),ot=["onUpdate:modelValue"],ut={class:"flex flex-col flex-1"},st=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration ",-1),it=["onUpdate:modelValue"],bt={class:"flex flex-col flex-1"},gt=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),dt=["onUpdate:modelValue"],ft=["onClick"],pt=Object(n["g"])("button",{type:"submut",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Record Workout ",-1),Ot={setup:function(e){var t=Object(n["u"])(""),r=Object(n["u"])("select-workout"),c=Object(n["u"])([]),l=Object(n["u"])(null),a=Object(n["u"])(null),o=function(){"strength"!==r.value?c.value.push({id:Object(he["a"])(),cardioType:"",distance:"",duration:"",pace:""}):c.value.push({id:Object(he["a"])(),exercise:"",sets:"",reps:"",weight:""})},u=function(){c.value=[],o()},s=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("workouts").insert([{workoutName:t.value,workoutType:r.value,exercises:c.value}]);case 3:if(n=e.sent,o=n.error,!o){e.next=7;break}throw o;case 7:l.value="Succes: Workout Created!",t.value=null,r.value="select-workout",c.value=[],setTimeout((function(){l.value=!1}),5e3),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),a.value="Eroor: ".concat(e.t0.message),setTimeout((function(){a.value=!1}),5e3);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),i=function(e){c.value.length>1?c.value=c.value.filter((function(t){return t.id!==e})):(a.value="Error! Cannot remove, need to at least have one exercise!",setTimeout((function(){a.value=!1}),5e3))};return function(e,b){return Object(n["r"])(),Object(n["f"])("div",ye,[l.value||a.value?(Object(n["r"])(),Object(n["f"])("div",we,[Object(n["g"])("p",ke,Object(n["y"])(l.value),1),Object(n["g"])("p",Ue,Object(n["y"])(a.value),1)])):Object(n["e"])("",!0),Object(n["g"])("div",Ve,[Object(n["g"])("form",{onSubmit:Object(n["F"])(s,["prevent"]),class:"flex flex-col gap-y-5 w-full"},[Te,Object(n["g"])("div",Ce,[Re,Object(n["E"])(Object(n["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":b[0]||(b[0]=function(e){return t.value=e})},null,512),[[n["B"],t.value]])]),Object(n["g"])("div",Be,[Se,Object(n["E"])(Object(n["g"])("select",{id:"workout-type",class:"p-2 text-gray-500 focus:outline-none",required:"",onChange:u,"onUpdate:modelValue":b[1]||(b[1]=function(e){return r.value=e})},Pe,544),[[n["A"],r.value]])]),"strength"===r.value?(Object(n["r"])(),Object(n["f"])("div",Ne,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.value,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",_e,[Ae,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,De),[[n["B"],e.exercise]])]),Object(n["g"])("div",Le,[Je,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Ze),[[n["B"],e.sets]])]),Object(n["g"])("div",ze,[Me,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,He),[[n["B"],e.reps]])]),Object(n["g"])("div",Ye,[Fe,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,Xe),[[n["B"],e.weight]])]),Object(n["g"])("img",{onClick:function(t){return i(e.id)},src:ve.a,class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,Ge)])})),128)),Object(n["g"])("button",{onClick:o,type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),"cardio"===r.value?(Object(n["r"])(),Object(n["f"])("div",Qe,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.value,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(n["g"])("div",Ke,[$e,Object(n["E"])(Object(n["g"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},ct,8,et),[[n["A"],e.cardioType]])]),Object(n["g"])("div",lt,[at,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,ot),[[n["B"],e.distance]])]),Object(n["g"])("div",ut,[st,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,it),[[n["B"],e.duration]])]),Object(n["g"])("div",bt,[gt,Object(n["E"])(Object(n["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,dt),[[n["B"],e.pace]])]),Object(n["g"])("img",{onClick:function(t){return i(e.id)},src:ve.a,class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,ft)])})),128)),Object(n["g"])("button",{onClick:o,type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")])):Object(n["e"])("",!0),pt],40,Ee)])])}}},jt=Ot,xt=r("6122"),mt=r.n(xt),vt=r("a407"),ht=r.n(vt),yt={class:"max-w-screen-sm mx-auto px-4 py-10"},wt={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},kt={class:"text-at-light-green"},Ut={class:"text-red-500"},Vt={key:1},Et={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},Tt={key:0,class:"flex absolute left-2 top-2 gap-x-2"},Ct=Object(n["g"])("img",{class:"h-3.5 w-auto",src:mt.a},null,-1),Rt=[Ct],Bt=Object(n["g"])("img",{class:"h-3.5 w-auto",src:ht.a},null,-1),St=[Bt],It={key:1,class:"h-24 w-auto",src:C.a},qt={key:2,class:"h-24 w-auto",src:B.a},Wt={class:"mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md"},Pt={class:"w-full mt-6"},Nt={key:1,class:"text-at-light-green text-2xl text-center"},_t={class:"mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md"},At={key:0,class:"flex flex-col gap-y-4 w-full"},Dt={class:"flex flex-2 flex-col md:w-1/3"},Lt=Object(n["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),Jt=["onUpdate:modelValue"],Zt={key:1},zt={class:"flex flex-1 flex-col"},Mt=Object(n["g"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Ht=["onUpdate:modelValue"],Yt={key:1},Ft={class:"flex flex-1 flex-col"},Xt=Object(n["g"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),Gt=["onUpdate:modelValue"],Qt={key:1},Kt={class:"flex flex-1 flex-col"},$t=Object(n["g"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight ",-1),er=["onUpdate:modelValue"],tr={key:1},rr=["onClick"],nr={key:1,class:"flex flex-col gap-y-4 w-full"},cr={class:"flex flex-2 flex-col md:w-1/3"},lr=Object(n["g"])("label",{for:"cardioType",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),ar=["onUpdate:modelValue"],or=Object(n["g"])("option",{value:"#"},"Select Type",-1),ur=Object(n["g"])("option",{value:"run"},"Runs",-1),sr=Object(n["g"])("option",{value:"walk"},"Walk",-1),ir=[or,ur,sr],br={key:1},gr={class:"flex flex-1 flex-col"},dr=Object(n["g"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),fr=["onUpdate:modelValue"],pr={key:1},Or={class:"flex flex-1 flex-col"},jr=Object(n["g"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration ",-1),xr=["onUpdate:modelValue"],mr={key:1},vr={class:"flex flex-1 flex-col"},hr=Object(n["g"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),yr=["onUpdate:modelValue"],wr={key:1},kr=["onClick"],Ur={setup:function(e){var t=Object(p["c"])(),r=Object(p["d"])(),c=Object(n["u"])(null),l=Object(n["u"])(null),o=Object(n["u"])(null),u=Object(n["u"])(null),s=Object(n["b"])((function(){return a.state.user})),i=t.params.workoutId,d=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("workouts").select("*").eq("id",i);case 3:if(t=e.sent,r=t.data,n=t.error,!n){e.next=8;break}throw n;case 8:c.value=r[0],l.value=!0,console.log(c.value),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),o.value=e.t0.message,setTimeout((function(){o.value=!1}),5e3);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();d();var f=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("workouts")["delete"]().eq("id",i);case 3:if(t=e.sent,n=t.error,!n){e.next=7;break}throw n;case 7:r.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),o.value="Error: ".concat(e.t0.message),setTimeout((function(){o.value=!1}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=Object(n["u"])(null),j=function(){O.value=!O.value},x=function(){"strength"!==c.value.workoutType?c.value.exercises.push({id:Object(he["a"])(),cardioType:"",distance:"",duration:"",pace:""}):c.value.exercises.push({id:Object(he["a"])(),exercise:"",sets:"",reps:"",weight:""})},m=function(e){c.value.exercises.length>1?c.value.exercises=c.value.exercises.filter((function(t){return t.id!==e})):(o.value="Error! Cannot remove, need to at least have one exercise!",setTimeout((function(){o.value=!1}),5e3))},v=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.from("workouts").update({workoutName:c.value.workoutName,exercises:c.value.exercises}).eq("id",i);case 3:if(t=e.sent,r=t.error,!r){e.next=7;break}throw r;case 7:O.value=!1,u.value="Success: Workout Updated!",setTimeout((function(){u.value=!1}),5e3),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),o.value="Error: ".concat(e.t0.message),setTimeout((function(){o.value=!1}),5e3);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return function(e,t){return Object(n["r"])(),Object(n["f"])("div",yt,[u.value||o.value?(Object(n["r"])(),Object(n["f"])("div",wt,[Object(n["g"])("p",kt,Object(n["y"])(u.value),1),Object(n["g"])("p",Ut,Object(n["y"])(o.value),1)])):Object(n["e"])("",!0),l.value?(Object(n["r"])(),Object(n["f"])("div",Vt,[Object(n["g"])("div",Et,[Object(n["z"])(s)?(Object(n["r"])(),Object(n["f"])("div",Tt,[Object(n["g"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg",onClick:j},Rt),Object(n["g"])("div",{onClick:f,class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg"},St)])):Object(n["e"])("",!0),"cardio"===c.value.workoutType?(Object(n["r"])(),Object(n["f"])("img",It)):(Object(n["r"])(),Object(n["f"])("img",qt)),Object(n["g"])("span",Wt,Object(n["y"])(c.value.workoutType),1),Object(n["g"])("div",Pt,[O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.value.workoutName=e})},null,512)),[[n["B"],c.value.workoutName]]):(Object(n["r"])(),Object(n["f"])("h1",Nt,Object(n["y"])(c.value.workoutName),1))])]),Object(n["g"])("div",_t,["strength"===c.value.workoutType?(Object(n["r"])(),Object(n["f"])("div",At,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.value.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",Dt,[Lt,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"exercise-name",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Jt)),[[n["B"],e.exercise]]):(Object(n["r"])(),Object(n["f"])("p",Zt,Object(n["y"])(e.exercise),1))]),Object(n["g"])("div",zt,[Mt,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"sets",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.sets=t}},null,8,Ht)),[[n["B"],e.sets]]):(Object(n["r"])(),Object(n["f"])("p",Yt,Object(n["y"])(e.sets),1))]),Object(n["g"])("div",Ft,[Xt,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"reps",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.reps=t}},null,8,Gt)),[[n["B"],e.reps]]):(Object(n["r"])(),Object(n["f"])("p",Qt,Object(n["y"])(e.reps),1))]),Object(n["g"])("div",Kt,[$t,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"weight",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.weight=t}},null,8,er)),[[n["B"],e.weight]]):(Object(n["r"])(),Object(n["f"])("p",tr,Object(n["y"])(e.weight),1))]),O.value?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return m(e.id)},src:ve.a,class:"absolute h-4 w-auto -left-5 cursor-pointer"},null,8,rr)):Object(n["e"])("",!0)])})),128)),O.value?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:x,type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)])):(Object(n["r"])(),Object(n["f"])("div",nr,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.value.exercises,(function(e,t){return Object(n["r"])(),Object(n["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["g"])("div",cr,[lr,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("select",{key:0,id:"cardioType",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.cardioType=t}},ir,8,ar)),[[n["A"],e.cardioType]]):(Object(n["r"])(),Object(n["f"])("p",br,Object(n["y"])(e.cardioType),1))]),Object(n["g"])("div",gr,[dr,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"distance",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.distance=t}},null,8,fr)),[[n["B"],e.distance]]):(Object(n["r"])(),Object(n["f"])("p",pr,Object(n["y"])(e.distance),1))]),Object(n["g"])("div",Or,[jr,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"duration",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.duration=t}},null,8,xr)),[[n["B"],e.duration]]):(Object(n["r"])(),Object(n["f"])("p",mr,Object(n["y"])(e.duration),1))]),Object(n["g"])("div",vr,[hr,O.value?Object(n["E"])((Object(n["r"])(),Object(n["f"])("input",{key:0,id:"pace",class:"p-2 w-full text-gray-500 focus:outline-none",type:"text","onUpdate:modelValue":function(t){return e.pace=t}},null,8,yr)),[[n["B"],e.pace]]):(Object(n["r"])(),Object(n["f"])("p",wr,Object(n["y"])(e.pace),1))]),O.value?(Object(n["r"])(),Object(n["f"])("img",{key:0,onClick:function(t){return m(e.id)},src:ve.a,class:"absolute h-4 w-auto -left-5 cursor-pointer"},null,8,kr)):Object(n["e"])("",!0)])})),128)),O.value?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:x,type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Add Exercise ")):Object(n["e"])("",!0)]))]),O.value?(Object(n["r"])(),Object(n["f"])("button",{key:0,onClick:v,type:"button",class:"mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Update Workout ")):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])}}},Vr=Ur,Er=[{path:"/",name:"Home",component:J,meta:{title:"Home",auth:!1}},{path:"/login",name:"Login",component:re,meta:{title:"Create",auth:!1}},{path:"/register",name:"Register",component:xe,meta:{title:"Register",auth:!1}},{path:"/create",name:"Create",component:jt,meta:{title:"Create",auth:!0}},{path:"/view-workout/:workoutId",name:"View-Workout",component:Vr,meta:{title:"View Workout",auth:!1}}],Tr=Object(p["a"])({history:Object(p["b"])("/"),routes:Er});Tr.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Active Tracker"),r()})),Tr.beforeEach((function(e,t,r){var n=b.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return n?void r():void r({name:"Login"});r()}));var Cr=Tr;r("ba8c");Object(n["c"])(E).use(Cr).mount("#app")},"5c56":function(e,t,r){},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"821f":function(e,t,r){"use strict";r("5c56")},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},ba8c:function(e,t,r){},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"}});
//# sourceMappingURL=app.c08b46e3.js.map