webpackJsonp([63,358],{751:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(151),a(150)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u591a\u9009\u548c\u52fe\u9009\u6846\u529f\u80fd\u3002"]],meta:{order:2,title:"\u591a\u9009",filename:"components/tree-select/demo/checkable.md",id:"components-tree-select-demo-checkable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TreeSelect <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SHOW_PARENT <span class="token operator" >=</span> TreeSelect<span class="token punctuation" >.</span>SHOW_PARENT<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> treeData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u8282\u70b9\u4e00\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-0\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5b50\u8282\u70b9\u4e00\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5b50\u8282\u70b9\u4e8c\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u8282\u70b9\u4e8c\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'0-1\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5b50\u8282\u70b9\u4e09\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-1-0\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-1-0\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5b50\u8282\u70b9\u56db\'</span><span class="token punctuation" >,</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'0-1-1\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'0-1-1\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0-0\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onChange \'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tProps <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      treeData<span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >,</span>\n      onChange<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >,</span>\n      multiple<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      treeCheckable<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      showCheckedStrategy<span class="token punctuation" >:</span> SHOW_PARENT<span class="token punctuation" >,</span>\n      searchPlaceholder<span class="token punctuation" >:</span> <span class="token string" >\'\u8bf7\u9009\u62e9\'</span><span class="token punctuation" >,</span>\n      style<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        width<span class="token punctuation" >:</span> <span class="token number" >300</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token operator" >&lt;</span>TreeSelect <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>tProps<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].SHOW_PARENT,s=[{label:"\u8282\u70b9\u4e00",value:"0-0",key:"0-0",children:[{label:"\u5b50\u8282\u70b9\u4e00",value:"0-0-0",key:"0-0-0"},{label:"\u5b50\u8282\u70b9\u4e8c",value:"0-0-1",key:"0-0-1"}]},{label:"\u8282\u70b9\u4e8c",value:"0-1",key:"0-1",children:[{label:"\u5b50\u8282\u70b9\u4e09",value:"0-1-0",key:"0-1-0"},{label:"\u5b50\u8282\u70b9\u56db",value:"0-1-1",key:"0-1-1"}]}],a=c["default"].createClass({displayName:"Demo",getInitialState:function(){return{value:["0-0-0"]}},onChange:function(n){console.log("onChange ",n,arguments),this.setState({value:n})},render:function(){var a={treeData:s,value:this.state.value,onChange:this.onChange,multiple:!0,treeCheckable:!0,showCheckedStrategy:n,searchPlaceholder:"\u8bf7\u9009\u62e9",style:{width:300}};return c["default"].createElement(o["default"],a)}});return c["default"].createElement(a,null)}}}});