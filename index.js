const menu = document.getElementById('menu');
const pj = document.getElementById('projetos');
const gh = document.getElementById('github');
const mainSection = document.querySelector('.Maim');
const gitSection = document.querySelector('.Git');
const iframeSection = document.querySelector('.iframes');

function select(element) {
    const links = document.querySelectorAll('.navitem');
    links.forEach(link => {
        link.classList.remove('ativo');
    });

    element.classList.add('ativo');
    document.body.style.setProperty('--activeclr', element.dataset.clr);

    const id = element.id;

    if (id === 'menu') {
        menu.classList.add('active');
		pj.classList.remove('active');
		gh.classList.remove('active');

        mainSection.classList.add('ativo');
        gitSection.classList.remove('ativo');
        iframeSection.classList.remove('ativo');
    } else if (id === 'github') {
		menu.classList.remove('active');
		pj.classList.remove('active');
		gh.classList.add('active');

        mainSection.classList.remove('ativo');
        gitSection.classList.add('ativo');
        iframeSection.classList.remove('ativo');
    } else if (id === 'projetos') {
		menu.classList.remove('active');
		pj.classList.add('active');
		gh.classList.remove('active');

        mainSection.classList.remove('ativo');
        gitSection.classList.remove('ativo');
        iframeSection.classList.add('ativo');
    }
}
setTimeout(function() {
    document.querySelector('.Char').classList.add('ativo');
}, 1000);