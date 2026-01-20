export default function Section({ title, children }) {
  return (
    <section className="py-14 border-b last:border-b-0">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
}
