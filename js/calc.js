(function(){var f=document.getElementById('calc');if(!f)return;var o=document.getElementById('calc-out');
var B=parseFloat(f.dataset.blended),M=parseFloat(f.dataset.median);
function $(n){return '$'+Math.round(n).toLocaleString('en-US')}
function run(){var t=parseFloat(document.getElementById('c-tix').value)||0,p=parseFloat(document.getElementById('c-price').value)||0,k=parseFloat(document.getElementById('c-per').value)||1;
var rev=t*p,orders=t/k;
o.innerHTML='<div class="stat-row"><div><b>'+$(rev)+'</b><span>ticket revenue goal</span></div><div><b>'+$(rev/B)+'</b><span>safe ad budget ('+B+'X)</span></div><div><b>'+$(rev/M)+'</b><span>strong ad budget ('+M+'X)</span></div><div><b>'+$(rev/B/Math.max(orders,1))+'</b><span>ad cost per order (safe)</span></div></div>';}
f.addEventListener('input',run);run();})();
