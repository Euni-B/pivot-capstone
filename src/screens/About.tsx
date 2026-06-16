import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <main className="bg-light-background text-primary-dark">
      {/* Main About page container */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="absolute left-0 top-10 h-[800px] w-full rounded-[2rem] overflow-hidden">
          <img
            src="https://media.istockphoto.com/photos/portrait-of-successful-business-team-standing-in-an-office-picture-id537820095?k=20&m=537820095&s=612x612&w=0&h=A86nzlp_8WdvMOXjXvB2KximoLb3HnEG5juAPPtV0H4="
            alt="NeighborGoods community"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Faded overlay */}
          <div className="absolute inset-0 bg-light-background/80" />
        </div>

        {/* Page intro */}
        <section className="ml-6 grid gap-16 pt-5 md:grid-cols-2 md:items-start">
          {/* Mission / Bio */}
          <div data-aos="fade-right" className="md:-ml-6">
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Our Mission
            </h1>


            <p className="font-body text-base leading-relaxed text-primary-dark/80 md:text-lg">
              NeighborGoods was created to make community trade more accessible.

              Our goal is simple: provide a place where local growers, makers,
              and small businesses can showcase their products while helping buyers
              discover quality goods from people nearby.

              Instead of requiring sellers to build websites, learn marketing,
              or compete with large online retailers, NeighborGoods provides a shared marketplace
              designed specifically for local communities.

              When buyers support local sellers, more money stays within the community,
              relationships become stronger, and small businesses have a better opportunity to grow.

              NeighborGoods exists to help make those connections easier.
            </p>
          </div>

          {/* Our Why */}
          <div data-aos="fade-left" className="md:mt-10 md:ml-6">
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Our Why
            </h2>


            <p className="font-body text-base leading-relaxed text-primary-dark/80 md:text-lg">
              We believe local sellers deserve a simple way to be discovered,
              and shoppers deserve easier access to fresh, handmade, and
              community-made products.
            </p>

            
            <button
            onClick={() => navigate("/contact")}
            className="mt-8 rounded-full bg-primary-green px-8 py-4 font-body text-base font-semibold 
            text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
             hover:bg-primary-dark"
          >
            Contact Us
          </button>
          </div>

        </section>




        {/* Story content */}
        <div className="relative z-10 mt-16 mx-auto flex min-h-[420px] max-w-3xl flex-col items-center
         justify-center px-6 text-center">

          <h2 className="font-heading text-4xl leading-tight md:text-5xl">
            Our Story
          </h2>



          <p className="mt-5 font-body text-base leading-relaxed text-primary-dark/75 md:text-lg">
            Growing up on a small farm, I saw firsthand how difficult it can be for local growers
            and makers to reach new customers. Producing quality goods is only part of the challenge.
            Finding time, resources, and knowledge to market those goods is often an entirely different job.

            Many small businesses create incredible products but struggle to gain visibility beyond their
            immediate community. After leaving farm life, I experienced the problem from the other side.

            I wanted to support local growers, artisans, and producers, but finding them wasn't always easy.
            Many of the best
            products were hidden behind word of mouth, roadside signs, or social media pages that were
            difficult to discover.

            Communities are filled with talented people creating valuable goods. The challenge is helping
            buyers and sellers
            find each other.
          </p>

        
        </div>
      </section>

    
    </main >
  );
}

export default About;