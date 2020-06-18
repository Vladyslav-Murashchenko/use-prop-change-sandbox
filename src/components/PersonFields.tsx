import React from "react";
import usePropChange from "use-prop-change";

import { InputField } from "./InputField";
import { CheckboxField } from "./CheckboxField";

interface PersonData {
  name: string;
  age: string;
  money: string;
  isHappy: boolean;
}

type Props<T extends PersonData> = {
  personData: T;
  onPersonDataChange: (personData: T) => void;
};

export const PersonFields = <ProvidedData extends PersonData>({
  personData,
  onPersonDataChange,
}: Props<ProvidedData>) => {
  const handleChangeProp = usePropChange(onPersonDataChange);

  return (
    <>
      <InputField
        label="Name"
        value={personData.name}
        onChange={handleChangeProp("name")}
      />
      <InputField
        label="Age"
        type="number"
        value={personData.age}
        onChange={handleChangeProp("age")}
      />
      <InputField
        label="Money"
        type="number"
        value={personData.money}
        onChange={handleChangeProp("money")}
      />
      <CheckboxField
        label="Is happy"
        checked={personData.isHappy}
        onChange={handleChangeProp("isHappy")}
      />
    </>
  );
};
