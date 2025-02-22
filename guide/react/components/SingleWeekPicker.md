# SingleWeekPicker

## Overview
Datenel also provides a SingleWeekPicker component for selecting a specific week of the year (starts from Monday). Compared to SingleDatePicker, SingleWeekPicker keeps the same layout and includes specific optimization for week selection.

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-react-singleweekpicker?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
</div>

## Preference Props

### `accentColor`
The accent color of the panel, including the background color of the selected date.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#000000`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleWeekPicker accentColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleWeekPicker accentColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `borderColor`
The border color of the panel, including the divider color between the header and the body.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#e0e0e0`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleWeekPicker borderColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleWeekPicker borderColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `hoverColor`
The hover color of the panel, including the hover background color of the date.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#00000017`

#### Example
```tsx
{/* Adjust custom main color to transparented red */}
<SingleWeekPicker hoverColor="#ff000022" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleWeekPicker hoverColor={darkScheme ? "#ffffff17" : "#00000017"} />
```

### `localization`
Datenel will use the language code to localize the panel and accept standard [ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), such as `zh-CN`, `en-US`, `ja-JP`, etc. 

::: tip ♿️ Accessbility reminder
It will not affect the context strings of screen reader aria tags (will be read in English), but the screen reader will still read the date according to this preference.
:::

- Type: `string` (ISO 639 code) 
- Default value: `undefined` (Will follows user browser’s language) 

#### Example
```tsx
{/* Force the panel use the localization of Simplified Chinese */}
<SingleWeekPicker localization="zh-CN" />
```

### `mainColor`
The main color of the panel, including the general text color.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#000000`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleWeekPicker mainColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleWeekPicker mainColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `reversedColor`
The reversed color of the panel, including the text color of the selected date.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#ffffff`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleWeekPicker reversedColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleWeekPicker reversedColor={darkScheme ? "#000000" : "#ffffff"} />
```

### `value`
You can programmatically control the selected date, including providing a default value or controlling the date chosen by the parent component. You can also use this property to navigate the panel to show the month you want programmatically.

::: tip 🤓 Use Date object to target week
When using the Date object, the week number related to the date will be applied to the panel.
:::

- Type: `{ weekYear: number, weekNum: number } | Date` 
- Default value: `new Date()` (today’s week)

#### Example
```tsx
{/* Navigate to first week of 2025 */}
<SingleWeekPicker value={{ weekYear: 2025, weekNum: 1}} />

{/* Navigate to week 29 of 2025 */}
<SingleWeekPicker value={new Date(2025, 6, 15)} />
```

## Trigger Props

### `onClose() => void`
A screen-reader-exclusive property. The user is required to close the panel without selecting a specific date. 

The close button is not visible, but screen readers can read this button. The screen reader’s close button is only available when this prop is not `undefined`.

#### Function parameters

No parameters.

#### Return value
This callback function does not require any return value.

#### Example
```tsx
<SingleDatePicker onClose={() => setPresentPanel(false)} />
```

### `onSelect(week) => void`
A callback function that will be called when a date is selected inside the panel.

#### Function parameters

- `week`: The date user selected
  - Type: `{ weekYear: number, weekNum: number }`

#### Return value
This callback function does not require any return value.

#### Example
```tsx
{/* Storage the selection result */}
<SingleDatePicker 
	onSelect={value => {
		setSelectedWeek(value)
	}} 
/>
```