import Logo from "../icons/Logo";
import RoutButton from "./RoutButton";

const Sidebar = () => {
    return (
        <div>
            <Logo />
            <div></div>
            <h1>Hi! 👋</h1>
            <p>Welcome to MacPaw Bootcamp 2023</p>
            <p>Lets start using The Cat API</p>
            <div>
                <RoutButton />
                <RoutButton />
                <RoutButton />
            </div>
        </div>
    );
};

export default Sidebar;
