# @jacobmischka/svelte-rich-components

A set of rich components I've built for various projects and want to reuse in
other projects.

Pretty rough right now, pagination styling is currently nonexistent and I've
only added a couple so far, will continue to add to them as I find time or
need to.

## Usage

You'll need to configure your bundler to compile the exports, as by default
you'll get the source svelte files.

```js
import { Table as RichTable } from '@jacobmischka/svelte-rich-components';
```

Or, you can import the *.html files directly.

```js
import RichTable from '@jacobmischka/svelte-rich-components/Table.html';
```

Components:

- Table.html
- Pagination.html
