📋 React Todo List com Recoil

Aplicação de lista de tarefas desenvolvida com React 18, Recoil para gerenciamento de estado e Emotion (Styled Components) para estilização.

O projeto foi construído utilizando Vite como bundler para desenvolvimento rápido e build otimizado.

🚀 Tecnologias Utilizadas

React 18

- Recoil (Gerenciamento de Estado)

- Emotion Styled (@emotion/styled) (CSS-in-JS)

- Vite (Build tool)

- ESLint (Linting)

📦 Estrutura do Projeto
'''bash
react-todo-list-recoil/
│
├── src/
│   ├── components/
│   ├── styles/
│   ├── contexts/
│   └── App.jsx
│
├── index.html
├── package.json
└── vite.config.js
'''

⚙️ Funcionalidades

✅ Adicionar nova tarefa

✅ Marcar tarefa como concluída

✅ Remover tarefa

✅ Filtro por:

Todas

Pendentes

Terminadas

✅ Contador dinâmico de tarefas

✅ Interface Dark Mode moderna

🧠 Gerenciamento de Estado

O projeto utiliza Recoil para:

Criar átomos (atom)

Criar seletores (selector)

Gerenciar estado global de tarefas

Aplicar filtros derivados

Isso permite uma arquitetura mais organizada e escalável.

🛠️ Instalação
1️⃣ Clone o repositório
'''bash
git clone https://github.com/seu-usuario/react-todo-list-recoil.git
'''
2️⃣ Acesse a pasta do projeto
'''bash
'cd react-todo-list-recoil
'''
3️⃣ Instale as dependências
'''bash
npm install
'''

ou

'''bash
yarn
'''

▶️ Rodando o projeto
Ambiente de desenvolvimento
'''bash
npm run dev
'''

O projeto estará disponível em:

http://localhost:5173


🎨 Estilização

A estilização foi feita com:

@emotion/styled


Utilizando:

Componentes estilizados

Props dinâmicas para estado (ex: tarefa concluída)

Tema dark moderno

Micro-interações (hover, transições)

📈 Possíveis Melhorias Futuras

Persistência com LocalStorage

Integração com API (FastAPI / Django)

Drag and Drop

Autenticação de usuário

Deploy (Vercel / Netlify)

Testes com Vitest ou Jest

📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Autor

Desenvolvido por Jocimar Braga