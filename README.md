# Projeto Fullstack Python

## Como utilizar o projeto

Este repositório consta com duas pastas dentro dele. Uma é referente ao frontend e outra ao backend.

### Para realizar o "build" do backend:

 1. Acesse a pasta "backend"
 2. Faça a criação do ambiente virtual - Ex.: `python -m venv venv`
 3. Acesse o ambiente virtual criado (venv)
 4. Execute o arquivo "requirements.txt" para fazer a instalação de todas as dependências necessárias. `pip install -r requirements.txt`
 5. Preencha um novo arquivo .env com os dados necessários (secret_key, db, user, password)
 6. Crie uma nova database no PSQL de acordo com o nome do db dado no .env
 7. Execute as migrations dentro do venv `python manage.py migrate`
 8. Rode o servidor `python manage.py runserver`

Visando facilitar o preenchimento do banco de dados com os veículos para visualização no frontend, foi criado duas CLI.

    python manage.py create_admin -> Criação de um user admin com os dados: admin@admin.com - admin
   
    python manage.py create_cars -> Criação de 50 veículos aleatórios
   
### Para realizar o "build" do frontend:
 1. Acesse a pasta "frontend"
 2. Execute o CLI `yarn install`
 3. Rode o servidor `yarn dev`
 
## Stacks
### Frontend

 - React
 - NextJS
 - Tailwind
 - SWR

### Backend

 - Python
 - PostgreSQL
 - Django
 - DRF
 - Swagger
