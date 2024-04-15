import startIcon from "../assets/images/icon-star.svg";
const RatingCard = () => {
  return (
    <article className="bg-secondary p-8 rounded-3xl space-y-8">
      <img src={startIcon} className="p-2 bg-neutral-500 rounded-full" alt="" />
      <h1 className="text-neutral text-3xl font-overpasse">How did we do?</h1>
      <p className="text-neutral-50 text-xs lg:text-base">
        Please let us know how we did with your support <br /> request. All feedback is
        appreciated to help us <br /> improve our offering!
      </p>
      <ul className="w-full flex justify-between">
        {
          [1, 2, 3, 4,5].map((rate)=>(
            <li key={rate}><button className="bg-secondary-900 bg-opacity-20 text-neutral-500 rounded-full w-12 h-12 active:bg-primary hover:bg-neutral-50 hover:text-neutral  active:text-neutral ">{rate}</button></li>
          ))
        }
      </ul>
      <button className="w-full bg-primary py-4 rounded-full text-neutral text-xl active:bg-neutral active:text-primary">SUBMIT</button>
    </article>
  );
};

export default RatingCard;
