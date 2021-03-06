import axios from 'axios';
import { useEffect, useState } from 'react';
import VehiculeCard from '../../Components/VehiculeCard';
import { SCarsView, Title } from './style';

function Vehicules() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`/cars`).then(({ data }) => {
      setCars(data);
    });
  }, []);
  return (
    <div>
      <Title>Choisissez votre prochain véhicule à rétrofiter</Title>
      <SCarsView>
        {cars.map((data) => {
          return <VehiculeCard {...data} key={data.id} />;
        })}
      </SCarsView>
    </div>
  );
}

export default Vehicules;
