(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,a){e.exports=a(295)},118:function(e,t,a){},291:function(e,t,a){},293:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"doCreateContract",function(){return T}),a.d(n,"onceGetContract",function(){return v}),a.d(n,"doDeleteContract",function(){return j}),a.d(n,"doUpdateContract",function(){return y});var r=a(1),c=a.n(r),o=a(31),l=a.n(o),i=a(298),s=(a(116),a(118),a(13)),u=a(14),m=a(16),d=a(15),p=a(17),b=a(30),h=a(110),f=a(9),E=a.n(f),g=a(7),O=a(57),_=a.n(O);a(127);_.a.apps.length||_.a.initializeApp({apiKey:"AIzaSyCN1JBRTOM5bw8QMLpF5wZF00IdwQwrKoA",authDomain:"polaris327-crud-application.firebaseapp.com",databaseURL:"https://polaris327-crud-application.firebaseio.com",projectId:"polaris327-crud-application",storageBucket:"polaris327-crud-application.appspot.com",messagingSenderId:"715090132651"});var C=_.a.database(),T=function(e){var t=e.id,a=e.name,n=e.surname,r=e.amountInUsd,c=e.currency,o=e.date;return C.ref("contracts/".concat(t)).set({id:t,user:{name:a,surname:n},amountInUsd:r,currency:c,date:o})},v=function(){return C.ref("contracts").once("value")},j=function(e){return C.ref("contracts/".concat(e)).remove()},y=function(e){var t=e.id,a=e.name,n=e.surname,r=e.amountInUsd,c=e.currency,o=e.date;return C.ref("contracts/".concat(t)).update({id:t,user:{name:a,surname:n},amountInUsd:r,currency:c,date:o})},k=a(299),S=Object(k.a)("SET_CONTRACTS_REQUEST"),w=Object(k.a)("FETCH_CONTRACTS_REQUEST"),x=Object(k.a)("SET_CONTRACTS_NEW_ENTRY"),D=Object(k.a)("FETCH_CONTRACTS_NEW_ENTRY"),I=Object(k.a)("SET_CONTRACTS_DELETE_ENTRY"),N=Object(k.a)("FETCH_CONTRACTS_DELETE_ENTRY"),U=Object(k.a)("SET_CONTRACTS_UPDATE_ENTRY"),A=Object(k.a)("FETCH_CONTRACTS_UPDATE_ENTRY"),H=function(){return n.onceGetContract().then(function(e){return e.val()})},B=E.a.mark(J),R=E.a.mark(Y),M=E.a.mark(Q),z=E.a.mark(L),P=E.a.mark(q),F=E.a.mark(G),W=E.a.mark(V),Z=E.a.mark(K);function J(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.b)(function(){return H()});case 3:return e=t.sent,t.next=6,Object(g.c)(w(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},B,this,[[0,8]])}function Y(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(S,J);case 2:case"end":return e.stop()}},R,this)}function Q(){var e,t,a,r=arguments;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},c.prev=1,c.next=4,Object(g.b)(function(){return n.doCreateContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(g.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(g.c)(D(t));case 10:return c.next=12,Object(g.c)(w(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},M,this,[[1,14]])}function L(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(x,Q);case 2:case"end":return e.stop()}},z,this)}function q(){var e,t,a,r=arguments;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",c.prev=1,c.next=4,Object(g.b)(function(){return n.doDeleteContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(g.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(g.c)(N(t));case 10:return c.next=12,Object(g.c)(w(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},P,this,[[1,14]])}function G(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(I,q);case 2:case"end":return e.stop()}},F,this)}function V(){var e,t,a,r=arguments;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},c.prev=1,c.next=4,Object(g.b)(function(){return n.doUpdateContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(g.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(g.c)(A(t));case 10:return c.next=12,Object(g.c)(w(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},W,this,[[1,14]])}function K(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(U,V);case 2:case"end":return e.stop()}},Z,this)}var X=a(103),$=a.n(X);var ee="/",te=Object(k.a)("SET_COIN_API_REQUEST"),ae=Object(k.a)("FETCH_COIN_API_REQUEST"),ne=E.a.mark(ce),re=E.a.mark(oe);function ce(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.b)(function(){return $.a.get(ee)});case 3:return e=t.sent,t.next=6,Object(g.c)(ae(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},ne,this,[[0,8]])}function oe(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(te,ce);case 2:case"end":return e.stop()}},re,this)}var le=E.a.mark(ie);function ie(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Y(),L(),G(),K(),oe()]);case 2:case"end":return e.stop()}},le,this)}var se,ue=a(18),me=a(25),de=a(297),pe=Object(de.a)((se={},Object(ue.a)(se,w,function(e,t){var a=t.payload;return Object(me.a)({},e,{contractsData:a})}),Object(ue.a)(se,D,function(e,t){return Object(me.a)({},e,{contractsDataNewEntry:t})}),Object(ue.a)(se,N,function(e,t){return Object(me.a)({},e,{contractsDataToDeleteId:t})}),Object(ue.a)(se,A,function(e,t){return Object(me.a)({},e,{contractsDataToUpdate:t})}),se),{contractsData:{},contractsDataNewEntry:{},contractsDataToDeleteId:"",contractsDataToUpdate:{}}),be=pe,he=Object(de.a)(Object(ue.a)({},ae,function(e,t){var a=t.payload;return Object(me.a)({},e,{coinApiData:a.data})}),{coinApiData:{}}),fe=he,Ee=Object(b.c)({contractsReducer:be,coinApiReducer:fe}),ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,Oe=Object(h.a)(),_e=ge(Object(b.a)(Oe)),Ce=Object(b.e)(Ee,{},_e);Oe.run(ie);var Te=Ce,ve=a(20),je=a(4),ye=a(106),ke=a(108),Se=a.n(ke),we=(a(291),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:Se.a,className:"header-logo",alt:"logo"}),c.a.createElement("p",null,"Welcome to React CRUD App"))}),xe=a(34),De=a(35),Ie=function(e){var t=e.contract,a=e.toggle,n=e.modalIsOpen,r=e.modalBackdrop,o=e.buttonHandler;return t&&Object.keys(t).length?c.a.createElement(c.a.Fragment,null,c.a.createElement(je.a,{color:"white",onClick:a,className:"p-0 button_as-icon",tag:"a",title:"View contract details"},c.a.createElement(xe.a,{icon:De.a,size:"lg"})),c.a.createElement(je.h,{isOpen:n,toggle:a,backdrop:r},c.a.createElement(je.k,{toggle:a},"Details about contract ",c.a.createElement("span",{className:"text-info"},"#",t.id)),c.a.createElement(je.i,null,c.a.createElement(je.l,null,c.a.createElement(je.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"User name:"),c.a.createElement(je.b,{md:7,className:"text-left"},t.user.name," ",t.user.surname)),c.a.createElement(je.l,null,c.a.createElement(je.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Amount in USD:"),c.a.createElement(je.b,{md:7,className:"text-left"},t.amountInUsd)),c.a.createElement(je.l,null,c.a.createElement(je.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Currency:"),c.a.createElement(je.b,{md:7,className:"text-left"},t.currency)),c.a.createElement(je.l,null,c.a.createElement(je.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Date:"),c.a.createElement(je.b,{md:7,className:"text-left"},t.date))),c.a.createElement(je.j,null,c.a.createElement(je.a,{color:"info",onClick:o},"Got it")))):null},Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,backdrop:!0},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(Ie,{contract:this.props.contract,toggle:this.toggle,modalIsOpen:this.state.modal,modalBackdrop:this.state.backdrop,buttonHandler:this.toggle})}}]),t}(r.Component),Ue=function(e){var t=e.data,a=e.modalIsOpen,n=e.toggle,r=e.modalBackdrop,o=e.cancelHandler,l=e.submitHandler,i=e.inputChangeHandler,s=e.disableSubmit,u=function(e,t,a,n,r){return c.a.createElement(je.l,{className:"mb-4"},c.a.createElement(je.b,null,c.a.createElement(je.e,null,c.a.createElement(je.g,{for:a},e),c.a.createElement(je.f,{type:t,name:a,id:a,placeholder:n,defaultValue:r,onChange:i}))))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(je.a,{color:"white",onClick:n,className:"p-0 button_as-icon",tag:"a",title:"Edit contract"},c.a.createElement(xe.a,{icon:De.b,size:"lg"})),c.a.createElement(je.h,{isOpen:a,toggle:n,backdrop:r,size:"lg"},c.a.createElement(je.k,{toggle:n},"Edit data ",c.a.createElement("span",{className:"text-info"},"#",t.id)),c.a.createElement(je.d,{className:"mb-4",onSubmit:l},c.a.createElement(je.i,null,c.a.createElement(je.l,{form:!0},c.a.createElement(je.b,null,u("User name","text","name","Name",t.name),u("User Surname","text","surname","Surname",t.surname),u("Amount in USD","number","amountInUsd","0",t.amountInUsd),u("Currency","text","currency","ETH",t.currency),u("Date","date","date","2018-04-23",t.date)))),c.a.createElement(je.j,null,c.a.createElement(je.a,{color:"secondary",onClick:o},"Cancel"),c.a.createElement(je.a,{color:"info",onClick:l,disabled:s},"Save")))))},Ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",surname:"",amountInUsd:"",currency:"",date:"",modalIsOpen:!1,modalBackdrop:!0},a.toggleModalWindow=function(){a.setState({modalIsOpen:!a.state.modalIsOpen})},a.inputChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(ue.a)({},n,r))},a.cancelEditContractHandler=function(e){e.preventDefault();var t=a.props.contract,n=t.id,r=t.user,c=r.name,o=r.surname,l=t.amountInUsd,i=t.currency,s=t.date;a.setState({id:n,name:c,surname:o,amountInUsd:l,currency:i,date:s}),a.toggleModalWindow()},a.editContractHandler=function(e){e.preventDefault();var t=a.state,n=t.id,r=t.name,c=t.surname,o=t.amountInUsd,l=t.currency,i=t.date;a.props.setContractsUpdateEntry({id:n,name:r,surname:c,amountInUsd:o,currency:l,date:i}),a.toggleModalWindow()},a.ifDisabledSubmit=function(){return!a.state.name.length||!a.state.surname.length||!a.state.amountInUsd.length||!a.state.currency.length||!a.state.date.length},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.contract,t=e.id,a=e.user,n=a.name,r=a.surname,c=e.amountInUsd,o=e.currency,l=e.date;this.setState({id:t,name:n,surname:r,amountInUsd:c,currency:o,date:l})}},{key:"render",value:function(){var e=this.state,t={id:e.id,name:e.name,surname:e.surname,amountInUsd:e.amountInUsd,currency:e.currency,date:e.date};return c.a.createElement(Ue,{data:t,modalIsOpen:this.state.modalIsOpen,toggle:this.toggleModalWindow,modalBackdrop:this.state.modalBackdrop,cancelHandler:this.cancelEditContractHandler,submitHandler:this.editContractHandler,inputChangeHandler:this.inputChangeHandler,disableSubmit:this.ifDisabledSubmit()})}}]),t}(r.Component),He=Object(ve.b)(null,{setContractsUpdateEntry:U})(Ae),Be=function(e){var t=e.itemId,a=e.toggle,n=e.modalIsOpen,r=e.modalBackdrop,o=e.deleteHandler;return c.a.createElement(c.a.Fragment,null,c.a.createElement(je.a,{color:"white",onClick:a,className:"p-0 button_as-icon",tag:"a",title:"Delete contract"},c.a.createElement(xe.a,{icon:De.c,size:"lg"})),c.a.createElement(je.h,{centered:!0,size:"sm",toggle:a,isOpen:n,backdrop:r},c.a.createElement(je.k,{toggle:a,className:"text-danger"},"Delete contract ",c.a.createElement("span",{className:"font-weight-bold"},"#",t)),c.a.createElement(je.i,null,"Are You sure that you want to delete contract ",c.a.createElement("span",{className:"font-weight-bold"},"#",t),"?"),c.a.createElement(je.j,null,c.a.createElement(je.a,{color:"secondary",onClick:a,outline:!0},"Cancel"),c.a.createElement(je.a,{color:"danger",onClick:o},"Delete"))))},Re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={modalIsOpen:!1,modalBackdrop:!0},a.toggleModalWindow=function(){a.setState({modalIsOpen:!a.state.modalIsOpen})},a.deleteHandler=function(){a.props.setContractsDeleteEntry(a.props.itemId),a.toggleModalWindow()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(Be,{itemId:this.props.itemId,toggle:this.toggleModalWindow,modalIsOpen:this.state.modalIsOpen,modalBackdrop:this.state.modalBackdrop,deleteHandler:this.deleteHandler})}}]),t}(r.Component),Me=Object(ve.b)(null,{setContractsDeleteEntry:I})(Re),ze=(a(293),function(e){var t=e.contracts,a=e.deleteHandler;return c.a.createElement(c.a.Fragment,null,c.a.createElement(je.l,null,c.a.createElement(je.b,null,c.a.createElement("h1",{className:"contracts-table__header text-center my-2"},"Contracts list"))),c.a.createElement(je.l,null,c.a.createElement(je.b,null,c.a.createElement(je.m,{dark:!0,striped:!0,borderless:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("td",null,"User name"),c.a.createElement("td",null,"Amount in USD"),c.a.createElement("td",null,"Currency"),c.a.createElement("td",null,"Date"))),c.a.createElement("tbody",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];return Object.keys(e).length&&Object.keys(e).map(function(a,n){return t.push(c.a.createElement("tr",{key:"".concat(n,"_").concat(e[a].user.name,"_").concat(e[a].user.surname)},c.a.createElement("th",{scope:"row"},e[a].id),c.a.createElement("td",null,e[a].user.name," ",e[a].user.surname),c.a.createElement("td",null,e[a].amountInUsd),c.a.createElement("td",null,e[a].currency),c.a.createElement("td",null,e[a].date),c.a.createElement("td",null,c.a.createElement(Ne,{contract:e[a]})),c.a.createElement("td",null,c.a.createElement(He,{contract:e[a]})),c.a.createElement("td",null,c.a.createElement(Me,{itemId:e[a].id}))))}),t}(t,a))))))}),Pe=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setContractsRequest()}},{key:"render",value:function(){return c.a.createElement(ze,{contracts:this.props.contractsData})}}]),t}(r.Component),Fe=Object(ve.b)(function(e){return{contractsData:function(e){return function(e){return e.contractsReducer.contractsData}(e)}(e)}},{setContractsRequest:S})(Pe),We=function(e){var t=e.submitHandler,a=e.inputChangeHandler,n=e.disableSubmit,r=function(e,t,n,r){return c.a.createElement(je.b,{md:2},c.a.createElement(je.e,null,c.a.createElement(je.g,{for:n},e),c.a.createElement(je.f,{type:t,name:n,id:n,placeholder:r,onChange:a})))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(je.l,null,c.a.createElement(je.b,null,c.a.createElement("h1",{className:"contracts-table__header text-center my-2"},"Add new Contract"))),c.a.createElement(je.d,{className:"mb-4",onSubmit:t},c.a.createElement(je.l,{form:!0},c.a.createElement(je.b,null,c.a.createElement(je.l,null,r("User name","text","name","Name"),r("User Surname","text","surname","Surname"),r("Amount in USD","number","amountInUsd","0"),r("Currency","text","currency","ETH"),r("Date","date","date","2018-04-23"),c.a.createElement(je.b,{md:2,className:"d-flex align-items-end"},c.a.createElement(je.a,{color:"info",className:"w-100 mb-3",type:"submit",disabled:n},"Add contract")))))))},Ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",surname:"",amountInUsd:"",currency:"",date:""},a.inputChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(ue.a)({},n,r))},a.addNewContractHandler=function(e){e.preventDefault();var t=Math.round(1e3*Math.random());a.props.setContractsNewEntry(Object(me.a)({},a.state,{id:t}))},a.ifDisabledSubmit=function(){return!a.state.name.length||!a.state.surname.length||!a.state.amountInUsd.length||!a.state.currency.length||!a.state.date.length},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(We,{submitHandler:this.addNewContractHandler,inputChangeHandler:this.inputChangeHandler,disableSubmit:this.ifDisabledSubmit()})}}]),t}(r.Component),Je=Object(ve.b)(null,{setContractsNewEntry:x})(Ze),Ye=function(e){var t=e.chartData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(we,null),c.a.createElement("main",{className:"mt-4"},c.a.createElement(je.c,null,c.a.createElement(je.l,{className:"mb-4"},c.a.createElement(je.b,null,c.a.createElement(ye.a,{data:t}))),c.a.createElement(Je,null),c.a.createElement(Fe,null))))},Qe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getChartData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=e.sort(function(e,t){return e.time_coinapi<t.time_coinapi?-1:e.time_coinapi>t.time_coinapi?1:0}),n=a.map(function(e){return t[new Date(e.time_coinapi).getMonth()]}),r=a.map(function(e){return e.bid_price});return{labels:n,datasets:[{label:e.asset_id_base?"The rates for ".concat(e.asset_id_base," currency"):"The rates chart",fill:!1,lineTension:.1,backgroundColor:"rgba(97, 218, 251,0.4)",borderColor:"rgba(97, 218, 251,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(97, 218, 251,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(97, 218, 251,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r}]}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setCoinApiRequest()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Ye,{chartData:this.getChartData([{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-03-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:345,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-04-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:123,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-04-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:987,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-06-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:760,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-05-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:349,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-07-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:333,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-03-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:444,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-03-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:567,bid_size:124}])}))}}]),t}(r.Component),Le=Object(ve.b)(function(e){return{coinApiData:function(e){return function(e){return e.coinApiReducer.coinApiData}(e)}(e)}},{setCoinApiRequest:te})(Qe),qe=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(ve.a,{store:Te},c.a.createElement(Le,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(i.a,{basename:"/crud-app"},c.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.6491731d.chunk.js.map