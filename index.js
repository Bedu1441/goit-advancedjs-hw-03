import{a as f,S as u,i as o}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y="55691735-3ea2edc83d49145f84f9678df",d="https://pixabay.com/api/";async function g(a){const r={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(d,{params:r})).data}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="gallery-info">
            <p class="gallery-info-item">
              <span class="gallery-info-title">Likes</span>
              <span class="gallery-info-value">${t.likes}</span>
            </p>
            <p class="gallery-info-item">
              <span class="gallery-info-title">Views</span>
              <span class="gallery-info-value">${t.views}</span>
            </p>
            <p class="gallery-info-item">
              <span class="gallery-info-title">Comments</span>
              <span class="gallery-info-value">${t.comments}</span>
            </p>
            <p class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span>
              <span class="gallery-info-value">${t.downloads}</span>
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),m.refresh()}function L(){c.innerHTML=""}function v(){p.classList.remove("is-hidden")}function w(){p.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",b);async function b(a){a.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){o.warning({message:"Please enter a search query",position:"topRight"});return}L(),v();try{const t=await g(r);if(!t.hits.length){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),l.reset()}}
//# sourceMappingURL=index.js.map
