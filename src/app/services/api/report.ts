import { post } from "../../http/post";

export default function report(name: string, parameters = {}) {
  return post({ controller: 'Model', method: 'Report' }, { ProcedureName: name, Parameters: Object.entries(parameters).map(([key, Value]) => ({ Name: key, Value })) });
}