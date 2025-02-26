# SingleDatePicker
## 概述
`SingleDatePicker` 组件提供了一个用户友好的界面，用于选择单个日期，支持本地化、无障碍功能和自定义选项，适应各种使用场景。

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-vue3-singledatepicker?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
</div>

## 偏好属性
### `availableRange`
限制可选择的日期范围。它应该是一个包含两个日期的数组，第一个是可用范围的开始日期，第二个是可用范围的结束日期。

如果数组第一个值为 `null`，则表示只能选择数组第二个日期及其之前的日期。反之，如果数组第二个值为 `null`，则表示只能选择数组第一个日期及其之后的日期。

如果第一个日期在第二个日期之后，Datenel 会自动重排起始与结束日期。

如果传入的数组长度大于或小于 2，Datenel 将忽略该参数，并在控制台中发出警告，以期提醒。

- 类型: `[(Date | null), (Date | null)]`
- 默认值: `undefined`

#### 示例
```vue
<template>
<!-- 用户仅可选择 2025 年 1 月 1 日及之后的日期 -->
<SingleDatePicker :available-range={[new Date(2025, 0, 1), null]} />

<!-- U用户仅可选择 2025 年 1 月 1 日及之前的日期 -->
<SingleDatePicker :available-range={[null, new Date(2025, 0, 1)]} />

<!-- 用户仅可选择 2025 年 1 月 1 日到 2025 年 12 月 31 日范围内的日期 -->
<SingleDatePicker :available-range={[new Date(2025, 0.1), new Date(2025, 11, 31)]} />

<!-- 与上一条有同样表现，但输入时倒转起始与结束日期 -->
<SingleDatePicker :available-range={[new Date(2025, 11, 31), new Date(2025, 0.1)]} />
</template>
```

### `colorScheme`
自定义组件的配色方案。该对象应包含以下属性：

- `mainColor`: 面板的主颜色，包括文本颜色和边框颜色。
- `accentColor`: 面板的强调颜色，包括选定日期的背景颜色。
- `borderColor`: 面板的边框颜色，包括标题和主体之间的分隔线颜色。
- `hoverColor`: 面板的悬停颜色，包括日期悬停时的背景颜色。
- `reversedColor`: 面板的反转颜色，包括选定日期的文本颜色。

----

- 类型: `{ mainColor: String, accentColor: String, borderColor: String, hoverColor: String, reversedColor: String }`
  - 可接受任何可被 CSS 接受的、描述颜色的字符串
- 默认值: `{ mainColor: '#000000', accentColor: '#000000', borderColor: '#e0e0e0', hoverColor: '#00000017', reversedColor: '#ffffff' }`

#### 示例

```vue
<SingleDatePicker 
  :color-scheme={{ 
		mainColor: '#000000', 
		accentColor: '#000000', 
		borderColor: '#e0e0e0', 
		hoverColor: '#00000017', 
		reversedColor: '#ffffff' 
	}} 
/>
```

#### 额外
如果需要一个所见即所得的配色方案设计器，敬请移步 [配色方案与主题](/guide/external/design.html#theme-workshop)。

### `localization`
通过这个属性，Datenel 可以接受标准的 [ISO 639 语言代码](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)（例如 `zh-CN`、`en-US`、`ja-JP` 等）来输出经本地化过的面板。

::: tip ♿️ 无障碍提醒
面板元素中的 aria 对象中上下文提示文本（例如「前往上一个月」和「前往月选择器」等）依然会是英文，但其中的日期字符串仍会跟随此设定。
:::

- 类型: `string`（ISO 639 代码）
- 默认值: `undefined`（将跟随用户浏览器本地化设定）

#### 示例
```vue
<!-- 强制面板使用简体中文本地化 -->
<SingleDatePicker localization="zh-CN" />
```

### `modelValue`（即 `v-model`）
通过编程方式控制选定的日期，包括提供默认值或由父组件控制选择的日期。它还支持 Vue 3 的[双向绑定功能](https://vuejs.org/guide/components/v-model.html)，因此当用户选择日期时，所绑定的 model 变量将自动修改。

- 类型: `Date`
- 默认值: `undefined`

:::warning 📥 如果不传递 model 状态变量，会发生什么？
如果不绑定 `v-model` 变量，面板将变为只读。在这种情况下，用户无法在面板中选择日期，选择操作也无法向面板的父组件发送消息。这在大多数情况下不是一个合理预期行为，因此最佳实践是始终为其绑定一个变量。
:::

#### 示例
```vue
<script setup>
import { ref } from 'vue'
import { SingleDatePicker } from 'datenel-vue3'
const date = ref(new Date())
</script>

<template>
<SingleDatePicker v-model="date" />
</template>
```

## 触发属性

### `@close() => void`
一个仅限屏幕阅读器的属性。用户需要在不选择特定日期的情况下关闭面板。

关闭按钮在视觉上不可见，但屏幕阅读器可以读取出来。这个按钮仅在此属性不为 `undefined` 时才会出现。

#### 函数参数

无参数。

#### 返回值
此回调函数不需要任何返回值。

#### 示例
```vue
<SingleDatePicker @close="presentPanel(false)" />
```