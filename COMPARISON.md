# UI Library for a Chat: Additional Information and Comparison

## Overview

To make a better decision about which library to use, it'll be provided information on the ease of use, customization options, and documentation quality for each library.

## Libraries

### [React Chat UI: MinChat](https://github.com/MinChatHQ/react-chat-ui)

![image](https://github.com/user-attachments/assets/51b3c390-baaf-4477-8614-0b3a045d4724)

#### Personal Score: 8/10

- Ease of Use: 9.5/10 -> Easy to have a working implementation; [example of use](src/chat_components/ChatUI.tsx). It counts with proper interfaces, hooks and props to use, add or remove components (`customTypingIndicatorComponent`, `onStartTyping`, `onEndTyping`, etc.) 
- Customization: 8/10 -> Customizable through a [JS object and color codes](https://github.com/MinChatHQ/react-chat-ui?tab=readme-ov-file#modify-component-colors) or modifying the color of the [chat provider](https://github.com/MinChatHQ/react-chat-ui#:~:text=%3CMinChatUiProvider%20theme%3D%22%236ea9d7%22%3E). Nevertheless, this library intends to keep the components main design, so they don't count with `style` prop or any further possibility for customized changes
- Documentation: 7/10 -> Not as good as desired, but has some [Storybook components](https://github.com/MinChatHQ/react-chat-ui/tree/master/stories) and it's implemented with TypeScript; the components are not too complex 

#### Additional Notes:

The last version was publish 6 months ago. The documentation is lacking, but the Storybook components and Typescript provide some guidance. Its size is **1.19MB**. MinChat has a relatively low number of weekly downloads (282) [NPM Comparison][1]. The library's GitHub page shows this library isn't known enough with 79 stars and a small community with 4 contributors, 7 successful PRs and 5 open issues.

### [Chat UI Kit: ChatScope](https://github.com/chatscope/chat-ui-kit-react)

![image](https://github.com/user-attachments/assets/732ca413-86be-44be-a480-96655dfc5960)

#### Personal Score: 9.3/10

- Ease of Use: 9.5/10 -> A little more complex but flexible implementation due to the components count with more customizable interfaces and props that intend to execute some processes manually like the need of using a `onChange` listener in the `MessageInput` component to manage the `typingIndicator`; [example of use](src/chat_components/ChatScope.tsx)
- Customization: 9/10 -> Customizable through [SCSS variable overrides](https://github.com/chatscope/chat-ui-kit-styles/issues/5) or directly through inline styles offering a high degree of customization. Moreover, this library has a lot of independent components 
- Documentation: 9.5/10 -> Fully created in [Storybook](https://chatscope.io/storybook/react/?path=/docs/documentation-introduction--docs), complete and well-maintained

#### Additional Notes:

The last version was publish 6 months ago. The library has a steeper learning curve due to its extensive implementation attributes, but offers a high degree of customization. Its size is **767KB** The documentation is excellent, providing a comprehensive guide to the library's features and usage. ChatScope has a much higher number of weekly downloads (14,569) [NPM Comparison][1]. The library's GitHub page shows this library is pretty known with 1.226 stars despite of its small community with 5 contributors, 10 successful PRs and 49 open issues.

### [React Chat Elements](https://github.com/Detaysoft/react-chat-elements)

![image](https://github.com/user-attachments/assets/6a409b88-c234-4c5e-9df6-73dca4ccadbb)

#### Personal Score: 8/10

- Ease of Use: 8/10 -> The available components we can use aren't a lot, but have the main required covered. Have good components to compose via props, but it will need the execution of manual processes (creation of `typingIndicator` component and `onChange` listener management, useRef management for submissions, component containers creation); [example of use](src/chat_components/ChatElements.tsx)
- Customization: 7/10 -> Ambiguous. No explicit theming option, but can be added custom classNames to some components.
- Documentation: 8.5/10 -> [Complete enough](https://detaysoft.github.io/docs-react-chat-elements/docs/intro/)

##### Additional Notes:

The last version was publish 2 months ago. The library has a similar complexity to ChatScope, but with an ambiguous degree of customization. Its size is **606KB** The documentation is good, but could benefit from more examples and guidance on customization. React Chat Elements has a moderate number of weekly downloads (8,975) [NPM Comparison][1]. The library's GitHub page shows this library is pretty known with 1.202 stars and counts with the biggest and active community, with 23 contributors, 122 successful PRs and 29 open issues.

### Comparison

| Library             | Ease of Use | Customization | Documentation |
|---------------------|-------------|---------------|---------------|
| MinChat             | 9.5/10      | 8/10          | 7/10          |
| ChatScope           | 9.5/10      | 9/10          | 9/10          |
| React Chat Elements | 8/10        | 7/10          | 8.5/10        |

[1]: https://npm-compare.com/@chatscope/chat-ui-kit-react,@minchat/react-chat-ui,react-chat-elements "NPM Comparisson"