import Accordion from '../../Components/Accordion/index';
import { Container, SendBtn } from './style';

export default function Faq() {
  const accordionData = [
    {
      title: 'Le rétrofit',
      questions: [
        {
          question: `Depuis quand le rétrofit est autorisé en France ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
        {
          question: `Pourquoi le rétrofitage ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
      ],
    },
    {
      title: `L'entreprise`,
      questions: [
        {
          question: `Comment se passe le rétrofit ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
        {
          question: `Pourquoi le rétrofitage ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
      ],
    },
    {
      title: `L'environnement`,
      questions: [
        {
          question: `Combien de temps prend un rétrofitage ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
        {
          question: `Pourquoi le rétrofitage ?`,
          content: `Quisque eu fringilla dolor, sed feugiat nulla. 
        Pellentesque et lorem et ante volutpat efficitur. 
        Pellentesque fringilla, lorem eget consectetur luctus, 
        metus erat consequat massa, nec consequat est dolor eget magna. 
        Suspendisse fringilla sed nisi tristique ultricies. Phasellus 
        facilisis tortor mauris, non convallis libero interdum non. 
        Nulla sed ullamcorper leo. Quisque porta mi nunc. Vestibulum ac
        dui eget sapien ultrices eleifend vitae eu neque. Ut pulvinar 
        eros ut sem aliquet, auctor aliquam est posuere. Aliquam non posuere lectus. `,
        },
      ],
    },
  ];

  return (
    <div>
      <Container>
        {accordionData.map(({ title, questions }) => (
          <Accordion title={title} questions={questions} />
        ))}
        <SendBtn>Envoyez-nous vos questions</SendBtn>
      </Container>
    </div>
  );
}