// tailwind.config.js - بروزرسانی شده برای کار با CSS modules در React (2025)
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}', // اسکن تمام فایل‌های JSX و CSS برای generate کلاس‌ها - این کلیدی است برای CSS modules
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'], // اگر فونت سفارشی دارید، اضافه کنید
      },
      // هر extend دیگر که نیاز دارید، مثل colors یا spacing
    },
  },
  plugins: [], // اگر پلاگین‌هایی مثل typography یا forms دارید، اضافه کنید
};