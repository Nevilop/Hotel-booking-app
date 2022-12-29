import cardData from "../data";
import Card from "../components/UI/Card";

export default function Rooms() {
  const datas = cardData.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <section>
      <div className="max-w-[78rem] mx-auto grid justify-center gap-y-8 my-12 breakpoint-sm:grid-cols-2 breakpoint-md:grid-cols-3 breakpoint-xl:grid-cols-4">
        {datas}
      </div>
    </section>
  );
}
