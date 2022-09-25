import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Bg, Container, Form } from "../styles/ManageAccount";
import MessageAlertModal from "../components/MessageAlertModal";
import BankAccountList from "./BankAccountList";
import SelectInput from "../components/SelectInput";
import {
  showSuccessModal,
  viewAccountRecord,
} from "../atoms/manageAccountStates";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useRecoilState } from "recoil";

const bankList = [
  { id: "1", name: "Access Bank", code: "044" },
  { id: "2", name: "Citibank", code: "023" },
  { id: "3", name: "Diamond Bank", code: "063" },
  { id: "4", name: "Dynamic Standard Bank", code: "" },
  { id: "5", name: "Ecobank Nigeria", code: "050" },
  { id: "6", name: "Fidelity Bank Nigeria", code: "070" },
  { id: "7", name: "First Bank of Nigeria", code: "011" },
  { id: "8", name: "First City Monument Bank", code: "214" },
  { id: "9", name: "Guaranty Trust Bank", code: "058" },
  { id: "10", name: "Heritage Bank Plc", code: "030" },
  { id: "11", name: "Jaiz Bank", code: "301" },
  { id: "12", name: "Keystone Bank Limited", code: "082" },
  { id: "13", name: "Providus Bank Plc", code: "101" },
  { id: "14", name: "Polaris Bank", code: "076" },
  { id: "15", name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
  { id: "16", name: "Standard Chartered Bank", code: "068" },
  { id: "17", name: "Sterling Bank", code: "232" },
  { id: "18", name: "Suntrust Bank Nigeria Limited", code: "100" },
  { id: "19", name: "Union Bank of Nigeria", code: "032" },
  { id: "20", name: "United Bank for Africa", code: "033" },
  { id: "21", name: "Unity Bank Plc", code: "215" },
  { id: "22", name: "Wema Bank", code: "035" },
  { id: "23", name: "Zenith Bank", code: "057" },
];

const ManageAccount = () => {
    const [inputs, setInputs] = useState({});
    // const [showModal, setShowModal] = useState(false)
    // const [viewAccount, setViewAccount] = useState(false)
    const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
    const [showModal, setShowModal] = useRecoilState(showSuccessModal);

    const handleInput = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSelect = (e) => {
        setInputs({ ...inputs, bank: e.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(inputs);

        if ( !inputs.bank || (!inputs.accountName || inputs.accountName === '') || (!inputs.accountNumber || inputs.accountNumber === '') ) {
            toast.error("Invalid Input!");
            return;
        }

        openModal();
        setInputs({ bank: '', accountName: '', accountNumber: '' })
    };

    const openModal = () => {
        setShowModal(true);
    };

    const handleView = (e) => {
        e.preventDefault();
        setViewAccount(true);
    };

  return (
    <>
      <ToastContainer />
      {!viewAccount ? (
        <Bg>
          <Container>
            <Form>
              <div className="acount-headers">
                <h3>Bank Account</h3>
                <h4 onClick={handleView}>View Bank accounts</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <SelectInput selectionList={bankList} selectionDefault={"Select Bank"} onChangeAction={handleSelect} label={"Bank Name"} required />
                <InputField label={"Account Name"} placeholder={"Account name"} name={"accountName"} value={inputs.accountName || ""} changeHandle={handleInput} required />
                <InputField label={"Account Number"} placeholder={"Account number"} name={"accountNumber"} value={inputs.accountNumber || ""} changeHandle={handleInput} required />

                <Button text={"Add Bank"} radius={0} width={198} clickHandle={handleSubmit} />
              </form>
            </Form>
            {
                showModal && ( <MessageAlertModal showModal={showModal} setShowModal={setShowModal} />)
            }
          </Container>
        </Bg>
      ) : (
        <BankAccountList />
      )}
    </>
  );
};

export default ManageAccount;
