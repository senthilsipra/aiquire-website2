import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Terms of Service and conditions for using ${SITE_NAME} (SipraHub) services, including our website, HR system, and IT solutions.`,
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Please read the Terms of Service for ${SITE_NAME} carefully before using our services.`,
    url: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  const lastUpdated = "March 2026";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By using our services, you confirm that you have read, understood, and agree to these Terms and 
          Services and all applicable laws and regulations. If you do not agree, please do not use our services.
        </p>
      ),
    },
    {
      id: "services",
      title: "2. Services Provided",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>IT services, project management support, manpower and HR solutions, and related consulting services.</li>
          <li>Services are provided according to agreements made between the company and clients, employees, or contractors.</li>
        </ul>
      ),
    },
    {
      id: "responsibilities",
      title: "3. User Responsibilities",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide accurate, complete, and up-to-date information when accessing our services.</li>
          <li>Keep login credentials, accounts, and any personal or professional data secure and confidential.</li>
          <li>Do not engage in unauthorized or unlawful use of the system, including hacking, sharing confidential information, or disrupting services.</li>
        </ul>
      ),
    },
    {
      id: "company-responsibilities",
      title: "4. Company Responsibilities",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Deliver services with reasonable skill, care, and professionalism.</li>
          <li>Implement security measures to protect user data and service integrity; however, absolute security cannot be guaranteed.</li>
        </ul>
      ),
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: (
        <>
          <p>
            All content, software, tools, and materials provided by SipraHub are proprietary and protected 
            under intellectual property laws.
          </p>
          <p className="mt-4">
            Users may not copy, modify, distribute, or use any content without prior written consent.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>SipraHub is not liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
          <li>Liability for direct damages is limited to the value of services provided under the applicable agreement.</li>
        </ul>
      ),
    },
    {
      id: "termination",
      title: "7. Termination",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to services may be suspended or terminated if a user violates these Terms or engages in unlawful activity.</li>
          <li>Users may terminate their use by discontinuing access or notifying the company.</li>
        </ul>
      ),
    },
    {
      id: "amendments",
      title: "8. Amendments",
      content: (
        <p>
          These Terms may be updated periodically. Updated versions will be published on our website and 
          take effect immediately upon posting.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      content: (
        <p>
          These Terms are governed by the laws of India. Any disputes arising from these Terms will be 
          resolved in the courts of Bengaluru, India.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <div className="bg-bgBlue/30 rounded-2xl border border-border p-6 md:p-8">
          <p className="font-semibold text-primary mb-4">For questions about these Terms of Service, please contact us at:</p>
          <p className="text-textSecondary">
            <span className="font-medium text-primary">Email:</span>{" "}
            <a href="mailto:contact@siprahub.com" className="hover:text-accent transition-colors">contact@siprahub.com</a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Terms of Service", item: "/terms" },
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
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-textSecondary mb-12">
              Welcome to SipraHub. By accessing or using our services—including our website, 
              HR system, or IT solutions—you agree to comply with these Terms and Services. 
              Please read them carefully before using our services.
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
