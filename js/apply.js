(function(){
  var q=document.getElementById('qualify'), a=document.getElementById('apply');
  var val=function(f,k){var e=f.querySelector('input[name="'+k+'"]:checked');return e?e.value:'';};
  var label=function(f,k){var e=f.querySelector('input[name="'+k+'"]:checked');return e?e.nextElementSibling.firstChild.textContent:'';};
  var show=function(id){q.hidden=true;document.getElementById('intro').hidden=true;document.getElementById(id).hidden=false;window.scrollTo({top:0,behavior:'smooth'});};
  q.addEventListener('submit',function(e){
    e.preventDefault();
    var err=document.getElementById('err');
    if(!q.checkValidity()){err.hidden=false;err.scrollIntoView({behavior:'smooth',block:'center'});return;}
    err.hidden=true;
    if(val(q,'where')==='intl'){document.getElementById('nofit-why').textContent='Right now we only work with businesses in the USA.';return show('nofit');}
    if(val(q,'ad_budget')==='0'){document.getElementById('nofit-why').textContent='Our offers start at $1,000 a month in ad spend. Below that, there isn’t enough room for ads to find your customers.';return show('nofit');}
    var best=val(q,'biz').split('-')[0], offers=document.querySelectorAll('#pricing .offer[data-offer]');
    for(var i=0;i<offers.length;i++){offers[i].hidden=offers[i].getAttribute('data-offer')!==best;}
    a.querySelector('input[name="offer"]').value=best.charAt(0).toUpperCase()+best.slice(1);
    show('pricing');
  });
  a.addEventListener('submit',function(e){
    e.preventDefault();
    var err=document.getElementById('err2');
    if(!a.checkValidity()){err.hidden=false;err.scrollIntoView({behavior:'smooth',block:'center'});return;}
    err.hidden=true;
    var d=new FormData(a), g=function(k){return (d.get(k)||'').toString().trim();};
    var body=['Name: '+g('name'),'Business: '+g('business'),'Email: '+g('email'),'Website/IG: '+(g('link')||'-'),'',
      'Offer wanted: '+g('offer'),'Business type: '+label(q,'biz'),'Monthly ad budget: '+label(q,'ad_budget'),
      'Meta tracking: '+label(q,'tracking'),'Run ads before: '+label(q,'experience'),'',
      'What we sell: '+(g('sell')||'-')].join('\n');
    location.href='mailto:jplantroas@gmail.com?subject='+encodeURIComponent('Application: '+g('business')+' ('+g('offer')+')')+'&body='+encodeURIComponent(body);
    document.getElementById('pricing').hidden=true; document.getElementById('done').hidden=false; window.scrollTo({top:0,behavior:'smooth'});
  });
})();
