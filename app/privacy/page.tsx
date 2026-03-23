import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy Policy and data protection practices for ${SITE_NAME} (SipraHub). Learn how we collect, use, and safeguard your information.`,
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Protecting your privacy is our commitment. Read the ${SITE_NAME} Privacy Policy.`,
    url: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  const lastUpdated = "March 16, 2026";

  const sections = [
    {
      id: "info-collection",
      title: "1. Information We Collect",
      content: (
        <>
          <p>We collect information that helps us provide a personalized and efficient experience. This includes:</p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Information you provide directly to us, such as your name, email address, phone number, company name, and job title when you fill out a contact form or request a consultation.</li>
            <li><strong>Usage Data:</strong> Details about your visit to our site, including your IP address, browser type, operating system, pages viewed, and the duration of your visit.</li>
            <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve user experience.</li>
            <li><strong>Payment Information:</strong> If applicable, billing details are processed through secure, third-party payment gateways. We do not store sensitive cardholder data on our servers.</li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We use the data we collect for various professional purposes:</p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>To provide, maintain, and improve our website and service offerings.</li>
            <li>To communicate with you regarding inquiries, project updates, or promotional materials.</li>
            <li>To analyze website traffic and usage patterns to optimize our content.</li>
            <li>To ensure the security of our platform and prevent fraudulent activity.</li>
            <li>To comply with legal obligations and industry standards.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sharing",
      title: "3. Information Sharing and Disclosure",
      content: (
        <>
          <p>SipraHub does not sell or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website or conducting our business (e.g., hosting providers, analytics tools).</li>
            <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as a business asset.</li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "4. Data Security",
      content: (
        <p>
          We implement industry-standard technical and organizational measures to protect your personal data. 
          While we strive to use commercially acceptable means to protect your information, please remember 
          that no method of transmission over the internet is 100% secure.
        </p>
      ),
    },
    {
      id: "retention",
      title: "5. Data Retention",
      content: (
        <p>
          We retain your personal information only for as long as is necessary for the purposes set out in 
          this Privacy Policy, or to the extent necessary to comply with our legal obligations and resolve disputes.
        </p>
      ),
    },
    {
      id: "links",
      title: "6. Third-Party Links",
      content: (
        <p>
          Our website may contain links to external sites that are not operated by us. We have no control 
          over, and assume no responsibility for, the content or privacy practices of any third-party sites.
        </p>
      ),
    },
    {
      id: "rights",
      title: "7. Your Rights",
      content: (
        <>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right to object to our processing of your personal data.</li>
            <li>The right to withdraw consent at any time where we relied on your consent to process your information.</li>
          </ul>
        </>
      ),
    },
    {
      id: "children",
      title: "8. Children's Privacy",
      content: (
        <p>
          Our services are not directed to anyone under the age of 13. We do not knowingly collect 
          personally identifiable information from children.
        </p>
      ),
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      content: (
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top.
        </p>
      ),
    },
    {
      id: "contact",
      title: "10. Contact Us",
      content: (
        <div className="bg-bgBlue/30 rounded-2xl border border-border p-6 md:p-8">
          <p className="font-semibold text-primary mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="space-y-2 text-textSecondary">
            <li>
              <span className="font-medium text-primary">Website:</span>{" "}
              <a href="https://www.siprahub.com" className="hover:text-accent transition-colors">www.siprahub.com</a>
            </li>
            <li>
              <span className="font-medium text-primary">Email:</span>{" "}
              <a href="mailto:info@siprahub.com" className="hover:text-accent transition-colors">info@siprahub.com</a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy" },
        ]}
      />

      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Legal & Compliance
            </p>
            <h1 className="font-heading font-bold text-white text-display-md md:text-display-lg leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-textSecondary mb-12">
              At SipraHub, we are committed to protecting the privacy and security of our users. 
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your 
              information when you visit our website,{" "}
              <a href="https://www.siprahub.com" className="text-accent font-medium hover:underline">www.siprahub.com</a>, 
              or use our professional services.
            </p>

            <div className="space-y-16">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-heading font-bold text-primary text-2xl md:text-3xl mb-6">
                    {section.title}
                  </h2>
                  <div className="font-body text-base md:text-lg leading-relaxed text-textSecondary">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
