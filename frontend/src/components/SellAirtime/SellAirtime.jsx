import React, { useState } from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/SellAirtime";
import SelectInput from "../SelectInput";
import InputField from "../InputField";
import InputFieldReadOnly from "../InputFieldReadOnly";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const networkList = [
  { id: "1", name: "MTN" },
  { id: "2", name: "AIRTEL" },
  { id: "3", name: "GLO" },
  { id: "4", name: "9mobile" },
];

const SellAirtime = () => {
  const initialValues = { phoneNumber: "", amountToSell: "" };
  const [inputValues, setInputValues] = useState(initialValues);

  const handleErrorMessage = (msg) => {
    return toast.error(msg);
  };

  const handleSuccessMessage = (msg) => {
    return toast.success(msg);
  };

  const handleErrorValidation = () => {
    if (
      inputValues.phoneNumber === "" ||
      inputValues.amountToSell === "" ||
      inputValues.network === ""
    ) {
      handleErrorMessage("Field(s) can not be empty");
    } else if (
      inputValues.phoneNumber.length < 11 ||
      !Number(inputValues.phoneNumber)
    ) {
      handleErrorMessage("Phone number not valid, please type a correct one");
    } else if (
      !Number(inputValues.amountToSell) ||
      !(
        Number(inputValues.amountToSell) >= 1000 &&
        Number(inputValues.amountToSell) <= 30000
      )
    ) {
      handleErrorMessage(
        "Amount to sell is out of range(1000 - 30000) or not valid"
      );
    } else {
      handleSuccessMessage("Awesome! Transaction completed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSelect = (e) => {
    setInputValues({ ...inputValues, network: e.value });
  };

  const handleSubmit = (e) => {
    console.log(inputValues);
    /***
     *Consume API here
     */
    handleErrorValidation();
  };

  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h6>Sell Airtime</h6>
          </div>
          <form onSubmit={handleSubmit}>
            <SelectInput
              selectionList={networkList}
              selectionDefault={"Select network"}
              onChangeAction={handleSelect}
              label={"Network"}
            />
            <InputField
              label={"Phone Number"}
              placeholder={"Account name"}
              name={"phoneNumber"}
              changeHandle={handleChange}
              value={inputValues.phoneNumber}
            />
            <InputField
              label={"Amount to Sell"}
              placeholder={"NGN"}
              name={"amountToSell"}
              changeHandle={handleChange}
              value={inputValues.amountToSell}
            />
            <InputFieldReadOnly
              label={"USSD"}
              placeholder={"NGN"}
              name={"amountToSell"}
            />
            <InputFieldReadOnly
              label={"Amount to Receive"}
              placeholder={"NGN"}
              name={"amountToSell"}
            />
            <InputFieldReadOnly
              label={"Destination Phone Number"}
              placeholder={"Destination Phone Number"}
              name={"amountToSell"}
            />

            <Button
              text={"Sell Airtime"}
              radius={0}
              clickHandle={handleSubmit}
            />
          </form>
        </Form>
      </Container>
      {/* <ToastContainer /> */}
    </Bg>
  );
};

export default SellAirtime;
