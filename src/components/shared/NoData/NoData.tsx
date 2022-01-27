import React from 'react';
import { DICTIONARY } from '../../../assets/data/dict';

export default function NoData() {
  return (
    <div className="no_details">
      <i className="fas fa-sad-tear"></i>
      <h1>{DICTIONARY.NO_TODO_LIST}</h1>
    </div>
  );
}
