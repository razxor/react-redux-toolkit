import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { setName } from "../features/user/userSlice";

export default function Navbar() {
    //   const { theme, setTheme } = useTheme();
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleClick = (name) => {
        dispatch(setName(name));
    }
    console.log('USER DATA IN NAVBAR', userData);
    return (
        <div>
            <h1 className="text-2xl font-bold">Hi, This is {userData.name}</h1>
            <Button type="danger" handler={() => handleClick('John')}>
                Update my name
            </Button>
            {/* <h1>Navbar - Theme: {theme}</h1>
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    Toggle Theme
                </button> */}
        </div>
    );
}
