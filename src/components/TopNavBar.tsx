import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Globe,
  BookmarkCheck,
  Sun,
  Moon,
  LogIn,
  LogOut,
  Scale,
  ClipboardCheck,
  LayoutGrid,
  Landmark,
  Award,
  Bot,
  HelpCircle,
  Users,
  FileCheck2,
  Menu,
  X,
  ChevronDown,
  Check,
  Mic,
  Info,
  ExternalLink,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { User as FirebaseUser } from "firebase/auth";
import { ESevaService } from "../types";
import VoiceSearch from "./VoiceSearch";

export interface TopNavBarProps {
  activeTab:
    | "services"
    | "eligibility"
    | "lockers"
    | "chatbot"
    | "faq"
    | "legal-hub"
    | "sitemap"
    | "discussions";
  setActiveTab: (
    tab:
      | "services"
      | "eligibility"
      | "lockers"
      | "chatbot"
      | "faq"
      | "legal-hub"
      | "sitemap"
      | "discussions",
  ) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedService: ESevaService | null;
  setSelectedService: (service: ESevaService | null) => void;
  setActiveDossier: (service: ESevaService | null) => void;
  getAutoSuggestions: () => ESevaService[];
  translateService: (service: ESevaService) => {
    title: string;
    department?: string;
    description?: string;
  };
  savedServiceIds: string[];
  setIsSavedServicesOpen: (open: boolean) => void;
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: (open: boolean) => void;
  isMobileMoreOpen: boolean;
  setIsMobileMoreOpen: (open: boolean) => void;
  setIsRtiOpen: (open: boolean) => void;
  setIsStatusCheckOpen: (open: boolean) => void;
  setShowLauncher: (open: boolean) => void;
  authUser: FirebaseUser | null;
  handleGoogleSignIn: () => void;
  handleGoogleSignOut: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  triggerToast: (msg: string, type?: "success" | "info" | "error") => void;
  language: string;
  setLanguage: (lang: any) => void;
  t: (key: string) => string;
  INDIAN_LANGUAGES: { code: string; name: string; nativeName: string }[];
  logoPulse: boolean;
  setLegalHubDefaultSection: (
    section: "privacy" | "terms" | "rules" | "about" | "cookies" | "disclaimer",
  ) => void;
}

export default function TopNavBar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  setSelectedService,
  setActiveDossier,
  getAutoSuggestions,
  translateService,
  savedServiceIds,
  setIsSavedServicesOpen,
  setIsMobileSearchOpen,
  setIsMobileMoreOpen,
  setIsRtiOpen,
  setIsStatusCheckOpen,
  setShowLauncher,
  authUser,
  handleGoogleSignIn,
  handleGoogleSignOut,
  darkMode,
  setDarkMode,
  triggerToast,
  language,
  setLanguage,
  t,
  INDIAN_LANGUAGES,
  logoPulse,
  setLegalHubDefaultSection,
}: TopNavBarProps) {
  const [isNoticeVisible, setIsNoticeVisible] = useState(() => {
    try {
      return sessionStorage.getItem("sewanadu_notice_dismissed") !== "true";
    } catch {
      return true;
    }
  });

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Global Keyboard Shortcut: ⌘K or Ctrl+K to search, Esc to close/unfocus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (window.innerWidth < 768) {
          setIsMobileSearchOpen(true);
        } else {
          searchInputRef.current?.focus();
        }
      }
      if (e.key === "Escape") {
        setIsSearchFocused(false);
        setIsLangDropdownOpen(false);
        setIsUserMenuOpen(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsMobileSearchOpen]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dismissNotice = () => {
    setIsNoticeVisible(false);
    try {
      sessionStorage.setItem("sewanadu_notice_dismissed", "true");
    } catch {
      // Ignore storage errors
    }
  };

  const currentLangObj =
    INDIAN_LANGUAGES.find((l) => l.code === language) || INDIAN_LANGUAGES[0];

  const autoSuggestions = getAutoSuggestions();

  // Navigation tabs configuration
  const navTabs = [
    {
      id: "services" as const,
      icon: Landmark,
      label: language === "hi" ? "सभी सेवाएँ" : "All Services",
      shortLabel: language === "hi" ? "सेवाएँ" : "Services",
      desc: language === "hi" ? "100+ केंद्रीय व राज्य ई-सेवाएं" : "100+ Central & State Services",
    },
    {
      id: "eligibility" as const,
      icon: Award,
      label: language === "hi" ? "पात्रता जांच" : "Eligibility Checker",
      shortLabel: language === "hi" ? "पात्रता" : "Eligibility",
      desc: language === "hi" ? "योजनाओं हेतु योग्यता कैलकुलेटर" : "Scheme Eligibility Calculator",
    },
    {
      id: "chatbot" as const,
      icon: Bot,
      label: language === "hi" ? "सहायक AI" : "AI Assistant",
      shortLabel: language === "hi" ? "AI सहायक" : "AI Chat",
      desc: language === "hi" ? "24/7 जन सेवा मार्गदर्शक" : "24/7 Citizen Service Guide",
      badge: "AI",
    },
    {
      id: "faq" as const,
      icon: HelpCircle,
      label: language === "hi" ? "सामान्य प्रश्न (FAQ)" : "FAQs & Guides",
      shortLabel: "FAQ",
      desc: language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions",
    },
    {
      id: "sitemap" as const,
      icon: Globe,
      label: language === "hi" ? "100+ निर्देशिका" : "100+ Catalog",
      shortLabel: language === "hi" ? "निर्देशिका" : "Catalog",
      desc: language === "hi" ? "संपूर्ण पोर्टल साइटमैप" : "Complete Service Directory",
    },
    {
      id: "discussions" as const,
      icon: Users,
      label: language === "hi" ? "नागरिक चर्चाएँ" : "Discussions",
      shortLabel: language === "hi" ? "चर्चाएँ" : "Discussions",
      desc: language === "hi" ? "नागरिक अनुभव एवं सुझाव" : "Citizen Peer Experiences",
    },
    {
      id: "legal-hub" as const,
      icon: FileCheck2,
      label: language === "hi" ? "नीति एवं विलेख" : "Policies & Legal",
      shortLabel: language === "hi" ? "नीतियां" : "Legal",
      desc: language === "hi" ? "अस्वीकरण एवं सेवा शर्तें" : "Disclaimer & Terms of Use",
    },
  ];

  return (
    <div className="w-full shrink-0 select-none" id="top-nav-bar-root">
      {/* 1. Polite, Accessible Public Notice Banner */}
      {isNoticeVisible && (
        <div
          className="bg-gradient-to-r from-amber-50 via-orange-50/70 to-amber-50 dark:from-amber-950/40 dark:via-stone-900/60 dark:to-amber-950/30 border-b border-amber-200/80 dark:border-amber-900/50 py-1.5 px-3 sm:px-6 transition-all duration-300"
          id="public-service-notice-banner"
          role="region"
          aria-label="Public Service Notice"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10.5px] sm:text-xs">
            <div className="flex items-center gap-2 min-w-0 text-amber-900 dark:text-amber-200/90 leading-tight">
              <span className="shrink-0 text-xs" aria-hidden="true">
                🇮🇳
              </span>
              <p className="truncate sm:whitespace-normal font-medium">
                <strong className="font-bold">
                  {language === "hi" ? "जन सामान्य सूचना:" : "Notice:"}
                </strong>{" "}
                {language === "hi"
                  ? "SewaNadu एक गैर-सरकारी मुफ्त नागरिक निर्देशिका है। कोई लॉगिन या पंजीकरण आवश्यक नहीं है।"
                  : "SewaNadu is an independent, free educational e-Sewa directory for citizens. No government affiliation or login required."}
              </p>
            </div>

            <button
              onClick={dismissNotice}
              className="shrink-0 p-1 text-amber-800/70 hover:text-amber-950 dark:text-amber-300/70 dark:hover:text-amber-100 rounded-md hover:bg-amber-200/50 dark:hover:bg-amber-900/40 transition cursor-pointer"
              title={language === "hi" ? "सूचना छिपाएं" : "Dismiss notice"}
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Brand & Search Navigation Header */}
      <header
        className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/85 dark:border-stone-800 transition-colors duration-250 z-50 relative shadow-3xs"
        id="main-brand-header"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              type="button"
              animate={
                logoPulse
                  ? {
                      scale: [1, 1.08, 0.96, 1.04, 1],
                      boxShadow: [
                        "0 0 0 rgba(239, 68, 68, 0)",
                        "0 0 16px 3px rgba(255, 90, 43, 0.45)",
                        "0 0 8px 1px rgba(255, 90, 43, 0.25)",
                        "0 0 0 rgba(255, 90, 43, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => {
                setActiveTab("services");
                setSelectedService(null);
                setSearchQuery("");
                triggerToast(
                  language === "hi"
                    ? "मुखपृष्ठ पर लौटे — सभी सेवाएँ प्रदर्शित"
                    : "Reset to Home — Showing all services",
                  "info",
                );
              }}
              className="flex items-center gap-2.5 text-left p-1 rounded-2xl hover:bg-stone-100/70 dark:hover:bg-stone-800/60 transition group cursor-pointer border border-transparent hover:border-stone-200/60 dark:hover:border-stone-700/60"
              title={language === "hi" ? "मुखपृष्ठ पर जाएं" : "Go to Home / Reset"}
              id="website-logo-start-button"
            >
              {/* Emblem icon with saffron/coral gradient */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-brand-coral via-orange-500 to-amber-500 rounded-xl flex items-center justify-center p-1.5 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>

              {/* Textual Branding */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display font-black text-stone-900 dark:text-white text-base sm:text-lg tracking-tight">
                    SewaNadu
                  </span>
                  <span className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-mono text-[8px] font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/40">
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    {language === "hi" ? "ई-सेवा" : "Directory"}
                  </span>
                </div>
                <p className="text-[8px] sm:text-[9px] font-bold text-stone-400 dark:text-stone-400 tracking-wider leading-none uppercase font-sans hidden sm:block">
                  {language === "hi" ? "नागरिक सेवा निर्देशिका" : "Citizen E-Services Portal"}
                </p>
              </div>
            </motion.button>
          </div>

          {/* Desktop & Tablet Search Bar */}
          <div
            ref={searchContainerRef}
            className="hidden md:flex items-center flex-1 max-w-lg lg:max-w-xl mx-2 relative"
            id="desktop-search-container"
          >
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                role="searchbox"
                aria-label="Search citizen services"
                placeholder={
                  t("app.search_placeholder") ||
                  "Search 100+ services (Aadhaar, PAN, Passport, Ration...)"
                }
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveTab("services");
                  setSelectedService(null);
                }}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full bg-stone-50/90 dark:bg-stone-800/80 border border-stone-250 dark:border-stone-700 py-2 pl-9.5 pr-22 rounded-2xl text-xs font-sans outline-none focus:bg-white dark:focus:bg-stone-800 focus:border-brand-coral dark:focus:border-brand-coral focus:ring-3 focus:ring-brand-coral/10 transition text-stone-850 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 shadow-3xs"
              />

              {/* Right tools inside search input: Clear + Shortcut + Voice */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      searchInputRef.current?.focus();
                    }}
                    className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition rounded-full"
                    title={language === "hi" ? "खोज साफ़ करें" : "Clear search"}
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Keyboard shortcut indicator */}
                <div
                  className="hidden lg:flex items-center gap-0.5 pointer-events-none select-none text-stone-400 dark:text-stone-500 font-sans text-[8.5px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 bg-stone-200/60 dark:bg-stone-700/60 rounded-md border border-stone-300/60 dark:border-stone-600/60"
                  title="Keyboard Shortcut: ⌘K or Ctrl+K"
                >
                  <span>⌘</span>
                  <span>K</span>
                </div>

                {/* Voice Search Mic */}
                <VoiceSearch
                  currentLanguage={language}
                  onSpeechResult={(text) => {
                    setSearchQuery(text);
                    setActiveTab("services");
                    setSelectedService(null);
                  }}
                  triggerToast={triggerToast}
                  className="h-7 w-7 shrink-0 shadow-none border-0 hover:bg-stone-200/60 dark:hover:bg-stone-700/60"
                  iconSize={13}
                />
              </div>

              {/* Autocomplete Suggestions Popover */}
              {isSearchFocused && autoSuggestions.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-xl max-h-80 overflow-y-auto z-50 p-1.5 divide-y divide-stone-100 dark:divide-stone-750 animate-fadeIn select-none"
                  id="desktop-autosuggest-dropdown"
                >
                  <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                    <span>{language === "hi" ? "शीर्ष मेल" : "Top Suggestions"}</span>
                    <span>{autoSuggestions.length} found</span>
                  </div>
                  {autoSuggestions.slice(0, 6).map((service) => {
                    const sTrans = translateService(service);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setActiveTab("services");
                          setActiveDossier(service);
                          setSearchQuery("");
                          setIsSearchFocused(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-orange-50 dark:hover:bg-stone-750 rounded-xl flex items-center justify-between gap-2 transition cursor-pointer text-stone-800 dark:text-stone-200 group"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-brand-coral transition truncate">
                            {sTrans.title}
                          </p>
                          <p className="text-[10px] text-stone-400 dark:text-stone-400 truncate">
                            {sTrans.department || service.department}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-brand-coral font-bold shrink-0 opacity-0 group-hover:opacity-100 transition">
                          Launch →
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Header Navigation Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Search Button (Visible on screens < md) */}
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(true)}
              className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-250 dark:border-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-700 transition text-xs font-semibold cursor-pointer shadow-3xs"
              title={language === "hi" ? "सेवा खोजें" : "Search Services"}
              aria-label="Open search dialog"
            >
              <Search className="w-3.5 h-3.5 text-brand-coral" />
              <span className="text-[11px] font-medium hidden xs:inline">
                {language === "hi" ? "खोजें" : "Search"}
              </span>
            </button>

            {/* Quick Citizen Tool Shortcuts (Desktop only: Status & RTI) */}
            <div
              className="hidden xl:flex items-center gap-1 px-1 py-0.5 bg-stone-50 dark:bg-stone-800/60 rounded-full border border-stone-200 dark:border-stone-700/70"
              id="header-quick-citizen-tools"
            >
              <button
                type="button"
                onClick={() => setIsStatusCheckOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 transition cursor-pointer shadow-3xs"
                title={language === "hi" ? "आवेदन की स्थिति जांचें" : "Check Application Status"}
              >
                <ClipboardCheck className="w-3 h-3 text-brand-coral" />
                <span>{language === "hi" ? "स्थिति जांचें" : "Track Status"}</span>
              </button>

              <div className="w-px h-3 bg-stone-200 dark:bg-stone-700"></div>

              <button
                type="button"
                onClick={() => setIsRtiOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-white dark:hover:bg-stone-700 transition cursor-pointer shadow-3xs"
                title={
                  language === "hi"
                    ? "सूचना का अधिकार (RTI) आवेदन करें"
                    : "File an Online RTI Request"
                }
              >
                <Scale className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>{language === "hi" ? "RTI दाखिला" : "File RTI"}</span>
              </button>
            </div>

            {/* Language Selector Dropdown (Accessible, Friendly) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full bg-stone-50 dark:bg-stone-800 border border-stone-250 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 text-stone-800 dark:text-stone-200 transition text-[11px] font-extrabold cursor-pointer shadow-3xs select-none"
                title={language === "hi" ? "भाषा बदलें (Change Language)" : "Switch Language"}
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="listbox"
                id="language-dropdown-toggle-btn"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="leading-none">{currentLangObj.nativeName}</span>
                <ChevronDown
                  className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown Popover */}
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-xl z-50 p-2 space-y-1 select-none"
                    role="listbox"
                    aria-label="Select Language"
                  >
                    <div className="px-2.5 py-1 text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono flex items-center justify-between">
                      <span>{language === "hi" ? "भाषा चुनें" : "Select Language"}</span>
                      <span>{INDIAN_LANGUAGES.length} Indian</span>
                    </div>
                    <div className="max-h-60 overflow-y-auto divide-y divide-stone-100 dark:divide-stone-750 pr-0.5">
                      {INDIAN_LANGUAGES.map((lang) => {
                        const isSelected = language === lang.code;
                        return (
                          <button
                            key={lang.code}
                            type="button"
                            onClick={() => {
                              setLanguage(lang.code as any);
                              setIsLangDropdownOpen(false);
                              triggerToast(
                                language === "hi"
                                  ? `भाषा बदलकर ${lang.nativeName} की गई।`
                                  : `Language switched to ${lang.name} (${lang.nativeName}).`,
                                "info",
                              );
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                              isSelected
                                ? "bg-orange-50 dark:bg-orange-950/40 text-brand-coral font-bold"
                                : "text-stone-750 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                            }`}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <div className="flex flex-col text-left">
                              <span className="font-bold text-[12.5px]">{lang.nativeName}</span>
                              <span className="text-[10px] text-stone-400">{lang.name}</span>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-brand-coral shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Saved Services Bookmark Trigger */}
            <button
              type="button"
              onClick={() => setIsSavedServicesOpen(true)}
              className="relative flex items-center justify-center p-2 rounded-full border border-stone-250 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-200 transition cursor-pointer shadow-3xs shrink-0"
              title={
                language === "hi"
                  ? `सहेजी गई सेवाएँ (${savedServiceIds.length})`
                  : `Saved Services (${savedServiceIds.length})`
              }
              aria-label="View saved services"
              id="saved-services-trigger"
            >
              <BookmarkCheck className="w-3.5 h-3.5 text-brand-coral" />
              {savedServiceIds.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 bg-brand-coral text-white text-[8.5px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-stone-900 leading-none">
                  {savedServiceIds.length}
                </span>
              )}
            </button>

            {/* Theme Toggle (Light / Dark) */}
            <button
              type="button"
              onClick={() => {
                setDarkMode((prev) => !prev);
                triggerToast(
                  !darkMode
                    ? language === "hi"
                      ? "डार्क मोड सक्रिय"
                      : "Dark Mode enabled"
                    : language === "hi"
                      ? "लाइट मोड सक्रिय"
                      : "Light Mode enabled",
                  "info",
                );
              }}
              className="flex items-center justify-center p-2 rounded-full border border-stone-250 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-200 transition cursor-pointer shadow-3xs shrink-0"
              title={
                darkMode
                  ? language === "hi"
                    ? "लाइट मोड पर स्विच करें"
                    : "Switch to Light Mode"
                  : language === "hi"
                    ? "डार्क मोड पर स्विच करें"
                    : "Switch to Dark Mode"
              }
              aria-label="Toggle theme mode"
              id="theme-mode-toggle"
            >
              {darkMode ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-stone-600" />
              )}
            </button>

            {/* User Account / Google Sign In */}
            {authUser ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 p-1 sm:pl-1 sm:pr-2.5 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-250 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition cursor-pointer hover:bg-stone-200/70 dark:hover:bg-stone-700 shadow-3xs"
                  title="Citizen Profile"
                  aria-expanded={isUserMenuOpen}
                >
                  {authUser.photoURL ? (
                    <img
                      src={authUser.photoURL}
                      alt={authUser.displayName || "User"}
                      className="w-5 h-5 rounded-full object-cover border border-stone-300 dark:border-stone-600"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-brand-coral text-white font-black text-[9px] flex items-center justify-center">
                      {(authUser.displayName || "U").charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden sm:inline max-w-[85px] truncate text-[11px]">
                    {authUser.displayName?.split(" ")[0] || "Citizen"}
                  </span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-xl z-50 p-2 select-none"
                    >
                      <div className="px-3 py-2 border-b border-stone-100 dark:border-stone-750">
                        <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                          {authUser.displayName || "Citizen"}
                        </p>
                        <p className="text-[10px] text-stone-400 truncate">{authUser.email}</p>
                      </div>
                      <div className="py-1 space-y-0.5">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSavedServicesOpen(true);
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition cursor-pointer text-left"
                        >
                          <BookmarkCheck className="w-3.5 h-3.5 text-brand-coral" />
                          <span>{language === "hi" ? "सहेजी गई सेवाएँ" : "Saved Services"}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsStatusCheckOpen(true);
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition cursor-pointer text-left"
                        >
                          <ClipboardCheck className="w-3.5 h-3.5 text-amber-600" />
                          <span>{language === "hi" ? "आवेदन स्थिति" : "Track Status"}</span>
                        </button>
                      </div>
                      <div className="pt-1 border-t border-stone-100 dark:border-stone-750">
                        <button
                          type="button"
                          onClick={() => {
                            handleGoogleSignOut();
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition cursor-pointer text-left font-semibold"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>{language === "hi" ? "साइन आउट" : "Sign Out"}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-stone-800 border border-stone-250 dark:border-stone-700 hover:border-blue-500 text-stone-800 dark:text-stone-200 hover:text-blue-600 font-extrabold text-[11px] transition shadow-3xs cursor-pointer select-none shrink-0"
                title={language === "hi" ? "गूगल से लॉगिन करें" : "Sign in with Google"}
                id="firebase-google-login-btn"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{language === "hi" ? "लॉगिन" : "Sign In"}</span>
              </button>
            )}

            {/* Quick Launch Button (Desktop & Tablet) */}
            <button
              type="button"
              onClick={() => setShowLauncher(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-brand-coral via-orange-500 to-amber-500 hover:opacity-95 text-white font-sans font-black rounded-full text-[11px] uppercase tracking-wider transition duration-200 cursor-pointer select-none shrink-0 shadow-2xs"
              id="header-start-btn"
              title={language === "hi" ? "त्वरित केंद्र खोलें" : "Launch Citizen Hub"}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-white" />
              <span>{language === "hi" ? "त्वरित केंद्र" : "Quick Hub"}</span>
            </button>

            {/* Mobile Navigation Drawer Trigger (Hamburger Menu - Mobile Only) */}
            <button
              type="button"
              onClick={() => setIsMobileMoreOpen(true)}
              className="md:hidden flex items-center justify-center p-2 rounded-full border border-stone-250 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-200 transition cursor-pointer shadow-3xs shrink-0"
              title={language === "hi" ? "नेविगेशन मेनू खोलें" : "Open Navigation Menu"}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Sticky Desktop & Tablet Navigation Tabs Bar */}
      <nav
        className="hidden md:block bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/85 dark:border-stone-800 shrink-0 sticky top-0 z-40 shadow-3xs select-none transition-colors duration-250"
        aria-label="Main Navigation Tabs"
        id="desktop-navigation-tabs-bar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Nav Tabs List */}
            <div className="flex items-center overflow-x-auto scrollbar-none gap-1 -mb-px pt-1 pb-1">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`desktop-nav-${tab.id}`}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      if (tab.id === "services") {
                        setSelectedService(null);
                      }
                      if (tab.id === "legal-hub") {
                        setLegalHubDefaultSection("about");
                      }
                    }}
                    className={`relative flex items-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap cursor-pointer select-none group ${
                      isActive
                        ? "text-brand-coral dark:text-orange-400 bg-orange-50/80 dark:bg-orange-950/30"
                        : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-100/70 dark:hover:bg-stone-800/60"
                    }`}
                    title={tab.desc}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive
                          ? "text-brand-coral dark:text-orange-400"
                          : "text-stone-400 dark:text-stone-500 group-hover:text-stone-700 dark:group-hover:text-stone-300"
                      }`}
                    />
                    <span>{tab.label}</span>

                    {tab.badge && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-brand-coral/15 text-brand-coral dark:bg-orange-500/20 dark:text-orange-300">
                        {tab.badge}
                      </span>
                    )}

                    {/* Active tab bottom indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-coral dark:bg-orange-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Status / RTI Links on the right of the tab bar for medium screens */}
            <div className="hidden md:flex xl:hidden items-center gap-1 text-xs shrink-0">
              <button
                type="button"
                onClick={() => setIsStatusCheckOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                title="Check Application Status"
              >
                <ClipboardCheck className="w-3 h-3 text-brand-coral" />
                <span>{language === "hi" ? "स्थिति" : "Track"}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsRtiOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                title="File RTI Request"
              >
                <Scale className="w-3 h-3 text-amber-600" />
                <span>RTI</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
