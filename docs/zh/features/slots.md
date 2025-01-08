---
title: 插槽
---

# {{ $frontmatter.title }}

## 静态模板推断

当模板中出现 `<slot>` 元素时，VLS 首先尝试从这些元素上的属性推断当前组件所需要的插槽类型。观察下述代码：

```vue
<template>
  <div>
    <slot name="foo" foo="1"></slot>
  </div>
  <slot name="bar" :bar></slot>
</template>
```

此时，由于用户未使用 `defineSlots` 显式指定该组件的插槽类型，所以 VLS 将利用该静态模板中的信息，生成以下虚拟代码：

```ts
var __VLS_0 = {
  foo: ("1"),
};
var __VLS_1 = {
  bar: (__VLS_ctx.bar),
};
let __VLS_slots!: {
  foo?(props: typeof __VLS_0): any,
  bar?(props: typeof __VLS_1): any
};
```

而该 `__VLS_slots` 对象的类型最后会作为该组件实例上 `$slots` 属性的类型被导出。

同时，`useSlots` 可组合项的返回值与模板中的 `$slots` 变量都将被解析为这个类型。

## 显式类型指定

如果用户在脚本块中使用 `defineSlots`，则静态模板推断不再生效，取而代之的是在 `<slot>` 元素上的类型提示：

```vue
<script setup lang="ts">
defineSlots<{
  foo(props: { foo: number }): any;
  bar(props: { bar: string }): any;
}>();
</script>

<template>
  <slot name="foo" foo=".../* Error (TS2322) */"></slot>
</template>
```

## 如何处理不确定的插槽类型

在 `@vue/language-tools` v2.2.0 引入了对 `useSlots` 和 `$slots` 的类型支持后，以下代码变得不再有效：

```vue
<template>
  <template v-for="_, name in $slots">
    <slot :name></slot>
  </template>
</template>
```

这是由于现在 `$slots` 的类型将来自于 `<slot>` 元素，而此时 `<slot>` 元素上又引用了 `$slots` 的键名，这在 TS 上形成了循环引用，将直接导致类型解析在这里中断。

解决方式是使用 `defineSlots` 来退出不必要的静态模板解析，我们无需传入特定的类型，因为它默认为 `Record<string, any>`：

```vue
<script setup lang="ts">
defineSlots();
</script>
```