import React, { Component} from 'react';

import Post from '../post/index';

import './styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Carlos Levir",
          avatar: "https://avatars0.githubusercontent.com/u/40604081?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Aguiar",
          avatar: "https://avatars2.githubusercontent.com/u/56986235?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Ana Figueira",
              avatar: "https://avatars3.githubusercontent.com/u/24214761?s=460&v=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "João Inácio Neto",
              avatar: "https://avatars3.githubusercontent.com/u/22185823?s=460&v=4"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Filipe Deschamps",
          avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala turma, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e ele me ajudou bastante a programar meu primeiro jogo multiplayer.",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel Aguiar",
              avatar: "https://avatars2.githubusercontent.com/u/56986235?s=460&v=4"
            },
            content: "Que bacana, como é o funcionamento desse jogo?"
          },
          {
            id: 2,
            author: {
              name: "Filipe Deschamps",
              avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
            },
            content: "Ele é bem simples, da uma olhada no meu Github: https://github.com/filipedeschamps "
          },
        ]
      },
      {
        id: 4,
        author: {
          name: "Filipe Deschamps",
          avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala turma, tudo certo? Segue um GIF do meu primeiro jogo Multiplayer.",
        image: "https://raw.githubusercontent.com/filipedeschamps/meu-primeiro-jogo-multiplayer/master/game-preview.gif",
        comments: []
      }
    ]
  };

  render() {
    return (
      <div className="content">
        <div id="postlist">
          {this.state.posts.map(post => <Post key={post.id} data={post}/> )}
        </div>
      </div>

    );
  }
}

export default PostList;