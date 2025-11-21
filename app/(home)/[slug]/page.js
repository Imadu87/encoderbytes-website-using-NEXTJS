export default function Page({ params }) {
  const page = params.slug

  return (
    <div className="mt-40 flex items-center justify-center">
      <h1 className="text-5xl font-bold">{page} Page Coming Soon...</h1>
    </div>
  );
}
