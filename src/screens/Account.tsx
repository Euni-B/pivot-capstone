function Account() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Page Title */}
      <h1 className="font-heading text-4xl text-primary-dark md:text-5xl">
        Account
      </h1>

      {/* Placeholder Content */}
      <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-heading text-2xl text-primary-dark">
          Seller Dashboard Coming Soon
        </h2>

        <p className="mt-4 font-body text-base text-primary-dark/75">
          This page will allow users to:
        </p>

        <ul className="mt-4 space-y-2 font-body text-base text-primary-dark/75">
          <li>• Create an account</li>
          <li>• Manage seller profiles</li>
          <li>• Add and edit products</li>
          <li>• View orders</li>
          <li>• Manage subscriptions</li>
        </ul>
      </div>
    </main>
  );
}

export default Account;