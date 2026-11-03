const defaultState = {
  currentRole: 'cliente',
  project: {
    title: 'Reforma Completa - Apt 702',
    address: 'Rua das Flores, 450 - SP',
    clientName: 'Carlos Silva',
    workerName: 'Mestre João (Empreiteiro)',
    deadline: '25 Nov',
    daysLeft: 22,
    status: 'Em Execução'
  },
  stages: [
    {
      id: 1,
      title: 'Demolição e Limpeza',
      description: 'Remoção de revestimentos antigos, abertura de vão na bancada e descarte em caçamba autorizada.',
      progress: 100,
      status: 'concluido',
      deadline: '10 Out'
    },
    {
      id: 2,
      title: 'Alvenaria e Ajuste de Vãos',
      description: 'Construção da meia parede para bancada e assentamento de blocos de gesso.',
      progress: 100,
      status: 'concluido',
      deadline: '18 Out'
    },
    {
      id: 3,
      title: 'Instalações Hidráulicas e Elétricas',
      description: 'Troca de fiação, novos pontos de tomada 110v/220v e tubulação de água quente/fria.',
      progress: 100,
      status: 'concluido',
      deadline: '25 Out'
    },
    {
      id: 4,
      title: 'Contrapiso e Regularização',
      description: 'Nivelamento a laser do piso de todos os cômodos e caimento nos ralos.',
      progress: 100,
      status: 'concluido',
      deadline: '31 Out'
    },
    {
      id: 5,
      title: 'Revestimento e Porcelanatos',
      description: 'Assentamento de porcelanato 84x84 retificado na sala, cozinha e banheiros.',
      progress: 65,
      status: 'em_andamento',
      deadline: '08 Nov'
    },
    {
      id: 6,
      title: 'Pintura e Acabamentos Finos',
      description: 'Aplicação de massa corrida, lixamento e duas demãos de tinta lavável acetinada.',
      progress: 0,
      status: 'pendente',
      deadline: '18 Nov'
    },
    {
      id: 7,
      title: 'Louças, Metais e Limpeza Final',
      description: 'Instalação de pias, chuveiros, torneiras, luminárias e limpeza pós-obra.',
      progress: 0,
      status: 'pendente',
      deadline: '25 Nov'
    }
  ],
  materials: [
    {
      id: 1,
      name: 'Argamassa AC-III Cinza 20kg',
      needed: 40,
      received: 28,
      unit: 'sacos',
      status: 'critico'
    },
    {
      id: 2,
      name: 'Porcelanato Calacata 84x84',
      needed: 65,
      received: 65,
      unit: 'm²',
      status: 'ok'
    },
    {
      id: 3,
      name: 'Cimento CP-II 50kg',
      needed: 25,
      received: 25,
      unit: 'sacos',
      status: 'ok'
    },
    {
      id: 4,
      name: 'Tinta Acrílica Suvinil Fosco 18L',
      needed: 4,
      received: 2,
      unit: 'latas',
      status: 'baixo'
    },
    {
      id: 5,
      name: 'Tubo Soldável Tigre 25mm',
      needed: 12,
      received: 12,
      unit: 'barras',
      status: 'ok'
    }
  ],
  reports: [
    {
      id: 1,
      title: 'Início do assentamento de porcelanato na sala',
      stage: 'Revestimento e Porcelanatos',
      date: '03 Nov',
      author: 'Mestre João (Pedreiro)',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      description: 'Iniciamos a paginação do porcelanato retificado 84x84 com niveladores. Alinhamento perfeito e contrapiso bem aderido.'
    },
    {
      id: 2,
      title: 'Finalização do contrapiso com caimento correto',
      stage: 'Contrapiso e Regularização',
      date: '31 Out',
      author: 'Mestre João (Pedreiro)',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      description: 'Contrapiso curado e sem trincas. Teste de água no banheiro e varanda com 100% de escoamento aos ralos.'
    },
    {
      id: 3,
      title: 'Passagem dos conduítes e fiação nova',
      stage: 'Instalações Hidráulicas e Elétricas',
      date: '24 Out',
      author: 'Carlos Eletricista',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      description: 'Circuitos do ar-condicionado e chuveiro dimensionados com cabos de 6mm. Quadro de distribuição identificado.'
    }
  ],
  proposals: [
    {
      id: 'PROP-2026-01',
      title: 'Reforma Integral de Revestimentos e Pintura',
      contractor: 'Mestre João Construções & Reformas',
      services: ['Demolição', 'Contrapiso', 'Porcelanato', 'Pintura Completa'],
      materialsCost: 8400,
      laborCost: 11200,
      total: 19600,
      status: 'aprovado',
      date: '15 Set 2026',
      notes: 'Inclui descarte de entulho e ferramentas próprias.'
    },
    {
      id: 'PROP-2026-02',
      title: 'Instalação de Sanca de Gesso e Iluminação LED',
      contractor: 'Mestre João Construções & Reformas',
      services: ['Forro de gesso acartonado', 'Fita de LED', 'Pontos de spot dicroica'],
      materialsCost: 1850,
      laborCost: 2200,
      total: 4050,
      status: 'pendente',
      date: '02 Nov 2026',
      notes: 'Adicional opcional para decoração do teto da sala de estar.'
    }
  ],
  professionals: [
    {
      id: 1,
      name: 'João Pedro de Alencar',
      role: 'Pedreiro & Empreiteiro',
      rating: '4.9',
      reviews: 38,
      category: 'Pedreiro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      specialties: ['Porcelanato', 'Alvenaria', 'Reboco e Estrutura'],
      priceRange: 'R$ 180 - R$ 250 / diária'
    },
    {
      id: 2,
      name: 'Marcos Vinicius',
      role: 'Mestre de Obras Geral',
      rating: '5.0',
      reviews: 52,
      category: 'Mestre de Obras',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      specialties: ['Gestão de Equipes', 'Fundação', 'Reformas de Luxo'],
      priceRange: 'Orçamento por Empreitada'
    },
    {
      id: 3,
      name: 'Rafael Dantas',
      role: 'Pintor Profissional',
      rating: '4.8',
      reviews: 29,
      category: 'Pintor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      specialties: ['Massa Corrida', 'Efeito Cimento Queimado', 'Airless'],
      priceRange: 'R$ 150 - R$ 220 / diária'
    },
    {
      id: 4,
      name: 'Eng. Lucas Andrade',
      role: 'Engenheiro Civil (CREA-SP)',
      rating: '5.0',
      reviews: 44,
      category: 'Engenheiro',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      specialties: ['ART de Reforma', 'Projetos Estruturais', 'Vistorias'],
      priceRange: 'Projetos a partir de R$ 900'
    },
    {
      id: 5,
      name: 'Antonio Santos',
      role: 'Eletricista Instalador',
      rating: '4.9',
      reviews: 31,
      category: 'Eletricista',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      specialties: ['Padrão de Entrada', 'Quadros de Disjuntores', 'Automação'],
      priceRange: 'R$ 160 - R$ 230 / diária'
    }
  ],
  notifications: [
    {
      id: 1,
      title: 'Nova atualização fotográfica',
      desc: 'Mestre João postou fotos do porcelanato da sala e cozinha.',
      time: 'Há 2 horas',
      unread: true,
      type: 'photo'
    },
    {
      id: 2,
      title: 'Alerta de Insumos',
      desc: 'Argamassa AC-III atingiu nível crítico (apenas 28 sacos no canteiro).',
      time: 'Há 4 horas',
      unread: true,
      type: 'material'
    },
    {
      id: 3,
      title: 'Etapa Avançada',
      desc: 'Etapa 5 (Revestimento) atingiu 65% de conclusão.',
      time: 'Ontem às 17h30',
      unread: true,
      type: 'stage'
    },
    {
      id: 4,
      title: 'Proposta Aprovada',
      desc: 'A proposta PROP-2026-01 foi aprovada pelo cliente Carlos Silva.',
      time: '15 Set 2026',
      unread: false,
      type: 'proposal'
    }
  ],
  opportunities: [
    {
      id: 'OPP-101',
      client: 'Fernanda Lima',
      service: 'Reforma de Banheiro 4m²',
      location: 'Vila Mariana - SP',
      date: 'Hoje',
      status: 'Aguardando Resposta'
    },
    {
      id: 'OPP-102',
      client: 'Rodrigo Silveira',
      service: 'Troca de Piso Cerâmico 45m²',
      location: 'Pinheiros - SP',
      date: 'Ontem',
      status: 'Aguardando Resposta'
    }
  ]
};

class ObraEmFocoApp {
  constructor() {
    this.state = this.loadState();
    this.initElements();
    this.bindEvents();
    this.render();
    this.initChatbot();
  }

  loadState() {
    const saved = localStorage.getItem('obra_em_foco_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultState;
      }
    }
    return defaultState;
  }

  saveState() {
    localStorage.setItem('obra_em_foco_state', JSON.stringify(this.state));
  }

  initElements() {
    this.btnRoleClient = document.getElementById('btnRoleClient');
    this.btnRoleWorker = document.getElementById('btnRoleWorker');
    this.clientNavList = document.getElementById('clientNavList');
    this.workerNavList = document.getElementById('workerNavList');
    this.mobileClientTabs = document.getElementById('mobileClientTabs');
    this.mobileWorkerTabs = document.getElementById('mobileWorkerTabs');
    this.userAvatar = document.getElementById('userAvatar');
    this.heroBadgeCategory = document.getElementById('heroBadgeCategory');
    this.heroHeading = document.getElementById('heroHeading');
    this.heroSubtitle = document.getElementById('heroSubtitle');
    this.btnNotifications = document.getElementById('btnNotifications');
    this.notifBadge = document.getElementById('notifBadge');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBody = document.getElementById('modalBody');
    this.toastNotification = document.getElementById('toastNotification');
    this.chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    this.chatbotWindow = document.getElementById('chatbotWindow');
    this.chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
    this.chatMessages = document.getElementById('chatMessages');
    this.chatInput = document.getElementById('chatInput');
    this.sidebarProgressBar = document.getElementById('sidebarProgressBar');
    this.sidebarProgressNum = document.getElementById('sidebarProgressNum');
  }

  bindEvents() {
    this.btnRoleClient.addEventListener('click', () => this.switchRole('cliente'));
    this.btnRoleWorker.addEventListener('click', () => this.switchRole('pedreiro'));

    document.querySelectorAll('.nav-link-btn, .mobile-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const viewId = btn.getAttribute('data-view');
        this.switchView(viewId);
      });
    });

    this.btnNotifications.addEventListener('click', () => {
      if (this.state.currentRole === 'cliente') {
        this.switchView('client-notifications');
      } else {
        this.switchRole('cliente');
        this.switchView('client-notifications');
      }
    });

    this.chatbotToggleBtn.addEventListener('click', () => this.toggleChatbot());
    this.chatbotCloseBtn.addEventListener('click', () => this.toggleChatbot(false));

    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.closeModal();
      }
    });

    const searchInput = document.getElementById('prosSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.filterPros(e.target.value);
      });
    }

    document.querySelectorAll('.filter-chip').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const category = pill.getAttribute('data-category');
        this.filterProsByCategory(category);
      });
    });

    document.querySelectorAll('.preset-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const imgUrl = btn.getAttribute('data-img');
        const urlInput = document.getElementById('reportImageUrlInput');
        if (urlInput) urlInput.value = imgUrl;
      });
    });
  }

  calcOverallProgress() {
    if (!this.state.stages || this.state.stages.length === 0) return 0;
    const total = this.state.stages.reduce((acc, st) => acc + Number(st.progress), 0);
    return Math.round(total / this.state.stages.length);
  }

  switchRole(role) {
    this.state.currentRole = role;
    this.saveState();

    if (role === 'cliente') {
      this.btnRoleClient.classList.add('active');
      this.btnRoleWorker.classList.remove('active');
      this.clientNavList.style.display = 'flex';
      this.workerNavList.style.display = 'none';
      if (this.mobileClientTabs) this.mobileClientTabs.style.display = 'flex';
      if (this.mobileWorkerTabs) this.mobileWorkerTabs.style.display = 'none';

      this.userAvatar.textContent = 'CS';
      this.userAvatar.classList.remove('worker-avatar');

      this.heroBadgeCategory.textContent = '01 CLIENTE';
      this.heroHeading.innerHTML = '<span class="hero-underline">Uma obra.</span> Duas interfaces. Informação compartilhada.';
      this.heroSubtitle.textContent = 'Acompanhe etapas em tempo real, aprove orçamentos e consulte relatórios fotográficos da sua obra.';

      this.switchView('client-overview');
    } else {
      this.btnRoleWorker.classList.add('active');
      this.btnRoleClient.classList.remove('active');
      this.workerNavList.style.display = 'flex';
      this.clientNavList.style.display = 'none';
      if (this.mobileClientTabs) this.mobileClientTabs.style.display = 'none';
      if (this.mobileWorkerTabs) this.mobileWorkerTabs.style.display = 'flex';

      this.userAvatar.textContent = 'MJ';
      this.userAvatar.classList.add('worker-avatar');

      this.heroBadgeCategory.textContent = '02 FUNCIONÁRIO / PEDREIRO';
      this.heroHeading.innerHTML = '<span class="hero-underline">Controle operacional.</span> Gestão de materiais e etapas.';
      this.heroSubtitle.textContent = 'Organize atividades no canteiro, gerencie insumos e publique fotos diárias para o cliente.';

      this.switchView('worker-overview');
    }

    this.showToast(`Visualizando como: ${role === 'cliente' ? '01 Cliente' : '02 Funcionário'}`);
  }

  switchView(viewId) {
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add('active');
    }

    document.querySelectorAll('.nav-link-btn, .mobile-tab-btn').forEach(item => {
      if (item.getAttribute('data-view') === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const progress = this.calcOverallProgress();
    const doneStagesCount = this.state.stages.filter(s => s.status === 'concluido').length;

    this.sidebarProgressBar.style.width = `${progress}%`;
    this.sidebarProgressNum.textContent = `${progress}%`;

    const clientStatPercent = document.getElementById('clientStatPercent');
    if (clientStatPercent) clientStatPercent.textContent = `${progress}%`;

    const clientStatDoneStages = document.getElementById('clientStatDoneStages');
    if (clientStatDoneStages) clientStatDoneStages.textContent = `${doneStagesCount} / ${this.state.stages.length}`;

    const clientProgressFill = document.getElementById('clientProgressFill');
    if (clientProgressFill) clientProgressFill.style.width = `${progress}%`;

    this.renderClientTimeline();
    this.renderClientStagesTable();
    this.renderClientLatestPreview();
    this.renderReportsFeed();
    this.renderProposals();
    this.renderProsDirectory(this.state.professionals);
    this.renderNotifications();

    this.renderWorkerOverview();
    this.renderWorkerStagesControl();
    this.renderWorkerMaterialsTable();
    this.renderWorkerQuotes();
    this.renderWorkerOpportunities();

    this.populateReportStageSelect();
  }

  renderClientTimeline() {
    const container = document.getElementById('clientStagesTimeline');
    if (!container) return;

    container.innerHTML = this.state.stages.map((st, idx) => {
      let statusClass = '';
      let statusBadge = '';
      if (st.status === 'concluido') {
        statusClass = 'completed';
        statusBadge = '<span class="badge badge-success">&#10003; 100%</span>';
      } else if (st.status === 'em_andamento') {
        statusClass = 'current';
        statusBadge = `<span class="badge badge-primary">${st.progress}%</span>`;
      } else {
        statusBadge = '<span class="badge badge-secondary">0%</span>';
      }

      return `
        <div class="timeline-step ${statusClass}">
          <div class="timeline-step-header">
            <span class="step-num">0${idx + 1}</span>
            ${statusBadge}
          </div>
          <div class="step-title">${st.title}</div>
          <div class="step-meta">Prazo: ${st.deadline}</div>
        </div>
      `;
    }).join('');
  }

  renderClientStagesTable() {
    const container = document.getElementById('clientStagesTableContainer');
    if (!container) return;

    container.innerHTML = `
      <table class="custom-table">
        <thead>
          <tr>
            <th>Etapa</th>
            <th>Progresso</th>
            <th>Prazo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${this.state.stages.map(st => {
            let badgeHtml = '';
            if (st.status === 'concluido') {
              badgeHtml = '<span class="badge badge-success">&#10003; Concluída</span>';
            } else if (st.status === 'em_andamento') {
              badgeHtml = '<span class="badge badge-warning">Em Andamento</span>';
            } else {
              badgeHtml = '<span class="badge badge-secondary">Pendente</span>';
            }

            return `
              <tr>
                <td>
                  <strong>${st.title}</strong>
                  <div style="font-size:0.75rem; color:#71717a;">${st.description}</div>
                </td>
                <td>
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <div style="width:60px; height:6px; background:#eceae5; border-radius:999px; overflow:hidden;">
                      <div style="width:${st.progress}%; height:100%; background:#d49a26;"></div>
                    </div>
                    <span style="font-size:0.75rem; font-weight:700;">${st.progress}%</span>
                  </div>
                </td>
                <td><small>${st.deadline}</small></td>
                <td>${badgeHtml}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  renderClientLatestPreview() {
    const container = document.getElementById('clientLatestUpdatePreview');
    if (!container) return;

    if (this.state.reports.length === 0) {
      container.innerHTML = '<p class="subtle-note">Nenhuma foto postada ainda.</p>';
      return;
    }

    const latest = this.state.reports[0];
    container.innerHTML = `
      <div class="preview-report-card">
        <img src="${latest.image}" alt="${latest.title}">
        <div class="p-content">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
            <span class="badge badge-primary">${latest.stage}</span>
            <small style="color:#71717a;">${latest.date}</small>
          </div>
          <strong style="display:block; font-size:0.9rem; margin-bottom:0.25rem; color:#18181b;">${latest.title}</strong>
          <p style="font-size:0.8rem; color:#3f3f46; line-height:1.4;">${latest.description}</p>
          <div style="margin-top:0.65rem; font-size:0.72rem; color:#a1a1aa;">
            Registrado por: <strong>${latest.author}</strong>
          </div>
        </div>
      </div>
    `;
  }

  renderReportsFeed() {
    const container = document.getElementById('clientReportsFeed');
    if (!container) return;

    container.innerHTML = this.state.reports.map(rep => `
      <article class="report-card">
        <img class="report-card-media" src="${rep.image}" alt="${rep.title}">
        <div class="report-card-body">
          <div class="report-meta-row">
            <span class="badge badge-primary">${rep.stage}</span>
            <span>${rep.date}</span>
          </div>
          <h3 class="report-title">${rep.title}</h3>
          <p class="report-text">${rep.description}</p>
          <div class="report-footer">
            <span>${rep.author}</span>
            <span style="color:#15803d; font-weight:700;">&#10003; Evidência validada</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProposals() {
    const container = document.getElementById('clientProposalsList');
    if (!container) return;

    container.innerHTML = this.state.proposals.map(prop => {
      const isApproved = prop.status === 'aprovado';
      return `
        <div class="proposal-card ${isApproved ? 'approved' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span class="badge badge-secondary">${prop.id}</span>
              <h3 style="font-size:1.05rem; margin-top:0.3rem; font-weight:800;">${prop.title}</h3>
              <p style="font-size:0.76rem; color:#71717a;">Responsável: ${prop.contractor}</p>
            </div>
            ${isApproved
              ? '<span class="badge badge-success">&#10003; Aprovado</span>'
              : '<span class="badge badge-warning">Em Análise</span>'
            }
          </div>

          <div class="proposal-price-box">
            <div>
              <span style="font-size:0.7rem; color:#71717a; font-weight:700; text-transform:uppercase;">Valor Total</span>
              <div class="proposal-price-val">R$ ${prop.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="app.openPdfModal('${prop.id}')">Ver PDF</button>
          </div>

          <ul class="proposal-items-list">
            <li>
              <span>Mão de Obra:</span>
              <strong>R$ ${prop.laborCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
            </li>
            <li>
              <span>Estimativa de Materiais:</span>
              <strong>R$ ${prop.materialsCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
            </li>
          </ul>

          <div style="font-size:0.75rem; color:#71717a; background:#f4f4f2; padding:0.6rem; border-radius:6px;">
            <strong>Observações:</strong> ${prop.notes}
          </div>

          ${!isApproved ? `
            <div style="display:flex; gap:0.5rem; margin-top:0.35rem;">
              <button class="btn btn-success" style="flex:1;" onclick="app.approveProposal('${prop.id}')">
                &#10003; Aprovar Orçamento
              </button>
              <button class="btn btn-secondary" onclick="app.rejectProposal('${prop.id}')">
                Recusar
              </button>
            </div>
          ` : `
            <div style="font-size:0.78rem; color:#15803d; font-weight:700; text-align:center;">
              Orçamento aprovado. Serviços autorizados para execução!
            </div>
          `}
        </div>
      `;
    }).join('');
  }

  approveProposal(propId) {
    const prop = this.state.proposals.find(p => p.id === propId);
    if (prop) {
      prop.status = 'aprovado';
      this.state.notifications.unshift({
        id: Date.now(),
        title: 'Orçamento Aprovado',
        desc: `Você aprovou o orçamento "${prop.title}". O profissional foi notificado.`,
        time: 'Agora mesmo',
        unread: true,
        type: 'proposal'
      });
      this.saveState();
      this.render();
      this.showToast('Orçamento aprovado!');
    }
  }

  rejectProposal(propId) {
    const prop = this.state.proposals.find(p => p.id === propId);
    if (prop) {
      prop.status = 'recusado';
      this.saveState();
      this.render();
      this.showToast('Orçamento recusado.');
    }
  }

  renderProsDirectory(list) {
    const container = document.getElementById('prosDirectoryGrid');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = '<p class="subtle-note">Nenhum profissional encontrado.</p>';
      return;
    }

    container.innerHTML = list.map(pro => `
      <div class="pro-card">
        <div class="pro-header">
          <img class="pro-avatar" src="${pro.avatar}" alt="${pro.name}">
          <div>
            <h4 class="pro-name">${pro.name}</h4>
            <span class="pro-role">${pro.role}</span>
            <div class="pro-rating">
              &#9733; <span>${pro.rating}</span>
              <span style="color:#a1a1aa; font-weight:normal;">(${pro.reviews})</span>
            </div>
          </div>
        </div>

        <div class="pro-tags">
          ${pro.specialties.map(tag => `<span class="pro-tag">${tag}</span>`).join('')}
        </div>

        <div style="font-size:0.76rem; color:#3f3f46; font-weight:600; margin-top:auto;">
          Faixa: <span style="color:#18181b;">${pro.priceRange}</span>
        </div>

        <button class="btn btn-secondary btn-sm" style="width:100%;" onclick="app.requestProQuote('${pro.name}')">
          Solicitar Orçamento
        </button>
      </div>
    `).join('');
  }

  filterPros(query) {
    const q = query.toLowerCase();
    const filtered = this.state.professionals.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.role.toLowerCase().includes(q) ||
      p.specialties.some(s => s.toLowerCase().includes(q))
    );
    this.renderProsDirectory(filtered);
  }

  filterProsByCategory(category) {
    if (category === 'all') {
      this.renderProsDirectory(this.state.professionals);
    } else {
      const filtered = this.state.professionals.filter(p => p.category === category);
      this.renderProsDirectory(filtered);
    }
  }

  requestProQuote(proName) {
    this.openModal(
      `Solicitar Orçamento: ${proName}`,
      `
        <form onsubmit="app.handleSendQuoteRequest(event, '${proName}')">
          <div class="form-row-group">
            <label class="field-label">Descrição do Serviço</label>
            <textarea class="app-textarea-field" rows="3" placeholder="Ex: Assentar 35m² de piso cerâmico na cozinha..." required></textarea>
          </div>
          <div class="form-row-group">
            <label class="field-label">Prazo Desejado</label>
            <input type="text" class="app-input-field" placeholder="Ex: Para os próximos 15 dias" required>
          </div>
          <div class="form-footer-buttons">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Enviar Solicitação</button>
          </div>
        </form>
      `
    );
  }

  handleSendQuoteRequest(e, proName) {
    e.preventDefault();
    this.closeModal();
    this.showToast(`Solicitação enviada para ${proName}!`);
  }

  renderNotifications() {
    const container = document.getElementById('notificationsContainer');
    if (!container) return;

    const unreadCount = this.state.notifications.filter(n => n.unread).length;
    if (this.notifBadge) {
      this.notifBadge.textContent = unreadCount;
      this.notifBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    }

    container.innerHTML = this.state.notifications.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}">
        <div class="notif-icon" style="background:#fef3c7;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d49a26" stroke-width="2.2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        <div class="notif-content">
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>
    `).join('');
  }

  markAllNotificationsRead() {
    this.state.notifications.forEach(n => n.unread = false);
    this.saveState();
    this.renderNotifications();
    this.showToast('Notificações marcadas como lidas.');
  }

  renderWorkerOverview() {
    const currentStage = this.state.stages.find(s => s.status === 'em_andamento') || this.state.stages[0];
    const workerCurrentStageText = document.getElementById('workerCurrentStageText');
    const workerCurrentStageProgress = document.getElementById('workerCurrentStageProgress');
    if (workerCurrentStageText) workerCurrentStageText.textContent = currentStage.title;
    if (workerCurrentStageProgress) workerCurrentStageProgress.textContent = `${currentStage.progress}% concluída`;

    const critCount = this.state.materials.filter(m => m.status === 'critico').length;
    const workerCriticalMaterialsCount = document.getElementById('workerCriticalMaterialsCount');
    if (workerCriticalMaterialsCount) {
      workerCriticalMaterialsCount.textContent = critCount > 0 ? `${critCount} Alerta` : 'Estoque OK';
    }

    const workerReportsCount = document.getElementById('workerReportsCount');
    if (workerReportsCount) workerReportsCount.textContent = this.state.reports.length;

    const materialsQuickList = document.getElementById('workerMaterialsQuickList');
    if (materialsQuickList) {
      materialsQuickList.innerHTML = this.state.materials.slice(0, 4).map(mat => {
        let badgeHtml = '';
        if (mat.status === 'critico') badgeHtml = '<span class="badge badge-danger">Crítico</span>';
        else if (mat.status === 'baixo') badgeHtml = '<span class="badge badge-warning">Baixo</span>';
        else badgeHtml = '<span class="badge badge-success">OK</span>';

        return `
          <div class="compact-list-item">
            <div>
              <strong>${mat.name}</strong>
              <div style="font-size:0.72rem; color:#71717a;">${mat.received} de ${mat.needed} ${mat.unit} no local</div>
            </div>
            ${badgeHtml}
          </div>
        `;
      }).join('');
    }
  }

  renderWorkerStagesControl() {
    const container = document.getElementById('workerStagesControlList');
    if (!container) return;

    container.innerHTML = this.state.stages.map((st) => `
      <div class="worker-stage-item">
        <div class="worker-stage-top">
          <div>
            <span style="font-size:0.72rem; font-weight:800; color:#d49a26; text-transform:uppercase;">Etapa ${st.id}</span>
            <h4 style="font-size:0.95rem; font-weight:800; color:#18181b;">${st.title}</h4>
            <p style="font-size:0.78rem; color:#71717a;">${st.description}</p>
          </div>
          <div class="worker-stage-actions">
            <select class="app-input-field" style="width:130px; padding:0.35rem;" onchange="app.updateStageStatus(${st.id}, this.value)">
              <option value="pendente" ${st.status === 'pendente' ? 'selected' : ''}>Pendente</option>
              <option value="em_andamento" ${st.status === 'em_andamento' ? 'selected' : ''}>Em Andamento</option>
              <option value="concluido" ${st.status === 'concluido' ? 'selected' : ''}>Concluída</option>
            </select>
            <button class="btn btn-secondary btn-sm" onclick="app.openEditStageModal(${st.id})">Editar</button>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:0.75rem;">
          <input type="range" min="0" max="100" value="${st.progress}" style="flex:1; accent-color:#d49a26;" onchange="app.updateStageProgress(${st.id}, this.value)">
          <strong style="width:42px; text-align:right; font-size:0.82rem;">${st.progress}%</strong>
          <button class="btn btn-primary btn-sm" onclick="app.completeStageQuick(${st.id})">&#10003; Finalizar</button>
        </div>
      </div>
    `).join('');
  }

  updateStageStatus(stageId, newStatus) {
    const stage = this.state.stages.find(s => s.id === stageId);
    if (stage) {
      stage.status = newStatus;
      if (newStatus === 'concluido') stage.progress = 100;
      else if (newStatus === 'pendente') stage.progress = 0;
      else if (stage.progress === 0 || stage.progress === 100) stage.progress = 50;

      this.state.notifications.unshift({
        id: Date.now(),
        title: `Etapa Atualizada: ${stage.title}`,
        desc: `Status alterado para "${newStatus.replace('_', ' ').toUpperCase()}".`,
        time: 'Agora mesmo',
        unread: true,
        type: 'stage'
      });

      this.saveState();
      this.render();
      this.showToast(`Etapa "${stage.title}" atualizada!`);
    }
  }

  updateStageProgress(stageId, progressVal) {
    const stage = this.state.stages.find(s => s.id === stageId);
    if (stage) {
      stage.progress = Number(progressVal);
      if (stage.progress === 100) stage.status = 'concluido';
      else if (stage.progress === 0) stage.status = 'pendente';
      else stage.status = 'em_andamento';

      this.saveState();
      this.render();
    }
  }

  completeStageQuick(stageId) {
    this.updateStageStatus(stageId, 'concluido');
  }

  openEditStageModal(stageId) {
    const stage = this.state.stages.find(s => s.id === stageId);
    if (!stage) return;

    this.openModal(
      `Editar Etapa: ${stage.title}`,
      `
        <form onsubmit="app.handleSaveEditStage(event, ${stage.id})">
          <div class="form-row-group">
            <label class="field-label">Título da Etapa</label>
            <input type="text" id="editStageTitle" class="app-input-field" value="${stage.title}" required>
          </div>
          <div class="form-row-group">
            <label class="field-label">Descrição</label>
            <textarea id="editStageDesc" class="app-textarea-field" rows="3" required>${stage.description}</textarea>
          </div>
          <div class="form-cols-two">
            <div class="form-row-group">
              <label class="field-label">Prazo Estimado</label>
              <input type="text" id="editStageDeadline" class="app-input-field" value="${stage.deadline}" required>
            </div>
            <div class="form-row-group">
              <label class="field-label">Avanço (%)</label>
              <input type="number" id="editStageProgress" class="app-input-field" min="0" max="100" value="${stage.progress}" required>
            </div>
          </div>
          <div class="form-footer-buttons">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Salvar</button>
          </div>
        </form>
      `
    );
  }

  handleSaveEditStage(e, stageId) {
    e.preventDefault();
    const stage = this.state.stages.find(s => s.id === stageId);
    if (stage) {
      stage.title = document.getElementById('editStageTitle').value;
      stage.description = document.getElementById('editStageDesc').value;
      stage.deadline = document.getElementById('editStageDeadline').value;
      stage.progress = Number(document.getElementById('editStageProgress').value);

      if (stage.progress === 100) stage.status = 'concluido';
      else if (stage.progress === 0) stage.status = 'pendente';
      else stage.status = 'em_andamento';

      this.saveState();
      this.closeModal();
      this.render();
      this.showToast('Etapa atualizada!');
    }
  }

  openNewStageModal() {
    this.openModal(
      'Nova Etapa na Obra',
      `
        <form onsubmit="app.handleCreateStage(event)">
          <div class="form-row-group">
            <label class="field-label">Nome da Etapa</label>
            <input type="text" id="newStageTitle" class="app-input-field" placeholder="Ex: Instalação de Rodapés e Guarnições" required>
          </div>
          <div class="form-row-group">
            <label class="field-label">Descrição das Atividades</label>
            <textarea id="newStageDesc" class="app-textarea-field" rows="3" placeholder="Detalhes da fase..." required></textarea>
          </div>
          <div class="form-row-group">
            <label class="field-label">Prazo Estimado</label>
            <input type="text" id="newStageDeadline" class="app-input-field" placeholder="Ex: 30 Nov" required>
          </div>
          <div class="form-footer-buttons">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Adicionar</button>
          </div>
        </form>
      `
    );
  }

  handleCreateStage(e) {
    e.preventDefault();
    const title = document.getElementById('newStageTitle').value;
    const description = document.getElementById('newStageDesc').value;
    const deadline = document.getElementById('newStageDeadline').value;

    const newId = this.state.stages.length > 0 ? Math.max(...this.state.stages.map(s => s.id)) + 1 : 1;
    this.state.stages.push({
      id: newId,
      title,
      description,
      deadline,
      progress: 0,
      status: 'pendente'
    });

    this.saveState();
    this.closeModal();
    this.render();
    this.showToast('Nova etapa cadastrada!');
  }

  renderWorkerMaterialsTable() {
    const container = document.getElementById('workerMaterialsTableContainer');
    if (!container) return;

    container.innerHTML = `
      <table class="custom-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>No Canteiro</th>
            <th>Previsto</th>
            <th>Situação</th>
            <th>Movimentação</th>
          </tr>
        </thead>
        <tbody>
          ${this.state.materials.map(mat => {
            let statusBadge = '';
            if (mat.status === 'ok') statusBadge = '<span class="badge badge-success">&#10003; Suficiente</span>';
            else if (mat.status === 'baixo') statusBadge = '<span class="badge badge-warning">Baixo</span>';
            else statusBadge = '<span class="badge badge-danger">Crítico</span>';

            return `
              <tr>
                <td><strong>${mat.name}</strong></td>
                <td>
                  <span style="font-size:0.92rem; font-weight:800; color:#18181b;">${mat.received}</span>
                  <span style="font-size:0.75rem; color:#71717a;">${mat.unit}</span>
                </td>
                <td>${mat.needed} ${mat.unit}</td>
                <td>${statusBadge}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="app.quickAddMaterialUnits(${mat.id})">+ Entrada</button>
                  <button class="btn btn-secondary btn-sm" onclick="app.quickConsumeMaterialUnits(${mat.id})">- Consumo</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  quickAddMaterialUnits(matId) {
    const mat = this.state.materials.find(m => m.id === matId);
    if (mat) {
      mat.received += 5;
      if (mat.received >= mat.needed) mat.status = 'ok';
      else if (mat.received > mat.needed * 0.4) mat.status = 'baixo';

      this.saveState();
      this.render();
      this.showToast(`Entrada: +5 ${mat.unit} de ${mat.name}`);
    }
  }

  quickConsumeMaterialUnits(matId) {
    const mat = this.state.materials.find(m => m.id === matId);
    if (mat && mat.received > 0) {
      mat.received = Math.max(0, mat.received - 5);
      if (mat.received < mat.needed * 0.3) mat.status = 'critico';
      else if (mat.received < mat.needed * 0.7) mat.status = 'baixo';

      this.saveState();
      this.render();
      this.showToast(`Consumo: -5 ${mat.unit} de ${mat.name}`);
    }
  }

  openNewMaterialModal() {
    this.openModal(
      'Cadastrar Material',
      `
        <form onsubmit="app.handleCreateMaterial(event)">
          <div class="form-row-group">
            <label class="field-label">Nome do Insumo</label>
            <input type="text" id="newMatName" class="app-input-field" placeholder="Ex: Cimento CP-II 50kg" required>
          </div>
          <div class="form-cols-two">
            <div class="form-row-group">
              <label class="field-label">Qtd Prevista</label>
              <input type="number" id="newMatNeeded" class="app-input-field" min="1" placeholder="50" required>
            </div>
            <div class="form-row-group">
              <label class="field-label">Unidade</label>
              <input type="text" id="newMatUnit" class="app-input-field" placeholder="sacos, m², un" required>
            </div>
          </div>
          <div class="form-row-group">
            <label class="field-label">Qtd Inicial no Canteiro</label>
            <input type="number" id="newMatReceived" class="app-input-field" min="0" placeholder="0" required>
          </div>
          <div class="form-footer-buttons">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Salvar</button>
          </div>
        </form>
      `
    );
  }

  handleCreateMaterial(e) {
    e.preventDefault();
    const name = document.getElementById('newMatName').value;
    const needed = Number(document.getElementById('newMatNeeded').value);
    const unit = document.getElementById('newMatUnit').value;
    const received = Number(document.getElementById('newMatReceived').value);

    let status = 'ok';
    if (received < needed * 0.3) status = 'critico';
    else if (received < needed * 0.7) status = 'baixo';

    const newId = this.state.materials.length > 0 ? Math.max(...this.state.materials.map(m => m.id)) + 1 : 1;
    this.state.materials.push({
      id: newId,
      name,
      needed,
      unit,
      received,
      status
    });

    this.saveState();
    this.closeModal();
    this.render();
    this.showToast('Material cadastrado no estoque!');
  }

  populateReportStageSelect() {
    const sel = document.getElementById('reportStageSelect');
    if (!sel) return;
    sel.innerHTML = this.state.stages.map(st => `<option value="${st.title}">${st.title}</option>`).join('');

    const dateInput = document.getElementById('reportDateInput');
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
    }
  }

  handleCreateReport(e) {
    e.preventDefault();
    const title = document.getElementById('reportTitleInput').value;
    const stage = document.getElementById('reportStageSelect').value;
    const dateVal = document.getElementById('reportDateInput').value;
    const desc = document.getElementById('reportDescInput').value;
    let imageUrl = document.getElementById('reportImageUrlInput').value;

    if (!imageUrl) {
      const activePreset = document.querySelector('.preset-thumb-btn.active');
      imageUrl = activePreset ? activePreset.getAttribute('data-img') : 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80';
    }

    const formattedDate = dateVal ? `${dateVal.split('-')[2]}/${dateVal.split('-')[1]}` : 'Hoje';

    const newReport = {
      id: Date.now(),
      title,
      stage,
      date: formattedDate,
      author: 'Mestre João (Pedreiro)',
      image: imageUrl,
      description: desc
    };

    this.state.reports.unshift(newReport);

    this.state.notifications.unshift({
      id: Date.now(),
      title: 'Nova atualização de obra publicada',
      desc: title,
      time: 'Agora mesmo',
      unread: true,
      type: 'photo'
    });

    this.saveState();
    this.render();
    this.showToast('Foto publicada no diário da obra!');
    this.switchView('client-reports');
  }

  renderWorkerQuotes() {
    const container = document.getElementById('workerQuotesList');
    if (!container) return;

    container.innerHTML = this.state.proposals.map(prop => `
      <div class="quote-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge badge-secondary">${prop.id}</span>
          ${prop.status === 'aprovado'
            ? '<span class="badge badge-success">&#10003; Aprovado</span>'
            : '<span class="badge badge-warning">Em Análise</span>'
          }
        </div>
        <h3 style="font-size:1rem; font-weight:800;">${prop.title}</h3>
        <div style="font-size:0.78rem; color:#71717a;">Cliente: <strong>${this.state.project.clientName}</strong></div>

        <div class="proposal-price-box">
          <span style="font-size:0.76rem; color:#71717a;">Total:</span>
          <span style="font-size:1.15rem; font-weight:800; color:#18181b;">R$ ${prop.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>

        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="app.openPdfModal('${prop.id}')">Exportar PDF</button>
        </div>
      </div>
    `).join('');
  }

  openNewQuoteModal() {
    this.openModal(
      'Elaborar Orçamento',
      `
        <form onsubmit="app.handleCreateQuote(event)">
          <div class="form-row-group">
            <label class="field-label">Título da Proposta</label>
            <input type="text" id="newQuoteTitle" class="app-input-field" placeholder="Ex: Reforma da Fachada e Pintura" required>
          </div>
          <div class="form-cols-two">
            <div class="form-row-group">
              <label class="field-label">Mão de Obra (R$)</label>
              <input type="number" id="newQuoteLabor" class="app-input-field" min="0" step="50" placeholder="3500" required>
            </div>
            <div class="form-row-group">
              <label class="field-label">Materiais (R$)</label>
              <input type="number" id="newQuoteMaterials" class="app-input-field" min="0" step="50" placeholder="1800" required>
            </div>
          </div>
          <div class="form-row-group">
            <label class="field-label">Condições da Proposta</label>
            <textarea id="newQuoteNotes" class="app-textarea-field" rows="3" placeholder="Prazo de validade 15 dias, pagamento parcelado..." required></textarea>
          </div>
          <div class="form-footer-buttons">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancelar</button>
            <button type="submit" class="btn btn-primary">Enviar ao Cliente</button>
          </div>
        </form>
      `
    );
  }

  handleCreateQuote(e) {
    e.preventDefault();
    const title = document.getElementById('newQuoteTitle').value;
    const labor = Number(document.getElementById('newQuoteLabor').value);
    const materials = Number(document.getElementById('newQuoteMaterials').value);
    const notes = document.getElementById('newQuoteNotes').value;
    const total = labor + materials;

    const newProp = {
      id: `PROP-2026-0${this.state.proposals.length + 1}`,
      title,
      contractor: 'Mestre João Construções & Reformas',
      services: ['Serviços operacionais sob demanda'],
      laborCost: labor,
      materialsCost: materials,
      total,
      status: 'pendente',
      date: 'Hoje',
      notes
    };

    this.state.proposals.push(newProp);
    this.saveState();
    this.closeModal();
    this.render();
    this.showToast('Orçamento enviado para a área do cliente!');
  }

  renderWorkerOpportunities() {
    const container = document.getElementById('workerOpportunitiesList');
    if (!container) return;

    container.innerHTML = this.state.opportunities.map(opp => `
      <div class="opp-card">
        <div style="display:flex; justify-content:space-between;">
          <span class="badge badge-primary">${opp.id}</span>
          <span class="badge badge-warning">${opp.status}</span>
        </div>
        <h4 style="font-size:0.98rem; font-weight:800;">${opp.service}</h4>
        <div style="font-size:0.78rem; color:#71717a;">
          Cliente: <strong>${opp.client}</strong> &bull; Local: ${opp.location}
        </div>
        <div style="display:flex; gap:0.45rem; margin-top:0.45rem;">
          <button class="btn btn-primary btn-sm" style="flex:1;" onclick="app.acceptOpportunity('${opp.id}')">Aceitar</button>
          <button class="btn btn-secondary btn-sm" onclick="app.declineOpportunity('${opp.id}')">Recusar</button>
        </div>
      </div>
    `).join('');
  }

  acceptOpportunity(oppId) {
    this.state.opportunities = this.state.opportunities.filter(o => o.id !== oppId);
    this.saveState();
    this.renderWorkerOpportunities();
    this.showToast('Oportunidade aceita!');
  }

  declineOpportunity(oppId) {
    this.state.opportunities = this.state.opportunities.filter(o => o.id !== oppId);
    this.saveState();
    this.renderWorkerOpportunities();
    this.showToast('Oportunidade dispensada.');
  }

  openPdfModal(propId) {
    const prop = propId
      ? this.state.proposals.find(p => p.id === propId)
      : this.state.proposals[0];

    const overall = this.calcOverallProgress();

    this.openModal(
      'Relatório Técnico em PDF',
      `
        <div class="pdf-preview-sheet" id="printableReport">
          <div class="pdf-header">
            <div>
              <h2 style="font-size:1.35rem; color:#18181b; font-weight:800;">OBRA EM FOCO &mdash; RELATÓRIO OFICIAL</h2>
              <p style="font-size:0.78rem; color:#71717a;">Uma obra. Duas interfaces. Informação compartilhada.</p>
            </div>
            <div style="text-align:right;">
              <span class="badge badge-primary">03/11/2026</span>
              <div style="font-size:0.72rem; color:#71717a; margin-top:0.25rem;">Ref: ${this.state.project.title}</div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; margin-bottom:1.25rem; background:#f4f4f2; padding:0.85rem; border-radius:6px;">
            <div>
              <strong style="font-size:0.75rem; color:#71717a; text-transform:uppercase;">Identificação da Obra</strong>
              <div style="font-weight:800; font-size:0.92rem;">${this.state.project.title}</div>
              <div style="font-size:0.78rem; color:#3f3f46;">${this.state.project.address}</div>
              <div style="font-size:0.78rem;">Cliente: <strong>${this.state.project.clientName}</strong></div>
            </div>
            <div>
              <strong style="font-size:0.75rem; color:#71717a; text-transform:uppercase;">Responsável da Execução</strong>
              <div style="font-weight:800; font-size:0.92rem;">${this.state.project.workerName}</div>
              <div style="font-size:0.78rem; color:#3f3f46;">Prazo Estimado: ${this.state.project.deadline}</div>
              <div style="font-size:0.78rem;">Progresso Consolidado: <strong>${overall}%</strong></div>
            </div>
          </div>

          <h4 style="font-size:0.9rem; margin-bottom:0.5rem; border-bottom:1px solid #e4e2dd; padding-bottom:0.25rem;">1. Resumo das Etapas</h4>
          <table class="custom-table" style="font-size:0.78rem; margin-bottom:1.25rem;">
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Prazo</th>
                <th>Status</th>
                <th>Avanço</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.stages.map(s => `
                <tr>
                  <td><strong>${s.title}</strong></td>
                  <td>${s.deadline}</td>
                  <td>${s.status.toUpperCase()}</td>
                  <td>${s.progress}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          ${prop ? `
            <h4 style="font-size:0.9rem; margin-bottom:0.5rem; border-bottom:1px solid #e4e2dd; padding-bottom:0.25rem;">2. Orçamento Vinculado (${prop.id})</h4>
            <div style="font-size:0.8rem; margin-bottom:0.65rem;">
              <strong>${prop.title}</strong>
              <p style="color:#71717a; font-size:0.75rem;">${prop.notes}</p>
            </div>
            <table class="custom-table" style="font-size:0.78rem;">
              <tr>
                <td>Mão de Obra Especializada</td>
                <td style="text-align:right;"><strong>R$ ${prop.laborCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></td>
              </tr>
              <tr>
                <td>Materiais e Insumos do Canteiro</td>
                <td style="text-align:right;"><strong>R$ ${prop.materialsCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></td>
              </tr>
              <tr style="background:#f4f4f2; font-weight:800;">
                <td>TOTAL CONTRATADO</td>
                <td style="text-align:right; color:#d49a26; font-size:1rem;">R$ ${prop.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
              </tr>
            </table>
          ` : ''}

          <div style="margin-top:1.5rem; padding-top:1rem; border-top:1px dashed #dcd9d2; display:flex; justify-content:space-between; font-size:0.72rem; color:#71717a;">
            <div style="text-align:center; width:45%;">
              <div style="border-top:1px solid #71717a; margin-top:1.75rem; padding-top:0.25rem;">Assinatura do Cliente</div>
            </div>
            <div style="text-align:center; width:45%;">
              <div style="border-top:1px solid #71717a; margin-top:1.75rem; padding-top:0.25rem;">Assinatura do Responsável</div>
            </div>
          </div>
        </div>

        <div class="form-footer-buttons" style="margin-top:1.25rem;">
          <button class="btn btn-secondary" onclick="app.closeModal()">Fechar</button>
          <button class="btn btn-primary" onclick="window.print()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Imprimir / Salvar PDF</span>
          </button>
        </div>
      `
    );
  }

  initChatbot() {
    this.chatMessages.innerHTML = `
      <div class="chat-bubble bot">
        Olá! Sou o <strong>Assistente Obra em Foco</strong>. Como posso te orientar hoje sobre o andamento, materiais ou orçamentos da obra?
      </div>
    `;
  }

  toggleChatbot(forceState) {
    if (forceState !== undefined) {
      if (forceState) {
        this.chatbotWindow.classList.add('open');
        this.chatbotToggleBtn.classList.add('open');
      } else {
        this.chatbotWindow.classList.remove('open');
        this.chatbotToggleBtn.classList.remove('open');
      }
    } else {
      this.chatbotWindow.classList.toggle('open');
      this.chatbotToggleBtn.classList.toggle('open');
    }
  }

  handleUserChatSubmit(e) {
    e.preventDefault();
    const text = this.chatInput.value.trim();
    if (!text) return;
    this.sendChatMessage(text);
    this.chatInput.value = '';
  }

  sendChatMessage(message) {
    this.toggleChatbot(true);

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = message;
    this.chatMessages.appendChild(userBubble);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;

    setTimeout(() => {
      const response = this.computeBotResponse(message);
      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';
      botBubble.innerHTML = response;
      this.chatMessages.appendChild(botBubble);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }, 400);
  }

  computeBotResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('andamento') || q.includes('progresso') || q.includes('etapa')) {
      const progress = this.calcOverallProgress();
      const current = this.state.stages.find(s => s.status === 'em_andamento') || this.state.stages[0];
      return `A obra está em <strong>${progress}%</strong> concluída! A etapa atual em execução é <strong>"${current.title}"</strong> (${current.progress}% pronta).`;
    }

    if (q.includes('aprovar') || q.includes('orçamento') || q.includes('proposta') || q.includes('preço')) {
      return `Para consultar ou aprovar orçamentos, acesse a aba <strong>"Orçamentos"</strong> no menu. Você confere os valores de mão de obra e insumos e pode aprovar com 1 clique!`;
    }

    if (q.includes('material') || q.includes('materiais') || q.includes('cimento') || q.includes('estoque')) {
      const crit = this.state.materials.filter(m => m.status === 'critico');
      let detail = 'O estoque de insumos está regular.';
      if (crit.length > 0) {
        detail = `Atenção: <strong>${crit.map(c => c.name).join(', ')}</strong> está com estoque crítico no canteiro!`;
      }
      return `O controle de insumos é feito pelo profissional na visão 02 Funcionário. ${detail}`;
    }

    if (q.includes('pdf') || q.includes('exportar') || q.includes('relatório') || q.includes('imprimir')) {
      return `Você pode gerar o relatório técnico completo em PDF tocando em <strong>"Relatório PDF"</strong> no topo da tela.`;
    }

    if (q.includes('pedreiro') || q.includes('profissional') || q.includes('pintor') || q.includes('engenheiro') || q.includes('mestre')) {
      return `No menu <strong>"Buscar Profissionais"</strong> você encontra perfis com avaliações em estrelas e canal direto para solicitar orçamentos.`;
    }

    return `No Obra em Foco você tem transparência e controle operacional. Navegue pelos menus para conferir o <strong>Diário</strong>, <strong>Etapas</strong> e <strong>Orçamentos</strong>!`;
  }

  openModal(title, contentHtml) {
    this.modalTitle.textContent = title;
    this.modalBody.innerHTML = contentHtml;
    this.modalOverlay.classList.add('open');
  }

  closeModal() {
    this.modalOverlay.classList.remove('open');
  }

  showToast(text) {
    this.toastNotification.textContent = text;
    this.toastNotification.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastNotification.classList.remove('show');
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new ObraEmFocoApp();
});
