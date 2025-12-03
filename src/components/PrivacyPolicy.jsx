import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 className="text-3xl font-bold mb-4">
        Privacy Policy — syedasadhashmi.online
      </h1>
      {/* <p><strong>Last Updated: [Add Date]</strong></p> */}

      <p>
        This Privacy Policy (“Policy”) describes how{" "}
        <strong>syedasadhashmi.online</strong>
        (“Platform”, “We”, “Us”) collects, uses, maintains, and discloses the
        information of users (“Friend”, “You”, “Your”). By using this Platform,
        You agree to the practices outlined below.
      </p>

      <h2>1. Personal Information</h2>
      <p>
        Personal Information includes identifiable data such as your name,
        email, phone number, age, gender, location, and more. Sensitive
        information includes passwords, financial data, government IDs,
        biometric data, sexual orientation, religious or political beliefs, and
        other data protected under global privacy laws.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>a. Personal Identifiable Information</h3>
      <p>
        We may collect information like your name and email when you voluntarily
        submit it while registering or accessing any features.
      </p>

      <h3>b. Non-Personal Identifiable Information</h3>
      <p>
        We automatically collect browser type, IP address, OS details, device
        data, time stamps, and similar analytical data.
      </p>

      <h3>c. Cookies</h3>
      <p>
        Cookies help us improve user experience. You may disable cookies, but
        some features may stop working properly.
      </p>

      <h2>3. How We Use & Share Your Information</h2>
      <ul>
        <li>To provide access to the platform</li>
        <li>To improve Friend making experience and security</li>
        <li>To detect fraud and prevent misuse</li>
        <li>To communicate new features, updates, and offers</li>
      </ul>

      <p>
        <strong>We do NOT sell your personal information.</strong>
      </p>

      <h2>4. Your Choices</h2>
      <p>
        You may control the information you provide, unsubscribe from
        communications, disable cookies, or request account deletion.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request access, correction, deletion, restriction, or withdrawal
        of consent for your data depending on your country’s laws.
      </p>

      <h2>6. Protection of Your Data</h2>
      <p>
        We use reasonable security measures to protect your data from
        unauthorized access, misuse, and loss. However, no system can guarantee
        absolute security.
      </p>

      <h2>7. Third-Party Websites</h2>
      <p>
        syedasadhashmi.online may contain external links. We do not control or
        take responsibility for third-party privacy practices.
      </p>

      <h2>8. Cross-Border Data Transfer</h2>
      <p>
        Your information may be processed or stored on servers located outside
        your country. By using the Platform, you consent to this.
      </p>

      <h2>9. Data Retention</h2>
      <p>
        We retain data only as long as it is necessary for legal or operational
        reasons. Public content (comments, reviews) may remain visible even
        after account deletion, but will be anonymized.
      </p>

      <h2>10. Updates to This Policy</h2>
      <p>
        We may update this Policy from time to time. The “Last Updated” date
        will reflect the latest changes.
      </p>

      <h2>11. Grievances</h2>
      <p>For privacy concerns, data requests, or complaints, contact:</p>

      <p>
        <strong>Name:</strong> Syed Asad Hashmi <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:asadhashmi22@gmail.com">asadhashmi22@gmail.com</a>{" "}
        <br />
        <strong>Website:</strong> https://syedasadhashmi.online
      </p>

      <h2>Country-Specific Rights</h2>

      <h3>1. For Indian Residents</h3>
      <p>
        Rights include Access, Correction, Data Portability, Erasure, and the
        Right to be Forgotten as per the upcoming Data Protection laws.
      </p>

      <h3>2. For UK, EU & EEA Residents (GDPR)</h3>
      <p>
        You have the Right to Access, Rectify, Erase, Restrict, Object, Data
        Portability, and to avoid automated profiling. You may also file
        complaints with regional data protection authorities.
      </p>

      <br />
      <p>Thank you for using syedasadhashmi.online</p>
    </div>
  );
};

export default PrivacyPolicy;
