// array com conteudo (departamentos)
const departamentos = [
    deptoA = {
        title: ["DEPTO A / SETOR 1"],
        textoPrinc: 'DEPTO A / SETOR 1',
        ramal: '1001 - (João) <br> 1002 - Maria <br> 1003 - Pedro <br> 1004 - Ana <br> 1005 - Carla',
        email: '',
        func: 'Gerente: João / Contratos: Pedro e Ana / Frota: Carla / Serviços Gerais: Maria / Apoio: José',
        andar: 'Térreo'
    },
    deptoB = {
        title: ["DEPTO B", "CERTIDÕES", "REGISTROS", "PROCESSOS", "INTIMAÇÕES", "SETOR B"],
        textoPrinc: 'DEPTO B - Gestão de Documentos e Processos',
        ramal: '1010 - Clara (Registros) <br> 1011 - Bruno <br> 1012/1013/1014 - Felipe / Gabriel (Processos)',
        email: 'contato.setorb@exemplo.com.br',
        func: 'Clara / Bruno / Felipe / Gabriel / Aline / Jorge / Tatiane / Camila / Rafael',
        andar: '1º Andar - Ala Leste',
    },
    deptoC = {
        title: ["DEPTO C", "COORDENAÇÃO GERAL", "PLANEJAMENTO", "GESTÃO", "EQUIPE C"],
        textoPrinc: 'DEPTO C - Coordenação de Planejamento e Gestão',
        ramal: '1020 - Paula <br> 1021 - André <br> 1022 - Silvia <br> 1023 - Marcos <br> 1024 - Beatriz',
        email: 'consultas@deptoc.com.br',
        func: 'Paula / André / Silvia / Marcos / Beatriz / Flavio / Daniela / Lucas / Renata / Vinícius / Carla / Sergio / Juliana',
        andar: '1º Andar - Ala Oeste',
    },
    rhDepto = {
        title: ["RECURSOS HUMANOS", "ESTÁGIOS", "DEPARTAMENTO PESSOAL", "RH / GESTÃO DE PESSOAS"],
        textoPrinc: 'RH - Departamento de Gestão de Pessoas',
        ramal: '1030 <br> 1031 - Tânia <br> 1032 - Eduardo <br> 1033 - Fernanda <br> 1034 - Gustavo <br> 1035 - Priscila',
        email: 'rh@empresaexemplo.com.br <br> estagios@empresaexemplo.com.br',
        func: 'Tânia / Eduardo / Fernanda / Gustavo / Priscila / Mariana / Bruno / Alice / Rafael / Juliana / Fabio / Tatiane',
        andar: '1º Andar - Ala Central',
    },

    // 2º Andar
    setorX = {
        title: ["SETOR X", "DIVISÃO A", "GESTÃO X", "RESÍDUOS", "INSPEÇÕES"],
        textoPrinc: 'SETOR X - Divisão Técnica de Resíduos e Inspeções',
        ramal: '1040',
        email: 'setorx@empresaexemplo.com.br <br> contato.x@empresaexemplo.com.br',
        func: 'Diego / Livia / Mariana / Ricardo',
        andar: '2º Andar - Ala Norte',
    },

    // 3º Andar
    setorY = {
        title: ["SETOR Y", "DIVISÃO B", "ANÁLISE TÉCNICA"],
        textoPrinc: 'SETOR Y - Divisão Técnica Especializada',
        ramal: '1041/1042/1043 - Atendimento',
        email: 'analises@empresaexemplo.com.br',
        func: 'Fernanda / João / Amanda / Larissa / Bruno / Tatiana / Miguel / Letícia / Henrique',
        andar: '3º Andar - Ala Norte',
    },

    // 4º Andar
    setorZ = {
        title: ["SETOR Z", "INSPEÇÕES", "MONITORAMENTO", "ANÁLISE AMBIENTAL"],
        textoPrinc: 'SETOR Z - Inspeções Técnicas e Ambientais',
        ramal: '1044/1045 <br> 1046 - Lucas',
        email: 'monitoramento@empresaexemplo.com.br',
        func: 'Carlos / Eliana / Rodrigo / Juliana / Marcelo / Bianca / Lucas / Fernanda / Rafael / Aline',
        andar: '4º Andar - Ala Sul',
    },
]

// =================================================================

const container = document.querySelector('.container');
const body = document.querySelector('.div-body');
const ul = document.getElementById('listaDeptos');
const btnConsultar = document.getElementById("btnConsultar");

const textInput = document.getElementById('iptConsulta');
const clearButton = document.getElementById('clearInput');

let selectedIndex = -1;

// ADICIONANDO LIs SOBRE CADA OBJETO
function adicionarItens() {
    departamentos.forEach(function (obj) {
        obj.title.forEach(function (item) {
            const li = document.createElement("li");
            li.innerHTML = `<span class="item-name">${item}</span>`
            ul.appendChild(li);
            li.addEventListener('click', function () {
                textInput.value = this.textContent;
                ul.style.display = "none";  // Oculta a lista após a seleção
            })
        })
    })
}

adicionarItens();

//remove a li de pesquisa ao clicar na tela
body.addEventListener('click', function (e) {
    ul.style.display = "none";
});
body.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        ul.style.display = "none";
    }
});

textInput.addEventListener('keyup', function (e) {
    filtrar(e);
});

// filtra e exibe igualmente o texto digitado com o presente na LI
function filtrar(ev) {
    var filter, span, count = 0

    //FILTRO
    filter = textInput.value.toUpperCase();


    //PEGAR TODAS AS LI's DA LISTA
    li = ul.getElementsByTagName("li");

    let visibleItems = [];  // Armazena os itens visíveis

    //PERCORRER TODOS OS LI'S
    for (i = 0; i < li.length; i++) {

        //PEGAR O TEXTO DENTRO DA LI
        const txtValue = li[i].textContent || li[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) { // -1 significa que nao foi encontrado não esta no array, ou seja, é um valor incorreto

            //VALOR BATEU
            li[i].style.display = "";
            //INCREMENTAR O CONTADOR
            count++

            visibleItems.push(li[i]); // adiciona o item visivel em questao à lista



            //PEGAR A TAG SPAN DO ITEM
            span = li[i].querySelector(".item-name");
            //SE EXISTIR
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                })
            }
        } else {
            //NÃO MOSTRA O ITEM DA LISTA
            li[i].style.display = "none";
        }


    }

    //VERIFICANDO SE TEM ITENS NA LISTA
    if (filter === "") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }


    if (visibleItems.length > 0) {
        if (ev.keyCode === 40) { // se seta para baixo
            selectedIndex = (selectedIndex + 1) % visibleItems.length;
            itemDestaque(visibleItems);
        }

        else if (ev.keyCode === 38) { // se seta para cima
            selectedIndex = (selectedIndex - 1 + visibleItems.length) % visibleItems.length;
            itemDestaque(visibleItems);
        } else if (ev.keyCode === 13 && selectedIndex >= 0) { // se Enter
            visibleItems[selectedIndex].click();

        }
    };


}




function itemDestaque(visItem) {
    visItem.forEach(function (item) {
        item.classList.remove('selecionado');
    });

    if (selectedIndex >= 0 && selectedIndex < visItem.length) {
        visItem[selectedIndex].classList.add('selecionado');
        visItem[selectedIndex].scrollIntoView({ block: 'nearest' });
    }

}

// ====== Botão X de apagar texto =========
textInput.addEventListener('input', function () {
    if (textInput.value.length > 0) {
        clearButton.style.display = 'block'; // Mostra o botão "x"
    } else {
        clearButton.style.display = 'none'; // Esconde o botão "x"
    }
});

clearButton.addEventListener('click', function () {
    textInput.value = ''; // Limpa o campo de texto
    clearButton.style.display = 'none'; // Esconde o botão "x"
    textInput.focus(); // Coloca o foco de volta no input
});
// =========================================



// ========= ========================================================================
// Envia Input (Consulta)
// ==================================================================================
container.addEventListener('submit', function (e) {
    submitConsula(e);

});

function submitConsula(e) {
    e.preventDefault();
    verficaCampo(); // metodo para verificar texto digitado, com o titulo do array

};

function verficaCampo() {
    let texto = textInput.value.toUpperCase();
    // const li = document.getElementsByClassName("li");


    departamentos.forEach(function (obj) {
        obj.title.forEach(function (item) {
            if (item === texto.toUpperCase()) {
                // alert('OPA ITEM IGUAL');
                exibeInfos(obj);
                return;
            }
        })
    })
}

function exibeInfos(obj) {
    const elementoDiv = document.querySelector('#infos');

    if (elementoDiv) {
        elementoDiv.remove(); // Remove a div anterior, se já existir
    }

    const div = document.createElement("div");
    div.id = 'infos';
    container.appendChild(div);

    div.innerHTML = `
        <h3>${obj.textoPrinc}</h3>
        <div class="info-box">
            <span> <i class="fas fa-phone"></i> Ramal: </span> 
            <p>${obj.ramal || "Não disponível"}</p>
        </div>
        <div class="info-box">
            <span> <i class="fas fa-envelope"></i> Email: </span>
            <p>${obj.email || "Não disponível"}</p>
        </div>
        <div class="info-box">
            <span> <i class="fas fa-users"></i> Funcionários: </span>
            <p>${obj.func || "Não disponível"}</p>
        </div>
        <div class="info-box">
            <span> <i class="fas fa-map-marker-alt"></i> Andar: </span>
            <p>${obj.andar || "Não disponível"}</p>
        </div>
    `;
}

