document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a seção onde os cards dos cães serão exibidos
    const dogsSection = document.getElementById("dogs-section");

    // Lista de cães com suas imagens, títulos e descrições
    const dogsData = [
        {
            img: "assets/border-preto.jpg",
            title: "Border Collie",
            description: "Os Border Collies são conhecidos por sua inteligência extraordinária e habilidade de trabalho, sendo frequentemente citados como a raça de cães mais inteligente do mundo. Originários da região de fronteira entre Escócia e Inglaterra, foram desenvolvidos para pastorear ovelhas e demonstram um notável foco e energia em suas tarefas. Caracterizam-se por seu pelo de comprimento médio que pode ser liso ou ondulado e por uma variedade de cores e padrões. Esses cães são altamente energéticos, precisam de muito exercício e estimulação mental para evitar comportamentos destrutivos."
        },
        {
            img: "assets/labrador-feliz.png",
            title: "Labrador Retriever",
            description: "Labradores são uma das raças mais populares em muitos países, conhecidos por seu temperamento amigável e natureza cooperativa. São cães robustos e bem proporcionados, com uma pelagem densa e resistente à água, ideal para o trabalho que historicamente desempenhavam como ajudantes de pescadores na região do Labrador, no Canadá. Eles vêm em três cores: preto, chocolate e amarelo. Labradores são conhecidos por serem ótimos companheiros de família e são frequentemente usados em papéis como cães-guia devido à sua natureza obediente e adaptável."
        },
        {
            img: "assets/beagle-filhote.jpg",
            title: "Beagle",
            description: "Os Beagles são pequenos a médios cães de caça com uma expressão simpática e orelhas grandes e caídas. Eles têm um faro incrivelmente aguçado e foram originalmente criados para caça menor, como coelhos. A pelagem do Beagle é geralmente de baixa manutenção, curta, densa e resistente às intempéries, e eles são mais comumente vistos em combinações de branco, preto e marrom. Apesar de sua independência e teimosia ocasional, os Beagles são extremamente sociáveis ​​e se dão bem com crianças e outros cães, tornando-os animais de estimação familiares ideais."
        },
        {
            img: "assets/papillon.png",
            title: "Papillon",
            description: "O Papillon é facilmente reconhecido por suas orelhas grandes e em forma de borboleta, das quais seu nome francês (borboleta) é derivado. Esta raça pequena mas valente tem uma longa história como cão de colo da nobreza europeia. O Papillon possui um pelo longo e sedoso que não forma subpelo, com uma juba impressionante ao redor do pescoço e uma cauda emplumada que curva sobre o dorso. Eles são notáveis ​​por sua agilidade e habilidades em obediência, sendo cães altamente alertas e inteligentes que respondem bem ao treinamento. Apesar de seu tamanho pequeno, têm uma personalidade vibrante e podem ser bastante assertivos."
        },
        {
            img: "assets/Spitz-Alemao.png",
            title: "Spitz Alemão",
            description: "Também conhecido como Lulu da Pomerânia (em sua variante menor), o Spitz Alemão é um cão de porte médio, com pelagem densa e fofa, focinho delicado e orelhas pequenas e pontiagudas. São inteligentes, afetuosos e cheios de energia, sendo excelentes cães de companhia. Sua aparência é semelhante à de uma raposa, e sua cauda é enrolada sobre o dorso. São ótimos companheiros e muito leais"
        },
        {
            img: "assets/Pinscher.png",
            title: "Pinscher",
            description: "O Pinscher é um cão pequeno, ágil e musculoso, com pelagem curta e brilhante. De origem alemã, essa raça é corajosa, alerta e muito protetora, apesar de seu tamanho compacto. Seu corpo é esguio e quadrado, e suas orelhas pontiagudas são uma marca registrada da raça."
        }
    ];

    // Para cada cão na lista, cria um card e adiciona à seção
    dogsData.forEach(dog => {
        // Cria um elemento de artigo para o card do cão
        const card = document.createElement("article");
        card.className = "card";
        
        // Adiciona o conteúdo HTML ao card
        card.innerHTML = `
            <img src="${dog.img}" alt="Imagem de ${dog.title}">
            <h3 class="card-title">${dog.title}</h3>
            <p>${dog.description}</p>
        `;
        
        // Adiciona o card à seção de cães na página
        dogsSection.appendChild(card);
    });
});


//botoes popups
function abrirPopup() {
    window.open(
        '/contact.html', // Caminho para sua página de contato
        'popupWindow', // Nome da janela
        'width=600,height=700,resizable=no,scrollbars=yes'
    );
}
function abrirPoliticaPrivacidade() {
    window.open(
        '/privacy.html', // Substitua pelo caminho para sua página de política de privacidade
        'popupPolitica', 
        'width=600,height=700,resizable=no,scrollbars=yes'
    );
}
