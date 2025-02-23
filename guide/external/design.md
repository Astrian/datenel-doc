# Colour Schemes & Themes
As you (may already) know, most of the components of Datenel will have customization options, which include the following variables:

- **Main colour**: The colour of essential elements, including icons, general texts, dates and so on.
- **Accent colour**: The indicator colour indicates something is active or selected.
- **Border colour**: The border colour of the separator between the panel header and body.
- **Hover colour**: When the mouse hovers over some interactable element, a background indicates the user’s hover behaviour. Adjust its colour with this.
- **Reversed colour**: The colour of the text of the selected item, which has a background with the accent colour we mentioned before.

Here is a coloured Datenel panel to indicate which variable controls which colour inside the panel. (I know it is ugly, but hey, it works! And don’t use this scheme in your actual project, okay?)

![The (ugly-coloured) panel to indicate which colour is which variable](https://s2.loli.net/2025/02/23/pE5lKrNtg7OhuBD.png)

```
mainColor='#ff0000'
accentColor='#00ff00'
borderColor='#0000ff'
hoverColor='#ffff00'
reversedColor='#ffffff'
```

Those variables provide extreme flexibility for adjusting the colour scheme.

## Wait, where is the background and outie border?
TL;DR: They are transparent.

Let me explain more. Datenel aims to create a date selection component that is extremely compatible with other UI libraries. For example, a built-in dropdown component is available in some UI libraries, e.g., [shadcn/ui](https://ui.shadcn.com/).

The transparent background and border make it easy for Datenel to work with them without extra hacks. Even some UI libraries provide inner padding in their container components - in this case, you can easily nest a div and offer a negative margin value to compensate for the padding.

## Theme Workshop
We also provide a simple workshop to give you a WYSIWYG tool to adjust the colour scheme of Datenel. 

You can adjust freely inside the workshop below. Remember to select and copy the code and paste it anywhere when you finish.

:::tip ⚠️ Please be patient
Depending on hardware performance, browser speed, or network speed, the workshop may take some time to load. Please be patient and do not refresh your browser when the workshop is on a white screen.
:::

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-theme-workshop?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="532px" style="border: none;" />
</div>