import React, { useState } from "react";
import FormContext from "./FormContext";

function FormProvider({children}) {
  const [data, setData] = useState([]);

  const addData = (personalInfo) => {
    setData(data.concat(personalInfo));
  };

  const context = {
    data,
    setData,
    addData,
  }
  return(
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;