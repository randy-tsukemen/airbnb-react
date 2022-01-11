import Header from "../components/Header";
import Footer from "../components/Footer";

const Search = () => {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ properties for rent in the guests.</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div
            className="hidden lg:inline-flex mb-5 space-x-3
            text-gray-800 whitespace-nowrap"
          >
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More filters</p>
          </div>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
