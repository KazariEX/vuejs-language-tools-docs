---
title: 属性透传
---

# {{ $frontmatter.title }}

关联配置项：[fallthroughAttributes](../reference/vue-compiler-options#fallthroughattributes)

## 静态模板推断

当模板中仅包含一个根节点，或者存在使用了 `v-bind="$attrs"` 的节点时，VLS 会收集这些组件（或元素）的 Props（或 Attrs），并将它们的类型并入当前组件的 Props 中。例如，某组件的部分代码如下：

```vue
<template>
  <button>Click Me</button>
</template>
```

或：

```vue
<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <button v-bind="$attrs">Click Me</button>
  <span></span>
</template>
```

则该组件的 Props 除了在脚本块中定义的类型以外，还会额外包含一个 `ButtonHTMLAttributes`。

如果应用这些规则的节点是一个组件，例如：

```vue
<template>
  <Comp />
</template>
```

则该组件的 Props 将包含 `<Comp>` 组件的 Props。

同时，`useAttrs` 可组合项的返回值与模板中的 `$attrs` 变量都将被解析为这个类型。