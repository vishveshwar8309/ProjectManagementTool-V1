import React from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnloggedScreen = () => {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = () => {
    navigate("/signin");
  };

  return (
    <div>
      {userInfo ? (
        <Navigate to="/projectmanagementtool" />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Button variant="success" onClick={handleClick}>
            signIn to continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default UnloggedScreen;
