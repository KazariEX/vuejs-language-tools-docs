---
title: Vue Compiler 选项
---

# {{ $frontmatter.title }}

该选项可通过编辑 `tsconfig.json` 文件的 `vueCompilerOptions` 字段全局配置，也可通过在 SFC 的根部使用特殊的注释语法局部配置。示例：

::: code-group

```json [tsconfig.json]
{
  "vueCompilerOptions": {
    "fallthroughAttributes": true,
    "strictTemplates": true
  }
}
```

```vue [app.vue]
<!-- @fallthroughAttributes true -->
<!-- @strictTemplates true -->

<script setup lang="ts">
...
</script>
```

:::

## target

- 类型：`number`
- 默认值：`3.3`

指定 Vue 的版本，未指定时优先使用当前工作区中的 `vue` 包版本。

## lib

- 类型：`string`
- 默认值：`vue`

指定 Vue 的包名。

## extensions

- 类型：`string[]`
- 默认值：`[".vue"]`

指定启用该扩展的文件后缀名。

## vitePressExtensions

- 类型：`string[]`

如果文件的后缀名匹配此选项，则将该文件按照 Markdown 格式解析。

## petiteVueExtensions

- 类型：`string[]`

如果文件的后缀名匹配此选项，则将该文件按照 HTML 格式解析。

## jsxSlots

- 类型：`boolean`
- 默认值：`false`

<!-- TODO: -->
::: tip WIP
文档编写中……
:::

## strictTemplates

- 类型：`boolean | object`
- 默认值：`false`

是否启用严格模板。设置为 `true` 时，表示同时启用 `attributes` 和 `components`。

### attributes

- 类型：`boolean`

默认情况下，组件允许传入未知的 `props` 和 `events`。启用此选项后，VLS 将对这些未知的属性报告错误。

### components

- 类型：`boolean`

默认情况下，允许在模板中使用未知的组件。启用此选项后，VLS 将对这些未知的组件报告错误。

## skipTemplateCodegen

- 类型：`boolean`
- 默认值：`false`

是否跳过模板的代码生成。启用此选项后，针对模板的所有语义特性都不再生效。

## fallthroughAttributes

- 类型：`boolean`
- 默认值：`false`

属性透传的类型支持。启用此选项后，当一个组件始终仅包含一个根节点，或在某个元素上使用了 `v-bind="$attrs"` 时，该组件将尝试获取这些元素的所有 HTML 属性，并应用在自身的 Props 上。例如：

::: code-group

```vue [main.vue]
<script setup lang="ts">
import Child from './child.vue';
</script>

<template>
  <Child h| />
     <!-- ^ href -->
</template>
```

```vue [child.vue]
<template>
  <a></a>
</template>
```

:::

此时编辑器所提供的补全将自动包含 `a` 元素的所有可用属性，而无需手动为子组件指定需要透传给 `a` 元素的 Props。

::: warning
由于该选项额外分析了大量的类型，可能使得 VLS 的响应速度大幅下降，请谨慎使用。
:::

## dataAttributes

- 类型：`string[]`

指定需要被视作 `data` 属性的字符串模式，它指示 VLS 跳过这些属性的类型检测。

## htmlAttributes

- 类型：`string[]`
- 默认值：`["aria-*"]`

指定需要被视作 HTML 属性的字符串模式，它指示 VLS 不要将这些属性名转换为小驼峰的形式。

## optionsWrapper

- 类型：`[string, string]`

指定使用 `export default` 语法时，应该如何包裹导出的对象。默认值为：

```ts
target >= 2.7
  ? [`(await import('${lib}')).defineComponent(`, `)`]
  : [`(await import('${lib}')).default.extend(`, `)`]
```

## macros

- 类型：`Record<string, string[]>`

指定从 Vue 中导出的宏，以及它们可由哪些标识符触发，默认为宏本身。例如：

```json
{
  "macros": {
    "defineProps": ["defineProps"]
  }
}
```

## composables

- 类型：`Record<string, string[]>`

指定一些由 VLS 提供了特殊类型支持的可组合项可由哪些标识符触发。

### useCssModule

提供 `<style module="...">` 的类型支持。

### useTemplateRef

提供 `<Comp ref="...">` 的类型支持。

默认情况下，`templateRef` 也可触发该可组合项，便于为使用 [VueUse](https://vueuse.org/core/templateRef) 的低版本用户提供等同于 `useTemplateRef` 的一致开发体验。

## plugins

- 类型：`string[]`

指定 `VueLanguagePlugin` 对象的文件路径。

## experimentalDefinePropProposal

- 类型：`"kevinEdition" | "johnsonEdition" | false`
- 默认值：`false`

请参阅：[Vue Macros](https://vue-macros.dev/macros/define-prop.html)

## experimentalResolveStyleCssClasses

- 类型：`"scoped" | "always" | "never"`
- 默认值：`"scoped"`

指定 `<style>` 块中 CSS 类名的解析策略。默认情况下，仅在使用 `scoped` 时解析，同时为模板中的类名提供文档链接。

## experimentalModelPropName

<!-- TODO: -->
::: tip WIP
文档编写中……
:::