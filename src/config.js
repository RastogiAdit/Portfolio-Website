module.exports = {
  siteTitle: 'Adit Rastogi',
  siteDescription:
    'Adit Rastogi is an BITS Pilani CS undergrad, based in India, who loves learning new things.',
  siteKeywords:
    'Adit Rastogi, aditrastogi, software engineer, machine learning engineer, bits',
  siteUrl: 'https://rastogiadit.github.io/Portfolio/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-B5GJCFVZHS',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Adit Rastogi',
  location: 'Hyderabad, India',
  email: 'aditrastogi6@gmail.com',
  github: 'https://github.com/RastogiAdit',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RastogiAdit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/adit-rastogi-01a02b256/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/r_a.d.i.t/',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#featured',
    },
    {
      name: 'Innovations',
      url: '/#innovations',
    },
    // {
    //   name: 'Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Activities',
      url: '/#activities',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
