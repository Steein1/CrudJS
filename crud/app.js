
/*Selecionando os inputs e a tabela pai */
const inputMateria = document.querySelector('.materia');
const inputHoras = document.querySelector('.horas');
const tabelaPai = document.querySelector('.tr');


/*Botões para incluir informações dos inputs*/
const btnMateria = document.querySelector('.btn-materia');
const btnHoras = document.querySelector('.btn-horas');


btnMateria.addEventListener('click', atualizarTabela)
btnHoras.addEventListener('click', atualizarTabela)



let counter = 0;

function atualizarTabela (event) {
    
    event.preventDefault()
    formMateria = inputMateria;
    formHoras = inputHoras;
    const tableH = tabelaPai;
    const novaTr = document.createElement('tr');
    novaTr.classList.add('tr')
    const novaTd = document.createElement('td');
    const criarBtnAlterar = document.createElement('button');
    const criarBtnExcluir = document.createElement('button');

    if(event.target.classList.contains('materia') && counter ==0){
        counter++;
        novaTd.innerText = formMateria.value
        tableH.appendChild(novaTr);
        novaTr.appendChild(novaTd);
        novaTd.appendChild(criarBtnAlterar)
        novaTd.appendChild(criarBtnExcluir)
        criarBtnAlterar.innerHTML = '<i class="fas fa-undo-alt"></i>'
        criarBtnAlterar.classList.add('alterar')
        criarBtnExcluir.innerHTML = '<i class="fas fa-trash"></i>'
        criarBtnExcluir.classList.add('excluir')
        novaTd.classList.add('dado-materia')
        tableH.classList.remove('tr')
        

    } else if(event.target.classList.contains('horas') && counter > 0) {
        const horasValue = formHoras.value
        const trAtual = document.querySelector('.tr');
        trAtual.appendChild(novaTd);
        novaTd.innerText = horasValue;
        novaTd.classList.add('dado-horas')
        novaTd.appendChild(criarBtnAlterar)
        novaTd.appendChild(criarBtnExcluir)
        criarBtnAlterar.innerHTML = '<i class="fas fa-undo-alt"></i>'
        criarBtnAlterar.classList.add('alterar')
        criarBtnExcluir.innerHTML = '<i class="fas fa-trash"></i>'
        criarBtnExcluir.classList.add('excluir')
        
        trAtual.classList.remove('tr')
        counter--;
    }

    formMateria.value = '';
    formHoras.value = ''  
    
}


/****Alterar e Excluir */
const baseTr = document.querySelector('.tr')
const divGeral = document.querySelector('.dados')

baseTr.addEventListener('click', alterarDados)
divGeral.addEventListener('click', excluirDados)


function alterarDados (e) {

    const criarBtnAlterar = document.createElement('button');
    const criarBtnExcluir = document.createElement('button');
    const criarBtn = document.createElement('button');

    const item = e.target;
    const dado = item.parentElement

    const inputMateria = document.querySelector('.materia');
    const inputHoras = document.querySelector('.horas');

    const dadoMateria = document.querySelector('.dado-materia')
    const dadoHoras = document.querySelector('.dado-horas')

    if(item.classList[0]=== 'alterar' && dado.classList[0] === 'dado-materia') { 
        inputMateria.value = dadoMateria.textContent;  
        inputMateria.parentElement.appendChild(criarBtn);
        criarBtn.innerHTML = '<i class="fas fa-check"></i>'
        criarBtn.classList.add('alterado')
        dadoMateria.textContent = ''
        btnMateria.classList.add('off')
        const btnAlterado = document.querySelector('.alterado')
        btnAlterado.addEventListener('click',(event)=>{
            event.preventDefault();
            dadoMateria.textContent = inputMateria.value;
            dadoMateria.appendChild(criarBtnAlterar);
            dadoMateria.appendChild(criarBtnExcluir);
            criarBtnAlterar.innerHTML = '<i class="fas fa-undo-alt"></i>';
            criarBtnAlterar.classList.add('alterar');
            criarBtnExcluir.innerHTML = '<i class="fas fa-trash"></i>';
            criarBtnExcluir.classList.add('excluir');
            inputMateria.value = '';
            btnMateria.classList.remove('off');
            btnAlterado.classList.add('off');
            criarBtnAlterar.classList.add('sem-evento');
        })
    } else if (item.classList[0]=== 'alterar' && dado.classList[0] === 'dado-horas') {
        inputHoras.value = dadoHoras.textContent;  
        inputHoras.parentElement.appendChild(criarBtn);
        criarBtn.innerHTML = '<i class="fas fa-check"></i>'
        criarBtn.classList.add('alteradoHoras')
        dadoHoras.textContent = ''
        btnHoras.classList.add('off')
        const btnAlterado = document.querySelector('.alteradoHoras')
        btnAlterado.addEventListener('click',(event)=>{
            event.preventDefault();
            dadoHoras.textContent = inputHoras.value;
            dadoHoras.appendChild(criarBtnAlterar);
            dadoHoras.appendChild(criarBtnExcluir);
            criarBtnAlterar.innerHTML = '<i class="fas fa-undo-alt"></i>';
            criarBtnAlterar.classList.add('alterar');
            criarBtnExcluir.innerHTML = '<i class="fas fa-trash"></i>';
            criarBtnExcluir.classList.add('excluir');
            inputHoras.value = '';
            btnHoras.classList.remove('off');
            btnAlterado.classList.add('off');
            criarBtnAlterar.classList.add('sem-evento');
        })

    }
}


function excluirDados (e) {
    const item = e.target;
    const dados = item.parentElement.parentElement
    if(item.classList[0]==='excluir'){
        dados.remove()
        counter = 0;

    }
}










