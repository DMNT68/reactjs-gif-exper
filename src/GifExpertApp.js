import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
  //   const categories = ['One Punchman', 'Samurai X', 'Dragon ball'];
  // const [categories, setCategories] = useState(['One puchman']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, idx) => (
          <GifGrid key={`${(category = idx)}`} category={category} />
        ))}
      </ol>
    </div>
  );
};
