import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  //   const categories = ['One Punchman', 'Samurai X', 'Dragon ball'];
  const [categories, setCategories] = useState(['One puchman']);

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
