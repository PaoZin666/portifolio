const menu = document.getElementById("menu");
const projetos = document.getElementById("projetos");
const github = document.getElementById("github");
const temaEclipse = document.getElementById("tema-eclipse");
const temaGrifo = document.getElementById("tema-grifo");
temaGuts.volume = 0.4;

function atualizarConteudo(videoSrc, personaSrc, descricaoHTML, gradientBackground) {
    
}



botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersonagem();

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
