(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1508:function(n,s){n.exports={content:["article",["p","AD UI 引入了以下功能类，以控制容器宽度。注意：支持 0 ~ 500 被 4 整除的数字，例：支持 ",["code","w-64"],"，不支持 ",["code","w-63"],"。"],["p","相关 CSS 属性：",["code","width"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"w-[0-500]"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">500</span><span class="token punctuation">]</span>px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-auto"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-screen"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> 100vw<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-full"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/2"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">50</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/3"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">33.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-2/3"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">66.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/4"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">25</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-2/4"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">50</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-3/4"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">75</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/5"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">20</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-2/5"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">40</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-3/5"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">60</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-4/5"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">80</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/6"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">16.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-2/6"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">33.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-3/6"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">50</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-4/6"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">66.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-5/6"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">83.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-1/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">8.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-2/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">16.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-3/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">25</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-4/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">33.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-5/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">41.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-6/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">50</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-7/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">58.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-8/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">66.666667</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-9/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">75</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-10/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">83.333333</span>%<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"w-11/12"</span><span class="token punctuation">:</span> "width<span class="token punctuation">:</span> <span class="token number">91.666667</span>%<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "w-[0-500]": "width: [0-500]px;",\n  "w-auto": "width: auto;",\n  "w-screen": "width: 100vw;",\n  "w-full": "width: 100%;",\n  "w-1/2": "width: 50%;",\n  "w-1/3": "width: 33.333333%;",\n  "w-2/3": "width: 66.666667%;",\n  "w-1/4": "width: 25%;",\n  "w-2/4": "width: 50%;",\n  "w-3/4": "width: 75%;",\n  "w-1/5": "width: 20%;",\n  "w-2/5": "width: 40%;",\n  "w-3/5": "width: 60%;",\n  "w-4/5": "width: 80%;",\n  "w-1/6": "width: 16.666667%;",\n  "w-2/6": "width: 33.333333%;",\n  "w-3/6": "width: 50%;",\n  "w-4/6": "width: 66.666667%;",\n  "w-5/6": "width: 83.333333%;",\n  "w-1/12": "width: 8.333333%;",\n  "w-2/12": "width: 16.666667%;",\n  "w-3/12": "width: 25%;",\n  "w-4/12": "width: 33.333333%;",\n  "w-5/12": "width: 41.666667%;",\n  "w-6/12": "width: 50%;",\n  "w-7/12": "width: 58.333333%;",\n  "w-8/12": "width: 66.666667%;",\n  "w-9/12": "width: 75%;",\n  "w-10/12": "width: 83.333333%;",\n  "w-11/12": "width: 91.666667%;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-100 h-100 bg-green rounded-6"</span> <span class="token operator">/</span><span class="token operator">></span>'},["code",'return <div className="w-100 h-100 bg-green rounded-6" />']]],meta:{title:"Width",filename:"doc/acss/width.md"}}}}]);