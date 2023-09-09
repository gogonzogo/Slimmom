import React, { useState, useEffect } from 'react';
import jsonData from '../data/products.json';
import { Autocomplete, TextField, Stack } from '@mui/material';


const NotAllowedProducts = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    
    const result = jsonData.filter(item => item.groupBloodNotAllowed[1] === true);
  
      setFilteredData(result);
  }, []);
    
    
        
        
    const uniqueProducts = Array.from(new Set(filteredData.map((item) => item.title)));

    return (
      <div>
        
         <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
            id="size-small-standard"
            freeSolo
            size='small'
          options={uniqueProducts}
          sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params}
            variant="standard"
            label="Enter product"
            placeholder="" />}
        />
        
        </Stack>
        
      </div>
    );
  };

export default NotAllowedProducts;
