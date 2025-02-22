# SingleDatePicker
## 概述
`SingleDatePicker` 组件提供了一个用户友好的界面，用于选择单个日期，支持本地化、无障碍功能和自定义选项，适应各种使用场景。

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-react-singledatepicker?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
</div>

## 偏好属性

### `accentColor`
面板的强调颜色，包括选定日期的背景颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#000000`

#### 示例
```tsx
{/* 将自定义主色调整为纯红色 */}
<SingleDatePicker accentColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleDatePicker accentColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `availableRange`
限制可选择的日期范围。它应该是一个包含两个日期的数组，第一个是可用范围的开始日期，第二个是可用范围的结束日期。

如果数组第一个值为 `null`，则表示只能选择数组第二个日期及其之前的日期。反之，如果数组第二个值为 `null`，则表示只能选择数组第一个日期及其之后的日期。

如果第一个日期在第二个日期之后，Datenel 会自动重排起始与结束日期。

如果传入的数组长度大于或小于 2，Datenel 将忽略该参数，并在控制台中发出警告，以期提醒。

- 类型: `[(Date | { year: number, month: number, day: number } | null), (Date | { year: number, month: number, day: number } | null)]`
- 默认值: `undefined`

#### 示例
```tsx
{/* 用户只能选择 2025 年 1 月 1 日之后的日期 */}
<SingleDatePicker availableRange={[{year: 2025, month: 1, day: 1}, null]} />

{/* 用户只能选择 2025 年 1 月 1 日之前的日期 */}
<SingleDatePicker availableRange={[null, {year: 2025, month: 1, day: 1}]} />

{/* 用户只能选择 2025 年 1 月 1 日至 2025 年 12 月 31 日之间的日期 */}
<SingleDatePicker availableRange={[{year: 2025, month: 1, day: 1}, {year: 2025, month: 12, day: 31}]} />

{/* 插入 Date 对象，并反转起始日期和结束日期 */}
<SingleDatePicker availableRange={[new Date(2025, 11, 31), new Date(2025, 0, 1)]} />
```

### `borderColor`
面板的边框颜色，包括标题和主体之间的分隔线颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#e0e0e0`

#### 示例
```tsx
{/* 将自定义主色调整为纯红色 */}
<SingleDatePicker borderColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleDatePicker borderColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `hoverColor`
面板的悬停颜色，包括日期的悬停背景颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#00000017`

#### 示例
```tsx
{/* 将自定义主色调整为透明红色 */}
<SingleDatePicker hoverColor="#ff000022" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleDatePicker hoverColor={darkScheme ? "#ffffff17" : "#00000017"} />
```

### `localization`
通过这个属性，Datenel 可以接受标准的 [ISO 639 语言代码](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)（例如 `zh-CN`、`en-US`、`ja-JP` 等）来输出经本地化过的面板日期。

::: tip ♿️ 无障碍提醒
面板元素中的 aria 对象中上下文提示文本（例如「前往上一个月」和「前往月选择器」等）依然会是英文，但其中的日期字符串仍会跟随此设定。
:::

- 类型: `string`（ISO 639 代码）
- 默认值: `undefined` （将跟随用户浏览器本地化设定）

#### 示例
```tsx
{/* 强制面板使用简体中文本地化 */}
<SingleDatePicker localization="zh-CN" />
```

### `mainColor`
面板的主颜色，包括一般文本颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#000000`

#### 示例
```tsx
{/* 将自定义主色调整为纯红色 */}
<SingleDatePicker mainColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleDatePicker mainColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `reversedColor`
面板的反转颜色，包括选定日期的文本颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#ffffff`

#### 示例
```tsx
{/* 将自定义主色调整为纯红色 */}
<SingleDatePicker reversedColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleDatePicker reversedColor={darkScheme ? "#000000" : "#ffffff"} />
```

### `value`
以编程方式控制选定的日期，包括提供默认值、或由上层组件控制选择的日期。还可以使用此属性以编程方式令面板显示特定月份。

- 类型: `Date | { year: number, month: number, day: number }`
- 默认值: `new Date()`（今天的日期）

::: tip 🤔 我应该传递减 1 格式的月份吗？
如果你是前端开发老司机，你一定知道 Date 对象处理数字月份会减 1 处理。例如，`Date(2025, 0, 1)` 指代的是 2025 年 1 月 1 日、`Date(2025, 1, 1)` 指代的是 2025 年 2 月 1 日，依此类推。不过，当你以 JSON 格式传递 `value` 属性时，你应使用一般格式的月份，而不是减 1 格式。例如 `{year: 2025, month: 1, day: 1}` 这样的对象，Datenel 会将其视作 2025 年 1 月 1 日。
:::

#### 示例
```tsx
{/* 导航到 2025 年 1 月 1 日 */}
<SingleDatePicker value={{ year: 2025, month: 1, day: 1}} />

{/* 导航到 2025 年 7 月 15 日 */}
<SingleDatePicker value={new Date(2025, 6, 15)} />
```

## 触发属性

### `onClose() => void`
一个仅限屏幕阅读器的属性。用户需要在不选择特定日期的情况下关闭面板。

关闭按钮在视觉上不可见，但屏幕阅读器可以读取出来。这个按钮仅在此属性不为 `undefined` 时才会出现。

#### 函数参数

无参数。

#### 返回值
此回调函数不需要任何返回值。

#### 示例
```tsx
<SingleDatePicker onClose={() => setPresentPanel(false)} />
```

### `onSelect(date) => void`
当在面板中选择日期时将调用的回调函数。

#### 函数参数

- `date`: 用户选择的日期
  - 类型: `{ year: number, month: number, day: number }`

#### 返回值
此回调函数不需要任何返回值。

#### 示例
```tsx
{/* 将选定日期转换为原生 Date 对象。 */}
{/* 请注意，返回值使用一般月份格式 */}
{/* 而不是减 1 格式。 */}
<SingleDatePicker 
	onSelect={value => {
		setSelectedDate(new Date(value.year, value.month - 1, value.day))
	}} 
/>
```
