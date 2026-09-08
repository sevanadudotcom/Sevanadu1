import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial & Fact-Checking Policy — SewaNadu" },
      {
        name: "description",
        content:
          "Our editorial standards, verification methodology, advertising separation, and corrections process for civic e-service guides on SewaNadu.",
      },
      { property: "og:title", content: "Editorial & Fact-Checking Policy — SewaNadu" },
      {
        property: "og:description",
        content:
          "Learn how SewaNadu verifies government service rules, ensures editorial independence, and handles corrections.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/editorial-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/editorial-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Editorial & Fact-Checking Policy"
      subtitle="The principles, sourcing standards, and verification procedures that govern every citizen guide and service dossier published on SewaNadu."
      updated="September 2026"
      sections={[
        {
          heading: "1. Editorial Mission & Objective",
          body: (
            <p>
              SewaNadu was founded to bridge the information divide between complex government
              administrative frameworks and ordinary Indian citizens. Our objective is strictly
              educational: to provide free, objective, verified, and plain-language guidance on
              required documents, statutory fees, eligibility criteria, and delivery timelines for
              central and state public services. We empower citizens to navigate administrative
              procedures without relying on exploitative middlemen, touts, or unauthorized agents.
            </p>
          ),
        },
        {
          heading: "2. Primary Sourcing & Verification Standards",
          body: (
            <>
              <p>
                To maintain the highest level of factual reliability and public trust, all content
                published on SewaNadu adheres to rigorous sourcing requirements:
              </p>
              <ul>
                <li>
                  <strong>Official Gazette Notifications &amp; Acts:</strong> Statutory timelines
                  and legal rights are derived directly from central legislations (such as the IT
                  Act 2000, Aadhaar Act 2016, RTI Act 2005) and State Right to Public Services
                  (RTPS) Acts.
                </li>
                <li>
                  <strong>Direct Ministry &amp; Department Portals:</strong> Application steps and
                  document checklists are audited against published citizen charters on nodal
                  portals (e.g., uidai.gov.in, incometax.gov.in, pmkisan.gov.in,
                  sarathi.parivahan.gov.in).
                </li>
                <li>
                  <strong>Secondary Verification:</strong> Where state rules vary across districts
                  or tehsils, our team confirms guidelines with published administrative circulars
                  and verified citizen reports rather than making speculative generalizations.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. Separation of Editorial Content & Advertising",
          body: (
            <>
              <p>
                SewaNadu is supported by digital advertising (including Google AdSense) to keep our
                knowledge base free and accessible to all citizens. We enforce strict editorial
                firewalls:
              </p>
              <ul>
                <li>
                  <strong>No Paid Rankings:</strong> We never accept payment, sponsorship, or
                  commercial compensation to feature, rank, or favorably position any service or
                  provider.
                </li>
                <li>
                  <strong>Clear Ad Labeling:</strong> All advertising units are explicitly labeled
                  and visually demarcated from educational content in full compliance with Google
                  Publisher Policies.
                </li>
                <li>
                  <strong>No Endorsement:</strong> The presence of an advertisement on SewaNadu does
                  not constitute an endorsement of the advertiser's products or services.
                </li>
                <li>
                  <strong>No Interference:</strong> Advertisers have zero influence over our
                  editorial coverage, documentation checklists, grievance guides, or policy
                  analyses.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Fact-Checking & Review Cadence",
          body: (
            <p>
              Government rules, fees, and digital portals evolve frequently. SewaNadu subjects every
              service guide to regular editorial reviews. Whenever a central ministry or state
              department issues a gazette amendment—such as fee updates, e-KYC deadlines, or
              procedural transitions—our team updates the relevant dossier and updates the
              last-reviewed date stamp.
            </p>
          ),
        },
        {
          heading: "5. Non-Governmental Status & Disclaimer",
          body: (
            <p>
              SewaNadu is an independent, non-governmental informational portal. We do not
              represent, act on behalf of, or possess an official partnership with the Government of
              India or any State Government or Union Territory Administration. We do not accept
              government application forms, process fees, issue official certificates, or request
              personal credentials. All official submissions must be made directly through the
              genuine government portals linked on our pages.
            </p>
          ),
        },
        {
          heading: "6. Corrections, Updates & Grievance Feedback",
          body: (
            <>
              <p>
                We welcome scrutiny and corrections from citizens, legal practitioners, and public
                officials. If you identify any outdated fee, modified document requirement, or
                broken link, please submit a correction notice:
              </p>
              <ul>
                <li>
                  Email our Editorial Desk:{" "}
                  <a href="mailto:sevanadudotcom@gmail.com">sevanadudotcom@gmail.com</a> or{" "}
                  <a href="mailto:support@sewanadu.in">support@sewanadu.in</a>
                </li>
                <li>
                  Please include the service title, the specific state/district, the discrepancy
                  noted, and a reference link to the official government notification.
                </li>
                <li>
                  Our editorial team reviews and resolves verified factual corrections within 48 to
                  72 business hours.
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  ),
});
