// Função para inicializar os eventos após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // ===== Download e Modal de Imagem =====
    const downloadBtn = document.getElementById('downloadBtn');
    const previewImg = document.getElementById('previewImg');
    const imageModal = document.getElementById('imageModal');
    const closeModal = document.getElementById('closeModal');

    // Atualizar link de download
    downloadBtn.href = 'https://drive.google.com/file/d/1bD-lpoIc9d-nxrHtwcyvl7ZNn1KmrUZF/view?usp=sharing';
    downloadBtn.target = '_blank';
    downloadBtn.rel = 'noopener noreferrer';

    // Abrir modal ao clicar na imagem
    previewImg.addEventListener('click', function() {
        imageModal.classList.add('show');
        imageModal.setAttribute('aria-hidden', 'false');
    });

    // Fechar modal ao clicar no X
    closeModal.addEventListener('click', function() {
        imageModal.classList.remove('show');
        imageModal.setAttribute('aria-hidden', 'true');
    });

    // Fechar modal ao clicar fora da imagem
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.remove('show');
            imageModal.setAttribute('aria-hidden', 'true');
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('show')) {
            imageModal.classList.remove('show');
            imageModal.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Melhorar acessibilidade para o botão de download
    downloadBtn.setAttribute('aria-label', 'Baixar aplicativo Baixa NFS-e versão 1.6.3');
    
    // ===== Modais de Sobre e FAQ =====
    const btnSobre = document.getElementById('btnSobre');
    const btnFaq = document.getElementById('btnFaq');
    const sobreModal = document.getElementById('sobreModal');
    const faqModal = document.getElementById('faqModal');
    const closeSobreModal = document.getElementById('closeSobreModal');
    const closeFaqModal = document.getElementById('closeFaqModal');
    
    // Abrir modal de Sobre
    btnSobre.addEventListener('click', function() {
        sobreModal.classList.add('show');
        sobreModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
    
    // Abrir modal de FAQ
    btnFaq.addEventListener('click', function() {
        faqModal.classList.add('show');
        faqModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
    
    // Fechar modal de Sobre
    closeSobreModal.addEventListener('click', function() {
        sobreModal.classList.remove('show');
        sobreModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    });
    
    // Fechar modal de FAQ
    closeFaqModal.addEventListener('click', function() {
        faqModal.classList.remove('show');
        faqModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    });
    
    // Fechar modais ao clicar fora do conteúdo
    sobreModal.addEventListener('click', function(e) {
        if (e.target === sobreModal) {
            sobreModal.classList.remove('show');
            sobreModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    });
    
    faqModal.addEventListener('click', function(e) {
        if (e.target === faqModal) {
            faqModal.classList.remove('show');
            faqModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fechar modais com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (sobreModal.classList.contains('show')) {
                sobreModal.classList.remove('show');
                sobreModal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
            if (faqModal.classList.contains('show')) {
                faqModal.classList.remove('show');
                faqModal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    // ===== FAQ Acordeão =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        
        if (question) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Fechar todos os outros items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle do item clicado
                item.classList.toggle('active');
            });
        }
    });
});

