(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/korinn.d5d36d20.ttf"},function(e,t,a){e.exports=a.p+"static/media/Swiss921-BT_43276.6433bfa5.ttf"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(14),a(6)),u=a(1),s=a(2),i=a(4),d=a(3),m=a(5);a(15),a(16);var p=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).gameLoadedHandler=function(e){e.target.files[0].text().then((function(e){var t=JSON.parse(e);!function(e){return void 0!==e.game||(console.log("Game key not found in JSON payload."),!1)}(t)?console.log("Invalid game."):a.props.updateGame(t)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"game-loader"},r.a.createElement("h1",null,"Jeopardy Player"),r.a.createElement("p",null,"Designed by Brian Yu"),r.a.createElement("input",{type:"file",name:"file",onChange:this.gameLoadedHandler}))}}]),t}(r.a.Component),y=(a(17),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).addPlayer=function(){a.props.addPlayer(a.state.input),a.setState({input:""})},a.handlePlayGame=function(e){a.props.playGame()},a.handleKeyPress=function(e){"Enter"===e.key&&a.addPlayer()},a.inputHandler=function(e){a.setState({input:e.target.value})},a.state={input:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-chooser"},r.a.createElement("div",null,r.a.createElement("h1",null,"Players"),r.a.createElement("ul",null,this.props.players.map((function(e,t){return r.a.createElement("li",{key:t},e.name)})))),r.a.createElement("div",null,r.a.createElement("input",{value:this.state.input,onKeyPress:this.handleKeyPress,onChange:this.inputHandler,autoFocus:!0,type:"text",placeholder:"Player Name"}),r.a.createElement("button",{className:"add-player-button",onClick:this.addPlayer},"Add Player")),r.a.createElement("div",null,r.a.createElement("button",{className:"play-game-button",onClick:this.handlePlayGame},"Play Game")))}}]),t}(r.a.Component)),h=(a(18),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).clueKeyPress=function(e){var t=a.props,n=t.board,r=t.currentCategory,l=t.currentClue;if(null!==r&&null!==l){var o=n[r].clues[l];" "===e.key||"Enter"===e.key?o.dailyDouble&&!a.state.dailyDoubleScreenPresented?a.setState({dailyDoubleScreenPresented:!0,solution:!1}):a.setState((function(e){return{solution:!e.solution}})):"Escape"===e.key&&(a.setState({solution:!1,dailyDoubleScreenPresented:!1}),a.props.backToBoard())}},a.state={solution:!1,dailyDoubleScreenPresented:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.clueKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.clueKeyPress)}},{key:"render",value:function(){var e=this,t=this.props,a=t.board,n=t.currentCategory,l=t.currentClue;return null!==n&&null!==l?this.renderClue(a[n].category,a[n].clues[l],a[n].clues[l].value):r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e,t){return r.a.createElement("td",{key:t,className:"category-title"},e.category)})))),r.a.createElement("tbody",null,a[0].clues.map((function(t,n){return r.a.createElement("tr",{key:n},a.map((function(t,a){return t.clues[n].chosen?r.a.createElement("td",{key:a,className:"board-clue"}):r.a.createElement("td",{key:a,onClick:function(){return e.props.chooseClue(a,n)},className:"board-clue"},"$",t.clues[n].value)})))})))))}},{key:"renderClue",value:function(e,t,a){var n=t.dailyDouble&&!this.state.dailyDoubleScreenPresented;return r.a.createElement("div",{className:"clue"},r.a.createElement("div",{className:"clue-category-label"},e," - $",t.value),r.a.createElement("div",{className:n?"clue-display daily-double":"clue-display"},r.a.createElement("br",null),n?"Daily Double":!0===t.html?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.solution?t.solution:t.clue}}):this.state.solution?t.solution:t.clue))}}]),t}(r.a.Component)),f=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).changeWager=function(e,t){a.setState((function(a){var n=a.wagers;return n[e]=t,{wagers:n}}))},a.updateScore=function(e,t,n){a.setState((function(t){var a=t.wagers;return a[e]="",{wagers:a}})),a.props.updateScore(e,t,n)},a.state={wagers:e.players.map((function(){return""}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.players;return r.a.createElement("div",{className:"scoreboard"},t.map((function(t,a){return e.renderPlayer(t,a)})))}},{key:"renderPlayer",value:function(e,t){var a=this,n=this.props,l=n.currentValue,o=n.wagering,c=e.score>=0?"$".concat(e.score):"-$".concat(-e.score),u=null===l?null:!1===o?l:parseInt(this.state.wagers[t])||0;return r.a.createElement("div",{key:t,className:"podium"},r.a.createElement("div",{className:"podium-score"},c),r.a.createElement("div",{className:"podium-name"},e.name),o&&r.a.createElement("div",null,r.a.createElement("input",{className:"wager-box",value:this.state.wagers[t],onChange:function(e){return a.changeWager(t,e.target.value)}})),null!==l&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return a.updateScore(t,-u,!1)},className:"incorrect-answer"},"-$",u),r.a.createElement("button",{onClick:function(){return a.updateScore(t,u,!0)},className:"correct-answer"},"+$",u)),this.props.stats&&r.a.createElement("div",{className:"stats"},r.a.createElement("hr",null),r.a.createElement("div",null,"Correct: ",e.correct),r.a.createElement("div",null,"Incorrect: ",e.incorrect)))}}]),t}(r.a.Component)),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).clueKeyPress=function(e){var t=a.state,n=t.category,r=t.solution;" "===e.key||"Enter"===e.key?n?a.setState({category:!1,solution:!1}):a.setState((function(e){return{solution:!e.solution}})):"Escape"===e.key&&!n&&r&&a.props.finishGame()},a.state={category:!0,solution:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.clueKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.clueKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.category,a=e.solution,n=this.props.final;return t?r.a.createElement("div",{className:"clue"},r.a.createElement("div",{className:"clue-display final-category"},n.category)):r.a.createElement("div",{className:"clue"},r.a.createElement("div",{className:"clue-display"},!0===n.html?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a?n.solution:n.clue}}):a?n.solution:n.clue))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).addPlayer=function(e){a.setState((function(t){return{players:[].concat(Object(c.a)(t.players),[{name:e,score:0,correct:0,incorrect:0}])}}))},a.chooseClue=function(e,t){a.setState((function(a){var n=Object.assign({},a.game);return n[a.round][e].clues[t].chosen=!0,{game:n,currentCategory:e,currentClue:t}}))},a.backToBoard=function(){a.setState({currentCategory:null,currentClue:null})},a.downloadGame=function(){var e=document.createElement("a"),t=new Blob([JSON.stringify({game:a.state.game,players:a.state.players,round:a.state.round},null,4)],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="game.json",document.body.appendChild(e),e.click()},a.finishGame=function(){a.setState({round:"done"})},a.playGame=function(){a.setState({playing:!0})},a.proceedToDouble=function(){a.setState({round:"double"})},a.proceedToFinal=function(){a.setState({round:"final"})},a.updateGame=function(e){a.setState((function(t){return{game:e.game,players:void 0!==e.players?e.players:t.players,round:void 0!==e.round?e.round:t.round,playing:void 0!==e.players}}))},a.updateScore=function(e,t,n){a.setState((function(a){var r=Object(c.a)(a.players);return r[e].score+=t,n?r[e].correct++:r[e].incorrect++,{players:r}}))},a.state={game:null,players:[],playing:!1,round:"single",currentCategory:null,currentClue:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(null===this.state.game)return r.a.createElement("div",{className:"app"},r.a.createElement(p,{updateGame:this.updateGame}));if(!this.state.playing)return r.a.createElement("div",{className:"app"},r.a.createElement(y,{players:this.state.players,addPlayer:this.addPlayer,playGame:this.playGame}));if("single"===this.state.round||"double"===this.state.round){var e=this.state,t=e.currentCategory,a=e.currentClue,n=this.state.game[this.state.round],l="single"===this.state.round;l&&n.forEach((function(e){e.clues.forEach((function(e){void 0===e.chosen&&(l=!1)}))}));var o="double"===this.state.round;return o&&n.forEach((function(e){e.clues.forEach((function(e){void 0===e.chosen&&(o=!1)}))})),r.a.createElement("div",{className:"app"},null===t&&null===a&&l&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.proceedToDouble,className:"proceed-to"},"Proceed to Double Jeopardy")),null===t&&null===a&&o&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.proceedToFinal,className:"proceed-to"},"Proceed to Final Jeopardy")),r.a.createElement(h,{board:n,backToBoard:this.backToBoard,chooseClue:this.chooseClue,currentCategory:t,currentClue:a}),r.a.createElement(f,{players:this.state.players,currentValue:null!==t&&null!==a?n[t].clues[a].value:null,updateScore:this.updateScore,wagering:null!==t&&null!==a&&!0===n[t].clues[a].dailyDouble,stats:!1}),r.a.createElement("button",{onClick:this.downloadGame,className:"download"},"Download Game"))}if("final"===this.state.round){var c=this.state.game.final;return r.a.createElement("div",null,r.a.createElement(v,{final:c,finishGame:this.finishGame}),r.a.createElement(f,{players:this.state.players,currentValue:0,updateScore:this.updateScore,wagering:!0,stats:!1}),r.a.createElement("button",{onClick:this.downloadGame,className:"download"},"Download Game"))}return"done"===this.state.round?r.a.createElement("div",null,r.a.createElement(f,{players:this.state.players,currentValue:null,updateScore:this.updateScore,wagering:!1,stats:!0}),r.a.createElement("button",{onClick:this.downloadGame,className:"download"},"Download Game")):void 0}}]),t}(r.a.Component);a(20),a(21);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.984fae9a.chunk.js.map