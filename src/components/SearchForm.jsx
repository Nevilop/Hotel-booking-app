import Select from "./UI/Select";

export default function SearchForm() {
  return (
    <form
      className="w-[95%] max-w-desktop grid gap-x-7 gap-y-7 p-7 mx-auto shadow-lg rounded-md -translate-y-2/4 bg-white breakpoint-lg:grid-flow-col
    breakpoint-lg:items-end"
    >
      <div className="grid grid-flow-col gap-x-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="checkIn">Check In</label>
          <input
            type="date"
            name="checkin-date"
            id="checkIn"
            className="py-[11px] pl-3 border-2 border-solid hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="checkOut">Check Out</label>
          <input
            type="date"
            name="checkout-date"
            id="checkOut"
            className="py-[11px] pl-3 border-2 border-solid hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-flow-col gap-x-7">
        <div className="flex flex-col gap-2">
          <Select name={"room"} />
        </div>
        <div className="flex flex-col gap-2">
          <Select name={"Adult"} />
        </div>
        <div className="flex flex-col gap-2">
          <Select name={"Chilren"} />
        </div>
      </div>

      <button className="py-[15px] px-10 text-sm bg-accent text-white">
        Check Availability
      </button>
    </form>
  );
}
