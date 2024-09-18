import{S as w,i}from"./assets/vendor-BRQ76Mty.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="46051041-cf19ab3ef74349fd60d832ede",L="https://pixabay.com/api/";async function u(t,o=1,n=12){const s=`${L}?key=${E}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}catch(e){throw console.error("Error fetching images:",e),e}}function g(t,o){const n=t.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:p,comments:y,downloads:h})=>`
        <div class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img src="${s}" alt="${r}" loading="lazy" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${a}</p>
                <p><strong>Views:</strong> ${p}</p>
                <p><strong>Comments:</strong> ${y}</p>
                <p><strong>Downloads:</strong> ${h}</p>
            </div>
        </div>
    `).join("");o.innerHTML+=n}function $(t){t.innerHTML=""}const b=document.querySelector("#search-form"),l=document.querySelector("#gallery"),m=document.querySelector("#load-more");let c=1,d="";const f=new w(".gallery a");b.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){i.error({title:"Error",message:"Search field cannot be empty!"});return}d=o,c=1,$(l);try{const n=await u(o,c);if(n.length===0){i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(n,l),f.refresh(),m.style.display="block"}catch(n){i.error({title:"Error",message:"Something went wrong while fetching images."}),console.error("Error:",n)}});m.addEventListener("click",async()=>{c+=1;try{const t=await u(d,c);g(t,l),f.refresh()}catch(t){i.error({title:"Error",message:"Failed to load more images."}),console.error("Error:",t)}});
//# sourceMappingURL=index.js.map
