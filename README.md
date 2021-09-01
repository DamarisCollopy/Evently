��# Evently

# Preparando ambiente
  * express
  * mysql2
  * nodemon
  * sequelize
  * sequelize-cli
  * body-parser
  * consign

# Docker mysql
 Baixando a imagem
 * https://hub.docker.com/_/mysql
  $ docker image pull mysql:8.0
 
 Caso esteja usando o docker windowns 
 * Configurar o dockerdesketop para receber o volume
 * Share drives
 
 Rum container
 $ docker run --rm --name=my-mysql --env MYSQL_ROOT_PASSWORD=password --detach --publish 3306:3306 mysql:8.0
 
 Para se conectar ao container
 $ mysql -uroot -ppassword -h 127.0.0.1 -P 3306 --protocol=tcp


  # Rodando o migration
  $ npx sequelize-cli db:migrate
  # Rodando Seed 
  $ npx sequelize-cli db:seed:all
  
