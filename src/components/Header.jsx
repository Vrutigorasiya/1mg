import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Drawer, FormControl, InputAdornment, List, OutlinedInput, Popover, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FactoryIcon from "@mui/icons-material/Factory";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Header = ({ isOpen, onSidebarToggle }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchor, setProfileAnchor] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List className="h-full" collapsed={!isOpen}>
                <Menu>
                    <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" />}>
                        Dashboard
                    </MenuItem>
                    <SubMenu label="Products" icon={<LocalParkingIcon />}>
                        <MenuItem component={<Link to="/productlist" />}>Product List</MenuItem>
                        <MenuItem component={<Link to="/productview" />}>Product View</MenuItem>
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
            </List>
        </Box>
    );

    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = (event) => {
        setProfileAnchor(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchor(null);
    };

    const openNotificationPopover = Boolean(anchorEl);
    const notificationId = openNotificationPopover ? "notification-popover" : undefined;

    const openProfilePopover = Boolean(profileAnchor);
    const profileId = openProfilePopover ? "profile-popover" : undefined;

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className="bg-white dark:bg-slate-500 w-full h-[70px] justify-between flex  px-4 lg:px-8">
            <div className="flex items-center gap-4">
                <Button className="!hidden md:!block !h-8 !w-8 md:!h-10 md:!w-10 !bg-[#233c6e] !rounded-full !min-w-6" onClick={onSidebarToggle}>
                    <MenuIcon className="text-slate-200" />
                </Button>
                <div className="flex md:!hidden">
                    <img src="imgs/logo.jpg" alt="logo" className="w-12 h-12" />
                    <h3 className="uppercase font-bold my-auto pl-2 text-sm sm:!block max-[345px]:hidden">{"Dava's"} bazar</h3>
                </div>
                <FormControl variant="outlined" className="!hidden md:!block">
                    <OutlinedInput
                        sx={{ height: "40px", borderRadius: "6px", backgroundColor: "#f0f5ff", border: "none" }}
                        placeholder="Search here..."
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{ fontSize: "22px", color: "#000" }} />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className="flex items-center gap-3">
                <Button className="md:!hidden h-8 w-8 md:h-10 md:w-10 !bg-[#233c6e] !rounded-full !min-w-6" onClick={toggleDrawer(true)}>
                    <MenuIcon className="text-slate-200" />
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                <Button className="h-8 w-8 md:h-10 md:w-10 !bg-[#233c6e] !rounded-full !min-w-6" onClick={handleToggleTheme}>
                    {theme === "light" ? <LightModeIcon sx={{ color: "#fff", fontSize: "21px" }} /> : <DarkModeIcon sx={{ color: "#fff", fontSize: "21px" }} />}
                </Button>
                <Button aria-describedby={notificationId} onClick={handleNotificationClick} className="h-8 w-8 md:h-10 md:w-10 !bg-[#233c6e] !rounded-full !min-w-6">
                    <NotificationsNoneIcon sx={{ color: "#fff" }} />
                </Button>
                <Popover
                    id={notificationId}
                    open={openNotificationPopover}
                    anchorEl={anchorEl}
                    onClose={handleNotificationClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Typography sx={{ p: 2 }}>Orders(12)</Typography>
                    <Typography sx={{ p: 2 }}>Messages(5)</Typography>
                    <Typography sx={{ p: 2 }}>Alerts(3)</Typography>
                </Popover>
                <Button aria-describedby={profileId} onClick={handleProfileClick} className="flex items-center">
                    <img src="imgs/01.webp" alt="profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-indigo-300 object-cover" />
                    <div className="pl-2 hidden lg:block">
                        <h4 className="font-bold capitalize text-black">medicine patel</h4>
                        <p className="text-sm text-start capitalize text-black">@dava17</p>
                    </div>
                </Button>
                <Popover
                    id={profileId}
                    open={openProfilePopover}
                    anchorEl={profileAnchor}
                    onClose={handleProfileClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <div>
                        <Link to="/adminprofile">
                            <div className="flex p-3 hover:bg-gray-100 cursor-pointer" onClick={handleProfileClose}>
                                <PersonIcon style={{ color: "#6b7280", fontSize: "20px" }} />
                                <p className="text-sm pl-2">My Account</p>
                            </div>
                        </Link>
                        <div className="flex p-3 hover:bg-gray-100 cursor-pointer" onClick={handleProfileClose}>
                            <SecurityIcon style={{ color: "#6b7280", fontSize: "20px" }} />
                            <p className="text-sm pl-2">Reset Password</p>
                        </div>
                        <div className="flex p-3 hover:bg-gray-100 cursor-pointer" onClick={handleProfileClose}>
                            <LogoutIcon style={{ color: "#6b7280", fontSize: "20px" }} />
                            <p className="text-sm pl-2">Logout</p>
                        </div>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
