import React from 'react';

const Loader = () => {
  return (
    <div>
      <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> Cargando
    </div>
  );
};

export default Loader;