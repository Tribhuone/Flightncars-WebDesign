
export default function IconTile({ image, label }) {

    return (
        <div className="flex flex-col items-center gap-2 my-2 text-slate-900
            hover:scale-105 transition-all duration-400 cursor-pointer py-2">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                <img
                    src={image}
                    width={30}
                    height={30}
                    alt={label}
                />
            </div>

            <p className="text-sm font-normal text-center mt-2 text-slate-900">
                {label}
            </p>
        </div>
    );
}
