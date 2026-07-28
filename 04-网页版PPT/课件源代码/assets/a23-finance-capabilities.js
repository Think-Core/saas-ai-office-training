(function(){
  var slideId='theme07_page093-23';
  var order=[
    ['theme07_page002','theme07_page002-1'],['theme07_page007','theme07_page007-2'],['theme07_page016','theme07_page016-3'],
    ['theme07_page065','theme07_page065-4'],['theme07_page066','theme07_page066-5'],['theme07_page067','theme07_page067-6'],
    ['theme07_page068','theme07_page068-7'],['theme07_page069','theme07_page069-8'],['theme07_page070','theme07_page070-9'],
    ['theme07_page091','theme07_page091-10'],['theme07_page071','theme07_page071-11'],['theme07_page072','theme07_page072-12'],
    ['theme07_page059','theme07_page059-13'],['theme07_page073','theme07_page073-14'],['theme07_page074','theme07_page074-15'],
    ['theme07_page075','theme07_page075-16'],['theme07_page076','theme07_page076-17'],['theme07_page077','theme07_page077-18'],
    ['theme07_page078','theme07_page078-19'],['theme07_page092','theme07_page092-20'],['theme07_page079','theme07_page079-21'],
    ['theme07_page080','theme07_page080-22'],['theme07_page093',slideId],['theme07_page081','theme07_page081-24'],
    ['theme07_page082','theme07_page082-25'],['theme07_page083','theme07_page083-26'],['theme07_page084','theme07_page084-27'],
    ['theme07_page085','theme07_page085-28'],['theme07_page086','theme07_page086-29'],['theme07_page087','theme07_page087-30'],
    ['theme07_page088','theme07_page088-31'],['theme07_page089','theme07_page089-32'],['theme07_page090','theme07_page090-33']
  ];
  var props={
    title:'金融数据怎样接入 Agent？',
    lead:'',
    platforms:['通达信 MCP','问财 SkillHub / iFinD MCP / iFinD 数据接口','东方财富妙想 Skills','Wind AIFin Market / 金融 Skills'],
    conclusion:'MCP 连接数据和工具；Skills 封装研究流程；API 支持程序化取数。',
    accentColor:'#176BFF'
  };
  function syncModel(){
    var el=document.getElementById('deck-view-model');if(!el)return;
    try{
      var model=JSON.parse(el.textContent);model.slides=model.slides||[];
      var deck=document.getElementById('deck');var byLayout={};
      model.slides.forEach(function(s){if(s&&s.layout)byLayout[s.layout]=s;});
      order.forEach(function(item){
        var s=byLayout[item[0]];
        if(!s&&deck){var dom=deck.querySelector('section[data-vm-layout="'+item[0]+'"]');if(dom){s={id:item[1],key:item[0],layout:item[0],dataLayout:dom.getAttribute('data-layout')||item[0].toUpperCase(),themePack:'theme07',label:dom.getAttribute('data-label')||'',props:{title:dom.getAttribute('data-label')||''},media:{}};model.slides.push(s);byLayout[item[0]]=s;}}
        if(s)s.id=item[1];
      });
      var page=byLayout.theme07_page093;
      if(!page){page={id:slideId,key:'theme07_page093',layout:'theme07_page093',dataLayout:'THEME07-093',themePack:'theme07',label:props.title,props:props,media:{}};model.slides.push(page);}
      else{page.id=slideId;page.label=props.title;page.props=Object.assign({},page.props||{},props);}
      var byId={};model.slides.forEach(function(s){if(s&&s.id)byId[s.id]=s;});
      var ids=order.map(function(item){return item[1];});
      model.slides=ids.map(function(id){return byId[id];}).filter(Boolean);
      model.state=model.state||{};model.state.slideOrder=ids.filter(function(id){return !!byId[id];});
      el.textContent=JSON.stringify(model);
    }catch(e){console.warn('A-23 finance capability model sync skipped',e);}
  }
  function card(cls,color,img,name,sub,tags,products,copy){
    return '<article class="a23-fin-card '+cls+'" style="--brand:'+color+'"><div class="a23-fin-brand"><img class="a23-fin-logo" src="'+img+'" alt="'+name+' Logo"><div><h2>'+name+'</h2><small>'+sub+'</small></div><div class="a23-fin-tags">'+tags.map(function(x){return '<span class="a23-fin-tag">'+x+'</span>';}).join('')+'</div></div><div class="a23-fin-products">'+products.map(function(x){return '<span class="a23-fin-product">'+x+'</span>';}).join('')+'</div><p>'+copy+'</p></article>';
  }
  function addSlide(){
    var deck=document.getElementById('deck');if(!deck||deck.querySelector('section[data-vm-layout="theme07_page093"]'))return;
    var plug='<svg viewBox="0 0 24 24"><path d="M8 12h8M9 5v4M15 5v4M7 9h10v3a5 5 0 0 1-5 5v3"></path></svg>';
    var skill='<svg viewBox="0 0 24 24"><path d="M12 3l2.2 4.5L19 9l-3.5 3.4.8 4.8L12 15l-4.3 2.2.8-4.8L5 9l4.8-1.5z"></path></svg>';
    var api='<svg viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"></path></svg>';
    var html='<section class="slide imported-theme-slide" data-layout="THEME07-093" data-vm-slide-id="'+slideId+'" data-vm-slide-key="theme07_page093" data-vm-layout="theme07_page093" data-vm-index="22" data-theme-pack="theme07" data-label="'+props.title+'"><div class="a23-fin-page"><header class="a23-fin-head"><h1 data-editable-path="a23-fin-title">'+props.title+'</h1></header><main class="a23-fin-grid">'+
      card('a23-fin-card--tdx','#e8322f','assets/finance-logo-tdx.jpg','通达信','财富趋势',['MCP'],['通达信 MCP'],'让 Agent 连接行情、财务与市场数据。')+
      card('a23-fin-card--ths','#d71920','assets/finance-logo-ifind.jpg','同花顺','问财 · iFinD',['Skills','MCP','API'],['问财 SkillHub','iFinD MCP','iFinD 数据接口'],'覆盖自然语言查询、投研技能与程序化取数。')+
      card('a23-fin-card--eastmoney','#f05a22','assets/finance-logo-eastmoney.jpg','东方财富','妙想',['Skills'],['妙想 Skills'],'把金融数据与投研流程封装成可调用技能。')+
      card('a23-fin-card--wind','#d92c32','assets/finance-logo-wind.jpg','Wind','AIFin Market',['MCP','Skills'],['AIFin Market','Wind 金融 Skills'],'通过能力市场接入金融数据与研究工具。')+
      '</main><footer><div class="a23-fin-legend"><div class="a23-fin-legend-item"><i class="a23-fin-legend-icon">'+plug+'</i><b>MCP</b><span>连接数据和工具</span></div><div class="a23-fin-legend-item"><i class="a23-fin-legend-icon">'+skill+'</i><b>Skills</b><span>封装研究流程</span></div><div class="a23-fin-legend-item"><i class="a23-fin-legend-icon">'+api+'</i><b>API</b><span>支持程序化取数</span></div></div></footer></div></section>';
    var prev=deck.querySelector('section[data-vm-layout="theme07_page080"]');
    if(prev)prev.insertAdjacentHTML('afterend',html);else deck.insertAdjacentHTML('beforeend',html);
  }
  function syncDom(){
    var deck=document.getElementById('deck');if(!deck)return;var byLayout={};
    deck.querySelectorAll(':scope > section[data-vm-layout]').forEach(function(s){byLayout[s.getAttribute('data-vm-layout')]=s;});
    order.forEach(function(item,index){var s=byLayout[item[0]];if(!s)return;s.setAttribute('data-vm-slide-id',item[1]);s.setAttribute('data-vm-index',String(index));deck.appendChild(s);});
    var page=byLayout.theme07_page093;if(page)window.__initEditableText?.(page);
  }
  function run(){syncModel();addSlide();syncDom();syncModel();}
  run();setTimeout(run,0);setTimeout(run,1000);
})();
