# SingleDatePicker
## Overview
The `SingleDatePicker` component provides a user-friendly interface for selecting a single date. It supports localization, accessibility features, and customization options to fit various use cases.

<iframe src="https://stackblitz.com/edit/datenel-react-singledatepicker?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />

## Preference Props

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