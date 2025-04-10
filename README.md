
# React Easy fullscreen

**A simple and lightweight React component for creating fullscreen slides (horizontal or vertical).**  
Perfect for portfolios, landing pages, and presentations.

---

## ✨ Features

- Super easy to use
- Lightweight (zero dependencies)
- Horizontal or vertical fullscreen scrolling
- Customizable styling
- Written in modern React

---

## 📦 Installation

```bash
npm install @thekhalidsha/easy-fullscreen
```

or

```bash
yarn add @thekhalidsha/easy-fullscreen
```

---

## 🚀 Usage

```jsx
import EasyFullScreen from '@thekhalidsha/easy-fullscreen';

const App = () => {
  return (
    <div>
      <EasyFullScreen
        direction="horizontal"
        SliderWidth="100vw"   
        SliderHeight="100vh"
        showDots={true}       
        dotColor="gray"        
        activeDotColor="blue"  
        navDotsPosition="top"  
        className=""
        SlideHeight=""
        SlideWidth=""
      >
        <div>
          <h2>Slide 1</h2>
          <p>This is the first slide.</p>
        </div>
        <div>
          <h2>Slide 2</h2>
          <p>This is the second slide.</p>
        </div>
        <div >
          <h2>Slide 3</h2>
          <p>This is the third slide.</p>
        </div>
      </EasyFullScreen>
    </div>
  );
};

export default App;
```

---

## ⚙️ Props

### EasyFullScreen

| Prop               | Type     | Default      | Description                                                    |
|:-------------------:|:--------:|:------------:|:--------------------------------------------------------------:|
| `direction`         | `string` | `"vertical"` | Scrolling direction: "vertical" or "horizontal"                |
| `SliderWidth`       | `string` | `"100vw"`    | Width of the slider, defaults to full viewport width.          |
| `SliderHeight`      | `string` | `"100vh"`    | Height of the slider, defaults to full viewport height.        |
| `SlideWidth`        | `string` | `"100%"`     | Width of each individual slide, defaults to 100%.               |
| `SlideHeight`       | `string` | `"100%"`     | Height of each individual slide, defaults to 100%.              |
| `showDots`          | `boolean`| `true`       | Whether to display navigation dots or not.                     |
| `dotColor`          | `string` | `"gray"`     | Color of inactive navigation dots.                             |
| `activeDotColor`    | `string` | `"blue"`     | Color of the active navigation dot.                            |
| `navDotsPosition`   | `string` | `"bottom"`   | Position of the navigation dots: "top", "bottom", "left", "right". |
| `className`         | `string` | `""`         | Custom class name for the wrapper.                             |
| `children`          | `ReactNode` | `null`      | The slides content. Each child represents a slide.             |
| `style`             | `object` | `{}`         | Inline styles for the wrapper.                                 |


---

## 🛠 Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/thekhalidsha/easy-fullscreen.git
cd easy-fullscreen
npm install
```

Build the package:

```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License.