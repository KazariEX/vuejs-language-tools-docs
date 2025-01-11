---
title: Slots
---

# {{ $frontmatter.title }}

## Static Template Inference

When there is a `<slot>` element in the template, VLS first attempts to infer the type of slot required by the component from the attributes on these elements. Consider the following code:

```vue
<template>
  <div>
    <slot name="foo" foo="1"></slot>
  </div>
  <slot name="bar" :bar></slot>
</template>
```

Since the user has not explicitly specified the slot types for this component using `defineSlots`, VLS will use the information from this static template to generate the following virtual code:

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

The `__VLS_slots` object type will ultimately be exported as the type for the `$slots` property on the component instance.

At the same time, the return value of the `useSlots` composition API and the `$slots` variable in the template will both be resolved as this type.

## Explicit Type Specification

If the user uses `defineSlots` in the script block, the static template inference will no longer be effective. Instead, type hints will appear on the `<slot>` elements:

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

## How to Handle Indeterminate Slot Types

With the introduction of type support for `useSlots` and `$slots` in `@vue/language-tools` v2.2.0, the following code is no longer valid:

```vue
<template>
  <template v-for="_, name in $slots">
    <slot :name></slot>
  </template>
</template>
```

This is because the type of `$slots` will now be derived from the `<slot>` element, and in this case, the `<slot>` element references the key names of `$slots`, forming a circular reference that causes the type resolution to fail.

The solution is to use `defineSlots` to exit unnecessary static template inference, without needing to pass a specific type since it defaults to `Record<string, any>`:

```vue
<script setup lang="ts">
defineSlots();
</script>
```

Another solution is to directly use the slot functions iterated in the `v-for`, rather than using the `<slot>` element:

```vue
<template>
  <template v-for="render, name in $slots" :key="name">
    <component :is="render" />
  </template>
</template>
```
