# Button 按钮

----

## 基础用法

使用```type```、```plain```和```round```属性来定义 Button 的样式。

::: demo

```html

<div>
  <t-button>默认按钮</t-button>
  <t-button type="primary">主要按钮</t-button>
  <t-button type="success">成功按钮</t-button>
  <t-button type="info">信息按钮</t-button>
  <t-button type="warning">警告按钮</t-button>
  <t-button type="danger">危险按钮</t-button>
</div>
<div class="m-10">
  <t-button plain>朴素按钮</t-button>
  <t-button type="primary" plain>主要按钮</t-button>
  <t-button type="success" plain>成功按钮</t-button>
  <t-button type="info" plain>信息按钮</t-button>
  <t-button type="warning" plain>警告按钮</t-button>
  <t-button type="danger" plain>危险按钮</t-button>
</div>
<div class="m-10">
  <t-button round>圆形按钮</t-button>
  <t-button type="primary" round>主要按钮</t-button>
  <t-button type="success" round>成功按钮</t-button>
  <t-button type="info" round>信息按钮</t-button>
  <t-button type="warning" round>警告按钮</t-button>
  <t-button type="danger" round>危险按钮</t-button>
</div>

```

:::

### 禁用状态

按钮不可用状态。

::: demo

```html

<div>
  <t-button disabled>默认按钮</t-button>
  <t-button type="primary" disabled>主要按钮</t-button>
  <t-button type="success" disabled>成功按钮</t-button>
  <t-button type="info" disabled>信息按钮</t-button>
  <t-button type="warning" disabled>警告按钮</t-button>
  <t-button type="danger" disabled>危险按钮</t-button>
</div>
<div class="m-10">
  <t-button plain disabled>朴素按钮</t-button>
  <t-button type="primary" plain disabled>主要按钮</t-button>
  <t-button type="success" plain disabled>成功按钮</t-button>
  <t-button type="info" plain disabled>信息按钮</t-button>
  <t-button type="warning" plain disabled>警告按钮</t-button>
  <t-button type="danger" plain disabled>危险按钮</t-button>
</div>

```

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。

::: demo

```html

<t-button>默认尺寸</t-button>
<t-button size="medium">中等按钮</t-button>
<t-button size="small">小型按钮</t-button>

```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
