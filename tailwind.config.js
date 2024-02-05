/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1900px' },
        // => @media (max-width: 1535px) { ... }
        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }
        lg: { max: '1121px' },
        sm: { max: '767px' },
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        medium: ['18px', '18px'],
        lg: ['20px', '24px'],
        xl: ['24px', '28px'],
        h1: ['40px', '48px'],
        h2: ['32px', '40px'],
        h3: ['24px', '28px'],
        h4: ['20px', '24px'],
        h5: ['16px', '20px'],
      },
      colors: {
        'primary-50': '#FAFCE9',
        'primary-100': '#F5F9D2',
        'primary-200': '#EBF3A5',
        'primary-300': '#E1ED78',
        'primary-400': '#D7E74B',
        'primary-500': '#D9E854',
        'primary-600': '#A4B418',
        'primary-700': '#7B8712',
        'primary-800': '#525A0C',
        'primary-900': '#292D06',
        'primary-950': '#151603',
        'secondary-50': '#EAE7FD',
        'secondary-100': '#D6CFFC',
        'secondary-200': '#ADA0F8',
        'secondary-300': '#8470F5',
        'secondary-400': '#5B40F2',
        'secondary-500': '#6850F3',
        'secondary-600': '#280DBF',
        'secondary-700': '#1E0A8F',
        'secondary-800': '#14075F',
        'secondary-900': '#0A0330',
        'secondary-950': '#050218',
        lightGray: 'rgba(255, 255, 255, 0.07)',
        lightGreen: '#DAE854',
        'white-10': 'rgba(255, 255, 255, 0.01)',
        'white-30': 'rgba(255, 255, 255, 0.03)',
        'white-50': 'rgba(255, 255, 255, 0.05)',
        'white-70': 'rgba(255, 255, 255, 0.07)',
        'white-100': 'rgba(255, 255, 255, 0.1)',
        'white-300': 'rgba(255, 255, 255, 0.3)',
        'white-400': 'rgba(255, 255, 255, 0.4)',
        'white-500': 'rgba(255, 255, 255, 0.5)',
        'white-600': 'rgba(255, 255, 255, 0.6)',
        'white-700': 'rgba(255, 255, 255, 0.7)',
        mobMenuButton: 'rgba(40, 40, 40, 0.5)',
        successGreen: '#49D758',
        errorPink: '#EC336A',
      },
      fontFamily: {
        sans: ['"poppins"', ...defaultTheme.fontFamily.sans],
        inter: ['"inter"', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        large: '48px',
      },
      boxShadow: {
        wrapper: '0px 25px 40px 0px rgba(0, 0, 0, 0.10), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
        item: '0px 25px 40px 0px rgba(0, 0, 0, 0.05), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        large: '50px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-1-1-0': {
          flex: '1 1 0',
        },
        '.header-dialog-overlay': {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 9998,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(11, 11, 11, 0.70)',
        },
      });
    }),
  ],
};
