import React from 'react';
import ProductForm from './ProductForm'

const EditProduct = () => {

    const handleSubmit = (formData)=>{
        console.log(formData);
        
    }
    return (
        <div>
            <ProductForm onSubmit = {handleSubmit} isEditing = {true}/>
        </div>
    );
}

export default EditProduct;
