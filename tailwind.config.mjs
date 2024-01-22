/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import daisyuiConfig from './daisy.config'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: daisyuiConfig,

	theme: {
	  fontFamily: {
		sans: ['Montserrat', 'sans-serif'],
	  },
	  extend: {
		colors: {
		  'verdun-green': {
			100: '#ffe7bb',
			50: '#fff3e0',
			200: '#ffd580',
			300: '#ffc537',
			400: '#ffbf00',
			500: '#ffe000',
			600: '#d3c400',
			700: '#9f9400',
			800: '#7b7000',
			900: '#685e00',
			950: '#3b3b00',
		  },
		  'deep-sea-blue': {
			50: '#f0f9ff',
			100: '#e0f3fe',
			200: '#bae4fd',
			300: '#7dcdfc',
			400: '#38b1f8',
			500: '#0e99e9',
			600: '#027fc7',
			700: '#0367a1',
			800: '#075785',
			900: '#0c4a6e',
			950: '#083149',
		  },
		  'persian-blue': {
			'50': '#f2f2ff',
			'100': '#e8e8ff',
			'200': '#d4d3ff',
			'300': '#b5b0ff',
			'400': '#9184ff',
			'500': '#6c52ff',
			'600': '#5a2ff8',
			'700': '#4c1de4',
			'800': '#4018c3',
			'900': '#35159d',
			'950': '#1d0b6a',
		  },
		  'pyconth-violet': {
			'50': '#f6f2ff',
			'100': '#eee8ff',
			'200': '#ded4ff',
			'300': '#c7b1ff',
			'400': '#ac85ff',
			'500': '#9253ff',
			'600': '#7f23f7',
			'700': '#781ee3',
			'800': '#6418bf',
			'900': '#53169c',
			'950': '#330b6a',
		},
  
		},
  
		boxShadow: {
		  'b-shallow': '0px 11px 7px -6px rgba(0, 0, 0, .25)',
		},
	  },
	},
	plugins: [daisyui],
}
