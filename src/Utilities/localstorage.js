import { toast } from "react-toastify";

export const getItemToStorage = () => {
  const storedListStr = localStorage.getItem("appointment-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

export const setItemToStorage = (id, name) => {
  const storedList = getItemToStorage();

  if (storedList.includes(id)) {
    console.log(id, "stored");
    toast.error(`You already booked ${name}`);
  } else {
    storedList.push(id);

    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("appointment-list", storedListStr);
    toast.success(` Appointment booked with ${name}`);

  }
};

export const removeItemFromStorage = (id, name) => {
  const storedList = getItemToStorage();

  storedList.pop(id);
  console.log(storedList);
  const storedListStr = JSON.stringify(storedList);
  localStorage.setItem("appointment-list", storedListStr);

  toast.error(`Your Appointment with  ${name} has been canceled`);
};
