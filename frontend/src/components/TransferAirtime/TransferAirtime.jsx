import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/SellAirtime";
import SelectInput from "../SelectInput";
import InputField from "../InputField";
import InputFieldReadOnly from "../InputFieldReadOnly";
import InputCopy from "../InputCopy";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainAxios } from "../Axios/Axios";
import Swal from "sweetalert2";

const SellAirtime = () => {
  let initialValues = { phoneNumber: "", amount: "", pin: "" };
  let initialNonEditableValues = { ussd: "USSD code", number: "070*********" };
  const [inputValues, setInputValues] = useState(initialValues);
  const [btnActive, setBtnActive] = useState(true);
  const [nonEditable, setNotEditable] = useState(initialNonEditableValues);
  const [network, setNetwork] = useState([]);

  useEffect(() => {
    const networkList = [
      {
        id: "1",
        name: "MTN",
        ussd: `*777*07060000001*AMOUNT*PIN#`,
        number: "07060000001",
      },
      {
        id: "2",
        name: "AIRTEL",
        ussd: `*432*08026000001*AMOUNT#`,
        number: "08026000001",
      },
      {
        id: "3",
        name: "GLO",
        ussd: `*131*08050000001*AMOUNT*PIN#`,
        number: "08050000001",
      },
      {
        id: "4",
        name: "9mobile",
        ussd: `*223*PIN*AMOUNT*08090000001#`,
        number: "08090000001",
      },
    ];
    setNetwork(networkList);
    networkList.forEach((el) => {
      if (networkList.name === el.name) {
        setNotEditable({
          ussd: networkList.ussd.replace("p"),
          number: el.number,
        });
      }
    });
    // console.log(inputValues.pin);
  }, [inputValues]);

  const handleErrorMessage = (msg) => {
    return toast.error(msg);
  };

  const handleSuccessMessage = (msg) => {
    return toast.success(msg);
  };

  const handleErrorValidation = () => {
    if (
      inputValues.phoneNumber === "" ||
      inputValues.amount === "" ||
      inputValues.network === ""
    ) {
      handleErrorMessage("Field(s) can not be empty");
      return false;
    } else if (
      inputValues.phoneNumber.length < 11 ||
      !Number(inputValues.phoneNumber)
    ) {
      handleErrorMessage("Phone number not valid, please type a correct one");
      return false;
    } else if (
      !Number(inputValues.amount) ||
      !(
        Number(inputValues.amount) >= 1000 &&
        Number(inputValues.amount) <= 30000
      )
    ) {
      handleErrorMessage(
        "Amount to sell is out of range(1000 - 30000) or not valid"
      );
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSelect = (e) => {
    network.forEach((el) => {
      if (e.value === el.name) {
        setNotEditable({ ussd: el.ussd, number: el.number });
      }
    });

    setInputValues({ ...inputValues, network: e.value });
  };

  const handleSubmit = async (e) => {
    /***
     *Consume API here
     */
    const validate = handleErrorValidation();
  
    try {
      if (validate) {
        const res = await mainAxios.post("transactions", { network:inputValues.network, phoneNumber: inputValues.phoneNumber, amount: inputValues.amount});
        setInputValues({ phoneNumber: "", amount: "", pin: "" });
        setNotEditable({ ussd: "USSD code", number: "070*********" });

        Swal.fire(
          "Admin has been notified",
          "Your wallet would be credited soon",
          "success"
        );
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      inputValues.phoneNumber === "" ||
      inputValues.amount === "" ||
      inputValues.network === ""
    ) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [inputValues]);

  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h6>Transfer Airtime</h6>
          </div>
          <form onSubmit={handleSubmit}>
            <SelectInput
              selectionList={network}
              selectionDefault={"Select network"}
              onChangeAction={handleSelect}
              label={"Network"}
            />
            <InputField
              label={"Phone Number"}
              placeholder={"Account name"}
              name={"phoneNumber"}
              changeHandle={handleChange}
              value={inputValues.phoneNumber || ""}
            />
            <InputField
              label={"Amount to Transfer"}
              placeholder={"NGN"}
              name={"amount"}
              changeHandle={handleChange}
              value={inputValues.amount || ""}
            />
            <InputField
              label={"PIN"}
              placeholder={"PIN"}
              name={"pin"}
              changeHandle={handleChange}
              value={inputValues.pin || ""}
            />
            <InputCopy
              label={"USSD"}
              placeholder={"USSD"}
              name={"ussd"}
              value={nonEditable.ussd.replace("AMOUNT", inputValues.amount)}
              text={nonEditable.ussd.replace(
                "AMOUNT*PIN",
                `${inputValues.amount}*${inputValues.pin}`
              )}
            />
            <InputFieldReadOnly
              label={"Amount to Receive"}
              placeholder={"NGN"}
              name={"amountToReceive"}
              value={Math.ceil(Number(inputValues.amount) * 0.7)}
            />
            <InputFieldReadOnly
              label={"Destination Phone Number"}
              placeholder={"Destination Phone Number"}
              name={"destinationPhoneNumber"}
              value={nonEditable.number}
            />

            <small style={{ color: "red", fontWeight: "bold" }}>
              **After transferring the airtime, click on the "Sent, notify
              Admin" button below
            </small>
            <Button
              text={"Sent, notify Admin"}
              radius={0}
              clickHandle={handleSubmit}
              btnState={btnActive}
            />
          </form>
        </Form>
      </Container>
      {/* <ToastContainer /> */}
    </Bg>
  );
};

export default SellAirtime;
