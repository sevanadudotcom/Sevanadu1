import React from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Clock,
  ExternalLink,
  BookOpen,
  HelpCircle,
  AlertCircle,
  Building2,
  Scale,
  Award,
  Users,
  Search,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/**
 * High-value, comprehensive Server-Side Rendered (SSR) content.
 * Ensures search crawlers, AdSense review bots, and visitors without instant JS
 * receive complete, authoritative civic information, directory entries, documentation
 * standards, grievance procedures, and FAQ answers.
 */
export default function HomeSsrContent() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] text-stone-900 font-sans">
      {/* Top Advisory Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="flex items-center gap-1.5 text-xs text-stone-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <strong>Public Notice:</strong> SewaNadu is an independent citizen educational guide.
            Not affiliated with the Government of India. Official portals linked directly.
          </p>
          <div className="flex items-center gap-3 text-xs text-stone-400">
            <Link to="/about" className="hover:text-amber-400 underline-offset-2 hover:underline">
              About Us
            </Link>
            <span>•</span>
            <Link
              to="/citizen-guides"
              className="hover:text-amber-400 underline-offset-2 hover:underline"
            >
              Citizen Guides
            </Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-amber-400 underline-offset-2 hover:underline">
              Help &amp; FAQ
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-amber-400 underline-offset-2 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-sm shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl text-stone-900 tracking-tight">
                  SewaNadu
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                  Citizen Guide
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Civic Policy, Documentation Checklists &amp; e-Governance Portal
              </p>
            </div>
          </div>

          <nav
            aria-label="Primary Navigation"
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-stone-700"
          >
            <a
              href="#services-catalog"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              Services Directory
            </a>
            <Link
              to="/citizen-guides"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              Citizen Guides
            </Link>
            <Link
              to="/faq"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              FAQ &amp; Help
            </Link>
            <a
              href="#charter-grievance"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              Grievances &amp; RTI
            </a>
            <Link
              to="/editorial-policy"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              Editorial Policy
            </Link>
            <Link
              to="/about"
              className="px-3 py-1.5 rounded-lg hover:bg-stone-100 transition text-stone-800"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50/60 via-white to-[#FCFBF7] border-b border-stone-200/80 py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Independent e-Governance Knowledge Repository for Indian Citizens
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-stone-950 tracking-tight leading-tight max-w-4xl mx-auto">
            Clear, Verified Requirements for Indian Central &amp; State e-Services
          </h1>

          <p className="text-base sm:text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Eliminate application rejections and administrative delays. SewaNadu breaks down
            mandatory document checklists, eligibility criteria, statutory timelines under Citizen
            Charters, and official submission portals across all 36 States and Union Territories.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services-catalog"
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 shadow-sm inline-flex items-center gap-2 transition"
            >
              <FileText className="w-4 h-4" />
              Explore 16+ Essential Services
            </a>
            <Link
              to="/citizen-guides"
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 shadow-sm inline-flex items-center gap-2 transition"
            >
              <BookOpen className="w-4 h-4" />
              Read In-Depth Guides
            </Link>
            <Link
              to="/faq"
              className="px-5 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-bold text-xs hover:bg-stone-50 shadow-xs inline-flex items-center gap-2 transition"
            >
              <HelpCircle className="w-4 h-4" />
              Search FAQ Database
            </Link>
          </div>

          {/* Key Value Propositions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left">
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <p className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Zero-Queue Preparation
              </p>
              <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                Assemble exact verified proofs before visiting CSCs or filing online.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <p className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                Statutory Timelines
              </p>
              <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                Guaranteed delivery windows under State Right to Public Services Acts.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <p className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-purple-600 shrink-0" />
                RTI &amp; Grievance Help
              </p>
              <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                Actionable escalation pathways: CPGRAMS, RTPS Appeals, and RTI Act.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <p className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                Direct Official Links
              </p>
              <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                Direct URLs to genuine ministry and state revenue portals without intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Core Services Catalog Section */}
        <section id="services-catalog" className="space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
              National &amp; State Catalog
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-950 mt-1">
              Essential Indian Public e-Services Guide
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl">
              Detailed breakdown of central and state citizen services, documenting administering
              departments, eligibility, required proofs, citizen charter timelines, and statutory
              fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Service 1: Aadhaar */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    Identity &amp; Authentication
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">UIDAI</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Aadhaar Enrolment &amp; Demographic Update
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Unique Identification Authority of India 12-digit biometric identity card.
                  Required for KYC, welfare subsidies (DBT), bank account verification, and SIM
                  activation.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> All Indian residents (resident ≥ 182 days in past 12
                    months).
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Proof of Identity (POI), Proof of Address
                    (POA), Date of Birth (DOB) proof.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> 15–30 calendar days for update/enrolment.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Fresh enrolment FREE; Demographic update ₹50;
                    Biometrics ₹100.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: myaadhaar.uidai.gov.in</span>
                <a
                  href="https://myaadhaar.uidai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 2: PAN Card */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    Tax &amp; Finance
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">Income Tax Dept</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Permanent Account Number (PAN) Card &amp; e-KYC
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  10-digit alphanumeric identifier issued by the Income Tax Department via NSDL
                  (Protean) and UTIITSL. Mandatory for financial transactions, tax returns, and bank
                  opening.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Any individual, business, or entity earning taxable
                    income.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Aadhaar Card (instant e-PAN), Passport, Voter
                    ID, or Driving Licence.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Instant for e-PAN (10 mins); 15 days for
                    physical card dispatch.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> e-PAN is FREE; Physical card within India ₹107
                    (including GST).
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: onlineservices.nsdl.com</span>
                <a
                  href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 3: PM-Kisan */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Agriculture &amp; Welfare
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">Ministry of Agri</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  PM-Kisan Samman Nidhi Direct Benefit Transfer
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Financial benefit of ₹6,000 per year in three equal 4-monthly installments of
                  ₹2,000 directly to the bank accounts of all landholding farmer families.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Small and marginal farmers with cultivable land in
                    their name.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Land Ownership Papers (Khatauni/RoR), Aadhaar
                    Card, Active NPCI-seeded Bank Account.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Verification within 30 days of state
                    approval.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Online Self-Registration is 100% FREE.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: pmkisan.gov.in</span>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 4: Ayushman Bharat ABHA */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Health &amp; Insurance
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">National Health Auth</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Ayushman Bharat PM-JAY &amp; ABHA Health Account
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ayushman Bharat provides health insurance coverage of up to ₹5 Lakh per family per
                  year for secondary and tertiary hospitalization. ABHA unifies digital health
                  records.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Identified SECC 2011 families, low-income households,
                    and senior citizens 70+.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Ration Card, Aadhaar Card, Active mobile
                    number.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Instant creation for ABHA; 7 days for
                    Ayushman Card approval.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Completely FREE (₹0).
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: beneficiary.nha.gov.in</span>
                <a
                  href="https://beneficiary.nha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 5: State Revenue Certificates */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
                    State Revenue &amp; Civil
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">State e-District</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Caste, Income &amp; Domicile Certificates
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Issued by District Collectors, Sub-Divisional Magistrates (SDM), or Tehsildars
                  under state e-District portals. Critical for school/college quotas, scholarships,
                  and government job reservations.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Bona fide residents of the respective state/UT.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Ration Card/Electricity Bill, Father's Caste
                    Certificate (for SC/ST/OBC), ITR/Salary slip or Patwari report.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> 7 to 15 working days under State RTPS Acts.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Nominal state fee (₹15 to ₹30).
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: State e-District / RTPS</span>
                <Link
                  to="/citizen-guides"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Read State Guide <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>

            {/* Service 6: DigiLocker */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                    Legal Credential Vault
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">
                    MeitY / Digital India
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  DigiLocker Digital Document Issuance
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Under Rule 9A of the IT Rules 2016, digital records in DigiLocker are treated on
                  par with original physical documents. Stores Driving Licence, RC, CBSE marksheets,
                  Aadhaar, and insurance policies.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Any Indian citizen with an Aadhaar number and linked
                    mobile.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Aadhaar OTP verification.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Instant real-time document pulling.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> 100% FREE by Government of India.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: digilocker.gov.in</span>
                <a
                  href="https://www.digilocker.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 7: Sarathi / Driving Licence */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 border border-stone-200">
                    Transport &amp; Highways
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">MoRTH / Parivahan</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Learner's &amp; Driving Licence (Sarathi)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Standardized nationwide driving licences and vehicle registration services managed
                  by the Ministry of Road Transport and Highways (MoRTH) through Parivahan Sewa.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Age 18+ (non-gear 16+), medically fit.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Age Proof (10th marksheet/Aadhaar), Address
                    Proof, Form 1 self-declaration of fitness, Passport photograph.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Online LL instant after computer test; DL
                    within 7 days after driving test.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Learner's Licence ₹150 + test fee ₹50; Permanent
                    DL ₹200.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: sarathi.parivahan.gov.in</span>
                <a
                  href="https://sarathi.parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 8: e-Shram */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Labour &amp; Employment
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">Ministry of Labour</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  e-Shram National Database for Unorganized Workers
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  12-digit Universal Account Number (UAN) for construction workers, gig workers,
                  domestic help, street vendors, and agricultural labourers. Integrates PMSBY
                  insurance.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Age 16–59, not covered by EPFO/ESIC, not income tax
                    payee.
                  </p>
                  <p>
                    <strong>Mandatory Proofs:</strong> Aadhaar Card, Active Mobile linked with
                    Aadhaar, Bank Account details.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Instant card generation upon OTP
                    submission.
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Completely FREE (₹0).
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: eshram.gov.in</span>
                <a
                  href="https://eshram.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Service 9: RTI Online */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
                    Transparency &amp; Governance
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">DoPT / Central Govt</span>
                </div>
                <h3 className="font-display font-extrabold text-base text-stone-900">
                  Right to Information (RTI) Online &amp; Appeals
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Empowers citizens to request certified records, inspect government works, and
                  obtain reasons for administrative delay from Public Information Officers (PIO)
                  under the RTI Act, 2005.
                </p>
                <div className="text-xs space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                  <p>
                    <strong>Eligible:</strong> Any Indian citizen.
                  </p>
                  <p>
                    <strong>Mandatory Requirements:</strong> Name, address, concise query (&lt;3000
                    characters), state/ministry selection.
                  </p>
                  <p>
                    <strong>Statutory Timeline:</strong> Legally mandated reply within 30 days (48
                    hours if life/liberty).
                  </p>
                  <p>
                    <strong>Official Fee:</strong> Statutory fee ₹10 (BPL cardholders exempt).
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Portal: rtionline.gov.in</span>
                <a
                  href="https://rtionline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  Visit Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Citizen Charter, Timelines & Grievance Redressal Guide */}
        <section
          id="charter-grievance"
          className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-6"
        >
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
              Statutory Citizen Rights
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-950 mt-1">
              Statutory Timelines, Citizen Charters &amp; Grievance Escalation
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl">
              Indian states and union territories guarantee service delivery time limits through
              Right to Public Services (RTPS) and Public Service Guarantee Acts. If your application
              is delayed without lawful justification, follow this statutory escalation hierarchy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-display font-bold text-sm text-stone-900">
                Track Application &amp; Verify Status
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Check your state's revenue portal using the Acknowledgement Reference Number (ARN).
                Note the statutory date of completion stipulated on your deposit receipt.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-display font-bold text-sm text-stone-900">
                First Appeal under RTPS Act
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                If the guaranteed time expires without issuance or formal rejection, submit a First
                Appeal to the designated Appellate Authority (typically SDM or Additional District
                Magistrate).
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-display font-bold text-sm text-stone-900">
                CPGRAMS &amp; RTI Intervention
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Escalate persistent bureaucratic delays to the Centralised Public Grievance Redress
                and Monitoring System (CPGRAMS at pgportal.gov.in) or file an RTI under Section 6 of
                RTI Act 2005.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ Section */}
        <section id="faq-section" className="space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-950 mt-1">
              Citizen e-Service Questions &amp; Detailed Answers
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-3xl">
              Thorough, legally grounded explanations for common public service questions, e-KYC
              hurdles, and documentation requirements.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                Why is my PAN card or Aadhaar application showing "UIDAI Demographic Verification
                Failure"?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  PAN registration systems and government portals verify demographic data (name
                  spelling, date of birth, gender) in real-time against UIDAI records. If there is
                  even a single letter, spacing, or surname discrepancy compared to your Aadhaar
                  card, the income tax verification gateway will reject your request.
                </p>
                <p>
                  <strong>Resolution steps:</strong> Ensure your form matches the exact
                  letter-by-letter spelling on your official Aadhaar card. If your Aadhaar details
                  are outdated, update demographic details first via myAadhaar portal
                  (myaadhaar.uidai.gov.in) or visit an authorized Aadhaar Seva Kendra. Retry
                  submission once the UIDAI update is live (typically 24–72 hours).
                </p>
              </div>
            </article>

            {/* FAQ 2 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                What is the critical difference between linking Aadhaar with a bank account and NPCI
                DBT Seeding?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  Linking Aadhaar to a bank account only satisfies the bank's internal KYC
                  requirements for routine transactions. However, government subsidies,
                  scholarships, and welfare disbursements (such as PM-Kisan, LPG subsidies, and
                  State pensions) are routed exclusively through the National Payments Corporation
                  of India (NPCI) Aadhaar Payment Bridge System (APBS).
                </p>
                <p>
                  To receive government funds, your bank account must be specifically "Aadhaar
                  Seeded / Mapped with NPCI". A citizen can have accounts in multiple banks, but
                  only ONE account can be actively mapped to receive DBT at any given time. Check
                  your status on the UIDAI portal under "Bank Seeding Status".
                </p>
              </div>
            </article>

            {/* FAQ 3 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                Are digital credentials and DigiLocker documents legally valid under Indian law?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  YES. Under Rule 9A of the Information Technology (Preservation and Retention of
                  Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016
                  notified under the IT Act, 2000, electronic documents shared via DigiLocker are
                  treated on par with original physical documents issued by the authority.
                </p>
                <p>
                  Police authorities, RTO checkpoints, university admissions, and passport offices
                  are legally mandated to accept cryptographically signed DigiLocker certificates
                  bearing verifiable QR codes.
                </p>
              </div>
            </article>

            {/* FAQ 4 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                Why is my PM-Kisan Samman Nidhi installment withheld or marked "e-KYC Pending"?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  PM-Kisan releases ₹6,000 annually in three installments of ₹2,000 directly via
                  DBT. If an installment is stopped, check these three mandatory compliances on
                  pmkisan.gov.in:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    <strong>Mandatory Aadhaar e-KYC:</strong> Must be completed via OTP on the
                    portal or biometric scan at a CSC centre.
                  </li>
                  <li>
                    <strong>Land Seeding (Bhulekh):</strong> Your state land record (khata/khasra)
                    must be digitally verified and linked to your farmer profile by the local
                    Patwari/Tehsildar.
                  </li>
                  <li>
                    <strong>Bank Account Aadhaar Seeding:</strong> Your bank account must be mapped
                    on the NPCI Aadhaar payment bridge.
                  </li>
                </ol>
              </div>
            </article>

            {/* FAQ 5 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                Can migrant citizens receive subsidized food grains under One Nation One Ration Card
                (ONORC)?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  Yes! Under the ONORC framework implemented by the Department of Food and Public
                  Distribution, any NFSA (National Food Security Act) ration card holder can lift
                  their entitled subsidized or free food grains from any Fair Price Shop (FPS)
                  across India using biometric authentication (fingerprint or iris scan) on the
                  e-PoS device. No transfer of original ration card is required.
                </p>
              </div>
            </article>

            {/* FAQ 6 */}
            <article className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-base text-stone-900">
                How do I file an online Right to Information (RTI) application if an e-Seva
                application is delayed?
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-2 leading-relaxed">
                <p>
                  Under Section 6(1) of the RTI Act, 2005, every citizen has the constitutional
                  right to seek reasons for administrative delays from Public Information Officers
                  (PIOs). Visit rtionline.gov.in for Central ministries or your state RTI portal.
                  Enter your application registration number, date of filing, and request certified
                  copies of file notings and daily progress logs. Public authorities must legally
                  provide a written response within 30 days.
                </p>
              </div>
            </article>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition"
            >
              <HelpCircle className="w-4 h-4" />
              View All 16+ FAQs in Full Knowledge Base
            </Link>
          </div>
        </section>

        {/* Editorial Standards & Transparency Notice */}
        <section className="bg-stone-900 text-stone-300 p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Editorial Transparency &amp; Non-Governmental Notice
          </div>
          <h2 className="font-display font-black text-xl sm:text-2xl text-white">
            How SewaNadu Researches &amp; Maintains Public Information
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-300 max-w-4xl">
            SewaNadu is an independent educational publisher operating under Indian journalistic and
            educational fair use principles. We synthesize complex administrative circulars, state
            gazette notifications, and ministry guidelines into actionable, plain-language guides in
            eleven Indian languages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-stone-300">
            <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
              <strong className="text-white block mb-1">Primary Source Citations</strong>
              Every requirement is traced directly to active ministry notifications and gazettes.
            </div>
            <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
              <strong className="text-white block mb-1">Strict Editorial Independence</strong>
              Advertising revenue covers hosting costs and never influences our coverage or
              evaluations.
            </div>
            <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
              <strong className="text-white block mb-1">Corrections &amp; Feedback</strong>
              Citizens can report outdated document checklists directly to{" "}
              <span className="text-amber-400">sevanadudotcom@gmail.com</span>.
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Site Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-10 px-4 sm:px-6 text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2.5">
              <p className="font-bold text-stone-900 text-sm">About SewaNadu</p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Independent citizen knowledge base providing verified document checklists, statutory
                timelines, and procedure guides for Indian central and state public services.
              </p>
              <p className="text-xs text-stone-500">
                Contact:{" "}
                <a
                  href="mailto:sevanadudotcom@gmail.com"
                  className="text-amber-700 font-medium hover:underline"
                >
                  sevanadudotcom@gmail.com
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-stone-900 text-sm">Citizen Resources</p>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li>
                  <Link to="/citizen-guides" className="hover:text-stone-900 hover:underline">
                    In-Depth Citizen Guides
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-stone-900 hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <a href="#services-catalog" className="hover:text-stone-900 hover:underline">
                    State e-Services Directory
                  </a>
                </li>
                <li>
                  <a href="#charter-grievance" className="hover:text-stone-900 hover:underline">
                    Citizen Charter &amp; Grievances
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-stone-900 text-sm">Editorial &amp; Governance</p>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li>
                  <Link to="/about" className="hover:text-stone-900 hover:underline">
                    About Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/editorial-policy" className="hover:text-stone-900 hover:underline">
                    Editorial &amp; Fact-Checking Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-stone-900 hover:underline">
                    Contact &amp; Grievance Officer
                  </Link>
                </li>
                <li>
                  <a
                    href="https://pgportal.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-900 hover:underline"
                  >
                    CPGRAMS Central Portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-stone-900 text-sm">Legal &amp; Privacy</p>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li>
                  <Link to="/privacy" className="hover:text-stone-900 hover:underline">
                    Privacy Policy (AdSense &amp; Cookies)
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-stone-900 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="hover:text-stone-900 hover:underline">
                    Statutory Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-stone-900 hover:underline">
                    Cookie Preferences
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} SewaNadu. Independent public policy and citizen
              empowerment initiative. All rights reserved.
            </p>
            <p>
              Official Government Portals: uidai.gov.in • incometax.gov.in • pmkisan.gov.in •
              digilocker.gov.in • rtionline.gov.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
