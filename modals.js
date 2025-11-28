// Modal System for Requirements
const modals = {
    rentista: {
        title: {
            es: "Requisitos - Residencia Rentista",
            en: "Requirements - Rentista Residence"
        },
        content: {
            es: `
                <h4>Requisitos Generales</h4>
                <ul>
                    <li>Formulario de solicitud firmado</li>
                    <li>Pago de derechos: $50 USD</li>
                    <li>Dos fotografías tamaño pasaporte</li>
                    <li>Copia completa del pasaporte</li>
                    <li>Certificado de nacimiento apostillado</li>
                    <li>Antecedentes penales apostillados</li>
                    <li>Comprobante de ingreso al país</li>
                    <li>Huellas dactilares</li>
                </ul>
                <h4>Requisito Específico</h4>
                <ul>
                    <li><strong>$2,500 USD mensuales por 2 años</strong></li>
                    <li>Mediante depósito bancario o certificación financiera</li>
                </ul>
            `,
            en: `
                <h4>General Requirements</h4>
                <ul>
                    <li>Signed application form</li>
                    <li>Fee payment: $50 USD</li>
                    <li>Two passport-size photographs</li>
                    <li>Complete copy of passport</li>
                    <li>Apostilled birth certificate</li>
                    <li>Apostilled criminal record</li>
                    <li>Country entry proof</li>
                    <li>Fingerprints</li>
                </ul>
                <h4>Specific Requirement</h4>
                <ul>
                    <li><strong>$2,500 USD monthly for 2 years</strong></li>
                    <li>Via bank deposit or financial certification</li>
                </ul>
            `
        }
    },
    pensionado: {
        title: {
            es: "Requisitos - Residencia Pensionado",
            en: "Requirements - Pensioner Residence"
        },
        content: {
            es: `
                <h4>Requisitos Generales</h4>
                <ul>
                    <li>Formulario de solicitud firmado</li>
                    <li>Pago de derechos: $50 USD</li>
                    <li>Dos fotografías tamaño pasaporte</li>
                    <li>Copia completa del pasaporte</li>
                    <li>Certificado de nacimiento apostillado</li>
                    <li>Antecedentes penales apostillados</li>
                    <li>Comprobante de ingreso al país</li>
                    <li>Huellas dactilares</li>
                </ul>
                <h4>Requisito Específico</h4>
                <ul>
                    <li><strong>Carta oficial de pensión</strong></li>
                    <li>Emitida por embajada o entidad certificadora</li>
                    <li>Pensión vitalicia certificada</li>
                </ul>
            `,
            en: `
                <h4>General Requirements</h4>
                <ul>
                    <li>Signed application form</li>
                    <li>Fee payment: $50 USD</li>
                    <li>Two passport-size photographs</li>
                    <li>Complete copy of passport</li>
                    <li>Apostilled birth certificate</li>
                    <li>Apostilled criminal record</li>
                    <li>Country entry proof</li>
                    <li>Fingerprints</li>
                </ul>
                <h4>Specific Requirement</h4>
                <ul>
                    <li><strong>Official pension letter</strong></li>
                    <li>Issued by embassy or certifying entity</li>
                    <li>Certified lifetime pension</li>
                </ul>
            `
        }
    },
    inversionista: {
        title: {
            es: "Requisitos - Residencia Inversionista",
            en: "Requirements - Investor Residence"
        },
        content: {
            es: `
                <h4>Requisitos Generales</h4>
                <ul>
                    <li>Formulario de solicitud firmado</li>
                    <li>Pago de derechos: $50 USD</li>
                    <li>Dos fotografías tamaño pasaporte</li>
                    <li>Copia completa del pasaporte</li>
                    <li>Certificado de nacimiento apostillado</li>
                    <li>Antecedentes penales apostillados</li>
                    <li>Comprobante de ingreso al país</li>
                    <li>Huellas dactilares</li>
                </ul>
                <h4>Requisito Específico</h4>
                <ul>
                    <li><strong>Inversión mínima: $150,000 USD</strong></li>
                    <li>En propiedad, negocio o proyecto registrable</li>
                    <li>Escritura pública inscrita</li>
                    <li>Certificación registral actualizada</li>
                    <li>Avalúo por perito autorizado</li>
                </ul>
            `,
            en: `
                <h4>General Requirements</h4>
                <ul>
                    <li>Signed application form</li>
                    <li>Fee payment: $50 USD</li>
                    <li>Two passport-size photographs</li>
                    <li>Complete copy of passport</li>
                    <li>Apostilled birth certificate</li>
                    <li>Apostilled criminal record</li>
                    <li>Country entry proof</li>
                    <li>Fingerprints</li>
                </ul>
                <h4>Specific Requirement</h4>
                <ul>
                    <li><strong>Minimum investment: $150,000 USD</strong></li>
                    <li>In property, business or registrable project</li>
                    <li>Registered public deed</li>
                    <li>Updated registry certification</li>
                    <li>Authorized expert appraisal</li>
                </ul>
            `
        }
    }
};

// Create modal HTML dynamically
function createModal() {
    const modalHTML = `
        <div id="requirementsModal" class="modal">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2 id="modalTitle"></h2>
                <div id="modalBody"></div>
                <div class="modal-footer">
                    <a href="#contacto" class="btn btn-primary-large">Iniciar mi proceso</a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 10000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            animation: fadeIn 0.3s ease;
        }
        
        .modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background-color: white;
            padding: 48px;
            border-radius: 16px;
            max-width: 700px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.3s ease;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-close {
            position: absolute;
            right: 24px;
            top: 24px;
            font-size: 32px;
            font-weight: bold;
            color: #999;
            cursor: pointer;
            line-height: 1;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #e63946;
        }
        
        #modalTitle {
            color: #1d3557;
            margin-bottom: 24px;
            padding-right: 40px;
        }
        
        #modalBody {
            margin-bottom: 32px;
        }
        
        #modalBody h4 {
            color: #e63946;
            margin: 24px 0 16px;
            font-size: 1.25rem;
        }
        
        #modalBody ul {
            list-style: none;
            padding-left: 0;
        }
        
        #modalBody li {
            padding: 8px 0;
            padding-left: 28px;
            position: relative;
            color: #666;
            line-height: 1.7;
        }
        
        #modalBody li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #e63946;
            font-weight: bold;
        }
        
        .modal-footer {
            text-align: center;
            padding-top: 24px;
            border-top: 1px solid #e9ecef;
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 32px 24px;
                width: 95%;
                max-height: 90vh;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize modal system
function initModals() {
    createModal();
    
    const modal = document.getElementById('requirementsModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Add click listeners to all modal triggers
    document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-modal-trigger');
            const lang = currentLang || 'es';
            openModal(type, lang);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(type, lang) {
    const modal = document.getElementById('requirementsModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (modals[type]) {
        title.textContent = modals[type].title[lang];
        body.innerHTML = modals[type].content[lang];
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('requirementsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initModals);
