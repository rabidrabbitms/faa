import { post } from "../../http/post";

export function requestPIN(id: number) {
    return post("MLC.Data.Model.PersonPhone", { method: "RequestPIN", controller: "Phone" }, { Input: { PersonPhone: id } });
}
export function confirmPIN(id: number, pin: number) {
    return post("MLC.Data.Model.PersonPhone", { method: "ConfirmPIN", controller: "Phone" }, { Input: { PersonPhone: id, PIN: pin } });
}