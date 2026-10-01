document.getElementById('apply').addEventListener('submit',function(e){
  e.preventDefault();
  var f=e.target, err=document.getElementById('err');
  if(!f.checkValidity()){err.hidden=false;err.scrollIntoView({behavior:'smooth',block:'center'});return;}
  err.hidden=true;
  var d=new FormData(f), g=function(k){return (d.get(k)||'').toString().trim();};
  var body=['Name: '+g('name'),'Business: '+g('business'),'Email: '+g('email'),'Website/IG: '+(g('link')||'-'),'',
    'Run ads before: '+g('experience'),'Monthly ad budget: '+g('ad_budget'),'Budget for a partner: '+g('mgmt_budget'),'',
    'What we sell: '+(g('sell')||'-')].join('\n');
  location.href='mailto:jplantroas@gmail.com?subject='+encodeURIComponent('Application: '+g('business'))+'&body='+encodeURIComponent(body);
  f.hidden=true; document.getElementById('done').hidden=false; window.scrollTo({top:0,behavior:'smooth'});
});
