import {
  MainContainer,
  Cloud,
  Container,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Row1,
  Row2,
  Col,
  Headline,
  TextColor,
  RowHeadline,
  ColHeadline,
  SubHeadline,
  TextArea,
  VoteContainer,
  VoteContainerRow1,
  VoteContainerRow2,
  VoteCard,
  NewsContainer,
  NewsHeader,
  NewsCardContainer,
  NewsCard,
  HeadlineImage,
  HomeContainer,
  RatingContainer,
  PartnerContainer,
} from './style';

import Cars from '../../Assets/ds3.png';
import Partners from '../../Assets/Partners.png';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <MainContainer>
          <RowHeadline>
            <ColHeadline>
              <Headline>
                <TextColor>EverR</TextColor>etrofit, <br />
                votre voiture, <br />
                pour <TextColor>toujours</TextColor> <br />
              </Headline>
              <SubHeadline>
                Vous êtes attaché à votre véhicule mais il est désormais trop
                polluant ? Trop chère à entretenir ? Le prix du carburant
                classique est trop élevé ? Nous avons la solution !
              </SubHeadline>
            </ColHeadline>
            <HeadlineImage>
              <img src={Cars} alt="Une voiture" />
            </HeadlineImage>
          </RowHeadline>
          <Container>
            <Row1> Le retrofit c&apos;est :</Row1>

            <Row2>
              <Col>
                <Cloud />
                <p>
                  -46% d&apos;émission de GAES* par rapport à l&apos;achat
                  d&apos;un véhicule neuf*
                </p>
              </Col>
              <Col>
                <Battery />
                <p>
                  Une recharge complète en 12h et 80% en 20 minutes sur borne de
                  charge rapide
                </p>
              </Col>
              <Col>
                <Euro />
                <p>
                  Plus économique que l&apos;achat d&apos;un véhicule électrique
                </p>
              </Col>
              <Col>
                <Emoji />
                <p>Le confort de conduite d&apos;un véhicule électrique </p>
              </Col>
              <Col>
                <FullBattery />
                <p>Une autonomie jusqu&apos;à 350km</p>
              </Col>
            </Row2>
          </Container>
        </MainContainer>
        <TextArea>
          Autorisé en France depuis avril 2020, le rétrofit commence de plus en
          plus à trouver sa place sur le marché français.
          <br /> <br />
          Se ballader dans une voiture ancienne en centre ville ? <br />
          Faire des économies continuellement dès que vous prenez la route ?
          <br />
          Recharger votre véhicule le soir chez vous comme vous le feriez avec
          un téléphone ?<br />
          Oublier le bruit des vibrations et adopter une conduite plus
          plaisante.
          <br />
          Gardez votre véhicule avec qui vous avez passé tellement de bon et
          mauvais moment ?
          <br />
          <br />
          Tout cela est possible grâce au rétrofit. Mais le rétrofit c&apos;est
          quoi ? C&apos;est tout simplement la transoformation d&apos;un
          véhicule thermique en électrique. Ainsi, vous pouvez continuer de
          rouler avec style dans vote véhicule,mais en émettant 0g de CO2/km.
        </TextArea>
        <VoteContainer>
          <VoteContainerRow1>
            Votez pour le prochain véhicule à rétrofiter !
          </VoteContainerRow1>
          <VoteContainerRow2>
            <VoteCard />
            <VoteCard />
            <VoteCard />
          </VoteContainerRow2>
        </VoteContainer>
        <NewsContainer>
          <NewsHeader>Actualités sur les véhicules électriques</NewsHeader>
          <NewsCardContainer>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </NewsCardContainer>
        </NewsContainer>
        <RatingContainer>Salut </RatingContainer>
        <PartnerContainer>
          <p>Ils nous font confiance</p>
          <img src={Partners} alt="Nos partenaires" />
        </PartnerContainer>
      </HomeContainer>
    </>
  );
}