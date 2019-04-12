import {postInParams} from "@/api/index"

// export const apiAddress = p => get('/api/v1/employees', p);


export const userlogin = p => postInParams('/user/login', p);
