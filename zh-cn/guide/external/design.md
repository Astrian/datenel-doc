# 颜色方案与主题
如你（可能已经）知道的那样，Datenel 的大多数组件都具有自定义选项，包括以下变量：

- **主色（main color）**：基本元素的颜色，包括图标、常规文本、日期等。
- **强调色（accent color）**：指示某些内容处于活动或选中状态的颜色。
- **边框色（border color）**：面板标题和主体之间分隔线的边框颜色。
- **悬停色（hover color）**：当鼠标悬停在某些可交互元素上时，背景颜色指示用户的悬停行为。可以通过此变量调整其颜色。
- **反转色（reverse color）**：选中项的文本颜色，该项的背景颜色为前面提到的强调色。

下面是一个带颜色的 Datenel 面板，用于指示哪个变量控制面板内的哪个颜色。（是，丑爆了，但是至少能指示哪个颜色对应哪个变量是吧？还有，别真的在生产环境用这个配色！）

![用于指示哪个颜色是哪个变量的（丑陋的）面板](https://s2.loli.net/2025/02/23/pE5lKrNtg7OhuBD.png)

```
mainColor='#ff0000'
accentColor='#00ff00'
borderColor='#0000ff'
hoverColor='#ffff00'
reversedColor='#ffffff'
```

这些变量提供了极大的灵活性来调整配色方案。

## 等等，背景和外边框在哪里？
长话短说：它们是透明的。

展开战术：Datenel 旨在创建一个与其他 UI 库高度兼容的日期选择组件。例如，一些 UI 库中提供了内置的下拉组件，例如 [shadcn/ui](https://ui.shadcn.com/)。

透明的背景和边框使得 Datenel 可以轻松地与它们一起工作，而无需额外的「脏活」。即使一些 UI 库在其容器组件中提供了内边距，也可轻松地嵌套一个 div 并提供一个负的 `margin` 值来补偿内边距。

## 主题工坊
这里还提供了一个简单的工坊，为你提供一个所见即所得的工具来调整 Datenel 的配色方案。

你可以在下面的工作坊中自由调整配色方案。完成后记得选择并复制代码，并将其粘贴到需要的地方。

:::tip ⚠️ 休息，休息一下
根据硬件性能、浏览器速度或网络速度，工坊页面可能需要一些时间来加载。请耐心等待，切莫在工作坊处于白屏状态时刷新浏览器。
:::

<div style="border: 1px #00000022 solid; overflow: hidden; border-radius: 0.5rem;">
	<iframe src="https://stackblitz.com/edit/datenel-theme-workshop?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="532px" style="border: none;" />
</div>
