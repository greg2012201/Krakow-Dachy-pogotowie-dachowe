!function(){var t={204:function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var e=document.querySelector(".form"),n=(document.querySelector(".form__button"),function(e){var n=e.entries(),r=Array.from(n).reduce((function(e,n){var r,o,i=(o=2,function(t){if(Array.isArray(t))return t}(r=n)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(r,o)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];return e[a]=c,"email"===a&&(e._replyTo=c),e}),{});return JSON.stringify(r)});e.addEventListener("submit",(function(t){t.preventDefault();var e=new FormData(this);e.append("_subject","Zapytanie Kraków Dachy"),fetch("",{method:"POST",body:n(e),headers:{"Content-Type":"application/json"}}).catch((function(t){console.log("error")})).then((function(t){return t.json()})).then((function(t){t.ok?console.log(t):console.log("źle")}))}))},835:function(){document.addEventListener("scroll",(function(){var t,e;(e=(t=document.querySelector(".header")).getBoundingClientRect().bottom/t.getBoundingClientRect().height*100)>=0&&(t.style.opacity="".concat(e,"%"))}))},792:function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var e,n=function(e){if(Array.isArray(e))return t(e)}(e=document.querySelectorAll(".section"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=document.querySelector(".burger"),o=document.querySelector(".menu"),i=document.querySelector(".menu__nav-bar"),a=(document.querySelector(".header"),!1),c=function(){o.classList.remove("menu--open")},u=function(){r.classList.toggle("burger--active")};document.addEventListener("click",(function(t){t.target===r||t.target.parentNode===r?a?a&&(c(),u(),a=!1):(o.classList.add("menu--open"),u(),a=!0):o.classList.contains("menu--open")&&a&&(c(),u(),a=!1)}));var l=document.querySelector(".menu"),s=window.pageYOffset,f=function(){a||l.classList.add("menu--hidden")},d=function(){l.classList.remove("menu--hidden")};document.addEventListener("scroll",(function(){var t=window.pageYOffset;n.find((function(e){return output=e.offsetTop===parseInt(t.toFixed())}))?f():t<s?d():f(),s=t})),document.addEventListener("mousemove",(function(t){var e=i.getBoundingClientRect().height;t.clientY<=e&&d()})),document.querySelectorAll(".menu__link, .logo").forEach((function(t){return t.addEventListener("click",(function(t){var e=this.dataset.destination;t.preventDefault(),function(t,e){var n=document.querySelector(".".concat(t)).offsetTop,r=window.pageYOffset,o=n-r,i=null;requestAnimationFrame((function t(e){null===i&&(i=e);var n,a,c,u=e-i,l=(n=u,a=r,c=o,(n/=1e3/2)<1?c/2*n*n+a:-c/2*(--n*(n-2)-1)+a);window.scrollTo(0,l),u<1e3&&requestAnimationFrame(t)}))}(e)}))}))},601:function(){var t=document.querySelectorAll(".list-wrapper__title"),e=document.querySelectorAll(".list-wrapper");e.forEach((function(t,e){t.dataset.key=e,t.firstElementChild.dataset.key=e}));var n=function(){var t=[];return e.forEach((function(e){return t.push(e.offsetHeight)})),t}();t.forEach((function(t){return t.addEventListener("click",(function(t){var e=t.target.parentNode;if(e.dataset.key===t.target.dataset.key){t.target.classList.toggle("list-wrapper__title--active");var r,o=e.getBoundingClientRect().height,i=t.target.getBoundingClientRect().height,a=e.querySelector(".list-wrapper__list");a.classList.toggle("list-wrapper__list--active"),r=a.getBoundingClientRect().height,e.style.height="".concat(r+i>o?a.offsetHeight+i:n[e.dataset.key],"px")}}))}))}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(792),n(204),n(835),n(601);var r,o,i=function(t,e,n){t.forEach((function(t){c(a(t))?l(t,e):n>0&&s(t,e)}))},a=function(t){var e=t.getBoundingClientRect();return{top:e.top,bottom:e.bottom,vieportHeight:window.innerHeight}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:parameters,e=t.top,n=t.bottom,r=t.vieportHeight;return e-r<=0&&n>=0},u=function(t,e){return t.classList.item(e)},l=function(t,e){return t.classList.add("".concat(u(t,0)).concat(e))},s=function(t,e){t.classList.remove("".concat(u(t,0)).concat(e))},f=function(e,n,r){var o=function(){return function(e,n){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;return e.find((function(t){return t instanceof HTMLElement}))?i(e,n,o):(e.map((function(e){return t(e)})).sort((function(t,e){r=t.concat(e)})),i(r,n,o))}(e,n,r)};document.addEventListener("DOMContentLoaded",o),window.addEventListener("scroll",o)},d=document.querySelectorAll(".article__image"),m=document.querySelectorAll(".article__content"),y=document.querySelector(".header__title"),p=document.querySelector(".header__slogan");r=document.querySelector(".page"),window.addEventListener("resize",(function(){r.classList.add("page--resize-animation-stopper"),clearTimeout(o),o=setTimeout((function(){r.classList.remove("page--resize-animation-stopper")}),400)})),f([d,m],"--into-view"),f([y,p],"--into-view",1)}()}();