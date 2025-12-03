import React, { useEffect } from "react";
import { Link } from "react-router";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-8 px-4 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-6">
        {/* <strong>Last updated:</strong> [Add Date] */}
      </p>

      <p className="mb-4">
        This website is operated by <strong>Syed Asad Hashmi</strong>.
        Throughout the site, the terms “we”, “us”, and “our” refer to the owner
        and operator of{" "}
        <a
          href="https://syedasadhashmi.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          syedasadhashmi.online
        </a>
        . We provide this website, including all information, tools, and
        services available from it, to you—the user—conditioned upon your
        acceptance of all terms, conditions, policies, and notices stated here.
      </p>

      <p className="mb-6">
        By accessing our website and/or purchasing something from us, you engage
        in our “Service” and agree to be bound by these Terms of Service
        (“Terms”). These Terms apply to all users of the site, including
        browsers, customers, merchants, vendors, and contributors of content. If
        you do not agree to all of these Terms, you may not access or use the
        website or its services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 1 – Website & Store Terms
        </h2>
        <p className="mb-2">
          By using this site, you confirm that you are at least the age of
          majority in your country or region. You agree not to use our services
          for any unlawful purpose or violate any applicable laws. You must not
          upload or transmit any viruses, malware, or malicious code. A breach
          of these Terms may result in immediate termination of your access.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 2 – General Conditions
        </h2>
        <p className="mb-2">
          We reserve the right to refuse service to anyone at any time. Your
          content (excluding payment information) may be transferred unencrypted
          across networks. You agree not to reproduce, duplicate, or exploit any
          portion of the Service without written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 3 – Accuracy & Information
        </h2>
        <p className="mb-2">
          We do not guarantee that information on the site is accurate,
          complete, or current. Content is provided as general information only
          and should not be relied upon as the sole basis for decisions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 4 – Service & Price Modifications
        </h2>
        <p className="mb-2">
          Prices and services may change at any time without notice. We are not
          liable for any modification, suspension, or discontinuation of the
          Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 5 – Products & Services
        </h2>
        <p className="mb-2">
          Products or services may have limited quantities or availability and
          may be subject to return or exchange according to our policies. We
          reserve the right to limit sales to any individual, region, or
          jurisdiction. We do not guarantee that product images on your device
          will be accurate.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 6 – Billing & Account Information
        </h2>
        <p className="mb-2">
          We may refuse or cancel orders at our discretion. You agree to provide
          accurate, complete, and up-to-date account and purchase information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 7 – Optional Third-Party Tools
        </h2>
        <p className="mb-2">
          We may provide access to third-party tools “as is” without warranties
          or endorsement. Using these tools is entirely at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 8 – Third-Party Links
        </h2>
        <p className="mb-2">
          Third-party links may direct you to websites not affiliated with us.
          We are not responsible for the content or accuracy of third-party
          materials and are not liable for any harm or damages caused by them.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 9 – User Comments & Submissions
        </h2>
        <p className="mb-2">
          You agree that we may use any comments, feedback, or submissions you
          send us without restrictions. You are responsible for ensuring your
          submissions do not violate any rights or contain harmful content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 10 – Personal Information
        </h2>
        <p className="mb-2">
          Your submission of personal information is governed by our{" "}
          <Link to="/privacyPolicy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 11 – Errors & Inaccuracies
        </h2>
        <p className="mb-2">
          The site may contain typographical errors or omissions. We reserve the
          right to correct them at any time without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 12 – Prohibited Uses
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Using the site for illegal purposes or to violate laws</li>
          <li>Infringing intellectual property</li>
          <li>Harassing, abusing, defaming, or discriminating</li>
          <li>Submitting false information</li>
          <li>Uploading malicious code</li>
          <li>Collecting personal data unlawfully</li>
          <li>Spamming, phishing, scraping, or crawling</li>
          <li>Sharing account access or redistributing paid content</li>
        </ul>
        <p className="mt-2">
          We may terminate your access for violating any prohibited use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 13 – Disclaimer of Warranties & Liability
        </h2>
        <p className="mb-2">
          We do not guarantee that our service will be uninterrupted or
          error-free. All products and services are provided “as is” without
          warranties of any kind. We are not liable for any direct, indirect,
          incidental, or consequential damages arising from your use of our
          website or services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 14 – Indemnification
        </h2>
        <p className="mb-2">
          You agree to indemnify and hold <strong>Syed Asad Hashmi</strong> and
          related partners harmless from any claim arising from your breach of
          these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 15 – Severability
        </h2>
        <p className="mb-2">
          If any provision is found unenforceable, the remaining provisions will
          still apply.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">SECTION 16 – Termination</h2>
        <p className="mb-2">
          These Terms remain effective until terminated by you or us. We may
          terminate your access at any time if you violate the Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 17 – Lifetime Access Policy
        </h2>
        <p className="mb-2">
          “Lifetime access” means access for as long as the product/service
          exists and is supported by the company. It does not guarantee
          perpetual availability; access is non-transferable and may be revoked
          if Terms are violated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 18 – Entire Agreement
        </h2>
        <p className="mb-2">
          These Terms constitute the complete agreement between you and us
          regarding the Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 19 – Governing Law
        </h2>
        <p className="mb-2">
          These Terms shall be governed by the laws of <strong>Pakistan</strong>{" "}
          and any disputes shall be subject to the jurisdiction of the courts in{" "}
          <strong>Karachi</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 20 – Changes to Terms
        </h2>
        <p className="mb-2">
          We may update or replace any part of these Terms by posting updates to
          this website. It is your responsibility to check this page
          periodically for changes. Your continued use of the site constitutes
          acceptance of those changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          SECTION 21 – Contact Information
        </h2>
        <p className="mb-2">
          Questions about the Terms of Service should be sent to:
        </p>
        <p className="text-sm">
          <strong>Owner:</strong> Syed Asad Hashmi <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:asadhashmi22@gmail.com"
            className="text-blue-600 underline"
          >
            asadhashmi22@gmail.com
          </a>
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://syedasadhashmi.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            syedasadhashmi.online
          </a>
        </p>
      </section>

      <p className="text-xs text-gray-500">
        Thank you for using syedasadhashmi.online.
      </p>
    </main>
  );
};

export default TermsOfService;
