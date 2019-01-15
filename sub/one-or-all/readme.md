# oneOrAll

The [utilizes](https://www.npmjs.com/package/utilizes) method utilizes.oneOrAll exported as a Node.js module.


Return one when is have only one item, return all when is have more then one item.

**Usage:** `oneOrAll<T>(array: Array<T> | T): Array<T> | T`

```typescript
import { oneOrAll } from 'one-or-all'

oneOrAll(['item']) // Return one when is have only one item
// Output: 'item'
oneOrAll(['item', 'item2']) // Return all when is have more then one item
// Output: ['item', 'item2']
oneOrAll('item') // Return the value when is have value that are not array
// Output: 'item'
oneOrAll([]) // Ignore when its not have an items
// Output: undefined
```
