const Input = document.querySelector('input');
const btn = document.querySelector('.btn-success');
const container = document.querySelector('.container-tasks');


Input.addEventListener('keypress', (event) => {
    if(event.key !== 'Enter'){
        return;
    }
    
   addNewsTask();
});

btn.addEventListener('click', (event) => {
    addNewsTask();
    
});

function addNewsTask(){

    if(!Input.value){
        alert('Preencha o nome da task');
        return;
    }

    const Divi = document.createElement('div');
    Divi.classList.add('task');

    const Span = document.createElement('span');
    Span.textContent = Input.value;

    const Remove = document.createElement('img');
    Remove.src = 'assets/remove.svg';
    Remove.alt = 'remove';
    
    Remove.addEventListener('click',()=>{
        container.removeChild(Divi);
    })

    Divi.appendChild(Span);
    Divi.appendChild(Remove);

    container.appendChild(Divi);

    Input.value = '';
}



