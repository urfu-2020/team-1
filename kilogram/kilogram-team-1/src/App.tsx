import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel} from './components/smart/Panel/Panel';
import {SendForm} from "./components/smart/SendForm/SendForm";
import {Form} from "formik";
import {ChatWindow} from "./components/smart/ChatWindow/ChatWindow";

const contacts = [
  {
    name: "Мария Николаевна",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    message: "Привет! Давай созвонимся в 6 по Москве?"
  },
  {
    name: "Лера Абрамова",
    photo: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    message: "Привет! Давай созвонимся в 7 по Москве?"
  },
  {
    name: "Дэн Абрамов",
    photo: "http://techrocks.ru/wp-content/uploads/2017/09/den_abramov.jpg",
    message: "Привет! Есть минутка поговорить о редаксе?"
  },
  {
    name: "Марина Игорева",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    message: "Нет, я не разделяю точку зрения Германии в пакте о ненападении 1944 года. И вообще это не очень!"
  },  {
    name: "Дина Канделяки",
    photo: "https://images.unsplash.com/photo-1484691065994-f1b2f364d7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    message: "Да, я разделяю точку зрения Балтики в пакте о ненападении 1944 года. И вообще это не очень!"
  },  {
    name: "Денис Олимпийский",
    photo: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Доброго утра!"
  },  {
    name: "Дима Никольский",
    photo: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Привет! А давай кое-что поправим в проекте, там буквально 5 строчек переделать"
  },  {
    name: "Денис Кандинский",
    photo: "https://images.unsplash.com/photo-1506864668770-c8571d1a8303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Я не понимаю популярность абстракционизма в 20-е года. Такое ощу..."
  },  {
    name: "Александр Драгунов",
    photo: "https://images.unsplash.com/photo-1486166849615-da9f8d217a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80",
    message: "У меня немного не совпадает видение проекта с тобой."
  },  {
    name: "Мама",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Нет, мы не можем завести собаку."
  },  {
    name: "Александра Дардарио",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Вы оставляли заявку на кредитную карту в банке Минькоф"
  },
  {
    name: "Александра Мардарио",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Вы не оставляли заявку на кредитную карту в банке Минькоф"
  },
  {
    name: "Лера Козлова",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    message: "Вы не оставляли заявку на кредитную карту в банке Минькоф"
  },
]

function App() {
  return (
    <div className="App">
      <Panel contacts={contacts} />
      <div className={'chat-space'}>
        <ChatWindow />
        <SendForm />
      </div>
    </div>
  );
}

export default App;
