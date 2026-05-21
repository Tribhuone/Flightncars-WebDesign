
import { Menu } from "lucide-react";

export default function Navbar() {
    return (

        <div className="sticky top-0 bg-white p-4 flex justify-between items-center z-1000">
            <div className="flex justify-between items-center flex-row gap-2" >
                <Menu className="cursor-pointer"/>
                    <div className="cursor-pointer" >
                        <img
                            src={"/new-logo.png" }
                            width={210}
                            height={50}
                            alt="Flighsncars"
                            className="object-contain"
                        />
                    </div>
            </div>

            <button
                className="bg-sky-500 text-white rounded-full px-5 py-2"
            >
                Sign In
            </button>
        </div>
    );
}
