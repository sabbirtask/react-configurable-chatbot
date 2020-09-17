# react-configurable-chatbot
Based on [React Chatbot Kit](https://www.npmjs.com/package/react-chatbot-kit), I have coded certain keywords to trigger a specific response coming from a JSON endpoint. This package relies on the `react`, `prop-types`,and `styled-components` peer-dependency packages to be already installed and set up in your project.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuation](#configuration)
- [License](#license)

## Installation

```console
yarn add react-configurable-chatbot
```

Run `yarn` until all dependencies are up to date.

## Usage

```jsx
import Chatbot from 'react-configurable-chatbot';

function App() {
  return <Chatbot jsonData="/data/test.json" />;
}

export default App;
```

## Configuration

### <Chatbot/> Props

The Chatbot component has the following props:

| Name          | Type    | Required | Default                              | Description                                                             |
| ------------- | ------- | -------- | ------------------------------------ | ----------------------------------------------------------------------- |
| isOpenDefault | boolean | no       | false                                | Determines if the chatbot is toggled open on load                       |
| bottom        | string  | no       | "30px"                               | Bottom position of chatbot icon in px                                   |
| right         | string  | no       | "30px"                               | Right position of chatbot icon in px                                    |
| jsonData      | string  | yes      | "'https://localhost/data/test.json'" | The JSON data file. See examples of JSON data in /public/data/test.json |

### Adding/Modifying Bot Logic (Keywords and Responses)

This chatbot requires fetching a JSON file endpoint. Edit that JSON to add logic. See JSON examples in [test.json](https://github.com/chinsel/react-configurable-chatbot/blob/master/public/data/test.json) file under `logic` key.

### Changing Bot Name
The bot name can be provided in the JSON file as a string. See JSON examples in [test.json](https://github.com/chinsel/react-configurable-chatbot/blob/master/public/data/test.json) file under `botName` key. If not provided, the default name will be `Bot`.

### Changing Bot Avatar Icon
The bot avatar icon can be provided in the JSON file as a URL to the image. See JSON examples in [test.json](https://github.com/chinsel/react-configurable-chatbot/blob/master/public/data/test.json) file under `avatarURL` key. If not provided, the default icon will be the React logo `logo192.png` in /public.

## Troubleshooting

Make sure all dependencies are up to date by running 'yarn' in Terminal.

## License

MIT © [Chester Militante](https://github.com/chinsel/)