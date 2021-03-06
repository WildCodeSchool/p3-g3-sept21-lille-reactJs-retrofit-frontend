import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Map from '../../Components/Map/index';

import {
  SContainer,
  SListAdress,
  SAdress,
  PhoneWhite,
  AdressWhite,
} from './style';

function Localisation() {
  const [adressResults, setAdressResults] = useState([]);

  useEffect(() => {
    axios
      .get(`/localisation`)
      .then(({ data }) => {
        setAdressResults(data);
      })
      .catch();
  }, []);
  return (
    <>
      <SContainer>
        <SListAdress>
          {adressResults.map((result) => {
            return (
              <SAdress key={result.id}>
                <h3>{[result.name]}</h3>

                <p>
                  <AdressWhite />
                  {result.streetNumber} {result.street}
                </p>
                <p>
                  {result.postalCode} {result.city}
                </p>
                <p>
                  <PhoneWhite />
                  {result.phone}
                </p>
              </SAdress>
            );
          })}
        </SListAdress>
        <Map />
      </SContainer>
    </>
  );
}
export default Localisation;
