import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  return (
    <>
      <div className="w-72">
        <div className="overflow-hidden rounded-xl">
          <img
            src={props.coverImg}
            alt="#"
            className="rounded-xl mb-3 transition-transform duration-200 ease-linear hover:scale-110"
          />
        </div>
        <div className="card-data">
          <div className="flex items-start justify-between">
            <h2>{props.hotelName}</h2>
            <span className="flex items-center gap-1">
              <AiFillStar /> {props.review}
            </span>
          </div>
          <p className="text-dark2">
            {props.street}, {props.city}
          </p>
          <div>NRP{props.price} / night</div>
        </div>
      </div>
    </>
  );
}
