import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
          "In-depth step-by-step guides for Indian public services: Aadhaar-PAN demographic error resolution, PM-Kisan e-KYC, DigiLocker legal validity, RTI appeals, and state certificate applications.",
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
      { property: "og:url", content: "/citizen-guides" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/citizen-guides" }],
  }),
  component: CitizenGuidesPage,
});

interface GuideArticle {
  id: string;
  category: "Identity & Tax" | "Welfare & Agri" | "Legal & Transparency" | "Health & Social";
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
];

export default function CitizenGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGuide, setExpandedGuide] = useState<string | null>(GUIDES[0].id);

  const categories = [
    "All",
    "Identity & Tax",
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
