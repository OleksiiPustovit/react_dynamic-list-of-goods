import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const showAll = () => {
    getAll()
      .then(allGoods => setGoods(allGoods));
  };

  const show5First = () => {
    get5First()
      .then(first5Goods => setGoods(first5Goods));
  };

  const showRed = () => {
    getRedGoods()
      .then(redGoods => setGoods(redGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={showAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={show5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={showRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
