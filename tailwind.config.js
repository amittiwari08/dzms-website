/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        milano: "#A90E02",
        "milano-hover": "#8D0C02",
        chiffon: "#FFFBD4",
        ink: "#111111",
        border: "#E7DFC2",
        muted: "#666666"
      },
      fontFamily: {
        head: ["Sora", "General Sans", "sans-serif"],
        body: ["Inter", "Manrope", "sans-serif"]
      },
      borderRadius: {
        sm2: "10px",
        md2: "16px",
        lg2: "28px"
      },
      keyframes: {
        floatA: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(-40px,50px)" } },
        floatB: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(50px,-30px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        scrollMove: { "0%": { top: "-100%" }, "100%": { top: "100%" } },
        confettiPop: {
          "0%": { opacity: "1", transform: "translate(0,0) rotate(0)" },
          "100%": { opacity: "0", transform: "translate(var(--x),var(--y)) rotate(220deg)" }
        },
        shake: {
          "10%,90%": { transform: "translateX(-2px)" },
          "20%,80%": { transform: "translateX(4px)" },
          "30%,50%,70%": { transform: "translateX(-6px)" },
          "40%,60%": { transform: "translateX(6px)" }
        }
      },
      animation: {
        "float-a": "floatA 16s ease-in-out infinite",
        "float-b": "floatB 18s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 46s linear infinite",
        "scroll-move": "scrollMove 1.8s ease-in-out infinite",
        "confetti-pop": "confettiPop .9s ease-out forwards",
        shake: "shake .4s ease"
      }
    }
  },
  plugins: []
};
