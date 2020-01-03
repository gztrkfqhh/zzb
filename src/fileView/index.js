const _import = (fileName) => {
  return resolve => require(['@/views/manage/' + fileName + `/${fileName}.vue`], resolve)
}

export default _import
