
import { useRef, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import Lists from "./Lists";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

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

    return (
        <div className="w-11/12 mx-auto text-white">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl pt-8 font-bold text-gray-300 text-center">ToDo List</h2>
                <p className="text-xl font-sm text-gray-400">Here you will get all your ToDo list.</p>

                {/* Add Todo button */}
                <button className="btn bg-indigo-700 text-white my-3" onClick={() => document.getElementById("my_modal_1").showModal()}><TfiWrite /> ADD NEW TODOS</button>

                {/* modal */}
                <Modal handleSubmit={handleSubmit} handleClose={handleClose} titleRef={titleRef} descriptionRef={descriptionRef} setTaskPriority={setTaskPriority} ></Modal>



            </div>

            {/* show list by table */}
            <div className="overflow-x-auto ">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" text-white text-md bg-slate-400">
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
            </div>
        </div>
    );
};

export default Todos;







// <dialog id="my_modal_3" className="modal">
// <div className="modal-box w-10/12 bg-primary text-white ">
//     <form onSubmit={handleSubmit}>
//         {/* close btn */}
//         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleClose()}>✕</button>

//         {/* task title input area */}
//         <label className="form-control w-full ">
//             <div className="label">
//                 <span className="label-text text-white">Task Title</span>
//             </div>
//             <div className="input  border-white w-full flex justify-bewteen gap-3 items-center bg-primary ">
//                 <FaPenNib />
//                 <input type="text" ref={titleRef} className="bg-primary" placeholder="Type here" />
//             </div>
//         </label>

//         {/* description input area */}
//         <label className="form-control w-full  ">
//             <div className="label">
//                 <span className="label-text text-white">Task Description</span>
//             </div>
//             <div className="  w-full flex justify-bewteen gap-3 items-center ">
//                 <textarea placeholder="Desctiption" ref={descriptionRef} className="textarea textarea-bordered textarea-lg w-full bg-primary border-white " ></textarea>
//             </div>
//         </label>

//         {/* select option */}
//         <label className="form-control w-full mt-2 text-white ">
//             <div className="label">
//                 <span className="label-text text-white">Task Priority</span>
//             </div>
//             <select onChange={(e) => setTaskPriority(e.target.value)} className="select select-bordered border-white bg-primary">
//                 <option disabled selected>Pick one</option>
//                 <option value="low">Low</option>
//                 <option value="medium">Medium</option>
//                 <option value="high">High</option>
//             </select>
//             <div className="label">
//                 <span className="label-text-alt">Alt label</span>
//                 <span className="label-text-alt">Alt label</span>
//             </div>
//         </label>

//         {/* submit button */}
//         <input className="btn bg-indigo-700 text-white px-8 hover:bg-warning my-3" type="submit" value="Submit" />

//     </form>
// </div>
// </dialog>