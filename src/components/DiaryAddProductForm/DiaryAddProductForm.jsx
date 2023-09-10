import { useState } from 'react';
import { TextField} from '@mui/material';
import Button from '../Button/Button';
import CirclePlus from '../Button/CirclePlus';
import css from './DiaryAddProductForm.module.css';



export default function DiaryAddProduct({products, setProducts}) {
    const [productName, setProductName] = useState('');
    const [grams, setGrams] = useState('');

    const handleProductNameChange = event => {
        setProductName(event.target.value);
    };

    const handleGramsChange = event => {
        setGrams(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const newProduct = {
            id: Math.random().toString(),
            productName,
            grams,
        };
      
        setProducts(prevState => [...prevState, newProduct]);
        setProductName('');
        setGrams('');
    };

    return (
        
        <div className={css.section}>
          
            <form className={css.diaryform} onSubmit={handleSubmit}>
                <div className={css.formdiv}>
                    <TextField
                        sx={{fontFamily: "Verdana",
       fontSize: '14px',
       fontWeight: "700",
       lineHeight: "17px",
       letterSpacing: "0.04em",
       textAlign: "left",
       width: "240px",
       paddingRight: "32px",

       }}
                        id="standard-basic"
                    label="Enter product name"
                    variant="standard"
                    value={productName}
                        onChange={handleProductNameChange} />
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
                value={grams}
                        onChange={handleGramsChange}/>
             </div>
                <Button />
                <CirclePlus />
            </form>
         
        </div>
    );
}