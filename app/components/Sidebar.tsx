import EyeOpen from "../assets/icons/EyeOpen";
import Logo from "../assets/icons/Logo";
import RoutButton from "./RoutButton";

const Sidebar = () => {
    return (
        <div>
            <a href="/" title="Logo page">
                <Logo />
            </a>
            <div>
                <div>
                    <EyeOpen />
                </div>
                <div></div>
            </div>
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
