import React from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/SellAirtime";
import SelectInput from "../SelectInput";
import InputField from "../InputField";

const SellAirtime = () => {
  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h3>Sell Airtime</h3>
          </div>
          <form>
            <SelectInput onChangeAction={""} label={"Network"} value={""} />
            <InputField
              label={"Phone Number"}
              placeholder={"Account name"}
              name={"phoneNumber"}
              value={""}
              changeHandle={""}
            />
            <InputField
              label={"Amount to Sell"}
              placeholder={"NGN"}
              name={"amountToSell"}
              value={""}
              changeHandle={""}
            />

            <Button text={"Add Bank"} radius={0} width={198} clickHandle={""} />
          </form>
        </Form>
      </Container>
    </Bg>
  );
};

export default SellAirtime;
