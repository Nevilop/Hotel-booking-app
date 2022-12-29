import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section className="relative">
      <div className="min-h-screen bg-hero bg-no-repeat bg-center bg-cover">
        <div className="min-h-screen grid place-content-center gap-7 text-center text-white custom-overlay">
          <p className="tracking-wide uppercase font-medium">Hotel & Resort</p>
          <h1>Wellcome to Hotel App</h1>
          <button className="mx-auto px-10 py-3 bg-transparent outline outline-2 outline-accent transition-all duration-200 ease-in-out hover:bg-accent">
            Discover Now
          </button>
        </div>
      </div>
      <SearchForm />
    </section>
  );
}
