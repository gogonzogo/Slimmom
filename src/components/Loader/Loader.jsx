import React from 'react';
import { Hearts } from 'react-loader-spinner';

function Loader() {
  return (
    // <Dna
    //   sx={{margin: '0 auto',}}
    //   visible={true}
    //   height="200"
    //   width="200"
    //   ariaLabel="dna-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="dna-wrapper"
    // />

    // If the color is better orange sub this for the green:  "var(--accent-bright-color)"
    <Hearts 
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
/>
  );
}

export default Loader;
