const CreateClass = () => {
    return <>
        <div className="h-full flex items-center justify-center ">
            <div className="w-1/3 p-10 shadow-xl">
                <h1 className="text-2xl mb-4 font-bold">Create a new class</h1>
                <p>Create your own class and share them with your classmates/students</p>
                <div className="my-3">
                    <input placeholder="Enter a class name, subject etc." className="bg-gray-300 text-white w-full px-4 py-2"></input>
                </div>
                <div className="my-3">
                    <input placeholder="Enter a description (Optional)" className="bg-gray-300 text-white w-full px-4 py-2"></input>
                </div>
                <div className="my-3">
                    <input type="checkbox" className="bg-gray-300 text-white mr-3 "></input>
                    <label>Allow class members to add or remove sets</label>
                </div>
                <div className="my-3">
                    <input type="checkbox" className="bg-gray-300 text-white mr-3"></input>
                    <label>Allow class members to invite new members</label>
                </div>
                <div className="my-3">
                    <input placeholder="Enter the name of your school" className="bg-gray-300 text-white w-full px-4 py-2"></input>
                </div>
                <div className="text-end">
                    <button className="text-white bg-gray-500 px-5 py-2 rounded-full">Create class</button>
                </div>
            </div>
        </div>   
    </>
}
export default CreateClass;