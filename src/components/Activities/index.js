import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold, 
  CardBody, 
  UserName,
  CardFooter,
  Destails,
  Value,
  Divider,
  Date,
  Actions,
  Options,
  OptionsLabel } from './styled';

import avatar from '../../images/avatar.png';


export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@robertoguimarãesjr</Bold>
          </Description>
        </CardHeader>
      </Card>

      <CardBody>
        <UserName>Kiritojr</UserName>
      </CardBody>

      <CardFooter>
        <Destails>
          <Value>R$ 18,00</Value>

          <Divider/>

          <Feather name="lock" color="#fff" size={14}/>
          <Date>Há 2 anos</Date>
        </Destails>

        <Actions>
          <Options>
            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14}/>
            <OptionsLabel>0</OptionsLabel>
          </Options>

          <Options>
            <AntDesign name="hearto" color="#fff" size={14}/>
            <OptionsLabel>0</OptionsLabel>
          </Options>
        </Actions>
        
      </CardFooter>
    </Container>
  );
}
