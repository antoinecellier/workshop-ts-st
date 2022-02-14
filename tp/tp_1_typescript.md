## Typescript
Dans ce TP nous allons typer un ensemble de composants React Native utilisant `styled-component` ainsi que du code "métier".

Pour tester si vous avez correctement typé votre code vous pouvez utiliser cette commande:
```
    yarn tsc-tp1 --watch
```
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

```ts
import {StyleProp, ViewStyle} from 'react-native';
...
type MessageFormProps = {
    ...
    style?: StyleProp<ViewStyle>;
}
```

Wrapper `FontAwesomeIcon` dans un styled component pour éviter le style inline 
`style={{marginRight: 5}}`.

### Typer le Composant Bubble
**components/Avatar/index.tsx**

Typer les props du composant `Bubble` ainsi que les `styled components` utilisés.

La prop `type` peut seulement avoir deux valeurs possible: `primary` ou `secondary`.
Vous avez à votre disposition le type `ColorVariant` (`theme/constants.ts`).

N'oubliez pas que vous pouvez passer un type générique à vos `styled components`. 

### Typer le Composant Avatar
**components/Bubble/index.tsx**

Typer les props du composant `Avatar`.

React Native met à disposition un type pour les images: `ImageSourcePropType`
```ts
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

Dans un premier temps typer la fonction `createContext` qui a la `definition type` suivante:
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
Typer les `styled components` si nécessaire.


Lancer l'application avec la commande `yarn ios` pour vérifier que tout fonctionne correctement.
