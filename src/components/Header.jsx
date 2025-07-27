import { LayoutGrid, Info, PlusCircleIcon } from "lucide-react";

function Header(props) {
    return (
        <div className="navbar bg-base-300 rounded-b-lg shadow-lg">
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
            <div className="navbar-end">
                <div className="tooltip tooltip-left" data-tip="Add Note">
                    <div className="btn btn-ghost btn-square hover:bg-base-200 mr-5">
                        <PlusCircleIcon className="text-secondary" onClick={props.addNotes}/>
                    </div>
                </div>
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