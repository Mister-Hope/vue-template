/**
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: state文件
 * @Date: 2019-03-24 00:00:21
 * @LastEditTime: 2019-03-25 00:55:34
 */

export interface BaseState {
  path: string;
}

const myState: BaseState = { path: '' };

export default myState;
