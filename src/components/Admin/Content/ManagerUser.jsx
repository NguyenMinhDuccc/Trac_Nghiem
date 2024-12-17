import React from "react";
import ModalCreateUser from "./ModalCreateUser";

const ManagerUser = () => {
    return (
        <>
            <div className="manager-user">
                <div>
                    Manager User
                </div>
                <div className="manager-content">
                    <div className="">
                        <ModalCreateUser />
                    </div>
                    <div>
                        table User
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManagerUser;
