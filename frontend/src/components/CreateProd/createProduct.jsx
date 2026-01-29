import { useState } from 'react';
import { getProduct, createProduct } from '../../utilities/prod-api';

export default function CreateNoteForm({ prod, setProd }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: null,
    category: "",
    inStock: null,
    tags: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === 'inStock') {
      if (value === '') {
        newValue = null;
      } else {
        newValue = value === 'true';
      }
    }
    if (name === 'price') {
      newValue = value === '' ? null : value;
    }
    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = await createProduct(formData);
      // Always use an array for prod
      setProd(Array.isArray(prod) ? [...prod, data] : [data]);
      // Method 2
      // const notes = await getNotes();
      // setNotes(notes)
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter a name...'
        name='name'
        value={formData.name || ''}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder='Enter a description...'
        name='description'
        value={formData.description || ''}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder='Enter a price...'
        name='price'
        value={formData.price === null ? '' : formData.price}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder='Enter a category...'
        name='category'
        value={formData.category || ''}
        onChange={handleChange}
      />
      <select
        name='inStock'
        value={formData.inStock === null ? '' : String(formData.inStock)}
        onChange={handleChange}
      >
        <option value=''>Select in stock...</option>
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
      <input 
        type='text'
        placeholder='Enter a tags...'
        name='tags'
        value={formData.tags || ''}
        onChange={handleChange}
      />
      <input type='submit' />
    </form>
  );
}