import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface Car {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

export function SimpleGrid() {
  const gridRef = useRef<AgGridReact>();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  if (gridRef.current?.api) {
    gridRef.current.api.refreshCells();
    gridRef.current.api.redrawRows();
  }

  const handleRowClicked = (event: any) => {
    setSelectedCar(event.data);
  };

  const handleClose = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <div className="ag-theme-material" style={{ height: 500, width: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowData={[
            { make: "Tesla", model: "Model Y", price: 64950, electric: true },
            { make: "Ford", model: "F-Series", price: 33850, electric: false },
            { make: "Toyota", model: "Corolla", price: 29600, electric: false },
          ]}
          columnDefs={[
            { field: "make" },
            { field: "model" },
            { field: "price" },
            { field: "electric" }
          ]}
          rowSelection="multiple"
          onRowClicked={handleRowClicked}
        />
      </div>

      <Dialog open={!!selectedCar} onClose={handleClose}>
        <DialogTitle>Car Details</DialogTitle>
        <DialogContent>
          {selectedCar && (
            <div>
              <p>Make: {selectedCar.make}</p>
              <p>Model: {selectedCar.model}</p>
              <p>Price: ${selectedCar.price}</p>
              <p>Electric: {selectedCar.electric ? 'Yes' : 'No'}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 