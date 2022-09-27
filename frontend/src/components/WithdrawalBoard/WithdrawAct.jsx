import React, { useState } from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/WithdrawAccount";
import SelectInput from "../SelectInput";
import InputField from "../InputField";
import InputFieldReadOnly from "../InputFieldReadOnly";

const bankList = [
  { id: "1", name: "Fixed deposit account" },
  { id: "2", name: "Current account" },
  { id: "3", name: "Joint account" },
  { id: "4", name: "Corporate account" },
  { id: "5", name: "Domiciliary account" },
];

const WithdrawAct= () => {
  // const [inputValues, setInputValues] = useState({});

  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h6>Withdraw</h6>
          </div>
          <form>
            <SelectInput
              selectionList={bankList}
              selectionDefault={"Select account"}
              onChangeAction={""}
              label={"Select Account"}
              value={""}
            />
            <InputFieldReadOnly
              label={"Account Name"}
              placeholder={"BabatundeOla"}
              name={"Account name"}
            />
            <InputFieldReadOnly
              label={"Account NUmber"}
              placeholder={"2987665533"}
              name={"Account number"}
            />
             <InputField
              label={"Amount"}
              placeholder={"NGN"}
              name={"amount"}
            />
             <InputField
              label={"Password"}
              placeholder={"password"}
              name={"password"}
            />
            <Button text={"Withdraw"} radius={0} clickHandle={""} />
          </form>
        </Form>
      </Container>
    </Bg>
  );
};

export default WithdrawAct;
