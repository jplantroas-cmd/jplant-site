(function(){var b=document.querySelector('.more-btn'),g=document.getElementById('more-results');if(!b)return;
b.addEventListener('click',function(){var open=g.classList.toggle('open');b.setAttribute('aria-expanded',open);b.textContent=open?'Show fewer':'See all 25 results';if(!open)g.scrollIntoView({behavior:'smooth',block:'start'});});})();
