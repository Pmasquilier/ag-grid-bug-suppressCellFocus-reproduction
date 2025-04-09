import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { AgGridWrapper } from './components/AgGridWrapper';
import { ModuleRegistry } from 'ag-grid-community';
import { 
  ClientSideRowModelModule, 
  ValidationModule, 
  ColumnAutoSizeModule, 
  RowStyleModule,
  RowSelectionModule 
} from 'ag-grid-community';

// Enregistrer les modules nécessaires
ModuleRegistry.registerModules([
  ClientSideRowModelModule, 
  ValidationModule, 
  ColumnAutoSizeModule, 
  RowStyleModule,
  RowSelectionModule
]);

interface Car {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleRowClicked = (event: any) => {
    setSelectedCar(event.data);
  };

  const handleClose = () => {
    setSelectedCar(null);
  };
  
  return (
    <div style={{ padding: 20, height: 'calc(100vh - 40px)' }}>
      <div style={{ height: '100%', width: '100%' }}>
        <AgGridWrapper
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
    </div>
  );
}

export default App; 