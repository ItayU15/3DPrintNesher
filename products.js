const storeSettings = {
  announcement: {
    active: false,
    text: "🔥 מבצע מיוחד: משלוח חינם בהזמנה מעל 150 ₪!"
  },
  vacationMode: {
    active: false,
    message: "החנות בחופשה / בעומס הזמנות. ניתן לטייל בקטלוג, נחזור לקבל הזמנות בקרוב!"
  },
  coupons: [
    { code: "NESHER10", discountPercent: 10, active: true },
    { code: "PRINT20", discountPercent: 20, active: false }
  ]
};

const catalogProducts = [
  {
    id: "prod_01",
    name: "מיני דאמפלינג",
    category: "קליקרים",
    price: 10,
    description: "מודל זז המודפס ביחידה אחת, מעולה להפגת מתחים",
    image: "images/dumpling.jpg",
    inStock: true,
    colors: {
      primary: ["לבן", "אפור", "ורוד", "שקוף"],
      secondary: ["לבן", "אפור", "ורוד", "שקוף"]
    }
  },
  {
    id: "prod_02",
    name: "קליקר אצבע כפול",
    category: "קליקרים",
    price: 20,
    description: "גאדג'ט לחיצות ממכר שמתיישב בול על כף היד",
    image: "images/clicker.jpg",
    inStock: true,
    colors: {
      primary: ["לבן", "אפור", "ורוד", "שקוף"]
    }
  },
  {
    id: "prod_03",
    name: "מחזיק מפתחות עם שם אישי",
    category: "מחזיקי מפתחות",
    price: 25,
    description: "הדפסה אישית של השם שלך באנגלית או בעברית",
    image: "images/keychain.jpg",
    inStock: true,
    colors: {
      primary: ["לבן", "אפור", "ורוד", "שקוף"],
      secondary: ["לבן", "אפור", "ורוד", "שקוף"]
    }
  },
  {
    id: "prod_04",
    name: "שלט לוגו למשרד",
    category: "מוצרים בעיצוב אישי",
    price: 80,
    description: "שלח לנו קובץ או תמונה ונבנה לך מודל תלת מימד ייעודי",
    image: "images/custom_logo.jpg",
    inStock: true
  }
];
