(function(){var f=document.getElementById('calc');if(!f)return;var o=document.getElementById('calc-out');
var CPA=parseFloat(f.dataset.cpa),R=parseFloat(f.dataset.roas);
function $(n){return '$'+Math.round(n).toLocaleString('en-US')}
function v(id,d){var x=parseFloat(document.getElementById(id).value);return x>0?x:d}
function run(){var s=v('c-sales',0),p=v('c-price',0),r=R;var rev=s*p,bud=rev/r;
o.innerHTML='<div class="stat-row"><div><b>'+$(rev)+'</b><span>sales goal</span></div><div><b>'+$(bud)+'</b><span>ad budget at our '+r+'X average</span></div><div><b>'+(s?'$'+(bud/s).toFixed(2):'$0')+'</b><span>ad cost per sale</span></div><div><b>$'+CPA.toFixed(2)+'</b><span>our real average cost per purchase</span></div></div>';}
f.addEventListener('input',run);run();})();
