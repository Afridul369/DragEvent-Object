let div = document.querySelector('.div');
let p = document.querySelector('p');

p.addEventListener('dragstart',function(e){
   e.dataTransfer.setData('text', e.target.abir)    
})

div.addEventListener('dragover',function(e){
    e.preventDefault();
})

div.addEventListener('drop',function(e){
    e.dataTransfer.getData('text');
    div.appendChild(document.querySelector('#abir'));
    e.preventDefault()
})