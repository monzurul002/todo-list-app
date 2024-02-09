import todo from "./assets/todo.png";
import { LuPlusCircle } from "react-icons/lu";


const App = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto">
      <div className="flex justify-center items-center  ">
        <div className="w-full md:w-1/3 text-center">
          <img className="w-full" src={todo} alt="" />
          <h2 className="text-2xl md:text-3xl mt-[-20px] font-bold text-gray-300 text-center	 ">Qtec Task Todo Add</h2>
        </div>
      </div>
      <div>
        <div className="w-8/12 mx-auto mt-[-20px]">
          <p className="py-12 mx-4 text-md text-gray-400 font-semibold text-center"> Qtec Task ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list.It is helpful in planning our daily schedules.</p>

          <div className="flex justify-center">
            <button className="flex justify-center gap-1  bg-indigo-800 items-center text-center font-bold text-white py-2 px-3 text-sm rounded-lg">
              <LuPlusCircle className="font-bold text-xl text-md text-white" />
              ADD YOUR TODO NOW</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default App;