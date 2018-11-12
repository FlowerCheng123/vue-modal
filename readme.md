#弹窗骨架封装

## 使用方法

```
//在 main.js 中引入 vue-modal
import 'vue-modal'
//在业务文件中引入
import AComponent from '@/component/AComponent'
let propsdata = []
this.$modal({
  template: AComponent,
  params: propsdata,
  enter: 'slideInUp', //莫太框进入时的动画
  leave: 'slideOutDown', //莫太框离开时的动画
  success:function(){},
  fail: function(){}
})
```
