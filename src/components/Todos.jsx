
import { useRef, useState } from "react";
import Lists from "./Lists";
import Modal from "./Modal";
import { LuPlusCircle } from "react-icons/lu";
import notask from "../assets/notask.png"
const Todos = () => {
    //getTOdosfromlocalStorage
    const getLocalStorageLits = () => {
        const lists = localStorage.getItem("lists");

        if (lists) {
            return JSON.parse(lists);
        } else {
            return [];
        }
    };

    const [tasks, setTasks] = useState(getLocalStorageLits());
    const titleRef = useRef();
    const descriptionRef = useRef();
    const [taskPriority, setTaskPriority] = useState("");

    //addTodo
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if (!title || !description || !taskPriority) {

            return alert("Form fill up frist correctly.")
        }
        const taskInfo = {
            id: "todo" + Math.random().toString(16).slice(2, 9),
            title,
            description,
            completed: false,
            taskPriority
        };

        const updatedTasks = [...tasks, taskInfo];
        // Update state with updated tasks
        setTasks(updatedTasks);
        localStorage.setItem("lists", JSON.stringify(updatedTasks));
        // Clear title input field
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        setTaskPriority("");

    };

    //modal close function
    function handleClose() {
        const modal = document.getElementById("my_modal_1");
        modal.close();
    }

    const completedTask = tasks.filter(task => task.completed === true)


    return (
        <div className="w-11/12 mx-auto text-white">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl pt-8 font-bold text-gray-300 text-center">ToDo List</h2>
                <p className="text-xl font-sm text-gray-400">Here you will get all your ToDo list.</p>

                <div className="flex justify-between flex-col-reverse mb-4 md:flex-row  items-center">
                    <div className="flex justify-between gap-4">
                        <h2 className="text-xl font-semibold">Total Task: {tasks.length}</h2>
                        <h2 className="text-xl font-semibold">Completed Task : {completedTask.length}</h2>
                    </div>
                    {/* Add Todo button */}
                    <button className="btn bg-indigo-700 text-white my-3 hover:bg-indigo-900" onClick={() => document.getElementById("my_modal_1").showModal()}><LuPlusCircle className="font-bold text-xl text-md text-white" /> ADD NEW TODOS</button>
                </div>

                {/* modal */}
                <Modal handleSubmit={handleSubmit} handleClose={handleClose} titleRef={titleRef} descriptionRef={descriptionRef} setTaskPriority={setTaskPriority} ></Modal>



            </div>

            {/* show list by table */}
            <div className="overflow-x-auto ">

                {
                    tasks.length === 0 ? <div className="flex flex-col justify-center items-center ">
                        <img src={notask} className="w-44" alt="" />
                        <h2 className="text-3xl py-5 text-center font-bold">You have no task </h2>
                    </div> :
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className=" text-white text-md bg-slate-600">
                                    <th>#</th>

                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Completed</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((list, index) => <Lists list={list} key={index} index={index} tasks={tasks} setTasks={setTasks} ></Lists>)

                                }


                            </tbody>
                        </table>
                }

                <div className=" flex justify-center gap-4 bg-gray-900 px-3 py-2 space-y-1 text-white">

                    <p className=" font-semibold flex justify-between gap-2 items-center">Low <span className="w-6 h-6 rounded-full bg-primary text-primary">ddi</span> </p>
                    <p className=" font-semibold flex justify-between gap-2">Medium <span className="w-6 h-6 rounded-full bg-yellow-600  text-yellow-600">ddi</span> </p>
                    <p className="font-semibold flex justify-between items-center gap-2 ">High <span className="w-6 h-6 rounded-full bg-indigo-700 text-indigo-700">ddi</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Todos;





