import { Global } from 'src/MLC/_import';
import * as MLC from 'src/MLC/_import';
import { post } from '../../http/post';

export async function byToken(token: string, mapping: any) {
    return await post({ method: "ByToken", controller: "Lead" }, { Input: { token }, TypeMapping: mapping });
}
