export default function Hero() {
    return (
        <div className="relative flex items-center justify-between max-w-screen-xl mx-auto bg-[url('/images/cargo-2.png')] bg-no-repeat bg-center">
            <div className="w-full flex items-center justify-end text-end">
                <div className="sm:w-1/2 sm:p-12 py-8">
                    <p className="text-gray-100 text-sm mb-2 text-center sm:text-end">Export & Import Portal for International Trades</p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-end">Connecting International Buyers & Our Local Suppliers</h1>
                    <p className="mt-4 text-white text-center sm:text-end">
                        We are confident that Indonesia has a wide range of commodities with the potential to significantly boost our exports in the global market.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 items-center sm:flex sm:justify-end sm:flex-row sm:gap-3">
                        <a href="#" className="px-6 py-3 bg-[#8FF46B] text-[#1E1E1E] font-medium hover:bg-[#66D83E] transition duration-300">
                            See about export →
                        </a>
                        <a href="#"
                            className="px-6 py-3 bg-[#1E1E1E] text-white font-medium hover:bg-gray-900 transition duration-300" >
                            Basis for Legal Imports
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}