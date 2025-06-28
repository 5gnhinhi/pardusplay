document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos importantes
    const playButtons = document.querySelectorAll('.play-btn');
    const modal = document.getElementById('game-modal');
    const gameIframe = document.getElementById('game-iframe');
    const closeBtn = document.getElementById('close-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    // Adiciona um 'ouvinte' de clique para cada botão "Jogar Agora"
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameUrl = button.getAttribute('data-game-url');
            
            // Define o URL do jogo no iframe e mostra o modal
            gameIframe.src = gameUrl;
            modal.classList.add('active');
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('active');
        // IMPORTANTE: Limpa o src do iframe para parar o jogo e o som
        gameIframe.src = '';
    };

    // Adiciona um 'ouvinte' de clique no botão de fechar
    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal se o utilizador clicar fora da área do conteúdo (no fundo escuro)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Adiciona um 'ouvinte' de clique no botão de tela cheia
    fullscreenBtn.addEventListener('click', () => {
        // Usa a API de Fullscreen do navegador no iframe
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.webkitRequestFullscreen) { /* Safari */
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { /* IE11 */
            gameIframe.msRequestFullscreen();
        }
    });

});
