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
      secondary: ["לבן", "אפור", "ורוד", "שקוף"] // צבע משני לדאמפלינג
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
      // למוצר זה יש רק צבע אחד, אין צבע משני
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
      primary: ["לבן", "אפור", "ורוד", "שקוף"], // צבע הרקע
      secondary: ["לבן", "אפור", "ורוד", "שקוף"] // צבע האותיות הבולטות
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
    // מוצר בעיצוב אישי - הצבעים ייסגרו מול הלקוח בפרטי, לכן אין פה רשימה קבועה
  }
];
