import Api from "./Api";
import CSRF from "./CSRF";

export default async function Call(request) {
  try {
    await CSRF.getCookie();
    const send_request = Api(request);

    const res = await send_request;

    return res.data;
  } catch (err) {
    throw err;
  }
}
