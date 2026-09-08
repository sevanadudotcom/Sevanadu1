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
  Landmark,
  Scale,
  Layers,
  X,
  Flame,
  Clock,
  ArrowUpDown,
  Tag,
  Check,
} from "lucide-react";

export type FAQCategory = "all" | "identity" | "welfare" | "financial" | "legal";
export type SpecificCategory = "identity" | "welfare" | "financial" | "legal";
export type FAQSortMode = "popular" | "newest";

interface FAQItem {
  id: string;
  category: "identity" | "welfare" | "financial" | "legal";
  views: number;
  publishedAt: string; // ISO date string YYYY-MM-DD
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
  // --- IDENTITY ---
  {
    id: "faq-identity-1",
    category: "identity",
    views: 18450,
    publishedAt: "2026-08-15",
    tags: ["UIDAI", "PAN", "Aadhaar", "e-KYC", "Demographic"],
    question: {
      en: 'Why is my PAN card or Aadhaar application showing "UIDAI Demographic Verification Failure"?',
      hi: 'मेरे पैन कार्ड या आधार आवेदन में "UIDAI जनसांख्यिकी सत्यापन विफलता" त्रुटि क्यों आ रही है?',
    },
    answer: {
      en: "PAN registration systems and government portals verify demographic data (name spelling, date of birth, gender) in real-time against UIDAI records. If there is even a single letter, spacing, or surname discrepancy compared to your Aadhaar card, the income tax verification gateway will reject your request.\n\nResolution steps:\n1. Ensure your form matches the exact letter-by-letter spelling on your official Aadhaar card.\n2. If your Aadhaar details are outdated, update demographic details first via myAadhaar portal (uidai.gov.in) or visit an authorized Aadhaar Seva Kendra.\n3. Retry submission once UIDAI update is live (typically 24–72 hours).",
      hi: "पैन कार्ड पंजीकरण प्रणाली और सरकारी पोर्टल नाम की वर्तनी (spelling), जन्म तिथि और लिंग का सीधे UIDAI डेटाबेस से वास्तविक समय में मिलान करते हैं। यदि आपके आधार रिकॉर्ड और आवेदन पत्र में एक अक्षर या स्पेस का भी अंतर है, तो आयकर विभाग का पोर्टल आवेदन अस्वीकार कर देगा।\n\nसमाधान:\n1. फॉर्म में ठीक वैसा ही नाम दर्ज करें जैसा आधार कार्ड पर मुद्रित है।\n2. यदि आधार में जानकारी पुरानी है, तो पहले myAadhaar पोर्टल (uidai.gov.in) पर जाकर विवरण अपडेट करें।\n3. आधार अपडेट होने के 24-72 घंटे बाद पुनः आवेदन जमा करें।",
    },
  },
  {
    id: "faq-identity-2",
    category: "identity",
    views: 15200,
    publishedAt: "2026-08-28",
    tags: ["Aadhaar", "Mobile Link", "OTP", "Biometric"],
    question: {
      en: "How can I update my mobile number or biometric credentials linked with Aadhaar?",
      hi: "मैं आधार से जुड़ा अपना मोबाइल नंबर या बायोमेट्रिक विवरण कैसे अपडेट कर सकता हूँ?",
    },
    answer: {
      en: "While residential address can be updated online via the UIDAI Self-Service Portal using valid address proofs, mobile number, photo, iris, and fingerprint updates MANDATORILY require physical in-person biometric authentication at a designated Aadhaar Enrolment Centre / Aadhaar Seva Kendra (ASK).\n\nKey details:\n• No document proof is required for mobile number update.\n• A statutory fee of ₹50 is charged by UIDAI for demographic updates.\n• You can book an online appointment at ask.uidai.gov.in to skip physical queues.",
      hi: "निवास का पता तो UIDAI सेल्फ-सर्विस पोर्टल पर वैध पते के प्रमाण के साथ ऑनलाइन बदला जा सकता है, लेकिन मोबाइल नंबर, फोटो, आईरिस और फिंगरप्रिंट अपडेट करने के लिए किसी भी आधार सेवा केंद्र (ASK) पर व्यक्तिगत रूप से बायोमेट्रिक सत्यापन कराना अनिवार्य है।\n\nमुख्य बिंदु:\n• मोबाइल नंबर अपडेट के लिए किसी दस्तावेज़ की आवश्यकता नहीं होती।\n• इसके लिए ₹50 का सरकारी शुल्क लगता है।\n• लंबी कतारों से बचने के लिए ask.uidai.gov.in पर ऑनलाइन अपॉइंटमेंट बुक कर सकते हैं।",
    },
  },
  {
    id: "faq-identity-3",
    category: "identity",
    views: 9400,
    publishedAt: "2026-09-02",
    tags: ["ABHA", "Health ID", "Ayushman Bharat"],
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
    id: "faq-identity-4",
    category: "identity",
    views: 7800,
    publishedAt: "2026-09-05",
    tags: ["Voter ID", "EPIC", "ECI"],
    question: {
      en: "How do I rectify errors in my Voter ID Card (EPIC) or transfer constituency?",
      hi: "मतदाता पहचान पत्र (EPIC) में गलतियों को कैसे सुधारें या निर्वाचन क्षेत्र कैसे बदलें?",
    },
    answer: {
      en: "The Election Commission of India (ECI) provides Form 8 on the Voters' Service Portal (voters.eci.gov.in) for all demographic corrections, photo changes, and constituency shifting.\n\nRequired documents:\n• Age/Identity Proof (Aadhaar, PAN, or 10th marksheet)\n• Address Proof for new address/constituency (electricity bill, bank passbook, or rent deed)\n• The BLO (Booth Level Officer) conducts field verification within 15–21 days.",
      hi: "भारत निर्वाचन आयोग (ECI) के पोर्टल voters.eci.gov.in पर फॉर्म 8 भरकर आप अपने मतदाता पत्र में नाम, फोटो, जन्मतिथि का सुधार कर सकते हैं या नया पता बदल सकते हैं।\n\nआवश्यक कागजात:\n• पहचान प्रमाण (आधार, पैन या 10वीं की अंकतालिका)\n• नए पते का प्रमाण (बिजली बिल, बैंक पासबुक)\n• बीएलओ (बूथ लेवल ऑफिसर) 15-21 दिनों में सत्यापन पूरा करता है।",
    },
  },

  // --- WELFARE ---
  {
    id: "faq-welfare-1",
    category: "welfare",
    views: 22100,
    publishedAt: "2026-08-10",
    tags: ["Eligibility", "Schemes", "Welfare Matrix"],
    question: {
      en: "How does the Dynamic Welfare Scheme Eligibility Matrix evaluate citizen qualification?",
      hi: "गतिशील कल्याणकारी योजना पात्रता मैट्रिक्स (Eligibility Matrix) नागरिक पात्रता की गणना कैसे करता है?",
    },
    answer: {
      en: "The Eligibility Checker analyzes your state of residence, family annual income bracket, caste/category status, occupational sector (such as farming, unorganized manual labour, students, or artisans), and disability status against active Central and State gazetted schemes.\n\nOnce entered, the algorithm filters out ineligible schemes, highlights the maximum direct monetary subvention or insurance cover available, and provides an instant checklist of mandatory supporting documents.",
      hi: "पात्रता चेकर आपके राज्य, वार्षिक पारिवारिक आय, सामाजिक श्रेणी, व्यवसाय (जैसे किसान, असंगठित श्रमिक, छात्र) और दिव्यांगता स्थिति का सरकारी योजनाओं के नियमों से स्वतः मिलान करता है।\n\nयह तुरंत उन योजनाओं को छांटता है जिनके आप पात्र हैं, मिलने वाले अधिकतम आर्थिक लाभ या बीमा राशि को दर्शाता है, और जरूरी दस्तावेजों की सूची प्रदान करता है।",
    },
  },
  {
    id: "faq-welfare-2",
    category: "welfare",
    views: 26800,
    publishedAt: "2026-08-22",
    tags: ["PM-Kisan", "Farmer", "DBT", "Land Seeding"],
    question: {
      en: 'Why is my PM-Kisan Samman Nidhi installment withheld or marked "e-KYC Pending"?',
      hi: 'मेरी पीएम-किसान सम्मान निधि की किस्त क्यों रुक गई है या "e-KYC Pending" दिखा रही है?',
    },
    answer: {
      en: "PM-Kisan releases ₹6,000 annually in three installments of ₹2,000 directly via DBT. If an installment is stopped, check these three mandatory compliances on pmkisan.gov.in:\n1. Mandatory Aadhaar e-KYC: Must be completed via OTP on the portal or biometric scan at a CSC centre.\n2. Land Seeding (Bhulekh): Your state land record (khata/khasra) must be digitally verified and linked to your farmer profile by the local Patwari/Tehsildar.\n3. Bank Account Aadhaar Seeding: Your bank account must be mapped on the NPCI Aadhaar payment bridge.",
      hi: "पीएम-किसान के तहत सालाना ₹6,000 की सहायता तीन किस्तों में सीधे बैंक खाते में भेजी जाती है। यदि किस्त रुक गई है, तो pmkisan.gov.in पर ये तीन चीजें जांचें:\n1. आधार ई-केवाईसी (e-KYC): पोर्टल पर ओटीपी या सीएससी केंद्र पर बायोमेट्रिक से पूरा होना अनिवार्य है।\n2. भूलेख अंकन (Land Seeding): आपकी जमीन के खसरा/खतौनी का डिजिटल सत्यापन पटवारी/तहसीलदार द्वारा होना चाहिए।\n3. बैंक खाते में आधार डीबीटी सीडिंग (NPCI Seeding) सक्रिय होनी चाहिए।",
    },
  },
  {
    id: "faq-welfare-3",
    category: "welfare",
    views: 11900,
    publishedAt: "2026-08-30",
    tags: ["e-Shram", "Unorganized Workers", "Social Security"],
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
    views: 8300,
    publishedAt: "2026-09-04",
    tags: ["ONORC", "Ration Card", "Food Security"],
    question: {
      en: "Can migrant citizens receive subsidized food grains under One Nation One Ration Card (ONORC)?",
      hi: "क्या प्रवासी नागरिक 'एक राष्ट्र एक राशन कार्ड' (ONORC) के तहत दूसरे राज्य में राशन ले सकते हैं?",
    },
    answer: {
      en: "Yes! Under the ONORC framework implemented by the Department of Food and Public Distribution, any NFSA (National Food Security Act) ration card holder can lift their entitled subsidized or free food grains from any Fair Price Shop (FPS) across India using biometric authentication (fingerprint or iris scan) on the e-PoS device. No transfer of original ration card is required.",
      hi: "हाँ! 'वन नेशन वन राशन कार्ड' योजना के तहत देश का कोई भी राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) राशन कार्ड धारक भारत के किसी भी राज्य की उचित मूल्य की दुकान (राशन की दुकान) से ई-पीओएस मशीन पर फिंगरप्रिंट लगाकर अपना राशन प्राप्त कर सकता है। कार्ड ट्रांसफर कराने की कोई आवश्यकता नहीं है।",
    },
  },

  // --- FINANCIAL ---
  {
    id: "faq-financial-1",
    category: "financial",
    views: 19800,
    publishedAt: "2026-08-18",
    tags: ["DBT", "NPCI", "Aadhaar Seeding", "Bank"],
    question: {
      en: "What is the critical difference between linking Aadhaar with a bank account and NPCI DBT Seeding?",
      hi: "बैंक खाते में आधार लिंक करने और NPCI DBT सीडिंग (Seeding) में क्या अंतर है?",
    },
    answer: {
      en: "Linking Aadhaar to a bank account only satisfies the bank's KYC requirements for routine transactions. However, government subsidies, scholarships, and welfare disbursements are routed through the NPCI (National Payments Corporation of India) Aadhaar Payment Bridge System (APBS).\n\nTo receive government funds:\n• Your account must be specifically 'Aadhaar Seeded / Mapped with NPCI'.\n• A citizen can have accounts in multiple banks, but only ONE account can be mapped to receive DBT at any given time.\n• Check your DBT status on the UIDAI portal under 'Bank Seeding Status' or via your bank's netbanking portal.",
      hi: "बैंक खाते में केवल आधार लिंक करना बैंक की सामान्य केवाईसी के लिए होता है। जबकि सरकारी सब्सिडी, छात्रवृत्ति और पेंशन 'NPCI आधार पेमेंट ब्रिज' (APBS) के माध्यम से भेजी जाती है।\n\nसरकारी लाभ पाने के लिए:\n• आपके खाते का NPCI से 'सीडेड (Seeded)' होना आवश्यक है।\n• आपके कई बैंक खाते हो सकते हैं, लेकिन डीबीटी केवल उसी एक खाते में आएगा जो NPCI से मैप है।\n• आप myAadhaar पोर्टल पर 'Bank Seeding Status' से इसकी स्थिति जांच सकते हैं।",
    },
  },
  {
    id: "faq-financial-2",
    category: "financial",
    views: 6500,
    publishedAt: "2026-08-25",
    tags: ["Fees", "Free Services", "e-Seva Charges"],
    question: {
      en: "Are there statutory government processing fees for e-Seva public certificates on SewaNadu?",
      hi: "क्या SewaNadu पर जन कल्याणकारी प्रमाण पत्रों के लिए कोई सरकारी शुल्क देना पड़ता है?",
    },
    answer: {
      en: "Under Digital India directives, fundamental citizen identity and health credentials (Aadhaar demographic updates online, ABHA Health IDs, e-Shram registrations) are completely FREE (₹0).\n\nFor state revenue issuances (such as Domicile, Caste, and Income Certificates), states levy nominal statutory fees (typically ₹15 to ₹30) to cover administrative archival and digital signature costs. In this web portal sandbox, all processing is fully simulated at zero cost for public evaluation.",
      hi: "डिजिटल इंडिया के तहत मुख्य पहचान और स्वास्थ्य दस्तावेज (ऑनलाइन आधार विवरण सुधार, आभा आईडी, ई-श्रम) पूरी तरह निशुल्क (₹0) हैं।\n\nराज्य राजस्व प्रमाण पत्रों (जैसे निवास, जाति, आय प्रमाण पत्र) के लिए सरकार ₹15 से ₹30 का मामूली प्रशासनिक शुल्क लेती है। इस पोर्टल पर यह पूरी तरह निशुल्क सिमुलेशन में उपलब्ध है।",
    },
  },
  {
    id: "faq-financial-3",
    category: "financial",
    views: 12400,
    publishedAt: "2026-08-29",
    tags: ["Income Certificate", "Tehsildar", "EWS"],
    question: {
      en: "How is annual household income computed for Income and EWS certificates?",
      hi: "आय और ईडब्ल्यूएस (EWS) प्रमाण पत्र के लिए पारिवारिक वार्षिक आय की गणना कैसे की जाती है?",
    },
    answer: {
      en: "Annual household income is calculated based on the cumulative gross earnings of the applicant, spouse, parents, and unmarried minor children from all sources (salaries, agricultural revenue, business/profession, dividends, rental income) over the preceding financial year.\n\nKey requirements:\n• ITR V / Form 16 (for salaried persons) OR Patwari / Revenue Inspector income assessment report (for rural residents).\n• Self-declaration affidavit signed before a notary or executive magistrate.",
      hi: "पारिवारिक वार्षिक आय में आवेदक, उनके पति/पत्नी, माता-पिता और अविवाहित बच्चों की सभी स्रोतों (वेतन, कृषि, व्यापार, किराया आदि) से पिछले वित्तीय वर्ष में हुई कुल आय शामिल होती है।\n\nआवश्यक कागजात:\n• नौकरीपेशा के लिए फॉर्म 16 / आईटीआर या ग्रामीणों के लिए पटवारी/राजस्व निरीक्षक की आय आख्या।\n• कार्यपालक मजिस्ट्रेट या नोटरी के समक्ष दिया गया स्व-घोषणा शपथ पत्र।",
    },
  },
  {
    id: "faq-financial-4",
    category: "financial",
    views: 13600,
    publishedAt: "2026-09-06",
    tags: ["Pension", "Life Certificate", "Jeevan Pramaan"],
    question: {
      en: "How can senior citizens submit their Digital Life Certificate (Jeevan Pramaan) from home?",
      hi: "वरिष्ठ नागरिक घर बैठे डिजिटल जीवन प्रमाण पत्र (Jeevan Pramaan) कैसे जमा कर सकते हैं?",
    },
    answer: {
      en: "Pensioners no longer need to physically visit bank branches or treasury offices. Using the official 'Jeevan Pramaan Face App' and the 'AadhaarFaceRD' Android service, pensioners can complete facial recognition right from a smartphone camera. The cryptographic life certificate is automatically dispatched to the Pension Disbursing Agency (PDA) within 5 minutes.",
      hi: "पेंशनभोगियों को अब बैंक या कोषागार के चक्कर लगाने की जरूरत नहीं है। वे स्मार्टफोन में 'Jeevan Pramaan Face App' और 'AadhaarFaceRD' सेवा का उपयोग करके कैमरे के सामने चेहरा स्कैन करके डिजिटल जीवन प्रमाण पत्र जमा कर सकते हैं। यह स्वतः संबंधित पेंशन कार्यालय को प्रेषित हो जाता है।",
    },
  },

  // --- LEGAL ---
  {
    id: "faq-legal-1",
    category: "legal",
    views: 17100,
    publishedAt: "2026-08-14",
    tags: ["DigiLocker", "IT Act", "Legal Validity", "QR Code"],
    question: {
      en: "Are digital credentials and DigiLocker documents legally valid under Indian law?",
      hi: "क्या डिजिटल प्रमाण पत्र और डिजीलॉकर दस्तावेज भारतीय कानून के तहत कानूनी रूप से मान्य हैं?",
    },
    answer: {
      en: "YES. Under Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016 notified under the IT Act, 2000, electronic documents shared via DigiLocker are treated on par with original physical documents issued by the authority.\n\nPolice authorities, RTO checkpoints, university admissions, and passport offices are legally mandated to accept cryptographically signed DigiLocker certificates bearing verifiable QR codes.",
      hi: "हाँ, पूरी तरह मान्य हैं। सूचना प्रौद्योगिकी (आईटी) अधिनियम 2000 के तहत 'डिजिटल लॉकर नियम 2016' के नियम 9ए के अनुसार डिजीलॉकर द्वारा जारी या उपलब्ध कराए गए इलेक्ट्रॉनिक दस्तावेज मूल भौतिक दस्तावेजों के बराबर मान्य माने जाते हैं।\n\nयातायात पुलिस, आरटीओ, विश्वविद्यालय प्रवेश और पासपोर्ट कार्यालय डिजीलॉकर दस्तावेजों को स्वीकार करने के लिए कानूनन बाध्य हैं।",
    },
  },
  {
    id: "faq-legal-2",
    category: "legal",
    views: 14700,
    publishedAt: "2026-08-24",
    tags: ["RTI", "Right to Information", "Delay", "Grievance"],
    question: {
      en: "How do I file an online Right to Information (RTI) if an e-Seva application is delayed?",
      hi: "यदि ई-सेवा आवेदन में अनुचित देरी हो रही है, तो ऑनलाइन आरटीआई (RTI) कैसे दर्ज करें?",
    },
    answer: {
      en: "Under Section 6(1) of the RTI Act, 2005, every citizen has the constitutional right to seek reasons for administrative delays from Public Information Officers (PIOs).\n\nProcedure:\n1. Open our RTI Filing Assistant tool or visit rtionline.gov.in.\n2. Enter your state department, original e-Seva acknowledgement number, and filing date.\n3. Demand specific certified copies of file notings and reasons for pendency.\n4. Public authorities must legally provide written responses within 30 days.",
      hi: "सूचना का अधिकार (RTI) अधिनियम 2005 की धारा 6(1) के तहत हर नागरिक को लोक सूचना अधिकारी (PIO) से देरी का कारण और पत्रावली पर की गई टिप्पणियां जानने का अधिकार है।\n\nप्रक्रिया:\n1. हमारे आरटीआई फाइलिंग सहायक का उपयोग करें या rtionline.gov.in पर जाएं।\n2. विभाग का नाम, अपने आवेदन की रसीद संख्या (acknowledgement number) और आवेदन की तारीख दर्ज करें।\n3. पत्रावली की प्रमाणित प्रतिलिपि और देरी का कारण मांगें।\n4. लोक प्राधिकरण को 30 दिनों के भीतर जवाब देना अनिवार्य होता है।",
    },
  },
  {
    id: "faq-legal-3",
    category: "legal",
    views: 11100,
    publishedAt: "2026-09-01",
    tags: ["Under Verification", "Status", "Citizen Charter"],
    question: {
      en: 'Why do applications stay in "Under Verification" and what are the Citizen Charter statutory timelines?',
      hi: 'आवेदन "सत्यापन प्रक्रिया (Under Verification)" में क्यों रहते हैं और इनके लिए नागरिक चार्टर की तय समय सीमा क्या है?',
    },
    answer: {
      en: "State Right to Public Services (RTPS) Acts prescribe guaranteed delivery periods (e.g. 7 days for Caste/Income, 15 days for Domicile, 30 days for Building Permits). Applications remain 'Under Verification' while field inquiries are conducted by Village Revenue Officers (VRO) or Municipal Inspectors.\n\nIf the service exceeds the guaranteed timeline, you can lodge a first appeal before the First Appellate Authority under your state's Public Service Guarantee Act.",
      hi: "राज्य लोक सेवा गारंटी अधिनियमों के तहत हर सेवा के लिए समय सीमा निर्धारित है (जैसे आय/जाति प्रमाण पत्र 7 से 15 दिन, निवास प्रमाण पत्र 15 दिन)। इस दौरान क्षेत्रीय पटवारी या राजस्व निरीक्षक भौतिक जांच करते हैं।\n\nयदि तय समय सीमा में काम न हो, तो आप राज्य लोक सेवा पोर्टल पर प्रथम अपीलीय अधिकारी के समक्ष अपील दर्ज कर सकते हैं।",
    },
  },
  {
    id: "faq-legal-4",
    category: "legal",
    views: 8900,
    publishedAt: "2026-09-07",
    tags: ["Property", "Encumbrance", "IGRS", "Deed"],
    question: {
      en: "How do I legally obtain an Encumbrance Certificate (EC) or certified registered deed copy?",
      hi: "भार-मुक्त प्रमाण पत्र (Encumbrance Certificate) या पंजीकृत बैनामा की प्रमाणित प्रति कानूनी रूप से कैसे प्राप्त करें?",
    },
    answer: {
      en: "An Encumbrance Certificate (EC) certifies that a parcel of real estate is free from legal mortgages, court attachments, or third-party liabilities for a specified search period (e.g., past 15–30 years).\n\nYou can apply through your state's Inspector General of Registration and Stamps (IGRS) portal (e.g., Kaveri in Karnataka, Meebhoomi in Andhra Pradesh, e-Dhara in Gujarat) by supplying survey numbers, sub-registrar office registration year, and document volume numbers.",
      hi: "भार-मुक्त प्रमाण पत्र (EC) यह प्रमाणित करता है कि संपत्ति पर कोई बैंक बंधक, अदालत का कुर्की आदेश या वित्तीय देनदारी नहीं है।\n\nयह प्रमाण पत्र राज्य के पंजीकरण एवं स्टाम्प विभाग (IGRS) के पोर्टल पर जाकर संपत्ति का खसरा नंबर, रजिस्ट्रेशन वर्ष और सब-रजिस्ट्रार कार्यालय चुनकर ऑनलाइन प्राप्त किया जा सकता है।",
    },
  },
];

export default function ESevaFaq({ onBackToServices }: { onBackToServices?: () => void }) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<SpecificCategory>>(new Set());
  const [sortMode, setSortMode] = useState<FAQSortMode>("popular");
  const [expandedId, setExpandedId] = useState<string | null>("faq-welfare-2");

  // Category toggle handler (toggles a single category in/out of the filter set)
  const toggleCategory = (cat: SpecificCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const clearCategoryFilters = () => {
    setSelectedCategories(new Set());
  };

  // Local dictionaries for dashboard elements
  const localT = {
    en: {
      title: "Help & FAQ Knowledge Base",
      subtitle:
        "Filter and sort citizen inquiries across Identity, Welfare, Financial, and Legal categories. Find answers to common e-KYC hurdles, statutory timelines, and documentation requirements.",
      searchPlaceholder: "Search FAQ topics (e.g., Aadhaar mismatch, PM-Kisan, RTI, DigiLocker)...",
      catAll: "All Topics",
      catIdentity: "Identity",
      catWelfare: "Welfare",
      catFinancial: "Financial",
      catLegal: "Legal",
      filterTitle: "Category Tags:",
      filterHint: "Toggle tags on/off to filter list",
      activeFilters: "Active Category Filters:",
      clearTags: "Clear Tags",
      tagActiveHint: "Active (click to remove)",
      tagInactiveHint: "Click to toggle tag",
      filterByTagHint: "Toggle category tag filter",
      tagActive: "Active",
      tagInactive: "Tag",
      sortByTitle: "Sort Questions:",
      sortPopular: "Most Popular",
      sortNewest: "Newest",
      itemsCount: "questions",
      noResults: "No Matching Frequently Asked Questions Found",
      noResultsDesc: "Try revising your search terms or selecting a different category tag.",
      clearFilter: "Reset Filters",
      backBtn: "Apply for Services",
      quickTipTitle: "Statutory Tip",
      quickTipDesc:
        "Did you know? Under Rule 9A of IT Rules 2016, digital certificates saved in your DigiLocker wallet have the exact same legal validity as original physical certificates across all Indian public offices.",
      relatedTitle: "Common Documentation Standards",
      docsRequired: "Typical proofs requested across union territories:",
      docAddress:
        "Address Verification: Utility bill (<3 mths), bank passbook, voter ID, passport.",
      docIdentity: "Identity Proof: Verifiable 12-digit Aadhaar Card, PAN card, driving licence.",
      docIncome:
        "Income Proof: Village accountant/tehsildar certified audit register or salary slip.",
      viewsLabel: "views",
      updatedLabel: "Added",
    },
    hi: {
      title: "सहायता एवं प्रश्नोत्तरी केंद्र",
      subtitle:
        "पहचान (Identity), कल्याण (Welfare), वित्तीय (Financial) और कानूनी (Legal) श्रेणियों में प्रश्नों को फ़िल्टर और क्रमबद्ध करें। ई-केवाईसी, कानूनी समय-सीमा और दस्तावेजों के नियमों को समझें।",
      searchPlaceholder:
        "अक्सर पूछे जाने वाले सवाल खोजें (जैसे कि आधार, पीएम-किसान, आरटीआई, डिजीलॉकर)...",
      catAll: "सभी विषय",
      catIdentity: "पहचान (Identity)",
      catWelfare: "कल्याणकारी (Welfare)",
      catFinancial: "वित्तीय (Financial)",
      catLegal: "कानूनी (Legal)",
      filterTitle: "दृश्य श्रेणी टैग:",
      filterHint: "सूची फ़िल्टर करने हेतु टैग टॉगल करें",
      activeFilters: "सक्रिय श्रेणी फ़िल्टर:",
      clearTags: "टैग हटाएं",
      tagActiveHint: "सक्रिय (हटाने हेतु क्लिक करें)",
      tagInactiveHint: "टैग जोड़ने हेतु क्लिक करें",
      filterByTagHint: "श्रेणी टैग फ़िल्टर टॉगल करें",
      tagActive: "सक्रिय",
      tagInactive: "टैग",
      sortByTitle: "क्रमबद्ध करें:",
      sortPopular: "सबसे लोकप्रिय",
      sortNewest: "नवीनतम",
      itemsCount: "प्रश्न",
      noResults: "कोई मेल खाता प्रश्न नहीं मिला",
      noResultsDesc: "कृपया अधिक सरल शब्दों का प्रयोग करें या कोई अन्य श्रेणी टैग चुनें।",
      clearFilter: "फ़िल्टर रीसेट करें",
      backBtn: "सेवाओं के लिए आवेदन करें",
      quickTipTitle: "कानूनी परामर्श संकेत",
      quickTipDesc:
        "क्या आप जानते हैं? आईटी नियम 2016 के नियम 9ए के तहत आपके डिजीलॉकर वॉलेट में सहेजे गए डिजिटल प्रमाण पत्र मूल कागजी दस्तावेजों के समान ही कानूनी रूप से मान्य हैं।",
      relatedTitle: "सामान्य दस्तावेज़ मानक",
      docsRequired: "राज्यों और केंद्र शासित प्रदेशों में मांगे जाने वाले सामान्य प्रमाण पत्र:",
      docAddress:
        "पता सत्यापन: उपयोगिता बिल (3 महीने से कम पुराना), बैंक पासबुक, मतदाता पत्र, पासपोर्ट।",
      docIdentity: "पहचान प्रमाण: सत्यापित 12-अंकीय आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस।",
      docIncome: "आय का प्रमाण: पटवारी या तहसीलदार द्वारा प्रमाणित आय घोषणा पत्र या वेतन पर्ची।",
      viewsLabel: "बार देखा गया",
      updatedLabel: "तिथि",
    },
  };

  const currentT = localT[language === "hi" ? "hi" : "en"] || localT["en"];

  // Category visual tag items definition with counts and icons
  const categoryTabs: {
    id: FAQCategory;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    activeClasses: string;
    inactiveClasses: string;
    iconColor: string;
    countBadgeClasses: string;
  }[] = [
    {
      id: "all",
      label: currentT.catAll,
      icon: Layers,
      accentColor: "stone",
      activeClasses: "bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-stone-900/20",
      inactiveClasses:
        "bg-white border-stone-250 hover:bg-stone-50 text-stone-700 hover:border-stone-300",
      iconColor: "text-stone-500",
      countBadgeClasses: "bg-stone-100 text-stone-600 border border-stone-200",
    },
    {
      id: "identity",
      label: currentT.catIdentity,
      icon: Fingerprint,
      accentColor: "blue",
      activeClasses: "bg-blue-600 text-white border-blue-600 shadow-sm ring-2 ring-blue-500/25",
      inactiveClasses:
        "bg-blue-50/70 hover:bg-blue-100/90 text-blue-800 border-blue-200 hover:border-blue-300",
      iconColor: "text-blue-600",
      countBadgeClasses: "bg-blue-100/80 text-blue-700 border border-blue-200",
    },
    {
      id: "welfare",
      label: currentT.catWelfare,
      icon: HeartHandshake,
      accentColor: "emerald",
      activeClasses:
        "bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-500/25",
      inactiveClasses:
        "bg-emerald-50/70 hover:bg-emerald-100/90 text-emerald-800 border-emerald-200 hover:border-emerald-300",
      iconColor: "text-emerald-600",
      countBadgeClasses: "bg-emerald-100/80 text-emerald-700 border border-emerald-200",
    },
    {
      id: "financial",
      label: currentT.catFinancial,
      icon: Landmark,
      accentColor: "amber",
      activeClasses: "bg-amber-600 text-white border-amber-600 shadow-sm ring-2 ring-amber-500/25",
      inactiveClasses:
        "bg-amber-50/70 hover:bg-amber-100/90 text-amber-900 border-amber-200 hover:border-amber-300",
      iconColor: "text-amber-600",
      countBadgeClasses: "bg-amber-100/80 text-amber-800 border border-amber-200",
    },
    {
      id: "legal",
      label: currentT.catLegal,
      icon: Scale,
      accentColor: "purple",
      activeClasses:
        "bg-purple-600 text-white border-purple-600 shadow-sm ring-2 ring-purple-500/25",
      inactiveClasses:
        "bg-purple-50/70 hover:bg-purple-100/90 text-purple-900 border-purple-200 hover:border-purple-300",
      iconColor: "text-purple-600",
      countBadgeClasses: "bg-purple-100/80 text-purple-800 border border-purple-200",
    },
  ];

  // Calculate question count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<FAQCategory, number> = {
      all: FAQ_ITEMS.length,
      identity: 0,
      welfare: 0,
      financial: 0,
      legal: 0,
    };
    for (const item of FAQ_ITEMS) {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    }
    return counts;
  }, []);

  // Apply search query, category tag filtering (multi-toggle), AND sorting
  const filteredAndSortedItems = useMemo(() => {
    const filtered = FAQ_ITEMS.filter((item) => {
      // Visual category tag filter: if any tags are toggled, item must match one of them
      if (selectedCategories.size > 0 && !selectedCategories.has(item.category)) {
        return false;
      }
      // Search term filter
      const searchLower = searchQuery.trim().toLowerCase();
      if (!searchLower) return true;

      const qEn = (item.question.en || "").toLowerCase();
      const qHi = (item.question.hi || "").toLowerCase();
      const aEn = (item.answer.en || "").toLowerCase();
      const aHi = (item.answer.hi || "").toLowerCase();
      const tagMatch = item.tags.some((t) => t.toLowerCase().includes(searchLower));

      return (
        qEn.includes(searchLower) ||
        qHi.includes(searchLower) ||
        aEn.includes(searchLower) ||
        aHi.includes(searchLower) ||
        tagMatch
      );
    });

    // Sort by selected mode
    return filtered.sort((a, b) => {
      if (sortMode === "popular") {
        return b.views - a.views;
      } else {
        // "newest"
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });
  }, [searchQuery, selectedCategories, sortMode]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCategoryBadge = (cat: FAQItem["category"]) => {
    switch (cat) {
      case "identity":
        return {
          label: language === "hi" ? "पहचान (Identity)" : "Identity",
          shortLabel: language === "hi" ? "पहचान" : "Identity",
          icon: Fingerprint,
          className: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
          activeClassName: "bg-blue-600 text-white border-blue-600 shadow-xs",
        };
      case "welfare":
        return {
          label: language === "hi" ? "कल्याण (Welfare)" : "Welfare",
          shortLabel: language === "hi" ? "कल्याण" : "Welfare",
          icon: HeartHandshake,
          className: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
          activeClassName: "bg-emerald-600 text-white border-emerald-600 shadow-xs",
        };
      case "financial":
        return {
          label: language === "hi" ? "वित्तीय (Financial)" : "Financial",
          shortLabel: language === "hi" ? "वित्तीय" : "Financial",
          icon: Landmark,
          className: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
          activeClassName: "bg-amber-600 text-white border-amber-600 shadow-xs",
        };
      case "legal":
        return {
          label: language === "hi" ? "कानूनी (Legal)" : "Legal",
          shortLabel: language === "hi" ? "कानूनी" : "Legal",
          icon: Scale,
          className: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
          activeClassName: "bg-purple-600 text-white border-purple-600 shadow-xs",
        };
    }
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

  return (
    <div
      className="bg-white rounded-3xl shadow-xs border border-stone-200/80 overflow-hidden"
      id="faq-container-root"
    >
      {/* FAQ Banner Header */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-6 sm:p-8 relative">
        <div className="absolute top-0 right-0 p-3 opacity-15">
          <HelpCircle className="w-28 h-28 text-white stroke-1" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] tracking-wider uppercase border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Categorized &amp; Searchable Knowledge Base
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl leading-tight text-white select-text">
              {currentT.title}
            </h2>
            <p className="text-stone-300 text-xs leading-relaxed max-w-lg font-sans select-text">
              {currentT.subtitle}
            </p>
          </div>

          {onBackToServices && (
            <button
              onClick={onBackToServices}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0"
              id="faq-back-to-services-btn"
            >
              <Award className="w-4 h-4" />
              {currentT.backBtn}
            </button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search Bar & Category Filter Controls */}
        <div className="space-y-4" id="faq-filtering-section">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={currentT.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-250 py-3 pl-10 pr-10 rounded-2xl text-xs outline-none focus:border-brand-coral/45 focus:bg-white focus:ring-2 focus:ring-brand-coral/10 transition text-stone-850 shadow-inner"
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

          {/* Category Filter Pills & Sort Controls */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 pt-1">
            {/* Visual Tag System for Categories */}
            <div className="space-y-2 flex-1" id="faq-visual-tag-system">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-stone-500" />
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider">
                    {currentT.filterTitle}
                  </span>
                  <span className="text-[10.5px] text-stone-400 font-normal hidden sm:inline">
                    ({currentT.filterHint})
                  </span>
                </div>
                {(selectedCategories.size > 0 || searchQuery) && (
                  <button
                    onClick={() => {
                      clearCategoryFilters();
                      setSearchQuery("");
                    }}
                    className="text-[11px] text-brand-coral hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    id="faq-reset-filters-btn"
                  >
                    <X className="w-3 h-3" />
                    {currentT.clearFilter}
                  </button>
                )}
              </div>

              {/* Tag Toggles Bar */}
              <div className="flex flex-wrap gap-2" id="faq-category-toggles">
                {/* All Topics Tag */}
                <button
                  key="all"
                  onClick={clearCategoryFilters}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none border flex items-center gap-1.5 shadow-2xs ${
                    selectedCategories.size === 0
                      ? "bg-stone-900 text-white border-stone-900 shadow-xs ring-2 ring-stone-900/20"
                      : "bg-white border-stone-250 hover:bg-stone-50 text-stone-700 hover:border-stone-300"
                  }`}
                  id="faq-cat-filter-all"
                  aria-pressed={selectedCategories.size === 0}
                  title="Show all category questions"
                >
                  <Layers
                    className={`w-3.5 h-3.5 shrink-0 ${
                      selectedCategories.size === 0 ? "text-white" : "text-stone-500"
                    }`}
                  />
                  <span>{currentT.catAll}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition ${
                      selectedCategories.size === 0
                        ? "bg-white/20 text-white"
                        : "bg-stone-100 text-stone-600 border border-stone-200"
                    }`}
                  >
                    {FAQ_ITEMS.length}
                  </span>
                </button>

                {/* Specific Category Tags: Identity, Welfare, Financial, Legal */}
                {categoryTabs
                  .filter((cat) => cat.id !== "all")
                  .map((cat) => {
                    const IconComponent = cat.icon;
                    const isToggled = selectedCategories.has(cat.id as SpecificCategory);
                    const count = categoryCounts[cat.id];

                    return (
                      <button
                        key={cat.id}
                        onClick={() => toggleCategory(cat.id as SpecificCategory)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none border flex items-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-[0.98] ${
                          isToggled ? cat.activeClasses : cat.inactiveClasses
                        }`}
                        id={`faq-cat-filter-${cat.id}`}
                        aria-pressed={isToggled}
                        title={`${isToggled ? currentT.tagActiveHint : currentT.tagInactiveHint}: ${cat.label}`}
                      >
                        {isToggled ? (
                          <Check className="w-3.5 h-3.5 shrink-0 text-white" />
                        ) : (
                          <IconComponent className={`w-3.5 h-3.5 shrink-0 ${cat.iconColor}`} />
                        )}
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition ${
                            isToggled ? "bg-white/25 text-white" : cat.countBadgeClasses
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
              </div>

              {/* Active Visual Tags Filter Strip */}
              {selectedCategories.size > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5 text-[11px] text-stone-600 animate-fadeIn">
                  <span className="font-semibold text-stone-500">{currentT.activeFilters}</span>
                  {Array.from(selectedCategories).map((catId) => {
                    const badge = getCategoryBadge(catId);
                    const BadgeIcon = badge.icon;
                    return (
                      <span
                        key={catId}
                        onClick={() => toggleCategory(catId)}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg font-bold border text-[10.5px] cursor-pointer hover:opacity-85 transition select-none shadow-2xs ${badge.activeClassName}`}
                        title={`${currentT.tagActiveHint}: ${badge.label}`}
                      >
                        <BadgeIcon className="w-3 h-3" />
                        <span>{badge.shortLabel}</span>
                        <X className="w-3 h-3 ml-0.5 hover:scale-125 transition" />
                      </span>
                    );
                  })}
                  <button
                    onClick={clearCategoryFilters}
                    className="text-[11px] text-stone-400 hover:text-stone-700 underline ml-1 cursor-pointer"
                  >
                    {currentT.clearTags}
                  </button>
                </div>
              )}
            </div>

            {/* Sorting Controls */}
            <div className="space-y-1.5 lg:border-l lg:border-stone-200/80 lg:pl-4 shrink-0 pt-1 lg:pt-0">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                <ArrowUpDown className="w-3 h-3 text-stone-400" />
                <span>{currentT.sortByTitle}</span>
              </div>

              <div
                className="inline-flex bg-stone-100 p-1 rounded-xl border border-stone-250/80 shadow-inner gap-1"
                role="group"
                aria-label="FAQ Sorting Options"
                id="faq-sorting-toggle-group"
              >
                <button
                  type="button"
                  onClick={() => setSortMode("popular")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none ${
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
                  onClick={() => setSortMode("newest")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer select-none ${
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

        {/* Results Counter Banner with Active Sort Indicator */}
        <div className="flex items-center justify-between text-xs text-stone-500 px-1 border-b border-stone-100 pb-2">
          <span>
            Showing <strong className="text-stone-800">{filteredAndSortedItems.length}</strong>{" "}
            {currentT.itemsCount}
            {selectedCategories.size > 0 && (
              <>
                {" "}
                in tags:{" "}
                <span className="font-bold text-stone-800">
                  {Array.from(selectedCategories)
                    .map((c) => getCategoryBadge(c).label)
                    .join(", ")}
                </span>
              </>
            )}
            {searchQuery && (
              <>
                {" "}
                matching &ldquo;<span className="text-stone-800 italic">{searchQuery}</span>&rdquo;
              </>
            )}
          </span>

          <span className="text-[11px] text-stone-500 font-medium hidden sm:inline-flex items-center gap-1">
            Sorted by:{" "}
            <span className="font-bold text-stone-800 inline-flex items-center gap-1">
              {sortMode === "popular" ? (
                <>
                  <Flame className="w-3 h-3 text-orange-500" />
                  {currentT.sortPopular}
                </>
              ) : (
                <>
                  <Clock className="w-3 h-3 text-blue-600" />
                  {currentT.sortNewest}
                </>
              )}
            </span>
          </span>
        </div>

        {/* Dynamic Accordion list of answers */}
        <div className="space-y-3" id="faq-accordion-list">
          {filteredAndSortedItems.length === 0 ? (
            <div className="p-12 text-center rounded-3xl border border-dashed border-stone-200 bg-stone-50/50">
              <AlertTriangle className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <h4 className="font-extrabold text-stone-800 text-xs select-text">
                {currentT.noResults}
              </h4>
              <p className="text-[11px] text-stone-500 mt-1 select-text">
                {currentT.noResultsDesc}
              </p>
              <button
                onClick={() => {
                  clearCategoryFilters();
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-1.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition cursor-pointer"
              >
                {currentT.clearFilter}
              </button>
            </div>
          ) : (
            filteredAndSortedItems.map((item) => {
              const itemQ = item.question[language === "hi" ? "hi" : "en"] || item.question.en;
              const itemA = item.answer[language === "hi" ? "hi" : "en"] || item.answer.en;
              const isExpanded = expandedId === item.id;
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-brand-coral/30 bg-orange-50/15 ring-1 ring-brand-coral/10"
                      : "border-stone-250/70 bg-white hover:bg-stone-50/30 hover:border-stone-300"
                  }`}
                  id={`faq-item-card-${item.id}`}
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <HelpCircle
                        className={`w-4 h-4 mt-0.5 shrink-0 transition ${
                          isExpanded ? "text-brand-coral" : "text-stone-400"
                        }`}
                      />
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Visual Category Tag Pill on question card (clickable to toggle category filter) */}
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategory(item.category);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                toggleCategory(item.category);
                              }
                            }}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer select-none hover:scale-105 active:scale-95 ${
                              selectedCategories.has(item.category)
                                ? "ring-2 ring-offset-1 " + badge.activeClassName
                                : badge.className
                            }`}
                            title={`${currentT.filterByTagHint}: ${badge.label}`}
                          >
                            {selectedCategories.has(item.category) ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <BadgeIcon className="w-3 h-3" />
                            )}
                            <span>{badge.shortLabel}</span>
                          </span>

                          {/* Popularity indicator badge */}
                          <span
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-600 border border-stone-200 font-mono"
                            title={`${item.views} total views`}
                          >
                            <Flame className="w-2.5 h-2.5 text-orange-500" />
                            <span>{formatViewCount(item.views)}</span>
                          </span>

                          {/* Date badge */}
                          <span
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-500 border border-stone-200"
                            title={`Published on ${item.publishedAt}`}
                          >
                            <Clock className="w-2.5 h-2.5 text-stone-400" />
                            <span>{formatDate(item.publishedAt)}</span>
                          </span>

                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSearchQuery(tag);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.stopPropagation();
                                  setSearchQuery(tag);
                                }
                              }}
                              className="text-[9.5px] px-1.5 py-0.5 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 text-stone-500 rounded font-mono hidden sm:inline-block cursor-pointer transition select-none"
                              title={`Filter by keyword #${tag}`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="font-sans font-bold text-stone-850 text-xs sm:text-[13px] leading-snug select-text block">
                          {itemQ}
                        </span>
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
                    <div className="px-5 pb-5 pt-1 pl-11 text-xs text-stone-650 leading-relaxed font-sans border-t border-dashed border-stone-200/50 select-text animate-fadeIn">
                      <p className="whitespace-pre-line leading-relaxed select-text">{itemA}</p>

                      {/* Contextual interactive alert banner for Legal category */}
                      {item.category === "legal" && (
                        <div className="mt-3.5 p-3 bg-purple-50/60 border border-purple-200/70 rounded-xl flex items-start gap-2 text-[10.5px] text-purple-900 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <div>
                            <strong>Statutory Reference:</strong> All certificates issued digitally
                            are cryptographically protected under Section 9A of the IT Act, 2000.
                          </div>
                        </div>
                      )}

                      {/* Contextual interactive alert banner for Welfare category */}
                      {item.category === "welfare" && (
                        <div className="mt-3.5 p-3 bg-emerald-50/60 border border-emerald-200/70 rounded-xl flex items-start gap-2 text-[10.5px] text-emerald-900 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong>Direct Benefit Activation:</strong> You can test your exact
                            scheme payouts right now via the <strong>Eligibility Checker</strong>{" "}
                            tab.
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Extra resources & Documentation standards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 border-t border-stone-200/70 pt-6 select-text">
          <div className="md:col-span-7 space-y-3">
            <h4 className="font-extrabold text-[#111111] text-[12px] uppercase tracking-wider flex items-center gap-1.5 select-text">
              <FileText className="w-4 h-4 text-brand-coral" />
              {currentT.relatedTitle}
            </h4>
            <p className="text-[11px] text-stone-500 leading-none select-text">
              {currentT.docsRequired}
            </p>

            <div className="space-y-2.5 pt-1 text-[11.5px] font-sans">
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-705 leading-relaxed select-text">
                <span className="font-bold text-stone-900 block mb-0.5">
                  📍 {currentT.docAddress.split(":")[0]}:
                </span>
                {currentT.docAddress.split(":")[1] || currentT.docAddress}
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-705 leading-relaxed select-text">
                <span className="font-bold text-stone-900 block mb-0.5">
                  💳 {currentT.docIdentity.split(":")[0]}:
                </span>
                {currentT.docIdentity.split(":")[1] || currentT.docIdentity}
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-705 leading-relaxed select-text">
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
                  <h4>{currentT.quickTipTitle}</h4>
                </div>
                <p className="text-[11px] text-stone-707 leading-relaxed select-text">
                  {currentT.quickTipDesc}
                </p>
              </div>

              <div className="text-[10px] text-stone-450 font-mono flex items-center justify-between border-t border-amber-505/15 pt-2.5">
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
