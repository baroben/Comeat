const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener('mouseover',(e)=>{
    const description = e.currentTarget.querySelector('.item-desc');
    description.classList.add('hover');
    description.style.display='block';
}));

items.forEach(item => item.addEventListener('mouseout',(e)=>{
    const description = e.currentTarget.querySelector('.item-desc');
    description.classList.remove('hover');
    description.style.display='none';
}));
