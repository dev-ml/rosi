(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/symbol-defs.119ddbe0.svg"},27:function(e,t,n){e.exports=n(66)},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var o,i=n(0),a=n.n(i),c=n(23),r=n.n(c),l=n(8),s=n(2),u=n(5),d=n(10),m=n(7),f=n(9),g=n(3),p=function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})},h=function(e){return Math.floor(e/1e3/60)},v=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},y=(n(36),function(e){return console.log("allocationInfo: ",e),a.a.createElement("div",{className:"AllocationInfo"},"Next Meeting:",a.a.createElement("div",null,p(e.from)," - ",p(e.to)),a.a.createElement("div",null,e.by),a.a.createElement("div",null,e.title))}),b=(n(38),function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"AllocationInfoBig"},"Current Meeting:",a.a.createElement("div",null,p(e.from)," - ",p(e.to)),a.a.createElement("div",null,e.by),a.a.createElement("div",null,e.title),e.attendees?a.a.createElement("div",null,"Attendees: ",e.attendees):null,e.agenda?a.a.createElement("div",null,"Agenda: ",e.agenda):null,a.a.createElement("div",null,"Duration: ",h(e.to-e.from)," min"),a.a.createElement("div",null,"Time till end: ",h(e.to-e.time)," min"),a.a.createElement("div",null,"% Done: ",100-Math.ceil(100*(e.to-e.time)/(e.to-e.from)))))});!function(e){e.occupied="occupied",e.free="free",e.awaiting="awaiting"}(o||(o={}));n(40);var E,k=n(19),C=n.n(k),S=function(e){var t=a.a.createElement("button",null,"Not configured button");switch(e.type){case"icon":t=a.a.createElement("button",{className:"btn ".concat(e.btnClassName),onClick:e.onClick,"aria-label":e.iconId},a.a.createElement("svg",{className:"icon"},a.a.createElement("use",{xlinkHref:"".concat(C.a,"#").concat(e.iconId)})));break;case"icon-text":t=a.a.createElement("button",{className:"btn btn_flat",onClick:e.onClick,"aria-label":e.label},a.a.createElement("svg",{className:"icon"},a.a.createElement("use",{xlinkHref:"".concat(C.a,"#").concat(e.iconId)})),a.a.createElement("span",null,e.label));break;case"text":t=a.a.createElement("button",{type:"button",className:"btn btn_flat",onClick:e.onClick,"aria-label":e.label},a.a.createElement("span",null,e.label))}return t},I=function(e){var t,n,i;console.log("Allocation menu:",e.id),console.log("Props: ",e),e.currentAllocation?(e.roomStatus===o.awaiting&&(n=a.a.createElement(S,{type:"icon-text",onClick:function(){return e.onConfirmMeetingClick(e.currentAllocation.id)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{type:"icon-text",onClick:function(){return e.onExtendMeetingClick(e.currentAllocation.id,6e4)},iconId:"icon-calendar-plus-o",label:"Extend"}),a.a.createElement(S,{type:"icon-text",onClick:function(){return e.onFinishEarlyClick(e.currentAllocation.id)},iconId:"icon-calendar-times-o",label:"Finish"}),n)):(e.roomStatus===o.awaiting&&(i=a.a.createElement(S,{type:"icon-text",onClick:function(){return e.onConfirmMeetingClick(e.nextAllocation.id)},iconId:"icon-calendar-check-o",label:"Confirm"})),t=a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{type:"icon-text",onClick:function(){return e.onAddMeetingClick(e.roomId)},iconId:"icon-calendar-o",label:"Book now"}),i));return a.a.createElement("div",{className:"AllocationMenu ".concat(e.roomStatus)},t)},O=(n(42),function(e){var t=["RoomStatusBorder"];return t.push(e.roomStatus),a.a.createElement("div",{className:t.join(" ")},e.children)}),x=(n(44),n(12)),j=function e(t,n,o,i){Object(s.a)(this,e),this.title=t,this.roomId=n,this.from=o,this.to=i,this.id=void 0,this.confirmed=!1,this.by=void 0,this.attendees=void 0,this.agenda=void 0,this.extId=void 0,this.extStatus=void 0,this.id=v()},w=n(1),A=Object(w.d)({slice:"allocation",initialState:{entity:{},ids:[]},reducers:{addAllocation:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},deleteAllocation:function(e,t){delete e.entity[t.payload.id],e.ids=e.ids.filter(function(e){return e!==t.payload.id})},finishEarly:function(e,t){e.entity[t.payload].to=Date.now()-6e4,e.entity[t.payload].confirmed=!0},extendMeeting:function(e,t){e.entity[t.payload.id].to+=t.payload.amount,e.entity[t.payload.id].confirmed=!0},confirmMeeting:function(e,t){e.entity[t.payload.id].confirmed=!0,e.entity[t.payload.id].from=Date.now()-6e4},syncExternalAllocations:function(e,t){console.log("[AllocationSlice:syncExternalAllocations] : ",t);var n=t.payload,o=Object.values(e.entity).filter(function(e){return!!e.extId&&!e.confirmed&&!n.find(function(t){return t.extId===e.extId})}),i=!0,a=!1,c=void 0;try{for(var r,l=function(){var t=r.value;delete e.entity[t.id],e.ids=e.ids.filter(function(e){return e!==t.id})},s=o[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)l()}catch(h){a=!0,c=h}finally{try{i||null==s.return||s.return()}finally{if(a)throw c}}var u=!0,d=!1,m=void 0;try{for(var f,g=function(){var t=f.value,n=Object.values(e.entity).find(function(e){return e.extId===t.extId});n?"confirmed"!==t.extStatus?(delete e.entity[n.id],e.ids=e.ids.filter(function(e){return e!==n.id})):n.confirmed||(n.from=t.from,n.to=t.to,n.title=t.title):"confirmed"===t.extStatus&&(e.entity[t.id]=t,e.ids.push(t.id))},p=n[Symbol.iterator]();!(u=(f=p.next()).done);u=!0)g()}catch(h){d=!0,m=h}finally{try{u||null==p.return||p.return()}finally{if(d)throw m}}}}}),N=n(4),T=function e(t,n,o){Object(s.a)(this,e),this.roomId=t,this.type=n,this.status=o,this.id=void 0,this.id=v()};!function(e){e.Available="Available",e.NotAvailable="NotAvailable",e.Broken="Broken"}(E||(E={}));var P,R,D=Object(w.d)({slice:"equipment",initialState:{entity:{}},reducers:{addEquipment:function(e,t){e.entity[t.payload.id]=t.payload},deleteEquipment:function(e,t){delete e.entity[t.payload.id]},toggleEquipment:function(e,t){console.log("toggle equipment: ",t);var n=t.payload.roomId,o=t.payload.type,i=Object.values(e.entity).filter(function(e){return e.roomId===n&&e.type===o})[0];if(i)delete e.entity[i.id];else{var a=new T(n,o,E.Available);e.entity[a.id]=Object(g.a)({},a)}},setStatus:function(e,t){return e.entity[t.payload.id].status=t.payload.status,e},changeStatus:function(e,t){var n=e.entity[t.payload.id],o=E.Available;switch(n.status){case E.Available:o=E.Broken;break;case E.Broken:o=E.NotAvailable;break;case E.NotAvailable:o=E.Available}return n.status=o,e}}}),q=Object(w.d)({slice:"room",initialState:{entity:{},ids:[]},reducers:{addRoom:function(e,t){e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id)},changeRoomName:function(e,t){e.entity[t.payload.id]?e.entity[t.payload.id].name=t.payload.name:(e.entity[t.payload.id]=t.payload,e.ids.push(t.payload.id))}}}),M=Object(w.d)({slice:"ui",initialState:{selectedRoomId:"",time:Date.now(),adminPanelOpen:!1,syncInProgress:!1,syncError:""},reducers:{setSelectedRoomId:function(e,t){return e.selectedRoomId=t.payload,e},setTime:function(e,t){return e.time=t.payload,e},showAdminPanel:function(e){return e.adminPanelOpen=!0,e},hideAdminPanel:function(e){return e.adminPanelOpen=!1,e}}}),B=n(26),F=n(13),L=n.n(F),U=Object(w.b)("crossslice/savestate/started"),_=Object(w.b)("crossslice/savestate/succeeded"),W=Object(w.b)("crossslice/savestate/failed"),G=Object(w.b)("crossslice/loadstate/started"),H=Object(w.b)("crossslice/loadstate/succeeded"),V=Object(w.b)("crossslice/loadstate/failed"),Y=Object(w.b)("crossslice/removestate/started"),J=Object(w.b)("crossslice/removestate/succeeded"),K=Object(w.b)("crossslice/removestate/failed"),z=function(){return function(e,t){return e(U()),(n="state",o=t(),L.a.setItem(n,o)).then(function(){return e(_())},function(t){return e(W(t))});var n,o}},Q=function(){return function(e){return e(G()),(t="state",L.a.getItem(t)).then(function(t){return e(H(t))},function(t){return e(V(t))});var t}},X=function(){return function(e){return e(Y()),(t="state",L.a.removeItem(t)).then(function(t){e(J(t)),e(Q())},function(t){return e(K(t))});var t}},$=Object(N.combineReducers)({ui:M.reducer,room:q.reducer,allocation:A.reducer,equipment:D.reducer}),Z=Object(B.a)($,function(e,t){var n=Object(g.a)({},e);switch(n.ui=Object(g.a)({},n.ui),t.type){case Y.toString():return n.ui.syncInProgress=!0,n;case J.toString():return n.ui.syncInProgress=!1,n;case K.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;case U.toString():return n.ui.syncInProgress=!0,n;case _.toString():return n.ui.syncInProgress=!1,n;case W.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;case G.toString():return n.ui.syncInProgress=!0,n;case H.toString():return(n=Object(g.a)({},n,t.payload)).ui.time=Date.now(),n.ui.syncInProgress=!1,n;case V.toString():return n.ui.syncInProgress=!1,n.ui.syncError=t.payload,n;default:return e}}),ee=Object(w.a)({reducer:Z}),te=function(){function e(t,n){Object(s.a)(this,e),this.sign=!1,this.onLoadCallback=void 0,this.events={},this.syncToken=null,this.CONFIG=void 0,this.roomId=void 0,this.roomId=t,this.CONFIG=n,this.handleClientLoad()}return Object(u.a)(e,[{key:"gapi",get:function(){return window.gapi}}]),Object(u.a)(e,[{key:"handleClientLoad",value:function(){var e=this,t=document.createElement("script");t.src="https://apis.google.com/js/api.js",document.body.appendChild(t),t.onload=function(){e.gapi.load("client:auth2",function(){return e.initClient()})}}},{key:"handleAuthClick",value:function(){this.gapi?this.gapi.auth2.getAuthInstance().signIn():console.log("Error: this.gapi not loaded")}},{key:"handleSignoutClick",value:function(){this.gapi?this.gapi.auth2.getAuthInstance().signOut():console.log("Error: this.gapi not loaded")}},{key:"listenSign",value:function(e){this.gapi?this.gapi.auth2.getAuthInstance().isSignedIn.listen(e):console.log("Error: this.gapi not loaded")}},{key:"sync",value:function(){var e,t=this;null==this.syncToken?(console.log("Performing full sync."),e=this.constructUpcomingEventsRequestFull()):(console.log("Performing incremental sync."),(e=this.constructUpcomingEventsRequestPartial()).syncToken=this.syncToken);!function n(o){e.pageToken=o,console.log("request body: ",e),t.gapi.client.calendar.events.list(e).then(function(e){console.log("synced object: ",e.result),console.log("events synced: ",e.result.items),t.events=e.result,0===t.events.items.length?console.log("No new events to sync."):(console.log("[TODO] syncEvents"),t.syncEvents(t.events.items));var o=t.events.nextPageToken;o?(console.log("new pageToken: ",o),n(o)):(console.log("setting sync Token: ",t.events.nextSyncToken),t.syncToken=t.events.nextSyncToken,console.log("Sync complete."))}).catch(function(e){if(console.log("Sync Error: ",e),410!==e.statusCode)throw e;console.log("Invalid sync token, clearing event store and re-syncing."),t.syncToken=null,t.events=[],t.sync()})}(null)}},{key:"syncEvents",value:function(e){var t=this,n=e.map(function(e){var n=new j(e.summary,t.roomId,new Date(e.start.dateTime).getTime(),new Date(e.end.dateTime).getTime());return e.attendees&&(n.attendees=e.attendees.length),n.extId=e.id,n.extStatus=e.status,Object(g.a)({},n)});ee.dispatch(A.actions.syncExternalAllocations(n)),console.log("Google api. syncEvents items: ",e.length)}},{key:"listUpcomingEvents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;if(console.log("[GoogleApi] list upcoming events"),this.gapi){var n=new Date,o=new Date;return o.setDate(n.getDate()+1),this.gapi.client.calendar.events.list({calendarId:"primary",maxResults:t,orderBy:"startTime",showDeleted:!0,singleEvents:!0,timeMin:n.toISOString(),timeMax:o.toISOString()}).then(function(t){console.log("events: ",t.result.items),e.syncEvents(t.result.items)})}return console.log("Error: this.gapi not loaded"),!1}},{key:"constructUpcomingEventsRequestFull",value:function(){return{calendarId:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobica.com_3331303731333131353835@resource.calendar.google.com",maxResults:arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,pageToken:null,singleEvents:!0,syncToken:null,timeMin:(new Date).toISOString()}}},{key:"constructUpcomingEventsRequestPartial",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobica.com_3331303731333131353835@resource.calendar.google.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=new Date;return(new Date).setDate(n.getDate()+1),{calendarId:e,maxResults:t,pageToken:null,singleEvents:!0,syncToken:null}}},{key:"initClient",value:function(){var e=this;this.gapi.client.init(this.CONFIG).then(function(){e.gapi.auth2.getAuthInstance().isSignedIn.listen(function(t){return e.updateSigninStatus(t)}),e.updateSigninStatus(e.gapi.auth2.getAuthInstance().isSignedIn.get()),e.onLoadCallback&&e.onLoadCallback()}).catch(function(e){console.log(e)})}},{key:"updateSigninStatus",value:function(e){e&&this.listUpcomingEvents(10),this.sign=e}}]),e}(),ne=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).CLIENT_ID="162342559011-rh81oauc2fut2lj6d03j4srkk3oeea2l.apps.googleusercontent.com",n.API_KEY="AIzaSyBe9hJXEgWHgkhAjqMEnxDtyCQLVCdEByI",n.DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],n.SCOPES="https://www.googleapis.com/auth/calendar.readonly",n.CONFIG={apiKey:n.API_KEY,clientId:n.CLIENT_ID,discoveryDocs:n.DISCOVERY_DOCS,scope:n.SCOPES},n.apiCalendar=void 0,n.apiCalendar=new te(e.roomId,n.CONFIG),n.state={signedIn:n.apiCalendar.sign},n.handleItemClick=n.handleItemClick.bind(Object(x.a)(Object(x.a)(n))),n.apiCalendar.onLoadCallback=function(){n.setState({signedIn:n.apiCalendar.sign}),n.apiCalendar.listenSign(function(e){console.log(e),n.setState({signedIn:e})})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleItemClick",value:function(e,t){"sign-in"===t?this.apiCalendar.handleAuthClick():"sign-out"===t&&this.apiCalendar.handleSignoutClick()}},{key:"sync",value:function(){this.apiCalendar.listUpcomingEvents()}},{key:"render",value:function(){var e=this,t=this.state.signedIn?a.a.createElement("button",{onClick:function(t){return e.handleItemClick(t,"sign-out")}},"sign-out"):a.a.createElement("button",{onClick:function(t){return e.handleItemClick(t,"sign-in")}},"sign-in");return a.a.createElement(a.a.Fragment,null,t,a.a.createElement("button",{onClick:function(){return e.sync()}},"sync"))}}]),t}(a.a.Component),oe=function(e){return a.a.createElement("div",{className:"StatusBar"},a.a.createElement("div",null,"This is StatusBar"),a.a.createElement(ne,{roomId:e.room.id}),a.a.createElement(S,{type:"icon-text",onClick:e.onAdminClicked,iconId:"icon-settings",label:"Admin"}))},ie=(n(50),function(e){var t=240,n=225,o=500,i="rgb(139, 195, 74)",c="rgb(255, 87, 34)";function r(e,n,i,a,c,r){var l=c||t;function s(e){var t=2*Math.PI/720;return-.5*Math.PI+e*t}e.beginPath(),e.lineWidth=r||4,e.strokeStyle=a;var u=s(n),d=s(i);e.arc(o/2,o/2,l,u,d),e.stroke()}function l(e){var t=new Date(0);return t.setUTCMilliseconds(e),60*t.getHours()+t.getMinutes()}var s=a.a.createRef();return setTimeout(function(){if(s.current&&s.current.getContext){var a=s.current.getContext("2d");s.current.width=o,s.current.height=o,function(o){var a=l(e.time);r(o,a-3,a+2,"#000",n,8),r(o,a,a-1,"#000",t,10),r(o,a-60,a-120,i,t,6),e.allocations.map(function(e){return{from:l(e.from),to:l(e.to)}}).forEach(function(e){return r(o,e.from,e.to,c,t,12)})}(a)}},10),a.a.createElement("div",{className:"TimeView"},a.a.createElement("span",null,p(e.time)),a.a.createElement("canvas",{className:"TimeViewCanvas",id:"canvas",ref:s}))}),ae=(n(52),n(54),function(e){return a.a.createElement("div",{className:"EquipmentBar"},e.equipment.map(function(t){return function(t){return a.a.createElement(S,{key:t.type,type:"icon",onClick:function(){return e.onChangeStatusClick(t)},iconId:"icon-".concat(t.type.toLowerCase()),btnClassName:"btn_".concat(t.status.toLowerCase())})}(t)}))}),ce=(n(56),function(e){return a.a.createElement("div",{className:"Header"},a.a.createElement("div",null,e.room.name),a.a.createElement(ae,{equipment:e.equipment,onChangeStatusClick:e.onChangeStatusClick}))}),re=(n(58),n(60),function(){return a.a.createElement("div",{className:"Backdrop"})}),le=function(e){var t=["Popup"];return e.open&&t.push("open"),a.a.createElement("div",{className:t.join(" ")},a.a.createElement(re,null),a.a.createElement("div",{className:"content"},a.a.createElement(S,{type:"icon-text",onClick:e.onCloseClick,iconId:"icon-close",label:"Close"}),e.children))},se=Object(w.c)(["ui.time"]),ue=Object(w.c)(["ui.selectedRoomId"]),de=Object(w.c)(["ui.adminPanelOpen"]),me=Object(w.c)([ue,"room"],function(e,t){return t.entity[e]}),fe=Object(w.c)([ue,"allocation"],function(e,t){return Object.values(t.entity).filter(function(t){return t.roomId===e})}),ge=Object(w.c)([se,fe],function(e,t){return t.filter(function(t){return t.from<=e&&t.to>=e})}),pe=Object(w.c)([se,fe],function(e,t){return t.filter(function(t){return t.from>=e})}),he=Object(w.c)([pe],function(e){return e.sort(function(e,t){return e.from-t.from})}),ve=Object(w.c)([(P=1,Object(w.c)([he],function(e){return e.slice(0,P)}))],function(e){return e[0]}),ye=(Object(w.c)([ve,se],function(e,t){return e.from-t}),Object(w.c)([ge],function(e){return e[0]})),be=(Object(w.c)([ye],function(e){return e.to-e.from}),Object(w.c)([ge,se],function(e,t){return e.to-t}),Object(w.c)([ge],function(e){return e.length>0}),Object(w.c)([ue,"equipment"],function(e,t){return(Object.values(t.entity)||[]).filter(function(t){return t.roomId===e})})),Ee=function e(t){Object(s.a)(this,e),this.name=t,this.id=void 0,this.capacity=void 0,this.location=void 0,this.equipment=void 0,this.id=v()};!function(e){e.Projector="display",e.WhiteBoard="users",e.Skype="skype"}(R||(R={}));var ke=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"This is equipment admin"),Object.values(R).map(function(t){return a.a.createElement("div",{key:t},a.a.createElement("button",{onClick:function(){return e.onEquipmentToggleClick(e.roomId,t)}},t))}),";",a.a.createElement("div",null," test"))},Ce=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).selectedRoom=void 0,n.roomEquipment=void 0,n.selectedRoom=e.selectedRoom,n.roomEquipment=e.roomEquipment,n.selectedRoom||(n.selectedRoom=Object(g.a)({},new Ee("Conference Room 1"))),n.state={room:Object(g.a)({},n.selectedRoom)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"submitSettings",value:function(e){e.preventDefault(),this.props.onSettingsSaved(this.state.room)}},{key:"clearSettings",value:function(){this.props.onSettingsClear()}},{key:"inputChangedHandler",value:function(e){console.log(e);var t=Object(g.a)({},this.state);t.room.name=e.target.value,this.setState(t)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h3",null,"This is admin panel"),a.a.createElement("form",{onSubmit:function(t){return e.submitSettings(t)}},a.a.createElement("div",null,a.a.createElement("span",null,"General"),a.a.createElement("label",null,"Room name"),a.a.createElement("input",{type:"text",placeholder:"Room Name",value:this.state.room.name,onChange:function(t){return e.inputChangedHandler(t)}})),a.a.createElement("div",null,a.a.createElement(ke,{roomId:this.state.room.id,equipment:this.roomEquipment,onEquipmentToggleClick:this.props.onEquipmentToggleClick})),a.a.createElement(S,{type:"icon-text",iconId:"icon-save",label:"Save Settings"})),a.a.createElement(S,{type:"text",label:"Clear Settings",onClick:function(){return e.clearSettings()}}))}}]),t}(i.Component),Se=Object(l.b)(function(e){return{selectedRoom:me(e),roomEquipment:be(e)}},function(e){return{onSettingsSaved:function(t){e(q.actions.changeRoomName(t)),e(M.actions.setSelectedRoomId(t.id)),e(z())},onEquipmentToggleClick:function(t,n){console.log("onEquipmentToggleClick"),e(D.actions.toggleEquipment({roomId:t,type:n}))},onSettingsClear:function(){e(X())}}})(Ce),Ie=function(e){return e.room?(e.currentAllocation&&(t=a.a.createElement(b,Object.assign({time:e.time},e.currentAllocation))),e.nextAllocation&&(n=a.a.createElement(y,Object.assign({time:e.time},e.nextAllocation))),a.a.createElement("div",{className:"RoomView"},a.a.createElement(ce,Object.assign({time:e.time},e)),a.a.createElement(O,{roomStatus:e.roomStatus},a.a.createElement(ie,{time:e.time,allocations:e.clockAllocations}),a.a.createElement("div",{className:"Separator"}),a.a.createElement("div",{className:"RightSection"},a.a.createElement("div",{className:"Allocations"},t,n),a.a.createElement(I,{currentAllocation:e.currentAllocation,nextAllocation:e.nextAllocation,roomStatus:e.roomStatus,roomId:e.room.id,onFinishEarlyClick:e.onFinishEarlyClick,onExtendMeetingClick:e.onExtendMeetingClick,onConfirmMeetingClick:e.onConfirmMeetingClick,onAddMeetingClick:e.onAddMeetingClick}))),a.a.createElement(oe,{room:e.room,onAdminClicked:e.onAdminClick}),a.a.createElement(le,{open:e.adminPanelOpen,onCloseClick:e.onPopupCloseClick},a.a.createElement(Se,null)))):(console.error("[RoomView] No room provided!"),a.a.createElement(Se,null));var t,n},Oe=Object(l.b)(function(e,t){var n,i,a=se(e),c=de(e),r=me(e),l=be(e),s=(n=12e4,Object(w.c)([ye,ve,se],function(e,t,i){return e?e.confirmed?o.occupied:o.awaiting:t&&t.from-i<n?t.confirmed?o.occupied:o.awaiting:o.free}))(e);return{currentAllocation:ye(e),equipment:l,nextAllocation:ve(e),room:r,roomStatus:s,time:a,adminPanelOpen:c,clockAllocations:(i=600,Object(w.c)([he,se],function(e,t){return e.filter(function(e){return e.to<t+60*i*1e3})}))(e)}},function(e){return{onAdminClick:function(){e(M.actions.showAdminPanel())},onPopupCloseClick:function(){e(M.actions.hideAdminPanel())},onAddMeetingClick:function(t){e(A.actions.addAllocation(Object(g.a)({},new j("Ad hoc meeting",t,Date.now()-6e4,Date.now()+5e4),{confirmed:!0})))},onChangeStatusClick:function(t){e(D.actions.changeStatus(t)),console.log("TODO change status. Ids need to be added to equipment")},onConfirmMeetingClick:function(t){e(A.actions.confirmMeeting({id:t}))},onExtendMeetingClick:function(t,n){e(A.actions.extendMeeting({id:t,amount:n}))},onFinishEarlyClick:function(t){e(A.actions.finishEarly(t))}}})(Ie),xe=(n(62),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Oe,null))}}]),t}(i.Component)),je=(n(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function we(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}(function(){var e=ee.getState();console.log("[Start] startState:",e),ee.dispatch(Q()),setInterval(function(){console.log("[Start] Interval"),ee.dispatch(M.actions.setTime(Date.now())),ee.dispatch(z())},6e4)})(),r.a.render(a.a.createElement(l.a,{store:ee},a.a.createElement(xe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rosi",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rosi","/service-worker.js");je?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):we(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):we(t,e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.ec8863a4.chunk.js.map