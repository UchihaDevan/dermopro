// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuração do botão CTA
    const ctaButton = document.getElementById('ctaButton');
    
    // Por enquanto, o botão redireciona para uma URL placeholder
    // Você pode alterar esta URL para a página do produto real
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Adiciona efeito visual de clique
        this.style.transform = 'translateY(-2px) scale(0.98)';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1)';
            
            // Aqui você pode adicionar a URL real do produto
            // window.location.href = 'https://sua-pagina-do-produto.com';
            
            // Por enquanto, mostra um alerta
            alert('Redirecionando para a página do DermoPro...');
            
        }, 150);
    });
    
    // Animação de entrada para elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animatedElements = document.querySelectorAll('.benefit-item, .area-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Efeito de hover suave para áreas do corpo
    const areaItems = document.querySelectorAll('.area-item');
    areaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Scroll suave para links internos (se houver)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Adiciona classe para animações CSS quando a página carrega
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
});

// Função para tracking de eventos (opcional)
function trackEvent(eventName, eventData = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Exemplo de integração com Google Analytics (se configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Tracking de clique no CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    ctaButton.addEventListener('click', function() {
        trackEvent('cta_click', {
            button_text: this.textContent,
            page_location: window.location.href
        });
    });
});

