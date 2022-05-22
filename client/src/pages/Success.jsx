import { useEffect, useState } from "react";

import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

const Success = () => {
    const location = useLocation();
    console.log(location)

    return(
        <div>
            Successfull
        </div>
    )

};

export default Success;