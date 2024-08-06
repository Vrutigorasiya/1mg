import React from "react";
import logo from "../assets/Images/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FactoryIcon from '@mui/icons-material/Factory';
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import 'react-pro-sidebar/dist/css/styles.css'; // Import default styles

const Navbar = ({ isOpen }) => {
    return (
        <>
            <div className={`hidden md:block max-w-[${!isOpen ? '80px' : '25px'}]`}>
                <Sidebar className="h-full" collapsed={!isOpen}>
                    <div className="flex py-3 px-5">
                        <img src={logo} alt="logo" className="w-8 lg:block md:w-11" />
                        {isOpen && <h3 className="uppercase font-bold md:text-xl my-auto pl-2">Dava's bazar</h3>}
                    </div>
                    <Menu>
                        <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" />}>
                            Dashboard
                        </MenuItem>
                        <SubMenu label="Products" icon={<LocalParkingIcon />}>
                            <MenuItem component={<Link to="/productlist" />}>Product List</MenuItem>
                            {/* <MenuItem component={<Link to="/productview" />}>Product View</MenuItem> */}
                            <MenuItem component={<Link to="/productupload" />}>Product Upload</MenuItem>
                        </SubMenu>
                        <SubMenu label="Manufacturer" icon={<FactoryIcon />}>
                            <MenuItem component={<Link to="/manufacturerlist" />}>Manufacturer List</MenuItem>
                            <MenuItem component={<Link to="/manufacturerview" />}>Manufacturer View</MenuItem>
                            <MenuItem component={<Link to="/manufacturerupload" />}>Manufacturer Upload</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<ShoppingCartCheckoutIcon />} component={<Link to="/orders" />}>
                            Orders
                        </MenuItem>
                        <MenuItem icon={<MessageIcon />} component={<Link to="/messages" />}>
                            Messages
                        </MenuItem>
                        <MenuItem icon={<NotificationsIcon />} component={<Link to="/notifications" />}>
                            Notifications
                        </MenuItem>
                        <MenuItem icon={<SettingsIcon />} component={<Link to="/settings" />}>
                            Settings
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    );
};

export default Navbar;
