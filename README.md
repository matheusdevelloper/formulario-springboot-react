
# 📋 Projeto Formulário (Java + React)

Este projeto é uma aplicação web simples composta por:

- 🖥️ **Back-end**: Spring Boot (Java)
- 🌐 **Front-end**: React.js

O objetivo da aplicação é permitir o cadastro e listagem de usuários com nome e email.

---

## 📦 Estrutura do Projeto

formulario/
├── formulario-frontend/ # Aplicação React (front-end)
├── src/ # Código-fonte Java (back-end)
├── pom.xml # Configurações Maven
└── README.md


---

## ⚙️ Tecnologias Utilizadas

### Back-end (Java Spring Boot)

- Spring Web
- Maven
- Java 17+

### Front-end (React)

- React 18+
- Axios
- Node.js / npm

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Rodar o Back-end (Spring Boot)

cd formulario
./mvnw spring-boot:run

O back-end será iniciado em:
👉 http://localhost:8080

3. Rodar o Front-end (React)

A aplicação React será iniciada em:
👉 http://localhost:3000

🔄 Comunicação entre Front-end e Back-end

    O React se comunica com o back-end Java usando axios.

    As requisições são feitas para:

        POST /api/usuarios: adiciona um novo usuário

        GET /api/usuarios: retorna todos os usuários cadastrados
🛡️ CORS

O back-end permite chamadas de qualquer origem com:

@CrossOrigin(origins = "*")

💡 Funcionalidades

    ✅ Cadastro de usuários (nome e email)

    ✅ Listagem dos usuários cadastrados em tempo real

✍️ Autor

    Matheus Batista Evangelista


