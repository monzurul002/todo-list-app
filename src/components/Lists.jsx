import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Lists = ({ list, index, tasks, setTasks }) => {
    const { id, title, description, completed, taskPriority } = list;

    const handleDeleteAList = (id) => {
        const newTasks = tasks?.filter(task => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem("lists", JSON.stringify(newTasks));
    }

    return (
        <tr className={`${taskPriority === "high" ? "bg-red-400" : taskPriority === "medium" ? "bg-yellow-200" : "bg-primary"}`}>

            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td>{completed ? <input type="checkbox" checked="checked" className="checkbox checkbox-xs checkbox-success" /> :
                <input type="radio" name="radio-5" className="radio radio-success" />}</td>
            <td className=" px-2  text-green-600 font-bold text-xl ">
                <button className="px-2 py-2 rounded-lg bg-green-500"><FaRegEdit className="text-white" /></button>
            </td>
            <td>
                <button onClick={() => { handleDeleteAList(id) }} className="text-2xl bg-red-400 px-1 py-1 rounded-lg"><MdDelete className="text-white" />
                </button>
            </td>
        </tr>


    );
};

export default Lists;