A front end template build with React, Stylus, Webpack and Babel

```
nam install
nam start     // localhost:3000
nam run build // run web pack once
nam run dev   // run web pack with watch
nam run test  // run mocha tests
```

Static / output files files:

```
app.css
bundle.js
index.html
```

### Components

**Carousel**

Utilising **react-slick** https://github.com/akiran/react-slick
> React carousel component http://webrafter.com/opensource/react-slick
[59 issues, 548 stars]
**Content**

General content, headings, links and buttons

**Captions**

Stylised captions that support inline gallery image components

**GalleryImages**

Images with a larger variation that opens in a modal overlay

**Thumbnails**

Image, heading, subheading components.

**Breakout**

Stylistically and content contrasting component.

### Development tools

React
Webpack
Stylus

### Linting

JS, ES6

### Testing

Each component will have an associated test.js file, for example `app/components/thumbnail/test.js`, which will contain assertion tests.
The testing framework is to be Mocha, using an assertion library (`assert` is fine)

**Notes:**
+ A correct, thought out project and tooling setup is priceless 
+ Development browser: Chrome Version 47.0.2526.106

**Accessibility concerns**
+ Contrast of the grey on dark grey within the designs is concerning.
+ Interaction consideration with the image modals should be made.
