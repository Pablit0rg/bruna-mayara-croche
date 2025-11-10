document.addEventListener('DOMContentLoaded', () => {

    const menuHamburger = document.getElementById('menu-hamburger');
    const navLinks = document.getElementById('nav-links');

    if (menuHamburger && navLinks) {
        
        menuHamburger.addEventListener('click', () => {
            // 1. Liga/Desliga o menu (o CSS faz a animação)
            navLinks.classList.toggle('active');
            
            // 2. Troca o ícone (lógica simplificada)
            const icon = menuHamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // 3. (Bônus) Fecha o menu se o usuário clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    // Reseta o ícone para 'bars'
                    const icon = menuHamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
