import { TfiWrite } from "react-icons/tfi";

const Todos = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl pt-8 font-bold text-gray-300 text-center">ToDo List</h2>
                <p className="text-xl font-sm text-gray-400">Here you will get all your ToDo list.
                </p>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn bg-indigo-700 text-white my-3" onClick={() => document.getElementById('my_modal_3').showModal()}><TfiWrite /> ADD NEW TODOS
                </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-10/12">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </dialog>



            </div>

        </div>
    );
};

export default Todos;