(() => {
  const scene=document.querySelector('.memory-scene');
  const toggle=document.querySelector('.scene-toggle');
  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  let enabled=!preference.matches;
  function render(){scene.classList.toggle('is-still',!enabled);toggle.setAttribute('aria-pressed',String(enabled));toggle.setAttribute('aria-label',enabled?'暂停插图动态':'播放插图动态');toggle.textContent=enabled?'暂停动态 Ⅱ':'播放动态 ▷';}
  toggle.addEventListener('click',()=>{enabled=!enabled;render();});
  preference.addEventListener('change',()=>{enabled=!preference.matches;render();});
  render();
})();
