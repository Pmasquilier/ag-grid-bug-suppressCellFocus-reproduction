# AG Grid Bug #252 Reproduction

This repository demonstrates the AG Grid bug #252 where the grid cannot draw rows while it is in the middle of rendering.

## The Bug

The bug occurs when using `suppressCellFocus` prop with row selection. This combination causes the grid to throw error #252 when selecting rows.

## Steps to Reproduce

1. Clone this repository
2. Install dependencies with `yarn install`
3. Start the development server with `yarn dev`
4. Select a row in the grid
5. Click on another row
6. The error #252 will appear in the console

## Minimal Code

The bug can be reproduced with this minimal setup:

```tsx
import { AgGridReact } from 'ag-grid-react';
import { ReactElement } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export function AgGridWrapper({ ...props }): ReactElement {
  return (
    <div className="ag-theme-material" style={{ height: '500px' }}>
      <AgGridReact
        rowSelection="multiple"
        suppressCellFocus
        theme="legacy"
        {...props}
      />
    </div>
  );
}
```

## Environment

- AG Grid React: latest
- React: 18
- TypeScript: latest 