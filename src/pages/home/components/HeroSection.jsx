import { intro } from "../../../images";

export const HeroSection = () => {
  return (
    <section className="block justify-between items-center gap-5 sm:flex">
      <div className="my-4">
        <h1 className="text-4xl mb-4">Find the best in Fake Store</h1>
        <p className="text-xl mb-6">
          Discover exclusive products and special offers just for you
        </p>
        <button className="rounded-md bg-primary-800 text-white px-3 py-2 transition-all duration-300 hover:bg-primary-700">
          Explore Now
        </button>
      </div>
      <figure className="h-96">
        <img className="h-full" src={intro} alt="" />
      </figure>
    </section>
  );
};
