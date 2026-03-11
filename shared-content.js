// Shared content for škola and vyjížďky pages
// Injected into placeholder divs: #shared-pricing, #shared-horses, #shared-contact

document.addEventListener('DOMContentLoaded', function () {

    // === CENÍK ===
    const pricingEl = document.getElementById('shared-pricing');
    if (pricingEl) {
        pricingEl.innerHTML = `
        <section class="section section--pricing" id="cenik">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Ceník</span>
                    <h2 class="section-title">Ceník výuky a vyjížděk</h2>
                </div>
                <div class="pricing-tables">
                    <div class="pricing-table">
                        <h3 class="pricing-table-title">Jednorázové</h3>
                        <ul class="pricing-list">
                            <li><span>Skupinový výcvik</span><span class="pricing-value">600 Kč/hod</span></li>
                            <li><span>Individuální výcvik</span><span class="pricing-value">900 Kč/hod</span></li>
                            <li><span>Skoková hodina – skupina</span><span class="pricing-value">800 Kč/hod</span></li>
                            <li><span>Terén s asistentem</span><span class="pricing-value">900 Kč/hod</span></li>
                            <li><span>Terén ve skupině</span><span class="pricing-value">600 Kč/hod</span></li>
                        </ul>
                    </div>
                    <div class="pricing-table">
                        <h3 class="pricing-table-title">Předplacené</h3>
                        <ul class="pricing-list">
                            <li><span>Individuální výcvik (10 hod)</span><span class="pricing-value">8 500 Kč</span></li>
                            <li><span>Kurz pro úplné začátečníky – individuální (10 hod)</span><span class="pricing-value">8 500 Kč</span></li>
                            <li><span>Skupinový výcvik – pokročilí (10 hod)</span><span class="pricing-value">5 500 Kč</span></li>
                            <li><span>Příprava na ZZVJ – skupina (10 hod)</span><span class="pricing-value">7 500 Kč</span></li>
                        </ul>
                    </div>
                </div>
                <div class="pricing-notes">
                    <p>Lekce prosíme objednávat vždy nejpozději den předem. Na hodinu je třeba se dostavit s dostatečnou časovou rezervou na přípravu jezdce a koně. Skupinové lekce – max. 6 jezdců.</p>
                    <p class="pricing-note-small">1 hodina na jízdárně = 50 min. &bull; 1 hodina terén = 60 min.</p>
                </div>
            </div>
        </section>`;
    }

    // === ŠKOLNÍ KONĚ A PONÍCI ===
    const horsesEl = document.getElementById('shared-horses');
    if (horsesEl) {
        horsesEl.innerHTML = `
        <section class="section section--horses">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Naši parťáci</span>
                    <h2 class="section-title">Školní koně a poníci</h2>
                </div>

                <h3 class="horses-subtitle">Školní koně</h3>
                <div class="horses-grid">
                    <div class="horse-card">
                        <h4>Zanzibar</h4>
                        <p>Sportovní minulost, skok L. Ideální učitel pro úplné začátečníky i pokročilé jezdce a na přípravu na ZZVJ. Spolehlivý v terénu.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Cézar</h4>
                        <p>Sportovní minulost, skok L. Ideální učitel pro mírně i středně pokročilé jezdce. V terénu spolehlivý.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Freska</h4>
                        <p>Příjemně temperamentní zkušená klisna s parkurovou minulostí pro středně pokročilé jezdce.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Maxík</h4>
                        <p>Šikovný skokový valach pro lehce pokročilé jezdce.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Wakara</h4>
                        <p>Spolehlivá a příjemná klisna se skokovou minulostí. Vhodná pro mírně pokročilé a pokročilé jezdce na jízdárně i v terénu.</p>
                    </div>
                </div>

                <h3 class="horses-subtitle">Školní poníci</h3>
                <div class="horses-grid">
                    <div class="horse-card">
                        <h4>Lenka</h4>
                        <p>Pony pro malé začátečníky i pokročilejší děti. Jízdárna i terén.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Mohykán</h4>
                        <p>Spolehlivý pro základy drezury i kavaletovou práci. Jízdárna i terén.</p>
                    </div>
                    <div class="horse-card">
                        <h4>Bibi &amp; Sára</h4>
                        <p>Poníci pro malé děti začínající i pokročilé. Jízdárna i terén.</p>
                    </div>
                </div>
            </div>
        </section>`;
    }

    // === KONTAKT NA TRENÉRKU ===
    const contactEl = document.getElementById('shared-trainer-contact');
    if (contactEl) {
        contactEl.innerHTML = `
        <div class="trainer-contact">
            <div class="trainer-info">
                <h3>Ing. Hana Kopečná</h3>
                <p class="trainer-role">Licencovaný cvičitel ČJF</p>
                <p><a href="tel:+420725026401">725 026 401</a></p>
                <p><a href="mailto:Hanka.kopecna@seznam.cz">Hanka.kopecna@seznam.cz</a></p>
            </div>
        </div>`;
    }

});
