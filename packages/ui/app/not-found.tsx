import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-extrabold">We could not find that page.</h1>
      <Link href="/" className="btn-navy mt-8">Back to the home page</Link>
    </section>
  );
}
