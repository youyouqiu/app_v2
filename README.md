## androie 热更新
code-push release-react employees_android android -d Staging --description ""

## ios 热更新
code-push release-react employees_ios ios -d Staging --description ""

## 编译环境
- debug 环境下 form 表单校验失败红屏问题
注释掉 /node_modules/rc-form/lib/createBaseForm 第596行 console.error()