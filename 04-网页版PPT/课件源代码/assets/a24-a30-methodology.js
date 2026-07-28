(function(){
  var modelEl=document.getElementById('deck-view-model');
  var deck=document.getElementById('deck');
  if(!modelEl||!deck)return;
  var isExportSnapshot=document.documentElement.dataset.exportSnapshot==='true';
  if(!isExportSnapshot){
  var defs=[
    {id:'theme07_page083-24',key:'theme07_page083',dataLayout:'THEME07-083',label:'有了好工具，还要有好方法',props:{title:'有了好工具，还要有好方法',lead:'选择适合 Agent 的工作方式，比要求 Agent 适应所有工具更重要。',principles:['扬长避短','分层协作','结果验收']}},
    {id:'theme07_page084-25',key:'theme07_page084',dataLayout:'THEME07-084',label:'处理文档：先转换成 Agent 擅长的文本，再处理格式',props:{title:'处理文档：先转换成 Agent 擅长的文本，再处理格式',lead:'大模型更擅长理解和生成文本；Markdown 用轻量标记保留结构，减少复杂格式干扰。',flow:['读取 DOCX','提取为 Markdown','修改与确认','写回 DOCX','检查排版']}},
    {id:'theme07_page085-26',key:'theme07_page085',dataLayout:'THEME07-085',label:'处理数据：别让模型心算，让它调度工具算',props:{title:'处理数据：别让模型心算，让它调度工具算',lead:'Agent 负责想清楚，脚本和工具负责算清楚。',layers:['任务分析与决策','脚本与专业工具','人的口径与异常检查']}},
    {id:'theme07_page086-27',key:'theme07_page086',dataLayout:'THEME07-086',label:'演示汇报：核心是把信息讲清楚',props:{title:'演示汇报：核心是把信息讲清楚',lead:'根据受众和信息特点，选择最合适的呈现方式。',outputs:['PPT','网页报告','数据看板','动态推演']}},
    {id:'theme07_page087-28',key:'theme07_page087',dataLayout:'THEME07-087',label:'设计工作：先把想法做成原型，再进行沟通讨论',props:{title:'设计工作：先把想法做成原型，再进行沟通讨论',lead:'原型不是最终产品，但它能让想法先变得可见、可讨论、可验证。',flow:['设计要求与参考','并行快速原型','人选择与判断','专业团队完善']}},
    {id:'theme07_page088-29',key:'theme07_page088',dataLayout:'THEME07-088',label:'长期任务：对话是工作现场，文件是组织记忆',props:{title:'长期任务：对话是工作现场，文件是组织记忆',lead:'把复杂任务拆开，把关键过程记录下来，把任务产物汇总起来。',tasks:['资料研究','内容撰写','视觉设计','数据核验']}},
    {id:'theme07_page089-30',key:'theme07_page089',dataLayout:'THEME07-089',label:'人定方向，Agent 推进，工具执行',props:{title:'人定方向，Agent 推进，工具执行',lead:'各自做擅长的事，在反馈中把任务推进到可验收的结果。',loop:['人定方向','Agent 推进','工具执行','形成成果','验收反馈']}}
  ];
  try{
    var model=JSON.parse(modelEl.textContent);
    model.slides=model.slides||[];
    defs.forEach(function(d){
      if(model.slides.some(function(s){return s&&s.id===d.id;}))return;
      model.slides.push({id:d.id,key:d.key,layout:d.key,dataLayout:d.dataLayout,themePack:'theme07',label:d.label,props:Object.assign({accentColor:'#176BFF'},d.props),media:{}});
    });
    model.state=model.state||{};
    model.state.text=model.state.text||{};
    model.state.text['text:theme07_page085:a26-tool-title']='程序负责准确计算';
    model.state.text['text:theme07_page086:a27-source-title']='明确汇报对象';
    model.state.text['text:theme07_page086:a27-decision-title']='编排汇报流程';
    model.state.text['text:theme07_page086:p0-0-1-0-3-0']='02 · 呈现过程';
    model.state.text['text:theme07_page087:a28-title']='设计工作：先把想法做成原型，再进行沟通讨论';
    model.state.text['text:theme07_page087:a28-lead']='Agent 可以把自然语言描述快速变成想法原型，让方案在投入正式制作前先被看见、讨论和验证。';
    model.state.text['text:theme07_page087:a28-prototype-title']='把描述变成可以讨论的方案';
    model.state.text['text:theme07_page087:a28-prototype-copy1']='先把想法变成看得见的方案，再结合业务流程，';
    model.state.text['text:theme07_page087:a28-prototype-copy2']='使用场景和实际反馈判断是否可行。';
    model.state.text['text:theme07_page087:a28-handoff-title']='把原型做成最终成果';
    model.state.text['text:theme07_page087:a28-handoff-copy']='原型降低沟通成本，专业团队负责完善细节和最终质量。';
    model.state.text['text:theme07_page088:a29-title']='长期任务：对话是工作现场，文件是组织记忆';
    model.state.text['text:theme07_page088:a29-lead']='把复杂任务拆开，把关键过程记录下来，把任务产物汇总起来。';
    model.state.text['text:theme07_page088:a29-context-title']='一个项目，共享一套最新资料与进展';
    model.state.text['text:theme07_page088:a29-version-label']='版本管理';
    model.state.text['text:theme07_page088:a29-version-copy']='知道改了什么，也能回到过去，随意切换分支。';
    model.state.text['text:theme07_page088:a29-claim']='把任务拆开，把关键过程记录下来，把产物汇总起来。';
    model.state.text['text:theme07_page089:a30-title']='人定方向，Agent 推进，工具执行';
    model.state.text['text:theme07_page089:a30-lead']='各自做擅长的事，在反馈中把任务推进到可验收的结果。';
    modelEl.textContent=JSON.stringify(model);
  }catch(e){console.warn('A-24—A-30 model bootstrap skipped',e);}

  function icon(path){return '<span class="method-icon" aria-hidden="true"><svg viewBox="0 0 24 24">'+path+'</svg></span>';}
  function page(d,index,body){return '<section class="slide imported-theme-slide method-slide" data-layout="'+d.dataLayout+'" data-vm-slide-id="'+d.id+'" data-vm-slide-key="'+d.key+'" data-vm-layout="'+d.key+'" data-vm-index="'+index+'" data-theme-pack="theme07" data-label="'+d.label+'"><div class="method-static-root"><div class="method-page"><header class="method-head"><div class="method-head-copy"><h1 data-editable-path="a'+(index+1)+'-title">'+d.props.title+'</h1><p data-editable-path="a'+(index+1)+'-lead">'+d.props.lead+'</p></div></header>'+body+'</div></div></section>';}
  var icons={
    camera:'<path d="M5 7h3l1.5-2h5L16 7h3v11H5V7Z"></path><circle cx="12" cy="12.5" r="3.5"></circle>',
    human:'<circle cx="12" cy="8" r="3"></circle><path d="M5 21v-2c0-4 2.8-6 7-6s7 2 7 6v2"></path>',
    agent:'<rect x="4" y="5" width="16" height="14" rx="3"></rect><path d="M9 10h.01M15 10h.01M9 15h6M12 5V2"></path>',
    tool:'<path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-4-4 3-3Z"></path>',
    file:'<path d="M6 3h8l4 4v14H6V3Z"></path><path d="M14 3v5h5M9 13h6M9 17h5"></path>',
    code:'<path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16"></path>',
    brain:'<path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5v1a3 3 0 0 0 4 3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5v1a3 3 0 0 1-4 3M9 4v16M15 4v16M9 9h2M13 15h2"></path>',
    chart:'<path d="M4 20V4M4 20h16"></path><path d="m7 16 4-5 3 2 5-7"></path>',
    screen:'<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="m5 18 5-5 3 3 2-2 4 4"></path>',
    select:'<path d="M5 4h14v16H5V4Z"></path><path d="m8 12 3 3 5-6"></path>',
    folder:'<path d="M3 6h7l2 2h9v11H3V6Z"></path>',
    chat:'<path d="M4 5h16v12H9l-5 3V5Z"></path><path d="M8 10h8M8 13h5"></path>',
    archive:'<path d="M4 7h16v14H4V7Z"></path><path d="M3 3h18v4H3V3ZM9 11h6"></path>',
    target:'<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path>'
    ,extract:'<path d="M5 3h9l4 4v5"></path><path d="M14 3v5h5M5 3v18h7"></path><path d="m14 16 3 3 4-5"></path>'
    ,edit:'<path d="M4 20h4l11-11-4-4L4 16v4Z"></path><path d="m13 7 4 4M4 12V4h8"></path>'
    ,check:'<circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path>'
    ,export:'<path d="M5 3h9l4 4v14H5V3Z"></path><path d="M14 3v5h5M9 14h6M12 11l3 3-3 3"></path>'
    ,database:'<ellipse cx="12" cy="5" rx="7" ry="3"></ellipse><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"></path>'
  };
  var html='';
  html+=page(defs[0],22,'<main class="a24-main"><figure class="method-card a24-visual"><img src="assets/a24-method-kitchen-v2-4x3.png" alt="冷白工作台上，厨具、食材与菜品围绕料理流程有序摆放，表达好工具仍需要正确方法"><figcaption><h2 data-editable-path="a24-analogy-title">好厨具好食材，也需要好厨艺。</h2><p data-editable-path="a24-analogy-copy">工具决定能力上限，方法决定能否稳定发挥。Agent 不是万能替身，而是能力不同的协作者。</p></figcaption></figure><section class="a24-side"><article class="method-card a24-collab"><h2 data-editable-path="a24-chain-title">把每一部分，交给最适合它的角色</h2><div class="a24-chain"><div class="a24-role"><i class="a24-role-index">01</i>'+icon(icons.human)+'<b data-editable-path="a24-human">人</b><span data-editable-path="a24-human-copy">定目标 · 做判断 · 验收结果</span></div><div class="a24-role"><i class="a24-role-index">02</i>'+icon(icons.agent)+'<b data-editable-path="a24-agent">Agent</b><span data-editable-path="a24-agent-copy">理解 · 规划 · 调度 · 整合</span></div><div class="a24-role"><i class="a24-role-index">03</i>'+icon(icons.tool)+'<b data-editable-path="a24-tools">专业工具</b><span data-editable-path="a24-tools-copy">计算 · 绘制 · 转换 · 生成</span></div></div></article><article class="method-card a24-principles-panel"><h2 data-editable-path="a24-principles-title">协作的三条原则</h2><div class="a24-principles"><div class="a24-principle"><i>01</i><b data-editable-path="a24-p1">扬长避短</b></div><div class="a24-principle"><i>02</i><b data-editable-path="a24-p2">分层协作</b></div><div class="a24-principle"><i>03</i><b data-editable-path="a24-p3">结果验收</b></div></div><p data-editable-path="a24-claim">选择适合 Agent 的工作方式，<strong>比要求 Agent 适应所有工具更重要。</strong></p></article></section></main>');
  html+=page(defs[1],23,'<main class="a25-story"><section class="method-card a25-hero" data-a25-motion><figure class="a25-photo"><img src="assets/a25-doc-workflow-imagegen-v1.png" alt="从复杂办公文档、轻量工作稿到正式交付报告的三阶段文档工作台"></figure><div class="a25-photo-shade" aria-hidden="true"></div><svg class="a25-route" viewBox="0 0 1600 410" preserveAspectRatio="none" aria-hidden="true"><path class="a25-route-base" d="M250 205 C430 205 455 205 610 205 S950 205 1090 205 S1330 205 1460 205"></path><path class="a25-route-progress" d="M250 205 C430 205 455 205 610 205 S950 205 1090 205 S1330 205 1460 205"></path><circle cx="250" cy="205" r="8"></circle><circle cx="800" cy="205" r="8"></circle><circle cx="1460" cy="205" r="8"></circle></svg><div class="a25-stage-labels"><article class="a25-state a25-state--source" data-a25-anim="source"><span class="a25-state-no">01 · 交付格式</span><div class="a25-state-main">'+icon(icons.file)+'<div><b data-editable-path="a25-input">DOCX 输入</b><small data-editable-path="a25-input-copy">保留原有内容、表格与版式</small></div></div></article><article class="a25-state a25-state--work" data-a25-anim="work"><span class="a25-state-no">02 · 工作格式</span><div class="a25-state-main">'+icon(icons.code)+'<div><b data-editable-path="a25-work">Markdown 工作稿</b><small data-editable-path="a25-work-copy">结构清楚，便于修改、比较与确认</small></div></div></article><article class="a25-state a25-state--final" data-a25-anim="final"><span class="a25-state-no">03 · 交付格式</span><div class="a25-state-main">'+icon(icons.check)+'<div><b data-editable-path="a25-output">DOCX 交付</b><small data-editable-path="a25-output-copy">恢复排版，人工检查后交付</small></div></div></article></div><div class="a25-step-rail" aria-label="文档处理流程"><article class="a25-step-node" data-a25-anim="step">'+icon(icons.extract)+'<div><b data-editable-path="a25-step1">读取结构</b><span data-editable-path="a25-step1-copy">识别正文、标题、表格与批注</span></div></article><article class="a25-step-node" data-a25-anim="step">'+icon(icons.code)+'<div><b data-editable-path="a25-step2">转换工作稿</b><span data-editable-path="a25-step2-copy">提取成轻量、清晰的 Markdown</span></div></article><article class="a25-step-node" data-a25-anim="step">'+icon(icons.edit)+'<div><b data-editable-path="a25-step3">修改并确认</b><span data-editable-path="a25-step3-copy">比较版本，先把内容定下来</span></div></article><article class="a25-step-node" data-a25-anim="step">'+icon(icons.export)+'<div><b data-editable-path="a25-step4">写回与检查</b><span data-editable-path="a25-step4-copy">恢复样式、分页与正式格式</span></div></article></div><button class="a25-replay" type="button" aria-label="重新播放文档处理流程"><span aria-hidden="true">↻</span>演示流程</button></section><section class="method-card a25-takeaway"><div class="a25-case">'+icon(icons.file)+'<div><span>轻量案例</span><b data-editable-path="a25-example-title">修改一份制度或报告</b></div></div><p data-editable-path="a25-example-copy"><strong>先确认内容，再处理版式。</strong>复杂格式通常需要额外解析，实际效率取决于工具的处理方式。</p></section></main>');
  html+=page(defs[2],24,'<main class="a26-stack"><section class="method-card a26-layer"><div class="a26-layer-title">'+icon(icons.brain)+'<div><b data-editable-path="a26-agent-title">Agent：想清楚</b><span>理解业务问题与任务边界</span></div></div><div class="a26-cells"><article class="a26-cell"><b data-editable-path="a26-c1">理解问题</b><span data-editable-path="a26-c1-copy">明确要回答什么、给谁使用。</span></article><article class="a26-cell"><b data-editable-path="a26-c2">拆解任务</b><span data-editable-path="a26-c2-copy">确定数据、步骤、口径与输出。</span></article><article class="a26-cell"><b data-editable-path="a26-c3">判断下一步</b><span data-editable-path="a26-c3-copy">根据结果决定继续核验或展示。</span></article></div></section><section class="method-card a26-layer a26-tools"><div class="a26-layer-title">'+icon(icons.code)+'<div><b data-editable-path="a26-tool-title">工具：算清楚</b><span>可重复、可检查地执行计算</span></div></div><div class="a26-cells"><article class="a26-cell"><b>Python / SQL</b><span data-editable-path="a26-t1-copy">清洗、统计、匹配与批量处理。</span></article><article class="a26-cell"><b>CSV / JSON</b><span data-editable-path="a26-t2-copy">结构清晰，适合交换和程序处理。</span></article><article class="a26-cell"><b data-editable-path="a26-t3">表格与图表</b><span data-editable-path="a26-t3-copy">输出结果、图形和可复核明细。</span></article></div></section><section class="method-card a26-check"><b data-editable-path="a26-check-title">人最后检查什么？</b><div class="a26-check-list"><span data-editable-path="a26-check1">指标口径</span><span data-editable-path="a26-check2">异常数据</span><span data-editable-path="a26-check3">计算逻辑</span><span data-editable-path="a26-check4">结论是否成立</span></div></section></main>');
  html+=page(defs[3],25,'<main></main>');
  html+=page(defs[4],26,'<main class="a28-pipeline"><article class="method-card a28-input">'+icon(icons.file)+'<b data-editable-path="a28-input-title">想法与参考</b><span data-editable-path="a28-input-copy">目标、受众、品牌要求、参考图片和使用场景</span></article><i class="method-arrow">→</i><section class="a28-prototypes"><article class="a28-prototype">'+icon(icons.image)+'<b data-editable-path="a28-p1">活动主视觉</b><span data-editable-path="a28-p1-copy">快速探索不同构图、色彩与风格</span></article><article class="a28-prototype">'+icon(icons.screen)+'<b data-editable-path="a28-p2">落地页原型</b><span data-editable-path="a28-p2-copy">让内容结构和交互方式先变得可见</span></article><article class="a28-prototype">'+icon(icons.chart)+'<b data-editable-path="a28-p3">动态预览</b><span data-editable-path="a28-p3-copy">用音频、视频或代码动画验证表达</span></article></section><article class="method-card a28-choice">'+icon(icons.select)+'<b data-editable-path="a28-choice-title">人选择与判断</b><span data-editable-path="a28-choice-copy">哪一个方向值得继续，哪些问题需要修正</span></article><article class="method-card a28-final">'+icon(icons.tool)+'<b data-editable-path="a28-final-title">专业团队完善</b><span data-editable-path="a28-final-copy">品牌规范、工程实现、质量控制与最终兜底</span></article></main>');
  html+=page(defs[5],27,'<main class="a29-project"><article class="method-card a29-task a29-task--research"><b data-editable-path="a29-t1">资料研究任务</b><span data-editable-path="a29-t1-copy">查证来源、整理事实和可用素材。</span></article><article class="method-card a29-task a29-task--writing"><b data-editable-path="a29-t2">内容撰写任务</b><span data-editable-path="a29-t2-copy">根据最新材料形成结构和文稿。</span></article><article class="method-card a29-task a29-task--visual"><b data-editable-path="a29-t3">视觉设计任务</b><span data-editable-path="a29-t3-copy">独立制作页面、图示或原型。</span></article><article class="method-card a29-task a29-task--verify"><b data-editable-path="a29-t4">数据核验任务</b><span data-editable-path="a29-t4-copy">复算结果、检查事实和风险。</span></article><section class="method-card a29-core">'+icon(icons.folder)+'<h2 data-editable-path="a29-core-title">一个项目，共享一套资料与进展</h2><div class="a29-files"><span>项目说明.md</span><span>当前进展.md</span><span>决策记录.md</span><span>任务交接.md</span><span>inputs / assets</span><span>outputs / results</span></div></section><div class="a29-version"><span data-editable-path="a29-v1">版本管理</span><b>→</b><span data-editable-path="a29-v2">知道改了什么，也能回到过去，随意切换分支</span></div></main>');
  html+=page(defs[6],28,'<main class="a30-collab"><section class="method-card a30-system"><div class="a30-grid-bg" aria-hidden="true"></div><svg class="a30-feedback-loop" viewBox="0 0 1696 814" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="a30-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z"></path></marker></defs><path d="M1450 390 C1510 645 225 645 225 390" marker-end="url(#a30-arrow)"></path></svg><div class="a30-role-row"><article class="a30-role-card a30-role-card--human"><div class="a30-role-top"><i>01</i>'+icon(icons.target)+'</div><div class="a30-role-copy"><h2 data-editable-path="a30-human">人</h2><b data-editable-path="a30-human-action">定方向</b></div><div class="a30-terms"><span data-editable-path="a30-human-1">目标</span><span data-editable-path="a30-human-2">边界</span><span data-editable-path="a30-human-3">判断</span><span data-editable-path="a30-human-4">验收</span></div></article><article class="a30-role-card a30-role-card--agent"><div class="a30-role-top"><i>02</i>'+icon(icons.brain)+'</div><div class="a30-role-copy"><h2 data-editable-path="a30-agent">Agent</h2><b data-editable-path="a30-agent-action">推进任务</b></div><div class="a30-terms"><span data-editable-path="a30-agent-1">理解</span><span data-editable-path="a30-agent-2">规划</span><span data-editable-path="a30-agent-3">调度</span><span data-editable-path="a30-agent-4">整合</span></div></article><article class="a30-role-card a30-role-card--tools"><div class="a30-role-top"><i>03</i>'+icon(icons.code)+'</div><div class="a30-role-copy"><h2 data-editable-path="a30-tools">专业工具</h2><b data-editable-path="a30-tools-action">准确执行</b></div><div class="a30-terms"><span data-editable-path="a30-tools-1">检索</span><span data-editable-path="a30-tools-2">计算</span><span data-editable-path="a30-tools-3">绘制</span><span data-editable-path="a30-tools-4">生成</span></div></article></div><div class="a30-flow-arrow a30-flow-arrow--one"><b>→</b></div><div class="a30-flow-arrow a30-flow-arrow--two"><b>→</b></div><div class="a30-feedback"><span>✓</span><b data-editable-path="a30-feedback-1">验收结果</b><i>→</i><b data-editable-path="a30-feedback-2">反馈修正</b><i>→</i><b data-editable-path="a30-feedback-3">进入下一轮</b></div><div class="a30-final-claim" data-editable-path="a30-claim">真正高效的人机协作，是让每一部分都由<strong>最适合它的人或工具完成。</strong></div></section></main>');
  var holder=document.createElement('div');holder.innerHTML=html;
  Array.from(holder.children).forEach(function(slide){if(!deck.querySelector('section[data-vm-slide-id="'+slide.getAttribute('data-vm-slide-id')+'"]'))deck.appendChild(slide);});
  var mounted=defs.map(function(d){return deck.querySelector('section[data-vm-slide-id="'+d.id+'"]');}).filter(Boolean);
  var a25CaseLabel=deck.querySelector('section[data-layout="THEME07-084"] .a25-case > div > span');
  if(a25CaseLabel)a25CaseLabel.textContent='文档示例';
  var a25Takeaway=deck.querySelector('section[data-layout="THEME07-084"] .a25-takeaway p');
  if(a25Takeaway)a25Takeaway.innerHTML='<strong>为什么中间使用 Markdown？</strong>它用字符标记标题、列表和层级，既保留必要结构，又便于 Agent 读取、修改、比较和生成。';
  var a26Old=deck.querySelector('section[data-layout="THEME07-085"] main');
  if(a26Old){
    var a26New='<main class="a26-studio" data-a26-motion><section class="method-card a26-data-stage"><figure class="a26-photo"><img src="assets/a26-data-workflow-imagegen-v1.png" alt="左侧原始数据、中央分析空间与右侧多种数据结果组成的冷白数据工作台"></figure><div class="a26-photo-shade" aria-hidden="true"></div><svg class="a26-flow-map" viewBox="0 0 1696 630" preserveAspectRatio="none" aria-hidden="true"><path class="a26-flow-base" d="M380 190 C445 190 470 190 515 190 M1085 190 C1140 190 1170 190 1250 190 M800 320 C800 365 800 390 800 430"></path><path class="a26-flow-progress" d="M380 190 C445 190 470 190 515 190 M1085 190 C1140 190 1170 190 1250 190 M800 320 C800 365 800 390 800 430"></path></svg><article class="a26-input-panel" data-a26-anim="input"><span class="a26-kicker">01 · 数据进入</span><h2 data-editable-path="a26-input-title">先把数据变得可处理</h2><p data-editable-path="a26-input-copy">字段清楚、结构稳定，工具才能可靠地读取和批量处理。</p><div class="a26-format-row"><span class="a26-format a26-format--excel"><i>X</i>Excel</span><span class="a26-format">CSV</span><span class="a26-format">JSON</span></div></article><article class="a26-agent-core" data-a26-anim="agent"><div class="a26-agent-head">'+icon(icons.brain)+'<div><span class="a26-kicker">02 · AGENT 决策层</span><h2 data-editable-path="a26-agent-title">想清楚，再调度</h2></div></div><div class="a26-decision-grid"><span data-editable-path="a26-c1">理解要回答什么</span><span data-editable-path="a26-c2">拆解处理步骤</span><span data-editable-path="a26-c3">选择脚本与工具</span><span data-editable-path="a26-c4">根据结果判断下一步</span></div></article><section class="a26-output-stack" data-a26-anim="outputs"><span class="a26-kicker">04 · 多种结果</span><article class="a26-output-card"><div class="a26-mini-table" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><div><b data-editable-path="a26-o1">可复核明细</b><span data-editable-path="a26-o1-copy">保留计算过程与结果表</span></div></article><article class="a26-output-card"><div class="a26-mini-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div><b data-editable-path="a26-o2">统计图表</b><span data-editable-path="a26-o2-copy">柱状、折线、分布与对比</span></div></article><article class="a26-output-card"><div class="a26-mini-line" aria-hidden="true"><svg viewBox="0 0 80 44"><path d="M4 36 22 25 38 29 55 12 76 18"></path><circle cx="22" cy="25" r="2.8"></circle><circle cx="55" cy="12" r="2.8"></circle></svg></div><div><b data-editable-path="a26-o3">交互看板</b><span data-editable-path="a26-o3-copy">筛选、联动与持续查看</span></div></article></section><section class="a26-tool-dock" data-a26-anim="tools"><header><span class="a26-kicker">03 · 工具执行层</span><b data-editable-path="a26-tool-title">清洗 · 计算 · 统计 · 绘制</b></header><div class="a26-tools-row"><article class="a26-tool-chip"><img src="assets/a26-python.svg" alt="Python 标志"><span><b>Python</b><small>脚本与批量处理</small></span></article><article class="a26-tool-chip">'+icon(icons.database)+'<span><b>SQL</b><small>查询与汇总</small></span></article><article class="a26-tool-chip"><span class="a26-excel-mark" aria-hidden="true"><b>X</b><i></i></span><span><b>Excel</b><small>表格与明细</small></span></article><article class="a26-tool-chip"><img src="assets/a26-echarts.svg" alt="Apache ECharts 标志"><span><b>ECharts</b><small>图表与交互</small></span></article></div></section><button class="a26-replay" type="button" aria-label="重新播放数据处理流程"><span aria-hidden="true">↻</span>演示流程</button></section><section class="method-card a26-human-check"><div class="a26-check-title">'+icon(icons.check)+'<div><span>05 · 人工验收</span><b data-editable-path="a26-check-title">人最后检查什么？</b></div></div><div class="a26-check-list"><span data-editable-path="a26-check1">指标口径</span><span data-editable-path="a26-check2">异常数据</span><span data-editable-path="a26-check3">计算逻辑</span><span data-editable-path="a26-check4">业务结论</span></div><p data-editable-path="a26-claim"><strong>Agent 负责判断与调度，</strong>工具负责可重复、可检查地执行。</p></section></main>';
    a26New=a26New.replaceAll('M800 320 C800 365 800 390 800 430','M1450 320 C1450 365 1450 390 1450 430');
    a26Old.outerHTML=a26New;
    var a26Slide=deck.querySelector('section[data-layout="THEME07-085"]');
    var a26Right=a26Slide&&a26Slide.querySelector('.a26-output-stack');
    var a26Bottom=a26Slide&&a26Slide.querySelector('.a26-tool-dock');
    if(a26Right){
      a26Right.classList.add('a26-tool-stack');
      a26Right.setAttribute('data-a26-anim','tools');
      a26Right.innerHTML='<span class="a26-kicker">03 · 工具执行层</span><h2 class="a26-tool-stack-title" data-editable-path="a26-tool-title">程序负责准确计算</h2><div class="a26-tools-row"><article class="a26-tool-chip"><img src="assets/a26-python.svg" alt="Python 标志"><span><b>Python</b><small>脚本与批量处理</small></span></article><article class="a26-tool-chip">'+icon(icons.database)+'<span><b>SQL</b><small>查询与汇总</small></span></article><article class="a26-tool-chip"><img src="assets/a26-echarts.svg" alt="Apache ECharts 标志"><span><b>ECharts</b><small>图表与交互</small></span></article></div>';
    }
    if(a26Bottom){
      a26Bottom.classList.add('a26-output-dock');
      a26Bottom.setAttribute('data-a26-anim','outputs');
      a26Bottom.innerHTML='<header><span class="a26-kicker">04 · 多种结果</span><b data-editable-path="a26-output-title">让结果清楚、可用</b></header><div class="a26-output-row"><article class="a26-output-card"><div class="a26-mini-table" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><div><b data-editable-path="a26-o1">可复核明细</b><span data-editable-path="a26-o1-copy">保留计算过程与结果表</span></div></article><article class="a26-output-card"><div class="a26-mini-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div><b data-editable-path="a26-o2">统计图表</b><span data-editable-path="a26-o2-copy">柱状、折线、分布与对比</span></div></article><article class="a26-output-card"><div class="a26-mini-line" aria-hidden="true"><svg viewBox="0 0 80 44"><path d="M4 36 22 25 38 29 55 12 76 18"></path><circle cx="22" cy="25" r="2.8"></circle><circle cx="55" cy="12" r="2.8"></circle></svg></div><div><b data-editable-path="a26-o3">交互看板</b><span data-editable-path="a26-o3-copy">筛选、联动与持续查看</span></div></article></div>';
    }
  }
  var a27Old=deck.querySelector('section[data-layout="THEME07-086"] main');
  if(a27Old){
    var a27New='';
    a27New+='<main class="a27-lab" data-a27-motion>';
    a27New+='<section class="method-card a27-display-stage">';
    a27New+='<div class="a27-grid-bg" aria-hidden="true"></div>';
    a27New+='<svg class="a27-route" viewBox="0 0 1696 814" preserveAspectRatio="none" aria-hidden="true"><path class="a27-route-base" d="M380 350 C400 350 410 350 430 350 M810 350 C834 350 846 350 870 350"></path><path class="a27-route-progress" d="M380 350 C400 350 410 350 430 350 M810 350 C834 350 846 350 870 350"></path></svg>';
    a27New+='<article class="a27-content-source" data-a27-anim="source"><span class="a27-kicker">01 · 汇报内容</span><h2 data-editable-path="a27-source-title">明确汇报对象</h2><p data-editable-path="a27-source-copy">先明确给谁看、重点是什么、信息怎样组织，再选择呈现方式。</p><div class="a27-story-sheet" aria-hidden="true"><i class="a27-story-title"></i><i></i><i></i><div class="a27-story-visual"><span></span><span></span><span></span><span></span></div></div><div class="a27-source-tags"><span>受众</span><span>重点</span><span>关系</span></div></article>';
    a27New+='<article class="a27-format-decision" data-a27-anim="decision"><span class="a27-kicker">02 · 呈现过程</span><h2 data-editable-path="a27-decision-title">编排汇报流程</h2><div class="a27-needs"><span><i>→</i><b>线性讲述</b><small>按顺序带着观众理解</small></span><span><i>≡</i><b>深度阅读</b><small>自由浏览并查找细节</small></span><span><i>↻</i><b>实时数据</b><small>支持筛选、联动和更新</small></span><span><i>◎</i><b>过程推演</b><small>呈现变化、空间和机制</small></span></div><p class="a27-decision-note">不是先打开软件，找模版，<strong>而是先判断信息怎样呈现最清楚。</strong></p></article>';
    a27New+='<section class="a27-container-wall" data-a27-anim="wall"><header><span class="a27-kicker">03 · 呈现方式</span><h2 data-editable-path="a27-wall-title">同一内容，可以有不同表达</h2></header><div class="a27-container-grid">';
    a27New+='<article class="a27-format-card a27-format-card--ppt" data-a27-card><div class="a27-preview a27-ppt-ui" aria-hidden="true"><aside><i></i><i></i><i></i></aside><div><b></b><span></span><span></span><em></em></div></div><footer><div><b data-editable-path="a27-o1">PPT</b><span data-editable-path="a27-o1-copy">线性讲述 · 正式汇报 · 方便分发</span></div><i class="a27-fit">顺序表达</i></footer></article>';
    a27New+='<article class="a27-format-card a27-format-card--web" data-a27-card><div class="a27-preview a27-web-ui" aria-hidden="true"><nav><i></i><i></i><i></i></nav><div class="a27-web-body"><aside></aside><main><b></b><span></span><span></span><span></span></main></div></div><footer><div><b data-editable-path="a27-o2">网页报告</b><span data-editable-path="a27-o2-copy">自由布局 · 深度阅读 · 灵活跳转</span></div><i class="a27-fit">自由浏览</i></footer></article>';
    a27New+='<article class="a27-format-card a27-format-card--dash" data-a27-card><div class="a27-preview a27-dashboard-ui" aria-hidden="true"><div class="a27-kpis"><i></i><i></i><i></i></div><div class="a27-dash-chart"><span></span><span></span><span></span><span></span><svg viewBox="0 0 180 54"><path d="M4 45 35 32 66 38 99 16 130 24 176 6"></path></svg></div></div><footer><div><b data-editable-path="a27-o3">数据看板</b><span data-editable-path="a27-o3-copy">实时数据 · 筛选联动 · 持续查看</span></div><i class="a27-fit">数据监测</i></footer></article>';
    a27New+='<article class="a27-format-card a27-format-card--motion" data-a27-card><div class="a27-preview a27-motion-ui" aria-hidden="true"><div class="a27-orbit a27-orbit--one"><i></i></div><div class="a27-orbit a27-orbit--two"><i></i></div><div class="a27-motion-core"></div><div class="a27-motion-trail"><i></i><i></i><i></i></div></div><footer><div><b data-editable-path="a27-o4">动态推演</b><span data-editable-path="a27-o4-copy">过程变化 · 空间关系 · 实时演示</span></div><i class="a27-fit">机制呈现</i></footer></article>';
    a27New+='</div></section><button class="a27-replay" type="button" aria-label="重新播放展示容器演示"><span aria-hidden="true">↻</span>演示选择过程</button></section>';
    a27New+='</main>';
    a27Old.outerHTML=a27New;
  }
  var a28Slide=deck.querySelector('section[data-layout="THEME07-087"]');
  var a28Old=a28Slide&&a28Slide.querySelector('main');
  if(a28Old){
    var a28New='';
    a28New+='<main class="a28-studio" data-a28-motion>';
    a28New+='<svg class="a28-flow" viewBox="0 0 1696 814" preserveAspectRatio="none" aria-hidden="true"><path class="a28-flow-base" d="M340 395 C372 395 384 395 414 395 M1260 395 C1282 395 1294 395 1318 395 M1507 396 L1507 418"></path><path class="a28-flow-progress" d="M340 395 C372 395 384 395 414 395 M1260 395 C1282 395 1294 395 1318 395 M1507 396 L1507 418"></path></svg>';
    a28New+='<section class="a28-brief" data-a28-anim="brief"><span class="a28-kicker">01 · 想法与约束</span><h2 data-editable-path="a28-brief-title">先把需求说清楚</h2><p data-editable-path="a28-brief-copy">不必先掌握设计或制作工具，先说明想解决什么问题。</p><div class="a28-brief-list"><span><i>01</i><b>业务目标</b></span><span><i>02</i><b>使用对象</b></span><span><i>03</i><b>核心流程</b></span><span><i>04</i><b>参考风格</b></span></div><div class="a28-prompt" aria-hidden="true"><i></i><i></i><i></i><em>→</em></div></section>';
    a28New+='<section class="a28-prototype-wall" data-a28-anim="prototype"><header><div><span class="a28-kicker">02 · 想法原型</span><h2 data-editable-path="a28-prototype-title">把描述变成可以讨论的方案</h2></div><div class="a28-device-tabs"><span class="is-active">桌面端</span><span>移动端</span><span>交互状态</span></div></header>';
    a28New+='<div class="a28-app-window" aria-label="软件产品原型示意"><div class="a28-app-top"><div class="a28-window-dots"><i></i><i></i><i></i></div><b>项目运营台</b><span>原型预览</span></div><div class="a28-app-body"><aside><div class="a28-brand-mark">A</div><i class="is-active"></i><i></i><i></i><i></i><i></i></aside><main><div class="a28-app-head"><div><small>今天的工作</small><b>项目进展概览</b></div><button>＋ 新建任务</button></div><div class="a28-kpis"><article><span>进行中</span><b>12</b><i></i></article><article><span>本周完成</span><b>28</b><i></i></article><article><span>协作成员</span><b>08</b><i></i></article></div><div class="a28-workspace"><article class="a28-chart-card"><header><b>任务趋势</b><span>近 7 天</span></header><svg viewBox="0 0 430 150" preserveAspectRatio="none"><path class="a28-chart-area" d="M8 135 C65 110 75 120 120 88 S205 100 248 62 S330 78 420 20 L420 145 L8 145 Z"></path><path class="a28-chart-line" d="M8 135 C65 110 75 120 120 88 S205 100 248 62 S330 78 420 20"></path><circle cx="120" cy="88" r="5"></circle><circle cx="248" cy="62" r="5"></circle><circle cx="420" cy="20" r="5"></circle></svg></article><article class="a28-task-card"><header><b>待办任务</b><span>查看全部</span></header><div><i></i><span><b>确认首页信息层级</b><small>今天 16:00</small></span></div><div><i></i><span><b>测试创建流程</b><small>明天 10:00</small></span></div><div><i></i><span><b>整理用户反馈</b><small>周五</small></span></div></article></div></main></div><div class="a28-cursor" aria-hidden="true"><span></span></div></div>';
    a28New+='<div class="a28-mobile-preview" data-a28-phone aria-hidden="true"><div class="a28-phone-notch"></div><header><i></i><b>进展</b><span>•••</span></header><div class="a28-mobile-hero"><small>本周完成</small><b>28</b><i></i></div><div class="a28-mobile-list"><span><i></i><b></b><em></em></span><span><i></i><b></b><em></em></span><span><i></i><b></b><em></em></span></div></div>';
    a28New+='<p class="a28-prototype-note"><span data-editable-path="a28-prototype-copy1">先把想法变成看得见的方案，再结合业务流程，</span><span data-editable-path="a28-prototype-copy2">使用场景和实际反馈判断是否可行。</span></p></section>';
    a28New+='<aside class="a28-review"><article class="a28-review-card" data-a28-anim="review"><span class="a28-kicker">03 · 人来判断</span><h2 data-editable-path="a28-review-title">这个方向值得继续吗？</h2><div class="a28-review-list"><span><i>✓</i><b>信息是否清楚</b></span><span><i>✓</i><b>流程是否顺畅</b></span><span><i>✓</i><b>交互是否自然</b></span></div></article><article class="a28-handoff-card" data-a28-anim="handoff"><span class="a28-kicker">04 · 专业完善</span><h2 data-editable-path="a28-handoff-title">把原型做成最终成果</h2><div class="a28-handoff-tags"><span>视觉规范</span><span>内容完善</span><span>技术实现</span><span>质量把关</span></div><p data-editable-path="a28-handoff-copy">原型降低沟通成本，专业团队负责完善细节和最终质量。</p></article></aside>';
    a28New+='<button class="a28-replay" type="button" aria-label="重新播放想法原型演示"><span aria-hidden="true">↻</span>演示原型过程</button>';
    a28New+='</main>';
    a28Old.outerHTML=a28New;
    var a28Title=a28Slide.querySelector('.method-head h1');
    var a28Lead=a28Slide.querySelector('.method-head p');
    if(a28Title)a28Title.textContent='设计工作：先把想法做成原型，再进行沟通讨论';
    if(a28Lead)a28Lead.textContent='Agent 可以把自然语言描述快速变成想法原型，让方案在投入正式制作前先被看见、讨论和验证。';
  }
  var a29Slide=deck.querySelector('section[data-layout="THEME07-088"]');
  var a29Old=a29Slide&&a29Slide.querySelector('main');
  if(a29Old){
    var a29New='';
    a29New+='<main class="a29-map" data-a29-motion><section class="method-card a29-map-stage">';
    a29New+='<div class="a29-grid-bg" aria-hidden="true"></div><svg class="a29-flow-map" viewBox="0 0 1696 814" preserveAspectRatio="none" aria-hidden="true"><path class="a29-flow-base" d="M430 305 C470 305 486 305 525 305 M430 555 C470 555 486 555 525 555 M1190 405 C1220 405 1235 405 1265 405"></path><path class="a29-flow-progress" d="M430 305 C470 305 486 305 525 305 M430 555 C470 555 486 555 525 555 M1190 405 C1220 405 1235 405 1265 405"></path><circle cx="430" cy="305" r="7"></circle><circle cx="525" cy="305" r="7"></circle><circle cx="430" cy="555" r="7"></circle><circle cx="525" cy="555" r="7"></circle><circle cx="1190" cy="405" r="7"></circle><circle cx="1265" cy="405" r="7"></circle></svg>';
    a29New+='<span class="a29-flow-label a29-flow-label--left">先读取，再写回</span><span class="a29-flow-label a29-flow-label--right">读取最新状态</span>';
    a29New+='<section class="a29-session-panel" data-a29-anim="sessions"><header><span class="a29-kicker">01 · 拆开任务</span><h2 data-editable-path="a29-session-title">长期目标，多个会话</h2><p data-editable-path="a29-session-copy">每个会话只承担一项边界清楚的工作，可以顺序推进，也可以并行执行。</p></header><div class="a29-session-grid"><article data-a29-session><i><b>01</b><span></span></i><div><strong data-editable-path="a29-session1">资料研究</strong><small data-editable-path="a29-session1-copy">查证来源 · 整理材料</small></div></article><article data-a29-session><i><b>02</b><span></span></i><div><strong data-editable-path="a29-session2">内容撰写</strong><small data-editable-path="a29-session2-copy">形成结构 · 完成文稿</small></div></article><article data-a29-session><i><b>03</b><span></span></i><div><strong data-editable-path="a29-session3">视觉设计</strong><small data-editable-path="a29-session3-copy">页面图示 · 交互原型</small></div></article><article data-a29-session><i><b>04</b><span></span></i><div><strong data-editable-path="a29-session4">数据核验</strong><small data-editable-path="a29-session4-copy">复算检查 · 风险提示</small></div></article></div><div class="a29-session-note"><i>↗</i><span data-editable-path="a29-session-note">会话可以结束，任务产物必须回到项目。</span></div></section>';
    a29New+='<section class="a29-context-hub" data-a29-anim="context"><header><span class="a29-kicker">02 · 共享项目资料</span><h2 data-editable-path="a29-context-title">一个项目，共享一套最新资料与进展</h2></header><div class="a29-folder"><div class="a29-folder-tab">'+icon(icons.folder)+'<div><b>长期任务项目</b><span>PROJECT FILES</span></div><em>持续更新</em></div><div class="a29-file-grid"><article data-a29-file><i>MD</i><div><b>项目说明.md</b><span>目标、边界与规则</span></div></article><article data-a29-file><i>MD</i><div><b>当前进展.md</b><span>已完成与下一步</span></div></article><article data-a29-file><i>MD</i><div><b>决策记录.md</b><span>为什么这样做</span></div></article><article data-a29-file><i>MD</i><div><b>任务交接.md</b><span>谁做了什么</span></div></article><article data-a29-file><i>IN</i><div><b>inputs / assets</b><span>输入材料与素材</span></div></article><article data-a29-file><i>OUT</i><div><b>outputs / results</b><span>阶段产物与结果</span></div></article></div><div class="a29-read-write"><span><i>↓</i><b>会话开始前读取</b></span><em>资料持续更新</em><span><i>↑</i><b>任务完成后写回</b></span></div></div><div class="a29-git-strip"><div class="a29-git-label"><b data-editable-path="a29-version-label">版本管理</b><span>保留变化历史</span></div><svg class="a29-git-graph" viewBox="0 0 300 58" aria-label="版本节点分支图"><path class="a29-git-main" d="M12 39 H288"></path><path class="a29-git-branch" d="M76 39 C96 39 94 13 120 13 H212 C238 13 236 39 256 39"></path><circle class="a29-git-node" cx="30" cy="39" r="7"></circle><circle class="a29-git-node" cx="76" cy="39" r="7"></circle><circle class="a29-git-node a29-git-node--branch" cx="120" cy="13" r="7"></circle><circle class="a29-git-node a29-git-node--branch" cx="174" cy="13" r="7"></circle><circle class="a29-git-node a29-git-node--branch" cx="212" cy="13" r="7"></circle><circle class="a29-git-node" cx="256" cy="39" r="7"></circle><circle class="a29-git-node" cx="288" cy="39" r="7"></circle></svg><p data-editable-path="a29-version-copy">知道改了什么，也能回到过去，随意切换分支。</p></div></section>';
    a29New+='<section class="a29-handoff-panel" data-a29-anim="handoff"><header><span class="a29-kicker">03 · 随时接手</span><h2 data-editable-path="a29-handoff-title">新会话从最新状态开始</h2><p data-editable-path="a29-handoff-copy">不用重新解释全部前情，也不用依赖某一个会话的聊天记忆。</p></header><div class="a29-new-session"><div class="a29-new-session-head"><i><b>05</b><span></span></i><div><b>新的工作会话</b><span>已连接项目资料</span></div><em>READY</em></div><div class="a29-check-row"><i>✓</i><div><b>已读取项目说明</b><span>目标和规则保持一致</span></div></div><div class="a29-check-row"><i>✓</i><div><b>已获取当前进展</b><span>知道任务做到哪里</span></div></div><div class="a29-check-row"><i>✓</i><div><b>已确认下一步任务</b><span>直接从最新状态接手</span></div></div></div><div class="a29-handoff-claim"><strong data-editable-path="a29-claim">把任务拆开，把关键过程记录下来，把产物汇总起来。</strong></div></section>';
    a29New+='<button class="a29-replay" type="button" aria-label="重新播放项目协作流程"><span aria-hidden="true">↻</span>演示协作过程</button>';
    a29New+='</section></main>';
    a29Old.outerHTML=a29New;
  }
  setTimeout(function(){mounted.forEach(function(slide){window.__initEditableText?.(slide);});},0);
  setTimeout(function(){mounted.forEach(function(slide){window.__initEditableText?.(slide);});},900);
  setTimeout(function(){mounted.forEach(function(slide){window.__initEditableText?.(slide);});},1800);
  }
  function setupA24Motion(){
    var slide=deck.querySelector('section[data-layout="THEME07-084"]');
    var stage=slide&&slide.querySelector('[data-a25-motion]');
    if(!slide||!stage||stage.dataset.motionReady==='1'||!window.gsap)return;
    stage.dataset.motionReady='1';
    var progress=stage.querySelector('.a25-route-progress');
    var source=stage.querySelector('[data-a25-anim="source"]');
    var work=stage.querySelector('[data-a25-anim="work"]');
    var finalState=stage.querySelector('[data-a25-anim="final"]');
    var steps=stage.querySelectorAll('[data-a25-anim="step"]');
    var play=function(){
      var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced)return;
      var length=progress&&progress.getTotalLength?progress.getTotalLength():1400;
      window.gsap.killTweensOf([source,work,finalState,steps,progress]);
      var tl=window.gsap.timeline({defaults:{ease:'power3.out'}});
      tl.from(source,{x:-54,opacity:0,duration:.55})
        .fromTo(progress,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:length*.57,duration:.8,ease:'power2.inOut'},'-=.15')
        .from(work,{y:44,scale:.94,opacity:0,duration:.65},'-=.38')
        .from(steps,{y:24,opacity:0,duration:.42,stagger:.14},'-=.25')
        .to(progress,{strokeDashoffset:0,duration:.75,ease:'power2.inOut'},'-=.35')
        .from(finalState,{x:54,opacity:0,duration:.55},'-=.4')
        .from(finalState.querySelector('.method-icon'),{scale:.45,rotation:-16,duration:.55,ease:'back.out(1.7)'},'-=.32');
    };
    stage.querySelector('.a25-replay')?.addEventListener('click',function(event){event.stopPropagation();play();});
    addEventListener('swiss-slide-change',function(event){if(event.detail&&event.detail.slide===slide)play();});
    if(slide.classList.contains('active'))setTimeout(play,80);
  }
  function setupA25Motion(){
    var slide=deck.querySelector('section[data-layout="THEME07-085"]');
    var stage=slide&&slide.querySelector('[data-a26-motion]');
    if(!slide||!stage||stage.dataset.motionReady==='1'||!window.gsap)return;
    stage.dataset.motionReady='1';
    var progress=stage.querySelector('.a26-flow-progress');
    var input=stage.querySelector('[data-a26-anim="input"]');
    var agent=stage.querySelector('[data-a26-anim="agent"]');
    var toolsPanel=stage.querySelector('[data-a26-anim="tools"]');
    var toolChips=stage.querySelectorAll('.a26-tool-chip');
    var outputs=stage.querySelector('[data-a26-anim="outputs"]');
    var outputCards=stage.querySelectorAll('.a26-output-card');
    var bars=stage.querySelectorAll('.a26-mini-bars i');
    var line=stage.querySelector('.a26-mini-line path');
    var audit=slide.querySelector('.a26-human-check');
    var play=function(){
      var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced)return;
      var length=progress&&progress.getTotalLength?progress.getTotalLength():760;
      window.gsap.killTweensOf([progress,input,agent,toolsPanel,toolChips,outputs,outputCards,bars,line,audit]);
      var tl=window.gsap.timeline({defaults:{ease:'power3.out'}});
      tl.from(input,{x:-46,opacity:0,duration:.55})
        .fromTo(progress,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:length*.72,duration:.65,ease:'power2.inOut'},'-=.12')
        .from(agent,{y:36,scale:.95,opacity:0,duration:.62},'-=.32')
        .from(toolsPanel,{y:32,opacity:0,duration:.55},'-=.18')
        .from(toolChips,{y:18,opacity:0,duration:.36,stagger:.11},'-=.34')
        .to(progress,{strokeDashoffset:0,duration:.75,ease:'power2.inOut'},'-=.28')
        .from(outputs,{x:46,opacity:0,duration:.52},'-=.38')
        .from(outputCards,{y:18,opacity:0,duration:.34,stagger:.1},'-=.32')
        .from(bars,{scaleY:0,duration:.42,stagger:.07,ease:'back.out(1.5)'},'-=.25')
        .fromTo(line,{strokeDasharray:120,strokeDashoffset:120},{strokeDashoffset:0,duration:.55,ease:'power2.inOut'},'-=.35')
        .from(audit,{y:24,opacity:0,duration:.5},'-=.2');
    };
    stage.querySelector('.a26-replay')?.addEventListener('click',function(event){event.stopPropagation();play();});
    addEventListener('swiss-slide-change',function(event){if(event.detail&&event.detail.slide===slide)play();});
    if(slide.classList.contains('active'))setTimeout(play,80);
  }
  function setupA26Motion(){
    var slide=deck.querySelector('section[data-layout="THEME07-086"]');
    var stage=slide&&slide.querySelector('[data-a27-motion]');
    if(!slide||!stage||stage.dataset.motionReady==='1'||!window.gsap)return;
    stage.dataset.motionReady='1';
    var source=stage.querySelector('[data-a27-anim="source"]');
    var decision=stage.querySelector('[data-a27-anim="decision"]');
    var wall=stage.querySelector('[data-a27-anim="wall"]');
    var cards=stage.querySelectorAll('[data-a27-card]');
    var route=stage.querySelector('.a27-route-progress');
    var bars=stage.querySelectorAll('.a27-dash-chart>span');
    var webLines=stage.querySelectorAll('.a27-web-body main span');
    var play=function(){
      var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced)return;
      var length=route&&route.getTotalLength?route.getTotalLength():300;
      window.gsap.killTweensOf([source,decision,wall,cards,route,bars,webLines]);
      var tl=window.gsap.timeline({defaults:{ease:'power3.out'}});
      tl.from(source,{x:-44,opacity:0,duration:.52})
        .fromTo(route,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:length*.55,duration:.55,ease:'power2.inOut'},'-=.1')
        .from(decision,{y:34,scale:.96,opacity:0,duration:.58},'-=.28')
        .to(route,{strokeDashoffset:0,duration:.55,ease:'power2.inOut'},'-=.12')
        .from(wall,{x:42,opacity:0,duration:.48},'-=.32')
        .from(cards,{y:24,opacity:0,duration:.38,stagger:.13},'-=.3')
        .from(bars,{scaleY:0,duration:.44,stagger:.07,ease:'back.out(1.5)'},'-=.38')
        .from(webLines,{scaleX:.15,transformOrigin:'left center',duration:.34,stagger:.08},'-=.42');
    };
    stage.querySelector('.a27-replay')?.addEventListener('click',function(event){event.stopPropagation();play();});
    addEventListener('swiss-slide-change',function(event){if(event.detail&&event.detail.slide===slide)play();});
    if(slide.classList.contains('active'))setTimeout(play,80);
  }
  function setupA27Motion(){
    var slide=deck.querySelector('section[data-layout="THEME07-087"]');
    var stage=slide&&slide.querySelector('[data-a28-motion]');
    if(!slide||!stage||stage.dataset.motionReady==='1'||!window.gsap)return;
    stage.dataset.motionReady='1';
    var brief=stage.querySelector('[data-a28-anim="brief"]');
    var prototype=stage.querySelector('[data-a28-anim="prototype"]');
    var review=stage.querySelector('[data-a28-anim="review"]');
    var handoff=stage.querySelector('[data-a28-anim="handoff"]');
    var route=stage.querySelector('.a28-flow-progress');
    var chart=stage.querySelector('.a28-chart-line');
    var area=stage.querySelector('.a28-chart-area');
    var phone=stage.querySelector('[data-a28-phone]');
    var cursor=stage.querySelector('.a28-cursor');
    var play=function(){
      var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced)return;
      var length=route&&route.getTotalLength?route.getTotalLength():240;
      window.gsap.killTweensOf([brief,prototype,review,handoff,route,chart,area,phone,cursor]);
      var tl=window.gsap.timeline({defaults:{ease:'power3.out'}});
      tl.from(brief,{x:-42,opacity:0,duration:.52})
        .fromTo(route,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:length*.7,duration:.5,ease:'power2.inOut'},'-=.08')
        .from(prototype,{y:34,scale:.97,opacity:0,duration:.62},'-=.25')
        .fromTo(chart,{strokeDasharray:520,strokeDashoffset:520},{strokeDashoffset:0,duration:.72,ease:'power2.inOut'},'-=.28')
        .from(area,{opacity:0,duration:.42},'-=.5')
        .from(phone,{x:45,y:24,rotation:4,opacity:0,duration:.55},'-=.42')
        .fromTo(cursor,{x:-95,y:75,opacity:0},{x:0,y:0,opacity:1,duration:.65,ease:'power2.inOut'},'-=.2')
        .to(cursor,{scale:.82,duration:.12,ease:'power1.inOut'}).to(cursor,{scale:1,duration:.18})
        .to(route,{strokeDashoffset:0,duration:.55,ease:'power2.inOut'},'-=.15')
        .from(review,{x:35,opacity:0,duration:.48},'-=.3')
        .from(handoff,{y:28,opacity:0,duration:.48},'-=.18');
    };
    stage.querySelector('.a28-replay')?.addEventListener('click',function(event){event.stopPropagation();play();});
    addEventListener('swiss-slide-change',function(event){if(event.detail&&event.detail.slide===slide)play();});
    if(slide.classList.contains('active'))setTimeout(play,80);
  }
  function setupA28Motion(){
    var slide=deck.querySelector('section[data-layout="THEME07-088"]');
    var stage=slide&&slide.querySelector('[data-a29-motion]');
    if(!slide||!stage||stage.dataset.motionReady==='1'||!window.gsap)return;
    stage.dataset.motionReady='1';
    var sessions=stage.querySelector('[data-a29-anim="sessions"]');
    var sessionCards=stage.querySelectorAll('[data-a29-session]');
    var context=stage.querySelector('[data-a29-anim="context"]');
    var files=stage.querySelectorAll('[data-a29-file]');
    var handoff=stage.querySelector('[data-a29-anim="handoff"]');
    var checks=stage.querySelectorAll('.a29-check-row');
    var route=stage.querySelector('.a29-flow-progress');
    var play=function(){
      var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduced)return;
      var length=route&&route.getTotalLength?route.getTotalLength():440;
      window.gsap.killTweensOf([sessions,sessionCards,context,files,handoff,checks,route]);
      var tl=window.gsap.timeline({defaults:{ease:'power3.out'}});
      tl.from(sessions,{x:-42,opacity:0,duration:.5})
        .from(sessionCards,{y:20,opacity:0,duration:.36,stagger:.1},'-=.28')
        .fromTo(route,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:length*.42,duration:.75,ease:'power2.inOut'},'-=.2')
        .from(context,{y:28,scale:.97,opacity:0,duration:.58},'-=.42')
        .from(files,{y:15,opacity:0,duration:.3,stagger:.08},'-=.3')
        .to(route,{strokeDashoffset:0,duration:.62,ease:'power2.inOut'},'-=.16')
        .from(handoff,{x:42,opacity:0,duration:.5},'-=.35')
        .from(checks,{x:18,opacity:0,duration:.32,stagger:.1},'-=.25');
    };
    stage.querySelector('.a29-replay')?.addEventListener('click',function(event){event.stopPropagation();play();});
    addEventListener('swiss-slide-change',function(event){if(event.detail&&event.detail.slide===slide)play();});
    if(slide.classList.contains('active'))setTimeout(play,80);
  }
  function setupMethodMotions(){setupA24Motion();setupA25Motion();setupA26Motion();setupA27Motion();setupA28Motion();}
  if(document.readyState==='complete')setTimeout(setupMethodMotions,0);else addEventListener('load',setupMethodMotions,{once:true});
})();
