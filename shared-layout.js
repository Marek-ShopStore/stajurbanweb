// Shared navigation and footer for all pages
// Each page sets: <body data-page="index|areal|ustajeni|skola|vyjizky|kontakt">

document.addEventListener('DOMContentLoaded', function () {
    const page = document.body.dataset.page || '';

    // Determine navbar class (transparent on homepage, solid on subpages)
    const isHome = page === 'index';
    const navClass = isHome ? 'navbar' : 'navbar navbar--solid';

    // Logo HTML
    const logoHtml = isHome
        ? '<img src="images/staj-urban-logo-white.svg" alt="Stáj Urban" class="nav-logo-img nav-logo-white"><img src="images/staj-urban-logo.svg" alt="Stáj Urban" class="nav-logo-img nav-logo-dark">'
        : '<img src="images/staj-urban-logo.svg" alt="Stáj Urban" class="nav-logo-img">';

    // Nav links with active state
    const navLinks = [
        { href: 'index.html', label: 'Úvod', key: 'index' },
        { href: 'areal.html', label: 'Areál', key: 'areal' },
        { href: 'ustajeni.html', label: 'Ustájení', key: 'ustajeni' },
        { href: 'skola.html', label: 'Výcvik', key: 'skola' },
        { href: 'vyjizky.html', label: 'Vyjížďky', key: 'vyjizky' },
        { href: 'kontakt.html', label: 'Kontakt', key: 'kontakt', cta: true },
    ];

    const navLinksHtml = navLinks.map(function (link) {
        const active = link.key === page ? ' active' : '';
        const cta = link.cta ? ' nav-link--cta' : '';
        return '<li><a href="' + link.href + '" class="nav-link' + cta + active + '">' + link.label + '</a></li>';
    }).join('\n                ');

    // Inject navbar
    const navEl = document.getElementById('navbar');
    if (navEl) {
        navEl.className = navClass;
        navEl.id = 'navbar';
        navEl.innerHTML = '\n        <div class="nav-container">\n'
            + '            <a href="index.html" class="nav-logo">\n'
            + '                ' + logoHtml + '\n'
            + '            </a>\n'
            + '            <button class="nav-toggle" id="navToggle" aria-label="Menu">\n'
            + '                <span></span>\n'
            + '                <span></span>\n'
            + '                <span></span>\n'
            + '            </button>\n'
            + '            <ul class="nav-menu" id="navMenu">\n'
            + '                ' + navLinksHtml + '\n'
            + '            </ul>\n'
            + '        </div>';
    }

    // Inject footer
    const footerEl = document.getElementById('footer');
    if (footerEl) {
        footerEl.innerHTML = '\n        <div class="container">\n'
            + '            <div class="footer-content">\n'
            + '                <div class="footer-brand">\n'
            + '                    <img src="images/staj-urban-logo-white.svg" alt="Stáj Urban" class="footer-logo">\n'
            + '                    <p>Stáj URBAN spol. s r.o.<br>IČ: 61458708</p>\n'
            + '                </div>\n'
            + '                <div class="footer-nav">\n'
            + '                    <h4>Navigace</h4>\n'
            + '                    <a href="index.html">Úvod</a>\n'
            + '                    <a href="areal.html">Areál</a>\n'
            + '                    <a href="ustajeni.html">Ustájení</a>\n'
            + '                    <a href="skola.html">Výcvik</a>\n'
            + '                    <a href="vyjizky.html">Vyjížďky</a>\n'
            + '                    <a href="kontakt.html">Kontakt</a>\n'
            + '                </div>\n'
            + '                <div class="footer-contact">\n'
            + '                    <h4>Kontakt</h4>\n'
            + '                    <p>Bojanovice 107, 252 06 Davle</p>\n'
            + '                    <p>Ustájení: <a href="tel:+420602314462">602 314 462</a></p>\n'
            + '                    <p>Výcvik: <a href="tel:+420725026401">725 026 401</a></p>\n'
            + '                    <p><a href="mailto:stajurban@seznam.cz">stajurban@seznam.cz</a></p>\n'
            + '                    <div class="footer-social">\n'
            + '                        <a href="https://www.facebook.com/profile.php?id=100057574234572" target="_blank" rel="noopener" aria-label="Facebook" class="social-link">\n'
            + '                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\n'
            + '                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>\n'
            + '                            </svg>\n'
            + '                        </a>\n'
            + '                    </div>\n'
            + '                </div>\n'
            + '            </div>\n'
            + '            <div class="footer-bottom">\n'
            + '                <p>&copy; 2025 Stáj Urban spol. s r.o. Všechna práva vyhrazena.</p>\n'
            + '            </div>\n'
            + '        </div>';
    }
});
