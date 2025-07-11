import React from "react";
import { removeItemFromStorage } from "../Utilities/localstorage";

const Appointments = ({ lawyer, onRemove }) => {
  const { id, name, fee, experience } = lawyer;

  const handleRemoveAppointment = () => {
    removeItemFromStorage(id);
    if (onRemove) {
      onRemove(id); // Notify parent to remove from state
    }
  };

  

  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="flex justify-between my-9">
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-[#0f0f0fb0]">{experience}</p>
        </div>
        <div className="align-center text-[#0f0f0fb0]">
          Appointment Fee: {fee} + Vat
        </div>
      </div>
      <button
        onClick={handleRemoveAppointment}
        className="btn btn-outline btn-error w-full rounded-3xl"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default Appointments;
