(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,a){e.exports=a(295)},118:function(e,t,a){},291:function(e,t,a){},293:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"doCreateContract",function(){return C}),a.d(n,"onceGetContract",function(){return v}),a.d(n,"doDeleteContract",function(){return y}),a.d(n,"doUpdateContract",function(){return j});var r=a(1),c=a.n(r),o=a(31),l=a.n(o),i=a(298),s=(a(116),a(118),a(15)),u=a(16),m=a(18),d=a(17),p=a(19),b=a(30),E=a(110),h=a(9),f=a.n(h),_=a(7),g=a(57),O=a.n(g);a(127);O.a.apps.length||O.a.initializeApp({apiKey:"AIzaSyCN1JBRTOM5bw8QMLpF5wZF00IdwQwrKoA",authDomain:"polaris327-crud-application.firebaseapp.com",databaseURL:"https://polaris327-crud-application.firebaseio.com",projectId:"polaris327-crud-application",storageBucket:"polaris327-crud-application.appspot.com",messagingSenderId:"715090132651"});var T=O.a.database(),C=function(e){var t=e.id,a=e.name,n=e.surname,r=e.amountInUsd,c=e.currency,o=e.date;return T.ref("contracts/".concat(t)).set({id:t,user:{name:a,surname:n},amountInUsd:r,currency:c,date:o})},v=function(){return T.ref("contracts").once("value")},y=function(e){return T.ref("contracts/".concat(e)).remove()},j=function(e){var t=e.id,a=e.name,n=e.surname,r=e.amountInUsd,c=e.currency,o=e.date;return T.ref("contracts/".concat(t)).update({id:t,user:{name:a,surname:n},amountInUsd:r,currency:c,date:o})},S=a(299),k=Object(S.a)("SET_CONTRACTS_REQUEST"),x=Object(S.a)("FETCH_CONTRACTS_REQUEST"),w=Object(S.a)("SET_CONTRACTS_NEW_ENTRY"),D=Object(S.a)("FETCH_CONTRACTS_NEW_ENTRY"),U=Object(S.a)("SET_CONTRACTS_DELETE_ENTRY"),N=Object(S.a)("FETCH_CONTRACTS_DELETE_ENTRY"),I=Object(S.a)("SET_CONTRACTS_UPDATE_ENTRY"),A=Object(S.a)("FETCH_CONTRACTS_UPDATE_ENTRY"),H=function(){return n.onceGetContract().then(function(e){return e.val()})},B=f.a.mark(J),R=f.a.mark(Y),M=f.a.mark(Q),P=f.a.mark(L),z=f.a.mark(q),F=f.a.mark(G),W=f.a.mark(V),Z=f.a.mark(K);function J(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(function(){return H()});case 3:return e=t.sent,t.next=6,Object(_.c)(x(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},B,this,[[0,8]])}function Y(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(k,J);case 2:case"end":return e.stop()}},R,this)}function Q(){var e,t,a,r=arguments;return f.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},c.prev=1,c.next=4,Object(_.b)(function(){return n.doCreateContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(_.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(_.c)(D(t));case 10:return c.next=12,Object(_.c)(x(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},M,this,[[1,14]])}function L(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(w,Q);case 2:case"end":return e.stop()}},P,this)}function q(){var e,t,a,r=arguments;return f.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",c.prev=1,c.next=4,Object(_.b)(function(){return n.doDeleteContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(_.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(_.c)(N(t));case 10:return c.next=12,Object(_.c)(x(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},z,this,[[1,14]])}function G(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(U,q);case 2:case"end":return e.stop()}},F,this)}function V(){var e,t,a,r=arguments;return f.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},c.prev=1,c.next=4,Object(_.b)(function(){return n.doUpdateContract(e.payload)});case 4:return t=c.sent,c.next=7,Object(_.b)(function(){return H()});case 7:return a=c.sent,c.next=10,Object(_.c)(A(t));case 10:return c.next=12,Object(_.c)(x(a));case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),console.error(c.t0);case 17:case"end":return c.stop()}},W,this,[[1,14]])}function K(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(I,V);case 2:case"end":return e.stop()}},Z,this)}var X=a(103),$=a.n(X);var ee="https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?apikey=".concat("8E38EABE-532A-4269-AA76-120EB4BDBCD6","&period_id=1MIN&time_start=2018-01-01T00:00:00"),te=Object(S.a)("SET_COIN_API_REQUEST"),ae=Object(S.a)("FETCH_COIN_API_REQUEST"),ne=f.a.mark(ce),re=f.a.mark(oe);function ce(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(function(){return $.a.get(ee)});case 3:return e=t.sent,t.next=6,Object(_.c)(ae(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},ne,this,[[0,8]])}function oe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(te,ce);case 2:case"end":return e.stop()}},re,this)}var le=f.a.mark(ie);function ie(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Y(),L(),G(),K(),oe()]);case 2:case"end":return e.stop()}},le,this)}var se,ue=a(13),me=a(25),de=a(297),pe=Object(de.a)((se={},Object(ue.a)(se,x,function(e,t){var a=t.payload;return Object(me.a)({},e,{contractsData:a})}),Object(ue.a)(se,D,function(e,t){return Object(me.a)({},e,{contractsDataNewEntry:t})}),Object(ue.a)(se,N,function(e,t){return Object(me.a)({},e,{contractsDataToDeleteId:t})}),Object(ue.a)(se,A,function(e,t){return Object(me.a)({},e,{contractsDataToUpdate:t})}),se),{contractsData:{},contractsDataNewEntry:{},contractsDataToDeleteId:"",contractsDataToUpdate:{}}),be=pe,Ee=Object(de.a)(Object(ue.a)({},ae,function(e,t){var a=t.payload;return Object(me.a)({},e,{coinApiData:a.data})}),{coinApiData:{}}),he=Ee,fe=Object(b.c)({contractsReducer:be,coinApiReducer:he}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,ge=Object(E.a)(),Oe=_e(Object(b.a)(ge)),Te=Object(b.e)(fe,{},Oe);ge.run(ie);var Ce=Te,ve=a(21),ye=a(4),je=a(106),Se=a(108),ke=a.n(Se),xe=(a(291),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:ke.a,className:"header-logo",alt:"logo"}),c.a.createElement("p",null,"Welcome to React CRUD App"))}),we=a(34),De=a(35),Ue=function(e){var t=e.contract,a=e.toggle,n=e.modalIsOpen,r=e.modalBackdrop,o=e.buttonHandler;return t&&Object.keys(t).length?c.a.createElement(c.a.Fragment,null,c.a.createElement(ye.a,{color:"white",onClick:a,className:"p-0 button_as-icon",tag:"a",title:"View contract details"},c.a.createElement(we.a,{icon:De.a,size:"lg"})),c.a.createElement(ye.h,{isOpen:n,toggle:a,backdrop:r},c.a.createElement(ye.k,{toggle:a},"Details about contract ",c.a.createElement("span",{className:"text-info"},"#",t.id)),c.a.createElement(ye.i,null,c.a.createElement(ye.l,null,c.a.createElement(ye.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"User name:"),c.a.createElement(ye.b,{md:7,className:"text-left"},t.user.name," ",t.user.surname)),c.a.createElement(ye.l,null,c.a.createElement(ye.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Amount in USD:"),c.a.createElement(ye.b,{md:7,className:"text-left"},t.amountInUsd)),c.a.createElement(ye.l,null,c.a.createElement(ye.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Currency:"),c.a.createElement(ye.b,{md:7,className:"text-left"},t.currency)),c.a.createElement(ye.l,null,c.a.createElement(ye.b,{md:5,className:"text-uppercase font-weight-bold text-right"},"Date:"),c.a.createElement(ye.b,{md:7,className:"text-left"},t.date))),c.a.createElement(ye.j,null,c.a.createElement(ye.a,{color:"info",onClick:o},"Got it")))):null},Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,backdrop:!0},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(Ue,{contract:this.props.contract,toggle:this.toggle,modalIsOpen:this.state.modal,modalBackdrop:this.state.backdrop,buttonHandler:this.toggle})}}]),t}(r.Component),Ie=function(e){var t=e.data,a=e.modalIsOpen,n=e.toggle,r=e.modalBackdrop,o=e.cancelHandler,l=e.submitHandler,i=e.inputChangeHandler,s=e.disableSubmit,u=function(e,t,a,n,r){return c.a.createElement(ye.l,{className:"mb-4"},c.a.createElement(ye.b,null,c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:a},e),c.a.createElement(ye.f,{type:t,name:a,id:a,placeholder:n,defaultValue:r,onChange:i}))))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(ye.a,{color:"white",onClick:n,className:"p-0 button_as-icon",tag:"a",title:"Edit contract"},c.a.createElement(we.a,{icon:De.b,size:"lg"})),c.a.createElement(ye.h,{isOpen:a,toggle:n,backdrop:r,size:"lg"},c.a.createElement(ye.k,{toggle:n},"Edit data ",c.a.createElement("span",{className:"text-info"},"#",t.id)),c.a.createElement(ye.d,{className:"mb-4",onSubmit:l},c.a.createElement(ye.i,null,c.a.createElement(ye.l,{form:!0},c.a.createElement(ye.b,null,u("User name","text","name","Name",t.name),u("User Surname","text","surname","Surname",t.surname),u("Amount in USD","number","amountInUsd","0",t.amountInUsd),u("Currency","text","currency","0",t.currency),u("Date","text","date","2018-04-23",t.date)))),c.a.createElement(ye.j,null,c.a.createElement(ye.a,{color:"secondary",onClick:o},"Cancel"),c.a.createElement(ye.a,{color:"info",onClick:l,disabled:s},"Save")))))},Ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",surname:"",amountInUsd:"",currency:"",date:"",modalIsOpen:!1,modalBackdrop:!0},a.toggleModalWindow=function(){a.setState({modalIsOpen:!a.state.modalIsOpen})},a.inputChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(ue.a)({},n,r))},a.cancelEditContractHandler=function(e){e.preventDefault();var t=a.props.contract,n=t.id,r=t.user,c=r.name,o=r.surname,l=t.amountInUsd,i=t.currency,s=t.date;a.setState({id:n,name:c,surname:o,amountInUsd:l,currency:i,date:s}),a.toggleModalWindow()},a.editContractHandler=function(e){e.preventDefault();var t=a.state,n=t.id,r=t.name,c=t.surname,o=t.amountInUsd,l=t.currency,i=t.date;a.props.setContractsUpdateEntry({id:n,name:r,surname:c,amountInUsd:o,currency:l,date:i})},a.ifDisabledSubmit=function(){return!a.state.name.length||!a.state.surname.length||!a.state.amountInUsd.length||!a.state.currency.length||!a.state.date.length},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.contract,t=e.id,a=e.user,n=a.name,r=a.surname,c=e.amountInUsd,o=e.currency,l=e.date;this.setState({id:t,name:n,surname:r,amountInUsd:c,currency:o,date:l})}},{key:"render",value:function(){var e=this.state,t={id:e.id,name:e.name,surname:e.surname,amountInUsd:e.amountInUsd,currency:e.currency,date:e.date};return c.a.createElement(Ie,{data:t,modalIsOpen:this.state.modalIsOpen,toggle:this.toggleModalWindow,modalBackdrop:this.modalBackdrop,cancelHandler:this.cancelEditContractHandler,submitHandler:this.editContractHandler,inputChangeHandler:this.inputChangeHandler,disableSubmit:this.ifDisabledSubmit()})}}]),t}(r.Component),He=Object(ve.b)(null,{setContractsUpdateEntry:I})(Ae),Be=(a(293),function(e){var t=e.contracts,a=e.deleteHandler;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ye.l,null,c.a.createElement(ye.b,null,c.a.createElement("h1",{className:"contracts-table__header text-center my-2"},"Contracts list"))),c.a.createElement(ye.l,null,c.a.createElement(ye.b,null,c.a.createElement(ye.m,{dark:!0,striped:!0,borderless:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("td",null,"User name"),c.a.createElement("td",null,"Amount in USD"),c.a.createElement("td",null,"Currency"),c.a.createElement("td",null,"Date"))),c.a.createElement("tbody",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=[];return Object.keys(e).length&&Object.keys(e).map(function(n,r){return a.push(c.a.createElement("tr",{key:"".concat(r,"_").concat(e[n].user.name,"_").concat(e[n].user.surname)},c.a.createElement("th",{scope:"row"},e[n].id),c.a.createElement("td",null,e[n].user.name," ",e[n].user.surname),c.a.createElement("td",null,e[n].amountInUsd),c.a.createElement("td",null,e[n].currency),c.a.createElement("td",null,e[n].date),c.a.createElement("td",null,c.a.createElement(Ne,{contract:e[n]})),c.a.createElement("td",null,c.a.createElement(He,{contract:e[n]})),c.a.createElement("td",null,c.a.createElement(ye.a,{color:"white",onClick:function(){return t(e[n].id)},className:"p-0 button_as-icon",tag:"a",title:"Delete contract"},c.a.createElement(we.a,{icon:De.c,size:"lg"})))))}),a}(t,a))))))}),Re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).deleteHandler=function(e){window.confirm("Are You sure that you want to delete contract #".concat(e,"?"))&&a.props.setContractsDeleteEntry(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setContractsRequest()}},{key:"render",value:function(){return c.a.createElement(Be,{contracts:this.props.contractsData,deleteHandler:this.deleteHandler})}}]),t}(r.Component),Me=Object(ve.b)(function(e){return{contractsData:function(e){return function(e){return e.contractsReducer.contractsData}(e)}(e)}},{setContractsRequest:k,setContractsDeleteEntry:U})(Re),Pe=function(e){var t=e.submitHandler,a=e.inputChangeHandler,n=e.disableSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ye.l,null,c.a.createElement(ye.b,null,c.a.createElement("h1",{className:"contracts-table__header text-center my-2"},"Add new Contract"))),c.a.createElement(ye.d,{className:"mb-4",onSubmit:t},c.a.createElement(ye.l,{form:!0},c.a.createElement(ye.b,null,c.a.createElement(ye.l,null,c.a.createElement(ye.b,{md:2},c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:"name"},"User name"),c.a.createElement(ye.f,{type:"text",name:"name",id:"name",placeholder:"Name",onChange:a}))),c.a.createElement(ye.b,{md:2},c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:"surname"},"User Surname"),c.a.createElement(ye.f,{type:"text",name:"surname",id:"surname",placeholder:"Surname",onChange:a}))),c.a.createElement(ye.b,{md:2},c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:"amountInUsd"},"Amount in USD"),c.a.createElement(ye.f,{type:"number",name:"amountInUsd",id:"amountInUsd",placeholder:"0",onChange:a}))),c.a.createElement(ye.b,{md:2},c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:"currency"},"Currency"),c.a.createElement(ye.f,{type:"text",name:"currency",id:"currency",placeholder:"ETH",onChange:a}))),c.a.createElement(ye.b,{md:2},c.a.createElement(ye.e,null,c.a.createElement(ye.g,{for:"date"},"Date"),c.a.createElement(ye.f,{type:"text",name:"date",id:"date",placeholder:"2018-04-23",onChange:a}))),c.a.createElement(ye.b,{md:2,className:"d-flex align-items-end"},c.a.createElement(ye.a,{color:"info",className:"w-100 mb-3",type:"submit",disabled:n},"Add contract")))))))},ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",surname:"",amountInUsd:"",currency:"",date:""},a.inputChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(ue.a)({},n,r))},a.addNewContractHandler=function(e){e.preventDefault();var t=Math.round(1e3*Math.random());a.props.setContractsNewEntry(Object(me.a)({},a.state,{id:t}))},a.ifDisabledSubmit=function(){return!a.state.name.length||!a.state.surname.length||!a.state.amountInUsd.length||!a.state.currency.length||!a.state.date.length},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(Pe,{submitHandler:this.addNewContractHandler,inputChangeHandler:this.inputChangeHandler,disableSubmit:this.ifDisabledSubmit()})}}]),t}(r.Component),Fe=Object(ve.b)(null,{setContractsNewEntry:w})(ze),We=function(e){var t=e.chartData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null),c.a.createElement("main",{className:"mt-4"},c.a.createElement(ye.c,null,c.a.createElement(ye.l,{className:"mb-4"},c.a.createElement(ye.b,null,c.a.createElement(je.a,{data:t}))),c.a.createElement(Fe,null),c.a.createElement(Me,null))))},Ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getChartData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=e.sort(function(e,t){return e.time_coinapi<t.time_coinapi?-1:e.time_coinapi>t.time_coinapi?1:0}),n=a.map(function(e){return t[new Date(e.time_coinapi).getMonth()]}),r=a.map(function(e){return e.bid_price});return{labels:n,datasets:[{label:e.asset_id_base?"The rates for ".concat(e.asset_id_base," currency"):"The rates chart",fill:!1,lineTension:.1,backgroundColor:"rgba(97, 218, 251,0.4)",borderColor:"rgba(97, 218, 251,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(97, 218, 251,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(97, 218, 251,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r}]}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setCoinApiRequest()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(We,{chartData:this.getChartData([{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-03-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:345,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-04-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:123,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-04-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:987,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-06-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:760,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-05-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:349,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-07-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:333,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000Z",time_coinapi:"2017-03-18T22:42:21.3763342Z",ask_price:770,ask_size:3252,bid_price:444,bid_size:124},{symbol_id:"BITSTAMP_SPOT_BTC_USD",time_exchange:"2013-09-28T22:40:50.0000000",time_coinapi:"2017-03-18T22:42:21.3763342",ask_price:770,ask_size:3252,bid_price:567,bid_size:124}])}))}}]),t}(r.Component),Je=Object(ve.b)(function(e){return{coinApiData:function(e){return function(e){return e.coinApiReducer.coinApiData}(e)}(e)}},{setCoinApiRequest:te})(Ze),Ye=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(ve.a,{store:Ce},c.a.createElement(Je,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(i.a,{basename:"/crud-app"},c.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.9d8c5238.chunk.js.map