export function hasPermission(permissionList) {
  let btnList = this.$store.state.btnList; // 获取权限列表
  return btnList.indexOf(permissionList) > -1;
}

/**
 * @param {*} value any
 * @param {*} targetArr Array
 * @returns {*} Boolean
 */
export function oneOf(value, targetArr = []) {
  for (let i = 0; i < targetArr.length; i++) {
    if (value === targetArr[i]) {
      return true;
    }
  }
  return false;
}
