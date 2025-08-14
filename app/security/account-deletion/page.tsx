export const metadata = {
    title: "Account Deletion Information | NotaryCentral",
    description: "Learn how to delete your NotaryCentral account, what personal data is removed, and how our retention policy works so you can manage information with confidence.",
  }
  
  export default function AccountDeletion() {
    return (
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Account Deletion Information</h1>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Developer Name</h2>
            <p>Alexander Leon</p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Account Deletion Steps</h2>
            <p className="mb-2">To request account deletion, please email us at:</p>
            <p className="font-bold mb-4">alex@notarycentral.org</p>
            <p className="mb-2">In your email, please include the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your full name</li>
              <li>Your email address associated with the account</li>
              <li>Any additional information that can help us verify your identity</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Data Deletion and Retention</h2>
            <p className="mb-2">Upon account deletion, the following data will be completely scrubbed:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Personal information (name, email, etc.)</li>
              <li>App usage history</li>
              <li>Preferences and settings</li>
              <li>Any saved content and files</li>
            </ul>
            <p>No data will be retained after account deletion.</p>
          </section>
        </div>
      </div>
    )
  }
  