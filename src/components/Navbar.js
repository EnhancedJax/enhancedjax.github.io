import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Icon from './icon';
import { useLocation } from 'react-router-dom'

function NavBar() {
    return (
        <div id="navbar" className="flex h-16 justify-center items-center gap-6 w-screen border-cborder border-t bg-cbg fixed bottom-0 lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col z-50">
            <Button to="/" icon="Home"></ Button>
            <Button to="/hkunotes" icon="PenLine"></ Button>
            <Button to="/stack" icon="Layers"></ Button>
            <Button to="/work" icon="Command"></ Button>
            <Button to="/about" icon="UserRound"></ Button>
        </div>
    );
}

function Button({ to, icon }) {
    const activeColor = '#EDEDED'
    const inactiveColor = '#707070'
    const location = useLocation();
    const isActive = location.pathname === to;
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link to={to} className="p-3 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Icon name={icon} size="1.5rem" color={isActive ? activeColor : inactiveColor} />
            {isHovered && (
                <div className='text-white rounded-lg text-light border border-cborder bg-cfg text-xs p-1 absolute left-16 transform top-1/2 -translate-y-1/2 hidden lg:block'>
                    <span>{to}</span>
                </div>
            )}
        </Link>
    );
}

export default NavBar;