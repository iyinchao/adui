(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1281:function(n,a,s){n.exports={basic:s(1351)}},1351:function(n,a){n.exports={content:["article",["p","配合 ",["code","Table"]," 的 ",["code","loading"]," Prop 实现翻页并加载数据："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> dataSource <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> i<span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>广告数据<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span>\n        <span class="token attr-name">getHeadCellClassName</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>col<span class="token punctuation">,</span> colIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">!</span>colIndex <span class="token operator">?</span> <span class="token string">"pl-24"</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">getCellClassName</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowIndex<span class="token punctuation">,</span> colIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n          <span class="token operator">!</span>colIndex <span class="token operator">&amp;&amp;</span> <span class="token string">"pl-24"</span>\n        <span class="token punctuation">}</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shadow-y-tp-gray-200<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n          <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>项目<span class="token punctuation">"</span></span>\n          <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`项目</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rowIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n          <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>数据项<span class="token punctuation">"</span></span>\n          <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"6,534,785"</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSort</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n          <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>three<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>数据项<span class="token punctuation">"</span></span>\n          <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"4,463,346"</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n        <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>\n        <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showButtonJumper</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pr-16</span> <span class="token attr-name">py-16"</span>\n        <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/** 请忽略这个 style 标签 😊 */</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>\n      <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        __html<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const [loading, setLoading] = useState(false)\n\nconst handleChange = () => {\n  setLoading(true)\n  setTimeout(() => setLoading(false), 1000)\n}\n\nconst dataSource = Array.from(new Array(2), (_, i) => i)\n\nreturn (\n  <React.Fragment>\n    <Card className="flex-1">\n      <Card.Header title="广告数据" />\n      <Table\n        loading={loading}\n        dataSource={dataSource}\n        getHeadCellClassName={(col, colIndex) => (!colIndex ? "pl-24" : null)}\n        getCellClassName={(row, col, rowIndex, colIndex) =>\n          !colIndex && "pl-24"\n        }\n        className="shadow-y-tp-gray-200"\n      >\n        <Table.Column\n          dataIndex="one"\n          title="项目"\n          render={(row, col, rowIndex) => `项目${rowIndex}`}\n        />\n        <Table.Column\n          dataIndex="two"\n          title="数据项"\n          render={() => "6,534,785"}\n          onSort={() => {}}\n        />\n        <Table.Column\n          dataIndex="three"\n          title="数据项"\n          render={() => "4,463,346"}\n        />\n      </Table>\n      <Pagination\n        align="right"\n        defaultCurrent={1}\n        pageSize={10}\n        total={99}\n        showButtonJumper\n        className="pr-16 py-16"\n        disabled={loading}\n        onChange={handleChange}\n      />\n    </Card>\n    {/** 请忽略这个 style 标签 😊 */}\n    <style\n      dangerouslySetInnerHTML={{\n        __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`,\n      }}\n    />\n  </React.Fragment>\n)']]],meta:{order:0,title:{"zh-CN":"按钮类型","en-US":"Type"},filename:"components/pagination/demo/basic.md"}}}}]);