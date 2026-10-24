import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Vacationcard from "./components/Vacationcard";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"Prashant Kumar",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 border-rose-500 rounded-2xl">
        Hello React With TailwindCSS
      </h1>
      {/* <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center bg-amber-50 sm:gap-6 sm:py-4 ...">
        <img
          class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWAY5XYJzjfvA59BiN88pOp2tMOV3O9pxiYEcm239Cg&s"
          alt=""
        />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-amber-600">Erin Lindford</p>
            <p class="font-medium text-red-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div> */}
      <Card channel='chaiaurcode' someObje={myObj}/>
      <Card />
      <Vacationcard 
        img="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
        imgAlt="Colorful coastal Italian village"
        eyebrow="Explore Europe"
        title="Italian Coastal Holiday"
        pricing="From ₹20,000 / person"
        url="https://example.com/italy"
        />

      <Vacationcard
        img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
        imgAlt="Beautiful tropical beach"
        eyebrow="Relax by the sea"
        title="Maldives Beach Resort"
        
        url="https://example.com/maldives"
      />
    </>
  );
}

export default App;
