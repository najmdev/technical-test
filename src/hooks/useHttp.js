import axios from "axios";
import { useState } from "react";

export const useHttp = () => {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (url, method = "GET", payload = null) => {
    setPending(true);
    setErrors(null);
    setData(null);

    axios({ url, method, data: payload })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error?.response);
      })
      .finally(() => {
        setTimeout(() => {
          setPending(false);
        }, 500);
      });
  };

  return {
    pending,
    errors,
    data,
    setData,
    sendRequest,
  };
};
