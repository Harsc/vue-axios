import {postInObject} from "./index"
export const userlogin = p => postInObject('/user/login', p);
