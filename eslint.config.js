import antfu from "@antfu/eslint-config";
import zin from "@zinkawaii/eslint-config";

export default antfu({
  jsonc: false,
  markdown: false,
  yaml: false,
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2
  },
  rules: {
    ...zin.standard,
    ...zin.recommended,
    ...zin.stylistic,
    ...zin.patch
  }
});