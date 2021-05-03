(this.webpackJsonpcss_modules=this.webpackJsonpcss_modules||[]).push([[0],{15:function(e,t,s){},2:function(e,t,s){e.exports={pageTitle:"stylesheet_pageTitle__3VdnY",topContainer:"stylesheet_topContainer__32q--",labelContainer:"stylesheet_labelContainer__I-C8X","break-label":"stylesheet_break-label__2mmsd","session-label":"stylesheet_session-label__1YNU8",iconBdown:"stylesheet_iconBdown__2SrG-",iconSdown:"stylesheet_iconSdown__2-fki",iconBup:"stylesheet_iconBup__3kPGN",iconSup:"stylesheet_iconSup__3FhHN",breakLength:"stylesheet_breakLength__1ArmB",sessionLength:"stylesheet_sessionLength__79NbV",timeLeft:"stylesheet_timeLeft__20A-4",start:"stylesheet_start__2mquY",reset:"stylesheet_reset__3nZu9"}},25:function(e,t,s){"use strict";s.r(t);var n=s(9),a=s(10),c=s(13),i=s(12),o=s(3),l=s.n(o),r=(s(15),s(11)),d=s.n(r),b=s(4),h=s(6),u=s(2),m=s.n(u),_=s(0),j=function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).audio=new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"),a.playAudio=function(){a.audio.play(),setTimeout((function(){return a.audio.pause()}),500)},a.break_decrement=function(){a.state.break_length>0&&a.setState({break_length:a.state.break_length-1})},a.break_increment=function(){a.state.break_length<60&&a.setState({break_length:a.state.break_length+1})},a.session_decrement=function(){a.state.session_length>0&&a.setState({session_length:a.state.session_length-1,minutes:a.state.session_length-1})},a.session_increment=function(){a.state.session_length<60&&a.setState({session_length:a.state.session_length+1,minutes:a.state.session_length+1})},a.next_cycle=function(){"session"===a.state.cycle?(a.setState({cycle:"break",minutes:a.state.break_length}),a.playAudio()):a.setState({cycle:"session",minutes:a.state.session_length})},a.start_timer=function(e){a.myInterval=setInterval((function(){var t=a.state,s=t.seconds,n=t.minutes;s>0&&a.setState((function(e){return{seconds:e.seconds-1}})),0===s&&(0===n?e():a.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),100)},a.stop_timer=function(){clearInterval(a.myInterval)},a.start_stop=function(){var e=!a.state.countdown;e?a.start_timer(a.next_cycle):a.stop_timer(),a.setState({countdown:e})},a.reset=function(){a.setState({break_length:5,session_length:25,minutes:25,seconds:0,cycle:"session",countdown:!1})},a.state={break_length:1,session_length:1,minutes:1,seconds:0,cycle:"session",countdown:!1},a}return Object(a.a)(s,[{key:"render",value:function(){var e=this.state,t=e.minutes,s=e.seconds,n=e.cycle;return Object(_.jsx)("div",{className:m.a.body,children:Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:m.a.pageTitle,id:"page-title",children:"Pomodoro Timer"}),Object(_.jsx)("div",{id:"timer-label",children:Object(_.jsx)("h2",{className:m.a.h2,id:"mainLabel",children:"break"===n?"Break Time":"Session in progress"})}),Object(_.jsx)("div",{className:m.a.topContainer,children:Object(_.jsx)("div",{className:m.a.timeLeft,id:"time-left",children:Object(_.jsxs)("h4",{className:m.a.timer,class:"timer",children:[t,":",s<10?"0".concat(s):s," "]})})}),Object(_.jsxs)("div",{className:m.a.midcontainer,children:[Object(_.jsxs)("button",{className:"".concat(m.a.button," ").concat(m.a.start),id:"start_stop",class:"start",onClick:this.start_stop,children:[" ",this.state.countdown?"Stop":"Start"]}),Object(_.jsxs)("button",{className:"".concat(m.a.button," ").concat(m.a.reset),class:"reset",id:"reset",onClick:this.onClick,children:["Reset"," "]}),Object(_.jsx)("audio",{src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",id:"beep",ref:this.audio,preload:"auto"})]}),Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("button",{className:"".concat(m.a.button," ").concat(m.a.breakDecrement),id:"break-decrement",onClick:this.break_decrement,children:Object(_.jsx)(b.a,{icon:h.a,id:"iconBdown",className:m.a.iconBDown})}),Object(_.jsx)("button",{className:"".concat(m.a.button," ").concat(m.a.breakIncrement),id:"break-increment",onClick:this.break_increment,children:Object(_.jsx)(b.a,{icon:h.b,id:"iconBup",className:m.a.iconBup})}),Object(_.jsx)("button",{className:"".concat(m.a.button," ").concat(m.a.sessionDecrement),id:"session-decrement",onClick:this.session_decrement,children:Object(_.jsx)(b.a,{icon:h.a,id:"iconSdown",className:m.a.iconSdown})}),Object(_.jsx)("button",{className:m.a.button,id:"session-increment",onClick:this.session_increment,children:Object(_.jsx)(b.a,{icon:h.b,id:"iconSup",className:m.a.iconSup})})]}),Object(_.jsxs)("div",{className:m.a.labelContainer,children:[Object(_.jsx)("div",{className:m.a.breakLength,id:"break-length",children:Object(_.jsxs)("div",{className:m.a.breakLabel,id:"break-label",children:[" ","Break Length: ",this.state.break_length," mins"]})}),Object(_.jsx)("div",{id:"session-length",className:m.a.sessionLength,children:Object(_.jsxs)("div",{className:m.a.sessionLabel,id:"session-label",children:["Session Length: ",this.state.session_length," mins"]})})]})]})})}}]),s}(l.a.Component);d.a.render(Object(_.jsx)(j,{}),document.getElementById("app"))}},[[25,1,2]]]);
//# sourceMappingURL=main.11d2fed7.chunk.js.map