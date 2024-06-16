export default function InfoGrid() {
    const infoData = [
        {
            title: "Global Products Information",
            description: "Seek trending commodities in global market. Shifting the way of international trades and purchase global products from companies",
            cta: "Find products",
        },
        {
            title: "Seek Commodities",
            description: "Seek trending commodities in global market. Shifting the way of international trades and purchase global products from companies",
            cta: "Find products",
        },
        {
            title: "Find Country's Regulation",
            description: "Seek trending commodities in global market. Shifting the way of international trades and purchase global products from companies",
            cta: "Find products",
        },
        {
            title: "Find Buyers & Suppliers",
            description: "Seek trending commodities in global market. Shifting the way of international trades and purchase global products from companies",
            cta: "Find products",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {infoData.map((item, index) => (
                    <div key={index} className="bg-white border px-5 py-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-base text-gray-600 mb-3">{item.description}</p>
                        <a href="/" className="text-blue-600 hover:text-blue-800">
                            {item.cta} &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}