import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SewaNadu — Independent Indian e-Service Guide" },
      {
        name: "description",
        content:
          "Who runs SewaNadu, how our government-service content is researched and updated, and our editorial and advertising standards.",
      },
      { property: "og:title", content: "About SewaNadu" },
      {
        property: "og:description",
        content:
          "An independent citizen guide to Indian central and state government services — our mission, method and editorial standards.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <LegalPage
      title="About SewaNadu"
      subtitle="An independent, free guide that tells Indian citizens exactly which documents a government service needs — before they stand in the queue."
      updated="5 August 2026"
      sections={[
        {
          heading: "Why this exists",
          body: (
            <p>
              Most rejected applications fail for a boring reason: one missing paper. Requirements
              are spread across dozens of central and state portals, often only in English, often
              buried in PDFs. SewaNadu collects them in one place, in plain language, in eleven
              Indian languages, with a direct link to the official portal for every service.
            </p>
          ),
        },
        {
          heading: "What you get",
          body: (
            <ul>
              <li>Document checklists for central and state services across all States and UTs.</li>
              <li>Eligibility guidance you can check before you apply.</li>
              <li>Indicative fees, processing timelines and the responsible department.</li>
              <li>Direct links to the official application portal — we never sit in the middle.</li>
              <li>Help content on grievances, RTI and where to escalate.</li>
            </ul>
          ),
        },
        {
          heading: "How content is produced & verified",
          body: (
            <p>
              Every entry is compiled from publicly available official sources — ministry
              notifications, state gazettes, department citizen charters, and published
              administrative orders — and rewritten into plain, actionable language. Entries are
              reviewed periodically and updated whenever readers or public agencies notify us of
              changes. Where a rule varies by state or district (such as local land registration
              stamp duty or caste verification norms), we explicitly document those local nuances.
              Read our full <a href="/editorial-policy">Editorial &amp; Fact-Checking Policy</a> for
              complete methodology.
            </p>
          ),
        },
        {
          heading: "Editorial independence & advertising standards",
          body: (
            <p>
              Advertising (via Google AdSense) pays our server and hosting infrastructure bills,
              keeping this public knowledge repository 100% free for every citizen. Commercial
              advertising never influences which services we cover, how eligibility is calculated,
              or what we say about administrative procedures. All advertisements are clearly marked
              and segregated from educational content, and we do not accept sponsored directory
              placements or endorsements.
            </p>
          ),
        },
        {
          heading: "Independence from government",
          body: (
            <p>
              SewaNadu is an independent, non-governmental educational portal. We are not affiliated
              with, endorsed by, or operating on behalf of the Government of India or any state
              administration. We do not process government applications, collect official fees, or
              store citizen identity credentials. For all official submissions, always use the
              genuine government portals linked across our guides. Read our full{" "}
              <a href="/disclaimer">Disclaimer</a> for details.
            </p>
          ),
        },
        {
          heading: "Author & publisher contacts",
          body: (
            <p>
              SewaNadu is maintained by a dedicated team of civic technologists, researchers, and
              public policy analysts committed to open governance and citizen empowerment. For
              inquiries, corrections, or suggestions, contact our editorial desk directly at{" "}
              <a href="mailto:sevanadudotcom@gmail.com">sevanadudotcom@gmail.com</a> or via our{" "}
              <a href="/contact">Contact</a> page.
            </p>
          ),
        },
      ]}
    />
  ),
});
