import React, { useState, useEffect } from 'react';
import jsonData from '../data/products.json';
import { Autocomplete, TextField, Stack } from '@mui/material';


const AllProductsList = () => {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    setData(jsonData);
  }, []);

  
  const uniqueTitle = Array.from(new Set(data.map((item) => item.title)));

    return (
      <div>
        
         <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
            id="size-small-standard"
            freeSolo
            size='small'
          options={uniqueTitle}
          sx={{ width: 300 }}
            renderInput={(params) => <TextField sx={{
       width: "240px",
       paddingRight: "32px",

       }}{...params}
            variant="standard"
            label="Enter product name*"
            placeholder="" />}
        />
        
        </Stack>
        
      </div>
    );
  };

export default AllProductsList;


