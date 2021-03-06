import Carousel from 'Components/Carousel';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Car from 'Assets/returnOfCar.png';
import Bge from 'Assets/bge.png';
import Clap from 'Assets/clap.png';
import Creinov from 'Assets/creinnov.png';
import HEV from 'Assets/hive.png';
import L2EP from 'Assets/l2ep.png';
import MEL from 'Assets/MEL.png';
import HDF from 'Assets/hauts-de-france.png';
import Transalley from 'Assets/transalley.png';
import UnivLille1 from 'Assets/univ.png';
import LogoWild from 'Assets/wcs.png';
import NewsCard from 'Components/NewsCard';
import VoteCard from 'Components/VoteCard';

import {
  MainContainer,
  Cloud,
  Container,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Col,
  Headline,
  RowHeadline,
  VoteContainer,
  HomeContainer,
  Rating,
  PartnerContainer,
  News,
} from './style';

export default function Home() {
  const [home, setHome] = useState([]);
  const [topCars, setTopCars] = useState([]);

  useEffect(() => {
    axios
      .get(`/cars`)
      .then(({ data }) => {
        setTopCars(data.slice(0, 3));
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/news`)
      .then(({ data }) => {
        if (Array.isArray(data)) setHome(data);
        else throw new Error('Failed API call');
      })
      .catch(() => {
        toast.error('No News found !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200,
      mirror: true,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <HomeContainer>
        <MainContainer>
          <RowHeadline>
            <Headline
              data-aos="fade-down"
              data-aos-offset="500"
              data-aos-duration="800"
              data-aos-anchor-placement="top"
            >
              <p>
                <span>EVeR</span>etrofit,
              </p>
              <p>votre voiture,</p>
              <p>
                pour <span>toujours</span>
              </p>
              <p className="subHeadline">
                Vous ??tes attach?? ?? votre voiture mais il est d??sormais trop
                polluant ? Trop ch??re ?? entretenir ? Le prix du carburant
                classique est trop ??lev?? ? Nous avons la solution !
              </p>
            </Headline>
            <img
              src={Car}
              alt="Une voiture"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="800"
              data-aos-anchor-placement="top"
            />
          </RowHeadline>
          <Container>
            <div className="Row1"> Le retrofit c&apos;est :</div>
            <div className="Row2">
              <Col>
                <div className="ColLogo">
                  <Cloud />
                </div>
                <div className="ColText">
                  -46% d&apos;??mission de GAES* par rapport ?? l&apos;achat
                  d&apos;un v??hicule neuf*
                </div>
              </Col>
              <Col>
                <div className="ColLogo">
                  <Battery />
                </div>
                <div className="ColText">
                  Une recharge compl??te en 12h et 80% en 20 minutes sur borne de
                  charge rapide
                </div>
              </Col>
              <Col>
                <div className="ColLogo">
                  <Euro />
                </div>
                <div className="ColText">
                  Plus ??conomique que l&apos;achat d&apos;un v??hicule ??lectrique
                </div>
              </Col>
              <Col>
                <div className="ColLogo">
                  <Emoji />
                </div>
                <div className="ColText">
                  Le confort de conduite d&apos;un v??hicule ??lectrique
                </div>
              </Col>
              <Col>
                <div className="ColLogo">
                  <FullBattery />
                </div>
                <div className="ColText">Une autonomie jusqu&apos;?? 350km</div>
              </Col>
            </div>
          </Container>
        </MainContainer>
        <div className="TextArea">
          <p data-aos="fade-down">
            Autoris?? en France depuis avril 2020, le r??trofit commence de plus
            en plus ?? trouver sa place sur le march?? fran??ais.
          </p>
          <p data-aos="fade-right">
            Se ballader dans une voiture ancienne en centre ville ?
          </p>
          <p data-aos="fade-left">
            Faire des ??conomies continuellement d??s que vous prenez la route ?
          </p>
          <p data-aos="fade-down">
            Recharger votre v??hicule le soir chez vous comme vous le feriez avec
            un t??l??phone ?
          </p>
          <p data-aos="fade-right">
            Oublier le bruit des vibrations et adopter une conduite plus
            plaisante.
          </p>
          <p data-aos="fade-left">
            Gardez votre v??hicule avec qui vous avez pass?? de bon et mauvais
            moment ?
          </p>
          <p data-aos="fade-down">
            Tout cela est possible gr??ce au r??trofit. Mais le r??trofit
            c&apos;est quoi ?
          </p>
          <p data-aos="fade-right">
            C&apos;est tout simplement la transformation d&apos;un v??hicule
            thermique en ??lectrique. Ainsi, vous pouvez continuer de rouler avec
            style dans vote v??hicule,mais en ??mettant 0g de CO2/km.
          </p>
        </div>
        <Link to="/vote">
          <VoteContainer>
            <h1>Votez pour le prochain v??hicule ?? r??trofiter !</h1>
            <div className="VoteCardContainer" data-aos="fade-right">
              {topCars.map((car) => {
                return <VoteCard {...car} key={car.id} />;
              })}
            </div>
          </VoteContainer>
        </Link>
        <News>
          <h2>Actualit??s sur les v??hicules ??lectriques</h2>
          {home.map((data) => {
            return (
              <NewsCard
                image={data.image}
                description={data.description}
                source={data.source}
                date={data.date}
                key={data.id}
              />
            );
          })}
        </News>
        <Rating>
          <h2>Ils nous recommandent</h2>
          <Carousel />
        </Rating>
        <PartnerContainer>
          <h2>Ils nous font confiance</h2>
          <div>
            <img
              src={Bge}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="750"
              offset="500"
            />
            <img
              src={Clap}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="1000"
              offset="500"
            />
            <img
              src={Creinov}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="750"
              offset="500"
            />
            <img
              src={HEV}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="1000"
              offset="500"
            />
            <img
              src={L2EP}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="750"
              offset="500"
            />
            <img
              src={MEL}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="1000"
              offset="500"
            />
            <img
              src={HDF}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="750"
              offset="500"
            />
            <img
              src={Transalley}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="1000"
              offset="500"
            />
            <img
              src={UnivLille1}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="750"
              offset="500"
            />
            <img
              src={LogoWild}
              alt="Logo d'un Partenaire"
              data-aos="zoom-in"
              data-aos-duration="1000"
              offset="500"
            />
          </div>
        </PartnerContainer>
      </HomeContainer>
    </>
  );
}
