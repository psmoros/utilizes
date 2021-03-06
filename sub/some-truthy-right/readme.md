# someTruthyRight

Checks if the callback returns truthy for any element of the array. Iteration is stopped once the callback returns truthy

Return the truthy value or the last falsy value if none of the iteration returns truthy

Run over the given array from right to left

**Usage:** `someTruthyRight<T, R>(list: Array<T>, callback: (value: T, index: number, list: Array<T>) => R): R`

```typescript
import { someTruthyRight } from 'some-truthy-right'

someTruthyRight([0, 1, 2], num => num) // Return the first truthy value it found, from the right to left
// Output: 2
someTruthyRight([0, false, undefined, null], falsy => falsy) // Return the last falsy value if non of the given items is truthy, from the right to left
// Output: 0
```

<!-- *keywords [] *keywordsend -->


This module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.