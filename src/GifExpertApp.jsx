
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Call of duty']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return; //validar si existe un elemento

        setCategories([newCategory, ...categories]);

        //setCategories(cat => [...categories, "Chocorol"])
    }

    return (
        <>
            <h1>Gif! 🫣</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
