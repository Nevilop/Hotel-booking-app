export default function AboutUs() {
  return (
    <section>
      <div className="max-w-desktop mx-auto my-20 grid grid-flow-col">
        <div className="w-[36rem]">
          <div className="mb-12">
            <h6 className="text-accent font-medium uppercase mb-3">about us</h6>
            <h2 className="font-medium text-3xl text-dark tracking-wider breakpoint-md:text-[2.625rem] leading-tight">
              Welcome to <br />
              Mero Hotel App
            </h2>
          </div>
          <div>
            <h5 className="font-normal text-2xl text-dark leading-[1.8]">
              With over 340 hotels worldwide, NH Hotel Group offers a wide
              variety of hotels catering for a perfect stay no matter where your
              destination.
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/183767/medium/d9937573584abc5c.JPG"
              alt="#"
              className="rounded-xl  transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/18368/medium/03291b6363248c06.jpg"
              alt="#"
              className="rounded-xl transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/57434/medium/b973d46fe1b7c63b.jpg"
              alt="#"
              className="rounded-xl transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/43385/medium/71d959b6d18f6832.jpg"
              alt="#"
              className="rounded-xl transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
