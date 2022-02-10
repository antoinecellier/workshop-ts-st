## Typescript
### Typer la fonction `rudenessModeration`
**business/index.ts**

Typer la fonction `rudenessModeration` dans le fichier `business/index.ts`.

A vous de juger ce qui est nécessaire de typer:
    - Argument de la fonction ?
    - Type de retour ?

### Typer le Composant MessageInput
**components/MessageInput/index.tsx**

Typer les props du composant `MessageInput`.

Pour la prop `style` vous pouvez utiliser les types `StyleProp` et `ViewStyle` de React Native:

```js
import {StyleProp, ViewStyle} from 'react-native';
...
type MessageFormProps = {
    ...
    style?: StyleProp<ViewStyle>;
}
```

Wrapper `FontAwesomeIcon` dans un styled component pour éviter le style inline.

### Typer le Composant Bubble
**components/Avatar/index.tsx**

Typer les props du composant `Bubble` ainsi que les `styled components` utilisés.

N'oubliez que vous pouvez passer un type générique à vos `styled components`. 

### Typer le Composant Avatar
**components/Bubble/index.tsx**

Typer les props du composant `Avatar`.

React Native met à disposition un type pour les images: `ImageSourcePropType`
```js
import {ImageSourcePropType} from 'react-native';
```

Faites en sorte que l'on puisse passer une props optionnel `size` au composant `Avatar`. Si la props `size` n'est pas défini utiliser la valeur de `defaultSize`. 

### Typer le context MessageList
**business/MessageListContext.tsx**

Le Type `Message` doit avoir la forme suivante:
```ts
type Message = {
  sentAt: Date;
  content: string;
  owner: boolean;
  avatar: string;
};
```

Dans un premier typer la fonction `createContext` qui a la "definition type" suivante:
```ts
    function createContext<T>(
        defaultValue: T,
    ): Context<T>;
```

Puis typer le composant `MessageListContextProvider` :
    - Ces props
    - Son hook useState (si nécessaire)
    - La fonction `addMessage`


### Typer l'écran principal de l'application
**screens/Conversation/index.tsx**

Typer le hook `useRef`.
Typer les styled components si nécessaire.


## Storybook

### Ecrire des stories pour le composant MessageInput
`storybook/stories/molecules/MessageInput/MessageInput.stories.tsx`

Pour au moins une des stories ajouter de la documentation grâce à `@storybook/addon-notes`:
```js
  .add(
    'default',
    () => (
      <MyComponent />
    ),
    {
      notes: 'Component used for sending messages',
    },
  )
```

Pour au moins une des stories ajouter la possibilité de logger une valeur dans Storybook quand la props `onSend` est appelé. Cela est possible avec `@storybook/addon-actions`: https://storybook.js.org/addons/@storybook/addon-actions

Ecrire 2 stories différente:
- Default: `<MessageInput isButtonLabelDisplay={false} />`
- With label: `<MessageInput isButtonLabelDisplay />`


### Ecrire des stories pour le composant Bubble
`storybook/stories/atomes/Bubble/Bubble.stories.tsx`

Pour chacune des stories mettre en place `@storybook/addon-knobs` pour avoir le contrôle sur les props directement dans l'UI de Storybook : 
- `content`: utiliser la fonction `text()`.
- `type`: utiliser la fonction `select()` avec les options `primary` et `secondary`.

Le lien vers la document de l'addon `knobs`: https://storybook.js.org/addons/@storybook/addon-knobs/

Ecrire 3 stories différente:
- Avec la variante `primary` `<Bubble type="primary" content="lorem ipsum" />`
- Avec la variante `secondary` `<Bubble type="secondary" content="lorem ipsum" />`
- Avec un `content` sur plusieurs lignes 

### Mettre en place un theme global grâce à styled-component

La mise en place d'un theme global avec `styled-component` et Typescript va nous permettre d'accèder aux constantes de style facilement et d'améliorer l'expérience développeur.

Dans le fichier `theme/styles.d.ts`, surcharger le type `DefaultTheme` de `styled-component`:
```ts
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontSize: FontSize;
    spacing: Spacing;
    horizontalSpacing: HorizontalSpacing;
    colors: Colors;
  }
}
```

Dans le fichier `theme/index.tsx`, il faut maintenant initialiser les valeurs de `fontSize`, `spacing`, `horizontalSpacing` et `colors` :
```ts
import {ThemeProvider, DefaultTheme} from 'styled-components/native';

import {colors, fontSize, spacing, horizontalSpacing} from './constants';

export const theme: DefaultTheme = {
  fontSize,
  spacing,
  horizontalSpacing,
  colors,
};
```

Et enfin de le même fichier implémenter le provider du theme de l'application:
```tsx
type CustomThemeProps = {
  children: ReactNode;
};

export const CustomTheme = ({children}: CustomThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
```

Il ne reste plus qu'à wrapper l'application avec le `CustomTheme` provider dans le fichier `App.tsx`.

Vous avez maintenant accès à l'ensemble des valeurs du theme ainsi que son typage dans tout vos `styled-components`.

```tsx
const Input = styled.TextInput`
  border-color: ${({theme}) => theme.colors.primary};
`;
```

Maintenant vous pouvez mettre à jour les `styled-component` qui utilisent l'import de la variable `colors` via `theme/constants.ts`. 

### Mettre en places des stories pour les tokens: colors et fonts

Pour cette dernière partie nous n'allons voir ensemble comment exposer des tokens dans le design system en réutilisant le theme global de l'application. 
