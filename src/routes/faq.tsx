import React, { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import SEOHead, { getRouteJsonLdScript } from "@/components/SEOHead";
import {
  ShieldCheck,
  ArrowLeft,
  Search,
  HelpCircle,
  Clock,
  Flame,
  ChevronDown,
  ChevronUp,
  Tag,
  ExternalLink,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Citizen e-Governance FAQ & Help Database — SewaNadu" },
      {
        name: "description",
        content:
          "Authoritative answers to common Indian e-governance questions: PAN-Aadhaar failures, PM-Kisan e-KYC, DigiLocker legal validity, RTI appeals, ONORC ration portability, and state revenue certificates.",
      },
      {
        property: "og:title",
        content: "Citizen e-Governance FAQ & Help Database — SewaNadu",
      },
      {
        property: "og:description",
        content:
          "Authoritative legal and operational explanations for Indian central and state citizen e-services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sewanadu.in/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sewanadu.in/faq" }],
    scripts: [getRouteJsonLdScript("/faq")],
  }),
  component: FaqStandalonePage,
});

interface FaqRecord {
  id: string;
  category:
    | "Aadhaar"
    | "Income Tax"
    | "Passport"
    | "Welfare & DBT"
    | "Health & Ayushman"
    | "Ration & Food"
    | "Voter ID"
    | "Legal & RTI";
  views: number;
  publishedAt: string;
  tags: string[];
  question: string;
  answer: string;
}

const STATIC_FAQS: FaqRecord[] = [
  {
    id: "faq-1",
    category: "Aadhaar",
    views: 18450,
    publishedAt: "2026-08-15",
    tags: ["UIDAI", "PAN", "Aadhaar", "e-KYC", "Demographic"],
    question:
      'Why is my PAN card or Aadhaar application showing "UIDAI Demographic Verification Failure"?',
    answer:
      "PAN registration systems and government portals verify demographic data (name spelling, date of birth, gender) in real-time against UIDAI records. If there is even a single letter, spacing, or surname discrepancy compared to your Aadhaar card, the income tax verification gateway will reject your request.\n\nResolution steps:\n1. Ensure your form matches the exact letter-by-letter spelling on your official Aadhaar card.\n2. If your Aadhaar details are outdated, update demographic details first via myAadhaar portal (uidai.gov.in) or visit an authorized Aadhaar Seva Kendra.\n3. Retry submission once UIDAI update is live (typically 24–72 hours).",
  },
  {
    id: "faq-2",
    category: "Aadhaar",
    views: 15200,
    publishedAt: "2026-08-28",
    tags: ["Aadhaar", "Mobile Link", "OTP", "Biometric"],
    question: "How can I update my mobile number or biometric credentials linked with Aadhaar?",
    answer:
      "While residential address can be updated online via the UIDAI Self-Service Portal using valid address proofs, mobile number, photo, iris, and fingerprint updates MANDATORILY require physical in-person biometric authentication at a designated Aadhaar Enrolment Centre / Aadhaar Seva Kendra (ASK).\n\nKey details:\n• No document proof is required for mobile number update.\n• A statutory fee of ₹50 is charged by UIDAI for demographic updates.\n• You can book an online appointment at ask.uidai.gov.in to skip physical queues.",
  },
  {
    id: "faq-tax-1",
    category: "Income Tax",
    views: 24500,
    publishedAt: "2026-08-18",
    tags: ["PAN-Aadhaar", "Section 139AA", "Inoperative PAN", "Penalty ₹1000"],
    question:
      "What is the penalty for not linking PAN with Aadhaar, and how do I reactivate an inoperative PAN?",
    answer:
      "Under Section 139AA of the Income Tax Act, 1961, an unlinked PAN becomes 'inoperative'. Pending tax refunds are frozen, TDS/TCS is deducted at punitive 20%+ rates, and you cannot file ITR.\n\nReactivation Steps:\n1. Visit the Income Tax e-Filing portal (incometax.gov.in) and click 'Link Aadhaar'.\n2. Pay the statutory fee of ₹1,000 under Challan ITNS 280 (Major Head 0021, Minor Head 500).\n3. Submit the linking request after fee clearance (24–48 hours). Reactivation completes in 3–7 business days.",
  },
  {
    id: "faq-tax-2",
    category: "Income Tax",
    views: 19800,
    publishedAt: "2026-08-25",
    tags: ["Instant e-PAN", "Free PAN", "e-KYC", "e-Filing"],
    question:
      "How can I generate an instant digitally signed e-PAN online free of cost using Aadhaar?",
    answer:
      "Eligible individual taxpayers who have never been allotted a PAN card and possess an active Aadhaar can obtain an Instant e-PAN free of cost:\n\n1. Visit eportal.incometax.gov.in and click 'Instant e-PAN'.\n2. Enter your 12-digit Aadhaar number and the 6-digit OTP received on your mobile.\n3. Validate the pre-filled demographic details and submit.\n4. Download your digitally signed PDF e-PAN within 10 minutes. It holds full legal parity with physical laminated PAN cards under IT Rule 114.",
  },
  {
    id: "faq-passport-1",
    category: "Passport",
    views: 21200,
    publishedAt: "2026-08-16",
    tags: ["Passport Seva", "Tatkaal", "Fees ₹1500", "Police Verification"],
    question:
      "What is the difference between Normal and Tatkaal passport processing, fees, and timelines?",
    answer:
      "Under the MEA Passport Seva system:\n\n• Normal Application:\n  - Statutory Fee: ₹1,500 (36 pages) / ₹2,000 (60 pages booklet).\n  - Processing: Police verification occurs prior to passport printing.\n  - Delivery: Dispatched via Speed Post within 15–30 working days.\n\n• Tatkaal Scheme:\n  - Statutory Fee: Standard fee + ₹2,000 urgent surcharge (total ₹3,500 for 36 pages).\n  - Processing: Dispatched on Post-Police Verification basis within 1–3 working days.\n  - Eligibility: Requires 3 mandatory identity proofs from the MEA list (such as Aadhaar, PAN, Voter ID, or Service ID).",
  },
  {
    id: "faq-passport-2",
    category: "Passport",
    views: 18900,
    publishedAt: "2026-08-27",
    tags: ["Police Verification", "mPassport Police", "Address Proof", "Witnesses"],
    question:
      "What documents are mandatory for Passport Police Verification and how does mPassport Police App work?",
    answer:
      "For police verification by your local station Beat Constable:\n\nRequired Documents:\n• Original current residential address proof (Aadhaar, electricity bill <3 months, registered rent agreement, or bank passbook).\n• Date of Birth proof (10th class certificate or Municipal Birth Certificate).\n• Two local neighborhood witnesses with copies of their Aadhaar cards.\n\nPolice officers now use the GPS-enabled 'mPassport Police App' on tablets to capture photographs and geo-tagged addresses on-site, transmitting reports directly to the RPO in under 5 days.",
  },
  {
    id: "faq-3",
    category: "Health & Ayushman",
    views: 9400,
    publishedAt: "2026-09-02",
    tags: ["ABHA", "Health ID", "Ayushman Bharat"],
    question: "What is ABHA (Ayushman Bharat Health Account) and how is it authenticated?",
    answer:
      "ABHA is a 14-digit unique health identifier issued by the National Health Authority (NHA) under the Ayushman Bharat Digital Mission (ABDM). It digitally unifies your diagnostic lab reports, clinical prescriptions, hospital discharge summaries, and insurance claims into one consent-based digital locker.\n\nAuthentication is completed in seconds using Aadhaar OTP or your Driving Licence. It is 100% free and voluntary, allowing you to share health records securely with empanelled doctors without carrying physical files.",
  },
  {
    id: "faq-4",
    category: "Voter ID",
    views: 7800,
    publishedAt: "2026-09-05",
    tags: ["Voter ID", "EPIC", "ECI"],
    question: "How do I rectify errors in my Voter ID Card (EPIC) or transfer constituency?",
    answer:
      "All voter registration services are managed centrally by the Election Commission of India (ECI) through voters.eci.gov.in:\n\n• Form 6: For fresh voter registration (citizens turning 18 or first-time electors).\n• Form 8: For correction of entries (name, photo, DOB, gender) and shifting of residence (intra or inter-constituency).\n• Form 7: For deletion or objection to inclusion of name.\n\nOnline submissions generate an Application Reference Number (ARN) for tracking. Booth Level Officers (BLO) verify physical residence within 15–21 days.",
  },
  {
    id: "faq-5",
    category: "Welfare & DBT",
    views: 22100,
    publishedAt: "2026-07-20",
    tags: ["PM-Kisan", "DBT", "e-KYC", "Agriculture"],
    question: "Why has my PM-Kisan Samman Nidhi installment stopped and how do I resume it?",
    answer:
      "PM-Kisan releases ₹6,000 annually in three installments of ₹2,000 via Direct Benefit Transfer. If an installment is withheld, it is almost always due to one of three compliance gaps:\n\n1. Mandatory e-KYC Pending: Must be completed via OTP on pmkisan.gov.in or biometric scan at a CSC.\n2. Land Seeding Status 'NO': Your land ownership records (Khatauni/RoR) must be digitally verified and linked to your farmer profile by your state revenue/patwari office.\n3. Bank Account Not Seeded with NPCI: Your bank account must be mapped on the NPCI Aadhaar Payment Bridge (APB).\n\nCheck your compliance status under 'Know Your Status' on pmkisan.gov.in to identify the exact blocking reason.",
  },
  {
    id: "faq-6",
    category: "Welfare & DBT",
    views: 13900,
    publishedAt: "2026-08-10",
    tags: ["e-Shram", "Unorganized Workers", "Social Security", "UAN"],
    question:
      "Who is eligible for an e-Shram Card and what social security benefits does it confer?",
    answer:
      "The e-Shram portal registers workers in the unorganized sector to create a comprehensive national database:\n\nEligibility:\n• Age between 16 and 59 years.\n• Must NOT be an income tax payee.\n• Must NOT be a member of EPFO (Provident Fund) or ESIC.\n\nKey Benefits:\n• 12-digit Universal Account Number (UAN) valid nationwide.\n• Accidental insurance coverage under PMSBY (₹2 Lakh for accidental death / permanent disability, ₹1 Lakh for partial disability).\n• Direct access to emergency financial assistance during national crises and priority access to central social welfare schemes.",
  },
  {
    id: "faq-7",
    category: "Ration & Food",
    views: 11200,
    publishedAt: "2026-08-22",
    tags: ["Ration Card", "ONORC", "NFSA", "Portability"],
    question: "How does One Nation One Ration Card (ONORC) work for migrant workers across states?",
    answer:
      "Under the ONORC framework implemented by the Department of Food and Public Distribution, any NFSA (National Food Security Act) ration card holder can lift their entitled subsidized or free food grains from ANY Fair Price Shop (FPS) across India:\n\n• Biometric e-PoS Verification: Ration is disbursed using biometric authentication (fingerprint or iris scan) of any enrolled family member on the electronic Point of Sale device.\n• No Card Transfer Required: Migrants do NOT need to surrender their home state ration card or apply for a fresh card in their destination state.\n• Partial Lifting Allowed: Family members back home can lift their share of food grains, while the migrant worker lifts their individual quota at their workplace.",
  },
  {
    id: "faq-8",
    category: "Welfare & DBT",
    views: 16800,
    publishedAt: "2026-07-28",
    tags: ["NPCI", "Aadhaar", "DBT", "Banking", "Subsidy"],
    question:
      "What is the difference between an Aadhaar-linked bank account and an NPCI-mapped DBT account?",
    answer:
      "This is the most common reason for failed government payments:\n\n• Aadhaar Linking (Core Banking): Satisfies regular Know-Your-Customer (KYC) compliance at your bank for identity verification. You can link multiple bank accounts to your Aadhaar.\n• NPCI DBT Seeding (Aadhaar Payment Bridge - APB): Directs government welfare subsidies (scholarships, PM-Kisan, pensions, LPG) into one specific account. ONLY ONE account across all banks can be mapped on the NPCI mapper at any time.\n\nTo ensure subsidies arrive, submit an 'Aadhaar Seeding / Mandate Consent Form' at your bank branch specifically requesting NPCI mapper activation.",
  },
  {
    id: "faq-9",
    category: "Income Tax",
    views: 8900,
    publishedAt: "2026-09-01",
    tags: ["Income Certificate", "Household Income", "Tehsildar"],
    question: "How is family annual income calculated for state income and EWS certificates?",
    answer:
      "Revenue authorities calculate gross annual household income by aggregating income from all formal and informal sources of all immediate family members (applicant, parents, spouse, dependent siblings/children):\n\nIncluded components:\n• Gross salary, pensions, and professional income.\n• Business earnings, interest from deposits, and dividends.\n• Agricultural yield/income from farmland (except where explicitly excluded by state EWS criteria).\n• Rental receipts from properties.\n\nExclusions:\n• Agricultural labor wages and occasional bursaries (in certain state schedules).\n\nDocumentation required includes salary slips/Form 16 for employed individuals, ITR acknowledgment for business owners, and local Patwari/Tehsildar land revenue verification reports.",
  },
  {
    id: "faq-10",
    category: "Health & Ayushman",
    views: 6400,
    publishedAt: "2026-09-04",
    tags: ["Jeevan Pramaan", "DLC", "Pensioners", "Facial Auth"],
    question:
      "How do senior citizens submit a Digital Life Certificate (Jeevan Pramaan) from home?",
    answer:
      "Senior citizens and family pensioners are no longer required to visit the pension disbursement bank branch physically in November:\n\n• Jeevan Pramaan Face App: Using any Android smartphone with a 5MP+ camera, pensioners can download the 'Jeevan Pramaan Face App' and 'AadhaarFaceRD' service from UIDAI.\n• Live Facial Authentication: Enter Aadhaar, PPO (Pension Payment Order) number, and bank account details. The app captures live facial biometrics and instantly generates a verified Digital Life Certificate (DLC).\n• Direct Submission: The generated certificate is transmitted automatically to your pension disbursing agency (Bank, Post Office, or Treasury), ensuring uninterrupted pension payments.",
  },
  {
    id: "faq-aadhaar-3",
    category: "Aadhaar",
    views: 16800,
    publishedAt: "2026-08-22",
    tags: ["Biometric Lock", "Security", "mAadhaar", "Fraud Prevention"],
    question:
      "How do I lock or unlock my Aadhaar biometrics online using mAadhaar or the UIDAI portal?",
    answer:
      "UIDAI provides a zero-cost biometric locking mechanism to prevent unauthorized authentication or cloning fraud:\n\n• Biometric Lock: Once locked, your fingerprints and iris scans cannot be used by anyone, including financial institutions and telecom providers.\n• Temporary Unlock: When you need to authenticate for SIM activation, bank KYC, or ration withdrawal, unlock via the mAadhaar mobile app. Biometrics automatically re-lock after 10 minutes.\n• Permanent Unlock: Can be toggled at any time using Aadhaar OTP verification on myaadhaar.uidai.gov.in.\n\nNote: Demographic OTP authentication (SMS sent to your linked mobile) continues to function normally even when biometrics are locked.",
  },
  {
    id: "faq-aadhaar-4",
    category: "Aadhaar",
    views: 14100,
    publishedAt: "2026-08-29",
    tags: ["Baal Aadhaar", "Minor Child", "Biometric Update", "Age 5 and 15"],
    question:
      "What is Baal Aadhaar (Blue Aadhaar for children below 5 years) and when are mandatory biometric updates required?",
    answer:
      "Baal Aadhaar is a specialized blue-colored card issued to infants and children under 5 years of age:\n\n• No biometrics (fingerprints or iris) are captured for children below 5; the card is linked directly to a parent or guardian's Aadhaar.\n• Mandatory Biometric Update (MBU-1): Must be completed when the child attains 5 years of age.\n• Mandatory Biometric Update (MBU-2): Must be completed when the child attains 15 years of age.\n• Statutory Cost: Both mandatory biometric updates (at ages 5 and 15) are 100% FREE OF CHARGE at all authorized Aadhaar Seva Kendras.",
  },
  {
    id: "faq-tax-3",
    category: "Income Tax",
    views: 17400,
    publishedAt: "2026-08-20",
    tags: ["Form 26AS", "AIS", "TDS Mismatch", "ITR Filing"],
    question:
      "How do I rectify a mismatch between TDS in Form 26AS / AIS and my Annual Tax Return?",
    answer:
      "Discrepancies between TDS claimed in your ITR and amounts reported in Form 26AS or Annual Information Statement (AIS) trigger automated defective return notices under Section 139(9):\n\nResolution Steps:\n1. Download your latest AIS / Form 26AS from the e-Filing portal to identify the deductor (employer, bank, or client) causing the mismatch.\n2. Contact the deductor's finance desk and request them to file a revised TDS return (Form 24Q or 26Q) correcting the PAN entry or credit amount.\n3. In AIS, submit digital online feedback ('Information is incorrect' or 'Income belongs to other PAN').\n4. Once the revised TDS statement is processed by TRACES, revise your ITR within statutory deadlines under Section 139(5).",
  },
  {
    id: "faq-tax-4",
    category: "Income Tax",
    views: 15300,
    publishedAt: "2026-08-29",
    tags: ["EPF Withdrawal", "Section 192A", "TDS on PF", "Form 15G"],
    question:
      "What are the tax implications and TDS rules for EPF provident fund withdrawals before 5 years of service?",
    answer:
      "Provident fund accumulated balances withdrawn prior to 5 years of continuous service are taxable as income from salary and other sources:\n\nKey Statutory Provisions:\n• Under Section 192A, TDS is deducted at 10% if the withdrawal amount equals or exceeds ₹50,000 and a valid PAN is provided.\n• If PAN is not furnished, TDS is deducted at the maximum marginal rate (30% + cess).\n• Exemption from TDS: If service was terminated due to employee ill-health, business discontinuation, or reasons beyond employee control, no tax applies.\n• Form 15G / 15H: Eligible individuals whose total estimated taxable income is nil can submit Form 15G (or 15H for senior citizens) on the EPFO Unified Member Portal to avoid TDS deductions.",
  },
  {
    id: "faq-passport-3",
    category: "Passport",
    views: 16200,
    publishedAt: "2026-08-21",
    tags: ["Minor Passport", "Annexure D", "Annexure C", "Single Parent"],
    question:
      "What is the procedure and documentation for issuing a passport to a minor child with parents abroad?",
    answer:
      "Passports for minors (under 18 years) have a standard validity of 5 years or until attaining 18 years:\n\nRequired Documentation:\n1. Proof of Date of Birth: Municipal Birth Certificate bearing the child and parents' names.\n2. Parental Consent (Annexure D): Sworn statement of both parents consenting to issuance.\n3. Parent Residing Abroad: If one parent is living abroad, the foreign parent must execute Annexure D attested by the relevant Indian Mission/Consulate or an apostille notary public abroad.\n4. Single Parent / Separation: If one parent is untraceable or custody is granted by a competent court, Annexure C (declaration by single parent) must be submitted.\n5. Physical presence of the minor at the Passport Seva Kendra (PSK) is mandatory for biometric photography.",
  },
  {
    id: "faq-passport-4",
    category: "Passport",
    views: 14700,
    publishedAt: "2026-08-31",
    tags: ["Passport Reissue", "Address Change", "Surname Change", "Gazette"],
    question:
      "How can I change my surname or address in an existing passport, and is fresh police verification required?",
    answer:
      "Any modification to personal particulars requires applying for a 'Re-issue of Passport' rather than an amendment:\n\n• Address Change: Submit proof of your current residential address (updated Aadhaar, utility bill, or registered rent agreement). A fresh police verification will be initiated for the new jurisdiction.\n• Marital Surname Addition: A marriage certificate is no longer mandatory; a joint declaration with a spouse's self-attested passport copy or divorce decree (if reverting) is accepted.\n• Major Name Alteration: Requires submitting two public press clippings in leading daily newspapers (one local, one circulating at permanent address) plus a Gazette Notification published in the Official Gazette of India.",
  },
  {
    id: "faq-health-3",
    category: "Health & Ayushman",
    views: 16500,
    publishedAt: "2026-08-23",
    tags: ["PM-JAY", "Ayushman Golden Card", "₹5 Lakh Cover", "Hospital Empanelment"],
    question:
      "Who is eligible for the Ayushman Bharat PM-JAY ₹5 Lakh annual health cover and how do I download the Ayushman Golden Card?",
    answer:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides fully cashless hospitalization up to ₹5 Lakhs per family per year:\n\n• Target Beneficiaries: Automatically identified based on the Socio-Economic and Caste Census (SECC 2011) deprivation criteria for rural and occupational categories for urban households.\n• How to Check Eligibility: Visit beneficiary.nha.gov.in or download the Ayushman App. Enter your state, district, and Aadhaar or Ration Card number.\n• Card Generation: Complete e-KYC using Aadhaar OTP or facial authentication on the app. Once verified, download the Ayushman Golden PVC Card PDF immediately.\n• Treatment Access: Present your Ayushman Card at the 'Ayushman Mitra' desk in any empanelled public or private hospital nationwide for cashless treatments.",
  },
  {
    id: "faq-health-4",
    category: "Health & Ayushman",
    views: 15800,
    publishedAt: "2026-09-02",
    tags: ["Senior Citizens 70+", "Ayushman Expansion", "Universal Cover", "Vay Vandana"],
    question:
      "Can senior citizens aged 70 and above enroll in the expanded Ayushman Bharat scheme regardless of family income?",
    answer:
      "YES. The Union Cabinet approved the universal expansion of Ayushman Bharat PM-JAY to cover all senior citizens aged 70 years and above across India:\n\nKey Highlights:\n• Universal Coverage: Every citizen aged 70+ is eligible irrespective of economic status, caste, or annual household income.\n• Standalone Benefit: Senior citizens aged 70+ in existing PM-JAY families receive an additional top-up cover of ₹5 Lakhs per year exclusively for themselves (not shared with family members under 70).\n• Standalone Families: Senior citizens aged 70+ not previously covered receive a distinct family cover of ₹5 Lakhs per year.\n• Choice with Other Schemes: Seniors enrolled in CGHS, ECHS, or CAPF schemes can elect either their existing scheme or Ayushman Bharat PM-JAY.",
  },
  {
    id: "faq-voter-2",
    category: "Voter ID",
    views: 17200,
    publishedAt: "2026-08-20",
    tags: ["Form 6", "First Time Voter", "18 Years", "ECI Qualifying Dates"],
    question:
      "How can an 18-year-old first-time voter register online using Form 6 across the four annual qualifying dates?",
    answer:
      "The Election Commission of India (ECI) provides four qualifying dates each calendar year: January 1, April 1, July 1, and October 1:\n\nStep-by-Step Registration:\n1. Visit voters.eci.gov.in or download the ECIS Voter Helpline App.\n2. Select 'New Registration for General Electors (Form 6)'.\n3. Provide personal details, active mobile number, and Aadhaar (voluntary authentication).\n4. Upload Proof of Age (10th marksheet, municipal birth certificate, or Aadhaar) and Proof of Ordinary Residence (water/power bill, bank passbook, or parents' voter card).\n5. Submit online; a Booth Level Officer (BLO) visits your residence for field verification before the Electoral Registration Officer (ERO) approves entry into the electoral roll.",
  },
  {
    id: "faq-voter-3",
    category: "Voter ID",
    views: 15400,
    publishedAt: "2026-08-28",
    tags: ["e-EPIC", "Digital Voter Card", "PDF Download", "voters.eci.gov.in"],
    question:
      "How do I download a digitally signed e-EPIC voter card in PDF format from the ECI portal in 5 minutes?",
    answer:
      "e-EPIC is a portable, secure PDF version of the Electoral Photo Identity Card with a tamper-proof QR code:\n\nDownload Procedure:\n1. Open voters.eci.gov.in and click 'e-EPIC Download'.\n2. Enter your 10-character alphanumeric EPIC number (or Form 6 reference number) and select your state.\n3. Request and enter the 6-digit OTP dispatched to your registered mobile number.\n4. Click 'Download e-EPIC' to obtain the high-resolution vector PDF.\n\nLegal Validity: The downloaded e-EPIC is recognized as an authentic, legally valid proof of identity for voting at polling stations nationwide and for general government KYC.",
  },
  {
    id: "faq-voter-4",
    category: "Voter ID",
    views: 12100,
    publishedAt: "2026-09-01",
    tags: ["Form 6A", "NRI Voter", "Overseas Elector", "Passport"],
    question:
      "What is the procedure for Overseas / NRI Indian citizens to register as electors in their home constituency?",
    answer:
      "Indian citizens living abroad who have not acquired foreign citizenship can register as Overseas Electors under Section 20A of the Representation of the People Act, 1950:\n\nApplication Process:\n1. File Form 6A online on the ECI portal (voters.eci.gov.in).\n2. Upload self-attested copies of relevant pages of your valid Indian passport (photograph, address, and valid foreign employment or residence visa stamp).\n3. The applicant is enrolled in the constituency corresponding to the Indian residential address printed on their passport.\n\nVoting Rule: Under current statutory provisions, overseas electors must vote in person at their allocated polling booth in India on polling day upon producing their original passport.",
  },
  {
    id: "faq-dbt-4",
    category: "Welfare & DBT",
    views: 18100,
    publishedAt: "2026-08-19",
    tags: ["NPCI Seeding", "DBT Portal", "PFMS", "Aadhaar Payment Bridge"],
    question:
      "How do I check my NPCI bank account seeding status online to ensure DBT scholarships and subsidies are not blocked?",
    answer:
      "Direct Benefit Transfer (DBT) funds are routed through the NPCI Aadhaar Payment Bridge (APB) directly to the specific bank account mapped to your Aadhaar:\n\nHow to Verify Online:\n1. Go to myaadhaar.uidai.gov.in and click 'Bank Seeding Status'.\n2. Authenticate using your 12-digit Aadhaar number and OTP received on your linked mobile.\n3. The portal will display your linked bank name, status ('Active'), and the last updated date.\n\nResolution if Inactive:\nVisit your bank branch with an Aadhaar copy and fill out the 'Aadhaar Seeding / NPCI Mandate Consent Form'. Insist on NPCI mapper activation, not merely standard core-banking KYC.",
  },
  {
    id: "faq-dbt-5",
    category: "Welfare & DBT",
    views: 13900,
    publishedAt: "2026-09-01",
    tags: ["Kisan Credit Card", "KCC", "Subsidized Loan", "PM-Kisan"],
    question:
      "How can small and marginal farmers apply for the Kisan Credit Card (KCC) with subsidized 4% interest rates?",
    answer:
      "The Kisan Credit Card (KCC) provides institutional credit for cultivation, post-harvest expenses, and allied dairy/fisheries activities:\n\n• Interest Subvention: Standard agricultural loans carry 9% interest. The Central Government provides a 2% interest subvention and an additional 3% prompt repayment incentive, reducing the effective rate to 4% for timely repaid loans up to ₹3 Lakhs.\n• Simplified PM-Kisan Integration: All active PM-Kisan beneficiaries can avail of KCC via a simplified one-page application form without collateral up to ₹1.6 Lakhs.\n• Required Documents: Copy of land record (ROR / 7/12 extract / Khatauni), Aadhaar, PAN, and declaration of crops grown.",
  },
  {
    id: "faq-ration-2",
    category: "Ration & Food",
    views: 14900,
    publishedAt: "2026-08-24",
    tags: ["Add Family Member", "Ration Card", "Birth Certificate", "Surrender Certificate"],
    question:
      "How do I add a new family member (newborn child or spouse) to an existing NFSA Ration Card?",
    answer:
      "Adding new members ensures appropriate monthly foodgrain quota allocations under the National Food Security Act:\n\nProcedure by Category:\n1. Newborn Infant: Apply on your state e-PDS / RCMS portal or CSC centre. Upload the child's Municipal Birth Certificate and Baal Aadhaar (if issued), along with the Head of Household's ration card number.\n2. Newly Married Spouse: Before adding the spouse to the new household, obtain a 'Name Deletion Certificate' or 'Surrender Certificate' from their parents' ration card office. Upload this certificate, marriage certificate, and updated Aadhaar.\n3. Physical Verification: The local Food Supply Inspector or Taluk Supply Officer verifies the biometric linkage before approving the revised digital ration slip.",
  },
  {
    id: "faq-ration-3",
    category: "Ration & Food",
    views: 13200,
    publishedAt: "2026-08-30",
    tags: ["AAY vs PHH", "Foodgrain Quota", "PMGKAY", "Free Ration"],
    question:
      "What is the difference between Antyodaya Anna Yojana (AAY) and Priority Household (PHH) ration quota entitlements?",
    answer:
      "Under the National Food Security Act (NFSA), beneficiaries are categorized into two primary statutory entitlements:\n\n• Antyodaya Anna Yojana (AAY Cards): Reserved for the poorest of the poor households (landless laborers, widows, terminally ill). Each AAY household receives a fixed quota of 35 kg of foodgrains per month per family, regardless of the number of members.\n• Priority Households (PHH Cards): Issued to eligible families meeting state poverty thresholds. Entitlement is 5 kg of foodgrains per person per month (e.g., a family of 4 receives 20 kg).\n• PMGKAY Scheme: Under the Pradhan Mantri Garib Kalyan Anna Yojana, all 5 kg/person (PHH) and 35 kg/family (AAY) rations are distributed 100% FREE OF CHARGE through Fair Price Shops across all States and Union Territories.",
  },
  {
    id: "faq-ration-4",
    category: "Ration & Food",
    views: 11800,
    publishedAt: "2026-09-02",
    tags: ["Ration Grievance", "FPS Denial", "Helpline 1967", "e-PoS Failure"],
    question:
      "What legal options and toll-free helpline channels exist if a Fair Price Shop dealer refuses biometric ration distribution?",
    answer:
      "Fair Price Shop (FPS) dealers are legally prohibited from denying rations due to biometric technical failures on electronic Point of Sale (e-PoS) machines:\n\nStatutory Safeguards & Escalation:\n1. Alternative Authentication: If fingerprints fail to scan due to manual labor or age, dealers must attempt iris scanning or send a one-time password (OTP) to the registered mobile.\n2. Exception Register: Under NFSA guidelines, every FPS has a physical manual 'Exception Register' to dispense grain when connectivity fails.\n3. Immediate Reporting: Dial the National Food Toll-Free Helpline at 1967 or 1800-series state PDS helplines from the ration shop.\n4. Administrative Complaint: Lodge a formal grievance with the District Supply Officer (DSO) or Sub-Divisional Magistrate (SDM), who can suspend the dealer's license for arbitrary denial of statutory food entitlements.",
  },
  {
    id: "faq-11",
    category: "Legal & RTI",
    views: 19800,
    publishedAt: "2026-08-01",
    tags: ["DigiLocker", "IT Act", "Rule 9A", "Legal Validity"],
    question: "Are DigiLocker digital documents legally recognized on par with physical originals?",
    answer:
      "YES. Under Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016, electronic records shared via DigiLocker are legally recognized on par with original physical documents issued by the authority.\n\nFurthermore:\n• Traffic police and transport authorities are legally bound (via MoRTH notifications) to accept electronic Driving Licences and Registration Certificates (RC).\n• Universities and employers must accept cryptographically signed marksheets and degrees.\n• Passports and visa applications accept DigiLocker documents for address and birth verification.\n\nNote: Documents must be 'Issued' directly from the respective authority into DigiLocker; self-uploaded scanned PDFs do NOT possess this statutory parity.",
  },
  {
    id: "faq-12",
    category: "Legal & RTI",
    views: 14700,
    publishedAt: "2026-08-18",
    tags: ["RTI", "Delays", "Appeals", "Transparency"],
    question:
      "How can I use the Right to Information (RTI) Act to resolve delayed government applications?",
    answer:
      "Under Section 6(1) of the RTI Act, 2005, every citizen has the constitutional right to seek reasons for administrative delays from Public Information Officers (PIOs):\n\nRecommended RTI Strategy:\n1. File an application at rtionline.gov.in (for Central ministries) or the respective state RTI portal with the statutory ₹10 fee.\n2. Request certified copies of daily progress reports and file movements regarding your application reference number.\n3. Request the names and designations of all officers who held your file and the reasons recorded in file notings for the delay.\n4. Ask for the citizen charter delivery timeline prescribed for that service.\n\nPublic authorities are legally obligated to provide a response within 30 calendar days, prompting timely processing of stagnant files.",
  },
  {
    id: "faq-13",
    category: "Legal & RTI",
    views: 8200,
    publishedAt: "2026-08-30",
    tags: ["Encumbrance Certificate", "EC", "Property", "IGRS"],
    question:
      "What is an Encumbrance Certificate (EC) and why is it essential before buying property?",
    answer:
      "An Encumbrance Certificate (EC) issued by the Sub-Registrar of the Registration and Stamps Department proves whether a piece of real estate is free from legal, financial, or mortgage liabilities:\n\n• EC confirms whether the property has any registered sales, gifts, mortgages, partitions, or court attachments during a specified search period (typically 15 to 30 years).\n• A 'Nil Encumbrance Certificate' (Form 16) certifies that no registered transactions exist for that period.\n• Form 15 lists all registered deeds and transactions affecting the property.\n\nBanks mandatorily require an EC for housing loans, and purchasers should always verify it online on their state IGRS portal prior to executing a sale deed.",
  },
  {
    id: "faq-14",
    category: "Legal & RTI",
    views: 9100,
    publishedAt: "2026-09-03",
    tags: ["RTPS", "Citizen Charter", "Grievance", "Appeals"],
    question:
      "What legal recourse exists if an e-District application is marked 'Under Verification' indefinitely?",
    answer:
      "Most Indian states operate under a statutory 'Right to Public Services' (RTPS) Act or Public Service Guarantee Act which legally mandates service delivery within a fixed window (typically 7–21 days):\n\nEscalation Steps:\n1. Note the statutory due date printed on your submission receipt / acknowledgment slip.\n2. If the due date lapses without formal issuance or rejection, file a 'First Appeal' before the designated Appellate Authority (typically SDM or ADM) via your state RTPS portal.\n3. If the First Appeal fails, file a 'Second Appeal' before the State Public Service Delivery Commission.\n4. In parallel, lodge a grievance on CPGRAMS (pgportal.gov.in) or state CM helpline (such as CM Window, Samadhan, or Spandana).",
  },
];

export default function FaqStandalonePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"popular" | "newest">("popular");
  const [expandedId, setExpandedId] = useState<string | null>(STATIC_FAQS[0].id);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "Aadhaar", label: "Aadhaar" },
    { id: "Income Tax", label: "Income Tax" },
    { id: "Passport", label: "Passport" },
    { id: "Welfare & DBT", label: "Welfare & DBT" },
    { id: "Health & Ayushman", label: "Health & Ayushman" },
    { id: "Ration & Food", label: "Ration & Food" },
    { id: "Voter ID", label: "Voter ID" },
    { id: "Legal & RTI", label: "Legal & RTI" },
  ];

  const filteredFaqs = useMemo(() => {
    const list = STATIC_FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });

    return list.sort((a, b) => {
      if (sortBy === "popular") {
        return b.views - a.views;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Suggest 3-4 other relevant questions based on the current category
  const getRelatedFaqs = (currentFaq: FaqRecord, count = 3): FaqRecord[] => {
    // 1. Same category questions (excluding current question)
    const sameCategory = STATIC_FAQS.filter(
      (f) => f.id !== currentFaq.id && f.category === currentFaq.category,
    );

    // Prioritize tag overlap, then popularity
    sameCategory.sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentFaq.tags.includes(t)).length;
      const bOverlap = b.tags.filter((t) => currentFaq.tags.includes(t)).length;
      if (bOverlap !== aOverlap) return bOverlap - aOverlap;
      return b.views - a.views;
    });

    if (sameCategory.length >= count) {
      return sameCategory.slice(0, count);
    }

    // 2. Complement with other top relevant questions
    const others = STATIC_FAQS.filter(
      (f) => f.id !== currentFaq.id && f.category !== currentFaq.category,
    ).sort((a, b) => {
      const aOverlap = a.tags.filter((t) => currentFaq.tags.includes(t)).length;
      const bOverlap = b.tags.filter((t) => currentFaq.tags.includes(t)).length;
      if (bOverlap !== aOverlap) return bOverlap - aOverlap;
      return b.views - a.views;
    });

    return [...sameCategory, ...others].slice(0, count);
  };

  // Smoothly expand a related question and scroll into view
  const handleSelectRelatedFaq = (relatedId: string) => {
    const target = STATIC_FAQS.find((f) => f.id === relatedId);
    if (target && selectedCategory !== "all" && selectedCategory !== target.category) {
      setSelectedCategory("all");
    }
    if (searchQuery) {
      setSearchQuery("");
    }
    setExpandedId(relatedId);
    setTimeout(() => {
      const el = document.getElementById(relatedId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-stone-900 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-black text-stone-900 text-base"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xs">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>SewaNadu</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-1.5 text-stone-700 hover:bg-stone-50"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Portal
            </Link>
            <Link
              to="/citizen-guides"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-1.5 text-stone-700 hover:bg-stone-50"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Citizen Guides
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-b from-amber-50/70 via-white to-[#FCFBF7] border-b border-stone-200 py-10 px-4 sm:px-6">
        <SEOHead
          showBreadcrumbBar={true}
          breadcrumbClassName="max-w-3xl mx-auto mb-4 flex items-center justify-center gap-1.5 text-xs text-stone-500 font-sans flex-wrap"
        />
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800">
            Citizen Support &amp; Knowledge Base
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Frequently Asked Public Service Questions
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Verified, legally grounded answers to help Indian citizens overcome verification
            failures, e-KYC blocks, subsidy delays, and procedural roadblocks.
          </p>

          {/* Search bar & filter pills */}
          <div className="pt-4 max-w-lg mx-auto space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords (e.g. UIDAI demographic, PM-Kisan, RTI appeal)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                    selectedCategory === cat.id
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sorting Toggle: Most Popular vs Newest */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-[11px] font-mono uppercase font-bold text-stone-400 tracking-wider">
                Sort:
              </span>
              <div
                role="group"
                aria-label="Sort questions"
                className="inline-flex rounded-lg border border-stone-200 bg-stone-100/80 p-0.5"
              >
                <button
                  type="button"
                  id="sort-popular-btn"
                  onClick={() => setSortBy("popular")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition ${
                    sortBy === "popular"
                      ? "bg-white text-stone-900 shadow-2xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  Most Popular
                </button>
                <button
                  type="button"
                  id="sort-newest-btn"
                  onClick={() => setSortBy("newest")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition ${
                    sortBy === "newest"
                      ? "bg-white text-stone-900 shadow-2xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  Newest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main FAQ Accordion List */}
      <main className="max-w-3xl mx-auto flex-1 px-4 sm:px-6 py-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-600 text-sm">No questions matched your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <article
                key={faq.id}
                id={faq.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-stone-50/70 transition"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                        {faq.category}
                      </span>
                      <span className="text-stone-400 font-mono text-[10px] inline-flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500" />
                        {faq.views.toLocaleString()} views
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-400 font-mono text-[10px] inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {faq.publishedAt}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-sm sm:text-base text-stone-900 leading-snug">
                      {faq.question}
                    </h2>
                  </div>
                  <span className="mt-1 text-stone-400 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
                    <div className="whitespace-pre-line text-stone-600 space-y-2">{faq.answer}</div>

                    {/* Related Questions Section */}
                    {(() => {
                      const related = getRelatedFaqs(faq, 3);
                      if (related.length === 0) return null;
                      return (
                        <div
                          className="mt-4 pt-3.5 border-t border-stone-100 space-y-2.5"
                          id={`faq-related-section-${faq.id}`}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                              Related Questions in {faq.category}
                            </h3>
                            <span className="text-[10px] text-stone-400 font-mono">
                              {related.length} related topics
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2 pt-0.5">
                            {related.map((rel) => (
                              <button
                                key={rel.id}
                                type="button"
                                onClick={() => handleSelectRelatedFaq(rel.id)}
                                className="group w-full text-left p-3 rounded-xl bg-stone-50/90 hover:bg-amber-50/70 border border-stone-200/90 hover:border-amber-300 transition flex items-start justify-between gap-3 cursor-pointer shadow-2xs"
                                id={`faq-rel-link-${rel.id}`}
                              >
                                <div className="space-y-1 flex-1 min-w-0">
                                  <p className="font-semibold text-xs text-stone-850 group-hover:text-amber-950 transition leading-snug">
                                    {rel.question}
                                  </p>
                                  <div className="flex items-center gap-2 text-[10px] text-stone-400 font-mono flex-wrap">
                                    <span className="text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded font-sans font-bold">
                                      {rel.category}
                                    </span>
                                    <span>•</span>
                                    <span>{rel.views.toLocaleString()} views</span>
                                    <span>•</span>
                                    <span>Updated {rel.publishedAt}</span>
                                  </div>
                                </div>
                                <span className="p-1 rounded-lg bg-white border border-stone-200 text-stone-400 group-hover:text-amber-700 group-hover:border-amber-300 transition shrink-0 mt-0.5 shadow-2xs">
                                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-400 font-mono">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Tag className="w-3 h-3 text-stone-400" />
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span>Published: {faq.publishedAt}</span>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} SewaNadu. Independent public policy knowledge base.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/editorial-policy" className="hover:underline">
              Editorial Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">
              Contact Desk
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
