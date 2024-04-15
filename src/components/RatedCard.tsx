import thxIcon from "../assets/images/illustration-thank-you.svg";

type TRatedCard={
  rating:number|null
}
const RatedCard = ({rating}:TRatedCard) => {
  return (
    <article className="bg-secondary p-8 rounded-3xl  space-y-8">
      <div className="w-full flex justify-center"><img src={thxIcon} alt="" /></div>
      <div className="flex justify-center"><h3 className="text-primary bg-neutral-50 bg-opacity-20 text-opacity-60 py-1 px-3 rounded-full">{`You selected ${rating} out of 5`}</h3></div>
      <h1 className="text-neutral text-center">Thank you!</h1>
      <p className="text-neutral-50 text-center">
        We appreciate you taking the time to give a rating. <br /> If you ever need
        more support, don’t hesitate to <br /> get in touch!
      </p>
    </article>
  );
};

export default RatedCard;
