import React, { useState, useMemo } from "react";
import { useLanguage } from "../LanguageContext";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  Award,
  Fingerprint,
  HeartHandshake,
  Scale,
  Layers,
  X,
  Flame,
  Clock,
  ArrowUpDown,
  Tag,
  Check,
  Receipt,
  Globe,
  HeartPulse,
  Utensils,
  Vote,
  ExternalLink,
  FolderKanban,
  Filter,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export type SpecificCategory =
  "aadhaar" | "incometax" | "passport" | "welfare" | "health" | "ration" | "voter" | "legal";

export type FAQCategory = "all" | SpecificCategory;
export type FAQSortMode = "popular" | "newest" | "helpful";

export interface FAQCategoryConfig {
  id: SpecificCategory;
  name: {
    en: string;
    hi: string;
  };
  shortLabel: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  portalName: string;
  portalUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  pillClasses: string;
  activePillClasses: string;
  badgeClasses: string;
  cardBorderHighlight: string;
}

export const CATEGORY_CONFIGS: Record<SpecificCategory, FAQCategoryConfig> = {
  aadhaar: {
    id: "aadhaar",
    name: {
      en: "Aadhaar (UIDAI)",
      hi: "आधार (UIDAI)",
    },
    shortLabel: {
      en: "Aadhaar",
      hi: "आधार",
    },
    description: {
      en: "UIDAI demographic corrections, mobile number updates, biometric locking, Baal Aadhaar, and e-KYC verification.",
      hi: "यूआईडीएआई जनसांख्यिकी सुधार, मोबाइल नंबर लिंकिंग, बायोमेट्रिक सुरक्षा, बाल आधार एवं ई-केवाईसी सत्यापन।",
    },
    portalName: "myAadhaar (uidai.gov.in)",
    portalUrl: "https://myaadhaar.uidai.gov.in",
    icon: Fingerprint,
    accentColor: "blue",
    pillClasses:
      "bg-blue-50/80 hover:bg-blue-100/90 text-blue-800 border-blue-200 hover:border-blue-300",
    activePillClasses: "bg-blue-600 text-white border-blue-600 shadow-sm ring-2 ring-blue-500/25",
    badgeClasses: "bg-blue-50 text-blue-700 border-blue-200",
    cardBorderHighlight: "border-blue-200 bg-blue-50/20",
  },
  incometax: {
    id: "incometax",
    name: {
      en: "Income Tax & PAN",
      hi: "आयकर एवं पैन (Income Tax)",
    },
    shortLabel: {
      en: "Income Tax",
      hi: "आयकर",
    },
    description: {
      en: "PAN card generation, mandatory PAN-Aadhaar linking, resolving Form 26AS/AIS discrepancies, and income proofs.",
      hi: "पैन कार्ड आवेदन, पैन-आधार लिंकिंग, फॉर्म 26AS/AIS विसंगति सुधार एवं आय प्रमाण पत्र।",
    },
    portalName: "e-Filing (incometax.gov.in)",
    portalUrl: "https://www.incometax.gov.in/iec/foportal/",
    icon: Receipt,
    accentColor: "emerald",
    pillClasses:
      "bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-800 border-emerald-200 hover:border-emerald-300",
    activePillClasses:
      "bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-500/25",
    badgeClasses: "bg-emerald-50 text-emerald-700 border-emerald-200",
    cardBorderHighlight: "border-emerald-200 bg-emerald-50/20",
  },
  passport: {
    id: "passport",
    name: {
      en: "Passport (PSP)",
      hi: "पासपोर्ट (Passport Seva)",
    },
    shortLabel: {
      en: "Passport",
      hi: "पासपोर्ट",
    },
    description: {
      en: "Passport Seva Kendra appointments, Tatkaal vs Normal guidelines, police verification rules, and minor passports.",
      hi: "पासपोर्ट सेवा केंद्र अपॉइंटमेंट, तत्काल बनाम सामान्य प्रक्रिया, पुलिस सत्यापन नियम एवं बच्चों के पासपोर्ट।",
    },
    portalName: "Passport Seva (passportindia.gov.in)",
    portalUrl: "https://www.passportindia.gov.in",
    icon: Globe,
    accentColor: "indigo",
    pillClasses:
      "bg-indigo-50/80 hover:bg-indigo-100/90 text-indigo-800 border-indigo-200 hover:border-indigo-300",
    activePillClasses:
      "bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-500/25",
    badgeClasses: "bg-indigo-50 text-indigo-700 border-indigo-200",
    cardBorderHighlight: "border-indigo-200 bg-indigo-50/20",
  },
  welfare: {
    id: "welfare",
    name: {
      en: "Welfare & DBT",
      hi: "कल्याण एवं डीबीटी (Welfare)",
    },
    shortLabel: {
      en: "Welfare",
      hi: "कल्याण",
    },
    description: {
      en: "PM-Kisan installment status, NPCI bank account DBT seeding, e-Shram worker benefits, and eligibility rules.",
      hi: "पीएम-किसान किस्त, बैंक खाते में एनपीसीआई डीबीटी सीडिंग, ई-श्रम कार्ड एवं कल्याणकारी योजना पात्रता।",
    },
    portalName: "PM-Kisan (pmkisan.gov.in)",
    portalUrl: "https://pmkisan.gov.in",
    icon: HeartHandshake,
    accentColor: "amber",
    pillClasses:
      "bg-amber-50/80 hover:bg-amber-100/90 text-amber-900 border-amber-200 hover:border-amber-300",
    activePillClasses:
      "bg-amber-600 text-white border-amber-600 shadow-sm ring-2 ring-amber-500/25",
    badgeClasses: "bg-amber-50 text-amber-800 border-amber-200",
    cardBorderHighlight: "border-amber-200 bg-amber-50/20",
  },
  health: {
    id: "health",
    name: {
      en: "Health & Ayushman",
      hi: "स्वास्थ्य एवं आयुष्मान",
    },
    shortLabel: {
      en: "Health",
      hi: "स्वास्थ्य",
    },
    description: {
      en: "14-digit ABHA health account generation, Ayushman Bharat PM-JAY ₹5 Lakh cashless cover, and Jeevan Pramaan.",
      hi: "14-अंकीय आभा (ABHA) आईडी, आयुष्मान भारत ₹5 लाख कैशलेस इलाज कार्ड एवं डिजिटल जीवन प्रमाण पत्र।",
    },
    portalName: "ABHA Portal (abha.abdm.gov.in)",
    portalUrl: "https://abha.abdm.gov.in",
    icon: HeartPulse,
    accentColor: "rose",
    pillClasses:
      "bg-rose-50/80 hover:bg-rose-100/90 text-rose-900 border-rose-200 hover:border-rose-300",
    activePillClasses: "bg-rose-600 text-white border-rose-600 shadow-sm ring-2 ring-rose-500/25",
    badgeClasses: "bg-rose-50 text-rose-700 border-rose-200",
    cardBorderHighlight: "border-rose-200 bg-rose-50/20",
  },
  ration: {
    id: "ration",
    name: {
      en: "Ration & Food (ONORC)",
      hi: "राशन एवं खाद्य सुरक्षा",
    },
    shortLabel: {
      en: "Ration",
      hi: "राशन",
    },
    description: {
      en: "One Nation One Ration Card nationwide portability, adding newborns or spouses, and NFSA entitlement checks.",
      hi: "वन नेशन वन राशन कार्ड योजना, राशन कार्ड में नए सदस्य का नाम जोड़ना एवं खाद्यान्न पात्रता।",
    },
    portalName: "NFSA Portal (nfsa.gov.in)",
    portalUrl: "https://nfsa.gov.in",
    icon: Utensils,
    accentColor: "orange",
    pillClasses:
      "bg-orange-50/80 hover:bg-orange-100/90 text-orange-900 border-orange-200 hover:border-orange-300",
    activePillClasses:
      "bg-orange-600 text-white border-orange-600 shadow-sm ring-2 ring-orange-500/25",
    badgeClasses: "bg-orange-50 text-orange-800 border-orange-200",
    cardBorderHighlight: "border-orange-200 bg-orange-50/20",
  },
  voter: {
    id: "voter",
    name: {
      en: "Voter ID & Elections",
      hi: "मतदाता पहचान पत्र (ECI)",
    },
    shortLabel: {
      en: "Voter ID",
      hi: "मतदाता पत्र",
    },
    description: {
      en: "Form 6 new elector enrollment, Form 8 demographic corrections & constituency shifting, and e-EPIC download.",
      hi: "फॉर्म 6 नया मतदाता पंजीकरण, फॉर्म 8 मतदाता पहचान पत्र सुधार, पता परिवर्तन एवं डिजिटल ई-ईपीआईसी डाउनलोड।",
    },
    portalName: "ECI Voters (voters.eci.gov.in)",
    portalUrl: "https://voters.eci.gov.in",
    icon: Vote,
    accentColor: "teal",
    pillClasses:
      "bg-teal-50/80 hover:bg-teal-100/90 text-teal-900 border-teal-200 hover:border-teal-300",
    activePillClasses: "bg-teal-600 text-white border-teal-600 shadow-sm ring-2 ring-teal-500/25",
    badgeClasses: "bg-teal-50 text-teal-800 border-teal-200",
    cardBorderHighlight: "border-teal-200 bg-teal-50/20",
  },
  legal: {
    id: "legal",
    name: {
      en: "Legal & RTI",
      hi: "कानूनी एवं आरटीआई",
    },
    shortLabel: {
      en: "Legal",
      hi: "कानूनी",
    },
    description: {
      en: "DigiLocker legal validity under IT Act Rule 9A, Section 6(1) online RTI appeals, and Citizen Charter timelines.",
      hi: "डिजीलॉकर दस्तावेजों की कानूनी मान्यता, धारा 6(1) के तहत ऑनलाइन आरटीआई एवं लोक सेवा गारंटी समय-सीमा।",
    },
    portalName: "RTI Online (rtionline.gov.in)",
    portalUrl: "https://rtionline.gov.in",
    icon: Scale,
    accentColor: "purple",
    pillClasses:
      "bg-purple-50/80 hover:bg-purple-100/90 text-purple-900 border-purple-200 hover:border-purple-300",
    activePillClasses:
      "bg-purple-600 text-white border-purple-600 shadow-sm ring-2 ring-purple-500/25",
    badgeClasses: "bg-purple-50 text-purple-700 border-purple-200",
    cardBorderHighlight: "border-purple-200 bg-purple-50/20",
  },
};

export const CATEGORY_ORDER: SpecificCategory[] = [
  "aadhaar",
  "incometax",
  "passport",
  "welfare",
  "health",
  "ration",
  "voter",
  "legal",
];

interface FAQItem {
  id: string;
  category: SpecificCategory;
  views: number;
  publishedAt: string; // ISO date string YYYY-MM-DD
  helpfulYes?: number;
  helpfulNo?: number;
  question: {
    en: string;
    hi: string;
  };
  answer: {
    en: string;
    hi: string;
  };
  tags: string[];
}

const FAQ_ITEMS: FAQItem[] = [
  // ==========================================
  // --- AADHAAR CATEGORY ---
  // ==========================================
  {
    id: "faq-aadhaar-1",
    category: "aadhaar",
    views: 18450,
    publishedAt: "2026-08-15",
    tags: ["UIDAI", "Demographic", "Spelling", "Aadhaar", "e-KYC"],
    question: {
      en: 'Why does my application fail with "UIDAI Demographic Verification Failure"?',
      hi: 'मेरे आवेदन में "UIDAI जनसांख्यिकी सत्यापन विफलता" (Demographic Failure) क्यों आ रही है?',
    },
    answer: {
      en: "PAN registration systems, EPFO, and government portals verify demographic data (name spelling, date of birth, gender) in real-time against UIDAI records. If there is even a single letter, spacing, or initial discrepancy compared to your Aadhaar card, the verification gateway rejects your request.\n\nResolution steps:\n1. Inspect your Aadhaar card letter-by-letter to match exact spelling, spacing, and initials.\n2. If your Aadhaar details are outdated, update demographic details online via the myAadhaar portal (uidai.gov.in) or visit an authorized Aadhaar Seva Kendra.\n3. Retry submission once the UIDAI update reflects (typically 24–72 hours).",
      hi: "पैन पंजीकरण, ईपीएफओ और सरकारी पोर्टल नाम की वर्तनी (spelling), जन्म तिथि और लिंग का सीधे UIDAI डेटाबेस से वास्तविक समय में मिलान करते हैं। यदि आपके आधार रिकॉर्ड और आवेदन पत्र में एक अक्षर या स्पेस का भी अंतर है, तो सत्यापन पोर्टल आवेदन को निरस्त कर देता है।\n\nसमाधान:\n1. फॉर्म में ठीक वैसा ही नाम दर्ज करें जैसा आधार कार्ड पर मुद्रित है।\n2. यदि आधार में जानकारी पुरानी है, तो पहले myAadhaar पोर्टल (uidai.gov.in) पर जाकर विवरण अपडेट करें।\n3. आधार अपडेट होने के 24-72 घंटे बाद पुनः आवेदन जमा करें।",
    },
  },
  {
    id: "faq-aadhaar-2",
    category: "aadhaar",
    views: 15200,
    publishedAt: "2026-08-28",
    tags: ["Aadhaar", "Mobile Link", "OTP", "Biometric", "ASK"],
    question: {
      en: "How can I update my mobile number, photo, or biometric credentials linked with Aadhaar?",
      hi: "मैं आधार से जुड़ा अपना मोबाइल नंबर, फोटो या बायोमेट्रिक विवरण कैसे अपडेट कर सकता हूँ?",
    },
    answer: {
      en: "While residential address can be updated online via the UIDAI Self-Service Portal using valid address proofs, mobile number, photo, iris, and fingerprint updates MANDATORILY require physical in-person biometric authentication at a designated Aadhaar Enrolment Centre or Aadhaar Seva Kendra (ASK).\n\nKey rules:\n• No supporting document is required for mobile number update.\n• A statutory fee of ₹50 is charged by UIDAI for demographic updates and ₹100 for biometric updates.\n• You can pre-book an appointment at ask.uidai.gov.in to skip physical waiting lines.",
      hi: "निवास का पता UIDAI सेल्फ-सर्विस पोर्टल पर वैध पते के प्रमाण के साथ ऑनलाइन बदला जा सकता है, लेकिन मोबाइल नंबर, फोटो, आईरिस और फिंगरप्रिंट अपडेट करने के लिए किसी भी आधार सेवा केंद्र (ASK) पर व्यक्तिगत रूप से बायोमेट्रिक सत्यापन कराना अनिवार्य है।\n\nमुख्य नियम:\n• मोबाइल नंबर अपडेट के लिए किसी दस्तावेज़ की आवश्यकता नहीं होती।\n• इसके लिए ₹50 का सरकारी शुल्क लगता है।\n• लंबी कतारों से बचने के लिए ask.uidai.gov.in पर ऑनलाइन अपॉइंटमेंट बुक कर सकते हैं।",
    },
  },
  {
    id: "faq-aadhaar-3",
    category: "aadhaar",
    views: 14100,
    publishedAt: "2026-09-02",
    tags: ["Baal Aadhaar", "Child Aadhaar", "MBU", "Biometrics", "UIDAI"],
    question: {
      en: "What is Baal Aadhaar (Blue Aadhaar) and when does mandatory biometric update happen for children?",
      hi: "बाल आधार (नीला आधार) क्या है और बच्चों के लिए अनिवार्य बायोमेट्रिक अपडेट कब होता है?",
    },
    answer: {
      en: "Children below 5 years of age are issued a blue-coloured 'Baal Aadhaar' without biometric scans, authenticated using their parents' Aadhaar. However, biometrics change as children grow, so UIDAI mandates two free Mandatory Biometric Updates (MBU):\n\n1. First MBU: When the child reaches 5 years of age.\n2. Second MBU: When the child reaches 15 years of age.\n\nBoth mandatory biometric updates are completely FREE of cost at any Aadhaar Seva Kendra. Failure to complete MBU may lead to the child's Aadhaar becoming dormant for school admissions or competitive exams.",
      hi: "5 वर्ष से कम उम्र के बच्चों को नीले रंग का 'बाल आधार' जारी किया जाता है जिसमें फिंगरप्रिंट या आईरिस स्कैन नहीं लिया जाता। बच्चों के बड़े होने पर दो बार अनिवार्य बायोमेट्रिक अपडेट (MBU) कराना होता है:\n\n1. पहला MBU: 5 वर्ष की आयु पूरी होने पर।\n2. दूसरा MBU: 15 वर्ष की आयु पूरी होने पर।\n\nये दोनों अनिवार्य बायोमेट्रिक अपडेट किसी भी आधार सेवा केंद्र पर 100% निशुल्क होते हैं। समय पर अपडेट न कराने पर स्कूल एडमिशन या परीक्षा में आधार निष्क्रिय हो सकता है।",
    },
  },
  {
    id: "faq-aadhaar-4",
    category: "aadhaar",
    views: 12300,
    publishedAt: "2026-09-08",
    tags: ["Biometric Lock", "VID", "Aadhaar Security", "Fraud Prevention"],
    question: {
      en: "How do I lock/unlock my Aadhaar biometrics or generate a Virtual ID (VID) for fraud prevention?",
      hi: "धोखाधड़ी से बचने के लिए मैं अपना आधार बायोमेट्रिक कैसे लॉक/अनलॉक करूं या वर्चुअल आईडी (VID) कैसे बनाऊं?",
    },
    answer: {
      en: "To prevent unauthorized biometric cloning or AePS (Aadhaar-enabled Payment System) fraud:\n\n• Biometric Lock: Log in to myaadhaar.uidai.gov.in using your Aadhaar OTP. Navigate to 'Lock/Unlock Biometrics' and toggle it ON. Once locked, any fingerprint or iris authentication attempt will be immediately declined until you temporarily unlock it.\n• Virtual ID (VID): A 16-digit temporary, revocable random number generated from the UIDAI portal. You can share your VID instead of your actual 12-digit Aadhaar number for SIM verification or e-KYC without exposing your real Aadhaar.",
      hi: "बायोमेट्रिक क्लोनिंग या एईपीएस (AePS) वित्तीय धोखाधड़ी से बचने के लिए:\n\n• बायोमेट्रिक लॉक: myaadhaar.uidai.gov.in पर ओटीपी से लॉगिन करें और 'Lock/Unlock Biometrics' पर क्लिक करके लॉक सक्षम करें। लॉक होने के बाद कोई भी फिंगरप्रिंट या आईरिस सत्यापन अस्वीकार हो जाएगा जब तक कि आप इसे अनलॉक न करें।\n• वर्चुअल आईडी (VID): 16 अंकों की एक अस्थायी संख्या जो पोर्टल से तुरंत बन जाती है। सिम खरीदने या बैंक में केवाईसी के लिए 12 अंकों के आधार नंबर की जगह सुरक्षित रूप से VID दी जा सकती है।",
    },
  },

  // ==========================================
  // --- INCOME TAX CATEGORY ---
  // ==========================================
  {
    id: "faq-tax-1",
    category: "incometax",
    views: 24500,
    publishedAt: "2026-08-18",
    tags: ["PAN-Aadhaar", "Section 139AA", "Inoperative PAN", "Penalty ₹1000"],
    question: {
      en: "What is the penalty for not linking PAN with Aadhaar, and how do I reactivate an inoperative PAN?",
      hi: "पैन को आधार से लिंक न करने पर क्या जुर्माना होता है, और निष्क्रिय (inoperative) पैन को पुनः चालू कैसे करें?",
    },
    answer: {
      en: "Under Section 139AA of the Income Tax Act, 1961, an unlinked PAN becomes 'inoperative'. Consequences include:\n• Pending tax refunds are completely frozen.\n• TDS and TCS are deducted at punitive higher rates (minimum 20%).\n• Inability to file Income Tax Returns (ITR) or complete bank high-value transactions.\n\nReactivation Process:\n1. Visit the Income Tax e-Filing portal (incometax.gov.in) and click 'Link Aadhaar'.\n2. Pay the statutory fee of ₹1,000 under Challan ITNS 280 (Major Head 0021, Minor Head 500).\n3. After payment clearance (usually 24–48 hours), submit the final linking request. Your PAN will become active within 3 to 7 working days.",
      hi: "आयकर अधिनियम की धारा 139AA के तहत असंबद्ध पैन 'निष्क्रिय' (inoperative) हो जाता है। इसके मुख्य परिणाम हैं:\n• आयकर रिफंड रुक जाता है।\n• टीडीएस/टीसीएस 20% की उच्च दर पर काटा जाता है।\n• नया आईटीआर फाइल नहीं किया जा सकता।\n\nपुनः सक्रिय करने की प्रक्रिया:\n1. incometax.gov.in पर जाकर 'Link Aadhaar' विकल्प चुनें।\n2. चालान संख्या ITNS 280 (Minor Head 500) के तहत ₹1,000 का सरकारी शुल्क जमा करें।\n3. भुगतान दर्ज होने के 24-48 घंटे बाद पोर्टल पर जाकर लिंकिंग अनुरोध सबमिट करें। 3 से 7 दिनों में पैन सक्रिय हो जाता है।",
    },
  },
  {
    id: "faq-tax-2",
    category: "incometax",
    views: 19800,
    publishedAt: "2026-08-25",
    tags: ["Instant e-PAN", "Free PAN", "e-KYC", "e-Filing"],
    question: {
      en: "How can I generate an instant digitally signed e-PAN online free of cost using Aadhaar?",
      hi: "आधार का उपयोग करके मैं तुरंत डिजिटल ई-पैन (Instant e-PAN) निशुल्क कैसे प्राप्त कर सकता हूँ?",
    },
    answer: {
      en: "Eligible individual taxpayers who have never been allotted a PAN card and possess an Aadhaar linked to an active mobile number can obtain an Instant e-PAN free of cost (₹0):\n\n1. Visit the Income Tax Portal (eportal.incometax.gov.in) and select 'Instant e-PAN'.\n2. Click 'Get New e-PAN' and enter your 12-digit Aadhaar number.\n3. Enter the 6-digit Aadhaar OTP received on your mobile phone.\n4. Validate the pre-filled demographic data and click Submit.\n5. Download your digitally signed, QR-coded PDF e-PAN within 10 minutes. It holds 100% legal parity with physical plastic PAN cards under IT Rule 114.",
      hi: "वे नागरिक जिन्हें पहले कभी पैन कार्ड आवंटित नहीं हुआ है और जिनका आधार मोबाइल नंबर से जुड़ा है, वे ई-फाइलिंग पोर्टल से निशुल्क (₹0) ई-पैन बना सकते हैं:\n\n1. eportal.incometax.gov.in पर जाएं और 'Instant e-PAN' पर क्लिक करें।\n2. अपना 12 अंकों का आधार नंबर दर्ज करें।\n3. मोबाइल पर प्राप्त 6 अंकों का आधार ओटीपी दर्ज करें।\n4. विवरण की पुष्टि करके सबमिट करें।\n5. 10 मिनट के भीतर क्यूआर कोड युक्त डिजिटल ई-पैन पीडीएफ डाउनलोड करें। यह प्लास्टिक पैन कार्ड के समान ही कानूनी रूप से मान्य है।",
    },
  },
  {
    id: "faq-tax-3",
    category: "incometax",
    views: 16700,
    publishedAt: "2026-09-01",
    tags: ["AIS", "Form 26AS", "Form 16", "TDS Mismatch", "Tax Refund"],
    question: {
      en: "How do I resolve TDS / tax credit mismatches between Form 16, AIS, and Form 26AS?",
      hi: "फॉर्म 16, एआईएस (AIS) और फॉर्म 26AS में टीडीएस या टैक्स क्रेडिट के अंतर को कैसे ठीक करें?",
    },
    answer: {
      en: "Central Processing Centre (CPC) processes tax returns automatically against Annual Information Statement (AIS) and Form 26AS data. If a credit is missing:\n\n1. Cross-check your PAN on Form 16: Ensure your deductor (employer, bank, or client) did not mistype your PAN.\n2. Verify quarterly filing: Deductors submit TDS quarterly (by July 31, Oct 31, Jan 31, May 31). Updates reflect in 26AS only after their filing.\n3. Submit AIS Feedback: If AIS shows income you did not receive, log in to the e-filing portal, open AIS, click the specific transaction, and submit feedback ('Information is denied' / 'Duplicate').\n4. Request a revised TDS return (Form 24Q / 26Q) from the deductor to correct the tax credit in your name.",
      hi: "आयकर विभाग आपके रिटर्न का मिलान एआईएस (AIS) और 26AS से करता है। यदि टीडीएस कम दिख रहा है:\n\n1. फॉर्म 16 पर अपना पैन नंबर जांचें कि नियोक्ता या बैंक ने गलत पैन तो दर्ज नहीं किया।\n2. तिमाही विवरण जांचें: कटौतीकर्ता हर तिमाही बाद टीडीएस फाइल करते हैं, जिसके बाद ही 26AS में अपडेट होता है।\n3. एआईएस में फीडबैक दें: यदि कोई लेन-देन गलत दिख रहा है, तो पोर्टल पर AIS में जाकर उस एंट्री पर 'Information is denied' फीडबैक दर्ज करें।\n4. कटौतीकर्ता से संशोधित टीडीएस रिटर्न (Revised Return) दाखिल करने का अनुरोध करें।",
    },
  },
  {
    id: "faq-tax-4",
    category: "incometax",
    views: 12400,
    publishedAt: "2026-08-29",
    tags: ["Income Certificate", "EWS", "Tehsildar", "Form 16", "ITR"],
    question: {
      en: "How is annual household income computed for Income and EWS (Economically Weaker Section) certificates?",
      hi: "आय और ईडब्ल्यूएस (EWS) प्रमाण पत्र के लिए पारिवारिक वार्षिक आय की गणना कैसे की जाती है?",
    },
    answer: {
      en: "Annual household income is calculated based on the cumulative gross earnings of the applicant, spouse, parents, and unmarried minor siblings/children from all sources (salaries, agriculture, business/profession, dividends, rental income) over the preceding financial year.\n\nMandatory criteria & proofs:\n• Salaried applicants: ITR Acknowledgement (ITR-V) or Form 16 + salary slips.\n• Rural / Agricultural applicants: Patwari / Revenue Inspector income assessment report.\n• EWS income limit is strictly ₹8 Lakh gross annual income, subject to state land/residential asset ceiling rules.",
      hi: "पारिवारिक वार्षिक आय में आवेदक, उनके पति/पत्नी, माता-पिता और अविवाहित बच्चों की सभी स्रोतों (वेतन, कृषि, व्यापार, किराया आदि) से पिछले वित्तीय वर्ष में हुई कुल आय शामिल होती है।\n\nआवश्यक कागजात:\n• नौकरीपेशा के लिए फॉर्म 16 या आईटीआर रसीद (ITR-V)।\n• किसानों/ग्रामीणों के लिए पटवारी या राजस्व निरीक्षक की आय आख्या।\n• ईडब्ल्यूएस (EWS) के लिए सकल वार्षिक आय ₹8 लाख से कम होनी चाहिए तथा आवासीय भूमि सीमा के नियमों का पालन होना चाहिए।",
    },
  },

  // ==========================================
  // --- PASSPORT CATEGORY ---
  // ==========================================
  {
    id: "faq-passport-1",
    category: "passport",
    views: 21200,
    publishedAt: "2026-08-16",
    tags: ["Passport Seva", "Tatkaal", "Fees ₹1500", "Police Verification"],
    question: {
      en: "What is the difference between Normal and Tatkaal passport processing, fees, and timelines?",
      hi: "सामान्य (Normal) और तत्काल (Tatkaal) पासपोर्ट आवेदन, शुल्क और डिलीवरी समय सीमा में क्या अंतर है?",
    },
    answer: {
      en: "Under the Ministry of External Affairs (MEA) Passport Seva system:\n\n• Normal Application:\n  - Statutory Fee: ₹1,500 (36 pages) / ₹2,000 (60 pages jumbo booklet).\n  - Processing: Police Verification occurs PRIOR to passport printing (Pre-Police Verification).\n  - Dispatch: Delivered via Speed Post within 15 to 30 working days.\n\n• Tatkaal Scheme:\n  - Statutory Fee: Standard fee + ₹2,000 urgent surcharge (total ₹3,500 for 36 pages).\n  - Processing: Dispatched on Post-Police Verification basis (police verification happens AFTER delivery).\n  - Dispatch: Dispatched within 1 to 3 business days post PSK appointment.\n  - Eligibility: Requires 3 mandatory identity proofs from the MEA list (such as Aadhaar, PAN, Voter ID, or Service ID).",
      hi: "विदेश मंत्रालय (MEA) के पासपोर्ट सेवा सिस्टम के तहत:\n\n• सामान्य (Normal) आवेदन:\n  - सरकारी शुल्क: ₹1,500 (36 पृष्ठ) / ₹2,000 (60 पृष्ठ जंबो)।\n  - प्रक्रिया: पुलिस सत्यापन पासपोर्ट छपने से पहले होता है।\n  - डिलीवरी: 15 से 30 कार्य दिवसों में स्पीड पोस्ट द्वारा।\n\n• तत्काल (Tatkaal) योजना:\n  - सरकारी शुल्क: ₹1,500 + ₹2,000 अतिरिक्त तत्काल शुल्क (कुल ₹3,500)।\n  - प्रक्रिया: पासपोर्ट पहले जारी होता है, पुलिस सत्यापन बाद में (Post-Police Verification)।\n  - डिलीवरी: पासपोर्ट सेवा केंद्र पर उपस्थित होने के 1 से 3 कार्य दिवसों के भीतर।\n  - इसके लिए 3 विशिष्ट सरकारी पहचान प्रमाण (जैसे आधार, पैन, वोटर आईडी) देना अनिवार्य होता है।",
    },
  },
  {
    id: "faq-passport-2",
    category: "passport",
    views: 18900,
    publishedAt: "2026-08-27",
    tags: ["Police Verification", "mPassport Police", "Address Proof", "Witnesses"],
    question: {
      en: "What documents are mandatory for Passport Police Verification and how does mPassport Police App work?",
      hi: "पुलिस सत्यापन (Police Verification) के लिए कौन से दस्तावेज अनिवार्य हैं और mPassport Police ऐप कैसे काम करता है?",
    },
    answer: {
      en: "For physical police verification by your local station Beat Constable:\n\nRequired Documents:\n• Current Residential Address Proof: Original Aadhaar card with current address, utility bill (<3 months), registered rent agreement, or bank passbook with photo.\n• Proof of Date of Birth: 10th class board certificate or Municipal Birth Certificate.\n• Two local neighborhood witnesses residing in the same locality, with photocopies of their Aadhaar cards.\n\nModern Process:\nPolice inquiry officers in most commissionerates now carry the GPS-enabled 'mPassport Police App' tablet. They capture your photograph and geo-tagged address live on-site, transmitting clearance instantly to the Regional Passport Office (RPO) and cutting verification time from 21 days to under 5 days.",
      hi: "स्थानीय थाने द्वारा किए जाने वाले भौतिक पुलिस सत्यापन के लिए आवश्यक दस्तावेज:\n\n• वर्तमान पते का प्रमाण: वर्तमान पते वाला आधार कार्ड, बिजली बिल (3 महीने से कम पुराना), पंजीकृत किरायानामा या बैंक पासबुक।\n• जन्मतिथि का प्रमाण: 10वीं का बोर्ड प्रमाण पत्र या नगर निगम जन्म प्रमाण पत्र।\n• पड़ोस के दो गवाह (Local Witnesses) और उनके आधार कार्ड की फोटोकॉपी।\n\nआधुनिक प्रक्रिया:\nअब पुलिस अधिकारी जीपीएस आधारित 'mPassport Police App' टैबलेट के साथ आते हैं। वे मौके पर ही फोटो और लोकेशन सत्यापित करके तुरंत क्षेत्रीय पासपोर्ट कार्यालय को रिपोर्ट भेजते हैं, जिससे सत्यापन 21 दिन की बजाय 5 दिन में पूरा हो जाता है।",
    },
  },
  {
    id: "faq-passport-3",
    category: "passport",
    views: 14500,
    publishedAt: "2026-09-04",
    tags: ["Minor Passport", "Annexure D", "Child Passport", "PSK Appointment"],
    question: {
      en: "What are the rules, required documents, and parent consent forms for applying for a Minor's passport?",
      hi: "नाबालिग (Minor) बच्चों के पासपोर्ट आवेदन के क्या नियम, आवश्यक दस्तावेज और माता-पिता की सहमति प्रारूप हैं?",
    },
    answer: {
      en: "For applicants below 18 years of age:\n\n• Validity: Minor passports are issued for a maximum of 5 years or until the child reaches 18 years of age (whichever is earlier). Statutory fee is ₹1,000.\n• Parent Accompaniment: Both parents must physically accompany the child to the Passport Seva Kendra (PSK/POPSK) with their original valid passports and photocopies.\n• Mandatory Consent: If both parents hold valid passports with spouse name endorsed, Annexure D (consent of both parents) must be signed. If one parent lives abroad, Annexure C signed before an Indian Embassy/Consulate is required.\n• Address Proof: Address proof in the name of either parent is legally acceptable for the child.",
      hi: "18 वर्ष से कम आयु के बच्चों के लिए नियम:\n\n• वैधता: नाबालिगों का पासपोर्ट 5 वर्ष के लिए या 18 वर्ष की आयु पूरी होने तक (जो पहले हो) जारी होता है। सरकारी शुल्क ₹1,000 है।\n• माता-पिता की उपस्थिति: दोनों माता-पिता को अपने मूल पासपोर्ट और फोटोकॉपी के साथ बच्चे को लेकर पासपोर्ट सेवा केंद्र (PSK) जाना अनिवार्य है।\n• सहमति पत्र: दोनों माता-पिता द्वारा हस्ताक्षरित सहमति घोषणा पत्र (Annexure D) जमा करना होता है। यदि एक अभिभावक विदेश में हैं, तो दूतावास से सत्यापित Annexure C चाहिए।\n• पते का प्रमाण: माता या पिता के नाम का पता प्रमाण बच्चे के लिए पूरी तरह मान्य होता है।",
    },
  },
  {
    id: "faq-passport-4",
    category: "passport",
    views: 11800,
    publishedAt: "2026-09-09",
    tags: ["ECR", "Non-ECR", "ECNR", "Emigration Clearance", "10th Pass"],
    question: {
      en: "What is the distinction between ECR (Emigration Check Required) and Non-ECR passport status?",
      hi: "ईसीआर (ECR) और नॉन-ईसीआर (Non-ECR / ECNR) पासपोर्ट स्थिति में क्या अंतर होता है?",
    },
    answer: {
      en: "• ECR (Emigration Check Required):\nCitizens who have not passed the 10th standard (Matriculation) are placed in the ECR category. If travelling for employment to 18 notified countries (predominantly in the Gulf/Middle East), they must obtain prior Emigration Clearance from the Protector of Emigrants (POE) to protect them from exploitation.\n\n• Non-ECR (formerly ECNR):\nGranted automatically to all individuals who have passed 10th standard (submit 10th pass marksheet/certificate), graduates, income tax payees, persons holding official/diplomatic passports, and senior citizens above 50 years of age. Non-ECR holders can travel worldwide for work without any POE clearance.",
      hi: "• ईसीआर (ECR - Emigration Check Required):\nजिन्होंने 10वीं (मैट्रिक) पास नहीं की है, उन्हें ईसीआर पासपोर्ट मिलता है। 18 अधिसूचित देशों (खाड़ी देशों) में नौकरी करने जाने पर इन्हें 'उत्प्रवास संरक्षक' (POE) से क्लीयरेंस लेना अनिवार्य होता है।\n\n• नॉन-ईसीआर (Non-ECR / ECNR):\n10वीं पास प्रमाणपत्र धारक, स्नातक, आयकर दाता और 50 वर्ष से अधिक उम्र के नागरिक स्वतः नॉन-ईसीआर के पात्र हैं। इन्हें विदेश में रोजगार हेतु किसी सरकारी उत्प्रवास क्लीयरेंस की आवश्यकता नहीं होती।",
    },
  },

  // ==========================================
  // --- WELFARE & DBT CATEGORY ---
  // ==========================================
  {
    id: "faq-welfare-1",
    category: "welfare",
    views: 26800,
    publishedAt: "2026-08-22",
    tags: ["PM-Kisan", "Farmer", "DBT", "Land Seeding"],
    question: {
      en: 'Why is my PM-Kisan Samman Nidhi installment withheld or marked "e-KYC Pending"?',
      hi: 'मेरी पीएम-किसान सम्मान निधि की किस्त क्यों रुक गई है या "e-KYC Pending" दिखा रही है?',
    },
    answer: {
      en: "PM-Kisan releases ₹6,000 annually in three installments of ₹2,000 directly via DBT. If an installment is stopped, verify these three mandatory compliances on pmkisan.gov.in:\n\n1. Mandatory Aadhaar e-KYC: Must be completed via OTP on the portal or biometric scan at a CSC centre.\n2. Land Seeding (Bhulekh): Your state land record (khata/khasra/RoR) must be digitally verified and linked to your farmer profile by your local Patwari/Tehsildar.\n3. Bank Account Aadhaar Seeding: Your bank account must be mapped on the NPCI Aadhaar payment bridge.",
      hi: "पीएम-किसान के तहत सालाना ₹6,000 की सहायता तीन किस्तों में सीधे बैंक खाते में भेजी जाती है। यदि किस्त रुक गई है, तो pmkisan.gov.in पर ये तीन चीजें जांचें:\n\n1. आधार ई-केवाईसी: पोर्टल पर ओटीपी या सीएससी केंद्र पर बायोमेट्रिक से पूरा होना अनिवार्य है।\n2. भूलेख अंकन (Land Seeding): आपकी जमीन के खसरा/खतौनी का डिजिटल सत्यापन पटवारी/तहसीलदार द्वारा होना चाहिए।\n3. बैंक खाते में आधार डीबीटी सीडिंग (NPCI Seeding) सक्रिय होनी चाहिए।",
    },
  },
  {
    id: "faq-welfare-2",
    category: "welfare",
    views: 19800,
    publishedAt: "2026-08-18",
    tags: ["DBT", "NPCI", "Aadhaar Seeding", "Bank"],
    question: {
      en: "What is the critical difference between linking Aadhaar with a bank account and NPCI DBT Seeding?",
      hi: "बैंक खाते में आधार लिंक करने और NPCI DBT सीडिंग (Seeding) में क्या अंतर है?",
    },
    answer: {
      en: "Linking Aadhaar to a bank account only satisfies the bank's internal KYC requirements for routine transactions. However, government subsidies, scholarships, and welfare disbursements are routed exclusively through the NPCI (National Payments Corporation of India) Aadhaar Payment Bridge System (APBS).\n\nTo receive government funds:\n• Your account must be specifically 'Aadhaar Seeded / Mapped with NPCI'.\n• A citizen can have accounts in multiple banks, but only ONE account can be mapped to receive DBT at any given time.\n• Check your DBT status on the UIDAI portal under 'Bank Seeding Status' or via your bank's netbanking portal.",
      hi: "बैंक खाते में केवल आधार लिंक करना बैंक की सामान्य केवाईसी के लिए होता है। जबकि सरकारी सब्सिडी, छात्रवृत्ति और पेंशन 'NPCI आधार पेमेंट ब्रिज' (APBS) के माध्यम से भेजी जाती है।\n\nसरकारी लाभ पाने के लिए:\n• आपके खाते का NPCI से 'सीडेड (Seeded)' होना आवश्यक है।\n• आपके कई बैंक खाते हो सकते हैं, लेकिन डीबीटी केवल उसी एक खाते में आएगा जो NPCI से मैप है।\n• आप myAadhaar पोर्टल पर 'Bank Seeding Status' से इसकी स्थिति जांच सकते हैं।",
    },
  },
  {
    id: "faq-welfare-3",
    category: "welfare",
    views: 13900,
    publishedAt: "2026-08-30",
    tags: ["e-Shram", "Unorganized Workers", "Social Security", "PMSBY"],
    question: {
      en: "Who is eligible for the e-Shram Card and what social welfare benefits does it provide?",
      hi: "ई-श्रम कार्ड (e-Shram Card) के लिए कौन पात्र है और इसके क्या लाभ हैं?",
    },
    answer: {
      en: "Any unorganized worker aged between 16 and 59 years (construction workers, street vendors, domestic helpers, agricultural labourers, gig workers) who is not an income tax payee and not covered under EPFO or ESIC is eligible for the e-Shram Card.\n\nBenefits include:\n• 12-digit Universal Account Number (UAN) valid pan-India.\n• Direct coverage under Pradhan Mantri Suraksha Bima Yojana (PMSBY) with up to ₹2 Lakh accidental death/permanent disability cover.\n• Direct financial assistance during national disasters or state emergency relief drives.",
      hi: "16 से 59 वर्ष की आयु के सभी असंगठित क्षेत्र के श्रमिक (निर्माण मजदूर, रेहड़ी-पटरी वाले, घरेलू कामगार, कृषि मजदूर, गिग वर्कर्स) जो ईपीएफओ या ईएसआईसी के सदस्य नहीं हैं और आयकर नहीं देते, वे इसके पात्र हैं।\n\nलाभ:\n• 12 अंकों का विशिष्ट यूएएन (UAN) नंबर।\n• ₹2 लाख तक का दुर्घटना बीमा कवर (पीएमएसबीवाई)।\n• राष्ट्रीय आपदा या संकट के समय सीधे बैंक खाते में राहत राशि।",
    },
  },
  {
    id: "faq-welfare-4",
    category: "welfare",
    views: 11500,
    publishedAt: "2026-08-10",
    tags: ["Eligibility", "Schemes", "Welfare Matrix"],
    question: {
      en: "How does the Dynamic Welfare Scheme Eligibility Matrix evaluate citizen qualification?",
      hi: "गतिशील कल्याणकारी योजना पात्रता मैट्रिक्स नागरिक पात्रता की गणना कैसे करता है?",
    },
    answer: {
      en: "The Eligibility Checker analyzes your state of residence, family annual income bracket, caste/category status, occupational sector (such as farming, unorganized manual labour, students, or artisans), and disability status against active Central and State gazetted schemes.\n\nOnce entered, the algorithm filters out ineligible schemes, highlights the maximum direct monetary subvention or insurance cover available, and provides an instant checklist of mandatory supporting documents.",
      hi: "पात्रता चेकर आपके राज्य, वार्षिक पारिवारिक आय, सामाजिक श्रेणी, व्यवसाय (जैसे किसान, असंगठित श्रमिक, छात्र) और दिव्यांगता स्थिति का सरकारी योजनाओं के नियमों से स्वतः मिलान करता है।\n\nयह तुरंत उन योजनाओं को छांटता है जिनके आप पात्र हैं, मिलने वाले अधिकतम आर्थिक लाभ या बीमा राशि को दर्शाता है, और जरूरी दस्तावेजों की सूची प्रदान करता है।",
    },
  },

  // ==========================================
  // --- HEALTH & AYUSHMAN CATEGORY ---
  // ==========================================
  {
    id: "faq-health-1",
    category: "health",
    views: 17800,
    publishedAt: "2026-09-02",
    tags: ["ABHA", "Health ID", "Ayushman Bharat", "ABDM"],
    question: {
      en: "What is ABHA (Ayushman Bharat Health Account) and how is it authenticated?",
      hi: "आभा (ABHA) हेल्थ आईडी क्या है और इसे कैसे सत्यापित किया जाता है?",
    },
    answer: {
      en: "ABHA is a 14-digit unique health identifier issued by the National Health Authority (NHA) under the Ayushman Bharat Digital Mission (ABDM). It digitally unifies your diagnostic lab reports, clinical prescriptions, hospital discharge summaries, and insurance claims into one consent-based digital locker.\n\nAuthentication is completed in seconds using Aadhaar OTP or your Driving Licence. It is 100% free and voluntary, allowing you to share health records securely with empanelled doctors without carrying physical files.",
      hi: "आभा (ABHA) राष्ट्रीय स्वास्थ्य प्राधिकरण द्वारा आयुष्मान भारत डिजिटल मिशन के तहत जारी 14 अंकों की विशिष्ट स्वास्थ्य पहचान संख्या है। यह आपकी जांच रिपोर्ट, डॉक्टर के पर्चे और अस्पताल के रिकॉर्ड को एक सुरक्षित डिजिटल लॉकर में जोड़ती है।\n\nआधार ओटीपी या ड्राइविंग लाइसेंस द्वारा इसका तुरंत सत्यापन हो जाता है। यह सेवा 100% निशुल्क और स्वैच्छिक है।",
    },
  },
  {
    id: "faq-health-2",
    category: "health",
    views: 23100,
    publishedAt: "2026-08-20",
    tags: ["PM-JAY", "Golden Card", "Cashless ₹5 Lakh", "SECC 2011", "Ayushman Bharat"],
    question: {
      en: "Who is eligible for the Ayushman Bharat PM-JAY Card and how does ₹5 Lakh cashless treatment work?",
      hi: "आयुष्मान भारत पीएम-जय (PM-JAY) कार्ड के लिए कौन पात्र है और ₹5 लाख का कैशलेस इलाज कैसे मिलता है?",
    },
    answer: {
      en: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization:\n\n• Eligibility: Families listed in SECC 2011 occupational & deprivation criteria, active NFSA Antyodaya (AAY) beneficiaries, plus all senior citizens aged 70 and above under the expanded Ayushman Vaya Vandana initiative (regardless of income).\n• Cashless Mechanism: Zero out-of-pocket payment across thousands of empanelled government and private hospitals across India.\n• Verification: Check your name on mera.pmjay.gov.in using your mobile number, Aadhaar, or Ration Card number.",
      hi: "आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) के तहत प्रति परिवार प्रति वर्ष ₹5 लाख का कैशलेस स्वास्थ्य बीमा मिलता है:\n\n• पात्रता: SECC 2011 डेटाबेस में शामिल परिवार, अंत्योदय राशन कार्ड धारक, तथा नए विस्तार के तहत 70 वर्ष या उससे अधिक उम्र के सभी वरिष्ठ नागरिक (आय की परवाह किए बिना)।\n• कैशलेस सुविधा: देश के किसी भी संबद्ध सरकारी या निजी अस्पताल में भर्ती होने पर दवा, जांच और इलाज पर शून्य खर्च।\n• पात्रता जांच: mera.pmjay.gov.in पर मोबाइल नंबर या राशन कार्ड नंबर दर्ज करके नाम जांचें।",
    },
  },
  {
    id: "faq-health-3",
    category: "health",
    views: 13600,
    publishedAt: "2026-09-06",
    tags: ["Pension", "Life Certificate", "Jeevan Pramaan", "Face Auth"],
    question: {
      en: "How can senior citizens submit their Digital Life Certificate (Jeevan Pramaan) from home using Face Auth?",
      hi: "वरिष्ठ नागरिक घर बैठे चेहरा स्कैन करके डिजिटल जीवन प्रमाण पत्र (Jeevan Pramaan) कैसे जमा कर सकते हैं?",
    },
    answer: {
      en: "Pensioners no longer need to physically visit bank branches or treasury offices. Using the official 'Jeevan Pramaan Face App' and the 'AadhaarFaceRD' Android service, pensioners can complete facial recognition right from a smartphone camera.\n\nSteps:\n1. Download Jeevan Pramaan and AadhaarFaceRD from Google Play Store.\n2. Enter Pensioner Aadhaar, Mobile, and PPO (Pension Payment Order) number.\n3. Complete live face scan in good lighting.\n4. A digital Pramaan ID is generated, and the life certificate is automatically dispatched to the Pension Disbursing Agency (PDA) within 5 minutes.",
      hi: "पेंशनभोगियों को अब बैंक या कोषागार के चक्कर लगाने की जरूरत नहीं है। वे स्मार्टफोन में 'Jeevan Pramaan Face App' और 'AadhaarFaceRD' सेवा का उपयोग करके कैमरे के सामने चेहरा स्कैन करके डिजिटल जीवन प्रमाण पत्र जमा कर सकते हैं:\n\n1. प्ले स्टोर से Jeevan Pramaan और AadhaarFaceRD ऐप इंस्टॉल करें।\n2. आधार नंबर, मोबाइल और पीपीओ (PPO) नंबर दर्ज करें।\n3. कैमरे के सामने चेहरे का स्कैन पूरा करें।\n4. प्रमाण पत्र स्वतः संबंधित बैंक या पेंशन कार्यालय को प्रेषित हो जाता है।",
    },
  },

  // ==========================================
  // --- RATION & FOOD CATEGORY ---
  // ==========================================
  {
    id: "faq-ration-1",
    category: "ration",
    views: 16800,
    publishedAt: "2026-09-04",
    tags: ["ONORC", "Ration Card", "Food Security", "Mera Ration"],
    question: {
      en: "Can migrant citizens receive subsidized food grains under One Nation One Ration Card (ONORC)?",
      hi: "क्या प्रवासी नागरिक 'एक राष्ट्र एक राशन कार्ड' (ONORC) के तहत दूसरे राज्य में राशन ले सकते हैं?",
    },
    answer: {
      en: "Yes! Under the ONORC framework implemented by the Department of Food and Public Distribution, any NFSA (National Food Security Act) ration card holder can lift their entitled subsidized or free food grains from any Fair Price Shop (FPS) across India using biometric authentication (fingerprint or iris scan) on the e-PoS device. No transfer of original ration card is required.\n\nMigrants can also split their monthly quota: family members back home can collect their portion, while the migrant worker collects their portion in another state.",
      hi: "हाँ! 'वन नेशन वन राशन कार्ड' योजना के तहत देश का कोई भी राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) राशन कार्ड धारक भारत के किसी भी राज्य की उचित मूल्य की दुकान (राशन की दुकान) से ई-पीओएस मशीन पर फिंगरप्रिंट लगाकर अपना राशन प्राप्त कर सकता है। कार्ड ट्रांसफर कराने की कोई आवश्यकता नहीं है।\n\nप्रवासी परिवार कोटा बांट भी सकते हैं: पैतृक गांव में परिवार अपना हिस्सा ले सकता है और श्रमिक शहर में अपना हिस्सा प्राप्त कर सकता है।",
    },
  },
  {
    id: "faq-ration-2",
    category: "ration",
    views: 14200,
    publishedAt: "2026-08-23",
    tags: ["Ration Card Addition", "Birth Certificate", "PDS", "NFSA"],
    question: {
      en: "How do I add a newborn child or newly married spouse to an existing NFSA Ration Card?",
      hi: "मौजूदा राशन कार्ड में नवजात शिशु या नए विवाहित सदस्य का नाम कैसे जोड़ें?",
    },
    answer: {
      en: "To add family members on state e-PDS portals:\n\n• For Newborn Child:\n  - Municipal Birth Certificate.\n  - Aadhaar Card of child (or Baal Aadhaar enrolment slip).\n  - Aadhaar card of head of family.\n\n• For Newly Married Spouse:\n  - Marriage Certificate or registered affidavit.\n  - Surrender/Name Deletion Certificate from the spouse's parents' prior ration card.\n  - Aadhaar card showing updated address.\n\nApplications are submitted on your state food department portal or via your local Circle/Taluk Food Supplies Inspector office.",
      hi: "राज्य खाद्य पोर्टल पर राशन कार्ड में नाम जोड़ने की प्रक्रिया:\n\n• नवजात शिशु के लिए:\n  - नगर पालिका/पंचायत जन्म प्रमाण पत्र।\n  - बच्चे का आधार कार्ड (या बाल आधार रसीद)।\n  - परिवार के मुखिया का आधार कार्ड।\n\n• विवाहित महिला/पति के लिए:\n  - विवाह प्रमाण पत्र (Marriage Certificate)।\n  - मायके के राशन कार्ड से नाम कटने का प्रमाणपत्र (Surrender Certificate)।\n  - अद्यतन पते वाला आधार कार्ड।\n\nआवेदन राज्य खाद्य विभाग के ऑनलाइन पोर्टल या तहसील आपूर्ति कार्यालय में जमा होता है।",
    },
  },

  // ==========================================
  // --- VOTER ID CATEGORY ---
  // ==========================================
  {
    id: "faq-voter-1",
    category: "voter",
    views: 15400,
    publishedAt: "2026-09-05",
    tags: ["Voter ID", "Form 8", "EPIC", "ECI", "Correction"],
    question: {
      en: "How do I rectify errors in my Voter ID Card (EPIC) or transfer constituency online using Form 8?",
      hi: "मतदाता पहचान पत्र (EPIC) में गलतियों को कैसे सुधारें या फॉर्म 8 से निर्वाचन क्षेत्र कैसे बदलें?",
    },
    answer: {
      en: "The Election Commission of India (ECI) provides Form 8 on the Voters' Service Portal (voters.eci.gov.in) for all demographic corrections, photo changes, and constituency shifting:\n\n• Scope: Correction of Name, Age, DOB, Gender, Relation Name, Address, or Mobile Number.\n• Required Documents:\n  - Age/Identity Proof: Aadhaar, PAN, or 10th marksheet.\n  - Address Proof for new address: Electricity bill, bank passbook, or rent deed.\n• Verification: The local Booth Level Officer (BLO) completes physical inquiry within 15–21 days. You can track status with your Application Reference Number (ARN).",
      hi: "भारत निर्वाचन आयोग (ECI) के पोर्टल voters.eci.gov.in पर फॉर्म 8 भरकर आप अपने मतदाता पत्र में नाम, फोटो, जन्मतिथि का सुधार कर सकते हैं या नया पता बदल सकते हैं:\n\n• कार्य: नाम, उम्र, लिंग, संबंध, पता या मोबाइल नंबर सुधारना।\n• आवश्यक कागजात:\n  - पहचान प्रमाण: आधार, पैन या 10वीं की अंकतालिका।\n  - नए पते का प्रमाण: बिजली बिल, बैंक पासबुक या किरायानामा।\n• सत्यापन: स्थानीय बीएलओ (Booth Level Officer) 15-21 दिनों में सत्यापन पूरा करता है।",
    },
  },
  {
    id: "faq-voter-2",
    category: "voter",
    views: 13100,
    publishedAt: "2026-08-17",
    tags: ["Form 6", "New Voter", "e-EPIC", "Voter Helpline"],
    question: {
      en: "How do I apply for a new Voter ID card (Form 6) and download the digital e-EPIC on my smartphone?",
      hi: "नए वोटर आईडी कार्ड (फॉर्म 6) के लिए आवेदन कैसे करें और डिजिटल e-EPIC फोन में कैसे डाउनलोड करें?",
    },
    answer: {
      en: "Any Indian citizen who has attained 18 years of age (or is turning 18 on qualifying dates: Jan 1, Apr 1, Jul 1, Oct 1) can submit Form 6 online:\n\n1. Open voters.eci.gov.in or the Voter Helpline App.\n2. Fill Form 6 with your demographic details, passport-sized photo, and address proof.\n3. Upon BLO verification and approval, an EPIC number is generated.\n4. Go to 'Download e-EPIC', enter your EPIC number, verify with mobile OTP, and download a secured PDF voter card with a verifiable QR code. It is legally valid for voting at any polling booth.",
      hi: "18 वर्ष की आयु पूरी करने वाले भारतीय नागरिक नए वोटर कार्ड के लिए ऑनलाइन फॉर्म 6 भर सकते हैं:\n\n1. voters.eci.gov.in या Voter Helpline ऐप खोलें।\n2. फॉर्म 6 में अपना विवरण, फोटो और पते का प्रमाण अपलोड करें।\n3. बीएलओ जांच के बाद आपका ईपीआईसी (EPIC) नंबर जारी हो जाता है।\n4. 'Download e-EPIC' पर जाकर ओटीपी सत्यापन के बाद डिजिटल वोटर आईडी डाउनलोड करें। यह मतदान के लिए 100% मान्य है।",
    },
  },

  // ==========================================
  // --- LEGAL & RTI CATEGORY ---
  // ==========================================
  {
    id: "faq-legal-1",
    category: "legal",
    views: 17100,
    publishedAt: "2026-08-14",
    tags: ["DigiLocker", "IT Act Rule 9A", "Legal Validity", "QR Code"],
    question: {
      en: "Are digital credentials and DigiLocker documents legally valid under Indian law?",
      hi: "क्या डिजिटल प्रमाण पत्र और डिजीलॉकर दस्तावेज भारतीय कानून के तहत कानूनी रूप से मान्य हैं?",
    },
    answer: {
      en: "YES. Under Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016 notified under the IT Act, 2000, electronic documents shared via DigiLocker are treated on par with original physical documents issued by the authority.\n\nTraffic police authorities, RTO checkpoints, university admissions, and passport offices are legally mandated to accept cryptographically signed DigiLocker certificates bearing verifiable QR codes.",
      hi: "हाँ, पूरी तरह मान्य हैं। सूचना प्रौद्योगिकी (आईटी) अधिनियम 2000 के तहत 'डिजिटल लॉकर नियम 2016' के नियम 9ए के अनुसार डिजीलॉकर द्वारा जारी या उपलब्ध कराए गए इलेक्ट्रॉनिक दस्तावेज मूल भौतिक दस्तावेजों के बराबर मान्य माने जाते हैं।\n\nयातायात पुलिस, आरटीओ, विश्वविद्यालय प्रवेश और पासपोर्ट कार्यालय डिजीलॉकर दस्तावेजों को स्वीकार करने के लिए कानूनन बाध्य हैं।",
    },
  },
  {
    id: "faq-legal-2",
    category: "legal",
    views: 14700,
    publishedAt: "2026-08-24",
    tags: ["RTI", "Right to Information", "Delay", "Section 6(1)"],
    question: {
      en: "How do I file an online Right to Information (RTI) application if an e-Seva service is delayed?",
      hi: "यदि ई-सेवा आवेदन में अनुचित देरी हो रही है, तो ऑनलाइन आरटीआई (RTI) कैसे दर्ज करें?",
    },
    answer: {
      en: "Under Section 6(1) of the RTI Act, 2005, every citizen has the constitutional right to seek reasons for administrative delays from Public Information Officers (PIOs).\n\nProcedure:\n1. Visit rtionline.gov.in (for Central ministries) or your state RTI portal.\n2. Select the department, enter your original application acknowledgement number, and filing date.\n3. Demand certified copies of file notings, daily progress reports, and names of officials responsible for pendency.\n4. Public authorities must legally provide a written response within 30 days.",
      hi: "सूचना का अधिकार (RTI) अधिनियम 2005 की धारा 6(1) के तहत हर नागरिक को लोक सूचना अधिकारी (PIO) से देरी का कारण और पत्रावली पर की गई टिप्पणियां जानने का अधिकार है।\n\nप्रक्रिया:\n1. rtionline.gov.in या अपने राज्य के आरटीआई पोर्टल पर जाएं।\n2. संबंधित विभाग चुनें, आवेदन की रसीद संख्या और आवेदन की तारीख दर्ज करें।\n3. पत्रावली की प्रमाणित प्रतिलिपि और देरी के लिए जिम्मेदार अधिकारी के विरुद्ध कार्रवाई की जानकारी मांगें।\n4. लोक प्राधिकरण को 30 दिनों के भीतर जवाब देना अनिवार्य होता है।",
    },
  },
  {
    id: "faq-legal-3",
    category: "legal",
    views: 11100,
    publishedAt: "2026-09-01",
    tags: ["Citizen Charter", "RTPS", "First Appeal", "Under Verification"],
    question: {
      en: 'Why do applications stay in "Under Verification" and what are the Citizen Charter statutory timelines?',
      hi: 'आवेदन "सत्यापन प्रक्रिया (Under Verification)" में क्यों रहते हैं और इनके लिए नागरिक चार्टर की तय समय सीमा क्या है?',
    },
    answer: {
      en: "State Right to Public Services (RTPS) Acts prescribe guaranteed delivery periods (e.g., 7 days for Caste/Income, 15 days for Domicile, 30 days for Building Permits). Applications remain 'Under Verification' while field inquiries are conducted by Village Revenue Officers (VRO) or Municipal Inspectors.\n\nIf the service exceeds the guaranteed timeline, you can lodge a first appeal before the First Appellate Authority under your state's Public Service Guarantee Act without filing a court petition.",
      hi: "राज्य लोक सेवा गारंटी अधिनियमों के तहत हर सेवा के लिए समय सीमा निर्धारित है (जैसे आय/जाति प्रमाण पत्र 7 से 15 दिन, निवास प्रमाण पत्र 15 दिन)। इस दौरान क्षेत्रीय पटवारी या राजस्व निरीक्षक भौतिक जांच करते हैं।\n\nयदि तय समय सीमा में काम न हो, तो आप राज्य लोक सेवा पोर्टल पर प्रथम अपीलीय अधिकारी के समक्ष अपील दर्ज कर सकते हैं।",
    },
  },
];

export default function ESevaFaq({ onBackToServices }: { onBackToServices?: () => void }) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [groupByCategory, setGroupByCategory] = useState(true);
  const [sortMode, setSortMode] = useState<FAQSortMode>("popular");
  const [expandedId, setExpandedId] = useState<string | null>("faq-aadhaar-1");

  // Helper to compute default baseline votes derived realistically from views
  const calculateDefaultHelpful = (views: number) => {
    const yes = Math.max(18, Math.round(views * 0.042));
    const no = Math.max(1, Math.round(views * 0.0018));
    return { yes, no };
  };

  // User's own votes: { [faqId: string]: "yes" | "no" }
  const [userVotes, setUserVotes] = useState<Record<string, "yes" | "no">>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("eseva_faq_feedback_votes");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn("Failed to read faq votes from localStorage", e);
      }
    }
    return {};
  });

  // Community counts: { [faqId: string]: { yes: number; no: number } }
  const [feedbackCounts, setFeedbackCounts] = useState<Record<string, { yes: number; no: number }>>(
    () => {
      const defaults: Record<string, { yes: number; no: number }> = {};
      for (const item of FAQ_ITEMS) {
        defaults[item.id] = {
          yes: item.helpfulYes ?? calculateDefaultHelpful(item.views).yes,
          no: item.helpfulNo ?? calculateDefaultHelpful(item.views).no,
        };
      }
      if (typeof window !== "undefined") {
        try {
          const saved = localStorage.getItem("eseva_faq_feedback_counts");
          if (saved) {
            const parsed = JSON.parse(saved);
            return { ...defaults, ...parsed };
          }
        } catch (e) {
          console.warn("Failed to read faq counts from localStorage", e);
        }
      }
      return defaults;
    },
  );

  // Citizen improvement feedback for downvoted questions
  const [improvementFeedback, setImprovementFeedback] = useState<
    Record<string, { submitted: boolean; reason?: string; note?: string }>
  >(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("eseva_faq_improvement_feedback");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn("Failed to read faq improvements from localStorage", e);
      }
    }
    return {};
  });

  // Staged input states for improvement suggestions
  const [selectedReasons, setSelectedReasons] = useState<Record<string, string>>({});
  const [customImprovementNotes, setCustomImprovementNotes] = useState<Record<string, string>>({});

  // Localized UI strings
  const localT = {
    en: {
      title: "Help & FAQ Knowledge Base",
      subtitle:
        "Browse verified answers organized by citizen category: Aadhaar, Income Tax, Passport, Welfare & DBT, Health, Ration, Voter ID, and Legal protections.",
      searchPlaceholder:
        "Search across all categories (e.g., 'Tatkaal passport', 'PAN Aadhaar link', 'e-KYC', 'DigiLocker')...",
      catAll: "All Categories",
      categorySectionHeading: "Browse by Category:",
      categoryHint: "Select a category to isolate questions or view grouped sections below",
      activeCategoryBannerPrefix: "Viewing Category:",
      officialPortal: "Official Portal",
      openPortal: "Visit",
      clearCategoryFilter: "View All Categories",
      viewModeGrouped: "Group by Category",
      viewModeFlat: "All Questions List",
      sortByTitle: "Sort:",
      sortPopular: "Most Popular",
      sortNewest: "Newest",
      sortByHelpful: "Most Helpful",
      communityRatingLabel: "helpful",
      itemsCount: "questions found",
      noResults: "No Matching Frequently Asked Questions Found",
      noResultsDesc: "Try revising your search terms or selecting a different category.",
      clearFilter: "Reset Filters",
      backBtn: "Apply for Services",
      quickJump: "Quick Jump to Category:",
      wasHelpfulQuestion: "Was this answer helpful?",
      helpfulYes: "Yes",
      helpfulNo: "No",
      helpfulCountPrefix: "citizens found helpful",
      feedbackThankYouYes: "Thank you for your feedback! Glad this answer helped.",
      feedbackThankYouNo: "Thank you for letting us know. We'll work to refine this answer.",
      feedbackUndo: "Change vote",
      improveHeading: "How can this answer be improved?",
      improveSubheading:
        "Help us make citizen e-governance information clearer and more actionable for everyone.",
      improveReasons: [
        "Needs clearer step-by-step guidance",
        "Official portal link or process changed",
        "Fee or timeline seems outdated",
        "Terminology is confusing or complex",
        "Missing required documents or exceptions",
      ],
      improveCustomNote: "Optional: Suggest what was missing or unclear...",
      improveSubmitBtn: "Submit Feedback",
      improveSuccessMsg:
        "Thank you! Your feedback has been recorded to improve this citizen guide.",
      legalBadge: "Statutory Reference:",
      legalDesc: "All digital records are legally binding under Section 9A of the IT Act, 2000.",
      welfareBadge: "Direct Benefit Link:",
      welfareDesc: "Check your direct cash transfers on the official PFMS / DBT gateway.",
      taxBadge: "CBDT Compliance:",
      taxDesc: "Unlinked PAN numbers attract 20% higher TDS deduction under Section 139AA.",
      passportBadge: "MEA Passport Seva:",
      passportDesc: "Appointments at PSK / POPSK can be scheduled online up to 30 days in advance.",
      aadhaarBadge: "UIDAI Advisory:",
      aadhaarDesc: "Update demographic details every 10 years to maintain active e-KYC compliance.",
      relatedTitle: "Common Documentation Standards",
      docsRequired: "Typical proofs requested across union territories:",
      docAddress:
        "Address Verification: Utility bill (<3 mths), bank passbook, voter ID, passport.",
      docIdentity: "Identity Proof: Verifiable 12-digit Aadhaar Card, PAN card, driving licence.",
      docIncome:
        "Income Proof: Village accountant/tehsildar certified audit register or salary slip.",
      viewsLabel: "views",
      relatedQuestionsHeading: "Related Questions in this Category",
      relatedQuestionsSubheading: "Other relevant procedures citizens also frequently review:",
    },
    hi: {
      title: "सहायता एवं प्रश्नोत्तरी केंद्र",
      subtitle:
        "नागरिक श्रेणियों में व्यवस्थित उत्तर देखें: आधार, आयकर (Income Tax), पासपोर्ट (Passport), कल्याणकारी योजनाएं, स्वास्थ्य, राशन, मतदाता पत्र एवं कानूनी अधिकार।",
      searchPlaceholder:
        "सभी श्रेणियों में खोजें (जैसे कि 'तत्काल पासपोर्ट', 'पैन आधार लिंक', 'ई-केवाईसी', 'डिजीलॉकर')...",
      catAll: "सभी श्रेणियां",
      categorySectionHeading: "श्रेणी अनुसार देखें:",
      categoryHint: "प्रश्नों को फ़िल्टर करने हेतु कोई श्रेणी चुनें या नीचे समूहबद्ध सूची देखें",
      activeCategoryBannerPrefix: "सक्रिय श्रेणी:",
      officialPortal: "आधिकारिक पोर्टल",
      openPortal: "वेबसाइट",
      clearCategoryFilter: "सभी श्रेणियां देखें",
      viewModeGrouped: "श्रेणीवार समूह (Grouped)",
      viewModeFlat: "सीधी सूची (Flat List)",
      sortByTitle: "क्रम:",
      sortPopular: "सबसे लोकप्रिय",
      sortNewest: "नवीनतम",
      sortByHelpful: "सर्वाधिक उपयोगी",
      communityRatingLabel: "उपयोगी",
      itemsCount: "प्रश्न मिले",
      noResults: "कोई मेल खाता प्रश्न नहीं मिला",
      noResultsDesc: "कृपया अधिक सरल शब्दों का प्रयोग करें या कोई अन्य श्रेणी चुनें।",
      clearFilter: "फ़िल्टर रीसेट करें",
      backBtn: "सेवाओं के लिए आवेदन करें",
      quickJump: "श्रेणी पर तुरंत जाएं:",
      wasHelpfulQuestion: "क्या यह उत्तर आपके लिए उपयोगी था?",
      helpfulYes: "हाँ",
      helpfulNo: "नहीं",
      helpfulCountPrefix: "नागरिकों को उपयोगी लगा",
      feedbackThankYouYes: "आपकी प्रतिक्रिया के लिए धन्यवाद! हमें खुशी है कि इससे मदद मिली।",
      feedbackThankYouNo:
        "आपकी प्रतिक्रिया के लिए धन्यवाद। हम इस उत्तर को और अधिक स्पष्ट बनाने का प्रयास करेंगे।",
      feedbackUndo: "वोट बदलें",
      improveHeading: "इस उत्तर में क्या सुधार किया जा सकता है?",
      improveSubheading: "नागरिक सेवाओं की जानकारी को और अधिक सरल व सटीक बनाने में हमारी मदद करें।",
      improveReasons: [
        "अधिक चरण-दर-चरण (Step-by-step) मार्गदर्शन चाहिए",
        "आधिकारिक पोर्टल लिंक या प्रक्रिया बदल गई है",
        "शुल्क या समय-सीमा पुरानी प्रतीत होती है",
        "शब्दावली समझने में कठिन या अस्पष्ट है",
        "आवश्यक शर्तों या अपवादों की जानकारी अधूरी है",
      ],
      improveCustomNote: "वैकल्पिक: कोई विशिष्ट सुझाव या टिप्पणी लिखें...",
      improveSubmitBtn: "सुझाव दर्ज करें",
      improveSuccessMsg: "धन्यवाद! आपका सुझाव नागरिक संपादकीय सुधार हेतु दर्ज कर लिया गया है।",
      legalBadge: "कानूनी मान्यता:",
      legalDesc:
        "डिजिटल लॉकर के दस्तावेज आईटी एक्ट की धारा 9A के तहत मूल भौतिक प्रति के बराबर हैं।",
      welfareBadge: "प्रत्यक्ष लाभ (DBT):",
      welfareDesc: "बैंक खाते में आधार एनपीसीआई सीडिंग की स्थिति myAadhaar पोर्टल पर जांचें।",
      taxBadge: "आयकर नियम:",
      taxDesc: "पैन-आधार लिंक न होने पर धारा 139AA के तहत 20% की उच्च दर पर टीडीएस कटता है।",
      passportBadge: "पासपोर्ट सेवा केंद्र:",
      passportDesc:
        "पासपोर्ट सेवा केंद्र (PSK) हेतु 30 दिन पहले तक अपॉइंटमेंट बुक किया जा सकता है।",
      aadhaarBadge: "यूआईडीएआई परामर्श:",
      aadhaarDesc:
        "सक्रिय ई-केवाईसी बनाए रखने हेतु 10 वर्ष पुराने आधार में दस्तावेज अपडेट अवश्य कराएं।",
      relatedTitle: "सामान्य दस्तावेज़ मानक",
      docsRequired: "राज्यों और केंद्र शासित प्रदेशों में मांगे जाने वाले सामान्य प्रमाण पत्र:",
      docAddress:
        "पता सत्यापन: उपयोगिता बिल (3 महीने से कम पुराना), बैंक पासबुक, मतदाता पत्र, पासपोर्ट।",
      docIdentity: "पहचान प्रमाण: सत्यापित 12-अंकीय आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस।",
      docIncome: "आय का प्रमाण: पटवारी या तहसीलदार द्वारा प्रमाणित आय घोषणा पत्र या वेतन पर्ची।",
      viewsLabel: "बार देखा गया",
      relatedQuestionsHeading: "इस श्रेणी के अन्य महत्वपूर्ण प्रश्न",
      relatedQuestionsSubheading: "नागरिकों द्वारा अक्सर पूछे जाने वाले अन्य संबंधित प्रश्न:",
    },
  };

  const currentT = localT[language === "hi" ? "hi" : "en"] || localT.en;

  // Handle citizen upvote / downvote
  const handleVote = (faqId: string, vote: "yes" | "no") => {
    const currentVote = userVotes[faqId];
    const defaultCounts = calculateDefaultHelpful(1000);
    const currentCounts = feedbackCounts[faqId] || defaultCounts;

    let newVote: "yes" | "no" | null = vote;
    let newYes = currentCounts.yes;
    let newNo = currentCounts.no;

    if (currentVote === vote) {
      // Toggle off / undo vote
      newVote = null;
      if (vote === "yes") {
        newYes = Math.max(0, newYes - 1);
      } else {
        newNo = Math.max(0, newNo - 1);
      }
    } else if (currentVote) {
      // Switch vote from yes to no or no to yes
      if (vote === "yes") {
        newYes += 1;
        newNo = Math.max(0, newNo - 1);
      } else {
        newNo += 1;
        newYes = Math.max(0, newYes - 1);
      }
    } else {
      // First time voting
      if (vote === "yes") {
        newYes += 1;
      } else {
        newNo += 1;
      }
    }

    // Update user votes
    const nextVotes = { ...userVotes };
    if (newVote === null) {
      delete nextVotes[faqId];
    } else {
      nextVotes[faqId] = newVote;
    }
    setUserVotes(nextVotes);

    // Update feedback counts
    const nextCounts = {
      ...feedbackCounts,
      [faqId]: { yes: newYes, no: newNo },
    };
    setFeedbackCounts(nextCounts);

    // Persist to localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("eseva_faq_feedback_votes", JSON.stringify(nextVotes));
        localStorage.setItem("eseva_faq_feedback_counts", JSON.stringify(nextCounts));
      } catch (e) {
        console.warn("Failed to persist faq feedback", e);
      }
    }
  };

  // Submit improvement feedback for downvoted questions
  const handleSubmitImprovement = (faqId: string) => {
    const reason = selectedReasons[faqId] || currentT.improveReasons[0];
    const note = customImprovementNotes[faqId] || "";

    const next = {
      ...improvementFeedback,
      [faqId]: { submitted: true, reason, note },
    };
    setImprovementFeedback(next);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("eseva_faq_improvement_feedback", JSON.stringify(next));
      } catch (e) {
        console.warn("Failed to persist improvement feedback", e);
      }
    }
  };

  // Calculate count of items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<SpecificCategory, number> = {
      aadhaar: 0,
      incometax: 0,
      passport: 0,
      welfare: 0,
      health: 0,
      ration: 0,
      voter: 0,
      legal: 0,
    };
    for (const item of FAQ_ITEMS) {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    }
    return counts;
  }, []);

  // Filter items by search query and active category
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Search filter
      const searchLower = searchQuery.trim().toLowerCase();
      if (!searchLower) return true;

      const qEn = (item.question.en || "").toLowerCase();
      const qHi = (item.question.hi || "").toLowerCase();
      const aEn = (item.answer.en || "").toLowerCase();
      const aHi = (item.answer.hi || "").toLowerCase();
      const catConfig = CATEGORY_CONFIGS[item.category];
      const catEn = catConfig.name.en.toLowerCase();
      const catHi = catConfig.name.hi.toLowerCase();
      const tagMatch = item.tags.some((t) => t.toLowerCase().includes(searchLower));

      return (
        qEn.includes(searchLower) ||
        qHi.includes(searchLower) ||
        aEn.includes(searchLower) ||
        aHi.includes(searchLower) ||
        catEn.includes(searchLower) ||
        catHi.includes(searchLower) ||
        tagMatch
      );
    });
  }, [searchQuery, activeCategory]);

  // Sort filtered items
  const sortedItems = useMemo(() => {
    const items = [...filteredItems];
    return items.sort((a, b) => {
      if (sortMode === "popular") {
        return b.views - a.views;
      } else if (sortMode === "newest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      } else {
        // "helpful" - sort by positive ratio, then total yes votes
        const aCounts = feedbackCounts[a.id] || calculateDefaultHelpful(a.views);
        const bCounts = feedbackCounts[b.id] || calculateDefaultHelpful(b.views);
        const aTotal = aCounts.yes + aCounts.no || 1;
        const bTotal = bCounts.yes + bCounts.no || 1;
        const aRatio = aCounts.yes / aTotal;
        const bRatio = bCounts.yes / bTotal;
        if (Math.abs(bRatio - aRatio) > 0.015) {
          return bRatio - aRatio;
        }
        return bCounts.yes - aCounts.yes;
      }
    });
  }, [filteredItems, sortMode, feedbackCounts]);

  // Group items by category for grouped view
  const groupedByCategory = useMemo(() => {
    const grouped: Record<SpecificCategory, FAQItem[]> = {
      aadhaar: [],
      incometax: [],
      passport: [],
      welfare: [],
      health: [],
      ration: [],
      voter: [],
      legal: [],
    };

    for (const item of sortedItems) {
      if (grouped[item.category]) {
        grouped[item.category].push(item);
      }
    }

    return grouped;
  }, [sortedItems]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const formatViewCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return `${count}`;
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(language === "hi" ? "hi-IN" : "en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return isoStr;
    }
  };

  const scrollToCategorySection = (catId: string) => {
    const el = document.getElementById(`faq-section-${catId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper to suggest 3-4 other related questions in the same category
  const getRelatedFaqItems = (currentItem: FAQItem, count = 3): FAQItem[] => {
    // 1. Same category items (excluding current question)
    const sameCat = FAQ_ITEMS.filter(
      (it) => it.id !== currentItem.id && it.category === currentItem.category,
    );

    // Prioritize overlapping tags or view popularity
    sameCat.sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentItem.tags.includes(t)).length;
      const bOverlap = b.tags.filter((t) => currentItem.tags.includes(t)).length;
      if (bOverlap !== aOverlap) return bOverlap - aOverlap;
      return b.views - a.views;
    });

    if (sameCat.length >= count) {
      return sameCat.slice(0, count);
    }

    // 2. Complement with other top relevant questions across related categories
    const others = FAQ_ITEMS.filter(
      (it) => it.id !== currentItem.id && it.category !== currentItem.category,
    ).sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentItem.tags.includes(t)).length;
      const bOverlap = b.tags.filter((t) => currentItem.tags.includes(t)).length;
      if (bOverlap !== aOverlap) return bOverlap - aOverlap;
      return b.views - a.views;
    });

    return [...sameCat, ...others].slice(0, count);
  };

  // Smoothly open a related question and scroll it into view
  const handleSelectRelatedFaq = (relatedId: string) => {
    const target = FAQ_ITEMS.find((it) => it.id === relatedId);
    if (target) {
      if (activeCategory !== "all" && activeCategory !== target.category) {
        setActiveCategory(target.category);
      }
      if (searchQuery) {
        setSearchQuery("");
      }
    }
    setExpandedId(relatedId);
    setTimeout(() => {
      const el = document.getElementById(`faq-item-card-${relatedId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Helper to render an individual question card
  const renderFaqCard = (item: FAQItem) => {
    const itemQ = item.question[language === "hi" ? "hi" : "en"] || item.question.en;
    const itemA = item.answer[language === "hi" ? "hi" : "en"] || item.answer.en;
    const isExpanded = expandedId === item.id;
    const catConfig = CATEGORY_CONFIGS[item.category];
    const CatIcon = catConfig.icon;

    // Feedback metrics for this question
    const defaultCounts = calculateDefaultHelpful(item.views);
    const itemCounts = feedbackCounts[item.id] || defaultCounts;
    const totalVotes = itemCounts.yes + itemCounts.no;
    const percentHelpful = totalVotes > 0 ? Math.round((itemCounts.yes / totalVotes) * 100) : 96;
    const userVote = userVotes[item.id];
    const isImprovementSubmitted = improvementFeedback[item.id]?.submitted;

    return (
      <div
        key={item.id}
        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
          isExpanded
            ? "border-amber-400/50 bg-amber-50/15 ring-1 ring-amber-400/20"
            : "border-stone-250/80 bg-white hover:bg-stone-50/40 hover:border-stone-300"
        }`}
        id={`faq-item-card-${item.id}`}
      >
        <button
          onClick={() => toggleExpand(item.id)}
          className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
          aria-expanded={isExpanded}
        >
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <HelpCircle
              className={`w-4 h-4 mt-1 shrink-0 transition ${
                isExpanded ? "text-amber-600" : "text-stone-400"
              }`}
            />
            <div className="space-y-2 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Category Pill button - clicking filters to that category */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategory(item.category);
                  }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[10.5px] font-bold border transition cursor-pointer select-none shadow-2xs hover:scale-105 active:scale-95 ${
                    activeCategory === item.category
                      ? catConfig.activePillClasses
                      : catConfig.pillClasses
                  }`}
                  title={`Filter by category: ${catConfig.name[language === "hi" ? "hi" : "en"]}`}
                >
                  <CatIcon className="w-3 h-3" />
                  <span>{catConfig.shortLabel[language === "hi" ? "hi" : "en"]}</span>
                </button>

                {/* Popularity view count badge */}
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-600 border border-stone-200 font-mono"
                  title={`${item.views} views`}
                >
                  <Flame className="w-2.5 h-2.5 text-orange-500" />
                  <span>{formatViewCount(item.views)}</span>
                </span>

                {/* Community Helpfulness Badge */}
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-mono"
                  title={`${itemCounts.yes} out of ${totalVotes} citizens found this helpful (${percentHelpful}%)`}
                >
                  <ThumbsUp className="w-2.5 h-2.5 text-emerald-600" />
                  <span>
                    {percentHelpful}% {currentT.communityRatingLabel}
                  </span>
                </span>

                {/* Published Date */}
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-500 border border-stone-200"
                  title={`Updated on ${item.publishedAt}`}
                >
                  <Clock className="w-2.5 h-2.5 text-stone-400" />
                  <span>{formatDate(item.publishedAt)}</span>
                </span>

                {/* Topic tags */}
                {item.tags.slice(0, 3).map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchQuery(tag);
                    }}
                    className="text-[9.5px] px-1.5 py-0.5 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 text-stone-500 rounded font-mono hidden sm:inline-block cursor-pointer transition select-none"
                    title={`Filter by tag #${tag}`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <h4 className="font-sans font-bold text-stone-850 text-xs sm:text-[13px] leading-snug select-text">
                {itemQ}
              </h4>
            </div>
          </div>

          <div className="shrink-0 p-1 bg-stone-50 rounded-lg border border-stone-200 mt-1">
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-stone-600" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
            )}
          </div>
        </button>

        {isExpanded && (
          <div className="px-5 pb-5 pt-2 pl-11 text-xs text-stone-700 leading-relaxed font-sans border-t border-dashed border-stone-200/70 select-text animate-fadeIn space-y-3.5">
            <p className="whitespace-pre-line leading-relaxed select-text font-normal">{itemA}</p>

            {/* Category Contextual Tip */}
            {item.category === "aadhaar" && (
              <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl flex items-start gap-2 text-[11px] text-blue-900 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentT.aadhaarBadge}</strong> {currentT.aadhaarDesc}
                </div>
              </div>
            )}

            {item.category === "incometax" && (
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-start gap-2 text-[11px] text-emerald-900 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentT.taxBadge}</strong> {currentT.taxDesc}
                </div>
              </div>
            )}

            {item.category === "passport" && (
              <div className="p-3 bg-indigo-50/70 border border-indigo-200/80 rounded-xl flex items-start gap-2 text-[11px] text-indigo-900 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentT.passportBadge}</strong> {currentT.passportDesc}
                </div>
              </div>
            )}

            {item.category === "welfare" && (
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2 text-[11px] text-amber-900 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentT.welfareBadge}</strong> {currentT.welfareDesc}
                </div>
              </div>
            )}

            {item.category === "legal" && (
              <div className="p-3 bg-purple-50/70 border border-purple-200/80 rounded-xl flex items-start gap-2 text-[11px] text-purple-900 leading-normal">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentT.legalBadge}</strong> {currentT.legalDesc}
                </div>
              </div>
            )}

            {/* Related Questions in this Category */}
            {(() => {
              const relatedList = getRelatedFaqItems(item, 3);
              if (relatedList.length === 0) return null;
              return (
                <div
                  className="mt-4 pt-3.5 border-t border-stone-200/80 space-y-2.5"
                  id={`faq-related-questions-panel-${item.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h5 className="text-[11.5px] font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        {currentT.relatedQuestionsHeading}
                      </h5>
                      <p className="text-[10.5px] text-stone-500 font-sans">
                        {currentT.relatedQuestionsSubheading}
                      </p>
                    </div>
                    <span className="text-[10px] text-stone-500 font-mono bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                      {CATEGORY_CONFIGS[item.category].shortLabel[language === "hi" ? "hi" : "en"]}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-0.5">
                    {relatedList.map((rel) => {
                      const relQ = language === "hi" ? rel.question.hi : rel.question.en;
                      const relCat = CATEGORY_CONFIGS[rel.category];
                      return (
                        <button
                          key={rel.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectRelatedFaq(rel.id);
                          }}
                          className="group w-full text-left p-2.5 sm:p-3 rounded-xl bg-stone-50/80 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition flex items-start justify-between gap-3 cursor-pointer shadow-2xs"
                          id={`faq-rel-btn-${rel.id}`}
                        >
                          <div className="space-y-1 flex-1 min-w-0">
                            <p className="font-semibold text-xs text-stone-850 group-hover:text-amber-950 transition leading-snug">
                              {relQ}
                            </p>
                            <div className="flex items-center gap-2 text-[10px] text-stone-400 font-mono flex-wrap">
                              <span className="text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded font-sans font-bold">
                                {relCat.shortLabel[language === "hi" ? "hi" : "en"]}
                              </span>
                              <span>•</span>
                              <span>
                                {formatViewCount(rel.views)} {currentT.viewsLabel}
                              </span>
                              <span>•</span>
                              <span>{formatDate(rel.publishedAt)}</span>
                            </div>
                          </div>
                          <span className="p-1 rounded-lg bg-white border border-stone-200 text-stone-400 group-hover:text-amber-700 group-hover:border-amber-300 transition shrink-0 mt-0.5 shadow-2xs">
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* "Was this answer helpful?" Feedback Component */}
            <div
              className="mt-4 pt-3.5 border-t border-stone-200/80 space-y-3"
              id={`faq-feedback-container-${item.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-50/80 p-3 rounded-2xl border border-stone-200/70">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-stone-500" />
                      {currentT.wasHelpfulQuestion}
                    </span>
                    <span className="text-[10.5px] font-medium text-stone-600 bg-white px-2 py-0.5 rounded-full border border-stone-200 font-mono">
                      {itemCounts.yes} {currentT.helpfulCountPrefix} ({percentHelpful}%)
                    </span>
                  </div>
                  <p className="text-[10.5px] text-stone-500">
                    {language === "hi"
                      ? "आपकी प्रतिक्रिया से अन्य नागरिकों को सही जानकारी प्राप्त करने में मदद मिलती है।"
                      : "Your community feedback keeps civic guides verified and accurate."}
                  </p>
                </div>

                {/* Action Buttons: Upvote / Downvote */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* UPVOTE BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(item.id, "yes");
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none border ${
                      userVote === "yes"
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/25 scale-[1.03]"
                        : "bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-700 border-stone-250 hover:border-emerald-300"
                    }`}
                    id={`faq-btn-upvote-${item.id}`}
                    title={
                      language === "hi" ? "हाँ, यह उत्तर उपयोगी था" : "Yes, this answer was helpful"
                    }
                    aria-label={`Upvote: Yes, this answer was helpful (${itemCounts.yes} votes)`}
                    aria-pressed={userVote === "yes"}
                  >
                    <ThumbsUp
                      className={`w-3.5 h-3.5 transition ${
                        userVote === "yes" ? "fill-white text-white" : "text-emerald-600"
                      }`}
                    />
                    <span>{currentT.helpfulYes}</span>
                    <span
                      className={`text-[10.5px] px-1.5 py-0.2 rounded-md font-mono ${
                        userVote === "yes"
                          ? "bg-white/20 text-white font-bold"
                          : "bg-stone-100 text-stone-600 font-medium"
                      }`}
                    >
                      {itemCounts.yes}
                    </span>
                  </button>

                  {/* DOWNVOTE BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(item.id, "no");
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none border ${
                      userVote === "no"
                        ? "bg-rose-600 text-white border-rose-600 shadow-xs ring-2 ring-rose-500/25 scale-[1.03]"
                        : "bg-white hover:bg-rose-50 text-stone-700 hover:text-rose-700 border-stone-250 hover:border-rose-300"
                    }`}
                    id={`faq-btn-downvote-${item.id}`}
                    title={
                      language === "hi"
                        ? "नहीं, यह उत्तर उपयोगी नहीं था"
                        : "No, this answer was not helpful"
                    }
                    aria-label={`Downvote: No, this answer was not helpful (${itemCounts.no} votes)`}
                    aria-pressed={userVote === "no"}
                  >
                    <ThumbsDown
                      className={`w-3.5 h-3.5 transition ${
                        userVote === "no" ? "fill-white text-white" : "text-rose-600"
                      }`}
                    />
                    <span>{currentT.helpfulNo}</span>
                    <span
                      className={`text-[10.5px] px-1.5 py-0.2 rounded-md font-mono ${
                        userVote === "no"
                          ? "bg-white/20 text-white font-bold"
                          : "bg-stone-100 text-stone-600 font-medium"
                      }`}
                    >
                      {itemCounts.no}
                    </span>
                  </button>
                </div>
              </div>

              {/* Thank You State when Voted Yes */}
              {userVote === "yes" && (
                <div
                  className="p-2.5 bg-emerald-50/90 border border-emerald-200/80 rounded-xl flex items-center justify-between text-xs text-emerald-800 animate-fadeIn"
                  id={`faq-thankyou-yes-${item.id}`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{currentT.feedbackThankYouYes}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(item.id, "yes");
                    }}
                    className="text-[11px] text-emerald-700 hover:text-emerald-900 underline font-medium cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{currentT.feedbackUndo}</span>
                  </button>
                </div>
              )}

              {/* Acknowledgment & Improvement Form when Voted No */}
              {userVote === "no" && (
                <div className="space-y-2.5 animate-fadeIn" id={`faq-feedback-no-panel-${item.id}`}>
                  <div className="p-2.5 bg-rose-50/90 border border-rose-200/80 rounded-xl flex items-center justify-between text-xs text-rose-800">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span className="font-medium">{currentT.feedbackThankYouNo}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVote(item.id, "no");
                      }}
                      className="text-[11px] text-rose-700 hover:text-rose-900 underline font-medium cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{currentT.feedbackUndo}</span>
                    </button>
                  </div>

                  {/* Citizen Improvement Drawer */}
                  {isImprovementSubmitted ? (
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{currentT.improveSuccessMsg}</span>
                    </div>
                  ) : (
                    <div className="p-3.5 bg-stone-50/95 border border-stone-250 rounded-2xl space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-850">
                          {currentT.improveHeading}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase">
                          {language === "hi" ? "नागरिक प्रतिक्रिया" : "CITIZEN FEEDBACK"}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-tight">
                        {currentT.improveSubheading}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {currentT.improveReasons.map((reason) => {
                          const isSelected =
                            (selectedReasons[item.id] || currentT.improveReasons[0]) === reason;
                          return (
                            <button
                              key={reason}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedReasons((prev) => ({
                                  ...prev,
                                  [item.id]: reason,
                                }));
                              }}
                              className={`text-[10.5px] px-2.5 py-1 rounded-lg border transition cursor-pointer text-left select-none ${
                                isSelected
                                  ? "bg-stone-900 text-white border-stone-900 font-bold"
                                  : "bg-white text-stone-700 border-stone-250 hover:bg-stone-100"
                              }`}
                            >
                              {reason}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
                        <input
                          type="text"
                          placeholder={currentT.improveCustomNote}
                          value={customImprovementNotes[item.id] || ""}
                          onChange={(e) =>
                            setCustomImprovementNotes((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-white border border-stone-250 text-xs px-3 py-1.5 rounded-xl outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubmitImprovement(item.id);
                          }}
                          className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs shrink-0 transition"
                          id={`faq-submit-improvement-${item.id}`}
                        >
                          <Send className="w-3 h-3" />
                          <span>{currentT.improveSubmitBtn}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="bg-white rounded-3xl shadow-xs border border-stone-200/80 overflow-hidden"
      id="faq-container-root"
    >
      {/* FAQ Banner Header */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-6 sm:p-8 relative">
        <div className="absolute top-0 right-0 p-3 opacity-15 pointer-events-none">
          <HelpCircle className="w-28 h-28 text-white stroke-1" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 font-mono text-[10px] tracking-wider uppercase border border-amber-500/25">
              <Sparkles className="w-3 h-3" />
              Category-Organized Knowledge Base
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl leading-tight text-white select-text">
              {currentT.title}
            </h2>
            <p className="text-stone-300 text-xs leading-relaxed max-w-xl font-sans select-text">
              {currentT.subtitle}
            </p>
          </div>

          {onBackToServices && (
            <button
              onClick={onBackToServices}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0 shadow-xs"
              id="faq-back-to-services-btn"
            >
              <Award className="w-4 h-4" />
              {currentT.backBtn}
            </button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search Bar & Category Navigation Controls */}
        <div className="space-y-4" id="faq-filtering-section">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={currentT.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-250 py-3 pl-10 pr-10 rounded-2xl text-xs outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/15 transition text-stone-850 shadow-inner"
              id="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Navigation Bar */}
          <div className="space-y-2.5" id="faq-category-navigation">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <FolderKanban className="w-3.5 h-3.5 text-stone-500" />
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                  {currentT.categorySectionHeading}
                </span>
                <span className="text-[10.5px] text-stone-400 font-normal hidden md:inline">
                  ({currentT.categoryHint})
                </span>
              </div>

              {(activeCategory !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-[11px] text-amber-700 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  id="faq-reset-filters-btn"
                >
                  <X className="w-3 h-3" />
                  {currentT.clearFilter}
                </button>
              )}
            </div>

            {/* Horizontal Scrollable Category Selector Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin select-none"
              id="faq-category-pills-row"
            >
              {/* "All Categories" Tab */}
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer select-none border flex items-center gap-1.5 shrink-0 shadow-2xs ${
                  activeCategory === "all"
                    ? "bg-stone-900 text-white border-stone-900 ring-2 ring-stone-900/20"
                    : "bg-white border-stone-250 hover:bg-stone-50 text-stone-700 hover:border-stone-300"
                }`}
                id="faq-cat-pill-all"
                aria-pressed={activeCategory === "all"}
              >
                <Layers
                  className={`w-3.5 h-3.5 shrink-0 ${
                    activeCategory === "all" ? "text-white" : "text-stone-500"
                  }`}
                />
                <span>{currentT.catAll}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-stone-600 border border-stone-200"
                  }`}
                >
                  {FAQ_ITEMS.length}
                </span>
              </button>

              {/* Individual Category Pills: Aadhaar, Income Tax, Passport, Welfare, Health, Ration, Voter, Legal */}
              {CATEGORY_ORDER.map((catKey) => {
                const config = CATEGORY_CONFIGS[catKey];
                const IconComponent = config.icon;
                const isSelected = activeCategory === catKey;
                const count = categoryCounts[catKey];

                return (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => setActiveCategory(catKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer select-none border flex items-center gap-1.5 shrink-0 shadow-2xs hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected ? config.activePillClasses : config.pillClasses
                    }`}
                    id={`faq-cat-pill-${catKey}`}
                    aria-pressed={isSelected}
                  >
                    <IconComponent className="w-3.5 h-3.5 shrink-0" />
                    <span>{config.shortLabel[language === "hi" ? "hi" : "en"]}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? "bg-white/25 text-white"
                          : "bg-white/80 text-stone-700 border border-stone-200/80"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Spotlight Banner (When a specific category is active) */}
          {activeCategory !== "all" && (
            <div
              className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                CATEGORY_CONFIGS[activeCategory].cardBorderHighlight
              }`}
              id="faq-category-spotlight-banner"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const CatIcon = CATEGORY_CONFIGS[activeCategory].icon;
                  return (
                    <div className="p-2.5 bg-white rounded-xl shadow-xs border border-stone-200 shrink-0 mt-0.5">
                      <CatIcon className="w-5 h-5 text-stone-800" />
                    </div>
                  );
                })()}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-mono">
                      {currentT.activeCategoryBannerPrefix}
                    </span>
                    <h3 className="font-extrabold text-stone-900 text-sm">
                      {CATEGORY_CONFIGS[activeCategory].name[language === "hi" ? "hi" : "en"]}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-stone-200 font-mono text-stone-600 font-bold">
                      {filteredItems.length} {currentT.itemsCount}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                    {CATEGORY_CONFIGS[activeCategory].description[language === "hi" ? "hi" : "en"]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <a
                  href={CATEGORY_CONFIGS[activeCategory].portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 shadow-2xs transition"
                  title={`Open ${CATEGORY_CONFIGS[activeCategory].portalName}`}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                  <span>{CATEGORY_CONFIGS[activeCategory].portalName}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs"
                  id="faq-clear-category-pill"
                >
                  {currentT.clearCategoryFilter}
                </button>
              </div>
            </div>
          )}

          {/* Quick-Jump Category Links (When viewing all categories without search) */}
          {activeCategory === "all" && !searchQuery && groupByCategory && (
            <div
              className="p-3 bg-stone-50/80 border border-stone-200/70 rounded-2xl flex items-center gap-2 flex-wrap text-xs"
              id="faq-quick-jump-ribbon"
            >
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3 text-stone-400" />
                {currentT.quickJump}
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {CATEGORY_ORDER.map((catKey) => {
                  const config = CATEGORY_CONFIGS[catKey];
                  const Icon = config.icon;
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => scrollToCategorySection(catKey)}
                      className="px-2 py-0.5 bg-white hover:bg-amber-50 hover:border-amber-300 text-stone-700 border border-stone-200 rounded-lg text-[10.5px] font-medium transition cursor-pointer inline-flex items-center gap-1"
                    >
                      <Icon className="w-2.5 h-2.5 text-stone-500" />
                      <span>{config.shortLabel[language === "hi" ? "hi" : "en"]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Display Mode & Sorting Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-stone-100">
            {/* View Mode Switcher (Grouped vs Flat) when viewing all */}
            {activeCategory === "all" && !searchQuery ? (
              <div className="flex items-center gap-1.5 text-xs text-stone-600">
                <button
                  type="button"
                  onClick={() => setGroupByCategory(true)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                    groupByCategory
                      ? "bg-amber-100/70 text-amber-900 border-amber-300 shadow-2xs font-bold"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                  }`}
                  id="faq-view-mode-grouped-btn"
                >
                  {currentT.viewModeGrouped}
                </button>
                <button
                  type="button"
                  onClick={() => setGroupByCategory(false)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                    !groupByCategory
                      ? "bg-amber-100/70 text-amber-900 border-amber-300 shadow-2xs font-bold"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                  }`}
                  id="faq-view-mode-flat-btn"
                >
                  {currentT.viewModeFlat}
                </button>
              </div>
            ) : (
              <div className="text-xs text-stone-500">
                Showing <strong className="text-stone-800">{sortedItems.length}</strong>{" "}
                {currentT.itemsCount}
                {activeCategory !== "all" && (
                  <>
                    {" "}
                    under{" "}
                    <strong className="text-stone-800">
                      {CATEGORY_CONFIGS[activeCategory].name[language === "hi" ? "hi" : "en"]}
                    </strong>
                  </>
                )}
                {searchQuery && (
                  <>
                    {" "}
                    matching &ldquo;<span className="text-stone-800 italic">{searchQuery}</span>
                    &rdquo;
                  </>
                )}
              </div>
            )}

            {/* Sorting Toggle */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="flex items-center gap-1 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                <ArrowUpDown className="w-3 h-3 text-stone-400" />
                <span>{currentT.sortByTitle}</span>
              </div>

              <div
                className="inline-flex bg-stone-100 p-1 rounded-xl border border-stone-250/80 gap-1"
                role="group"
                aria-label="FAQ Sorting Options"
                id="faq-sorting-toggle-group"
              >
                <button
                  type="button"
                  onClick={() => setSortMode("popular")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none ${
                    sortMode === "popular"
                      ? "bg-white text-orange-600 shadow-xs border border-orange-200 font-extrabold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                  id="faq-sort-popular-btn"
                >
                  <Flame
                    className={`w-3.5 h-3.5 ${
                      sortMode === "popular"
                        ? "text-orange-500 fill-orange-500/20"
                        : "text-stone-400"
                    }`}
                  />
                  <span>{currentT.sortPopular}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortMode("helpful")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none ${
                    sortMode === "helpful"
                      ? "bg-white text-emerald-700 shadow-xs border border-emerald-200 font-extrabold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                  id="faq-sort-helpful-btn"
                >
                  <ThumbsUp
                    className={`w-3.5 h-3.5 ${
                      sortMode === "helpful"
                        ? "text-emerald-600 fill-emerald-600/20"
                        : "text-stone-400"
                    }`}
                  />
                  <span>{currentT.sortByHelpful}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortMode("newest")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none ${
                    sortMode === "newest"
                      ? "bg-white text-blue-700 shadow-xs border border-blue-200 font-extrabold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                  id="faq-sort-newest-btn"
                >
                  <Clock
                    className={`w-3.5 h-3.5 ${
                      sortMode === "newest" ? "text-blue-600" : "text-stone-400"
                    }`}
                  />
                  <span>{currentT.sortNewest}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Accordion list of questions */}
        <div className="space-y-6" id="faq-content-area">
          {sortedItems.length === 0 ? (
            <div className="p-12 text-center rounded-3xl border border-dashed border-stone-200 bg-stone-50/50">
              <AlertTriangle className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <h4 className="font-extrabold text-stone-800 text-xs select-text">
                {currentT.noResults}
              </h4>
              <p className="text-[11px] text-stone-500 mt-1 select-text">
                {currentT.noResultsDesc}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-1.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition cursor-pointer"
              >
                {currentT.clearFilter}
              </button>
            </div>
          ) : activeCategory === "all" && !searchQuery && groupByCategory ? (
            // ==========================================
            // GROUPED BY CATEGORY VIEW
            // ==========================================
            <div className="space-y-8" id="faq-grouped-category-sections">
              {CATEGORY_ORDER.map((catKey) => {
                const itemsInCat = groupedByCategory[catKey];
                if (!itemsInCat || itemsInCat.length === 0) return null;

                const config = CATEGORY_CONFIGS[catKey];
                const IconComponent = config.icon;

                return (
                  <div
                    key={catKey}
                    id={`faq-section-${catKey}`}
                    className="space-y-3 pt-2 scroll-mt-6"
                  >
                    {/* Category Section Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200/80">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`p-2 rounded-xl border ${config.pillClasses} flex items-center justify-center shrink-0`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-black text-stone-900 text-base">
                              {config.name[language === "hi" ? "hi" : "en"]}
                            </h3>
                            <span className="text-[10px] px-2 py-0.2 rounded-full font-mono bg-stone-100 text-stone-600 border border-stone-200 font-bold">
                              {itemsInCat.length}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 leading-tight">
                            {config.description[language === "hi" ? "hi" : "en"]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={config.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-stone-500 hover:text-stone-800 hidden sm:inline-flex items-center gap-1 transition"
                          title={`Official portal: ${config.portalName}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{config.portalName.split(" ")[0]}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(catKey)}
                          className="px-2.5 py-1 bg-stone-50 hover:bg-stone-100 text-stone-700 rounded-lg text-[11px] font-semibold border border-stone-200 cursor-pointer transition"
                        >
                          Focus
                        </button>
                      </div>
                    </div>

                    {/* Category questions list */}
                    <div className="space-y-3">{itemsInCat.map((item) => renderFaqCard(item))}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            // ==========================================
            // FLAT / FILTERED VIEW
            // ==========================================
            <div className="space-y-3" id="faq-flat-list-section">
              {sortedItems.map((item) => renderFaqCard(item))}
            </div>
          )}
        </div>

        {/* Extra resources & Documentation standards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 border-t border-stone-200/70 pt-6 select-text">
          <div className="md:col-span-7 space-y-3">
            <h4 className="font-extrabold text-[#111111] text-[12px] uppercase tracking-wider flex items-center gap-1.5 select-text">
              <FileText className="w-4 h-4 text-amber-600" />
              {currentT.relatedTitle}
            </h4>
            <p className="text-[11px] text-stone-500 leading-none select-text">
              {currentT.docsRequired}
            </p>

            <div className="space-y-2.5 pt-1 text-[11.5px] font-sans">
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 leading-relaxed select-text">
                <span className="font-bold text-stone-900 block mb-0.5">
                  📍 {currentT.docAddress.split(":")[0]}:
                </span>
                {currentT.docAddress.split(":")[1] || currentT.docAddress}
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 leading-relaxed select-text">
                <span className="font-bold text-stone-900 block mb-0.5">
                  💳 {currentT.docIdentity.split(":")[0]}:
                </span>
                {currentT.docIdentity.split(":")[1] || currentT.docIdentity}
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 leading-relaxed select-text">
                <span className="font-bold text-stone-900 block mb-0.5">
                  🌾 {currentT.docIncome.split(":")[0]}:
                </span>
                {currentT.docIncome.split(":")[1] || currentT.docIncome}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4.5 space-y-2.5 h-full flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <h4>Statutory Tip</h4>
                </div>
                <p className="text-[11px] text-stone-700 leading-relaxed select-text">
                  Did you know? Under Rule 9A of the IT Rules 2016, digital certificates saved in
                  your DigiLocker wallet have the exact same legal validity as physical certificates
                  across all Indian public and private institutions.
                </p>
              </div>

              <div className="text-[10px] text-stone-500 font-mono flex items-center justify-between border-t border-amber-500/15 pt-2.5">
                <span>VERIFIABLE GATEWAY</span>
                <span>MeitY SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
