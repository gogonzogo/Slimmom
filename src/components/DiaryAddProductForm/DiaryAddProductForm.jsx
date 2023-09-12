import { useState } from 'react';
import { TextField} from '@mui/material';
import Button from '../Button/Button';
import CirclePlus from '../Button/CirclePlus';
import css from './DiaryAddProductForm.module.css';
import AllProductsList from 'components/ProductsList/AllProductsList/AllProductsList';



export default function DiaryAddProduct({products, setProducts}) {
    // const [productName, setProductName] = useState('');
    const [grams, setGrams] = useState('');

  
    const handleGramsChange = event => {
        setGrams(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setGrams('');
    };

    return (
        
        <div className={css.section}>
        
            <form className={css.diaryform} onSubmit={handleSubmit}>
                <div className={css.formdiv}>
               <AllProductsList />      
                </div>
                  <div className={css.formdiv}>
                    <TextField sx={{fontFamily: "Verdana",
       fontSize: '14px',
       fontWeight: "700",
       lineHeight: "17px",
       letterSpacing: "0.04em",
       textAlign: "left",
       width: "240px",
       paddingRight: "32px",

       }}
                        id="standard-basic"
                    label="Grams"
                        variant="standard"
                         type="number"
          InputLabelProps={{
            shrink: true,
                        }}
                value={grams}
                        onChange={handleGramsChange}/>
             </div>
                <Button />
                <CirclePlus />
            </form>
         
        </div>
    );
}