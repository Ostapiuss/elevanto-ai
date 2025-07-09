import DocSection from '@shared/components/DocSection';

export default function Privacy() {
  return (
    <DocSection>
      <h1>Privacy Policy</h1>
      <p className="date">Effective date: [Insert Date]</p>
      <p>
        [Your Company Name] (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
        privacy. how we collect, use, disclose, and safeguard your information when you visit our website [insert
        website URL], including any other media form, media channel, mobile website, or mobile application related or
        connected thereto (collectively, the “Site”). By using the Site, you agree to the collection and use of
        information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do
        not access the Site.
      </p>
      <h2>Information We Collect</h2>
      <ol>
        <li>
          <h4>Personal Data</h4>
          <p>When you interact with our Site, we may collect personal information such as:</p>
          <ul>
            <li>Name, email address, phone number, and mailing address</li>
            <li>Account login credentials (if applicable)</li>
          </ul>
        </li>
        <li>
          <h4>Usage Data</h4>
          <p>Information about your interactions with our Site, including:</p>
          <ul>
            <li>IP address, browser type, and version</li>
            <li>Time and date of your visit</li>
            <li>Pages you visit and time spent on them</li>
          </ul>
        </li>
        <li>
          <h4>Cookies and Tracking</h4>
          <p>
            We use cookies and similar technologies to enhance your experience. You can control your cookie preferences
            in your browser settings.
          </p>
        </li>
      </ol>
      <h2>How We Use Your Information</h2>
      <article>We use the information we collect to:</article>
      <ul>
        <li>Provide, operate, and maintain the Site</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send updates, newsletters, and promotional communications (with your consent)</li>
        <li>Analyze usage to improve our services</li>
      </ul>
      <h2>Sharing Your Information</h2>
      <article>We do not sell your personal information. However, we may share your information with:</article>
      <ul>
        <li>Third-party service providers who assist us in operating the Site</li>
        <li>Authorities when required by law or to protect our legal rights</li>
      </ul>
      <h2>Data Security</h2>
      <article>
        We implement industry-standard measures to protect your personal information. However, no system is entirely
        secure, and we cannot guarantee absolute security.
      </article>
      <h2>Your Rights</h2>
      <article>You have the right to:</article>
      <ul>
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent for data processing</li>
        <li>File a complaint with a data protection authority</li>
      </ul>
      <h2>Changes to This Policy</h2>
      <article>
        We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a
        revised “Effective Date.”
      </article>
      <h2>Contact Us</h2>
      <article>If you have any questions or concerns about this Privacy Policy, please contact us at:</article>
      <div className="contact-list">
        <span>[Your Email Address]</span>
        <span>[Your Mailing Address]</span>
        <span>[Your Phone Number]</span>
      </div>
    </DocSection>
  );
}
