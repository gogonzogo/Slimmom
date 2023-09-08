import React from 'react';
import { Dna } from 'react-loader-spinner';

function Loader() {
  return (
    <Dna
      visible={true}
      height="200"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}

export default Loader;
