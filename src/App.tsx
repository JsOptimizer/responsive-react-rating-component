import { useState } from "react";
import { RatedCard, RatingCard } from "./components";


function App() {
  const [isSubmit,setIsSubmit] =useState<boolean>(()=>false)
  const [rating,setRating]=useState<number|null>(()=>null)
  return (
      <main className="w-screen h-[100dvh] bg-secondary-900 flex items-center justify-center">
        {!isSubmit&&(
           <RatingCard setRating={setRating} setIsSubmit={setIsSubmit} rating={rating} />
        ) }
        {
          isSubmit&&(
            <RatedCard rating={rating} />
          )
        }
      </main>
  );
}

export default App;
