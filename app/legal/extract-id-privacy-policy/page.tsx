import "./PrivacyPolicy.css"

export const metadata = {
  title: "Privacy Policy - Extract from ID Feature | NotaryCentral",
  description:
    "Learn how your data is handled when using the Extract from ID feature, what information is secured, and the safeguards that protect your privacy at every step of use.",
}

export default function PrivacyPolicy() {
  return (
    <div className="py-24 md:py-32">
      <div className="privacy-policy-container">
        <h1>"Extract from ID" Privacy Policy</h1>

        <section>
          <h2>General</h2>
          <p>
            We are committed to protecting your personal information. The "Extract from ID" feature has been designed to
            prioritize your privacy and security. This feature allows users to extract information from
            government-issued identification documents in a manner that ensures the protection of their personal data.
          </p>
        </section>

        <section>
          <h2>What Information Do We Collect?</h2>
          <ul>
            <li>
              Text extracted from the image of the ID, which may include:
              <ul>
                <li>Name</li>
                <li>Address</li>
                <li>Date of birth</li>
                <li>Identification numbers</li>
              </ul>
            </li>
            <li>Metadata such as the time of extraction and app usage information.</li>
          </ul>
          <p>No image or raw data from your ID is stored on our servers.</p>
        </section>

        <section>
          <h2>How Do We Use Your Information?</h2>
          <ul>
            <li>
              Formatting the extracted information into a structured format for your use (e.g., name, address, and ID
              number).
            </li>
            <li>Enabling features within the app that rely on structured ID information.</li>
          </ul>
          <p>
            To format the extracted text into structured data, we utilize the <strong>Gemini API</strong>. This allows
            us to organize the information (e.g., separating name, address, and ID fields) for display within the app.
          </p>
          <p>
            We do not store the extracted data or use it for any purposes other than those explicitly outlined here.
          </p>
        </section>

        <section>
          <h2>How Is Your Information Processed?</h2>
          <ol>
            <li>
              <strong>On Your Device:</strong> The text extraction is performed locally on your device using Google
              MLKit. This ensures that the image of your ID and the initial text extraction process remain within your
              control.
            </li>
            <li>
              <strong>Secure Transmission to Backend:</strong> Once the text is extracted, it is transmitted securely to
              our backend for formatting. The extracted data is processed using the Gemini API to convert it into a
              structured format (e.g., separating name, address, and other fields). All data transfers are encrypted
              using industry-standard protocols.
            </li>
          </ol>
        </section>

        <section>
          <h2>Data Retention and Deletion</h2>
          <p>
            The app does not retain the original image of your ID. The extracted text is temporarily processed by the
            backend and is not stored once the formatted output is returned to your device. If you request additional
            processing, such as data export or deletion, we will comply in accordance with applicable legal and
            regulatory requirements.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            The "Extract from ID" feature utilizes Google MLKit, a secure on-device service for text recognition. Google
            MLKit processes the image exclusively on your device and does not share it with Google or third parties.
          </p>
          <p>
            For further processing, data is sent to our backend and formatted using the Gemini API. The Gemini API
            processes only the extracted text to organize it into structured data. This data is not shared with other
            third parties unless required by law.
          </p>
        </section>

        <section>
          <h2>How Do We Protect Your Information?</h2>
          <ul>
            <li>
              <strong>On-Device Processing:</strong> The initial extraction of text from the ID image is performed
              locally on your device, ensuring the image and extracted text are not unnecessarily exposed.
            </li>
            <li>
              <strong>Encrypted Data Transmission:</strong> When data is sent to our backend, it is encrypted to prevent
              unauthorized access.
            </li>
            <li>
              <strong>Limited Access:</strong> Our backend is designed to process your data temporarily. Extracted data
              is deleted immediately after formatting is complete.
            </li>
          </ul>
        </section>

        <section>
          <h2>User Controls</h2>
          <p>
            You can choose to enable or disable the "Extract from ID" feature at any time. You retain full control over
            the data processed by this feature. Data can be cleared from the app at your discretion. Location services
            or additional device permissions required for other app features do not affect the privacy of this feature.
          </p>
        </section>

        <footer>
          <p>© Digital Mountain Group, LLC. All rights reserved.</p>
          <p>1272 SW Evergreen Ln, Florida, 37990</p>
        </footer>
      </div>
    </div>
  )
}
