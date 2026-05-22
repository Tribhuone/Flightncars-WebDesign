
export default function TileLayer({ image, label }) {

    return (
        <div className="flex flex-col items-center text-slate-900 rounded-2xl my-1 
            hover:scale-105 active:scale-95 transition-all duration-400 cursor-pointer 
            hover:bg-gray-100 py-2"
        >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
                <img
                    src={image}
                    width={40}
                    height={40}
                    alt={label}
                />
            </div>

            <p className="text-sm font-normal text-center mt-2 text-slate-900">
                {label}
            </p>
        </div>
    );
}
