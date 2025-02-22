# SingleWeekPicker

## 概述
Datenel 提供了一个 SingleWeekPicker 组件，用于选择一年中的特定周（从周一起始）。与 SingleDatePicker 相比，SingleWeekPicker 保持相同的布局，还针对选择周数的场景进行特定优化。

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-react-singleweekpicker?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
</div>

## 偏好属性

### `accentColor`
面板的强调颜色，包括所选日期的背景颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#000000`

#### 示例
```tsx
{/* 将自定义主颜色调整为纯红色 */}
<SingleWeekPicker accentColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleWeekPicker accentColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `borderColor`
面板的边框颜色，包括标题和主体之间的分隔线颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#e0e0e0`

#### 示例
```tsx
{/* 将自定义主颜色调整为纯红色 */}
<SingleWeekPicker borderColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleWeekPicker borderColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `hoverColor`
面板的悬停颜色，包括日期的悬停背景颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#00000017`

#### 示例
```tsx
{/* 将自定义主颜色调整为透明的红色 */}
<SingleWeekPicker hoverColor="#ff000022" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleWeekPicker hoverColor={darkScheme ? "#ffffff17" : "#00000017"} />
```

### `localization`
通过这个属性，Datenel 可以接受标准的 [ISO 639 语言代码](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)（例如 `zh-CN`、`en-US`、`ja-JP` 等）来输出经本地化过的面板日期。

::: tip ♿️ 无障碍提醒
面板元素中的 aria 对象中上下文提示文本（例如「前往上一个月」和「前往月选择器」等）依然会是英文，但其中的日期字符串仍会跟随此设定。
:::

- 类型: `string` (ISO 639 代码) 
- 默认值: `undefined` (将遵循用户浏览器的语言) 

#### 示例
```tsx
{/* 强制面板使用简体中文本地化 */}
<SingleWeekPicker localization="zh-CN" />
```

### `mainColor`
面板的主颜色，包括一般文本颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#000000`

#### 示例
```tsx
{/* 将自定义主颜色调整为纯红色 */}
<SingleWeekPicker mainColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleWeekPicker mainColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `reversedColor`
面板的反转颜色，包括所选日期的文本颜色。

- 类型: `string`
  - 接受任何 CSS 可以接受的颜色字符串。
- 默认值: `#ffffff`

#### 示例
```tsx
{/* 将自定义主颜色调整为纯红色 */}
<SingleWeekPicker reversedColor="#ff0000" />

{/* 适应浅色/深色配色方案偏好 */}
<SingleWeekPicker reversedColor={darkScheme ? "#000000" : "#ffffff"} />
```

### `value`
以编程方式控制选定的周，包括提供默认值、或由上层组件控制选择的周。还可以使用此属性以编程方式令面板显示特定月份。

::: tip 🤓 使用 Date 对象定位周
使用 Date 对象时，面板将会定位对应日期所在的周，并直接应用。
:::

- 类型: `{ weekYear: number, weekNum: number } | Date` 
- 默认值: `new Date()` (今天的周)

#### 示例
```tsx
{/* 导航到 2025 年的第一周 */}
<SingleWeekPicker value={{ weekYear: 2025, weekNum: 1}} />

{/* 导航到 2025 年的第 29 周 */}
<SingleWeekPicker value={new Date(2025, 6, 15)} />
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

### `onSelect(week) => void`
当在面板内选择日期时将调用的回调函数。

#### 函数参数

- `week`: 用户选择的周
  - 类型: `{ weekYear: number, weekNum: number }`

#### 返回值
此回调函数不需要任何返回值。

#### 示例
```tsx
{/* 存储选择结果 */}
<SingleDatePicker 
	onSelect={value => {
		setSelectedWeek(value)
	}} 
/>
```
