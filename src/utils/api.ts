import { setCookie } from "./cookies";

export const BASE_URL = "https://front-test.hex.team";

interface IRequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

const checkResponse = (res: Response) => {
  if (res.ok) {
    setCookie("x-total-count", `${res.headers.get("x-total-count")}`);
    return res.json();
  } else return res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (res: any) => {
  if (res) return Promise.resolve(res);
  else return Promise.reject(res);
};

export const request = (endpoint: string, options?: IRequestOptions) => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse).then(checkSuccess);
};
