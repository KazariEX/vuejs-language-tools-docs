---
title: Vue Compiler Options
---

# {{ $frontmatter.title }}

This option can be configured globally in the `vueCompilerOptions` field of the `tsconfig.json` file or locally using a special comment syntax at the root of an SFC. Example:

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

- Type: `number`
- Default: `3.3`

Specifies the Vue version. If not specified, the `vue` package version in the current workspace is used.

## lib

- Type: `string`
- Default: `vue`

Specifies the Vue package name.

## extensions

- Type: `string[]`
- Default: `[".vue"]`

Specifies the file extensions to enable this extension for.

## vitePressExtensions

- Type: `string[]`

If a file's extension matches this option, it will be parsed as Markdown.

## petiteVueExtensions

- Type: `string[]`

If a file's extension matches this option, it will be parsed as HTML.

## jsxSlots

- Type: `boolean`
- Default: `false`

<!-- TODO: -->
::: tip WIP
Documentation in progress…
:::

## strictTemplates

- Type: `boolean | object`
- Default: `false`

Enables strict templates. When set to `true`, both `attributes` and `components` options are enabled.

### attributes

- Type: `boolean`

By default, components allow passing in unknown `props` and `events`. Enabling this option will cause VLS to report errors for unknown attributes.

### components

- Type: `boolean`

By default, unknown components can be used in templates. Enabling this option will cause VLS to report errors for unknown components.

## skipTemplateCodegen

- Type: `boolean`
- Default: `false`

Skips codegen for templates. When enabled, all semantic features related to templates are disabled.

## fallthroughAttributes

- Type: `boolean`
- Default: `false`

Type support for fallthrough attributes. When enabled, if a component always contains only one root node or uses `v-bind="$attrs"` on an element, it will attempt to capture all HTML attributes of those elements (or, if a component, it will recursively capture its props and possible fallthrough attributes) and apply them to its own props. For example:

::: code-group

```vue [main.vue]
<script setup lang="ts">
import Child from "./child.vue";
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

In this case, the completion will automatically include all available attributes of the `a` element without requiring the child component to manually specify which props to pass to the `a` element.

::: warning
Since this option analyzes a large amount of types, it may significantly reduce the performance of VLS. Use with caution.
:::

## dataAttributes

- Type: `string[]`

Specifies a string pattern for attributes to be treated as `data` attributes, instructing VLS to skip type-checking for these attributes.

## htmlAttributes

- Type: `string[]`
- Default: `["aria-*"]`

Specifies a string pattern for attributes to be treated as HTML attributes, instructing VLS not to convert these attribute names to camelCase.

## optionsWrapper

- Type: `[string, string]`

Specifies how to wrap the exported object when using `export default` syntax. Default value:

```ts
target >= 2.7
  ? [`(await import('${lib}')).defineComponent(`, `)`]
  : [`(await import('${lib}')).default.extend(`, `)`]
```

## macros

- Type: `Record<string, string[]>`

Specifies macros exported from Vue and the identifiers that can trigger them, with the macro itself being the default. For example:

```json
{
  "macros": {
    "defineProps": ["defineProps"]
  }
}
```

## composables

- Type: `Record<string, string[]>`

Specifies certain composables with special type support from VLS and the identifiers that can trigger them.

### useCssModule

Provides type support with `<style module="...">`.

### useTemplateRef

Provides type support with `<Comp ref="...">`.

By default, `templateRef` can also trigger this composable, making it easier to provide a consistent development experience equivalent to `useTemplateRef` for users of lower versions using [VueUse](https://vueuse.org/core/templateRef).

## plugins

- Type: `string[]`

Specifies file paths for `VueLanguagePlugin` objects.

## experimentalDefinePropProposal

- Type: `"kevinEdition" | "johnsonEdition" | false`
- Default: `false`

See: [Vue Macros](https://vue-macros.dev/macros/define-prop.html)

## experimentalResolveStyleCssClasses

- Type: `"scoped" | "always" | "never"`
- Default: `"scoped"`

Specifies the resolution strategy for CSS class names in the `<style>` block. By default, only resolves when `scoped` is used, while also providing documentation links for class names in the template.

## experimentalModelPropName

<!-- TODO: -->
::: tip WIP
Documentation in progress…
:::
