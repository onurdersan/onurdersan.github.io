// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'onurdersan', 
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
    //external: {
    //  display: false,
    //  header: 'My Projects',
    // To hide the `External Projects` section, keep it empty.
    //  projects: [
    //   {
    //     title: 'Project Name',
    //     description:
    //        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //      imageUrl:
    //        'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //      link: 'https://example.com',
    //   },
    //  ],
    },
  },
  seo: { title: 'Derşan Onur', description: 'Pediatrician, M.D.', imageURL: '' },
  social: {
    linkedin: 'dersanonur',
    x: 'dersanonur',
    researchGate: '',
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
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'dersanonur.bio.link',
    phone: '',
    email: 'drdersanonur@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Çocuk Sağlığı ve Hastalıkları',
    'Çocuk Palyatif Bakım',
    'Çocuk Acil Tıp',
    'e-Sağlık ve e-Öğrenme',
    'Veri Analizi (Jamovi, R, SPSS, BlueSky)',
    'Araştırma ve Metodoloji',
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
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'S.B.Ü. Dr. Behçet Uz Çocuk Hastalıkları ve Cerrahisi E.A.H.',
      degree: 'Pediatric Specialit',
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
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
