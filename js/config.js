// ─── SCHOLA CONFIGURATION ───────────────────
// Replace ALL placeholder values with your real keys

const SCHOLA_CONFIG = {

  // ── FIREBASE ──────────────────────────────
  // Get from: console.firebase.google.com
  // Project Settings > Your apps > SDK setup
  firebase: {
     apiKey: "AIzaSyBQdowvGo5NHnWTZSzjqOpHA8AoQdHJPbw",
   authDomain: "schola-34cc1.firebaseapp.com",
    projectId: "schola-34cc1",
    storageBucket: "schola-34cc1.firebasestorage.app",
    messagingSenderId: "490891385758",
    appId: "1:490891385758:web:30f5059bbd4c890c6a548f",
    measurementId: "G-P8Q8PCCDYX"
  };

  // ── GEMINI AI ─────────────────────────────
  // Get from: aistudio.google.com > Get API Key
  geminiKey: "AIzaSyAn8smk1o1NERp1S5WY1oOiFeq8MeLpwGQ",
  geminiUrl: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",

  // ── PAYSTACK ──────────────────────────────
  // Get from: dashboard.paystack.com > Settings > API Keys
  // Use TEST key while building (starts with pk_test_)
  paystackKey: "pk_test_c3db9c2ef68ac48611f63593d0dad0e562b87f62",

  // ── APP SETTINGS ──────────────────────────
  appName:    "Schola",
  appTagline: "Your campus. Your edge.",
  
  // Free plan limits
  freeAiMessages: 30,

  // Fee structure (update per school/department)
  fees: [
    { id: "school_fees",    name: "School Fees",        amount: 45000, icon: "🎓", color: "#4F46E5" },
    { id: "dept_dues",      name: "Departmental Dues",  amount: 5000,  icon: "🏛️", color: "#7C3AED" },
    { id: "assoc_dues",     name: "Association Dues",   amount: 3000,  icon: "🤝", color: "#059669" },
    { id: "faculty_dues",   name: "Faculty Dues",       amount: 2500,  icon: "📚", color: "#D97706" },
    { id: "library_dues",   name: "Library Dues",       amount: 1000,  icon: "📖", color: "#0284C7" },
  ],

  departments: [
    "Computer Science", "Electrical Engineering", "Mechanical Engineering",
    "Civil Engineering", "Chemical Engineering", "Biochemistry", "Biology",
    "Chemistry", "Physics", "Mathematics", "Medicine", "Nursing", "Pharmacy",
    "Law", "Economics", "Accounting", "Business Administration",
    "Mass Communication", "Political Science", "History", "English",
    "Sociology", "Psychology", "Architecture", "Estate Management"
  ],

  levels: [100, 200, 300, 400, 500]
};