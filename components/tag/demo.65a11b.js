(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1460:function(n,a,s){n.exports={basic:s(1522),interactive:s(1523)}},1522:function(n,a){n.exports={content:["article",["p","\b使用 ",["code","color"]," 自定义标签色彩："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#2B7BD6<span class="token punctuation">"</span></span> <span class="token attr-name">interactive</span> <span class="token attr-name">removable</span><span class="token punctuation">></span></span>#2B7BD6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#985FB1<span class="token punctuation">"</span></span> <span class="token attr-name">interactive</span> <span class="token attr-name">removable</span><span class="token punctuation">></span></span>#985FB1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#A3A3A3<span class="token punctuation">"</span></span> <span class="token attr-name">interactive</span> <span class="token attr-name">removable</span><span class="token punctuation">></span></span>#A3A3A3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  return (\n    <React.Fragment>\n      <Tag color="#2B7BD6" interactive removable>#2B7BD6</Tag>\n      <Tag color="#985FB1" interactive removable>#985FB1</Tag>\n      <Tag color="#A3A3A3" interactive removable>#A3A3A3</Tag>\n    </React.Fragment>\n  )']]],meta:{order:0,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/tag/demo/basic.md"}}},1523:function(n,a){n.exports={content:["article",["p","点击改变标签类型 ",["code","intent"]," ："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> <span class="token punctuation">[</span>actives<span class="token punctuation">,</span> setActives<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> activesNext <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>actives<span class="token punctuation">]</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> activesNext<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      activesNext<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      activesNext<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">setActives</span><span class="token punctuation">(</span>activesNext<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>\n        <span class="token punctuation">[</span><span class="token string">"一"</span><span class="token punctuation">,</span> <span class="token string">"二"</span><span class="token punctuation">,</span> <span class="token string">"三"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>o<span class="token punctuation">}</span></span>\n            <span class="token attr-name">intent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>actives<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"primary"</span> <span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">interactive</span>\n            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleClick</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span> <span class="token template-string"><span class="token string">`标签</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>o<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const [actives, setActives] = useState([])\n\n  const handleClick = key => {\n    const activesNext = [...actives]\n    const index = activesNext.indexOf(key)\n    if (index > -1) {\n      activesNext.splice(index, 1)\n    } else {\n      activesNext.push(key)\n    }\n    setActives(activesNext)\n  }\n\n  return (\n    <React.Fragment>\n      {\n        ["一", "二", "三"].map((o, i) => (\n          <Tag\n            key={o}\n            intent={actives.includes(i) ? "primary" : "normal"}\n            interactive\n            onClick={() => handleClick(i)}\n          >\n            { `标签${o}` }\n          </Tag>\n        ))\n      }\n    </React.Fragment>\n  )']]],meta:{order:0,title:{"zh-CN":"交互","en-US":"interactive"},filename:"components/tag/demo/interactive.md"}}}}]);