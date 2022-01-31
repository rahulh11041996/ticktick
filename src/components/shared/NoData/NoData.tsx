import React from 'react';
import { DICTIONARY } from '../../../assets/data/dict';

export default function NoData() {
  return (
    <div className="no_details gap-6 flex pt-16 items-center justify-center flex-col">
      <i className="fas fa-sad-tear text-7xl text-greyprimary opacity-30"></i>
      <h1 className="text-2xl text-greyprimary font-semibold opacity-60 italic">
        {DICTIONARY.NO_TODO_LIST}
      </h1>
    </div>
  );
}
