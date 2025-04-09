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
        getRowId={(params) => params.data.id}
        {...props}
      />
    </div>
  );
} 