// ======================================
// CONTAGEM REGRESSIVA
// ======================================

const dataFestival = new Date("2026-11-20T00:00:00").getTime();

function atualizarContador() {

    const agora = new Date().getTime();
    const distancia = dataFestival - agora;

    if (distancia <= 0) {
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    const diasEl = document.getElementById("dias");
    const horasEl = document.getElementById("horas");
    const minutosEl = document.getElementById("minutos");
    const segundosEl = document.getElementById("segundos");

    if (diasEl) diasEl.textContent = dias;
    if (horasEl) horasEl.textContent = horas;
    if (minutosEl) minutosEl.textContent = minutos;
    if (segundosEl) segundosEl.textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// ======================================
// CARRINHO
// ======================================

let total = 0;

function adicionarCarrinho(nome, preco) {

    const lista = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total");

    if (!lista || !totalElemento) {
        return;
    }

    if (lista.innerHTML.includes("Nenhum ingresso")) {
        lista.innerHTML = "";
    }

    const item = document.createElement("p");

    item.innerHTML =
        nome +
        " - R$ " +
        preco.toFixed(2);

    lista.appendChild(item);

    total += preco;

    totalElemento.textContent =
        total.toFixed(2);
}

// ======================================
// FINALIZAR PEDIDO
// ======================================

const finalizar =
    document.querySelector(".finalizar");

if (finalizar) {

    finalizar.addEventListener("click", () => {

        if (total <= 0) {

            alert(
                "Adicione pelo menos um ingresso."
            );

            return;
        }

        alert(
            "Pedido realizado com sucesso para o Beat Street Fest!"
        );

    });

}

// ======================================
// FORMULÁRIO DE CONTATO
// ======================================

const formulario =
    document.querySelector("form");

if (formulario) {

    formulario.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Mensagem enviada para a organização!"
            );

            formulario.reset();
        }
    );

}

// ======================================
// BOTÃO TOPO
// ======================================

const topoBtn =
    document.getElementById("topoBtn");

if (topoBtn) {

    topoBtn.style.display = "none";

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                topoBtn.style.display =
                    "block";

            } else {

                topoBtn.style.display =
                    "none";
            }

        }
    );

    topoBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}