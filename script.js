document.addEventListener('DOMContentLoaded', function() {
    // ===== Contador de Acesso =====
    const visitorCountElement = document.getElementById('visitorCount');
    let visitorCount = localStorage.getItem('visitorCount');
    
    if (visitorCount === null) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }
    
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount.toLocaleString('pt-BR');
    
    // ===== Download e Modal =====
    const downloadBtn = document.getElementById('downloadBtn');
    const previewImg = document.getElementById('previewImg');
    const imageModal = document.getElementById('imageModal');
    const closeModal = document.getElementById('closeModal');

    downloadBtn.href = 'https://drive.google.com/file/d/1lPDMNoJJ1NJqAPj2z3jQLXKUvw5nUfgP/view?usp=sharing';
    downloadBtn.target = '_blank';

    // Abrir modal ao clicar na imagem
    previewImg.addEventListener('click', function() {
        imageModal.classList.add('show');
    });

    // Fechar modal ao clicar no X
    closeModal.addEventListener('click', function() {
        imageModal.classList.remove('show');
    });

    // Fechar modal ao clicar fora da imagem
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('show')) {
            imageModal.classList.remove('show');
        }
    });
});

