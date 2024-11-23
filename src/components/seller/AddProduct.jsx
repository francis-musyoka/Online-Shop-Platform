import React, {  } from 'react';
import ProductForm from './ProductForm';

const AddProduct = () => {
    
    const handleSubmit = (formData) => {
        console.log(formData);
        
    };

    return (
        <>
            <ProductForm onSubmit = {handleSubmit} isEditing = {false}/>
        </>
    );
};

export default AddProduct;
