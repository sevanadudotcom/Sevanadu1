import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import SEOHead, { getRouteJsonLdScript } from "@/components/SEOHead";
import {
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  FileCheck2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Clock,
  Scale,
  Sparkles,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/citizen-guides")({
  head: () => ({
    meta: [
      { title: "Citizen e-Governance Guides & Procedure Manuals — SewaNadu" },
      {
        name: "description",
        content:
          "Authoritative, step-by-step procedure manuals for Indian public services: Aadhaar-PAN linking, EPFO UAN transfers, Passport Tatkaal & police verification, PM-Kisan e-KYC, DigiLocker validity, RTI appeals, DL renewal, and EWS/OBC-NCL criteria.",
      },
      {
        property: "og:title",
        content: "Citizen e-Governance Guides & Procedure Manuals — SewaNadu",
      },
      {
        property: "og:description",
        content:
          "Comprehensive procedural guides, statutory timelines, required documents, and appeal procedures for central and state public services.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://sewanadu.in/citizen-guides" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sewanadu.in/citizen-guides" }],
    scripts: [getRouteJsonLdScript("/citizen-guides")],
  }),
  component: CitizenGuidesPage,
});

interface GuideArticle {
  id: string;
  category:
    | "Identity & Tax"
    | "Welfare & Agri"
    | "Legal & Transparency"
    | "Health & Social"
    | "Transport & Passport";
  title: string;
  readTime: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
    tips?: string;
  }[];
  officialPortal: {
    name: string;
    url: string;
  };
}

const GUIDES: GuideArticle[] = [
  {
    id: "pan-aadhaar-demographic-failure",
    category: "Identity & Tax",
    title: "How to Fix UIDAI Demographic Verification Failure & Link PAN with Aadhaar",
    readTime: "6 min read",
    lastUpdated: "September 2026",
    summary:
      "A comprehensive walkthrough on diagnosing letter-by-letter discrepancies between PAN records and UIDAI Aadhaar biometric database to successfully complete e-KYC.",
    sections: [
      {
        heading: "1. Understanding the Root Cause of Demographic Failure",
        content: [
          "The Income Tax Department and UIDAI validate citizen identity using an automated matching algorithm comparing Name, Date of Birth (DOB), and Gender.",
          "Even minor variances—such as using an abbreviation ('K.' vs 'Kumar'), inverted first and last names, or single-character typos in paternal names—trigger the 'Demographic Verification Failed' error on the e-filing portal.",
          "Additionally, if your Aadhaar card only lists your year of birth (e.g. 'YYYY') while your PAN lists full date ('DD/MM/YYYY'), matching fails until UIDAI records are updated.",
        ],
      },
      {
        heading: "2. Step-by-Step Resolution Strategy",
        content: [
          "Step 1: Check your registered name on your Aadhaar card via the myAadhaar portal (myaadhaar.uidai.gov.in). Note the exact spelling, including spacing.",
          "Step 2: Log in to the Income Tax e-Filing portal (incometax.gov.in) and navigate to 'My Profile' > 'Personal Details' to review existing PAN records.",
          "Step 3: Decide which document reflects your correct legal name. In 90% of cases, updating Aadhaar online is faster (typically 24–72 hours) than modifying PAN records.",
          "Step 4: If modifying Aadhaar, submit an online demographic update with valid proof of identity (such as Passport, Voter ID, or School Leaving Certificate).",
          "Step 5: If modifying PAN, file Form 49A (Correction in Existing PAN) through NSDL (Protean) or UTIITSL, paying the statutory correction fee of ₹107.",
        ],
        tips: "Important: Once your demographic records match letter-for-letter, re-attempt PAN-Aadhaar linking at incometax.gov.in/iec/foportal. Allow 48 hours for databases to synchronize.",
      },
      {
        heading: "3. Legal Deadlines & Consequences of Inoperative PAN",
        content: [
          "Under Section 139AA of the Income Tax Act, 1961, failure to link PAN with Aadhaar results in the PAN becoming 'Inoperative'.",
          "Consequences of an inoperative PAN include: higher TDS deduction at the maximum rate of 20%, inability to receive pending tax refunds, and restrictions on high-value banking transactions.",
          "To reactivate an inoperative PAN, citizens must pay the standard penalty fee of ₹1,000 under Section 234H through the e-Pay Tax gateway.",
        ],
      },
    ],
    officialPortal: {
      name: "Income Tax e-Filing Portal",
      url: "https://eportal.incometax.gov.in",
    },
  },
  {
    id: "pm-kisan-ekyc-npci-seeding",
    category: "Welfare & Agri",
    title: "PM-Kisan Samman Nidhi: Step-by-Step Guide to e-KYC, Land Seeding & NPCI Mapping",
    readTime: "8 min read",
    lastUpdated: "September 2026",
    summary:
      "Why farmer installments stop and how to verify the three mandatory pillars: Aadhaar OTP e-KYC, State Land Record (Bhulekh) seeding, and NPCI Direct Benefit Transfer bridge.",
    sections: [
      {
        heading: "1. The Three Mandatory Compliances for PM-Kisan",
        content: [
          "The Pradhan Mantri Kisan Samman Nidhi provides ₹6,000 per year in three 4-monthly installments of ₹2,000 each to eligible farmer families.",
          "The Department of Agriculture and Farmers Welfare mandates three strict prerequisites before any installment can be credited to an account:",
          "Pillar 1: Mandatory Aadhaar OTP or Biometric e-KYC completed on pmkisan.gov.in.",
          "Pillar 2: Land Seeding marked as 'YES' by the state revenue department confirming cultivable land ownership.",
          "Pillar 3: Active Aadhaar-Bank Account Seeding on the National Payments Corporation of India (NPCI) Aadhaar Payment Bridge (APB).",
        ],
      },
      {
        heading: "2. How to Check Your Compliance Status Online",
        content: [
          "Visit the official portal at pmkisan.gov.in and click on 'Know Your Status'.",
          "Enter your PM-Kisan Registration Number (or search using your linked mobile / Aadhaar number) and solve the captcha.",
          "Inspect the 'Eligibility Status' dashboard. Check whether 'e-KYC Status', 'Land Seeding', and 'Aadhaar Bank Account Seeding Status' all show green checkmarks ('YES').",
          "If 'Land Seeding' is 'NO', you must submit your land ownership document (Khatauni / Jamabandi / RoR) along with Aadhaar to your local Patwari, Lekhpal, or District Agriculture Officer.",
        ],
        tips: "Crucial Distinction: Linking your bank account to Aadhaar for KYC does NOT automatically map it for NPCI DBT. You must explicitly submit an 'Aadhaar Seeding / Mandate Consent Form' at your bank branch requesting NPCI mapper activation.",
      },
      {
        heading: "3. Resolving DBT Rejection & Changing Bank Accounts",
        content: [
          "If your status shows 'FTO Generated: No' or 'Correction Required', check your PFMS (Public Financial Management System) record.",
          "If your existing bank has merged (e.g., Syndicate Bank with Canara Bank) or account was frozen due to dormancy, open an India Post Payments Bank (IPPB) DBT account, which auto-seeds with NPCI within 48 hours.",
          "Contact the PM-Kisan Central Helpdesk at toll-free 155261 / 1800115526 for escalation if your verified records are not approved after 30 working days.",
        ],
      },
    ],
    officialPortal: {
      name: "PM-Kisan Official Portal",
      url: "https://pmkisan.gov.in",
    },
  },
  {
    id: "online-rti-application-filing-appeals",
    category: "Legal & Transparency",
    title: "How to File an Online RTI Application for Delayed Public Services (Sections 6 & 19)",
    readTime: "7 min read",
    lastUpdated: "September 2026",
    summary:
      "A practical legal guide to invoking the Right to Information Act, 2005 to obtain certified file notings, inspection of records, and explanations for delayed citizen applications.",
    sections: [
      {
        heading: "1. The Statutory Framework of the RTI Act, 2005",
        content: [
          "Under Section 6(1) of the Right to Information Act, 2005, any Indian citizen has the statutory right to request information from any Public Authority.",
          "A Public Information Officer (PIO) is legally bound to provide the requested information or formal rejection with reasons within 30 calendar days.",
          "If the information sought concerns the life or liberty of a person, Section 7(1) stipulates that it must be provided within 48 hours.",
        ],
      },
      {
        heading: "2. How to Draft an Effective RTI for Delayed Services",
        content: [
          "Do not ask subjective questions like 'Why has my file not been approved?'. Instead, request factual, verifiable administrative records.",
          "Recommended Query 1: 'Please provide certified copies of the daily progress report and file movements regarding Application Ref No. [XYZ] filed on [Date].'",
          "Recommended Query 2: 'Please provide the name and designation of the officers with whom my application has been pending, alongside dates of receipt and dispatch.'",
          "Recommended Query 3: 'Please provide certified copy of the Citizen Charter of your department stipulating the maximum time allowed for service delivery.'",
        ],
        tips: "Keep your application concise (under 3,000 characters). Avoid emotional statements; focus strictly on dates, application reference numbers, and requests for certified copies of records.",
      },
      {
        heading: "3. Step-by-Step Online Filing & First Appeal Procedure",
        content: [
          "For Central ministries and departments, file online at rtionline.gov.in. Pay the statutory application fee of ₹10 via UPI, debit card, or net banking (BPL citizens are exempt).",
          "For State Government departments, file on the respective state RTI portal (e.g., rti.maharashtra.gov.in, rtionline.karnataka.gov.in) or submit Form A physically to the PIO.",
          "If no response is received within 30 days, file a First Appeal under Section 19(1) of the RTI Act to the First Appellate Authority (FAA) within 30 days of the deadline expiry.",
          "If the FAA also fails to decide within 45 days, file a Second Appeal under Section 19(3) before the Central Information Commission (CIC) or State Information Commission (SIC), which has powers to impose penalties of ₹250 per day up to ₹25,000 on defaulting officers under Section 20.",
        ],
      },
    ],
    officialPortal: {
      name: "Central RTI Online Portal",
      url: "https://rtionline.gov.in",
    },
  },
  {
    id: "digilocker-legal-validity-it-rules",
    category: "Legal & Transparency",
    title: "Legal Validity of DigiLocker Documents under Rule 9A of IT Rules 2016",
    readTime: "5 min read",
    lastUpdated: "September 2026",
    summary:
      "Know your statutory rights when presenting digital Driving Licences, Registration Certificates (RC), and school marksheets to police officers, traffic authorities, and universities.",
    sections: [
      {
        heading: "1. The Law: Rule 9A of the IT Rules, 2016",
        content: [
          "On March 23, 2016, the Ministry of Electronics and Information Technology (MeitY) notified the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016.",
          "Rule 9A explicitly provides: 'The digital records in a DigiLocker account are legally recognized on par with the original physical documents issued by the respective issuing authority.'",
          "Furthermore, Section 4 of the Information Technology Act, 2000 grants full legal recognition to electronic records wherever any law requires documents to be in physical or printed form.",
        ],
      },
      {
        heading: "2. Parivahan & Traffic Police Advisories",
        content: [
          "The Ministry of Road Transport and Highways (MoRTH) issued standard operating procedures (SOP) dated December 17, 2018 (Letter No. RT-11036/64/2017-MVL).",
          "This directive explicitly instructs all State Traffic Police and Transport Departments that electronic copies of Driving Licences, Vehicle Registration Certificates, Insurance, and PUC Certificates available in DigiLocker or mParivahan must be treated as genuine.",
          "Traffic police officers cannot insist on physical production or seize physical documents if the citizen presents a verified document via DigiLocker.",
        ],
        tips: "Important Distinction: DigiLocker documents are valid only if pulled directly from the official issuing authority repository (showing the verified checkmark and QR code). A self-uploaded scanned PDF stored in the 'Uploaded' section does NOT qualify under Rule 9A.",
      },
      {
        heading: "3. What to Do If an Official Refuses DigiLocker",
        content: [
          "Step 1: Politely show the official QR code and the DigiLocker verification badge embedded on the certificate.",
          "Step 2: Reference MoRTH Notification RT-11036/64/2017-MVL and Rule 9A of the IT Rules 2016.",
          "Step 3: If an unauthorized challan is issued for failure to produce physical documents, you can contest the citation before the traffic court or Lok Adalat presenting the digital timestamp.",
        ],
      },
    ],
    officialPortal: {
      name: "DigiLocker Official Portal",
      url: "https://www.digilocker.gov.in",
    },
  },
  {
    id: "state-revenue-certificates-guide",
    category: "Identity & Tax",
    title: "Comprehensive Guide to Applying for State Domicile, Caste & Income Certificates",
    readTime: "8 min read",
    lastUpdated: "September 2026",
    summary:
      "A complete walkthrough of state revenue administration hierarchies, mandatory proofs, local enquiry procedures, and statutory delivery timeframes across Indian states.",
    sections: [
      {
        heading: "1. Revenue Administrative Structure for Civil Certificates",
        content: [
          "Revenue certificates—including Domicile (Niwas), Caste (Jati), Income (Aay), and Non-Creamy Layer (NCL)—are state subjects administered through District Magistrates (DM), Sub-Divisional Magistrates (SDM), and Tehsildars.",
          "Applications are processed via state-specific e-District or RTPS platforms (e.g., e-District Delhi, Aaple Sarkar Maharashtra, Seva Sindhu Karnataka, RTPS Bihar, edistrict.up.gov.in).",
          "After online submission, files route to the local Patwari, Talathi, or Lekhpal for local demographic and physical residency verification.",
        ],
      },
      {
        heading: "2. Document Checklist by Certificate Type",
        content: [
          "Income Certificate: Salary slips / Form 16 (for salaried), ITR acknowledgments (for self-employed), or Patwari land yield report (for agricultural households), plus electricity bill and Aadhaar.",
          "Domicile / Residence Certificate: Continuous residence proof of 10–15 years in the state (such as school leaving certificates, father's land record, electricity bills, or voter card).",
          "Caste Certificate: Paternal lineage caste proof (Father's caste certificate, 1950/1966 baseline revenue records, or ancestral land documents showing caste notation).",
          "EWS Certificate: Gross annual household income below ₹8 Lakhs, agricultural land less than 5 acres, residential flat less than 1,000 sq ft, or residential plot under specified municipal limits.",
        ],
        tips: "Crucial Rule: Caste is inherited exclusively from the father under Indian civil law. Maternal caste certificates are legally inadmissible for issuing SC/ST/OBC credentials.",
      },
      {
        heading: "3. Timelines & Right to Public Services Appeals",
        content: [
          "Most state RTPS legislations guarantee certificate issuance within 15 to 21 working days.",
          "If the designated officer fails to deliver within the statutory timeline without communicating reasons in writing, you can lodge a First Appeal directly on the state RTPS portal.",
          "State RTPS appellate officers have statutory authority to penalize defaulting revenue officials and order immediate certificate dispatch.",
        ],
      },
    ],
    officialPortal: {
      name: "National e-District Service",
      url: "https://services.india.gov.in",
    },
  },
  {
    id: "ayushman-bharat-abha-health-card",
    category: "Health & Social",
    title: "ABHA Health ID & Ayushman Bharat Card: Eligibility, Creation & Digital Records",
    readTime: "6 min read",
    lastUpdated: "September 2026",
    summary:
      "Learn the difference between Ayushman Bharat PM-JAY ₹5 Lakh health insurance and the ABHA 14-digit digital health account, and how senior citizens 70+ can enroll.",
    sections: [
      {
        heading: "1. Distinguishing ABHA from Ayushman PM-JAY",
        content: [
          "ABHA (Ayushman Bharat Health Account): A 14-digit unique health identifier under the Ayushman Bharat Digital Mission (ABDM). It functions as a digital health record locker allowing seamless sharing of lab reports and prescriptions across hospitals.",
          "Ayushman PM-JAY (Pradhan Mantri Jan Arogya Yojana): A cashless health insurance scheme providing up to ₹5 Lakh per family per year for secondary and tertiary inpatient hospitalization across empaneled hospitals.",
          "Every citizen can generate an ABHA ID free of charge, regardless of income. However, PM-JAY coverage is subject to specific income or demographic eligibility criteria.",
        ],
      },
      {
        heading: "2. New Universal Coverage for Senior Citizens Aged 70+",
        content: [
          "Under the recent Union Cabinet expansion, all senior citizens aged 70 and above are eligible for Ayushman PM-JAY health coverage of up to ₹5 Lakh per year on a family basis, regardless of socio-economic status.",
          "Senior citizens already covered under other public health schemes (such as CGHS, ECHS, or CAPF) can choose either their existing scheme or Ayushman Bharat PM-JAY.",
          "Private health insurance or ESIC policyholders are also eligible to avail of this top-up benefit.",
        ],
        tips: "Preparation Tip: The sole requirement for senior citizens aged 70+ is an active Aadhaar card with verified date of birth. Enrolment is completed via the Ayushman App or beneficiary.nha.gov.in.",
      },
      {
        heading: "3. How to Generate Your ABHA ID in 3 Minutes",
        content: [
          "Step 1: Visit healthid.ndhm.gov.in or download the ABHA App from the official app store.",
          "Step 2: Choose 'Create ABHA using Aadhaar' and enter your 12-digit Aadhaar number.",
          "Step 3: Enter the 6-digit OTP received on your Aadhaar-registered mobile number.",
          "Step 4: Create a custom ABHA address (e.g., yourname@abdm) and download your digital ABHA QR Card.",
        ],
      },
    ],
    officialPortal: {
      name: "National Health Authority",
      url: "https://beneficiary.nha.gov.in",
    },
  },
  {
    id: "passport-tatkaal-police-verification",
    category: "Transport & Passport",
    title: "Passport Seva: Tatkaal vs Normal Processing, Annexures & Police Verification Guide",
    readTime: "9 min read",
    lastUpdated: "September 2026",
    summary:
      "A complete operational breakdown of the Ministry of External Affairs (MEA) Passport Seva system: fee schedules, mandatory document combinations for Tatkaal, mPassport Police verification procedures, and overcoming adverse remarks.",
    sections: [
      {
        heading: "1. Normal vs. Tatkaal Scheme Comparison",
        content: [
          "Standard Normal Application: Statutory fee is ₹1,500 for a 36-page booklet (or ₹2,000 for a 60-page jumbo booklet). Pre-police verification is mandatory before passport printing and dispatch. Standard delivery timeline is 15 to 25 working days.",
          "Tatkaal Scheme: Requires an urgent processing surcharge of ₹2,000 (total ₹3,500 for 36 pages). Passports under Tatkaal are printed and dispatched on a 'Post-Police Verification' basis within 1 to 3 business days of biometric appointment clearance.",
          "Not all citizens qualify for Tatkaal: Major name changes, adoption cases, minors with single parents living abroad, or applicants with adverse police records must apply exclusively under the Normal scheme.",
        ],
      },
      {
        heading: "2. The Mandatory 3-Document Proof Rule for Tatkaal",
        content: [
          "Under MEA guidelines, adult Tatkaal applicants must provide at least THREE documents from the prescribed list, with exact matching names and father's name:",
          "List includes: 1. Aadhaar Card / e-Aadhaar with valid QR code, 2. Electors Photo Identity Card (EPIC Voter ID), 3. PAN Card, 4. Bank Passbook from scheduled public/private bank with photograph, 5. Driving Licence, 6. Birth Certificate issued by Municipal Registrar under RBD Act, 7. Service Identity Card for PSU / Govt employees.",
          "Crucial caveat: All three documents must bear identical spellings of the applicant's name and paternal names. Any discrepancies will cause the Passport Granting Officer (GO) to convert the application to Normal status on the spot.",
        ],
        tips: "Annexure F (Verification Certificate from Gazetted Officer) is NO LONGER required for Tatkaal. You only need the 3 standard identity proofs from the approved list.",
      },
      {
        heading: "3. Police Verification Workflow & mPassport App",
        content: [
          "Once biometric capture and document scrutiny complete at the PSK/POPSK, the file moves electronically to the District Police Headquarters (DPHQ) and routes to your local Police Station.",
          "Beat constables use the GPS-enabled mPassport Police tablet app to visit your residential address, take a live geo-tagged photo, and record verification statements from two neighborhood witnesses.",
          "If you reside in rented accommodation, keep your registered rent agreement (registered with Sub-Registrar) or utility bills along with the landlord's declaration ready. Living at a residence for less than 1 year requires verification at your previous address as well.",
          "If the police submit an 'Adverse' report (due to unavailability or address discrepancy), do not pay unauthorized speed money; immediately visit the Regional Passport Office (RPO) with an online enquiry appointment to submit a clarification letter with supporting proofs.",
        ],
      },
    ],
    officialPortal: {
      name: "Passport Seva Portal (MEA)",
      url: "https://www.passportindia.gov.in",
    },
  },
  {
    id: "epfo-uan-transfer-withdrawal-grievance",
    category: "Welfare & Agri",
    title:
      "EPFO & UAN Comprehensive Manual: PF Transfer, Joint Declaration Corrections & EPFiGMS Grievance Escalation",
    readTime: "10 min read",
    lastUpdated: "September 2026",
    summary:
      "A complete guide to navigating the Employees' Provident Fund Organisation (EPFO) Unified Member Portal: seamless online PF transfers, Form 19/10C/31 withdrawal rules, Joint Declaration (JD) profile corrections, and filing time-bound EPFiGMS grievances.",
    sections: [
      {
        heading: "1. Mandatory UAN-Aadhaar-Bank KYC Seeding",
        content: [
          "The Universal Account Number (UAN) is a 12-digit permanent identifier assigned to formal sector employees. Before any online withdrawal or transfer can be initiated, three KYC elements must show 'VERIFIED' status on unifiedportal-mem.epfindia.gov.in:",
          "1. Aadhaar Seeding: Name, DOB, and Gender on UAN must match UIDAI records exactly. Aadhaar OTP verification is compulsory for claims.",
          "2. Bank Account & IFSC: Bank details must be approved with the employer's digital signature (DSC). The member's name printed on the chequebook/passbook must match the EPF account.",
          "3. PAN Seeding: Required to prevent maximum marginal tax rate (34.6%) deduction on withdrawals made before completing 5 years of continuous service.",
        ],
      },
      {
        heading: "2. Form Types: 19 (PF), 10C (Pension), and 31 (Advance)",
        content: [
          "Form 19 (Final Settlement): Applicable only after leaving service and remaining unemployed for at least 2 consecutive months (or retiring after age 58). Withdraws the employee and employer provident fund shares plus accumulated compound interest.",
          "Form 10C (Pension Withdrawal Benefit): Available to members with less than 10 years of total contributory service. For members with 10 or more years of service, pension amount cannot be withdrawn in lump sum; a Scheme Certificate is issued to guarantee monthly pension under EPS-95 upon reaching age 58.",
          "Form 31 (Non-Refundable Advance): Allowed during active service for specified grounds: Medical illness of self/dependents (Para 68J, no service limit), House construction/renovation (Para 68B, 5 years service), Marriage of self/siblings/children (Para 68K, 7 years service), and Natural calamities.",
        ],
        tips: "Tax Alert: If your total service across all employers is less than 5 continuous years (60 months), EPF withdrawals over ₹50,000 attract 10% TDS (with PAN) or 20% TDS (without PAN). Submit Form 15G (or 15H for senior citizens) if your total estimated annual income falls below the basic tax exemption limit.",
      },
      {
        heading: "3. Online Joint Declaration (JD) & EPFiGMS Escalation",
        content: [
          "Previously, fixing errors in Father's Name, Date of Joining (DOJ), or Date of Exit (DOE) required physical paper forms signed by employers. EPFO now provides a fully digital Joint Declaration (JD) module under 'Manage' > 'Joint Declaration' on the Unified Portal.",
          "Members can upload supporting documents (Aadhaar, Passport, PAN, or Service Book) and submit requests directly. The employer reviews and signs digitally, after which the jurisdictional EPFO Field Office approves within 15 working days.",
          "If your claim is rejected arbitrarily or delayed past 20 days, lodge a formal grievance on the EPFiGMS portal (epfigms.gov.in). Citing your UAN and claim ID triggers a statutory 15-day compliance notice to the regional PF Commissioner.",
        ],
      },
    ],
    officialPortal: {
      name: "EPFO Unified Member Portal",
      url: "https://unifiedportal-mem.epfindia.gov.in",
    },
  },
  {
    id: "driving-licence-sarathi-ll-dl-renewal",
    category: "Transport & Passport",
    title:
      "Driving Licence on Parivahan Sarathi: Online Learner's Licence (LL) Test, Slot Booking & Renewal Grace Period",
    readTime: "8 min read",
    lastUpdated: "September 2026",
    summary:
      "Step-by-step instructions for obtaining a Learner's Licence via contactless home exam, booking permanent DL track driving tests, understanding the 1-year renewal grace period under CMVR, and applying for an International Driving Permit (IDP).",
    sections: [
      {
        heading: "1. Contactless Learner's Licence (LL) Test from Home",
        content: [
          "Under the Ministry of Road Transport and Highways (MoRTH) contactless services scheme, citizens in nearly all Indian states can obtain a Learner's Licence without visiting the Regional Transport Office (RTO):",
          "Step 1: Visit sarathi.parivahan.gov.in, select your State, and click 'Apply for Learner Licence'.",
          "Step 2: Choose 'Submit via Aadhaar Authentication'. Demographic details and photograph are pulled directly from UIDAI.",
          "Step 3: Upload signature and Form 1 (Self-Declaration as to Physical Fitness).",
          "Step 4: Complete the online Road Safety Tutorial video and take the 15-question multiple-choice audio-visual exam from your webcam-enabled PC/phone. Scoring 9 out of 15 (60%) instantly generates your downloadable, legally valid Learner's Licence valid for 6 months across India.",
        ],
      },
      {
        heading: "2. Permanent Driving Licence (DL) Track Test & Slot Booking",
        content: [
          "Eligibility: You can apply for a permanent DL 30 days after the issuance of your LL, and before its 180-day expiry.",
          "Book your Driving Skill Test slot on Sarathi portal. Select your local Automated Driving Testing Track (ADTT).",
          "Test Day Protocol: Bring your vehicle (with valid RC, PUC, and Insurance), LL printout, fee receipt, and an accompanying person holding a valid permanent DL.",
          "The ADTT utilizes computer-vision cameras and biometric sensors to evaluate reverse parallel parking, 8-figure steering, gradient stop-and-go hill climbing, and emergency braking without human examiner discretion.",
        ],
        tips: "Age Rules: 16 years for gearless motorcycles/scooters below 50cc (with parental consent); 18 years for motor cars and geared motorcycles (LMV/MCWG); 20 years for commercial/transport transport vehicles.",
      },
      {
        heading: "3. Renewal Timelines & The 1-Year CMVR Grace Period",
        content: [
          "Under Section 14 of the Motor Vehicles (Amendment) Act 2019, a driving licence can be renewed up to ONE YEAR BEFORE its expiry and up to ONE YEAR AFTER its expiry without having to retake the driving test.",
          "If renewed within this 1-year window, the renewal is effective from the date of expiry. A standard statutory fee of ₹200 applies.",
          "Critical Penalty: If you fail to renew within 1 year of expiry, Section 15(4) mandates that you must take the driving skill test again from scratch at the RTO track before renewal is granted.",
          "Applicants aged 40 years and above must mandatorily upload Form 1A signed by a registered medical practitioner with valid MCI/NMC registration.",
        ],
      },
    ],
    officialPortal: {
      name: "Parivahan Sarathi Portal",
      url: "https://sarathi.parivahan.gov.in",
    },
  },
  {
    id: "voter-id-form6-form8-epic-download",
    category: "Legal & Transparency",
    title:
      "Voter ID (EPIC): Form 6 New Registration, Form 8 Corrections, e-EPIC PDF Download & Constituency Transfer",
    readTime: "7 min read",
    lastUpdated: "September 2026",
    summary:
      "A complete operational manual for the Election Commission of India (ECI) Voters Portal: registering at 18 across the four annual qualifying dates, updating address, obtaining replacement EPIC cards, and downloading digitally signed e-EPIC PDFs.",
    sections: [
      {
        heading: "1. The Four Annual Qualifying Dates & Form 6",
        content: [
          "Following amendments to the Representation of the People Act, 1950, young citizens no longer need to wait an entire year to enroll. ECI provides four annual qualifying dates: January 1, April 1, July 1, and October 1.",
          "Citizens turning 18 on or before any of these dates can submit advance Form 6 online at voters.eci.gov.in.",
          "Required Documents: Proof of Age (Birth Certificate, 10th marksheet, Aadhaar, Passport) and Proof of Ordinary Residence (Electricity/water bill, bank passbook, Aadhaar, or registered rent agreement).",
        ],
      },
      {
        heading: "2. Form 8: Corrections, Shifting Residence & Photo Updates",
        content: [
          "Form 8 is the unified application for four distinct electoral services:",
          "1. Shifting of Residence: Transferring your voter enrollment either within the same Assembly Constituency (Intra-Assembly) or to a different Constituency across districts or states (Inter-Assembly). You do NOT need to cancel your old EPIC; the system auto-deletes the old record upon approval.",
          "2. Correction of Entries: Correcting typos in Name, Gender, Date of Birth, Relation Type, Relative Name, or Mobile Number.",
          "3. Issue of Replacement EPIC: Requesting a fresh physical PVC card without corrections (due to loss, mutilation, destruction by fire/flood, or theft).",
          "4. Marking of Persons with Disabilities (PwD): For special polling station assistance and postal ballot facilities.",
        ],
      },
      {
        heading: "3. Downloading Digitally Signed e-EPIC PDF in Minutes",
        content: [
          "The e-EPIC is an official, non-editable, digitally signed portable document format (PDF) version of your Electoral Photo Identity Card that can be saved in DigiLocker or printed.",
          "Step 1: Visit voters.eci.gov.in and click 'e-EPIC Download'.",
          "Step 2: Enter your 10-character alphanumeric EPIC Number or Form Reference Number and select your State.",
          "Step 3: Authenticate with the 6-digit OTP sent to your linked mobile number.",
          "Step 4: Download your authenticated e-EPIC containing the cryptographic ECI QR code. Under ECI directives, printed e-EPIC is recognized on par with physical plastic voter cards at all polling booths.",
        ],
        tips: "If your voter record does not have an active mobile number linked, submit Form 8 for 'Correction of Entries' checking only 'Mobile Number'. Linking is approved within 7 to 10 days.",
      },
    ],
    officialPortal: {
      name: "ECI Voters Service Portal",
      url: "https://voters.eci.gov.in",
    },
  },
  {
    id: "ews-obc-ncl-income-wealth-criteria",
    category: "Identity & Tax",
    title:
      "EWS & OBC Non-Creamy Layer (NCL) Income Calculation: 3-Year Gross Income Rule, Agricultural Land & Wealth Ceiling Criteria",
    readTime: "9 min read",
    lastUpdated: "September 2026",
    summary:
      "A legal and administrative dissection of eligibility guidelines for Economically Weaker Section (EWS) and Other Backward Classes Non-Creamy Layer (OBC-NCL) certificates under DoPT notifications, detailing income inclusions, exclusions, and parental status rules.",
    sections: [
      {
        heading: "1. Core Difference: EWS vs. OBC Non-Creamy Layer",
        content: [
          "EWS (10% Central Reservation): Meant for citizens belonging to General (unreserved) categories whose gross family annual income is below ₹8 Lakhs from all sources during the financial year prior to the year of application, and who do not own disqualified property assets.",
          "OBC Non-Creamy Layer (27% Central Reservation): Meant for communities listed on the Central OBC Schedule. Status is determined based on the PARENTS' status and income over the preceding 3 consecutive financial years (DoPT OM No. 36033/1/2013-Estt).",
        ],
      },
      {
        heading: "2. The Crucial Income Exclusion Rule for OBC-NCL",
        content: [
          "The single most common ground for erroneous rejection by revenue tehsildars is confusing candidate's salary with parental business income.",
          "Under DoPT Office Memorandum No. 36012/22/93-Estt.(SCT), for determining Creamy Layer among parents who are not Group A/B civil servants:",
          "Income from Salary and Income from Agricultural Land are EXCLUDED from the calculation of the ₹8 Lakh income threshold for OBC-NCL.",
          "The income of the applicant himself/herself, or of the applicant's spouse, is COMPLETELY IRRELEVANT. Only parental income from other business, profession, or commercial property is evaluated over the past 3 consecutive financial years.",
        ],
        tips: "Key Legal Rule: If both parents are government employees appointed directly to Group C or D posts (or promoted to Group A/B after age 40), their children fall under Non-Creamy Layer regardless of total salary earned.",
      },
      {
        heading: "3. EWS Asset Disqualification Ceilings",
        content: [
          "Unlike OBC-NCL, EWS status includes strict physical asset and wealth ownership ceilings. A household is excluded from EWS regardless of income if they own any of the following:",
          "• 5 acres of agricultural land and above.",
          "• Residential flat of 1,000 sq ft and above.",
          "• Residential plot of 100 sq yards (900 sq ft) and above in notified municipalities.",
          "• Residential plot of 200 sq yards (1,800 sq ft) and above in areas other than notified municipalities.",
          "Properties held across different geographical locations by the family (applicant, parents, spouse, and minor children) are clubbed together for asset determination.",
        ],
      },
    ],
    officialPortal: {
      name: "National Portal of India — Service Directory",
      url: "https://services.india.gov.in",
    },
  },
  {
    id: "cpgrams-public-grievance-escalation",
    category: "Legal & Transparency",
    title:
      "CPGRAMS Central Public Grievance Portal: Drafting Effective Complaints, Tracking Status & Appellate Authority Escalation",
    readTime: "8 min read",
    lastUpdated: "September 2026",
    summary:
      "A complete tactical guide to using the Centralised Public Grievance Redress and Monitoring System (CPGRAMS): statutory 21-day resolution mandates, drafting evidence-backed complaints, and triggering independent Appellate Officer reviews.",
    sections: [
      {
        heading: "1. The Statutory Framework of CPGRAMS & 21-Day Mandate",
        content: [
          "CPGRAMS (pgportal.gov.in) is operated by the Department of Administrative Reforms and Public Grievances (DARPG) under the Ministry of Personnel, Public Grievances and Pensions.",
          "Under updated DARPG guidelines, all Central Ministries, Departments, Public Sector Undertakings (PSUs), and Nationalised Banks are legally mandated to resolve citizen grievances within a maximum timeframe of 21 calendar days.",
          "Each organization has a designated Senior Nodal Grievance Officer whose performance is tracked directly by the Prime Minister's Office (PMO) PRAGATI review system.",
        ],
      },
      {
        heading: "2. Drafting a Complaint That Officers Cannot Ignore",
        content: [
          "Grievance portals receive millions of vague complaints that get dismissed with boiler-plate responses. To ensure decisive executive action, follow this 4-part structure:",
          "Part 1 — Context & Reference: State your application/reference number, service sought, filing date, and the public office where the delay or grievance occurred.",
          "Part 2 — Citizen Charter Violation: Cite the published Citizen Charter delivery timeline for that service (e.g., 'Citizen Charter promises passport reissue within 15 days; 48 days have elapsed without communication').",
          "Part 3 — Prior Communications: Briefly list unsuccessful branch visits, emails, or helpline ticket numbers.",
          "Part 4 — Specific Relief Demanded: Demand specific administrative outcomes (e.g., 'Immediate dispatch of dispatched certificate, or written explanation with file notings detailing cause of pendency').",
        ],
        tips: "Always attach single-page consolidated PDF evidence under 4MB containing acknowledgment receipts and official correspondence. Avoid generic emotional rants.",
      },
      {
        heading: "3. How to File an Appeal Against Unsatisfactory Closures",
        content: [
          "Public authorities often close tickets with generic replies like 'Matter forwarded to field office for appropriate action'. Citizens have statutory appeal rights:",
          "Step 1: When a grievance is closed, the citizen receives an SMS/email with an option to rate the resolution from 1 (Poor) to 5 (Excellent).",
          "Step 2: If rated Poor or Unsatisfactory, click 'File Appeal' within 30 days of the closure date.",
          "Step 3: The appeal bypasses the original handling officer and escalates directly to the designated Appellate Authority (an officer of Joint Secretary or Director rank).",
          "Step 4: The Appellate Authority has 30 days to independently review the file, overrule improper closures, and order corrective action.",
        ],
      },
    ],
    officialPortal: {
      name: "CPGRAMS Official Portal",
      url: "https://pgportal.gov.in",
    },
  },
  {
    id: "ration-card-onorc-portability-nfsa",
    category: "Welfare & Agri",
    title:
      "One Nation One Ration Card (ONORC): National Food Security Act (NFSA) Entitlement Portability & Biometric e-PoS Rules",
    readTime: "7 min read",
    lastUpdated: "September 2026",
    summary:
      "Understand your statutory rights under the National Food Security Act (NFSA) 2013 and ONORC portability: lifting foodgrains anywhere in India, partial family quota splits, solving biometric e-PoS failures, and preventing dealer overcharging.",
    sections: [
      {
        heading: "1. NFSA Statutory Entitlements & Pricing Structure",
        content: [
          "Under the National Food Security Act (NFSA) 2013 and the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY):",
          "Priority Household (PHH) Beneficiaries: Entitled to 5 kg of foodgrains (rice/wheat/coarse grains) per person per month.",
          "Antyodaya Anna Yojana (AAY) Families: Entitled to 35 kg of foodgrains per family per month, regardless of family size.",
          "Under Central Government orders effective across all States and UTs, PMGKAY provides these foodgrains completely FREE OF COST to all NFSA beneficiaries at Fair Price Shops (FPS). Fair Price Shop dealers are legally barred from charging any money for monthly NFSA entitlements.",
        ],
      },
      {
        heading: "2. How ONORC Portability Works Across States",
        content: [
          "The One Nation One Ration Card (ONORC) technology enables migrant workers, daily wagers, and temporary residents to lift their food grains from ANY Fair Price Shop equipped with an electronic Point of Sale (e-PoS) device anywhere in India:",
          "No State Transfer Needed: Migrants do NOT need to surrender their home state ration card or register a fresh card in their workplace state.",
          "Family Split Quotas: The system supports partial lifting. For example, if a family has 4 members and 1 works in Mumbai while 3 remain in Bihar, the migrant can lift 1 share (5 kg) in Mumbai, and the family in Bihar can lift the remaining 3 shares (15 kg) from their village FPS.",
          "Authentication: Any enrolled family member whose Aadhaar is linked to the ration card can authenticate via fingerprint or iris scan on the e-PoS device.",
        ],
        tips: "Download the official 'Mera Ration' App (developed by NIC) to check nearest Fair Price Shops, view monthly entitlement balances, check Aadhaar seeding status, and register inter-state portability.",
      },
      {
        heading: "3. Handling Biometric Mismatches & Dealer Malpractice",
        content: [
          "Manual laborers and senior citizens often face fingerprint erosion causing e-PoS authentication rejections. Government rules provide three mandatory safeguards:",
          "1. Iris Scanner Fallback: All Fair Price Shops are mandated to maintain iris scanners for beneficiaries whose fingerprints fail.",
          "2. Nominee / Proxy Provision: Senior citizens (65+) and persons with severe disabilities who cannot visit the shop can register an authorized family proxy to lift ration on their behalf.",
          "3. Aadhaar OTP Fallback: If biometrics fail completely, the dealer can trigger an OTP to the registered mobile number.",
          "If a dealer refuses portability, demands illegal payments, or refuses weighing in your presence, dial National Food Helpline 1967 or 1800-series state food helplines immediately.",
        ],
      },
    ],
    officialPortal: {
      name: "Department of Food & Public Distribution (Annavitran)",
      url: "https://nfsa.gov.in",
    },
  },
  {
    id: "pahal-lpg-subsidy-dbtl-seeding",
    category: "Welfare & Agri",
    title:
      "PAHAL (DBTL) LPG Subsidy & Pradhan Mantri Ujjwala Yojana: Bank Aadhaar Seeding, Cylinder Subsidy Status & Grievance Rectification",
    readTime: "7 min read",
    lastUpdated: "September 2026",
    summary:
      "Learn how the Direct Benefit Transfer for LPG (DBTL / PAHAL) operates, how to verify your 17-digit LPG ID mapping with the NPCI Aadhaar payment bridge, and how to resolve missed subsidy credits for Indane, HP Gas, and Bharat Gas.",
    sections: [
      {
        heading: "1. The PAHAL (DBTL) Architecture & Pradhan Mantri Ujjwala",
        content: [
          "The Direct Benefit Transfer for LPG (PAHAL) scheme credits domestic LPG subsidy directly into the beneficiary's bank account, eliminating black-marketing of subsidized cylinders.",
          "Under the Pradhan Mantri Ujjwala Yojana (PMUY), targeted poor households receive a substantial per-cylinder subsidy (currently ₹300 per 14.2 kg cylinder for up to 12 refills per fiscal year) transferred within 24–48 hours of cylinder delivery.",
          "General consumers: Domestic non-PMUY consumers receive standard central market price adjustments when statutory crude benchmarks exceed specified baseline thresholds.",
        ],
      },
      {
        heading: "2. Verifying Your 17-Digit LPG ID & NPCI Seeding",
        content: [
          "To receive LPG subsidies seamlessly, three systems must be linked:",
          "1. Your 17-digit LPG ID (printed on your blue subscription voucher or gas booking passbook) must be linked to your distributor profile on mylpg.in.",
          "2. Your Aadhaar must be submitted to your gas agency (IOCL Indane, HPCL HP Gas, or BPCL Bharat Gas) via biometric or OTP authentication.",
          "3. Your bank account must have active NPCI Aadhaar Payment Bridge (APB) mapping. If you changed your primary salary or savings account recently, the subsidy might route to your older or dormant account.",
        ],
        tips: "Visit mylpg.in, select your oil company, and click 'View Cylinder Booking History / Subsidy Transferred' to see bank transaction reference numbers (UTR) and dates for every refill delivered.",
      },
      {
        heading: "3. Common Stoppage Reasons & How to Resume Subsidy",
        content: [
          "If your refill is delivered at market price but no subsidy credit arrives within 48 hours, check these 3 frequent causes:",
          "Cause 1 — High Income Self-Exclusion: Taxpayers whose annual taxable income (or their spouse's income) exceeded ₹10 Lakhs in the previous fiscal year under Section 139 of the IT Act are statutorily excluded from LPG subsidy under the 'Give It Up' initiative.",
          "Cause 2 — Bank Account Dormancy: If no transactions occurred in your bank account for 12 months, banks freeze incoming DBT credits. Visit your branch with KYC documents to unfreeze.",
          "Cause 3 — Missing Annual e-KYC: Distributors periodically conduct physical biometric re-verification at the agency showroom or through delivery agents using the Oil Marketing Company (OMC) smartphone app.",
          "For unresolved subsidy claims, contact the unified Petroleum & Natural Gas toll-free helpline at 1906 or register a complaint on pgportal.gov.in.",
        ],
      },
    ],
    officialPortal: {
      name: "MyLPG Central Portal",
      url: "https://mylpg.in",
    },
  },
];

export default function CitizenGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGuide, setExpandedGuide] = useState<string | null>(GUIDES[0].id);

  const categories = [
    "All",
    "Identity & Tax",
    "Transport & Passport",
    "Welfare & Agri",
    "Legal & Transparency",
    "Health & Social",
  ];

  const filteredGuides = GUIDES.filter((guide) => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-stone-900 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
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
              Main Portal
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-1.5 text-stone-700 hover:bg-stone-50"
            >
              FAQ Database
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-b from-amber-50/70 via-white to-[#FCFBF7] border-b border-stone-200 py-10 px-4 sm:px-6">
        <SEOHead
          showBreadcrumbBar={true}
          breadcrumbClassName="max-w-4xl mx-auto mb-4 flex items-center justify-center gap-1.5 text-xs text-stone-500 font-sans flex-wrap"
        />
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800">
            Authoritative Citizen Knowledge Base
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
            In-Depth Citizen e-Governance Guides
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Step-by-step procedural manuals, document verification matrices, common error
            resolutions, and statutory legal rights for major Indian central and state e-services.
          </p>

          {/* Search and Category Filters */}
          <div className="pt-4 max-w-xl mx-auto space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides (e.g., PAN demographic error, PM-Kisan e-KYC, RTI appeal)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-2xs"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guide Articles List */}
      <main className="max-w-4xl mx-auto flex-1 px-4 sm:px-6 py-8 space-y-6">
        {filteredGuides.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-600 text-sm">No guides found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredGuides.map((guide) => {
            const isExpanded = expandedGuide === guide.id;
            return (
              <article
                key={guide.id}
                id={guide.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition"
              >
                <div
                  className="p-5 sm:p-6 cursor-pointer hover:bg-stone-50/60 transition"
                  onClick={() => setExpandedGuide(isExpanded ? null : guide.id)}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                      {guide.category}
                    </span>
                    <div className="flex items-center gap-3 text-stone-500 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                      <span>•</span>
                      <span>Updated: {guide.lastUpdated}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-extrabold text-lg sm:text-xl text-stone-900 leading-snug">
                    {guide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {guide.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-xs font-bold text-amber-700 inline-flex items-center gap-1">
                      {isExpanded ? "Collapse Guide" : "Read Full Detailed Guide"}
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </span>
                    <span className="text-[11px] text-stone-400 font-medium">
                      Official Portal: {guide.officialPortal.name}
                    </span>
                  </div>
                </div>

                {/* Expanded In-Depth Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 space-y-6 text-sm text-stone-700">
                    {guide.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <h3 className="font-display font-bold text-base text-stone-900">
                          {section.heading}
                        </h3>
                        <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {section.content.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                        {section.tips && (
                          <div className="bg-amber-50/80 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 leading-relaxed">
                            {section.tips}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div>
                        <p className="font-bold text-stone-900">Official Government Gateway</p>
                        <p className="text-stone-500">
                          Never pay fees to unauthorized intermediaries. Submit your official
                          application directly on the nodal portal.
                        </p>
                      </div>
                      <a
                        href={guide.officialPortal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 px-4 py-2 rounded-lg bg-stone-900 text-white font-bold inline-flex items-center gap-1.5 hover:bg-stone-800 transition"
                      >
                        Open {guide.officialPortal.name} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} SewaNadu. Independent citizen educational guide. Not
            affiliated with the Government of India.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/editorial-policy" className="hover:underline">
              Editorial Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">
              Contact &amp; Grievances
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
