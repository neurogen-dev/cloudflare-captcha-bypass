(()=>{let e=0,t=0,r=[],n=[],o=[],c=!1;const a=".button-submit",i=".task-image .border",l=".task-image .image",u=".task-image",s=".prompt-text",f=".no-selection",d=".challenge-example .image .image",h="aria-hidden",m="Please click each image containing a ",y="Please click each image containing an ",g="airplane",b="bicycle",w="boat",p="bus",k="car",v="motorbus",S="motorcycle",A="seaplane",q="surfboard",C="train",L="truck",_=[g,b,w,p,k,v,S,A,q,C,L],I=10;let x=0;if(window.location.href.includes("checkbox")){const e=setInterval(function(){const t=document.querySelector("#checkbox");var r;if(t)return"true"==t.getAttribute("aria-checked")?clearInterval(e):void(null===(r=t).offsetParent||"none"==r.style.display||r.disabled||"false"!=t.getAttribute("aria-checked")||(t.scrollIntoView({behavior:"auto",block:"center",inline:"center"}),t.click()))},500)}else z();function P(e){return new Promise(function(t,r){chrome.runtime.sendMessage({data:e},function(e){if(!e)return t([]);t(e)})})}async function D(e,r,n){const o=await P(e);for(let t=0;t<o.length;t++){const c=document.querySelectorAll(l);if(c[n]&&c[n].style.background.includes(e)&&0==document.querySelectorAll(i)[n].style.opacity&&o[t].class.includes_one_in(r)){document.querySelectorAll(u)[n].click();break}}t++}function E(e,t){const r=document.createEvent("HTMLEvents");r.initEvent(t,!1,!0),e.dispatchEvent(r)}async function T(e){return new Promise(t=>setTimeout(t,e))}function M(e){setTimeout(z,100*e)}function j(e){const t=Array.from(document.querySelectorAll("div")).find(e=>e.textContent===$target_text);if(t){E(t,"mousedown"),E(t,"mouseup");const e=document.querySelector(a);e&&e.click()}return M(.5+.5*Math.random())}function F(e){const t=e.match(/(?<=\(\").+?(?=\"\))/g);return t?t[0]:0}async function J(){if(function(){const e=r;n=[];const t=document.querySelectorAll(d);if(t.length>0)for(let e=0;e<t.length;e++){const r=F(t[e].style.background);if(0==r)return!0;n[e]=r}if(e.length!=n.length)return!0;for(let t=0;t<n.length;t++)if(e[t]!=n[t])return!0;return!1}()){if(0==(r=n).length)return-1;for(!function(e){o=[];for(let t=0;t<e.length;t++)P(e[t]).then(function(r){const n=new Set;for(let e=0;e<r.length;e++)n.add(r[e].class);n.forEach(e=>{o.push(e)}),t==e.length-1&&(c=!0)})}(r);!c;)await T(1e3);c=!1}return async function(e){const t=new Map;for(let r=0;r<e.length;r++)t.has(e[r])?t.set(e[r],t.get(e[r])+1):t.set(e[r],1);let r=0,n=-1;return await t.forEach((e,t)=>{r<e&&t.equals_one_in(_)&&(n=t,r=e)}),n}(o)}async function z(){if(9!=document.querySelectorAll(l).length||document.querySelector(f).getAttribute(h))return function(){const e=Date.now()/1e3,t=setInterval(function(){if(Date.now()/1e3-e>=30)return clearInterval(t);if(9==document.querySelectorAll(l).length)return clearInterval(t),z();{const e=["3 or more items of furniture","Equipped space or room","Photo is clean, no watermarks, logos or text overlays","An interior photo of room","Unsure","Photo is sharp"];for(let r=0;r<e.length;r++)if(Array.from(document.querySelectorAll("div")).find(t=>t.textContent===e[r]))return clearInterval(t),j(e[r])}},500)}();e=Date.now()/1e3,t=0;let r=-1;try{if(-1==(r=await async function(){let e=-1;try{(e=document.querySelector(s).innerText)&&(e.includes(m)||e.includes(y))&&(e=(e=e.replace(m,"")).replace(y,"")),e.equals_one_in(_)||(e=await J())}catch(e){}return e}())&&x>=I)return;if(-1==r&&x<I){x++;const e=document.querySelector(a);return e&&e.click(),M(1.5)}r=await async function(e){return e==v||e==p?e=["bus","motorbus"]:e==k?e=["=car","coupe","jeep","limo","sport utility vehicle","station wagon","hatchback","bumper car","modelT","electric battery","cruiser"]:e==g||e==A?e=["airplane","plane","aircraft","aeroplane","hangar","Airdock","JumboJet","jetliner","stealth fighter","field artillery","seaplane"]:e==C?e=["train","rail","cable car","locomotive","subway station"]:e==w||e==q?e=["=boat","=barge","houseboat","bobsled","pontoon","small boat","SnowBlower","Sea-coast","PaddleSteamer","Freighter","Sternwheeler","kayak","canoe","deck","DockingFacility","surfboard","ship","=cruise","watercraft","sail","canvas","=raft"]:e==b?e=["bicycle","tricycle","mountain bike","AcceleratorPedal","macaw","knot"]:e==S?e=["scooter","motorcycle","windshield","dashboard"]:e==L&&(e=["truck","cargocontainer","bazooka"]),e}(r)}catch(e){return M(1.5)}let n=[];try{if(9!=(n=function(){const e=[],t=document.querySelectorAll(l);if(t.length>0)for(let r=0;r<9;r++){const n=F(t[r].style.background);if(0==n)return e;e[r]=n}return e}()).length)return M(1.5)}catch(e){return M(1.5)}if(-1!=r)for(let e=0;e<9;e++)D(n[e],r,e);!function(){const r=Date.now()/1e3,n=setInterval(function(){if(Date.now()/1e3-r>=30)return clearInterval(n),z();if(!(Date.now()/1e3-e<=4)&&9==t){clearInterval(n);const e=document.querySelector(a);return e&&e.click(),M(1.5)}},500)}()}String.prototype.includes_one_in=function(e){if(!Array.isArray(e))return this.toLowerCase().includes(e.toLowerCase());for(let t=0;t<e.length;t++)if("="==e[t].substr(0,1)&&this.toLowerCase()==e[t].substr(1).toLowerCase()||this.toLowerCase().includes(e[t].toLowerCase()))return!0;return!1},String.prototype.equals_one_in=function(e){if(!Array.isArray(e))return this.toLowerCase()==e.toLowerCase();for(let t=0;t<e.length;t++)if("="==e[t].substr(0,1)&&this.toLowerCase()==e[t].substr(1).toLowerCase()||this.toLowerCase()==e[t].toLowerCase())return!0;return!1}})();