// @flow
import React from 'react';
import PusedoElement from '../PsuedoElemnt';
const Psuedo = () => (
  <section className="contributions">
    <PusedoElement className="contributions__title contributions--is-psuedo" borderRadius={0} width={150} height={30} />

    <PusedoElement className="contributions--is-psuedo" borderRadius={0} height={200} />
  </section>
);

export default Psuedo;
