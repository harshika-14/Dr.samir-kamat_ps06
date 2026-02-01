export default function Opportunity() {
  return (
    <section className="px-10 py-16 bg-gradient-to-r from-indigo-100 to-blue-100 text-black rounded-xl mx-10 my-20">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">70%</h2>
          <p>roadside incidents occur without immediate help</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">60%</h2>
          <p>drivers panic during vehicle emergencies</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">24/7</h2>
          <p>admin monitoring saves lives</p>
        </div>
      </div>
    </section>
  );
}