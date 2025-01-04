import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import TitleOfPage from "../components/TitileOfPage";

const NotFoundView = () => {
    TitleOfPage("Uriel-E Commerce | 404 Not Found");
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center h-[60vh]">
                <h1 className="text-2xl font-bold text-center">
                    Page Not Found
                </h1>
                <Link to="/" className="btn btn-primary">
                    <FaArrowLeft /> Back to Homepage
                </Link>
            </div>
        </>
    );
};

export default NotFoundView;
