import { BaseState } from "./state";

const myMutation = {
  /**
   * @description: 设置当前路径
   *
   * @param state state
   * @param path 当前的路径
   */
  path(state: BaseState, path: string): void {
    state.path = path;
  },
};

export default myMutation;
