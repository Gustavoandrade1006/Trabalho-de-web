/* Links que podem ajudar com o LocalStorage:
    https://blog.formacao.dev/o-que-e-local-storage/
    https://www.youtube.com/watch?v=ewnyMjQjda0
    https://www.youtube.com/watch?v=xNLxJ8IraFA
*/
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        overlay.classList.add('ativo');
    } else {
        overlay.classList.remove('ativo');
    }
});

// aqui quando clica no overlay fecha o sidebar também
overlay.addEventListener('click', () => {
    menuToggle.checked = false;
    overlay.classList.remove('ativo');
});