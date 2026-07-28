(function(){
  var slideId='theme07_page092-20';
  var order=[
    ['theme07_page002','theme07_page002-1'],['theme07_page007','theme07_page007-2'],['theme07_page016','theme07_page016-3'],
    ['theme07_page065','theme07_page065-4'],['theme07_page066','theme07_page066-5'],['theme07_page067','theme07_page067-6'],
    ['theme07_page068','theme07_page068-7'],['theme07_page069','theme07_page069-8'],['theme07_page070','theme07_page070-9'],
    ['theme07_page091','theme07_page091-10'],['theme07_page071','theme07_page071-11'],['theme07_page072','theme07_page072-12'],
    ['theme07_page059','theme07_page059-13'],['theme07_page073','theme07_page073-14'],['theme07_page074','theme07_page074-15'],
    ['theme07_page075','theme07_page075-16'],['theme07_page076','theme07_page076-17'],['theme07_page077','theme07_page077-18'],
    ['theme07_page078','theme07_page078-19'],['theme07_page092',slideId],['theme07_page079','theme07_page079-21'],
    ['theme07_page080','theme07_page080-22'],['theme07_page093','theme07_page093-23'],['theme07_page081','theme07_page081-24'],
    ['theme07_page082','theme07_page082-25'],['theme07_page083','theme07_page083-26'],['theme07_page084','theme07_page084-27'],
    ['theme07_page085','theme07_page085-28'],['theme07_page086','theme07_page086-29'],['theme07_page087','theme07_page087-30'],
    ['theme07_page088','theme07_page088-31'],['theme07_page089','theme07_page089-32'],['theme07_page090','theme07_page090-33']
  ];
  var props={
    title:'连接、方法、分工：看懂 WorkBuddy 的能力组合',
    lead:'同一项任务，既要接入外部服务，也要有做事方法，还可能需要多位专家协作。',
    cards:['连接器｜主要对应 MCP','技能｜直接对应 Skills','专家团｜概念相近 主 Agent + Subagent'],
    conclusion:'连接器解决“能接什么”，技能解决“怎样做”，专家团解决“谁来分工完成”。',
    accentColor:'#176BFF'
  };
  function syncModel(){
    var modelEl=document.getElementById('deck-view-model');if(!modelEl)return;
    try{
      var model=JSON.parse(modelEl.textContent);model.slides=model.slides||[];
      var deck=document.getElementById('deck');
      var byLayout={};model.slides.forEach(function(slide){if(slide&&slide.layout)byLayout[slide.layout]=slide;});
      order.forEach(function(item){
        var slide=byLayout[item[0]];
        if(!slide&&deck){
          var dom=deck.querySelector('section[data-vm-layout="'+item[0]+'"]');
          if(dom){slide={id:item[1],key:item[0],layout:item[0],dataLayout:dom.getAttribute('data-layout')||item[0].toUpperCase().replace('PAGE',''),themePack:'theme07',label:dom.getAttribute('data-label')||'',props:{title:dom.getAttribute('data-label')||''},media:{}};model.slides.push(slide);byLayout[item[0]]=slide;}
        }
        if(slide)slide.id=item[1];
      });
      var page=byLayout.theme07_page092;
      if(!page){page={id:slideId,key:'theme07_page092',layout:'theme07_page092',dataLayout:'THEME07-092',themePack:'theme07',label:props.title,props:props,media:{}};model.slides.push(page);}
      else{page.id=slideId;page.label=props.title;page.props=Object.assign({},page.props||{},props);}
      var byId={};model.slides.forEach(function(slide){if(slide&&slide.id)byId[slide.id]=slide;});
      var ids=order.map(function(item){return item[1];});
      model.slides=ids.map(function(id){return byId[id];}).filter(Boolean);
      model.state=model.state||{};model.state.slideOrder=ids.filter(function(id){return !!byId[id];});
      modelEl.textContent=JSON.stringify(model);
    }catch(e){console.warn('A-20 WorkBuddy capability map model sync skipped',e);}
  }
  function addSlide(){
    var deck=document.getElementById('deck');if(!deck)return;
    if(deck.querySelector('section[data-vm-layout="theme07_page092"]'))return;
    var html=`<section class="slide imported-theme-slide" data-layout="THEME07-092" data-vm-slide-id="theme07_page092-20" data-vm-slide-key="theme07_page092" data-vm-layout="theme07_page092" data-vm-index="19" data-theme-pack="theme07" data-label="连接、方法、分工：看懂 WorkBuddy 的能力组合">
      <div class="a20-map-page">
        <header class="a20-map-head"><h1 data-editable-path="a20-map-title">连接、方法、分工：看懂 WorkBuddy 的能力组合</h1><p data-editable-path="a20-map-lead">同一项任务，既要接入外部服务，也要有做事方法，还可能需要多位专家协作。</p></header>
        <main class="a20-map-grid">
          <article class="a20-map-card a20-map-card--connector"><div class="a20-map-top"><span class="a20-map-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.2 14.8-1.5 1.5a4 4 0 0 1-5.7-5.7l3.1-3.1a4 4 0 0 1 5.7 0"></path><path d="m14.8 9.2 1.5-1.5a4 4 0 0 1 5.7 5.7l-3.1 3.1a4 4 0 0 1-5.7 0"></path><path d="m8.5 15.5 7-7"></path></svg></span><div class="a20-map-name"><small>WorkBuddy 概念</small><h2 data-editable-path="a20-map-connector-title">连接器</h2></div></div><p class="a20-map-purpose" data-editable-path="a20-map-connector-purpose">把外部服务接进任务</p><p class="a20-map-copy" data-editable-path="a20-map-connector-copy">让 WorkBuddy 在授权范围内读取数据或调用服务。</p><div class="a20-map-examples"><span>腾讯文档</span><span>邮箱</span><span>会议</span><span>知识库</span></div><div class="a20-map-link"><div class="a20-map-rel-bridge"><span class="a20-map-rel-icon"><svg viewBox="0 0 24 24"><path d="M8 4v16M5 7l3-3 3 3M16 20V4M13 17l3 3 3-3"></path></svg></span><em class="a20-map-relation">主要对应</em></div><span class="a20-map-concept-label">通用概念</span><b class="a20-map-concept">MCP</b><small class="a20-map-note">连接器也可能由 Skill + CLI 实现</small></div></article>
          <article class="a20-map-card a20-map-card--skill"><div class="a20-map-top"><span class="a20-map-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"></rect><path d="M7 9h7M7 13h5"></path><path d="m14.5 16 1.8 1.8 3.2-3.6"></path></svg></span><div class="a20-map-name"><small>WorkBuddy 概念</small><h2 data-editable-path="a20-map-skill-title">技能</h2></div></div><p class="a20-map-purpose" data-editable-path="a20-map-skill-purpose">把做法封装成可复用能力</p><p class="a20-map-copy" data-editable-path="a20-map-skill-copy">把脚本、工作流和任务规则组合起来，按需调用。</p><div class="a20-map-examples"><span>PPT 制作</span><span>自动报表</span><span>文件处理</span></div><div class="a20-map-link"><div class="a20-map-rel-bridge"><span class="a20-map-rel-icon"><svg viewBox="0 0 24 24"><path d="M8 4v16M5 7l3-3 3 3M16 20V4M13 17l3 3 3-3"></path></svg></span><em class="a20-map-relation">直接对应</em></div><span class="a20-map-concept-label">通用概念</span><b class="a20-map-concept">Skills</b><small class="a20-map-note">同一个概念在产品中的具体入口</small></div></article>
          <article class="a20-map-card a20-map-card--team"><div class="a20-map-top"><span class="a20-map-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"></circle><circle cx="5.5" cy="10" r="2"></circle><circle cx="18.5" cy="10" r="2"></circle><path d="M7 20a5 5 0 0 1 10 0M2.5 19a3.5 3.5 0 0 1 4.5-3.3M21.5 19a3.5 3.5 0 0 0-4.5-3.3"></path></svg></span><div class="a20-map-name"><small>WorkBuddy 概念</small><h2 data-editable-path="a20-map-team-title">专家团</h2></div></div><p class="a20-map-purpose" data-editable-path="a20-map-team-purpose">把复杂任务交给多位专家协作</p><p class="a20-map-copy" data-editable-path="a20-map-team-copy">团长自动拆解和分配，团员并行执行，最后整合交付。</p><div class="a20-map-examples"><span>运营</span><span>设计</span><span>数据</span><span>开发</span></div><div class="a20-map-link"><div class="a20-map-rel-bridge"><span class="a20-map-rel-icon"><svg viewBox="0 0 24 24"><path d="M8 4v16M5 7l3-3 3 3M16 20V4M13 17l3 3 3-3"></path></svg></span><em class="a20-map-relation">概念相近</em></div><span class="a20-map-concept-label">通用概念</span><b class="a20-map-concept">主 Agent + Subagent</b><small class="a20-map-note">产品中的多 Agent 协作机制</small></div></article>
        </main>
        <footer class="a20-map-claim"><div><b>连接器</b><span>能接什么</span></div><div><b>技能</b><span>怎样做</span></div><div><b>专家团</b><span>谁来分工完成</span></div></footer>
      </div>
    </section>`;
    var previous=deck.querySelector('section[data-vm-layout="theme07_page078"]');
    if(previous)previous.insertAdjacentHTML('afterend',html);else deck.insertAdjacentHTML('beforeend',html);
  }
  function syncDom(){
    var deck=document.getElementById('deck');if(!deck)return;
    var byLayout={};deck.querySelectorAll(':scope > section[data-vm-layout]').forEach(function(slide){byLayout[slide.getAttribute('data-vm-layout')]=slide;});
    order.forEach(function(item,index){var slide=byLayout[item[0]];if(!slide)return;slide.setAttribute('data-vm-slide-id',item[1]);slide.setAttribute('data-vm-index',String(index));deck.appendChild(slide);});
    var page=byLayout.theme07_page092;if(page)window.__initEditableText?.(page);
  }
  function run(){syncModel();addSlide();syncDom();syncModel();}
  run();setTimeout(run,0);setTimeout(run,1000);
})();
