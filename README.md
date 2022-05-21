# Grapefruit-ui
[![Version](https://img.shields.io/npm/v/grapefruit-ui.svg)](https://www.npmjs.com/package/grapefruit-ui)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/Nightlngale/grapefruit-ui#readme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> simple, lightweight, and configurable library with layout components


## Install

```sh
npm install grapefruit-ui
```


## Usage

First, you need to import styles to use the default grid (base 12 columns) and spacing (base 0.5rem) system.

```javascript
import 'grapefruit-ui/dist/styles.css';
```

Otherwise, please add css variables, eg:

```css
:root {
  --grid-columns: 12;

  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 2.5rem;
}
```


## Example

```javascript
import { Column, Container, Row } from 'grapefruit-ui';

import 'grapefruit-ui/dist/styles.css';

function App() {
  return (
    <div className="App">
      <Container style={{ border: '5px solid red' }}>
        <Row>
          <Column sm={6} md={4} lg={6} xl={4}><div  style={{ border: '2px solid green', padding: 20 }}/></Column>
          <Column sm={6} md={4} lg={6} xl={4}><div  style={{ border: '2px solid green', padding: 20 }}/></Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
```


## API

All components are nothing but a wrap over div element, so they accept all its props.

### Flex

| Property        | Type                         | Default value     |
| --------------- | ---------------------------- | ----------------- |
| display         | `flex' | 'inline-flex'`      | `flex`            |
| direction       | CSSProperties.FlexDirection  | -                 |
| wrap            | CSSProperties.FlexWrap       | -                 |
| justify         | CSSProperties.JustifyContent | -                 |
| justifySelf     | CSSProperties.JustifySelf    | -                 |
| justifyItems    | CSSProperties.JustifyItems   | -                 |
| align           | CSSProperties.AlignItems     | -                 |
| alignSelf       | CSSProperties.AlignItems     | -                 |
| alignContent    | CSSProperties.AlignContent   | -                 |
| order           | CSSProperties.Order          | -                 |
| grow            | CSSProperties.FlexGrow       | -                 |
| shrink          | CSSProperties.FlexShrink     | -                 |
| basis           | CSSProperties.FlexBasis      | -                 |
| flex            | CSSProperties.Flex           | -                 |

### Row

| Property        | Type                        | Default value     |
| --------------- | --------------------------- | ----------------- |
| wrap            | CSSProperties.FlexWrap      | `wrap`            |
| direction       | CSSProperties.FlexDirection | -                 |

### Column

By default, all columns have the same width.

| Property        | Breakpoint      | Type              | Default value
| --------------- | --------------- | ----------------- | -----------------
| xs              | < 576px         | number            | -
| sm              | < 768px         | number            | -
| md              | < 1024px        | number            | -
| lg              | < 1280px        | number            | -
| xl              | < 1366px        | number            | -
| xxl             | >= 1366px       | number            | -

Providing only 1 breakpoint (eg. `sm`) will set the same value for all remainings.

### Container

| Property        | Descriptio         | Type              | Default value
| --------------- | ------------------ | ----------------- | -----------------
| fullwidth       | Removes max-width  | Boolean           | false

| Breapoint       | < 576px         | < 768px         | < 1024px        | < 1280px        |  < 1366px       |
| --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| max-width       | 520px           | 690px           | 920px           | 1152px          | 1230px          |
