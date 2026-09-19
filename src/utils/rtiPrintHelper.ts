/**
 * RTI Print Helper
 * Generates official, printer-ready statutory documents for Right to Information (RTI) applications:
 * 1. Statutory Form A / Section 6(1) Official Application Letter
 * 2. Official Acknowledgement Slip / Filing Receipt
 * 3. RTI Status & Milestone Tracking Report
 */

export interface RtiPrintData {
  id?: string;
  auth: string;
  authName?: string;
  name: string;
  email: string;
  phone?: string;
  query: string;
  date?: string;
  feesPaid?: number;
  bplNo?: string;
  paymentMode?: string;
  status?: string;
  milestones?: Array<{
    title: string;
    desc: string;
    date?: string;
    officer?: string;
    completed: boolean;
  }>;
}

export function printRtiDocument(
  mode: "application" | "receipt" | "status",
  data: RtiPrintData,
  language: string = "en",
  onToast?: (msg: string, type?: "success" | "info" | "error") => void,
) {
  const isHi = language === "hi";

  if (onToast) {
    onToast(
      isHi
        ? "प्रिंटर-अनुकूल आरटीआई दस्तावेज़ तैयार किया जा रहा है..."
        : "Preparing printer-ready RTI document...",
      "info",
    );
  }

  const currentDate =
    data.date ||
    new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  const refId = data.id || `RTI-SEWA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const departmentName = data.authName || data.auth || "Public Authority, Government of India";

  let title = "";
  let bodyContent = "";

  if (mode === "receipt") {
    title = isHi ? `RTI-रसीद-${refId}` : `RTI-Acknowledgement-Receipt-${refId}`;

    bodyContent = `
      <div class="header-emblem">
        <div class="emblem-text">
          <div class="gov-title">${isHi ? "भारत सरकार / केंद्रीय लोक प्राधिकरण" : "GOVERNMENT OF INDIA / PUBLIC AUTHORITY"}</div>
          <div class="portal-title">${isHi ? "सूचना का अधिकार ऑनलाइन पोर्टल" : "RIGHT TO INFORMATION (RTI) CITIZEN PORTAL"}</div>
          <div class="act-sub">${isHi ? "सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के अधीन" : "Statutory Filing under Section 6(1) of the RTI Act, 2005"}</div>
        </div>
      </div>

      <div class="badge-row">
        <span class="badge badge-success">${isHi ? "पंजीकृत / वैध पावती रसीद" : "OFFICIAL ACKNOWLEDGEMENT RECEIPT"}</span>
        <span class="badge badge-mono">REF: ${refId}</span>
      </div>

      <div class="watermark">${isHi ? "सत्यापित आरटीआई" : "RTI OFFICIAL"}</div>

      <table class="details-table">
        <tbody>
          <tr>
            <th style="width: 32%;">${isHi ? "पंजीकरण संदर्भ क्रमांक" : "Registration Reference Number"}</th>
            <td><strong style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #b45309;">${refId}</strong></td>
          </tr>
          <tr>
            <th>${isHi ? "आवेदन की तिथि व समय" : "Date & Time of Submission"}</th>
            <td>${currentDate}</td>
          </tr>
          <tr>
            <th>${isHi ? "संबोधित लोक प्राधिकरण" : "Public Authority Addressed"}</th>
            <td><strong>${departmentName}</strong></td>
          </tr>
          <tr>
            <th>${isHi ? "केंद्रीय लोक सूचना अधिकारी" : "Designated Officer"}</th>
            <td>Central Public Information Officer (CPIO) / SPIO Desk</td>
          </tr>
          <tr>
            <th>${isHi ? "आवेदक का नाम" : "Applicant Full Name"}</th>
            <td><strong>${data.name}</strong> (${isHi ? "भारतीय नागरिक" : "Citizen of India"})</td>
          </tr>
          <tr>
            <th>${isHi ? "संपर्क निर्देशांक" : "Contact Coordinates"}</th>
            <td>Email: ${data.email} ${data.phone ? `| Mobile: ${data.phone}` : ""}</td>
          </tr>
          <tr>
            <th>${isHi ? "आवेदन शुल्क स्थिति" : "Statutory Fee Particulars"}</th>
            <td>
              ${
                data.feesPaid && data.feesPaid > 0
                  ? `<span style="color: #047857; font-weight: bold;">₹${data.feesPaid}.00 ${isHi ? "(भुगतान सफल - ई-ट्रेजरी)" : "(Paid Successfully via Electronic Gateway)"}</span>`
                  : `<span style="color: #0369a1; font-weight: bold;">${isHi ? "शुल्क मुक्त (बीपीएल कार्डधारक): " : "Exempted (Below Poverty Line): "} ${data.bplNo || "BPL Verified"}</span>`
              }
            </td>
          </tr>
          <tr>
            <th>${isHi ? "विधिक अधिनियम संदर्भ" : "Statutory Reference"}</th>
            <td>Section 6(1) of the Right to Information Act, 2005</td>
          </tr>
        </tbody>
      </table>

      <div class="section-box">
        <div class="section-title">${isHi ? "मांगी गई सूचना का विवरण (Solicited Query)" : "Particulars of Information Solicited"}</div>
        <div class="query-content">
          ${data.query.replace(/\n/g, "<br/>")}
        </div>
      </div>

      <div class="legal-notice">
        <strong>${isHi ? "विधिक समय-सीमा सूचना (Mandatory Timelines):" : "Mandatory Statutory Timelines:"}</strong>
        <ul>
          <li>${isHi ? "आरटीआई अधिनियम, 2005 की धारा 7(1) के अनुसार, लोक सूचना अधिकारी को आवेदन प्राप्त होने के 30 दिनों के भीतर सूचना उपलब्ध करानी होगी।" : "Under Section 7(1) of the RTI Act, 2005, the CPIO shall provide information or reject within 30 calendar days of receipt."}</li>
          <li>${isHi ? "यदि मांगी गई सूचना किसी व्यक्ति के जीवन या स्वतंत्रता से संबंधित है, तो यह 48 घंटों के भीतर प्रदान की जाएगी।" : "If the requested information concerns the life or liberty of a person, it shall be provided within 48 hours."}</li>
          <li>${isHi ? "समय पर सूचना न मिलने पर धारा 19(1) के तहत 30 दिनों के भीतर प्रथम अपीलीय प्राधिकारी (FAA) को अपील की जा सकती है।" : "If aggrieved or unserved within 30 days, the applicant may prefer a First Appeal under Section 19(1) to the designated First Appellate Authority."}</li>
        </ul>
      </div>

      <div class="signature-grid" style="margin-top: 24px;">
        <div class="sig-box">
          <div class="sig-title">${isHi ? "सिस्टम सत्यापन कोड" : "System Verification"}</div>
          <div style="font-family: monospace; font-size: 11px; margin-top: 4px; color: #57534e;">DIGITALLY VERIFIED VIA SEWANADU E-PORTAL<br/>SEC-6(1)-RTI-ACT-2005</div>
        </div>
        <div class="sig-box" style="text-align: right;">
          <div class="sig-title">${isHi ? "आवेदक हस्ताक्षर / स्वीकृति" : "Applicant Confirmation"}</div>
          <div style="margin-top: 14px; font-weight: bold;">${data.name}</div>
          <div style="font-size: 10px; color: #78716c;">(${isHi ? "इलेक्ट्रॉनिक रूप से सत्यापित" : "Electronic Affirmation"})</div>
        </div>
      </div>
    `;
  } else if (mode === "application") {
    title = isHi
      ? `RTI-आवेदन-प्रारूप-फॉर्म-A-${data.name.replace(/\s+/g, "_")}`
      : `RTI-Application-Form-A-${data.name.replace(/\s+/g, "_")}`;

    bodyContent = `
      <div class="form-a-header">
        <div class="form-title">${isHi ? "प्रपत्र 'क' / FORM 'A'" : "FORM 'A'"}</div>
        <div class="form-subtitle">
          ${isHi ? "[सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के तहत सूचना प्राप्त करने हेतु आवेदन]" : "[Application form for seeking information under Section 6(1) of Right to Information Act, 2005]"}
        </div>
      </div>

      <div class="to-address" style="margin: 20px 0;">
        <strong>${isHi ? "सेवा में / To," : "To,"}</strong><br/>
        The Central Public Information Officer (CPIO) / State Public Information Officer (SPIO),<br/>
        <strong>${departmentName}</strong>,<br/>
        Government of India / State Authority Secretariat.
      </div>

      <table class="details-table" style="margin-bottom: 20px;">
        <tbody>
          <tr>
            <td style="width: 8%; font-weight: bold;">1.</td>
            <td style="width: 32%;"><strong>${isHi ? "आवेदक का पूरा नाम" : "Full Name of Applicant"}</strong></td>
            <td><strong>${data.name}</strong></td>
          </tr>
          <tr>
            <td style="font-weight: bold;">2.</td>
            <td><strong>${isHi ? "नागरिकता" : "Citizenship"}</strong></td>
            <td>${isHi ? "भारतीय नागरिक (Citizen of India)" : "Citizen of India"}</td>
          </tr>
          <tr>
            <td style="font-weight: bold;">3.</td>
            <td><strong>${isHi ? "पत्राचार का पता व संपर्क" : "Address & Contact"}</strong></td>
            <td>
              Email: ${data.email}<br/>
              ${data.phone ? `Mobile/Tel: ${data.phone}<br/>` : ""}
              ${isHi ? "निवास: भारत" : "Residence: India"}
            </td>
          </tr>
          <tr>
            <td style="font-weight: bold;">4.</td>
            <td><strong>${isHi ? "वांछित सूचना का विषय" : "Subject Matter"}</strong></td>
            <td>${isHi ? "सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के अंतर्गत सार्वजनिक अभिलेखों का प्रकटीकरण।" : "Statutory disclosure of public records and official documents under Section 6(1) of the RTI Act, 2005."}</td>
          </tr>
          <tr>
            <td style="font-weight: bold;">5.</td>
            <td><strong>${isHi ? "मांगी गई विशिष्ट सूचना का विवरण" : "Information Solicited"}</strong></td>
            <td style="background: #fafaf9;">
              <div style="font-weight: normal; line-height: 1.6; white-space: pre-wrap;">${data.query}</div>
            </td>
          </tr>
          <tr>
            <td style="font-weight: bold;">6.</td>
            <td><strong>${isHi ? "सूचना की अवधि" : "Period of Information"}</strong></td>
            <td>${isHi ? "उपलब्ध अद्यतन अभिलेख व संगत वित्तीय वर्ष" : "Latest official financial records and applicable statutory period"}</td>
          </tr>
          <tr>
            <td style="font-weight: bold;">7.</td>
            <td><strong>${isHi ? "सूचना प्रेषण का माध्यम" : "Preferred Mode of Delivery"}</strong></td>
            <td>${isHi ? "पंजीकृत डाक / स्पीड पोस्ट अथवा आधिकारिक ईमेल आईडी द्वारा" : "Certified copies via Registered Speed Post / Official e-Mail Delivery"}</td>
          </tr>
          <tr>
            <td style="font-weight: bold;">8.</td>
            <td><strong>${isHi ? "आवेदन शुल्क का विवरण" : "Prescribed Application Fee"}</strong></td>
            <td>
              ${
                data.feesPaid && data.feesPaid > 0
                  ? `${isHi ? "₹10.00 का शुल्क (ई-ट्रेजरी / पोस्टल ऑर्डर / ऑनलाइन रसीद संख्या: " : "Fee of ₹10.00 enclosed via Indian Postal Order (IPO) / Online Receipt: "} <strong>${refId}</strong>)`
                  : `${isHi ? "बीपीएल श्रेणी के अधीन शुल्क से पूर्ण छूट (बीपीएल राशन कार्ड सं: " : "Exempted from fee under Below Poverty Line category (BPL Card No: "} <strong>${data.bplNo || "Enclosed"}</strong>)`
              }
            </td>
          </tr>
        </tbody>
      </table>

      <div class="declaration-box" style="margin: 20px 0; padding: 14px; border: 1px solid #d6d3d1; background: #fafaf9; border-radius: 6px; font-size: 11px; line-height: 1.6;">
        <strong>${isHi ? "आवेदक की घोषणा (Affirmation & Declaration):" : "Affirmation & Declaration:"}</strong><br/>
        1. ${isHi ? "मैं सत्यनिष्ठा से घोषणा करता/करती हूँ कि मैं भारत का नागरिक हूँ और अधिनियम की धारा 3 के अंतर्गत यह सूचना प्राप्त करने का पात्र हूँ।" : "I hereby solemnly state and declare that I am a Citizen of India and eligible to solicit information under Section 3 of the RTI Act, 2005."}<br/>
        2. ${isHi ? "यह सूचना अधिनियम की धारा 8 एवं धारा 9 में उल्लिखित किसी भी छूट श्रेणी के अंतर्गत नहीं आती है।" : "To the best of my knowledge, the information sought does not fall within the exemptions contained in Section 8 and Section 9 of the Act."}<br/>
        3. ${isHi ? "प्रस्तुत विवरण मेरे सर्वोत्तम ज्ञान और विश्वास के अनुसार सत्य एवं सही है।" : "The particulars given above are true and correct to the best of my knowledge and belief."}
      </div>

      <div class="signature-grid" style="margin-top: 36px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div><strong>${isHi ? "स्थान (Place):" : "Place:"}</strong> ___________________</div>
          <div style="margin-top: 8px;"><strong>${isHi ? "दिनांक (Date):" : "Date:"}</strong> ${currentDate}</div>
        </div>
        <div style="text-align: center;">
          <div style="border-bottom: 1px solid #1c1917; width: 220px; margin-bottom: 6px;"></div>
          <strong>${data.name}</strong><br/>
          <span style="font-size: 11px; color: #57534e;">${isHi ? "(आवेदक के हस्ताक्षर / Signature of Applicant)" : "(Signature of Applicant)"}</span>
        </div>
      </div>
    `;
  } else {
    // Mode === "status"
    title = isHi ? `RTI-ट्रैकिंग-स्थिति-${refId}` : `RTI-Status-Docket-${refId}`;

    bodyContent = `
      <div class="header-emblem">
        <div class="emblem-text">
          <div class="gov-title">${isHi ? "नागरिक सेवा केंद्र / ई-सेवा राष्ट्रीय पोर्टल" : "CITIZEN E-SEWA PORTAL / GOVERNMENT OF INDIA"}</div>
          <div class="portal-title">${isHi ? "सूचना का अधिकार (RTI) आधिकारिक स्थिति विवरण" : "RIGHT TO INFORMATION (RTI) OFFICIAL STATUS REPORT"}</div>
          <div class="act-sub">${isHi ? "निगरानी व निपटान स्थिति प्रपत्र" : "Statutory Milestone Audit & Tracking Docket"}</div>
        </div>
      </div>

      <div class="badge-row">
        <span class="badge badge-success">${data.status || (isHi ? "सक्रिय प्रसंस्करण" : "ACTIVE VERIFICATION")}</span>
        <span class="badge badge-mono">REF: ${refId}</span>
      </div>

      <table class="details-table" style="margin: 16px 0;">
        <tbody>
          <tr>
            <th style="width: 30%;">${isHi ? "पंजीकरण संदर्भ (Ref ID)" : "Application Reference"}</th>
            <td><strong style="font-family: monospace; font-size: 13px;">${refId}</strong></td>
          </tr>
          <tr>
            <th>${isHi ? "संबोधित प्राधिकरण" : "Public Authority"}</th>
            <td><strong>${departmentName}</strong></td>
          </tr>
          <tr>
            <th>${isHi ? "आवेदक का नाम" : "Applicant Name"}</th>
            <td>${data.name} (${data.email})</td>
          </tr>
          <tr>
            <th>${isHi ? "फाइलिंग तिथि" : "Filing Date"}</th>
            <td>${currentDate}</td>
          </tr>
          <tr>
            <th>${isHi ? "आरटीआई क्वेरी सार" : "Query Summary"}</th>
            <td>${data.query}</td>
          </tr>
        </tbody>
      </table>

      ${
        data.milestones && data.milestones.length > 0
          ? `
          <div class="section-box">
            <div class="section-title">${isHi ? "संवैधानिक सत्यापन चरण (Statutory Milestones)" : "Statutory Verification Milestones"}</div>
            <ol class="step-list" style="margin-top: 10px; padding-left: 20px;">
              ${data.milestones
                .map(
                  (m, idx) => `
                <li style="margin-bottom: 12px;">
                  <strong>${idx + 1}. ${m.title}</strong>
                  ${m.completed ? '<span style="color: #047857; font-size: 10px; font-weight: bold; margin-left: 8px;">[COMPLETED]</span>' : '<span style="color: #b45309; font-size: 10px; font-weight: bold; margin-left: 8px;">[PENDING]</span>'}
                  <div style="font-size: 11px; color: #57534e; margin-top: 2px;">${m.desc}</div>
                  ${m.date || m.officer ? `<div style="font-size: 10px; color: #78716c; font-family: monospace; margin-top: 2px;">${m.date ? `Date: ${m.date}` : ""} ${m.officer ? `| Officer: ${m.officer}` : ""}</div>` : ""}
                </li>
              `,
                )
                .join("")}
            </ol>
          </div>
        `
          : ""
      }

      <div class="footer">
        ${isHi ? `राष्ट्रीय नागरिक सेवा पोर्टल द्वारा डिजिटल रूप से उत्पन्न। जनहित में जारी। जन सूचना अधिकारी अनुपालन: 30 दिवस।` : `Digitally compiled via National e-Sewa Citizen Portal. Statutory response window: 30 days under RTI Act 2005.`}
      </div>
    `;
  }

  const printableHtml = `
    <!DOCTYPE html>
    <html lang="${isHi ? "hi" : "en"}">
    <head>
      <meta charset="utf-8" />
      <title>${title}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
        
        @page {
          size: A4 portrait;
          margin: 15mm 15mm 15mm 15mm;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #1c1917;
          background: #ffffff;
          padding: 24px;
          margin: 0 auto;
          max-width: 800px;
          line-height: 1.5;
          font-size: 12px;
        }

        .header-emblem {
          text-align: center;
          border-bottom: 2px solid #b45309;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }

        .gov-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #78350f;
          text-transform: uppercase;
        }

        .portal-title {
          font-size: 18px;
          font-weight: 800;
          color: #0c0a09;
          margin: 3px 0;
        }

        .act-sub {
          font-size: 11px;
          font-weight: 600;
          color: #57534e;
        }

        .form-a-header {
          text-align: center;
          border-bottom: 2px solid #1c1917;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .form-title {
          font-size: 20px;
          font-weight: 800;
          color: #1c1917;
          letter-spacing: 0.5px;
        }

        .form-subtitle {
          font-size: 11px;
          color: #44403c;
          margin-top: 4px;
        }

        .badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-success {
          background: #047857;
          color: white;
        }

        .badge-mono {
          font-family: 'JetBrains Mono', monospace;
          background: #f5f5f4;
          color: #1c1917;
          border: 1px solid #d6d3d1;
        }

        .watermark {
          position: fixed;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-35deg);
          font-size: 75px;
          font-weight: 900;
          color: rgba(180, 83, 9, 0.04);
          text-transform: uppercase;
          pointer-events: none;
          z-index: 0;
          white-space: nowrap;
        }

        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
        }

        .details-table th, 
        .details-table td {
          border: 1px solid #e7e5e4;
          padding: 8px 12px;
          text-align: left;
          font-size: 11.5px;
          vertical-align: top;
        }

        .details-table th {
          background-color: #fafaf9;
          color: #44403c;
          font-weight: 700;
        }

        .section-box {
          border: 1px solid #e7e5e4;
          border-radius: 6px;
          padding: 12px 14px;
          margin-bottom: 16px;
          background: #fafaf9;
        }

        .section-title {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #78350f;
          margin-bottom: 6px;
          border-bottom: 1px solid #e7e5e4;
          padding-bottom: 4px;
        }

        .query-content {
          font-size: 11.5px;
          line-height: 1.6;
          color: #1c1917;
          white-space: pre-wrap;
        }

        .legal-notice {
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 10.5px;
          color: #78350f;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .legal-notice ul {
          margin: 4px 0 0 0;
          padding-left: 18px;
        }

        .signature-grid {
          display: flex;
          justify-content: space-between;
          padding-top: 10px;
        }

        .sig-box {
          font-size: 11px;
        }

        .sig-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #44403c;
          font-size: 10px;
        }

        .footer {
          margin-top: 24px;
          padding-top: 10px;
          border-top: 1px solid #e7e5e4;
          font-size: 10px;
          color: #78716c;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
        }

        @media print {
          body {
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
        }
      </style>
    </head>
    <body>
      ${bodyContent}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 300);
        };
      </script>
    </body>
    </html>
  `;

  // Use hidden iframe technique for 100% reliable printing in sandboxed or iframe web environments
  try {
    const frameId = "rti-hidden-print-frame";
    let printFrame = document.getElementById(frameId) as HTMLIFrameElement;
    if (printFrame) {
      document.body.removeChild(printFrame);
    }

    printFrame = document.createElement("iframe");
    printFrame.id = frameId;
    printFrame.style.position = "fixed";
    printFrame.style.right = "0";
    printFrame.style.bottom = "0";
    printFrame.style.width = "0";
    printFrame.style.height = "0";
    printFrame.style.border = "0";
    printFrame.style.opacity = "0";
    printFrame.style.pointerEvents = "none";
    document.body.appendChild(printFrame);

    const doc = printFrame.contentWindow?.document || printFrame.contentDocument;
    if (doc) {
      doc.open();
      doc.write(printableHtml);
      doc.close();
      return;
    }
  } catch (err) {
    console.warn("Iframe printing failed, trying popup/window fallback:", err);
  }

  // Fallback if iframe document was blocked
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(printableHtml);
    printWindow.document.close();
  } else {
    window.print();
  }
}
