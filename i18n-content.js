// This script handles dynamic content translation for complex sections
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure main script is loaded
    setTimeout(function() {
        updateComplexContent(currentLang || 'es');
    }, 100);
});

function updateComplexContent(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update Services Section
    const serviceItems = document.querySelectorAll('#servicios .service-item');
    if (serviceItems.length >= 6) {
        serviceItems[0].querySelector('h4').textContent = t.service_expediente;
        serviceItems[0].querySelector('p').textContent = t.service_expediente_desc;
        
        serviceItems[1].querySelector('h4').textContent = t.service_tam;
        serviceItems[1].querySelector('p').textContent = t.service_tam_desc;
        
        serviceItems[2].querySelector('h4').textContent = t.service_tramites;
        serviceItems[2].querySelector('p').textContent = t.service_tramites_desc;
        
        serviceItems[3].querySelector('h4').textContent = t.service_renovaciones;
        serviceItems[3].querySelector('p').textContent = t.service_renovaciones_desc;
        
        serviceItems[4].querySelector('h4').textContent = t.service_aeropuerto;
        serviceItems[4].querySelector('p').textContent = t.service_aeropuerto_desc;
        
        serviceItems[5].querySelector('h4').textContent = t.service_adicionales;
        serviceItems[5].querySelector('p').textContent = t.service_adicionales_desc;
    }
    
    // Update Information Section Cards
    const infoCards = document.querySelectorAll('#informacion .info-card');
    if (infoCards.length >= 3) {
        // Apostilla card
        infoCards[0].querySelectorAll('p')[0].textContent = t.info_apostilla_1;
        infoCards[0].querySelectorAll('p')[1].textContent = t.info_apostilla_2;
        
        // Renovacion card
        const renovacionItems = infoCards[1].querySelectorAll('li');
        if (renovacionItems.length >= 3) {
            renovacionItems[0].innerHTML = t.info_renovacion_1.replace('2 años', '<strong>2 años</strong>');
            renovacionItems[1].textContent = t.info_renovacion_2;
            renovacionItems[2].innerHTML = t.info_renovacion_3.replace('3 años consecutivos', '<strong>3 años consecutivos</strong>');
        }
        
        // Permanente card
        infoCards[2].querySelectorAll('p')[0].textContent = t.info_permanente_intro;
        const permanenteItems = infoCards[2].querySelectorAll('li');
        if (permanenteItems.length >= 3) {
            permanenteItems[0].textContent = t.info_permanente_1;
            permanenteItems[1].textContent = t.info_permanente_2;
            permanenteItems[2].textContent = t.info_permanente_3;
        }
    }
    
    // Update Requirements Lists (General Requirements - same for all)
    updateGeneralRequirements(lang);
    
    // Update Specific Requirements
    updateRentistaSpecific(lang);
    updatePensionadoSpecific(lang);
    updateInversionistaSpecific(lang);
    
    // Update Services Lists in accordions
    updateServicesInAccordions(lang);
    
    // Update Contact Form
    updateContactForm(lang);
    
    // Update Footer
    updateFooter(lang);
}

function updateGeneralRequirements(lang) {
    const t = translations[lang];
    const reqKeys = ['req_form', 'req_payment', 'req_photos', 'req_passport', 'req_birth', 
                     'req_criminal', 'req_entry', 'req_fingerprints', 'req_consular', 'req_solvency'];
    
    // Update for each residence type
    ['#rentista', '#pensionado', '#inversionista'].forEach(selector => {
        const generalReqLists = document.querySelectorAll(`${selector} .accordion-content ul`);
        if (generalReqLists[0]) {
            const items = generalReqLists[0].querySelectorAll('li');
            items.forEach((item, index) => {
                if (reqKeys[index] && t[reqKeys[index]]) {
                    item.textContent = t[reqKeys[index]];
                }
            });
        }
    });
}

function updateRentistaSpecific(lang) {
    const t = translations[lang];
    const specificContent = document.querySelector('#rentista .accordion-item:nth-child(2) .accordion-content ul');
    if (specificContent) {
        const li = specificContent.querySelector('li');
        if (li) {
            li.innerHTML = t.rentista_requirement_income.replace('$2,500 USD', '<strong>$2,500 USD</strong>').replace('2 años', '<strong>2 años</strong>');
        }
    }
    
    // Update CTA
    const ctaBtn = document.querySelector('#rentista .btn-cta span');
    if (ctaBtn) ctaBtn.textContent = t.rentista_cta;
}

function updatePensionadoSpecific(lang) {
    const t = translations[lang];
    const specificContent = document.querySelector('#pensionado .accordion-item:nth-child(1) .accordion-content ul');
    if (specificContent) {
        const li = specificContent.querySelector('li');
        if (li) li.textContent = t.pensionado_requirement;
    }
    
    // Update CTA
    const ctaBtn = document.querySelector('#pensionado .btn-cta span');
    if (ctaBtn) ctaBtn.textContent = t.pensionado_cta;
}

function updateInversionistaSpecific(lang) {
    const t = translations[lang];
    
    // Investment requirement
    const investmentContent = document.querySelector('#inversionista .accordion-item:nth-child(1) .accordion-content');
    if (investmentContent) {
        const p = investmentContent.querySelector('p strong');
        if (p) p.textContent = t.inversionista_investment;
        
        const items = investmentContent.querySelectorAll('ul:first-of-type > li');
        if (items.length >= 3) {
            items[0].textContent = t.inversionista_property;
            items[1].textContent = t.inversionista_business;
            items[2].textContent = t.inversionista_project;
        }
    }
    
    // Documentation
    const docContent = document.querySelector('#inversionista .accordion-item:nth-child(2) .accordion-content');
    if (docContent) {
        const mainItems = docContent.querySelectorAll('ul > li');
        if (mainItems.length >= 4) {
            mainItems[0].textContent = t.inversionista_doc_1;
            mainItems[1].textContent = t.inversionista_doc_2;
            mainItems[2].textContent = t.inversionista_doc_3;
            
            const strong = mainItems[3].querySelector('strong');
            if (strong) strong.textContent = t.inversionista_doc_4;
            
            const subItems = mainItems[3].querySelectorAll('ul li');
            if (subItems.length >= 3) {
                subItems[0].textContent = t.inversionista_doc_4_1;
                subItems[1].textContent = t.inversionista_doc_4_2;
                subItems[2].textContent = t.inversionista_doc_4_3;
            }
        }
    }
    
    // Update CTA
    const ctaBtn = document.querySelector('#inversionista .btn-cta span');
    if (ctaBtn) ctaBtn.textContent = t.inversionista_cta;
}

function updateServicesInAccordions(lang) {
    const t = translations[lang];
    const serviceKeys = ['service_1', 'service_2', 'service_3', 'service_4', 'service_5', 
                        'service_6', 'service_7', 'service_8', 'service_9'];
    
    document.querySelectorAll('.residencia-card').forEach(card => {
        const servicesList = card.querySelector('.accordion-content ol');
        if (servicesList) {
            const items = servicesList.querySelectorAll('li');
            items.forEach((item, index) => {
                if (serviceKeys[index] && t[serviceKeys[index]]) {
                    item.textContent = t[serviceKeys[index]];
                }
            });
        }
    });
    
    // Update CTA button in services section
    const servicesCTA = document.querySelector('#servicios .btn-cta-large span');
    if (servicesCTA) servicesCTA.textContent = t.services_cta;
}

function updateContactForm(lang) {
    const t = translations[lang];
    
    // Update labels
    const labels = document.querySelectorAll('#contacto label');
    if (labels.length >= 6) {
        labels[0].innerHTML = t.contact_name + ' *';
        labels[1].innerHTML = t.contact_nationality + ' *';
        labels[2].innerHTML = t.contact_email + ' *';
        labels[3].innerHTML = t.contact_phone + ' *';
        labels[4].innerHTML = t.contact_type + ' *';
        labels[5].textContent = t.contact_message;
    }
    
    // Update select options
    const selectOptions = document.querySelectorAll('#tipo-residencia option');
    if (selectOptions.length >= 4) {
        selectOptions[0].textContent = t.contact_type_select;
        selectOptions[1].textContent = t.contact_type_rentista;
        selectOptions[2].textContent = t.contact_type_pensionado;
        selectOptions[3].textContent = t.contact_type_inversionista;
    }
    
    // Update submit button
    const submitBtn = document.querySelector('#contactForm .btn-submit span');
    if (submitBtn) submitBtn.textContent = t.contact_submit;
}

function updateFooter(lang) {
    const t = translations[lang];
    
    // Contact section
    const contactPs = document.querySelectorAll('.footer-section:first-child p');
    if (contactPs.length >= 4) {
        contactPs[0].innerHTML = '<i data-lucide="phone" class="footer-icon"></i> ' + t.footer_phone;
        contactPs[1].innerHTML = '<i data-lucide="mail" class="footer-icon"></i> ' + t.footer_email;
        contactPs[2].innerHTML = '<i data-lucide="map-pin" class="footer-icon"></i> ' + t.footer_address;
        contactPs[3].innerHTML = '<i data-lucide="clock" class="footer-icon"></i> ' + t.footer_hours;
    }
    
    // Links section
    const linksTitle = document.querySelector('.footer-section:nth-child(2) h4');
    if (linksTitle) linksTitle.textContent = t.footer_links_title;
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 5) {
        footerLinks[0].textContent = t.nav_rentista;
        footerLinks[1].textContent = t.nav_pensionado;
        footerLinks[2].textContent = t.nav_inversionista;
        footerLinks[3].textContent = t.footer_about;
        footerLinks[4].textContent = t.footer_contact;
    }
    
    // Brand section
    const brandDesc = document.querySelector('.footer-section:nth-child(3) p');
    if (brandDesc) brandDesc.textContent = t.footer_description;
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t.footer_rights;
    
    // Reinitialize Lucide icons after updating footer
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Make function available globally
window.updateComplexContent = updateComplexContent;
