export default function SearchBox() {
    return (
        <div className="max-w-screen-xl mb-8 mx-auto">
            <div className="mb-4">
                <label htmlFor="search" className="block text-lg font-medium text-black">
                    Search Products
                </label>
            </div>
            <div className="flex">
                <input
                    type="text"
                    id="search"
                    placeholder="Search Products"
                    className="flex-grow pl-5 py-4 border border-[#E0E0E0] rounded-l-md focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-4 bg-[#2681FF] text-white rounded-r-md hover:bg-[#2D78E0]">
                    Find Product
                </button>
            </div>
        </div>
    );
}