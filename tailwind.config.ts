import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				slate: {
					10: "#f1f3f4",
				},
				green: {
					50: "#30AF5B",
					90: "#292c27",
				},
				gray: {
					10: "#EEEEEE",
					20: "#A2A2A2",
					30: "#7B7B7B",
					50: "#585858",
					90: "#1411414",
				},
				"black-100": "#2B2C35",
				darkText: "#242424",
				lightText: "#a5a5a5",
				bgLight: "#1010100d",
				bodyColor: "#fbfaf7",
				"primary-blue": {
					DEFAULT: "#2B59FF",
					100: "#F5F8FF",
				},
				"secondary-orange": "#f79761",
				"light-white": {
					DEFAULT: "rgba(59,60,152,0.03)",
					100: "rgba(59,60,152,0.02)",
				},
				grey: "#747A88",
			},
			backgroundImage: {
				"video-bg": "url('/herobg.jpg')",
				"hero-bg": "url('/hero.jpg')",
			},
			screens: {
				xs: "400px",
				"3xl": "1680px",
				"4xl": "2200px",
			},
			maxWidth: {
				"10xl": "1512px",
			},
			borderRadius: {
				"5xl": "40px",
			},
		},
	},
	plugins: [],
};

export default config;


// 	content: [
// 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./components/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	theme: {
// 		extend: {
// 			fontFamily: {
// 				inter: ["Inter", "sans-serif"],
// 			},
// 			colors: {
// 				slate: {
// 					10: "#f1f3f4",
// 				},
// 				green: {
// 					50: "#30AF5B",
// 					90: "#292c27",
// 				},
// 				gray: {
// 					10: "#EEEEEE",
// 					20: "#A2A2A2",
// 					30: "#7B7B7B",
// 					50: "#585858",
// 					90: "#1411414",
// 				},
// 				"black-100": "#2B2C35",
// 				darkText: "#242424",
// 				lightText: "#a5a5a5",
// 				bgLight: "#1010100d",
// 				bodyColor: "#fbfaf7",
// 				"primary-blue": {
// 					DEFAULT: "#2B59FF",
// 					100: "#F5F8FF",
// 				},
// 				"secondary-orange": "#f79761",
// 				"light-white": {
// 					DEFAULT: "rgba(59,60,152,0.03)",
// 					100: "rgba(59,60,152,0.02)",
// 				},
// 				grey: "#747A88",
// 			},

// 			// backgroundImage: {
// 			// 	"main-bg": "url('/pattern.png')",
// 			//   video:'url()'
// 			// 	// "hero-bg": "url('/hero-bg.png')",
// 			// },
// 			backgroundImage: {
// 				"main-bg": "url('/pattern.png')",
// 				// video: "url()",
// 				"hero-bg": "url('/hero-bg.png')",
// 			},
// 			screens: {
// 				xs: "400px",
// 				" 3xl": "1680px",
// 				"4xl": "2200px",
// 			},
// 			maxWidth: {
// 				"10xl": "1512px",
// 			},
// 			borderRadius: {
// 				"5xl": "40px",
// 			},
// 		},
// 	},
// 	plugins: [],
// };
// export default config;