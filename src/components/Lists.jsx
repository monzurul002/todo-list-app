import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Lists = ({ list, index }) => {
    const { title, description, completed, taskPriority } = list;
    return (<tr className={`${taskPriority === "high" ? "bg-red-400" : taskPriority === "medium" ? "bg-yellow-300" : "bg-primary"}`}>

        <th>{index + 1}</th>
        <td>{title}</td>
        <td>{description}</td>
        <td>{completed ? <input type="checkbox" checked="checked" className="checkbox checkbox-xs checkbox-success" /> :
            <input type="radio" name="radio-5" className="radio radio-success" />}</td>
        <td className=" px-2 py-2 text-green-600 font-bold text-2xl ">
            <button><FaRegEdit /></button>
        </td>
        <td>
            <button className="text-2xl bg-red-400 px-1 py-1 rounded-lg"><MdDelete className="text-white" />
            </button>
        </td>
    </tr>


    );
};

export default Lists;