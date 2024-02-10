
import { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import UpdateModal from "./UpdateModal";

const Lists = ({ list, index, tasks, setTasks }) => {
    const { id, title, description, completed, taskPriority } = list;
    const [editItemId, setEditItemId] = useState(null);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const [updateTaskPriority, setUpdateTaskPriority] = useState("");


    //delete a list
    const handleDeleteAList = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem("lists", JSON.stringify(newTasks));
    }

    //edit a list
    const handleSubmit = (e, id) => {
        e.preventDefault()
        setEditItemId(id);
    }
    //modal close function
    function handleClose() {
        const modal = document.getElementById("my_modal_1");
        modal.close();
    }

    return (
        <>
            <tr className={`${taskPriority === "high" ? "bg-red-400" : taskPriority === "medium" ? "bg-yellow-200" : "bg-primary"}`}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>{completed ? <input type="checkbox" checked="checked" className="checkbox checkbox-xs checkbox-success" /> :
                    <input type="radio" name="radio-5" className="radio radio-success" />}</td>
                <td className=" px-2  text-green-600 font-bold text-xl ">
                    <button onClick={() => document.getElementById("my_modal_2").showModal()} className="px-2 py-2 rounded-lg bg-green-500">
                        <FaRegEdit className="text-white" />
                    </button>
                </td>
                <td>
                    <button onClick={() => handleDeleteAList(id)} className="text-2xl bg-red-400 px-1 py-1 rounded-lg"><MdDelete className="text-white" /></button>
                </td>
            </tr>

            <UpdateModal handleSubmit={handleSubmit} handleClose={handleClose} titleRef={titleRef} descriptionRef={descriptionRef} setUpdateTaskPriority={setUpdateTaskPriority} />
        </>
    );
};

export default Lists;












// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import Modal from "./Modal";
// import { useState } from "react";


// const Lists = ({ list, index, tasks, setTasks }) => {
//     const { id, title, description, completed, taskPriority } = list;
//     const [showModal, setShowModal] = useState(false);
//     const [editItem, setEditItem] = useState(null);

//     //delete a list
//     const handleDeleteAList = (id) => {
//         const newTasks = tasks?.filter(task => task.id !== id);
//         setTasks(newTasks);
//         localStorage.setItem("lists", JSON.stringify(newTasks));
//     }

//     //edit a list
//     const handleEditAList = (id) => {
//         console.log(id);
//         const editItem = tasks.find(item => item.id === id);
//         setEditItem(editItem);
//         setShowModal(true);

//     }

//     //modal close function
//     function handleClose() {
//         const modal = document.getElementById("my_modal_3");
//         modal.close();
//     }

//     return (
//         <>
//             <tr className={`${taskPriority === "high" ? "bg-red-400" : taskPriority === "medium" ? "bg-yellow-200" : "bg-primary"}`}>

//                 <th>{index + 1}</th>
//                 <td>{title}</td>
//                 <td>{description}</td>
//                 <td>{completed ? <input type="checkbox" checked="checked" className="checkbox checkbox-xs checkbox-success" /> :
//                     <input type="radio" name="radio-5" className="radio radio-success" />}</td>
//                 <td className=" px-2  text-green-600 font-bold text-xl ">
//                     <button onClick={() => handleEditAList(id)} className="px-2 py-2 rounded-lg bg-green-500">
//                         <FaRegEdit className="text-white" />
//                     </button>
//                 </td>
//                 <td>
//                     <button onClick={() => handleDeleteAList(id)} className="text-2xl bg-red-400 px-1 py-1 rounded-lg"><MdDelete className="text-white" />
//                     </button>
//                 </td>

//             </tr>
//             {showModal && <Modal tasks={tasks} setTasks={setTasks} handleClose={() => setShowModal(false)} editItem={editItem} />}
//         </>

//     );
// };

// export default Lists;