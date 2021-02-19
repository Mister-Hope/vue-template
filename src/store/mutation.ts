import { BaseState } from "./state";

export const baseMutation = {
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
