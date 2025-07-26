import { LayoutGrid, Info } from "lucide-react";

function Header() {
    return (
        // Changed to bg-base-300, a standard DaisyUI color
        <div className="navbar bg-base-300 rounded-b-lg shadow-lg">

            {/* navbar-start is the direct parent now */}
            <div className="navbar-start">
                <div className="tooltip tooltip-right" data-tip="About Vetra">
                    <div className="btn btn-ghost btn-circle hover:bg-base-200">
                        <Info className="text-secondary"/>
                    </div>
                </div>
            </div>

            <div className="navbar-center">
                <a href="/" className="link no-underline font-philosopher text-2xl text-primary">Vetra</a>
            </div>

            {/* navbar-end is the direct parent now */}
            <div className="navbar-end">
                <div className="tooltip tooltip-left" data-tip="Rearrange Notes">
                    <div className="btn btn-ghost btn-square hover:bg-base-200">
                        <LayoutGrid className="text-secondary"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;