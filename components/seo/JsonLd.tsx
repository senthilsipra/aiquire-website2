import React from "react";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/constants";

interface JsonLdProps {
    type: "Organization" | "WebSite" | "ProfessionalService" | "BlogPosting" | "BreadcrumbList" | "Person" | "Course";
    data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
    const baseData = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
        />
    );
};

export const OrganizationJsonLd = () => (
    <JsonLd
        type="Organization"
        data={{
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            contactPoint: {
                "@type": "ContactPoint",
                email: CONTACT_EMAIL,
                contactType: "customer service",
            },
            sameAs: [
                "https://linkedin.com/company/aiquire",
                "https://twitter.com/aiquire",
            ],
        }}
    />
);

export const ProfessionalServiceJsonLd = () => (
    <JsonLd
        type="ProfessionalService"
        data={{
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            image: `${SITE_URL}/og-image.png`,
            description: "AI consulting and custom AI software development. We combine management consulting rigor with production-grade AI engineering.",
            address: {
                "@type": "PostalAddress",
                addressCountry: "AE", // Or appropriate country
            },
            priceRange: "$$$",
            telephone: "",
        }}
    />
);

export const WebSiteJsonLd = () => (
    <JsonLd
        type="WebSite"
        data={{
            name: SITE_NAME,
            url: SITE_URL,
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        }}
    />
);
export const BlogPostingJsonLd = ({ post }: { post: { title: string; description: string; date: string; slug: string; author: string } }) => (
    <JsonLd
        type="BlogPosting"
        data={{
            headline: post.title,
            description: post.description,
            image: `${SITE_URL}/og-image.png`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
                "@type": "Organization",
                name: SITE_NAME,
            },
            publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.png`,
                },
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${post.slug}`,
            },
        }}
    />
);

export const BreadcrumbJsonLd = ({ items }: { items: { name: string; item: string }[] }) => (
    <JsonLd
        type="BreadcrumbList"
        data={{
            itemListElement: items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.item.startsWith('http') ? item.item : `${SITE_URL}${item.item}`,
            })),
        }}
    />
);

export const PersonJsonLd = ({ person }: { person: { name: string; jobTitle: string; description: string; url?: string } }) => (
    <JsonLd
        type="Person"
        data={{
            name: person.name,
            jobTitle: person.jobTitle,
            description: person.description,
            ...(person.url && { url: person.url }),
            worksFor: {
                "@type": "Organization",
                name: SITE_NAME,
            },
        }}
    />
);

export const CourseJsonLd = ({ course }: { course: { name: string; description: string; provider?: string } }) => (
    <JsonLd
        type="Course"
        data={{
            name: course.name,
            description: course.description,
            provider: {
                "@type": "Organization",
                name: course.provider || SITE_NAME,
                sameAs: SITE_URL,
            },
        }}
    />
);
