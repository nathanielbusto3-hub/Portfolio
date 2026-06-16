(function(){
  const toggleBtn = document.getElementById('theme-toggle');
  if(!toggleBtn) return;
  const setTheme = (theme)=>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  const initTheme = ()=>{
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
  };
  toggleBtn.addEventListener('click',()=>{
    const current = document.documentElement.getAttribute('data-theme')=== 'dark' ? 'light' : 'dark';
    setTheme(current);
  });
  initTheme();
})();