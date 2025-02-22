# SingleDatePicker
## Overview
The `SingleDatePicker` component provides a user-friendly interface for selecting a single date. It supports localization, accessibility features, and customization options to fit various use cases.

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-react-singledatepicker?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
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
<SingleDatePicker accentColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleDatePicker accentColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `availableRange`
Limit the range of dates that can be selected. It should be an array of two dates, the first one being the available range start date and the second one being the available range end date. 

If the first one is null, it means that all dates after the second one are not available. If the second one is null, it means that all dates before the first one are not available. 

If the first one is behind the second one, Datenel will exchange them automatically.

If the array length is not 2, Datenel will ignore the parameter and raise a warning in the console to remind you to check your input.

- Type: `[(Date | { year: number, month: number, day: number } | null), (Date | { year: number, month: number, day: number } | null)]`
- Default: `undefined`

#### Example
```tsx
{/* User can only select the dates after 1 Jan 2025 */}
<SingleDatePicker availableRange={[{year: 2025, month: 1, day: 1}, null]} />

{/* User can only select the dates before 1 Jan 2025 */}
<SingleDatePicker availableRange={[null, {year: 2025, month: 1, day: 1}]} />

{/* User can only select the dates between 1 Jan and 31 Dec 2025 */}
<SingleDatePicker availableRange={[{year: 2025, month: 1, day: 1}, {year: 2025, month: 12, day: 31}]} />

{/* Insert Date object, also reverse the period start and end date */}
<SingleDatePicker availableRange={[new Date(2025, 11, 31), new Date(2025, 0, 1)]} />
```

### `borderColor`
The border color of the panel, including the divider color between the header and the body.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#e0e0e0`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleDatePicker borderColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleDatePicker borderColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `hoverColor`
The hover color of the panel, including the hover background color of the date.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#00000017`

#### Example
```tsx
{/* Adjust custom main color to transparented red */}
<SingleDatePicker hoverColor="#ff000022" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleDatePicker hoverColor={darkScheme ? "#ffffff17" : "#00000017"} />
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
<SingleDatePicker localization="zh-CN" />
```

### `mainColor`
The main color of the panel, including the general text color.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#000000`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleDatePicker mainColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleDatePicker mainColor={darkScheme ? "#ffffff" : "#000000"} />
```

### `reversedColor`
The reversed color of the panel, including the text color of the selected date.

- Type: `string`
  - Accept any color string can be accepted by CSS.
- Default: `#ffffff`

#### Example
```tsx
{/* Adjust custom main color to pure red */}
<SingleDatePicker reversedColor="#ff0000" />

{/* Adaptive to the light/dark color scheme preference */}
<SingleDatePicker reversedColor={darkScheme ? "#000000" : "#ffffff"} />
```

### `value`
You can programmatically control the selected date, including providing a default value or controlling the date chosen by the parent component. You can also use this property to navigate the panel to show the month you want programmatically.

- Type: `Date | { year: number, month: number, day: number }` 
- Default value: `new Date()` (today’s date)

::: tip 🤔 Should I pass the month with a minus-1 format?
If you are familiar with JavaScript’s native Date object, you may know that it treats January as a number 0. For example, `Date(2025, 0, 1)` will refer to 1 January 2025, and `Date(2025, 1, 1)` will refer to 1 February 2025, and so on. However, you should use the general format of the month instead of the minus-1 format when you pass the `value` property with JSON format, which means `{year: 2025, month: 1, day: 1}` will be treated as 1 January 2025 inside Datenel.
:::


#### Example
```tsx
{/* Navigate to 1st Jan 2025 */}
<SingleDatePicker value={{ year: 2025, month: 1, day: 1}} />

{/* Navigate to 15th July 2025 */}
<SingleDatePicker value={new Date(2025, 6, 15)} />
```

## Trigger Props

### `onClose`
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

### `onSelect`
A callback function that will be called when a date is selected inside the panel.

#### Function parameters

- `date`: The date user selected
  - Type: `{ year: number, month: number, day: number }`

#### Return value
This callback function does not require any return value.

#### Example
```tsx
{/* Transfer selected date into native Date object. */}
{/* Note that the return value uses general month format */}
{/* instead of minus-1 format. */}
<SingleDatePicker 
	onSelect={value => {
		setSelectedDate(new Date(value.year, value.month - 1, value.day))
	}} 
/>
```