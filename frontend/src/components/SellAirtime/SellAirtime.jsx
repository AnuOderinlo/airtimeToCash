import React, { useState } from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/SellAirtime";
import SelectInput from "../SelectInput";
import InputField from "../InputField";
import InputFieldReadOnly from "../InputFieldReadOnly";

const SellAirtime = () => {
  const [inputValues, setInputValues] = useState({});

  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h6>Sell Airtime</h6>
          </div>
          <form>
            <SelectInput
              // selectionList={networkList}
              // selectionDefault={"Select network"}
              onChangeAction={""}
              label={"Network"}
              value={""}
            />
            <InputField
              label={"Phone Number"}
              placeholder={"Account name"}
              name={"phoneNumber"}
            />
            <InputField
              label={"Amount to Sell"}
              placeholder={"NGN"}
              name={"amountToSell"}
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

            <Button text={"Add Bank"} radius={0} clickHandle={""} />
          </form>
        </Form>
      </Container>
    </Bg>
  );
};

export default SellAirtime;
