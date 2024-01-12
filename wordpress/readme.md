 https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-docker-compose#step-6-completing-the-installation-through-the-web-interface

 docker-compose up -d
 
 docker-compose logs service_name

 docker-compose exec webserver ls -la /etc/letsencrypt/live

 docker-compose up --force-recreate --no-deps certbot

 docker-compose up -d --force-recreate --no-deps webserver

 docker-compose ps