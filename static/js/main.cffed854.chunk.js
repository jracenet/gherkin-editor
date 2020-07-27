(this["webpackJsonpgherkin-editor"]=this["webpackJsonpgherkin-editor"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(66),o=n.n(r),s=(n(74),n(2)),c=n(3),u=n(7),p=n(6),d=n(1),l=n(8),h=(n(75),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleUpdateFeatureName=n.updateFeatureName.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("h1",{class:"editable-title"},i.a.createElement("span",{class:"gherkin-keyword"},this.props.keyword,":"),i.a.createElement("input",{placeholder:"Empty name",defaultValue:this.props.title,onBlur:this.handleUpdateFeatureName}))}},{key:"updateFeatureName",value:function(e){this.props.updateFeatureName(e.target.value)}}]),t}(i.a.Component)),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(d.a)(n)),n.state={value:e.annotation.slice().trim()},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;""!==t.trim()?(this.setState({value:t}),this.props.onAnnotationChange(t)):this.setState({value:this.props.annotation.slice().trim()})}},{key:"render",value:function(){return i.a.createElement("select",{class:"gherkin-keyword",name:"annotation",value:this.state.value,onChange:this.handleChange},i.a.createElement("option",{value:"*"},"*"),i.a.createElement("option",{value:"Given"},"Given"),i.a.createElement("option",{value:"When"},"When"),i.a.createElement("option",{value:"And"},"And"),i.a.createElement("option",{value:"Then"},"Then"),i.a.createElement("option",{value:"But"},"But"))}}]),t}(i.a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).keyDown=n.keyDown.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",ref:function(t){e.input=t},defaultValue:this.props.text.trim(),name:"text",onBlur:function(t){return e.props.onTextChange(t.target.value)},onKeyDown:this.keyDown}))}},{key:"keyDown",value:function(e){"Enter"===e.key&&this.props.updateStepAndCreateOne(e.target.value)}}]),t}(i.a.Component),f=n(5),v=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"addStepAt",value:function(t,n){var a=Object.assign(t),i=e._newStepNode(),r=t.steps;return n===parseInt(n,10)?r.splice(n+1,0,i):r.push(i),a}},{key:"updateStep",value:function(e,t,n,a){var i=Object.assign(e);return t&&(i.keyword=t+" "),n&&(i.text=n),i}},{key:"_newStepNode",value:function(){return{id:f.IdGenerator.uuid()(),keyword:"* ",location:{line:null,column:null},text:"",argument:void 0}}}]),e}(),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onAnnotationChange=n.editStepAnnotation.bind(Object(d.a)(n)),n.onTextChange=n.editStepText.bind(Object(d.a)(n)),n.updateStepAndCreateOne=n.updateStepAndCreateOne.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{class:"step","data-index":this.props.index},i.a.createElement(m,{annotation:this.props.step.keyword,onAnnotationChange:this.onAnnotationChange}),i.a.createElement(b,{text:this.props.step.text,onTextChange:this.onTextChange,updateStepAndCreateOne:this.updateStepAndCreateOne}))}},{key:"editStepAnnotation",value:function(e){var t=v.updateStep(this.props.step,e,null,this.props.index);this.props.onEditStep(t,this.props.index)}},{key:"editStepText",value:function(e){var t=v.updateStep(this.props.step,null,e,this.props.index);this.props.onEditStep(t,this.props.index)}},{key:"updateStepAndCreateOne",value:function(e){var t=v.updateStep(this.props.step,null,e,this.props.index);this.props.onEditAndAddStep(t,this.props.index)}}]),t}(i.a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onEditScenarioName=n.editScenarioName.bind(Object(d.a)(n)),n.onEditStep=n.editStep.bind(Object(d.a)(n)),n.addStep=n.addStep.bind(Object(d.a)(n)),n.onEditAndAddStep=n.editAndAddStep.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{class:"tile"},this.scenarioHeader(),i.a.createElement("ul",{class:"steps-list"},this.scenarioSteps(),i.a.createElement("button",{class:"btn--secondary",onClick:this.addStep},"Add step")))}},{key:"scenarioHeader",value:function(){var e=this;return i.a.createElement("h2",{class:"editable-title"},i.a.createElement("span",{class:"gherkin-keyword"},this.props.scenario.keyword,":"),i.a.createElement("input",{placeholder:"Empty name",defaultValue:this.props.scenario.name,onBlur:this.onEditScenarioName}),i.a.createElement("button",{class:"btn--secondary",onClick:function(){return e.props.onDeleteScenario(e.props.index)}},"Delete"))}},{key:"scenarioSteps",value:function(){var e=this;return this.props.scenario.steps.map((function(t,n){return i.a.createElement(O,{key:t.id,step:t,index:n,onEditStep:e.onEditStep,onAddStep:e.addStep,onEditAndAddStep:e.onEditAndAddStep})}))}},{key:"editScenarioName",value:function(e){var t=Object.assign(this.props.scenario);t.name=e.target.value,this.props.updateFeatureChild(t,this.props.index)}},{key:"editStep",value:function(e,t){var n=Object.assign(this.props.scenario);n.steps[t]=e,this.props.updateFeatureChild(n,this.props.index)}},{key:"addStep",value:function(e){var t=v.addStepAt(this.props.scenario,e);return this.props.updateFeatureChild(t,this.props.index),t}},{key:"editAndAddStep",value:function(e,t){var n=Object.assign(this.props.scenario);return n.steps[t]=e,n=v.addStepAt(n,t),this.props.updateFeatureChild(n,this.props.index),n}}]),t}(i.a.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onUpdateFeatureName=n.updateFeatureName.bind(Object(d.a)(n)),n.onUpdateFeatureChild=n.updateFeatureChild.bind(Object(d.a)(n)),n.onAddNewScenario=n.createNewScenario.bind(Object(d.a)(n)),n.deleteScenario=n.deleteScenario.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.featureScenarios().map((function(t,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{key:t.scenario.id,scenario:t.scenario,index:n,updateFeatureChild:e.onUpdateFeatureChild,onDeleteScenario:e.deleteScenario}),i.a.createElement("button",{class:"tiles-list__gutter-action btn--main",onClick:function(){return e.onAddNewScenario(n,!1)}},"+"))}));return i.a.createElement("div",{className:"visual-editor"},i.a.createElement(h,{keyword:this.props.ast.feature.keyword,title:this.featureName(),updateFeatureName:this.onUpdateFeatureName}),i.a.createElement("ul",{class:"tiles-list"},i.a.createElement("button",{class:"tiles-list__gutter-action btn--main",onClick:function(){return e.onAddNewScenario(":first",!1)}},"+"),t),0===t.length&&i.a.createElement("button",{class:"btn--main",onClick:function(){return e.onAddNewScenario(0,!1)}},"Add a first scenario"))}},{key:"featureName",value:function(){return this.props.ast.feature.name}},{key:"featureScenarios",value:function(){return this.props.ast.feature.children}},{key:"updateFeatureName",value:function(e){var t=Object.assign(this.props.ast);t.feature.name=e,this.props.onAstUpdated(t)}},{key:"updateFeatureChild",value:function(e,t){var n=Object.assign(this.props.ast);n.feature.children[t]={scenario:e},this.props.onAstUpdated(n)}},{key:"createNewScenario",value:function(e,t){var n=Object.assign(this.props.ast),a={examples:[],id:f.IdGenerator.uuid()(),keyword:t?"Scenario Outline":"Scenario",location:{line:null,column:null},name:"",steps:[],tags:[]},i=":first"===e?0:e+1;n.feature.children.splice(i,0,{scenario:a}),this.props.onAstUpdated(n)}},{key:"deleteScenario",value:function(e){var t=Object.assign(this.props.ast);t.feature.children.splice(e,1),this.props.onAstUpdated(t)}}]),t}(i.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"text-renderer"},i.a.createElement("textarea",{id:"gherkin-render",value:this.props.txtDefinition,rows:"20",readonly:"true"}))}}]),t}(i.a.Component),y=n(40),E=n(67),A=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(u.a)(this,Object(p.a)(t).call(this,e));var a=["Feature:","","  Scenario: A simple Gherkin example","    Given some context","    When I perform an action","    Then I should observe an expected outcome"].join("\n"),i=n.computeAst(a);return n.state={txtDefinition:a,ast:i},n.onAstUpdated=n.updateAst.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"l-app"},i.a.createElement(S,{ast:this.state.ast,onAstUpdated:this.onAstUpdated,addNewScenario:this.onAddNewScenario}),i.a.createElement(k,{txtDefinition:this.state.txtDefinition}))}},{key:"computeAst",value:function(e){var t=f.IdGenerator.uuid(),n=new y.Parser(new y.AstBuilder(t)).parse(e);return n.uri="",n}},{key:"updateAst",value:function(e){var t=Object(E.pretty)(e);this.setState({ast:e,txtDefinition:t})}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(68),C=n.n(g);o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),C.a.load({google:{families:["Open Sans:300,400,600","sans-serif"]}})},69:function(e,t,n){e.exports=n(130)},74:function(e,t,n){},75:function(e,t,n){},79:function(e,t){},81:function(e,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.cffed854.chunk.js.map