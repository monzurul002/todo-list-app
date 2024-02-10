import { FaPenNib } from "react-icons/fa";

const UpdateModal = ({ handleSubmit, handleClose, titleRef, descriptionRef, setUpdateTaskPriority }) => {



    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-10/12 bg-primary text-white ">
                    <h2 className="text-center font-bold text-gray-300 text-xl">Update Your Todo</h2>
                    <form onSubmit={handleSubmit}>
                        {/* close btn */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleClose()}>✕</button>

                        {/* task title input area */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Task Title</span>
                            </div>
                            <div className="input  border-white w-full flex justify-bewteen gap-3 items-center bg-primary ">
                                <FaPenNib />
                                <input type="text" ref={titleRef} className="bg-primary" placeholder="Type here" />
                            </div>
                        </label>

                        {/* description input area */}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text text-white">Update Task Description</span>
                            </div>
                            <div className="  w-full flex justify-bewteen gap-3 items-center ">
                                <textarea placeholder="Write Desctiption" ref={descriptionRef} className="textarea textarea-bordered textarea-lg w-full bg-primary border-white " ></textarea>
                            </div>
                        </label>

                        {/* select option */}
                        <label className="form-control w-full mt-2 text-white ">
                            <div className="label">
                                <span className="label-text text-white">Update Task Priority</span>
                            </div>
                            <select onChange={(e) => setUpdateTaskPriority(e.target.value)} className="select select-bordered border-white bg-primary">
                                <option disabled selected>Pick one</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <div className="label">
                                <span className="label-text-alt">Alt label</span>
                                <span className="label-text-alt">Alt label</span>
                            </div>
                        </label>

                        {/* submit button */}
                        <input className="btn bg-indigo-700 text-white px-8 hover:bg-warning my-3" type="submit" value="Submit" />

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateModal;