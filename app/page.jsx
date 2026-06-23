// app/page.jsx

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Hero section */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          High-Capacity Manufacturing &amp; Precision Global Supply of Premium Grade
          Electrical Raw Components.
        </h1>
        <p className="text-slate-700">
          Engineered robustly to meet meticulous compliance requirements across residential,
          commercial, and massive public infrastructure layouts.
        </p>
      </section>

      {/* Core value grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Premium Grade Precision */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Premium Grade Precision</h2>
          <p className="text-slate-700">
            High impact-resistant layout built custom-made for completely safe, neat, and
            flame-retardant interior electrical wiring setups.
          </p>
          <a href="/products" className="text-blue-700 font-medium">
            View Pricing &amp; Size Matrix →
          </a>
        </div>

        {/* Industrial Safety Scale */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Industrial Safety Scale</h2>
          <p className="text-slate-700">
            Heavy-duty, structurally seamless conduits designed for premium insulation routing
            and architectural structural permanence.
          </p>
          <a href="/products" className="text-blue-700 font-medium">
            Analyze Technical Specs →
          </a>
        </div>

        {/* Commercial Dimensions */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Commercial Dimensions</h2>
          <p className="text-slate-700">
            An expansive range of matching couplings, robust bends, and long-lasting anchors for
            specialized fits.
          </p>
          <a href="/products" className="text-blue-700 font-medium">
            Discover Full Catalog →
          </a>
        </div>

        {/* On-Time Supply Match */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">On-Time Supply Match</h2>
          <p className="text-slate-700">
            Fully equipped to handle continuous, timed multi-ton drop distribution runs smoothly
            across major construction layouts.
          </p>
        </div>
      </section>

      {/* Production integrity section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Production Integrity &amp; Structural Uniformity</h2>
        <p className="text-slate-700">
          How we maintain top world-class structural uniformity across millions of custom raw
          units every single month.
        </p>
        <p className="text-slate-700">
          Selection of clean, ultra-dense baseline granules for absolute raw material integrity.
          Advanced automated hot-mold profiling creates continuous architectural wall-thickness
          consistency.
        </p>
        <p className="text-slate-700">
          Aggressive break-testing runs ensure maximum structural resilience under high heat and
          sudden impact loads. Secure freight loading and fast logistics deployment directly
          delivered straight onto your construction site.
        </p>
      </section>

      {/* Trust & partnership section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Trusted By Key Electrical Project Leads &amp; Commercial Bulk Buyers
        </h2>
        <p className="text-slate-700">
          Why key electrical project leads and commercial bulk buyers trust us as their primary
          raw component distribution partner.
        </p>
        <p className="text-slate-700">
          Engineered strictly to survive aggressive physical wear, high structural stress, and
          long mechanical lifespans.
        </p>
        <p className="text-slate-700">
          Formulated carefully using premium safety compounds to offer completely secure
          non-conductive property layers.
        </p>
        <p className="text-slate-700">
          Direct from our regional production floor grids, giving major commercial pricing
          leverage over standard intermediaries.
        </p>
      </section>
    </div>
  );
}
