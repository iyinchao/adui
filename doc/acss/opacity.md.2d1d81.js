(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1462:function(n,s){n.exports={content:["article",["p","AD UI 引入了以下功能类，以控制元素的透明度。"],["p","相关 CSS 属性：",["code","opacity"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"opacity-0"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-5"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.05</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-10"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-20"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-25"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.25</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-30"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.3</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-40"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-50"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-60"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-70"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-75"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.75</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-80"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-90"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-95"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">0.95</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"opacity-100"</span><span class="token punctuation">:</span> "opacity<span class="token punctuation">:</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "opacity-0": "opacity: 0;",\n  "opacity-5": "opacity: 0.05;",\n  "opacity-10": "opacity: 0.1;",\n  "opacity-20": "opacity: 0.2;",\n  "opacity-25": "opacity: 0.25;",\n  "opacity-30": "opacity: 0.3;",\n  "opacity-40": "opacity: 0.4;",\n  "opacity-50": "opacity: 0.5;",\n  "opacity-60": "opacity: 0.6;",\n  "opacity-70": "opacity: 0.7;",\n  "opacity-75": "opacity: 0.75;",\n  "opacity-80": "opacity: 0.8;",\n  "opacity-90": "opacity: 0.9;",\n  "opacity-95": "opacity: 0.95;",\n  "opacity-100": "opacity: 1;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"inline-flex p-20 bg-tp-gray-100 space-x-8 text-white rounded-4"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-16 bg-green opacity-100 rounded-4"</span><span class="token operator">></span>opacity<span class="token operator">-</span><span class="token number">100</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-16 bg-green opacity-75 rounded-4"</span><span class="token operator">></span>opacity<span class="token operator">-</span><span class="token number">75</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-16 bg-green opacity-50 rounded-4"</span><span class="token operator">></span>opacity<span class="token operator">-</span><span class="token number">50</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-16 bg-green opacity-25 rounded-4"</span><span class="token operator">></span>opacity<span class="token operator">-</span><span class="token number">25</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="inline-flex p-20 bg-tp-gray-100 space-x-8 text-white rounded-4">\n    <div className="p-16 bg-green opacity-100 rounded-4">opacity-100</div>\n    <div className="p-16 bg-green opacity-75 rounded-4">opacity-75</div>\n    <div className="p-16 bg-green opacity-50 rounded-4">opacity-50</div>\n    <div className="p-16 bg-green opacity-25 rounded-4">opacity-25</div>\n  </div>\n)']]],meta:{title:"Opacity",filename:"doc/acss/opacity.md"}}}}]);