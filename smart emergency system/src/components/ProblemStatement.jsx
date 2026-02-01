export default function ProblemSolution() {
  return (
    <section className="px-10 py-20 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-10">
        The Problem We’re Solving
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="border-l-4 border-red-600 pl-6">
          <h3 className="font-bold mb-4">Current Problems</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Vehicle breakdowns in unsafe locations</li>
            <li>• Delay in informing family or authorities</li>
            <li>• No centralized admin escalation</li>
            <li>• No real-time tracking during emergencies</li>
          </ul>
        </div>

        <div className="bg-black text-white p-6 rounded-xl">
          <h3 className="font-bold mb-4">Our Solution</h3>
          <ul className="space-y-3">
            <li>✔ One-tap emergency alert</li>
            <li>✔ Close contact + Admin escalation</li>
            <li>✔ Live GPS vehicle tracking</li>
            <li>✔ Ambulance & mechanic dispatch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}