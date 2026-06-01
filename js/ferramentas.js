const container = document.getElementById("ferramentas-container");

fetch("dados/ferramentas.json")
    .then((resposta) => resposta.json())
    .then((ferramentas) => {
        ferramentas.forEach((ferramenta) => {
            const card = document.createElement("div");
            card.classList.add("tool-card");

            card.innerHTML = `
                <span>${ferramenta.categoria}</span>
                <h3>${ferramenta.nome}</h3>
                <p>${ferramenta.descricao}</p>
                <a href="${ferramenta.link}" target="_blank">
                    ${ferramenta.botao} →
                </a>
            `;

            container.appendChild(card);
        });
    })
    .catch((erro) => {
        container.innerHTML = "<p>Erro ao carregar ferramentas.</p>";
        console.log(erro);
    });
