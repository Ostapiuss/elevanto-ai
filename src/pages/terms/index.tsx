import DocSection from '@shared/components/DocSection';

export default function Terms() {
  return (
    <DocSection>
      <h1>Terms of use</h1>
      <p className="date">Effective date: [Insert Date]</p>
      <p>
        Welcome to [Your Company Name] (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our
        website, mobile application, or any related services (collectively, the &quot;Services&quot;), you agree to
        comply with and be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree, please do not use our
        Services.
      </p>
      <h2>Acceptance of Terms</h2>
      <p>
        By using our Services, you confirm that you are at least 18 years old or have the consent of a parent or
        guardian. Your use of the Services is subject to these Terms, as well as our Privacy Policy.
      </p>
      <h2>User Responsibilities</h2>
      <article>You agree to:</article>
      <ul>
        <li>Use the Services only for lawful purposes.</li>
        <li>Not engage in any unauthorized access, distribution, or use of our content or systems.</li>
        <li>Keep your account information secure and notify us of any unauthorized access.</li>
      </ul>
      <p style={{ marginTop: '4px' }}>
        You are solely responsible for any content you submit or actions you take through the Services.
      </p>
      <h2>Prohibited Activities</h2>
      <article>You may not:</article>
      <ul>
        <li>Copy, reproduce, distribute, or create derivative works of our content without permission</li>
        <li>Use the Services to transmit harmful or illegal material.</li>
        <li>Interfere with the functionality or security of the Services.</li>
      </ul>
      <h2>Intellectual Property</h2>
      <p>
        All content on the Services, including text, graphics, logos, and software, is the property of [Your Company
        Name] or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws
      </p>
      <h2>Disclaimers and Limitation of Liability</h2>
      <ul>
        <li>The Services are provided &quot;as is&quot; without warranties of any kind.</li>
        <li>
          We are not responsible for any interruptions, errors, or losses resulting from your use of the Services.
        </li>
        <li>
          To the fullest extent permitted by law, we disclaim liability for any damages arising from your use of the
          Services.
        </li>
      </ul>
      <h2>Third-Party Links</h2>
      <p>
        Our Services may include links to third-party websites. We are not responsible for the content, privacy
        policies, or practices of these external sites.
      </p>
      <h2>Termination of Use</h2>
      <p>
        We reserve the right to terminate or suspend your access to the Services for violations of these Terms or other
        reasons, without prior notice
      </p>
      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of [Your Country/State], without regard to its conflict of laws principles
      </p>
      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. The revised Terms will be posted here with an updated “Effective
        Date.” Your continued use of the Services signifies your acceptance of the updated Terms
      </p>
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
