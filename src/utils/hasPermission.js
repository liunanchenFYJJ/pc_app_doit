export default function hasPermission(permissionList) {
  let btnList = this.$store.state.btnList; // 获取权限列表
  return btnList.indexOf(permissionList) > -1;
}
