const study_material = document.querySelector('.header-float-window');
const cross = document.querySelector('.cross');
const bar = document.querySelector('.bar');

bar.addEventListener('click', () => {
    study_material.classList.toggle('show-bar');
    cross.style.display = 'block'; 
    bar.style.display = 'none'; 
});

cross.addEventListener('click', () => {
    study_material.classList.toggle('show-bar');
    cross.style.display = 'none'; 
    bar.style.display = 'block'; 
});