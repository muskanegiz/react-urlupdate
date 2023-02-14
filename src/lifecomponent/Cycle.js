import Mount from "./Mount";
import Update from './Update';
import UnMount from './UnMount';
function Cycle() {
    return (
        <div className="App text-center font-bold text-xl">
            <Mount />
            <Update />
            <UnMount />
        </div>
    );
}

export default Cycle;
