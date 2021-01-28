/*
 * @Author: your name
 * @Date: 2021-01-28 16:09:24
 * @LastEditTime: 2021-01-28 17:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wpk-react\src\utils\request.js
 */

 /****模拟一个假的 请求******/

export async function post () {
    const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                code: 0,
                msg: 'success',
                data: 'get a mesage from service!'
            });
        }, 2000);
    });
    return res;
}
