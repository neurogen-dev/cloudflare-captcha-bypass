(async()=>{const n=await nn.load({modelUrl:`chrome-extension://${chrome.runtime.id}/model/model.json`});chrome.runtime.onMessage.addListener(function(e,o,t){const r=new Image;return r.onload=async function(){const e=await n.detect(r,maxNumBoxes=10,minScore=.25);r.removeAttribute("src"),t(e)},r.crossOrigin="Anonymous",r.src=e.data,!0})})();