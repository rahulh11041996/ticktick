module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': "#7465f2",
      "primary-500": "#685adf",
      "secondary": "#f3f7fa",
      "greyprimary": "#484c4f",
      "white": "#fff",
      "error": "#e10141",
      "success": "#72bd0e",
      "red-500": "#e71212",
      "orange": "#e79d16"
    },
    minHeight: {
      '8': '8rem',
    },
    extend: {
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
