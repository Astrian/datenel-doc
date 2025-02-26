# SingleDatePicker
## Overview
The `SingleDatePicker` component provides a user-friendly interface for selecting a single date. It supports localization, accessibility features, and customization options to fit various use cases.

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-vue3-singledatepicker?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="500px" style="border: none;" />
</div>

## Preference Props

### `availableRange`
Limit the range of dates that can be selected. It should be an array of two dates, the first one being the available range start date and the second one being the available range end date. 

If the first one is `null`, it means that all dates after the second one are not available. If the second one is `null`, it means that all dates before the first one are not available. 

If the first one is behind the second one, Datenel will exchange them automatically.

If the array length is not 2, Datenel will ignore the parameter and raise a warning in the console to remind you to check your input.

- Type: `[(Date | null), (Date | null)]`
- Default: `undefined`

#### Example
```vue
<template>
<!-- User can only select the dates after 1 Jan 2025 -->
<SingleDatePicker :available-range={[new Date(2025, 0, 1), null]} />

<!-- User can only select the dates before 1 Jan 2025 -->
<SingleDatePicker :available-range={[null, new Date(2025, 0, 1)]} />

<!-- User can only select the dates between 1 Jan and 31 Dec 2025 -->
<SingleDatePicker :available-range={[new Date(2025, 0.1), new Date(2025, 11, 31)]} />

<!-- Same performance for above one -->
<SingleDatePicker :available-range={[new Date(2025, 11, 31), new Date(2025, 0.1)]} />
</template>
```

### `colorScheme`
Customize the color scheme of the component. The object should contain the following properties:

- `mainColor`: The main color of the panel, including the text color and the border color.
- `accentColor`: The accent color of the panel, including the background color of the selected date.
- `borderColor`: The border color of the panel, including the divider color between the header and the body.
- `hoverColor`: The hover color of the panel, including the hover background color of the date.
- `reversedColor`: The reversed color of the panel, including the text color of the selected date.

----

- Type: `{ mainColor: String, accentColor: String, borderColor: String, hoverColor: String, reversedColor: String }`
  - Supports any string value describes color and accepted by CSS.
- Default: `{ mainColor: '#000000', accentColor: '#000000', borderColor: '#e0e0e0', hoverColor: '#00000017', reversedColor: '#ffffff' }`

#### Example

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

#### Extra
If you want a WYSIWYG GUI color scheme designer, please refer to [Colour Schemes & Themes](/guide/external/design.html#theme-workshop)

### `localization`
Datenel will use the language code to localize the panel and accept standard [ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), such as `zh-CN`, `en-US`, `ja-JP`, etc. 

::: tip ♿️ Accessbility reminder
It will not affect the context strings of screen reader aria tags (will be read in English), but the screen reader will still read the date according to this preference.
:::

- Type: `string` (ISO 639 code) 
- Default value: `undefined` (Will follows user browser’s language) 

#### Example
```vue
<!-- Set the panel’s localization setting into Simplified Chinese -->
<SingleDatePicker localization="zh-CN" />
```

### `modelValue` (a.k.a. `v-model`)
Control the selected date programmatically, including situations like providing a default value or controlling the date chosen by the parent component. It also supports the [two-way binding feature](https://vuejs.org/guide/components/v-model.html) of Vue 3, so the model state will be automatically modified when the user selects a date.

- Type: `Date`
- Default: `undefined`

:::warning 📥 What happens when you do not pass the state?
When you do not bind a state property to the `v-model`, the panel becomes read-only. In this situation, the user cannot select a date in the panel, and the select action cannot trigger the panel’s parent component. This is not a desired behaviour in most cases, so the best practice is to always bind a proper state property to it.
:::

#### Example
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

## Trigger Props
### `@close() => void`
A screen-reader-exclusive property. The user is required to close the panel without selecting a specific date. 

The close button is not visible, but screen readers can read this button. The screen reader’s close button is only available when this prop is not `undefined`.

#### Function parameters

No parameters.

#### Return value
This callback function does not require any return value.

#### Example
```vue
<SingleDatePicker @close="presentPanel(false)" />
```