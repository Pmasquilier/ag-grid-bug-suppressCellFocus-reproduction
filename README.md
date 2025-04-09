# AG Grid Bug Reproduction

This repository demonstrates an AG Grid bug where the grid cannot draw rows while it is in the middle of rendering.

## The Bug

The bug occurs when using the `suppressCellFocus` prop. This causes the grid to throw an error when interacting with rows.

## Steps to Reproduce

1. Clone this repository
2. Install dependencies with `yarn install`
3. Start the development server with `yarn dev`
4. Click on any row in the grid
5. The error will appear in the console

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
        suppressCellFocus
        theme="legacy"
        {...props}
      />
    </div>
  );
}
```

## Potential Fix

Adding the `getRowId` function can fix this issue:

```tsx
<AgGridReact
  suppressCellFocus
  theme="legacy"
  getRowId={(params) => params.data.id} // Fixes the bug
  {...props}
/>
```

This suggests that the bug is related to how AG Grid manages row identities during rendering.

## Environment

- AG Grid React: latest
- React: 18
- TypeScript: latest 