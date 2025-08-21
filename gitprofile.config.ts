// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'onurdersan',
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: false,
      projects: []
    }
  },
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {      
      title: 'Türk Çocukları Büyüme Persentil Hesaplayıcı',
      description: 'Türk çocukları için büyüme persentil hesaplayıcısı (Olcay Neyzi referans değerleri)',
      imageUrl: 'https://img.icons8.com/fluency/100/calculator.png',
      link: 'https://68a763090451e6009f24010f--extraordinary-griffin-5e9625.netlify.app/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Derşan Onur', description: 'Pediatrician, M.D.', imageURL: ''  },
  social: {
    linkedin: 'dersanonur',
    x: 'dersanonur',
    mastodon: '',
    researchGate: 'Dersan-Onur',
    facebook: '',
    instagram: 'dersanonur',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'dersanonur',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://dersanonur.bio.link',
    phone: '',
    email: 'drdersanonur@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Pediatrics',
    'Pediatric Palliative Care',
    'Pediatric Emergency Medicine',
    'Pediatrics 4.0',
    'e-Health and e-Learning',
    'Data Analysis (Jamovi, R, SPSS, BlueSky)',
    'Research and Methodology',
    'Flutter',
    'Git',
  ],
  experiences: [
    {
      company: 'S.B.Ü. İzmir Tepecik Eğitim ve Araştırma Hastanesi',
      position: 'Pediatrician',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://tepecikeah.saglik.gov.tr/',
    },
    {
      company: 'S.B.Ü. Dr. Behçet Uz Çocuk Hastalıkları ve Cerrahisi E.A.H.',
      position: 'Pediatrician',
      from: '2023',
      to: '2024',
      companyLink: 'https://behcetuzch.saglik.gov.tr/',
    },
  ],
  certifications: [
    {
      name: 'Good Medical Researcher',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'ICH Good Clinical Practice',
      body: '',
      year: '',
      link: '',
    },
      {
      name: 'Good Clinical Practice Training for Social and Behavioral Research',
      body: '',
      year: '',
      link: '',
    },
        {
      name: 'Scale Development and Adaptation Training',
      body: '',
      year: '',
      link: '',
    },
        {
      name: 'Medical Research Methods',
      body: '',
      year: '',
      link: '',
    },
        {
      name: 'Research Ethics',
      body: '',
      year: '',
      link: '',
    },
        {
      name: 'Bibliometric Analysis',
      body: '',
      year: '',
      link: '',
    },
    {
    name: 'BTK Akademi',
    body: `a. Project Management Fundamentals
          b. Project and Risk Management
          c. Algorithm Design
          d. Entrepreneurship Fundamentals
          e. Data Science
          f. Artificial Intelligence
          g. Information Technology
          h. Deep Learning
          i. Natural Language Processing
          j. Reinforcement Learning`,
    year: '',
    link: '',
    },
  ],
  educations: [
    {
      institution: 'S.B.Ü. Dr. Behçet Uz Çocuk Hastalıkları ve Cerrahisi E.A.H.',
      degree: 'Pediatric Specialist',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Dokuz Eylül Üniversitesi Tıp Fakültesi',
      degree: 'MD',
      from: '2008',
      to: '2015',
    },
  ],
  publications: [
    {
      title: 'Pediatrics 4.0: the Transformative Impacts of the Latest Industrial Revolution on Pediatrics',
      conferenceName: '',
      journalName: 'Health Care Analysis',
      authors: 'Derşan Onur, Çağla Özbakır',
      link: 'https://doi.org/10.1007/s10728-025-00536-z',
      description:
        'Industry 4.0 represents the latest phase of industrial evolution, characterized by the seamless integration of cyber-physical systems, the Internet of Things, big data analytics, artificial intelligence, advanced robotics, and cloud computing, enabling smart, adaptive, and interconnected processes where physical, digital, and biological realms converge. In parallel, healthcare has progressed from the traditional, physician-centered model of Healthcare 1.0 by introducing medical devices and digitized records to Healthcare 4.0, which leverages Industry 4.0 technologies to create personalized, data-driven, and patient-centric systems. In this context, we hereby introduce Pediatrics 4.0 as a new paradigm that adapts these innovations to children’s unique developmental, physiological, and ethical considerations and aims to improve diagnostic precision, treatment personalization, and continuous monitoring in pediatric populations. Key applications include AI-driven diagnostic and predictive analytics, IoT-enabled remote monitoring, big data-powered epidemiological insights, robotic assistance in surgery and rehabilitation, and 3D printing for patient-specific devices and pharmaceuticals. However, realizing Pediatrics 4.0 requires addressing significant challenges—data privacy and security, algorithmic bias, interoperability and standardization, equitable access, regulatory alignment, the ethical complexities of consent, and long-term technology exposure. Future research should focus on explainable AI, pediatric-specific device design, robust data governance frameworks, dynamic ethical and legal guidelines, interdisciplinary collaboration, and workforce training to ensure these transformative technologies translate into safer, more effective, and more equitable child healthcare.',
    },
    {
      title: 'Evaluation of serum vitamin B12 and D, iron, ferritin, folate, calcium, phosphorus and magnesium levels in children in palliative care clinic: a single-center cross-sectional study',
      conferenceName: '',
      journalName: 'BMC Palliative Care',
      authors: 'Derşan Onur, Sunanur Çiftçi Sadıkoğlu, Nilgün Harputluoğlu, Behzat Özkan',
      link: 'https://doi.org/10.1186/s12904-024-01546-9',
      description:
        `Background: Pediatric palliative care (PPC) patients are at an elevated risk of malnutrition. Nutritional inadequacy can also cause micronutrient deficiencies. These factors can lead to weight loss, stunted growth, and poor quality of life. Despite the prevalence of these issues, limited research exists in the micronutrient status of PPC patients. The purpose of this study was to determine the vitamin B12 and D, iron, ferritin, folate, calcium, phosphorus, and magnesium levels of PPC patients to contribute to a better understanding of their micronutrient needs as well as the appropriate management of diet and treatment approaches.
        Methods: This was a single-center observational cross-sectional retrospective study. This study evaluated the levels of vitamin B12, 25-hydroxyvitamin D, iron, ferritin, folate, calcium, phosphorus, and magnesium in PPC patients. The patients were classified according to the Chronic Complex Conditions (CCC) v2 and then compared.
        Results: A total of 3,144 micronutrient data points were collected from 822 hospitalizations of 364 patients. At least one micronutrient deficiency was identified in 96.9% of the patients. The most prevalent deficiencies were observed for iron, calcium, and phosphate. In addition, 25-hydroxyvitamin D deficiency was observed in one-third of patients. Calcium, magnesium, phosphorus, folate, and 25-hydroxyvitamin D were negatively correlated with age.
        Conclusion: The results of this study indicate that micronutrient deficiencies are highly prevalent in PPC patients. These findings have the potential to contribute to improvements in the nutritional and therapeutic management of patients.`,
    },
  ],
  // Display articles from your medium or dev account. (Optional)

  websites: [
    {
  name: 'Türk Çocukları Büyüme Persentil Hesaplayıcı',
  description: 'Türk çocukları için büyüme persentil hesaplayıcısı (Olcay Neyzi referans değerleri)',
  imageUrl: 'https://img.icons8.com/fluency/100/calculator.png',
  link: 'https://68a763090451e6009f24010f--extraordinary-griffin-5e9625.netlify.app/',
  technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
},
    {
      name: '',
      link: '',
      description: '',
      imageUrl: '', // İsteğe bağlı
    },
    {
      name: '',
      link: '',
      description: '',
      imageUrl: '', // İsteğe bağlı
    },
  ],

  
  blog: {
    source: 'dev', // medium | dev
    username: 'dersanonur', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-VNHJYSWV6Y',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  // OTOMATIK AÇILAN MODAL
footer: `<script>
(function() {
  let modalOpened = false; // Global flag to prevent multiple modals
  
  function openCalculatorModal() {
    console.log('Attempting to open calculator modal...');
    
    // Zaten açık modal varsa tekrar açma
    if (modalOpened || document.getElementById('calculatorModal')) {
      console.log('Modal already open, skipping...');
      return;
    }
    
    modalOpened = true;
    
    const modal = document.createElement('div');
    modal.id = 'calculatorModal';
    modal.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background: rgba(0,0,0,0.8) !important;
      z-index: 999999 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 20px !important;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
      width: 95% !important;
      height: 90% !important;
      max-width: 1200px !important;
      background: white !important;
      border-radius: 12px !important;
      position: relative !important;
      overflow: hidden !important;
      box-shadow: 0 25px 50px rgba(0,0,0,0.5) !important;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute !important;
      top: 15px !important;
      right: 20px !important;
      background: #ff4444 !important;
      color: white !important;
      border: none !important;
      width: 35px !important;
      height: 35px !important;
      border-radius: 50% !important;
      cursor: pointer !important;
      z-index: 1000000 !important;
      font-size: 18px !important;
      font-weight: bold !important;
      transition: background 0.3s !important;
    `;
    closeBtn.title = 'Kapat';
    
    // Hover effect for close button
    closeBtn.addEventListener('mouseenter', function() {
      this.style.background = '#cc0000 !important';
    });
    closeBtn.addEventListener('mouseleave', function() {
      this.style.background = '#ff4444 !important';
    });
    
    const iframe = document.createElement('iframe');
    iframe.src = 'https://68a763090451e6009f24010f--extraordinary-griffin-5e9625.netlify.app/';
    iframe.style.cssText = `
      width: 100% !important;
      height: 100% !important;
      border: none !important;
    `;
    iframe.title = 'Türk Çocukları Büyüme Persentil Hesaplayıcı';
    
    // Loading indicator
    const loading = document.createElement('div');
    loading.style.cssText = `
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%,-50%) !important;
      text-align: center !important;
      color: #666 !important;
      z-index: 1000001 !important;
    `;
    loading.innerHTML = \`
      <div style="width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #667eea;border-radius:50%;animation:calculatorSpin 1s linear infinite;margin:0 auto 16px;"></div>
      <p>Hesaplayıcı yükleniyor...</p>
      <style>
        @keyframes calculatorSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    \`;
    
    content.appendChild(loading);
    content.appendChild(closeBtn);
    content.appendChild(iframe);
    modal.appendChild(content);
    
    // Add to body
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    console.log('Modal created and added to DOM');
    
    // iframe yüklendiğinde loading'i kaldır
    iframe.addEventListener('load', function() {
      console.log('Calculator iframe loaded');
      if (content.contains(loading)) {
        content.removeChild(loading);
      }
    });
    
    // Error handling for iframe
    iframe.addEventListener('error', function() {
      console.log('Calculator iframe error');
      if (content.contains(loading)) {
        loading.innerHTML = \`
          <p style="color: #999;">Hesaplayıcı yüklenirken bir sorun oluştu.</p>
          <a href="https://68a763090451e6009f24010f--extraordinary-griffin-5e9625.netlify.app/" 
             target="_blank" 
             style="color: #667eea; text-decoration: none; font-weight: bold;">
            Direkt linke git →
          </a>
        \`;
      }
    });
    
    // Timeout for loading
    setTimeout(function() {
      if (content.contains(loading)) {
        loading.innerHTML = \`
          <p style="color: #999;">Yükleme uzun sürüyor...</p>
          <a href="https://68a763090451e6009f24010f--extraordinary-griffin-5e9625.netlify.app/" 
             target="_blank" 
             style="color: #667eea; text-decoration: none; font-weight: bold;">
            Direkt linke git →
          </a>
        \`;
      }
    }, 8000);
    
    function closeModal() {
      console.log('Closing modal...');
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }
      modalOpened = false;
    }
    
    // Event listeners for closing
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // ESC key listener
    const escListener = function(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escListener);
      }
    };
    document.addEventListener('keydown', escListener);
  }
  
  // Multiple attempts to open modal
  function tryOpenModal() {
    console.log('Trying to open modal...');
    
    // Immediate attempt
    if (document.readyState === 'complete') {
      setTimeout(openCalculatorModal, 500);
    }
    
    // DOMContentLoaded attempt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM Content Loaded');
        setTimeout(openCalculatorModal, 1000);
      });
    }
    
    // Window load attempt
    window.addEventListener('load', function() {
      console.log('Window loaded');
      setTimeout(function() {
        if (!modalOpened) {
          openCalculatorModal();
        }
      }, 1500);
    });
    
    // Backup attempt after 3 seconds
    setTimeout(function() {
      console.log('Backup attempt...');
      if (!modalOpened) {
        openCalculatorModal();
      }
    }, 3000);
  }
  
  // Start trying to open modal
  tryOpenModal();
  
  // Make function globally available for manual testing
  window.openCalculatorModal = openCalculatorModal;
  
  // Link hijacking - run after a delay to ensure DOM is ready
  setTimeout(function() {
    console.log('Setting up link hijacking...');
    
    function hijackLinks() {
      const links = document.querySelectorAll('a');
      links.forEach(function(link) {
        const href = link.getAttribute('href') || '';
        const text = link.textContent || '';
        
        if (href.includes('netlify.app') || 
            href.includes('persentil') || 
            text.toLowerCase().includes('persentil') ||
            text.toLowerCase().includes('hesaplayıcı') ||
            href.includes('extraordinary-griffin')) {
          
          console.log('Hijacking link:', link);
          
          link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Link clicked, opening modal instead');
            openCalculatorModal();
            return false;
          });
        }
      });
    }
    
    hijackLinks();
    
    // Re-run hijacking periodically in case new links are added dynamically
    setInterval(hijackLinks, 2000);
    
  }, 2000);
  
})();
</script>`
};

export default CONFIG;
