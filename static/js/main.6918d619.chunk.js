(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/symbol-defs.119ddbe0.svg"},28:function(e,t,n){e.exports=n(81)},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),c=n(24),l=n.n(c),r=n(8),s=n(3),u=n(5),d=n(10),m=n(7),f=n(9),g=n(2),p=n(1);!function(e){e.occupied="occupied",e.free="free",e.awaiting="awaiting"}(a||(a={}));var v,h,y=Object(p.c)(["ui.time"]),b=Object(p.c)(["ui.selectedRoomId"]),C=Object(p.c)(["ui.adminPanelOpen"]),E=Object(p.c)(["ui.syncSettings"]),k=Object(p.c)([b,"room"],function(e,t){return t.entity[e]}),I=Object(p.c)([b,"allocation"],function(e,t){return Object.values(t.entity).filter(function(t){return t.roomId===e})}),S=Object(p.c)([y,I],function(e,t){return t.filter(function(t){return t.from<=e&&t.to>=e})}),O=Object(p.c)([y,I],function(e,t){return t.filter(function(t){return t.from>=e})}),j=Object(p.c)([O],function(e){return e.sort(function(e,t){return e.from-t.from})}),x=Object(p.c)([(v=1,Object(p.c)([j],function(e){return e.slice(0,v)}))],function(e){return e[0]}),A=(Object(p.c)([x,y],function(e,t){return e.from-t}),Object(p.c)([S],function(e){return e[0]})),w=(Object(p.c)([A],function(e){return e.to-e.from}),Object(p.c)([S,y],function(e,t){return e.to-t}),Object(p.c)([S],function(e){return e.length>0}),Object(p.c)([b,"equipment"],function(e,t){return t.entity?(Object.values(t.entity)||[]).filter(function(t){return t.roomId===e}):[]})),N=Object(p.d)({slice:"room",initialState:{entity:{},ids:[]},reducers:{addRoom:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},changeRoomName:function(e,t){e.entity[t.payload.id]?e.entity[t.payload.id].name=t.payload.name:(e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id))}}}),D=n(13),P=n.n(D),T=Object(p.b)("crossslice/savestate/started"),R=Object(p.b)("crossslice/savestate/succeeded"),q=Object(p.b)("crossslice/savestate/failed"),M=Object(p.b)("crossslice/loadstate/started"),F=Object(p.b)("crossslice/loadstate/succeeded"),B=Object(p.b)("crossslice/loadstate/failed"),L=Object(p.b)("crossslice/removestate/started"),V=Object(p.b)("crossslice/removestate/succeeded"),G=Object(p.b)("crossslice/removestate/failed"),K=function(){return function(e,t){return e(T()),(n="state",a=t(),P.a.setItem(n,a)).then(function(){return e(R())},function(t){return e(q(t))});var n,a}},U=function(){return function(e){return e(M()),(t="state",P.a.getItem(t)).then(function(t){return e(F(t))},function(t){return e(B(t))});var t}},z=function(){return function(e){return e(L()),(t="state",P.a.removeItem(t)).then(function(t){e(V(t)),e(U())},function(t){return e(G(t))});var t}},W=Object(p.d)({slice:"ui",initialState:{selectedRoomId:"",time:Date.now(),adminPanelOpen:!1,syncSettings:{},syncInProgress:!1,syncError:""},reducers:{setSelectedRoomId:function(e,t){return e.selectedRoomId=t.payload,e},setTime:function(e,t){return e.time=t.payload,e},showAdminPanel:function(e){return e.adminPanelOpen=!0,e},hideAdminPanel:function(e){return e.adminPanelOpen=!1,e},setSyncSettings:function(e,t){return e.syncSettings=t.payload,e}}}),H=n(15),_=function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})},$=function(e){return Math.ceil(e/1e3/60)},J=function(e){return e-e%6e4},Y=function(e,t){return Object(g.a)({},e,t)},Q=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},X=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},Z=function e(t){Object(s.a)(this,e),this.name=t,this.id=void 0,this.capacity=void 0,this.location=void 0,this.equipment=void 0,this.id=X()},ee=(n(41),n(20)),te=n.n(ee),ne=function(e){var t=function(){return e.btnType||"button"},n=o.a.createElement("button",{type:t(),className:e.btnClassName,onClick:e.onClick,"aria-label":e.iconId},e.label);switch(e.style){case"icon":n=o.a.createElement("button",{type:t(),className:"btn ".concat(e.btnClassName),onClick:e.onClick,"aria-label":e.iconId},o.a.createElement("svg",{className:"icon"},o.a.createElement("use",{xlinkHref:"".concat(te.a,"#").concat(e.iconId)})));break;case"icon-text":n=o.a.createElement("button",{type:t(),className:"btn btn_flat",onClick:e.onClick,"aria-label":e.label},o.a.createElement("svg",{className:"icon"},o.a.createElement("use",{xlinkHref:"".concat(te.a,"#").concat(e.iconId)})),o.a.createElement("span",null,e.label));break;case"text":n=o.a.createElement("button",{type:t(),className:"btn btn_flat",onClick:e.onClick,"aria-label":e.label},o.a.createElement("span",null,e.label))}return n};!function(e){e.Projector="display",e.WhiteBoard="users",e.Skype="skype"}(h||(h={}));n(43);var ae,ie=function(e){return o.a.createElement("div",{className:"EquipmentAdmin"},o.a.createElement("label",null,"Room Equipment"),Object.values(h).map(function(t){return o.a.createElement("div",{key:t},o.a.createElement("button",{type:"button",onClick:function(){return e.onEquipmentToggleClick(e.roomId,t)}},t))}))},oe=(n(45),function(e){var t=null,n=["InputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=o.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=o.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:"Input"},o.a.createElement("label",{className:"Label"},e.label),t)}),ce=(n(47),n(12)),le=function(e){function t(e){var n;return Object(s.a)(this,t),console.log("[SignInButton] constructor"),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).apiCalendar=void 0,n.apiCalendar=n.props.googleApi,n.state={signedIn:n.apiCalendar.sign},n.handleItemClick=n.handleItemClick.bind(Object(ce.a)(Object(ce.a)(n))),n.apiCalendar.onLoadCallback=function(){n.setState({signedIn:n.apiCalendar.sign}),n.apiCalendar.listenSign(function(e){console.log(e),n.setState({signedIn:e})}),n.apiCalendar.sign||n.apiCalendar.handleAuthClick()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("[SignInButton] componentDidMount")}},{key:"handleItemClick",value:function(e,t){"sign-in"===t?this.apiCalendar.handleAuthClick():"sign-out"===t&&this.apiCalendar.handleSignoutClick()}},{key:"sync",value:function(){var e=this;setInterval(function(){console.log("[SignIn button] syncing events in interval"),e.apiCalendar.listUpcomingEvents()},6e4)}},{key:"initClient",value:function(){this.apiCalendar.initClient()}},{key:"render",value:function(){var e=this,t=this.state.signedIn?o.a.createElement("button",{type:"button",onClick:function(t){return e.handleItemClick(t,"sign-out")}},"sign-out"):o.a.createElement("button",{type:"button",onClick:function(t){return e.handleItemClick(t,"sign-in")}},"sign-in");return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:function(){return e.initClient()}},"init client"),t,o.a.createElement("button",{type:"button",onClick:function(){return e.sync()}},"sync"))}}]),t}(o.a.Component),re=function e(t,n,a,i){Object(s.a)(this,e),this.title=t,this.roomId=n,this.from=a,this.to=i,this.id=void 0,this.confirmed=!1,this.by=void 0,this.attendees=void 0,this.agenda=void 0,this.extId=void 0,this.extStatus=void 0,this.id=X(),this.from=J(this.from),this.to=J(this.to)},se=Object(p.d)({slice:"allocation",initialState:{entity:{},ids:[]},reducers:{addAllocation:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},deleteAllocation:function(e,t){delete e.entity[t.payload.id],e.ids=e.ids.filter(function(e){return e!==t.payload.id})},finishEarly:function(e,t){e.entity[t.payload.id].to=J(t.payload.time),e.entity[t.payload.id].confirmed=!0},extendMeeting:function(e,t){e.entity[t.payload.id].to+=t.payload.amount,e.entity[t.payload.id].confirmed=!0},confirmMeeting:function(e,t){e.entity[t.payload.id].confirmed=!0,e.entity[t.payload.id].from=J(t.payload.time)},syncExternalAllocations:function(e,t){console.log("[AllocationSlice:syncExternalAllocations] : ",t);var n=t.payload,a=Object.values(e.entity).filter(function(e){return!!e.extId&&!e.confirmed&&!n.find(function(t){return t.extId===e.extId})}),i=!0,o=!1,c=void 0;try{for(var l,r=function(){var t=l.value;delete e.entity[t.id],e.ids=e.ids.filter(function(e){return e!==t.id})},s=a[Symbol.iterator]();!(i=(l=s.next()).done);i=!0)r()}catch(v){o=!0,c=v}finally{try{i||null==s.return||s.return()}finally{if(o)throw c}}var u=!0,d=!1,m=void 0;try{for(var f,g=function(){var t=f.value,n=Object.values(e.entity).find(function(e){return e.extId===t.extId});n?"confirmed"!==t.extStatus?(delete e.entity[n.id],e.ids=e.ids.filter(function(e){return e!==n.id})):n.confirmed||(n.from=t.from,n.to=t.to,n.title=t.title):"confirmed"===t.extStatus&&(e.entity[t.id]=t,e.ids.push(t.id))},p=n[Symbol.iterator]();!(u=(f=p.next()).done);u=!0)g()}catch(v){d=!0,m=v}finally{try{u||null==p.return||p.return()}finally{if(d)throw m}}}}}),ue=n(4),de=function e(t,n,a){Object(s.a)(this,e),this.roomId=t,this.type=n,this.status=a,this.id=void 0,this.id=X()};!function(e){e.Available="Available",e.NotAvailable="NotAvailable",e.Broken="Broken"}(ae||(ae={}));var me=Object(p.d)({slice:"equipment",initialState:{entity:{}},reducers:{addEquipment:function(e,t){e.entity[t.payload.id]=t.payload},deleteEquipment:function(e,t){delete e.entity[t.payload.id]},toggleEquipment:function(e,t){console.log("toggle equipment: ",t);var n=t.payload.roomId,a=t.payload.type,i=Object.values(e.entity).filter(function(e){return e.roomId===n&&e.type===a})[0];if(i)delete e.entity[i.id];else{var o=new de(n,a,ae.Available);e.entity[o.id]=Object(g.a)({},o)}},setStatus:function(e,t){return e.entity[t.payload.id].status=t.payload.status,e},changeStatus:function(e,t){var n=e.entity[t.payload.id],a=ae.Available;switch(n.status){case ae.Available:a=ae.Broken;break;case ae.Broken:a=ae.NotAvailable;break;case ae.NotAvailable:a=ae.Available}return n.status=a,e}}}),fe=n(27),ge=Object(ue.combineReducers)({ui:W.reducer,room:N.reducer,allocation:se.reducer,equipment:me.reducer}),pe=Object(fe.a)(ge,function(e,t){var n=Object(g.a)({},e);switch(n.ui=Object(g.a)({},n.ui),t.type){case L.toString():return n.ui.syncInProgress=!0,n;case V.toString():return n.ui.syncInProgress=!1,n;case G.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;case T.toString():return n.ui.syncInProgress=!0,n;case R.toString():return n.ui.syncInProgress=!1,n;case q.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;case M.toString():return n.ui.syncInProgress=!0,n;case F.toString():return(n=Object(g.a)({},n,t.payload)).ui.time=Date.now(),n.ui.syncInProgress=!1,n;case B.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;default:return e}}),ve=Object(p.a)({reducer:pe}),he=function(){function e(t,n,a,i){Object(s.a)(this,e),this.sign=!1,this.onLoadCallback=void 0,this.events={},this.syncToken=null,this.DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],this.SCOPES="https://www.googleapis.com/auth/calendar.readonly",this.CONFIG={apiKey:"[googleApi] apiKey not provided!!",clientId:"[googleApi] clientId not provided!!",discoveryDocs:this.DISCOVERY_DOCS,scope:this.SCOPES},this.calendarId=void 0,this.roomId=void 0,this.roomId=t,this.calendarId=i,this.CONFIG.apiKey=n,this.CONFIG.clientId=a,this.handleClientLoad()}return Object(u.a)(e,[{key:"gapi",get:function(){return window.gapi}}]),Object(u.a)(e,[{key:"changeConfig",value:function(e,t,n,a){this.roomId=e,this.calendarId=a,this.CONFIG.apiKey=t,this.CONFIG.clientId=n}},{key:"handleClientLoad",value:function(){var e=this,t=document.createElement("script");t.src="https://apis.google.com/js/api.js",document.body.appendChild(t),t.onload=function(){e.gapi.load("client:auth2",function(){return console.log("[Google Api] gapi loaded")})}}},{key:"handleAuthClick",value:function(){this.gapi?this.gapi.auth2.getAuthInstance().signIn():console.log("Error: this.gapi not loaded")}},{key:"handleSignoutClick",value:function(){this.gapi?this.gapi.auth2.getAuthInstance().signOut():console.log("Error: this.gapi not loaded")}},{key:"listenSign",value:function(e){this.gapi?this.gapi.auth2.getAuthInstance().isSignedIn.listen(e):console.log("Error: this.gapi not loaded")}},{key:"sync",value:function(){var e,t=this;null==this.syncToken?(console.log("Performing full sync."),e=this.constructUpcomingEventsRequestFull()):(console.log("Performing incremental sync."),(e=this.constructUpcomingEventsRequestPartial()).syncToken=this.syncToken);!function n(a){e.pageToken=a,console.log("request body: ",e),t.gapi.client.calendar.events.list(e).then(function(e){console.log("synced object: ",e.result),console.log("events synced: ",e.result.items),t.events=e.result,0===t.events.items.length?console.log("No new events to sync."):(console.log("[TODO] syncEvents"),t.syncEvents(t.events.items));var a=t.events.nextPageToken;a?(console.log("new pageToken: ",a),n(a)):(console.log("setting sync Token: ",t.events.nextSyncToken),t.syncToken=t.events.nextSyncToken,console.log("Sync complete."))}).catch(function(e){if(console.log("Sync Error: ",e),410!==e.statusCode)throw e;console.log("Invalid sync token, clearing event store and re-syncing."),t.syncToken=null,t.events=[],t.sync()})}(null)}},{key:"syncEvents",value:function(e){var t=this,n=e.map(function(e){var n=new re(e.summary,t.roomId,new Date(e.start.dateTime).getTime(),new Date(e.end.dateTime).getTime());return e.attendees&&(n.attendees=e.attendees.length),e.organizer&&e.organizer.displayName&&(n.by=e.organizer.displayName),n.extId=e.id,n.extStatus=e.status,Object(g.a)({},n)});ve.dispatch(se.actions.syncExternalAllocations(n)),console.log("Google api. syncEvents items: ",e.length)}},{key:"listUpcomingEvents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;if(console.log("[GoogleApi] list upcoming events"),this.gapi){var n=new Date,a=new Date;return a.setDate(n.getDate()+1),this.gapi.client.calendar.events.list({calendarId:this.calendarId,maxResults:t,orderBy:"startTime",showDeleted:!0,singleEvents:!0,timeMin:n.toISOString(),timeMax:a.toISOString()}).then(function(t){console.log("events: ",t.result.items),e.syncEvents(t.result.items)})}return console.log("Error: this.gapi not loaded"),!1}},{key:"constructUpcomingEventsRequestFull",value:function(){return{calendarId:arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.calendarId,maxResults:arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,pageToken:null,singleEvents:!0,syncToken:null,timeMin:(new Date).toISOString()}}},{key:"constructUpcomingEventsRequestPartial",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.calendarId,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=new Date;return(new Date).setDate(n.getDate()+1),{calendarId:e,maxResults:t,pageToken:null,singleEvents:!0,syncToken:null}}},{key:"initClient",value:function(){var e=this;console.log("[Google API] Begin initClient, Config: ",this.CONFIG),this.gapi.client.init(this.CONFIG).then(function(){console.log("[Google API] Client init success"),e.gapi.auth2.getAuthInstance().isSignedIn.listen(function(t){return e.updateSigninStatus(t)}),e.updateSigninStatus(e.gapi.auth2.getAuthInstance().isSignedIn.get()),e.onLoadCallback&&e.onLoadCallback()}).catch(function(e){console.log("[Google API] Client init error:",e)})}},{key:"updateSigninStatus",value:function(e){e&&this.listUpcomingEvents(10),this.sign=e}}]),e}(),ye=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={formData:{roomName:{elementType:"input",elementConfig:{type:"text",placeholder:"Conference room 1"},label:"Room name",value:"",validation:{required:!0},valid:!1,touched:!1},clientID:{elementType:"input",elementConfig:{type:"text",placeholder:"Client ID from google calendar API"},label:"Client ID",value:"",validation:{required:!0},valid:!1,touched:!1},apiKey:{elementType:"input",elementConfig:{type:"text",placeholder:"API key from google calendar API"},label:"API key",value:"",validation:{required:!0},valid:!1,touched:!1},calendarID:{elementType:"input",elementConfig:{type:"text",placeholder:"Calendar ID can be found in google calendar settings"},label:"Calendar ID",value:"",validation:{required:!0},valid:!1,touched:!1}},formIsValid:!1},n.selectedRoom=void 0,n.roomEquipment=void 0,n.syncSettings=void 0,n.googleApi=void 0,n.submitSettings=function(e){e.preventDefault();var t={};for(var a in n.state.formData)t[a]=n.state.formData[a].value;n.selectedRoom.name=t.roomName;var i={syncSettings:{clientID:t.clientID,apiKey:t.apiKey,calendarID:t.calendarID},room:n.selectedRoom};console.log("[AdminPanel] selectedroom:",n.selectedRoom),console.log("[AdminPanel] settings: ",i),n.props.onSettingsSaved(i)},n.inputChangedHandler=function(e,t){var a=Y(n.state.formData[t],{value:e.target.value,valid:Q(e.target.value,n.state.formData[t].validation),touched:!0}),i=Y(n.state.formData,Object(H.a)({},t,a)),o=!0;for(var c in i)o=i[c].valid&&o;n.setSyncSettings(i),n.googleApi.changeConfig(n.selectedRoom.id,n.syncSettings.apiKey,n.syncSettings.clientID,n.syncSettings.calendarID),n.setState({formData:i,formIsValid:o})},n.selectedRoom=Object(g.a)({},e.selectedRoom),n.roomEquipment=Object(g.a)({},e.roomEquipment),n.syncSettings=Object(g.a)({},e.syncSettings),n.selectedRoom||(n.selectedRoom=Object(g.a)({},new Z("Conference Room 1"))),n.state.formData.roomName.value=n.selectedRoom.name,n.state.formData.clientID.value=n.syncSettings.clientID,n.state.formData.apiKey.value=n.syncSettings.apiKey,n.state.formData.calendarID.value=n.syncSettings.calendarID,n.googleApi=new he(n.selectedRoom.id,n.syncSettings.apiKey,n.syncSettings.clientID,n.syncSettings.calendarID),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"setSyncSettings",value:function(e){this.syncSettings={clientID:e.clientID,apiKey:e.apiKey,calendarID:e.calendarID}}},{key:"clearSettings",value:function(){this.props.onSettingsClear()}},{key:"cancel",value:function(){this.props.onCancel()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.formData)t.push({id:n,config:this.state.formData[n]});var a=o.a.createElement("form",{onSubmit:this.submitSettings},t.map(function(t){return o.a.createElement(oe,{key:t.id,label:t.config.label,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),o.a.createElement("div",null,o.a.createElement(ie,{roomId:this.selectedRoom.id,equipment:this.roomEquipment,onEquipmentToggleClick:this.props.onEquipmentToggleClick})),o.a.createElement(le,{roomId:this.selectedRoom.id,googleApi:this.googleApi}),o.a.createElement("div",{className:"AdminPanelButtons"},o.a.createElement(ne,{label:"Clear Settings",onClick:function(){return e.clearSettings()}}),o.a.createElement(ne,{label:"Cancel",onClick:function(){return e.cancel()}}),o.a.createElement(ne,{btnType:"submit",iconId:"icon-save",label:"Save Settings"})));return o.a.createElement("div",{className:"AdminPanel"},o.a.createElement("h3",null,"Admin Panel"),a)}}]),t}(i.Component),be=Object(r.b)(function(e){return{selectedRoom:k(e),roomEquipment:w(e),syncSettings:E(e)}},function(e){return{onSettingsSaved:function(t){e(N.actions.changeRoomName(Object(g.a)({},t.room))),e(W.actions.setSelectedRoomId(t.room.id)),e(W.actions.setSyncSettings(t.syncSettings)),e(W.actions.hideAdminPanel()),e(K())},onEquipmentToggleClick:function(t,n){console.log("onEquipmentToggleClick"),e(me.actions.toggleEquipment({roomId:t,type:n}))},onSettingsClear:function(){e(z())},onCancel:function(){e(W.actions.hideAdminPanel())}}})(ye),Ce=(n(49),function(e){return o.a.createElement("div",{className:"EquipmentBar"},e.equipment.map(function(t){return function(t){return o.a.createElement(ne,{key:t.type,style:"icon",onClick:function(){return e.onChangeStatusClick(t)},iconId:"icon-".concat(t.type.toLowerCase()),btnClassName:"btn_".concat(t.status.toLowerCase())})}(t)}))}),Ee=(n(51),n(53),function(e){var t=["RoomStatusBorder"];return t.push(e.roomStatus),o.a.createElement("div",{className:t.join(" ")},e.children)}),ke=function(e){return o.a.createElement("div",{className:"Header"},o.a.createElement(Ee,{roomStatus:e.roomStatus},o.a.createElement("div",{className:"HeaderContent"},o.a.createElement("div",null,o.a.createElement("h1",null,e.room.name)),o.a.createElement("div",null,(new Date).toLocaleDateString()),o.a.createElement(Ce,{equipment:e.equipment,onChangeStatusClick:e.onChangeStatusClick}))))},Ie=(n(55),function(e){var t=$(e.from-e.time);return o.a.createElement("div",{className:"AllocationInfo"},o.a.createElement("div",{className:"text-very-small text-gray"},"Next Meeting"),o.a.createElement("div",null,o.a.createElement("h4",null,e.title)),o.a.createElement("div",null,_(e.from)," - ",_(e.to)),o.a.createElement("div",null,"Starts In: ",Math.floor(t/60)?o.a.createElement("span",null,Math.floor(t/60)," h"):null," ",t%60," min"))}),Se=(n(57),function(e){var t=$(e.to-e.time),n=$(e.to-e.from),a=n-t;Math.round(a/n*100);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"AllocationInfoBig"},o.a.createElement("div",{className:"text-small text-gray"},"In Progress"),o.a.createElement("div",null,o.a.createElement("h2",null,e.title)),o.a.createElement("div",null,o.a.createElement("span",null,_(e.from)," - ",_(e.to))),o.a.createElement("div",null,"Ends In: ",Math.floor(t/60)?o.a.createElement("span",null,Math.floor(t/60)," h"):null," ",t%60," min"),e.attendees?o.a.createElement("div",null,e.attendees," attendees"):null,e.agenda?o.a.createElement("div",null,"Agenda: ",e.agenda):null))}),Oe=(n(59),function(e){var t,n,i;e.currentAllocation?(e.roomStatus===a.awaiting&&(n=o.a.createElement(ne,{style:"icon-text",onClick:function(){return e.onConfirmMeetingClick(e.currentAllocation.id,e.time)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,{style:"icon-text",onClick:function(){return e.onExtendMeetingClick(e.currentAllocation.id,e.time,9e5)},iconId:"icon-calendar-plus-o",label:"Extend"}),o.a.createElement(ne,{style:"icon-text",onClick:function(){return e.onFinishEarlyClick(e.currentAllocation.id,e.time)},iconId:"icon-calendar-times-o",label:"Finish"}),n)):(e.roomStatus===a.awaiting&&(i=o.a.createElement(ne,{style:"icon-text",onClick:function(){return e.onConfirmMeetingClick(e.nextAllocation.id,e.time)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,{style:"icon-text",onClick:function(){return e.onAddMeetingClick(e.roomId,e.time)},iconId:"icon-calendar-o",label:"Book now"}),i));return o.a.createElement("div",{className:"AllocationMenu ".concat(e.roomStatus)},t)}),je=(n(61),function(e){return e.room?(e.currentAllocation&&(t=o.a.createElement(Se,Object.assign({time:e.time},e.currentAllocation))),e.nextAllocation&&(n=o.a.createElement(Ie,Object.assign({time:e.time},e.nextAllocation))),o.a.createElement("div",{className:"AllocationsView"},o.a.createElement("div",{className:"Allocations"},t,n),o.a.createElement(Oe,{roomId:e.room.id,time:e.time,currentAllocation:e.currentAllocation,nextAllocation:e.nextAllocation,roomStatus:e.roomStatus,onFinishEarlyClick:e.onFinishEarlyClick,onExtendMeetingClick:e.onExtendMeetingClick,onConfirmMeetingClick:e.onConfirmMeetingClick,onAddMeetingClick:e.onAddMeetingClick}))):(console.error("[RoomView] No room provided!"),o.a.createElement(be,null));var t,n}),xe=(n(63),function(e){var t=240,n=500,a="#4CAF50",i="#F44336";function c(e,a,i,o,c,l){var r=c||t;function s(e){var t=2*Math.PI/720;return-.5*Math.PI+e*t}e.beginPath(),e.lineWidth=l||4,e.strokeStyle=o;var u=s(a),d=s(i);e.arc(n/2,n/2,r,u,d),e.stroke()}function l(e){var t=new Date(0);return t.setUTCMilliseconds(e),60*t.getHours()+t.getMinutes()}function r(e,t,n){return Math.min(t,e+60*n*60*1e3)}var s=o.a.createRef();return setTimeout(function(){if(s.current&&s.current.getContext){var t=s.current.getContext("2d");s.current.width=n,s.current.height=n,function(t){var n=l(e.time);c(t,n+1,n,"#000",200,22),c(t,n-60,n-120,a,203,5),e.allocations.map(function(t){return{from:(n=e.time,a=t.from,i=1,Math.max(a,n-60*i*60*1e3)),to:r(e.time,t.to,10)};var n,a,i}).map(function(e){return{from:l(e.from),to:l(e.to)}}).forEach(function(e){return c(t,e.from,e.to,i,200,12)}),c(t,n-2,n+3,"#FFF",170,30),c(t,n,n+1,"#000",196,20);for(var o=0;o<24;o++)o%2?c(t,30*o,30*o+1,"#FFF",200,12):c(t,30*o,30*o+1,"#FFF",196,20)}(t)}},10),o.a.createElement("div",{className:"TimeView"},o.a.createElement("span",null,_(e.time)),o.a.createElement("canvas",{className:"TimeViewCanvas",id:"canvas",ref:s}))}),Ae=(n(65),function(e){return o.a.createElement("div",{className:"RoomViewContent"},o.a.createElement(xe,{time:e.time,allocations:e.clockAllocations}),o.a.createElement("div",{className:"RoomViewContentSeparator"}),o.a.createElement(je,e))}),we=(n(67),n(69),n(71),function(e){return o.a.createElement("div",{className:"StatusBar"},o.a.createElement(ne,{onClick:e.onAdminClicked,iconId:"icon-settings",label:"Admin"}))}),Ne=function(e){return o.a.createElement("div",{className:"Footer"},o.a.createElement(Ee,{roomStatus:e.roomStatus},o.a.createElement(we,{room:e.room,onAdminClicked:e.onAdminClick})))},De=(n(73),n(75),function(){return o.a.createElement("div",{className:"Backdrop"})}),Pe=function(e){var t=["Popup"];return e.open&&t.push("open"),o.a.createElement("div",{className:t.join(" ")},o.a.createElement(De,null),o.a.createElement("div",{className:"PopupContent"},o.a.createElement(ne,{btnClassName:"PopupClose",onClick:e.onCloseClick,iconId:"icon-close",label:"Close"}),e.children))},Te=function(e){return e.room?o.a.createElement("div",{className:"RoomView"},o.a.createElement(ke,e),o.a.createElement(Ae,e),o.a.createElement(Ne,e),o.a.createElement(Pe,{open:e.adminPanelOpen,onCloseClick:e.onPopupCloseClick},o.a.createElement(be,null))):(console.error("[RoomView] No room provided!"),o.a.createElement(be,null))},Re=Object(r.b)(function(e,t){var n,i,o,c=y(e),l=C(e),r=k(e),s=w(e),u=(n=3e5,Object(p.c)([A,x,y],function(e,t,i){return e?e.confirmed?a.occupied:a.awaiting:t&&t.from-i<n?t.confirmed?a.occupied:a.awaiting:a.free}))(e);return{currentAllocation:A(e),equipment:s,nextAllocation:x(e),room:r,roomStatus:u,time:c,adminPanelOpen:l,clockAllocations:(i=c-36e5,o=c+36e6,Object(p.c)([I],function(e){return e.filter(function(e){return e.to>i&&e.from<o})}))(e)}},function(e){return{onAdminClick:function(){e(W.actions.showAdminPanel())},onPopupCloseClick:function(){e(W.actions.hideAdminPanel())},onAddMeetingClick:function(t,n){e(se.actions.addAllocation(Object(g.a)({},new re("Ad hoc meeting",t,n,n+18e5),{confirmed:!0})))},onChangeStatusClick:function(t){e(me.actions.changeStatus(t)),console.log("TODO change status. Ids need to be added to equipment")},onConfirmMeetingClick:function(t,n){e(se.actions.confirmMeeting({id:t,time:n}))},onExtendMeetingClick:function(t,n,a){e(se.actions.extendMeeting({id:t,time:n,amount:a}))},onFinishEarlyClick:function(t,n){e(se.actions.finishEarly({id:t,time:n}))}}})(Te),qe=(n(77),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Re,null))}}]),t}(i.Component)),Me=(n(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Fe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}(function(){var e=ve.getState();console.log("[Start] startState:",e),ve.dispatch(U()),setInterval(function(){console.log("[Start] Interval"),ve.dispatch(W.actions.setTime(J(Date.now())+1)),ve.dispatch(K())},6e4)})(),l.a.render(o.a.createElement(r.a,{store:ve},o.a.createElement(qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rosi",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rosi","/service-worker.js");Me?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Fe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Fe(t,e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.6918d619.chunk.js.map