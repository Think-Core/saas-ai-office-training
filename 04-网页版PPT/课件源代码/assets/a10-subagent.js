(function(){
  var slideId='theme07_page091-10';
  var orderedIds=[
    'theme07_page002-1','theme07_page007-2','theme07_page016-3','theme07_page065-4','theme07_page066-5','theme07_page067-6','theme07_page068-7','theme07_page069-8','theme07_page070-9',slideId,
    'theme07_page071-11','theme07_page072-12','theme07_page059-13','theme07_page073-14','theme07_page074-15','theme07_page075-16','theme07_page076-17','theme07_page077-18','theme07_page078-19','theme07_page092-20','theme07_page079-21','theme07_page080-22','theme07_page093-23','theme07_page081-24','theme07_page082-25','theme07_page083-26','theme07_page084-27','theme07_page085-28','theme07_page086-29','theme07_page087-30','theme07_page088-31','theme07_page089-32','theme07_page090-33'
  ];
  function addModel(){
    var modelEl=document.getElementById('deck-view-model');
    if(!modelEl)return;
    try{
      var model=JSON.parse(modelEl.textContent);
      model.slides=model.slides||[];
      if(!model.slides.some(function(slide){return slide&&slide.id===slideId;})){
        model.slides.push({id:slideId,key:'theme07_page091',layout:'theme07_page091',dataLayout:'THEME07-091',themePack:'theme07',label:'分身有术：让主 Agent 学会分工',props:{title:'分身有术：让主 Agent 学会分工',lead:'Subagent（子 Agent）在独立上下文中完成一个边界清楚的子任务，再把结果交回主 Agent。'},media:{}});
      }
      var byId={};model.slides.forEach(function(slide){if(slide&&slide.id)byId[slide.id]=slide;});
      model.slides=orderedIds.map(function(id){return byId[id];}).filter(Boolean);
      model.state=model.state||{};
      model.state.slideOrder=orderedIds.filter(function(id){return !!byId[id];});
      modelEl.textContent=JSON.stringify(model);
    }catch(e){console.warn('A-10 Subagent model bootstrap skipped',e);}
  }
  function addSlide(){
    var deck=document.getElementById('deck');
    if(!deck||deck.querySelector('section[data-vm-slide-id="'+slideId+'"]'))return;
    var html=`<section class="slide imported-theme-slide" data-layout="THEME07-091" data-vm-slide-id="theme07_page091-10" data-vm-slide-key="theme07_page091" data-vm-layout="theme07_page091" data-vm-index="9" data-theme-pack="theme07" data-label="分身有术：让主 Agent 学会分工">
      <div class="a10-subagent-page">
        <header class="a10-subagent-head">
          <h1 data-editable-path="a10-title">分身有术：让主 Agent 学会分工</h1>
          <p data-editable-path="a10-lead-v3"><strong>Subagent（子 Agent）</strong>：由主 Agent 根据任务自动创建或调用子Agent，并在独立的上下文中完成边界清楚的任务后返回结果给主Agent。</p>
        </header>
        <section class="a10-subagent-board" aria-label="主 Agent 调度三个子 Agent 的关系图">
          <div class="a10-subagent-goal"><span class="a10-subagent-goal-label">用户目标</span><b data-editable-path="a10-goal">准备一份月度经营分析</b><span data-editable-path="a10-parallel-question-v2">主Agent 先判断：哪些工作可以独立并行完成；</span></div>
          <article class="a10-subagent-manager">
            <div class="a10-role-top"><span class="a10-agent-mark" aria-hidden="true"></span><div><h2 data-editable-path="a10-manager-title">主 Agent｜任务负责人</h2></div></div>
            <div class="a10-manager-list"><p data-editable-path="a10-manager-1">理解总目标与边界</p><p data-editable-path="a10-manager-dispatch">自动创建子 Agent，派发任务</p><p data-editable-path="a10-manager-3">汇总结果、处理冲突、最终交付</p></div>
            <div class="a10-manager-owner" data-editable-path="a10-manager-owner">始终对最终结果负责</div>
          </article>
          <div class="a10-subagent-trunk" aria-hidden="true"></div><span class="a10-parallel-label">可并行</span>
          <div class="a10-worker-stack">
            <article class="a10-worker"><span class="a10-worker-no">01</span><h3 data-editable-path="a10-worker-1-title">资料研究子 Agent</h3><p data-editable-path="a10-worker-1-copy">查找政策、市场与内部材料，提炼与任务相关的证据。</p><small data-editable-path="a10-worker-1-meta">独立上下文 · 返回证据与摘要</small></article>
            <article class="a10-worker"><span class="a10-worker-no">02</span><h3 data-editable-path="a10-worker-2-title">数据核对子 Agent</h3><p data-editable-path="a10-worker-2-copy">检查指标口径、计算过程和异常数据，形成可复核结论。</p><small data-editable-path="a10-worker-2-meta">独立上下文 · 返回表格与结论</small></article>
            <article class="a10-worker"><span class="a10-worker-no">03</span><h3 data-editable-path="a10-worker-3-title">内容审校子 Agent</h3><p data-editable-path="a10-worker-3-copy">检查结构、表达、遗漏和风险点，提出修改建议。</p><small data-editable-path="a10-worker-3-meta">独立上下文 · 返回问题与建议</small></article>
          </div>
          <div class="a10-return-strip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 7v4a4 4 0 0 1-4 4H5"></path><path d="m9 11-4 4 4 4"></path></svg><span data-editable-path="a10-return">子 Agent 交回摘要和产物，主 Agent 统一判断、整合与交付</span></div>
        </section>
        <aside class="a10-subagent-judgement">
          <section class="a10-when-card"><h2 data-editable-path="a10-when-title">什么场景适合用？</h2><div class="a10-when-list">
            <article class="a10-when-item"><b data-editable-path="a10-when-1-title">任务能拆开</b><span data-editable-path="a10-when-1-copy">研究、核对、审校等工作彼此独立，可以并行推进。</span></article>
            <article class="a10-when-item"><b data-editable-path="a10-when-2-title">过程信息很多</b><span data-editable-path="a10-when-2-copy">要读大量文件、网页、日志，只需把关键结果带回主对话。</span></article>
            <article class="a10-when-item"><b data-editable-path="a10-when-3-title">需要专业分工</b><span data-editable-path="a10-when-3-copy">不同子任务需要不同规则、工具或权限边界。</span></article>
          </div></section>
          <section class="a10-not-card"><h2 data-editable-path="a10-not-title">什么时候先不用？</h2><p data-editable-path="a10-not-copy">只是改一句话、查一个数字，或子任务彼此强依赖、需要频繁来回确认时，主 Agent 直接完成通常更简单。</p></section>
          <section class="a10-takeaway"><p data-editable-path="a10-takeaway-v2">子 Agent 只返回关键结果，避免大量过程信息干扰主 Agent 的判断和执行。</p></section>
        </aside>
        <footer class="a10-capability-rail"><div><b>MCP</b><span>接入工具与数据</span></div><div><b>Skills</b><span>沉淀方法与规则</span></div><div class="is-current"><b>Subagent</b><span>拆分角色与任务</span></div></footer>
      </div>
    </section>`;
    var previous=deck.querySelector('section[data-vm-slide-id="theme07_page070-9"]');
    if(previous)previous.insertAdjacentHTML('afterend',html);else deck.insertAdjacentHTML('beforeend',html);
  }
  function refreshSlideCopy(slide){
    if(!slide)return;
    var lead=slide.querySelector('.a10-subagent-head p');
    if(lead){lead.setAttribute('data-editable-path','a10-lead-v3');lead.innerHTML='<strong>Subagent（子 Agent）</strong>：由主 Agent 根据任务自动创建或调用子Agent，并在独立的上下文中完成边界清楚的任务后返回结果给主Agent。';}
    var goalNote=slide.querySelector('.a10-subagent-goal span:last-child');
    if(goalNote){goalNote.setAttribute('data-editable-path','a10-parallel-question-v2');goalNote.textContent='主Agent 先判断：哪些工作可以独立并行完成；';}
    var duties=slide.querySelectorAll('.a10-manager-list p');
    if(duties[1]){duties[1].setAttribute('data-editable-path','a10-manager-dispatch');duties[1].textContent='自动创建子 Agent，派发任务';}
    var takeaway=slide.querySelector('.a10-takeaway p');
    if(takeaway){takeaway.setAttribute('data-editable-path','a10-takeaway-v2');takeaway.textContent='子 Agent 只返回关键结果，避免大量过程信息干扰主 Agent 的判断和执行。';}
  }
  function syncDomOrder(){
    var deck=document.getElementById('deck');if(!deck)return;
    var byId={};deck.querySelectorAll(':scope > section[data-vm-slide-id]').forEach(function(slide){byId[slide.dataset.vmSlideId]=slide;});
    orderedIds.forEach(function(id,index){var slide=byId[id];if(!slide)return;slide.dataset.vmIndex=String(index);deck.appendChild(slide);});
    var slide=byId[slideId];if(slide){refreshSlideCopy(slide);window.__initEditableText?.(slide);refreshSlideCopy(slide);}
  }
  addModel();addSlide();syncDomOrder();
  setTimeout(function(){addModel();addSlide();syncDomOrder();},0);
  setTimeout(function(){addModel();addSlide();syncDomOrder();},900);
})();
