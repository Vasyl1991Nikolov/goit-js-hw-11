import{S as E,i}from"./assets/vendor-BRQ76Mty.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const $="46051041-cf19ab3ef74349fd60d832ede",b="https://pixabay.com/api/";async function u(r,o=1){const n=await fetch(`${b}?key=${$}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=12`);if(!n.ok)throw new Error("Failed to fetch images");return(await n.json()).hits}function f(r,o){const n=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:h,comments:w,downloads:L})=>`
        <div class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img src="${s}" alt="${t}" loading="lazy" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${a}</p>
                <p><strong>Views:</strong> ${h}</p>
                <p><strong>Comments:</strong> ${w}</p>
                <p><strong>Downloads:</strong> ${L}</p>
            </div>
        </div>
    `).join("");o.innerHTML+=n}function S(r){r.innerHTML=""}function m(){document.getElementById("loader").style.display="flex"}function c(){document.getElementById("loader").style.display="none"}const v=document.querySelector("#search-form"),d=document.querySelector("#gallery"),g=document.querySelector("#load-more");let l=1,y="";const p=new E(".gallery a");v.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(!o){i.error({title:"Error",message:"Search field cannot be empty!"});return}y=o,l=1,S(d),m();try{const n=await u(o,l);if(n.length===0){i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}f(n,d),p.refresh(),g.style.display="block"}catch(n){i.error({title:"Error",message:"Something went wrong while fetching images."}),console.error("Error:",n)}finally{c()}});g.addEventListener("click",async()=>{l+=1,m();try{const r=await u(y,l);f(r,d),p.refresh()}catch(r){i.error({title:"Error",message:"Failed to load more images."}),console.error("Error:",r)}finally{c()}});
//# sourceMappingURL=index.js.map
