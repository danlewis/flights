(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,a){t.exports=a.p+"static/media/aircraftatlas.57ecb70f.png"},22:function(t,e,a){t.exports=a(53)},28:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var i=a(0),r=a.n(i),n=a(6),s=a.n(n),c=(a(28),a(1)),l=a(2),o=a(4),p=a(3),h=a(5),u=(a(9),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e="ground"===this.props.aircraft.flight.altitude?"Ground":null!==this.props.aircraft.flight.altitude?this.props.aircraft.flight.altitude+"ft":"",a=this.props.aircraft.userToAircraft.distance?(this.props.aircraft.userToAircraft.distance/1e3).toFixed(1)+"km "+this.props.aircraft.userToAircraft.direction:"",i="flight-item";return this.props.highlight===this.props.aircraft.flight.icao&&(i+=" highlight"),r.a.createElement("div",{className:i,onClick:function(){return t.props.aircraftMarkerClickHandler(t.props.aircraft.flight.icao)}},r.a.createElement("div",{className:"flight-details"},r.a.createElement("div",{className:"airline-icon"},r.a.createElement("img",{src:this.airlineLogo(),alt:"airline",style:{width:"38px",height:"38px"}})),r.a.createElement("div",{className:"flight-identity"},r.a.createElement("span",{className:"title"},this.props.aircraft.flight.flight||this.props.aircraft.flight.icao),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.aircraft.typeName)),r.a.createElement("div",{className:"proximity"},a)),null!=this.props.aircraft.origin.icao&&r.a.createElement("div",{className:"route"},r.a.createElement("div",{className:"location origin"},r.a.createElement("span",{className:"title"},this.props.aircraft.origin.airportName),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.origin.icao)),r.a.createElement("div",{className:"route-progress"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"25%"}}))),r.a.createElement("div",{className:"location destination"},r.a.createElement("span",{className:"title"},this.props.aircraft.destination.airportName),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.destination.icao))),r.a.createElement("div",{className:"metrics"},r.a.createElement("div",null,r.a.createElement("span",{className:"title"},"Altitude"),r.a.createElement("span",{className:"subtitle"},e)),r.a.createElement("div",null,r.a.createElement("span",{className:"title"},"Speed"),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.flight.groundSpeed?this.props.aircraft.flight.groundSpeed+"kts":"")),r.a.createElement("div",null,r.a.createElement("span",{className:"title"},"Vert Rate"),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.flight.verticalRate?this.props.aircraft.flight.verticalRate+"ft/min":"")),r.a.createElement("div",null,r.a.createElement("span",{className:"title"},"Course"),r.a.createElement("span",{className:"subtitle"},this.props.aircraft.flight.track," \xb0"))))}},{key:"airlineLogo",value:function(){switch(this.props.aircraft.airline.shortName){case"Qantas":return"/flights/airlines/qantas.jpg";case"Jetstar":return"/flights/airlines/jetstar.jpg";case"Virgin Australia":return"/flights/airlines/virgin.jpg";case"Tigerair Australia":return"/flights/favicon.ico";case"Emirates":return"/flights/airlines/emirates.jpg";case"Singapore Airlines":return"/flights/airlines/singapore.jpg";case"Scoot":return"/flights/airlines/scoot.jpg";default:return"/flights/favicon.ico"}}}]),e}(i.Component)),f=a(18),d=a.n(f),g=a(19),m=a.n(g),v={B77W:"a1",B738:"a1",A320:"a1",A321:"a1",A319:"a1",B737:"a1",E175:"a1",A20N:"a1",B739:"a1",A333:"a1",DH8D:"a1",A388:"a9",C172:"a19"},x={a1:"-8px -7px",a1Active:"-83px -7px",a2:"-8px -7px",a2Active:"-8px -7px",a3:"-8px -7px",a3Active:"-8px -7px",a4:"-8px -7px",a4Active:"-8px -7px",a5:"-8px -7px",a5Active:"-8px -7px",a6:"-8px -7px",a6Active:"-8px -7px",a7:"-8px -7px",a7Active:"-8px -7px",a8:"-8px -7px",a8Active:"-8px -7px",a9:"-8px -7px",a9Active:"-8px -7px",a10:"-8px -7px",a10Active:"-8px -7px",a11:"-8px -7px",a11Active:"-8px -7px",a12:"-8px -7px",a12Active:"-8px -7px",a13:"-8px -7px",a13Active:"-8px -7px",a14:"-8px -7px",a14Active:"-8px -7px",a15:"3px -290px",a15Active:"-8px -7px",a16:"-110px -287px",a16Active:"-8px -7px",a17:"-8px -7px",a17Active:"-8px -7px",a18:"-8px -7px",a18Active:"-8px -7px",a19:"-429px -284px",a19Active:"-476px -284px",a20:"-8px -7px",a20Active:"-8px -7px",a21:"-8px -7px",a21Active:"-8px -7px",a22:"-8px -7px",a22Active:"-8px -7px",a23:"-8px -7px",a23Active:["-8px -7px"]},k=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.aircraft.flight.track||0,a=this.props.aircraft.flight.flight||this.props.aircraft.flight.icao,i="marker-aircraft";return this.props.highlight===this.props.aircraft.flight.icao&&(i+=" marker-active"),r.a.createElement("div",{className:i,onClick:function(){return t.props.aircraftMarkerClickHandler(t.props.aircraft.flight.icao)},style:{position:"absolute",width:40,height:40,left:-20,top:-20}},r.a.createElement("div",{style:{width:"100%",height:"100%",transform:"rotate("+e+"deg)",position:"relative"}},r.a.createElement("span",{style:{display:"block",backgroundImage:"url("+m.a+")",backgroundSize:"512px",backgroundRepeat:"no-repeat",backgroundPosition:this.aircraftAtlasMapping(),position:"absolute",left:0,top:0,width:"100%",height:"100%",cursor:"pointer"}})),r.a.createElement("div",{style:{position:"absolute",bottom:"-22px",background:"#000000",padding:"3px 6px",borderRadius:"3px",color:"#FFFFFF",fontSize:"0.65rem"}},a))}},{key:"aircraftAtlasMapping",value:function(){var t=this.props.highlight===this.props.aircraft.flight.icao,e=this.props.aircraft.aircraft.type||"";return x[(v[e]||"a1")+(t?"Active":"")]}}]),e}(i.Component),b=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"absolute",width:"26px",height:"26px",left:"-13px",top:"-13px",backgroundColor:"#5087ec",background:"rgba(80, 135, 236, 0.3)",borderRadius:"50%"}},r.a.createElement("div",{style:{display:"block",backgroundColor:"#5087ec",width:"10px",height:"10px",borderRadius:"50%",border:"2px solid #FFFFFF",position:"relative",left:"6px",top:"6px"}}))}}]),e}(i.Component),A=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(p.a)(e).call(this,t))).state={mapLoaded:!1},a.allFlightLines=[],a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(d.a,{bootstrapURLKeys:{key:"AIzaSyAhLbyKUFicvcZaf3jKYIjpAnTZwiVHL5o"},center:this.props.centerLocation,zoom:11,onGoogleApiLoaded:function(e){var a=e.map,i=e.maps;t.setState({map:a,maps:i,mapLoaded:!0});var r=new i.ImageMapType({getTileUrl:function(t,e){return["https://tile.openweathermap.org/map/precipitation_new/",e,"/",t.x,"/",t.y,".png?appid=79fa7586a49c6c97ac2c7dfcd274edef"].join("")},tileSize:new i.Size(256,256),isPng:!0});a.overlayMapTypes.push(r)},yesIWantToUseGoogleMapApiInternals:!0},null!=this.props.centerLocation&&r.a.createElement(b,{key:"user-location",lat:this.props.centerLocation[0],lng:this.props.centerLocation[1]}),this.state.mapLoaded&&this.loadAllFlightPaths(),this.aircraftMarkers())}},{key:"aircraftMarkers",value:function(){var t=this,e=[];return void 0!==this.props.planes&&(e=this.props.planes.filter(function(t){return t.flight.coordinates}).map(function(e){return r.a.createElement(k,{highlight:t.props.highlight,aircraftMarkerClickHandler:t.props.aircraftMarkerClickHandler,aircraft:e,key:e.flight.icao,lat:e.flight.lat,lng:e.flight.lon})})),e}},{key:"loadAllFlightPaths",value:function(){this.allFlightLines.length>0&&this.allFlightLines.forEach(function(t){t.setMap(null)});var t=this,e=[];if(null!=this.props.highlight){var a=this.props.planes.find(function(e){return e.flight.icao===t.props.highlight});e.push(a)}else e=this.props.planes;e.forEach(function(e){if(e.waypoints.length>1){var a=new t.state.maps.Polyline({geodesic:!0,strokeColor:"#5087ec",strokeOpacity:1,strokeWeight:2,path:e.waypoints});a.setMap(t.state.map),t.allFlightLines.push(a)}})}}]),e}(i.Component),y=a(7),E=a.n(y),w=a(20),j=a(21),O=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert"},this.props.alert.message)}}]),e}(i.Component),N=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(p.a)(e).call(this,t))).state={alerts:[]},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.addProximityAlerts(t.planes),this.addSquawkAlerts(t.planes),this.removeExpiredAlerts()}},{key:"render",value:function(){var t=this.state.alerts.map(function(t){return r.a.createElement(O,{key:t.key,alert:t})});return r.a.createElement("div",{className:"alert-pane"},t)}},{key:"removeExpiredAlerts",value:function(){var t=new Date,e=this.state.alerts.filter(function(e){return t<e.expiresAt});e.length!==this.state.alerts.length&&this.setState({alerts:e})}},{key:"addProximityAlerts",value:function(t){var e=this;t.forEach(function(t){if(null!==t.userToAircraft.distance&&t.userToAircraft.distance<500){var a="proximity-"+t.flight.icao;if(e.newAlert(a)){var i=null!==t.flight.flight?t.flight.flight:t.flight.icao,r="Flight ".concat(i," is ").concat(t.flight.altitude," feet above");e.addAlert(a,r)}}})}},{key:"addSquawkAlerts",value:function(t){var e=this;t.forEach(function(t){if("7700"===t.flight.squawk){var a="squawk-"+t.flight.icao;if(e.newAlert(a)){var i="Flight ".concat(t.flight.flight," has declared an emergency with squawk 77 hundred");e.addAlert(a,i,300)}}})}},{key:"addAlert",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=new Date(Date.now()+1e3*a);this.setState({alerts:[].concat(Object(j.a)(this.state.alerts),[{key:t,message:e,expiresAt:r}])}),i&&this.speakMessage(e)}},{key:"speakMessage",value:function(){var t=Object(w.a)(E.a.mark(function t(e){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=new SpeechSynthesisUtterance(e),speechSynthesis.speak(a);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},{key:"newAlert",value:function(t){return void 0===this.state.alerts.find(function(e){return e.key===t})}}]),e}(i.Component),C=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(p.a)(e).call(this,t))).state={stationName:"",weather:{},warnings:[],updatedAt:null},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){var e=new Date(Date.now()-6e5);(null===this.state.updatedAt||this.state.updatedAt<e)&&this.loadWeather()}},{key:"render",value:function(){return r.a.createElement("div",{className:"weather-pane"},r.a.createElement("div",null,this.state.stationName),r.a.createElement("div",null,this.state.weather.windSpeed," km/hr ",this.state.weather.windDir))}},{key:"loadWeather",value:function(){var t=this;fetch("https://2vlomosbqb.execute-api.ap-southeast-2.amazonaws.com/v1/airportWeather?station_id=YSSY",{cache:"no-store"}).then(function(t){return t.json()}).then(function(e){t.setState({stationName:e.station,weather:e.weather,warnings:e.warnings,updatedAt:new Date})}).catch(function(t){console.log("Fetch Weather Request Failed "+t)})}}]),e}(i.Component),F=a(52),S=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(p.a)(e).call(this,t))).state={planes:[],currentLocation:[-33.733534,151.100924],highlightAircraft:null},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.setState({centerLocation:[t.coords.latitude,t.coords.longitude]})}),this.interval=setInterval(function(){return t.loadAircraft()},1e3)}},{key:"loadAircraft",value:function(){var t=this;fetch("http://127.0.0.1:8080/data/aircraft_parsed.json",{cache:"no-store"}).then(function(t){return t.json()}).then(function(e){var a=e.aircraft;a.forEach(function(e){var a=null,i=null;e.flight.coordinates&&(a=F.getDistance({latitude:t.state.currentLocation[0],longitude:t.state.currentLocation[1]},{latitude:e.flight.lat,longitude:e.flight.lon}),i=F.getCompassDirection({latitude:t.state.currentLocation[0],longitude:t.state.currentLocation[1]},{latitude:e.flight.lat,longitude:e.flight.lon}).exact),e.userToAircraft={distance:a,direction:i}}),null!==t.state.highlightAircraft&&void 0===a.find(function(e){return e.flight.icao===t.state.highlightAircraft})?t.setState({planes:a,highlightAircraft:null}):t.setState({planes:a})}).catch(function(t){console.log("Fetch Request Failed "+t)})}},{key:"aircraftMarkerClickHandler",value:function(t){var e=t===this.state.highlightAircraft?null:t;this.setState({highlightAircraft:e})}},{key:"render",value:function(){var t=this,e=this.state.planes.sort(function(t,e){return t.userToAircraft.distance?t.userToAircraft.distance-e.userToAircraft.distance:1}).map(function(e){return r.a.createElement(u,{aircraftMarkerClickHandler:t.aircraftMarkerClickHandler.bind(t),aircraft:e,key:e.flight.icao,highlight:t.state.highlightAircraft})});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"map-container"},r.a.createElement(A,{centerLocation:this.state.currentLocation,planes:this.state.planes,aircraftMarkerClickHandler:this.aircraftMarkerClickHandler.bind(this),highlight:t.state.highlightAircraft}),r.a.createElement(C,null)),r.a.createElement("div",{className:"info-pane"},r.a.createElement(N,{planes:this.state.planes}),r.a.createElement("div",{className:"flight-listings"},e)))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.6ff2469b.chunk.js.map