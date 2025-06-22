export default function Section({ title, children }) {
  return (
    <section className="mb-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-3 text-blue-800">{title}</h2>
      <div className="text-gray-800">{children}</div>
    </section>
  );
}
