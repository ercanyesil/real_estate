module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'primary-color': '#3A0CA3',
        'footer-color': '#ECEFFD',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'footer-text-gray': '#808080',
        'footer-text-link': '#2B2B2B',
        'gray-light': '#d3dce6',
        'nav-active-color': 'rgba(67, 97, 238, 0.3)',
        'gradient-start': '#4361EE',
        'gradient-end': 'rgba(67, 97, 238, 0)',
        'customGray': '#AAAAAA',
        'input-color': '#F6F6F6',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },   
      spacing: {
        '2xl': '3.125rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '3.581rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'h4-medium': '19.4px',
      },
      fontWeight: {
        medium: '500',
      },
      boxShadow: {
        'email-input': '4px 10px 20px 0px rgba(0, 0, 0, 0.05)', // Özel shadow
        'search': '10px 30px 50px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

