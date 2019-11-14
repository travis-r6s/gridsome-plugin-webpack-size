# gridsome-plugin-webpack-size

Logs your production bundle sizes in a CI friendly way.

![Screenshot showing the output of this plugin](https://github.com/thetre97/gridsome-plugin-webpack-size/raw/master/gridsome-plugin-webpack-size.png)

## Installation

`yarn add gridsome-plugin-webpack-size`

## Usage

`gridsome.config.js`
```js
module.exports = {
  plugins: [
    'gridsome-plugin-webpack-size'
  ]
}
```

## Configuration

You can specify whether webpack-size should run in development mode too, and if it should create a size report JSON file.

```js
{
  use: 'gridsome-plugin-webpack-size',
  options: {
    development: true,
    writeFile: true
  }
}
```
