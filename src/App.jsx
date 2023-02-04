import { useState } from "react";
import Form from "./components/form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <header>
        <div>
          <p className="text-2xl font-poppins text-[#539C64]  p-3 shadow-sm border-b">
            NoniNursery
          </p>
        </div>
      </header>
      <div className=" mt-8 px-4">
        <Form />
      </div>
    </div>
  );
}

export default App;
