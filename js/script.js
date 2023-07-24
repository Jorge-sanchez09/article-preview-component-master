const shareBtn = document.querySelector('.share__button'),
      shareWindow = document.querySelector('.share__window');
   
shareBtn.addEventListener('click', (e) => {
    shareWindow.classList.replace('share__window', 'share__window--show');
});

document.addEventListener('click', (e) => {
   if(!shareWindow.contains(e.target) && !shareBtn.contains(e.target))
    shareWindow.classList.replace('share__window--show', 'share__window');
});
