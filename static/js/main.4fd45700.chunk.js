(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/symbol-defs.119ddbe0.svg"},,,,,,,,,,,,,function(e,t,n){e.exports=n(83)},,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o,a=n(0),i=n.n(a),c=n(24),r=n.n(c),l=n(7),s=n(3),u=n(5),d=n(13),m=n(11),f=n(14),g=n(2),y=n(1);!function(e){e.occupied="occupied",e.free="free",e.awaiting="awaiting"}(o||(o={}));var v,p,h=Object(y.c)(["ui.time"]),b=Object(y.c)(["ui.selectedRoomId"]),E=Object(y.c)(["ui.adminPanelOpen"]),S=Object(y.c)([b,"room"],function(e,t){return t.entity[e]}),C=Object(y.c)([b,"allocation"],function(e,t){return Object.values(t.entity).filter(function(t){return t.roomId===e})}),I=Object(y.c)([h,C],function(e,t){return t.filter(function(t){return t.from<=e&&t.to>=e})}),O=Object(y.c)([h,C],function(e,t){return t.filter(function(t){return t.from>=e})}),k=Object(y.c)([O],function(e){return e.sort(function(e,t){return e.from-t.from})}),j=Object(y.c)([h,C],function(e,t){return t.filter(function(t){return t.to>e-36e5&&t.from<e+36e6})}),x=Object(y.c)([(v=1,Object(y.c)([k],function(e){return e.slice(0,v)}))],function(e){return e[0]}),P=(Object(y.c)([x,h],function(e,t){return e.from-t}),Object(y.c)([I],function(e){return e[0]})),w=(Object(y.c)([P],function(e){return e.to-e.from}),Object(y.c)([I,h],function(e,t){return e.to-t}),Object(y.c)([I],function(e){return e.length>0}),Object(y.c)([b,"equipment"],function(e,t){return t.entity?(Object.values(t.entity)||[]).filter(function(t){return t.roomId===e}):[]})),N=function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})},A=function(e){return Math.ceil(e/6e4)},D=function(e){return e-e%6e4},M=function(e,t){return Object(g.a)({},e,t)},q=function(e){var t=2*Math.PI/720;return-.5*Math.PI+e*t},R=function(e){var t=Math.floor(e/60)?"".concat(Math.floor(e/60)," h"):"",n="".concat(e%60," min");return"".concat(t," ").concat(n)},G=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},F=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},T=function e(t){Object(s.a)(this,e),this.name=t,this.id=void 0,this.capacity=void 0,this.location=void 0,this.equipment=void 0,this.id=F()},L=Object(y.d)({slice:"room",initialState:function(){var e=new T("Conference Room 1"),t={entity:{},ids:[]};return t.entity[e.id]=Object(g.a)({},e),t.ids.push(e.id),t}(),reducers:{addRoom:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},changeRoomName:function(e,t){e.entity[t.payload.id]?e.entity[t.payload.id].name=t.payload.name:(e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id))}}}),_=n(9),B=n.n(_),K=Object(y.b)("crossslice/savestate/started"),z=Object(y.b)("crossslice/savestate/succeeded"),V=Object(y.b)("crossslice/savestate/failed"),W=Object(y.b)("crossslice/loadstate/started"),H=Object(y.b)("crossslice/loadstate/succeeded"),J=Object(y.b)("crossslice/loadstate/failed"),U=Object(y.b)("crossslice/removestate/started"),$=Object(y.b)("crossslice/removestate/succeeded"),Y=Object(y.b)("crossslice/removestate/failed"),Q=function(){return function(e,t){return e(K()),(n="state",o=function(e){var t=Object(g.a)({},e);return t.syncProvider={syncSettings:e.syncProvider.syncSettings,errorLog:e.syncProvider.errorLog||[]},t}(t()),B.a.setItem(n,o)).then(function(){return e(z())},function(t){return e(V(t))});var n,o}},X=function(){return function(e){return e(W()),(t="state",B.a.getItem(t)).then(function(t){return e(H(t))},function(t){return e(J(t))});var t}},Z=function(){return function(e){return e(U()),(t="state",B.a.removeItem(t)).then(function(t){e($(t)),e(X())},function(t){return e(Y(t))});var t}},ee=Object(y.d)({slice:"ui",initialState:{selectedRoomId:"",time:Date.now(),adminPanelOpen:!1,stateSyncInProgress:!1,stateSyncError:""},reducers:{setSelectedRoomId:function(e,t){return e.selectedRoomId=t.payload,e},setTime:function(e,t){return e.time=t.payload,e},showAdminPanel:function(e){return e.adminPanelOpen=!0,e},hideAdminPanel:function(e){return e.adminPanelOpen=!1,e}}}),te=n(12),ne=(n(41),n(15)),oe=n.n(ne),ae=function(e){var t=function(){return e.btnType||"button"},n=i.a.createElement("button",{type:t(),className:e.btnClassName,onClick:e.onClick,"aria-label":e.iconId,disabled:e.disabled},e.label);switch(e.style){case"icon":n=i.a.createElement("button",{type:t(),className:"btn ".concat(e.btnClassName),onClick:e.onClick,"aria-label":e.iconId},i.a.createElement("svg",{className:"icon"},i.a.createElement("use",{xlinkHref:"".concat(oe.a,"#").concat(e.iconId)})));break;case"icon-text":n=i.a.createElement("button",{type:t(),className:"btn btn_icon-text ".concat(e.btnClassName),onClick:e.onClick,"aria-label":e.label},i.a.createElement("svg",{className:"icon"},i.a.createElement("use",{xlinkHref:"".concat(oe.a,"#").concat(e.iconId)})),i.a.createElement("span",null,e.label));break;case"icon-text-large":n=i.a.createElement("button",{type:t(),className:"btn btn_icon-text btn_flat ".concat(e.btnClassName||""),onClick:e.onClick,"aria-label":e.label},i.a.createElement("svg",{className:"icon"},i.a.createElement("use",{xlinkHref:"".concat(oe.a,"#").concat(e.iconId)})),i.a.createElement("span",null,e.label));break;case"text":n=i.a.createElement("button",{type:t(),className:"btn ".concat(e.btnClassName),onClick:e.onClick,"aria-label":e.label},i.a.createElement("span",null,e.label))}return n},ie=(n(43),function(e){var t=null,n=["InputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:"Input"},i.a.createElement("label",{className:"Label"},e.label),t)});!function(e){e.Projector="display",e.WhiteBoard="users",e.Skype="skype"}(p||(p={}));n(45);var ce,re=function(e){console.log("[EquipmentAdmin] selected room id: ",e.roomId);return i.a.createElement("div",{className:"EquipmentAdmin"},i.a.createElement("label",{className:"Label"},"Room Equipment"),i.a.createElement("div",{className:"EquipmentAdminIcons"},Object.values(p).map(function(t){return function(t){var n=!1;return e.equipment&&(n=!!e.equipment.find(function(e){return e.type===t})),i.a.createElement(ae,{key:t,style:"icon",onClick:function(){return e.onEquipmentToggleClick(e.roomId,t)},iconId:"icon-".concat(t.toLowerCase()),btnClassName:"btn_dark btn_flat ".concat(n?"btn_selected":"")})}(t)})))},le=(n(47),n(49),function(e){var t;return t=e.data.connecting?i.a.createElement(ae,{style:"text",label:"Connecting",disabled:!0,btnClassName:"btn_dark btn_flat btn_yellow"}):e.data.connected?i.a.createElement(ae,{style:"text",label:"Disconnect",onClick:function(){return console.log("[SyncProviderAdmin][TODO] Disconnect")},btnClassName:"btn_dark btn_flat btn_red"}):i.a.createElement(ae,{style:"text",label:"Connect",onClick:function(){return e.onConnect()},btnClassName:"btn_dark btn_flat btn_green"}),i.a.createElement("div",{className:"SyncProviderAdmin"},i.a.createElement("label",{className:"Label"},"Sync"),t,i.a.createElement("span",null,e.data.connectionMessage))}),se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={formData:{roomName:{elementType:"input",elementConfig:{type:"text",placeholder:"Conference room 1"},label:"Room name",value:"",validation:{required:!0},valid:!1,touched:!1},clientId:{elementType:"input",elementConfig:{type:"text",placeholder:"Client ID from google calendar API"},label:"Client ID",value:"",validation:{required:!0},valid:!1,touched:!1},apiKey:{elementType:"input",elementConfig:{type:"text",placeholder:"API key from google calendar API"},label:"API key",value:"",validation:{required:!0},valid:!1,touched:!1},calendarId:{elementType:"input",elementConfig:{type:"text",placeholder:"Calendar ID can be found in google calendar settings"},label:"Calendar ID",value:"",validation:{required:!0},valid:!1,touched:!1}},formIsValid:!1},n.inputChangedHandler=function(e,t){var o=M(n.state.formData[t],{value:e.target.value,valid:G(e.target.value,n.state.formData[t].validation),touched:!0}),a=M(n.state.formData,Object(te.a)({},t,o)),i=!0;for(var c in a)i=a[c].valid&&i;n.setState({formData:a,formIsValid:i});var r=Object(g.a)({},n.props.selectedRoom,{name:a.roomName.value}),l={syncSettings:{clientId:a.clientId.value,apiKey:a.apiKey.value,calendarId:a.calendarId.value},room:r};n.props.onSettingsSaved(l)},n}return Object(f.a)(t,e),Object(u.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return{formData:Object(g.a)({},t.formData,{roomName:Object(g.a)({},t.formData.roomName,{value:e.selectedRoom.name}),clientId:Object(g.a)({},t.formData.clientId,{value:e.syncSettings.clientId}),apiKey:Object(g.a)({},t.formData.apiKey,{value:e.syncSettings.apiKey}),calendarId:Object(g.a)({},t.formData.calendarId,{value:e.syncSettings.calendarId})}),selectedRoom:e.selectedRoom,syncSettings:e.syncSettings,syncProvider:e.syncProvider}}}]),Object(u.a)(t,[{key:"cancel",value:function(){this.props.onCancel()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.formData)t.push({id:n,config:this.state.formData[n]});var o=i.a.createElement("form",null,t.map(function(t){return i.a.createElement(ie,{key:t.id,label:t.config.label,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),i.a.createElement("div",null,i.a.createElement(re,{roomId:this.props.selectedRoom.id,equipment:this.props.roomEquipment,onEquipmentToggleClick:this.props.onEquipmentToggleClick})),i.a.createElement("div",null,i.a.createElement(le,{onConnect:this.props.onConnect,data:this.props.syncProvider})),i.a.createElement("div",{className:"AdminPanelButtons"},i.a.createElement(ae,{style:"icon-text-large",btnClassName:"btn_dark",label:"Close",iconId:"icon-exit",onClick:function(){return e.cancel()}})));return i.a.createElement("div",{className:"AdminPanel"},i.a.createElement("h3",null,"Admin Panel"),o)}}]),t}(a.Component),ue=function e(t,n,o){Object(s.a)(this,e),this.roomId=t,this.type=n,this.status=o,this.id=void 0,this.id=F()};!function(e){e.Available="Available",e.NotAvailable="NotAvailable",e.Broken="Broken"}(ce||(ce={}));var de=Object(y.d)({slice:"equipment",initialState:{entity:{}},reducers:{addEquipment:function(e,t){e.entity[t.payload.id]=t.payload},deleteEquipment:function(e,t){delete e.entity[t.payload.id]},toggleEquipment:function(e,t){console.log("toggle equipment: ",t);var n=t.payload.roomId,o=t.payload.type,a=Object.values(e.entity).filter(function(e){return e.roomId===n&&e.type===o})[0];if(a)delete e.entity[a.id];else{var i=new ue(n,o,ce.Available);e.entity[i.id]=Object(g.a)({},i)}},setStatus:function(e,t){return e.entity[t.payload.id].status=t.payload.status,e},changeStatus:function(e,t){var n=e.entity[t.payload.id],o=ce.Available;switch(n.status){case ce.Available:o=ce.Broken;break;case ce.Broken:o=ce.NotAvailable;break;case ce.NotAvailable:o=ce.Available}return n.status=o,e}}}),me=(Object(y.c)(["syncProvider.connected"]),Object(y.c)(["syncProvider.connecting"]),Object(y.c)(["syncProvider.autoSync"])),fe=Object(y.c)(["syncProvider.syncSettings"]),ge=(Object(y.c)(["syncProvider.syncSettings"],function(e){return e.clientId&&e.apiKey&&e.calendarId}),n(20)),ye=Object(y.d)({slice:"syncProvider",initialState:{connecting:!1,connected:!1,connectionMessage:"",errorLog:[],autoSync:!1,syncSettings:{},syncing:!1,lastSynced:0,syncMessage:""},reducers:{connectionStarted:function(e,t){e.connecting=!0},connectionSucceeded:function(e,t){e.connecting=!1,e.connected=!0,e.autoSync=!0,e.connectionMessage="Connection established."},connectionFailed:function(e,t){e.connecting=!1,e.connected=!1,e.autoSync=!1,e.connectionMessage=t.payload.message,e.errorLog=[].concat(Object(ge.a)(e.errorLog),[t.payload.error])},syncStarted:function(e,t){e.syncing=!0},syncSucceeded:function(e,t){e.syncing=!1,e.lastSynced=Date.now(),e.syncMessage="Sync succeeded."},syncFailed:function(e,t){e.syncing=!1,e.syncMessage=t.payload.message,e.errorLog=[].concat(Object(ge.a)(e.errorLog),[t.payload.error])},setSyncSettings:function(e,t){return e.syncSettings=t.payload,e}}}),ve=function e(t,n,o,a){Object(s.a)(this,e),this.title=t,this.roomId=n,this.from=o,this.to=a,this.id=void 0,this.confirmed=!1,this.by=void 0,this.attendees=void 0,this.agenda=void 0,this.extId=void 0,this.extStatus=void 0,this.id=F(),this.from=D(this.from),this.to=D(this.to)},pe=function(){function e(){Object(s.a)(this,e),this.DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],this.SCOPES="https://www.googleapis.com/auth/calendar.readonly",this.CONFIG={apiKey:"[googleApi] apiKey not provided!!",clientId:"[googleApi] clientId not provided!!",client_id:"[googleApi] clientId not provided!!",discoveryDocs:this.DISCOVERY_DOCS,scope:this.SCOPES},this.handleClientLoad()}return Object(u.a)(e,[{key:"gapi",get:function(){return window.gapi}}]),Object(u.a)(e,[{key:"connect",value:function(e,t){try{return e&&t?(this.CONFIG.clientId=e,this.CONFIG.client_id=e,this.CONFIG.apiKey=t,this.gapi&&this.gapi.client?(console.log("[GoogleSyncProvider] Begin initClient, Config: ",JSON.stringify(this.CONFIG)),this.initClient(this.CONFIG)):Promise.reject(new Error("[GoogleSyncProvider] Connect gapi client not loaded error"))):(console.log("[GoogleSyncProvider] Connect error. Both clientId and apiKey need to be provided."),Promise.reject(new Error("[GoogleSyncProvider] Connect error. Both clientId and apiKey need to be provided.")))}catch(n){return Promise.reject(new Error("[GoogleSyncProvider] Connect unknown error: ".concat(JSON.stringify(n))))}}},{key:"getAllocations",value:function(e,t){console.log("[GoogleSyncProvider] getAllocations");try{return e&&t?this.gapi?(console.log("[GoogleSyncProvider] gapi.client.calendar.events.list for calendarId: ",t),this.gapi.client&&this.gapi.client.calendar?this.fetchEvents(e,t):(console.log("[GoogleSyncProvider] Error: gapi.client or gapi.client.calendar not loaded"),Promise.reject(new Error("[GoogleSyncProvider] gapi.client or gapi.client.calendar not loaded")))):(console.log("[GoogleSyncProvider] Error: gapi not loaded"),Promise.reject(new Error("[GoogleSyncProvider] this.gapi not loaded"))):(console.log("[GoogleSyncProvider] getAllocations error. Both roomId and calendarId need to be provided."),Promise.reject(new Error("[GoogleSyncProvider] Connect error. Both roomId and calendarId need to be provided.")))}catch(n){return console.log("[GoogleSyncProvider] Error: unknown error",n),Promise.reject(new Error("[GoogleSyncProvider] Connect unknown error: ".concat(JSON.stringify(n))))}}},{key:"fetchEvents",value:function(e,t){var n=this,o=new Date,a=new Date;return a.setDate(o.getDate()+1),this.gapi.client.calendar.events.list({calendarId:t,orderBy:"startTime",maxResults:1e3,showDeleted:!0,singleEvents:!0,timeMin:o.toISOString(),timeMax:a.toISOString()}).then(function(t){return console.log("[GoogleSyncProvider] succesful events retrieved: ",t.result.items),n.syncEvents(e,t.result.items)}).catch(function(e){return console.log("[GoogleSyncProvider] error while events retrievel: ",e),Promise.reject(new Error('[GoogleSyncProvider] error while events retrievel:", '.concat(JSON.stringify(e))))})}},{key:"handleClientLoad",value:function(){var e=this,t=document.createElement("script");t.src="https://apis.google.com/js/api.js",document.body.appendChild(t),t.onload=function(){e.gapi.load("client:auth2",function(){return console.log("[Google Api] gapi loaded")})}}},{key:"initClient",value:function(e){var t=this;return this.gapi.client.init(e).then(function(){return console.log("[GoogleSyncProvider] Client init success"),t.gapi.auth2.getAuthInstance().signIn().then(function(e){console.log("[GoogleSyncProvider] Authorization successfull",e)}).catch(function(e){return console.log("[GoogleSyncProvider] Authorization error",e),Promise.reject(new Error('[GoogleSyncProvider] Authorization error:", '.concat(JSON.stringify(e))))})}).catch(function(e){return console.log("[GoogleSyncProvider] Client init error:",e),Promise.reject(new Error('[GoogleSyncProvider] Client init error:", '.concat(JSON.stringify(e))))})}},{key:"syncEvents",value:function(e,t){console.log("[GoogleSyncProvider] SyncEvents: ",t);var n=t.map(function(t){var n=new ve(t.summary,e,new Date(t.start.dateTime).getTime(),new Date(t.end.dateTime).getTime());return t.attendees&&(n.attendees=t.attendees.length),t.organizer&&t.organizer.displayName&&(n.by=t.organizer.displayName),n.extId=t.id,n.extStatus=t.status,Object(g.a)({},n)});return console.log("[GoogleSyncProvider] mappedEvents: ",n),n}}]),e}(),he=n(4),be=Object(y.d)({slice:"allocation",initialState:{entity:{},ids:[]},reducers:{addAllocation:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},deleteAllocation:function(e,t){delete e.entity[t.payload.id],e.ids=e.ids.filter(function(e){return e!==t.payload.id})},finishEarly:function(e,t){e.entity[t.payload.id].to=D(t.payload.time),e.entity[t.payload.id].confirmed=!0},extendMeeting:function(e,t){e.entity[t.payload.id].to+=t.payload.amount,e.entity[t.payload.id].confirmed=!0},confirmMeeting:function(e,t){e.entity[t.payload.id].confirmed=!0,e.entity[t.payload.id].from=D(t.payload.time)},syncExternalAllocations:function(e,t){console.log("[AllocationSlice:syncExternalAllocations] : ",t);var n=t.payload,o=Object.values(e.entity).filter(function(e){return!!e.extId&&!e.confirmed&&!n.find(function(t){return t.extId===e.extId})}),a=!0,i=!1,c=void 0;try{for(var r,l=function(){var t=r.value;delete e.entity[t.id],e.ids=e.ids.filter(function(e){return e!==t.id})},s=o[Symbol.iterator]();!(a=(r=s.next()).done);a=!0)l()}catch(v){i=!0,c=v}finally{try{a||null==s.return||s.return()}finally{if(i)throw c}}var u=!0,d=!1,m=void 0;try{for(var f,g=function(){var t=f.value,n=Object.values(e.entity).find(function(e){return e.extId===t.extId});n?"confirmed"!==t.extStatus?(delete e.entity[n.id],e.ids=e.ids.filter(function(e){return e!==n.id})):n.confirmed||(n.from=t.from,n.to=t.to,n.title=t.title):"confirmed"===t.extStatus&&(e.entity[t.id]=t,e.ids.push(t.id))},y=n[Symbol.iterator]();!(u=(f=y.next()).done);u=!0)g()}catch(v){d=!0,m=v}finally{try{u||null==y.return||y.return()}finally{if(d)throw m}}}}}),Ee=n(27),Se=Object(he.combineReducers)({ui:ee.reducer,room:L.reducer,allocation:be.reducer,equipment:de.reducer,syncProvider:ye.reducer}),Ce=Object(Ee.a)(Se,function(e,t){var n=Object(g.a)({},e);switch(n.ui=Object(g.a)({},n.ui),t.type){case"@@INIT":return n.ui.selectedRoomId=n.room.ids[0],n;case U.toString():return n.ui.stateSyncInProgress=!0,n;case $.toString():return n.ui.stateSyncInProgress=!1,n;case Y.toString():return n.ui.stateSyncInProgress=!1,n.ui.stateSyncError=t.payload,n;case K.toString():return n.ui.stateSyncInProgress=!0,n;case z.toString():return n.ui.stateSyncInProgress=!1,n;case V.toString():return n.ui.stateSyncInProgress=!1,n.ui.stateSyncError=t.payload,n;case W.toString():return n.ui.stateSyncInProgress=!0,n;case H.toString():return(n=Object(g.a)({},n,t.payload)).ui.time=Date.now(),n.ui.stateSyncInProgress=!1,n;case J.toString():return n.ui.stateSyncInProgress=!1,n.ui.stateSyncError=t.payload,n;default:return e}}),Ie=Object(y.a)({reducer:Ce}),Oe=new pe,ke=function(){return function(e,t){e(ye.actions.connectionStarted());var n,o,a=fe(t());return console.log("[SyncProviderActions] connect with clientId ".concat(a.clientId," apiKey: ").concat(a.apiKey)),(n=a.clientId,o=a.apiKey,Oe.connect(n,o)).then(function(){return e(ye.actions.connectionSucceeded())},function(t){return e(ye.actions.connectionFailed({message:t.message,error:t.message}))})}},je=function(){return function(e,t){return e(ye.actions.syncStarted()),function(e,t){return Oe.getAllocations(e,t).then(function(e){return Ie.dispatch(be.actions.syncExternalAllocations(e)),e})}(b(t()),fe(t()).calendarId).then(function(){return e(ye.actions.syncSucceeded())},function(t){return e(ye.actions.syncFailed({message:t.message,error:t.message}))})}},xe=Object(l.b)(function(e){return{selectedRoom:S(e),roomEquipment:w(e),syncSettings:fe(e),syncProvider:e.syncProvider}},function(e){return{onSettingsSaved:function(t){console.log("[Admin] onSettingsSaved"),e(L.actions.changeRoomName(Object(g.a)({},t.room))),e(ee.actions.setSelectedRoomId(t.room.id)),e(ye.actions.setSyncSettings(t.syncSettings))},onEquipmentToggleClick:function(t,n){console.log("onEquipmentToggleClick"),e(de.actions.toggleEquipment({roomId:t,type:n}))},onSettingsClear:function(){e(Z())},onCancel:function(){e(ee.actions.hideAdminPanel())},onConnect:function(){e(ke())}}})(se),Pe=(n(51),function(e){return i.a.createElement("div",{className:"EquipmentBar"},e.equipment.map(function(t){return function(t){return i.a.createElement(ae,{key:t.type,style:"icon",onClick:function(){return e.onChangeStatusClick(t)},iconId:"icon-".concat(t.type.toLowerCase()),btnClassName:"btn_".concat(t.status.toLowerCase())})}(t)}))}),we=(n(53),n(55),function(e){var t=["RoomStatusBorder"];return t.push(e.roomStatus),i.a.createElement("div",{className:t.join(" ")},e.children)}),Ne=function(e){return i.a.createElement("div",{className:"Header"},i.a.createElement(we,{roomStatus:e.roomStatus},i.a.createElement("div",{className:"HeaderContent"},i.a.createElement("div",null,i.a.createElement("h1",null,e.room.name)),i.a.createElement("div",null,(new Date).toLocaleDateString()),i.a.createElement(Pe,{equipment:e.equipment,onChangeStatusClick:e.onChangeStatusClick}))))},Ae=(n(57),function(e){var t=A(e.from-e.time);return i.a.createElement("div",{className:"AllocationInfo"},i.a.createElement("div",{className:"text-very-small text-gray"},"Next Meeting"),i.a.createElement("div",null,i.a.createElement("h4",null,e.title)),i.a.createElement("div",null,N(e.from)," - ",N(e.to)),i.a.createElement("div",null,"Starts In: ",R(t)))}),De=(n(59),function(e){var t=A(e.to-e.time);A(e.to-e.from);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"AllocationInfoBig"},i.a.createElement("div",{className:"text-small text-gray"},"In Progress"),i.a.createElement("div",null,i.a.createElement("h2",null,e.title)),i.a.createElement("div",null,i.a.createElement("span",null,N(e.from)," - ",N(e.to))),i.a.createElement("div",null,"Ends In: ",R(t)),e.attendees?i.a.createElement("div",null,e.attendees," attendees"):null))}),Me=(n(61),function(e){var t,n,a;e.currentAllocation?(e.roomStatus===o.awaiting&&(n=i.a.createElement(ae,{style:"icon-text-large",onClick:function(){return e.onConfirmMeetingClick(e.currentAllocation.id,e.time)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{style:"icon-text-large",onClick:function(){return e.onExtendMeetingClick(e.currentAllocation.id,e.time,9e5)},iconId:"icon-calendar-plus-o",label:"Extend"}),i.a.createElement(ae,{style:"icon-text-large",onClick:function(){return e.onFinishEarlyClick(e.currentAllocation.id,e.time)},iconId:"icon-calendar-times-o",label:"Finish"}),n)):(e.roomStatus===o.awaiting&&(a=i.a.createElement(ae,{style:"icon-text-large",onClick:function(){return e.onConfirmMeetingClick(e.nextAllocation.id,e.time)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{style:"icon-text-large",onClick:function(){return e.onAddMeetingClick(e.roomId,e.time)},iconId:"icon-calendar-o",label:"Book now"}),a));return i.a.createElement("div",{className:"AllocationMenu ".concat(e.roomStatus)},t)}),qe=(n(63),function(e){return e.room?(e.currentAllocation&&(t=i.a.createElement(De,Object.assign({time:e.time},e.currentAllocation))),e.nextAllocation&&(n=i.a.createElement(Ae,Object.assign({time:e.time},e.nextAllocation))),i.a.createElement("div",{className:"AllocationsView"},i.a.createElement("div",{className:"Allocations"},t,n),i.a.createElement(Me,{roomId:e.room.id,time:e.time,currentAllocation:e.currentAllocation,nextAllocation:e.nextAllocation,roomStatus:e.roomStatus,onFinishEarlyClick:e.onFinishEarlyClick,onExtendMeetingClick:e.onExtendMeetingClick,onConfirmMeetingClick:e.onConfirmMeetingClick,onAddMeetingClick:e.onAddMeetingClick}))):(console.error("[RoomView] No room provided!"),i.a.createElement(xe,null));var t,n}),Re=(n(65),function(e){var t="rgba(244, 67, 54, 0.5)",n=function(e,t,n,o,a,i,c){var r=a||200;e.beginPath(),e.lineWidth=i||10,e.strokeStyle=o,e.lineCap=c||"butt";var l=q(t),s=q(n);e.arc(250,250,r,l,s),e.stroke()},o=function(e){var t=new Date(0);return t.setUTCMilliseconds(e),60*t.getHours()+t.getMinutes()},a=function(e,t,n){return Math.min(t,e+36e5*n)},c=i.a.createRef();return setTimeout(function(){if(c.current&&c.current.getContext){var i=c.current.getContext("2d");c.current.width=500,c.current.height=500,function(i){var c=o(e.time);n(i,c-60,c+600,"#4CAF50",200,10,"round");var r=e.allocations.map(function(t){return{from:o((n=e.time,i=t.from,c=1,Math.max(i,n-36e5*c))),to:o(a(e.time,t.to,10))};var n,i,c});r.forEach(function(e){n(i,e.from,e.to,"#000",195,20)}),r.forEach(function(e){n(i,e.from,e.from+1,t,190,30),n(i,e.from,e.to,t,195,20),n(i,e.to,e.to+1,t,190,30)}),n(i,c-2,c+3,"#FFF",170,25),n(i,c,c+1,"#000",195,20);for(var l=0;l<24;l++)l%2?n(i,30*l,30*l+1,"#FFF",198,12):n(i,30*l,30*l+1,"#FFF",195,20)}(i)}},10),i.a.createElement("div",{className:"RoomClock"},i.a.createElement("span",null,N(e.time)),i.a.createElement("canvas",{className:"RoomClockCanvas",id:"canvas",ref:c}))}),Ge=(n(67),function(e){return i.a.createElement("div",{className:"RoomViewContent"},i.a.createElement(Re,{time:e.time,allocations:e.clockAllocations}),i.a.createElement("div",{className:"RoomViewContentSeparator"}),i.a.createElement(qe,e))}),Fe=(n(69),n(71),n(73),function(e){return console.log("[SyncStatusBar] syncInfo: ",e.syncInformation),i.a.createElement("div",{className:"SyncStatusBar"},i.a.createElement("span",null,"".concat(e.syncInformation.connecting?"Connecting...":e.syncInformation.connected?"Connected":"Not Connected")),i.a.createElement("span",null,"Auto sync: ".concat(e.syncInformation.autoSync?"on":"off")),i.a.createElement("span",null,"".concat(e.syncInformation.syncing?"Syncing...":e.syncInformation.syncMessage||"")),i.a.createElement("span",null,e.syncInformation.lastSynced>0?"Last synced: ".concat(N(e.syncInformation.lastSynced)," ").concat(new Date(e.syncInformation.lastSynced).toLocaleDateString()):""))}),Te=function(e){return i.a.createElement("div",{className:"Footer"},i.a.createElement(we,{roomStatus:e.roomStatus},i.a.createElement("div",{className:"FooterContent"},i.a.createElement(Fe,{syncInformation:e.syncInformation}),i.a.createElement(ae,{style:"icon-text",btnClassName:"btn_dark",onClick:e.onAdminClick,iconId:"icon-settings",label:"Admin"}))))},Le=(n(75),n(77),function(){return i.a.createElement("div",{className:"Backdrop"})}),_e=function(e){var t=["Popup"];return e.open&&t.push("open"),i.a.createElement("div",{className:t.join(" ")},i.a.createElement(Le,null),i.a.createElement("div",{className:"PopupContent"},i.a.createElement(ae,{btnClassName:"PopupClose btn_dark",style:"text",onClick:e.onCloseClick,label:"x"}),e.children))},Be=function(e){return e.room?i.a.createElement("div",{className:"RoomView"},i.a.createElement(Ne,e),i.a.createElement(Ge,e),i.a.createElement(Te,e),i.a.createElement(_e,{open:e.adminPanelOpen,onCloseClick:e.onPopupCloseClick},i.a.createElement(xe,null))):(console.error("[RoomView] No room provided!"),i.a.createElement("span",null,"No room provided"))},Ke=Object(l.b)(function(e){var t,n=h(e),a=E(e),i=S(e),c=w(e),r=(t=3e5,Object(y.c)([P,x,h],function(e,n,a){return e?e.confirmed?o.occupied:o.awaiting:n&&n.from-a<t?n.confirmed?o.occupied:o.awaiting:o.free}))(e);return{currentAllocation:P(e),equipment:c,nextAllocation:x(e),room:i,roomStatus:r,time:n,adminPanelOpen:a,clockAllocations:j(e),syncInformation:e.syncProvider}},function(e){return{onAdminClick:function(){e(ee.actions.showAdminPanel())},onPopupCloseClick:function(){e(ee.actions.hideAdminPanel())},onAddMeetingClick:function(t,n){e(be.actions.addAllocation(Object(g.a)({},new ve("Ad hoc meeting",t,n,n+18e5),{confirmed:!0})))},onChangeStatusClick:function(t){e(de.actions.changeStatus(t)),console.log("TODO change status. Ids need to be added to equipment")},onConfirmMeetingClick:function(t,n){e(be.actions.confirmMeeting({id:t,time:n}))},onExtendMeetingClick:function(t,n,o){e(be.actions.extendMeeting({id:t,time:n,amount:o}))},onFinishEarlyClick:function(t,n){e(be.actions.finishEarly({id:t,time:n}))}}})(Be),ze=(n(79),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Ke,null))}}]),t}(a.Component)),Ve=(n(81),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function We(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}(function(){var e=Ie.getState();console.log("[Start] startState:",e),Ie.dispatch(X()),setInterval(function(){console.log("[Start] Interval"),Ie.dispatch(ee.actions.setTime(D(Date.now())+1)),Ie.dispatch(Q()),me(Ie.getState())&&Ie.getState().ui.time%3e5===1&&Ie.dispatch(je())},6e4)})(),r.a.render(i.a.createElement(l.a,{store:Ie},i.a.createElement(ze,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rosi",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rosi","/service-worker.js");Ve?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):We(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):We(t,e)})}}()}],[[28,2,1]]]);
//# sourceMappingURL=main.4fd45700.chunk.js.map