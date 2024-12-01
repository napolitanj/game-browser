import { useState } from "react";

interface Props {
  alertVisible: boolean;
}

const Alert = ({ alertVisible }: Props) => {
  return (
    <>
      {alertVisible ? (
        <div className="alert alert-primary">"ALERT!!!"</div>
      ) : null}
    </>
  );
};

export default Alert;
