import React, { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
  }),
  component: FaqStandalonePage,
});

interface FaqRecord {
  id: string;
  category: "Identity" | "Welfare" | "Financial" | "Legal";
  views: number;
  publishedAt: string;
  tags: string[];
  question: string;
  answer: string;
}

const STATIC_FAQS: FaqRecord[] = [
  {
    id: "faq-1",
    category: "Identity",
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
    category: "Identity",
    views: 15200,
    publishedAt: "2026-08-28",
    tags: ["Aadhaar", "Mobile Link", "OTP", "Biometric"],
    question: "How can I update my mobile number or biometric credentials linked with Aadhaar?",
    answer:
      "While residential address can be updated online via the UIDAI Self-Service Portal using valid address proofs, mobile number, photo, iris, and fingerprint updates MANDATORILY require physical in-person biometric authentication at a designated Aadhaar Enrolment Centre / Aadhaar Seva Kendra (ASK).\n\nKey details:\n• No document proof is required for mobile number update.\n• A statutory fee of ₹50 is charged by UIDAI for demographic updates.\n• You can book an online appointment at ask.uidai.gov.in to skip physical queues.",
  },
  {
    id: "faq-3",
    category: "Identity",
    views: 9400,
    publishedAt: "2026-09-02",
    tags: ["ABHA", "Health ID", "Ayushman Bharat"],
    question: "What is ABHA (Ayushman Bharat Health Account) and how is it authenticated?",
    answer:
      "ABHA is a 14-digit unique health identifier issued by the National Health Authority (NHA) under the Ayushman Bharat Digital Mission (ABDM). It digitally unifies your diagnostic lab reports, clinical prescriptions, hospital discharge summaries, and insurance claims into one consent-based digital locker.\n\nAuthentication is completed in seconds using Aadhaar OTP or your Driving Licence. It is 100% free and voluntary, allowing you to share health records securely with empanelled doctors without carrying physical files.",
  },
  {
    id: "faq-4",
    category: "Identity",
    views: 7800,
    publishedAt: "2026-09-05",
    tags: ["Voter ID", "EPIC", "ECI"],
    question: "How do I rectify errors in my Voter ID Card (EPIC) or transfer constituency?",
    answer:
      "All voter registration services are managed centrally by the Election Commission of India (ECI) through voters.eci.gov.in:\n\n• Form 6: For fresh voter registration (citizens turning 18 or first-time electors).\n• Form 8: For correction of entries (name, photo, DOB, gender) and shifting of residence (intra or inter-constituency).\n• Form 7: For deletion or objection to inclusion of name.\n\nOnline submissions generate an Application Reference Number (ARN) for tracking. Booth Level Officers (BLO) verify physical residence within 15–21 days.",
  },
  {
    id: "faq-5",
    category: "Welfare",
    views: 22100,
    publishedAt: "2026-07-20",
    tags: ["PM-Kisan", "DBT", "e-KYC", "Agriculture"],
    question: "Why has my PM-Kisan Samman Nidhi installment stopped and how do I resume it?",
    answer:
      "PM-Kisan releases ₹6,000 annually in three installments of ₹2,000 via Direct Benefit Transfer. If an installment is withheld, it is almost always due to one of three compliance gaps:\n\n1. Mandatory e-KYC Pending: Must be completed via OTP on pmkisan.gov.in or biometric scan at a CSC.\n2. Land Seeding Status 'NO': Your land ownership records (Khatauni/RoR) must be digitally verified and linked to your farmer profile by your state revenue/patwari office.\n3. Bank Account Not Seeded with NPCI: Your bank account must be mapped on the NPCI Aadhaar Payment Bridge (APB).\n\nCheck your compliance status under 'Know Your Status' on pmkisan.gov.in to identify the exact blocking reason.",
  },
  {
    id: "faq-6",
    category: "Welfare",
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
    category: "Welfare",
    views: 11200,
    publishedAt: "2026-08-22",
    tags: ["Ration Card", "ONORC", "NFSA", "Portability"],
    question: "How does One Nation One Ration Card (ONORC) work for migrant workers across states?",
    answer:
      "Under the ONORC framework implemented by the Department of Food and Public Distribution, any NFSA (National Food Security Act) ration card holder can lift their entitled subsidized or free food grains from ANY Fair Price Shop (FPS) across India:\n\n• Biometric e-PoS Verification: Ration is disbursed using biometric authentication (fingerprint or iris scan) of any enrolled family member on the electronic Point of Sale device.\n• No Card Transfer Required: Migrants do NOT need to surrender their home state ration card or apply for a fresh card in their destination state.\n• Partial Lifting Allowed: Family members back home can lift their share of food grains, while the migrant worker lifts their individual quota at their workplace.",
  },
  {
    id: "faq-8",
    category: "Financial",
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
    category: "Financial",
    views: 8900,
    publishedAt: "2026-09-01",
    tags: ["Income Certificate", "Household Income", "Tehsildar"],
    question: "How is family annual income calculated for state income and EWS certificates?",
    answer:
      "Revenue authorities calculate gross annual household income by aggregating income from all formal and informal sources of all immediate family members (applicant, parents, spouse, dependent siblings/children):\n\nIncluded components:\n• Gross salary, pensions, and professional income.\n• Business earnings, interest from deposits, and dividends.\n• Agricultural yield/income from farmland (except where explicitly excluded by state EWS criteria).\n• Rental receipts from properties.\n\nExclusions:\n• Agricultural labor wages and occasional bursaries (in certain state schedules).\n\nDocumentation required includes salary slips/Form 16 for employed individuals, ITR acknowledgment for business owners, and local Patwari/Tehsildar land revenue verification reports.",
  },
  {
    id: "faq-10",
    category: "Financial",
    views: 6400,
    publishedAt: "2026-09-04",
    tags: ["Jeevan Pramaan", "DLC", "Pensioners", "Facial Auth"],
    question:
      "How do senior citizens submit a Digital Life Certificate (Jeevan Pramaan) from home?",
    answer:
      "Senior citizens and family pensioners are no longer required to visit the pension disbursement bank branch physically in November:\n\n• Jeevan Pramaan Face App: Using any Android smartphone with a 5MP+ camera, pensioners can download the 'Jeevan Pramaan Face App' and 'AadhaarFaceRD' service from UIDAI.\n• Live Facial Authentication: Enter Aadhaar, PPO (Pension Payment Order) number, and bank account details. The app captures live facial biometrics and instantly generates a verified Digital Life Certificate (DLC).\n• Direct Submission: The generated certificate is transmitted automatically to your pension disbursing agency (Bank, Post Office, or Treasury), ensuring uninterrupted pension payments.",
  },
  {
    id: "faq-11",
    category: "Legal",
    views: 19800,
    publishedAt: "2026-08-01",
    tags: ["DigiLocker", "IT Act", "Rule 9A", "Legal Validity"],
    question: "Are DigiLocker digital documents legally recognized on par with physical originals?",
    answer:
      "YES. Under Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016, electronic records shared via DigiLocker are legally recognized on par with original physical documents issued by the authority.\n\nFurthermore:\n• Traffic police and transport authorities are legally bound (via MoRTH notifications) to accept electronic Driving Licences and Registration Certificates (RC).\n• Universities and employers must accept cryptographically signed marksheets and degrees.\n• Passports and visa applications accept DigiLocker documents for address and birth verification.\n\nNote: Documents must be 'Issued' directly from the respective authority into DigiLocker; self-uploaded scanned PDFs do NOT possess this statutory parity.",
  },
  {
    id: "faq-12",
    category: "Legal",
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
    category: "Legal",
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
    category: "Legal",
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
    { id: "Identity", label: "Identity & Aadhaar" },
    { id: "Welfare", label: "Welfare & Subsidies" },
    { id: "Financial", label: "Financial & Tax" },
    { id: "Legal", label: "Legal & Transparency" },
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
