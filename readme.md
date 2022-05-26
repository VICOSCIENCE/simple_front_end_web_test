### Docker cheat sheet
docker network prune
docker volume prune
docker container prune

docker system prune

docker system prune --volumes

docker ps
docker network ls 

docker-compose up --build -d
docker-compose down --remove-orphans 

docker inspect [contenedor]

docker stop my_container

#How to Stop All Docker Containers
docker kill $(docker ps -q)

## How to Remove All Docker Containers
```bash
docker rm $(docker ps -a -q)
```

```bash

```

## How To Remove All Docker Images
```bash
docker rmi $(docker images -q) 
```

## Delete dangling or orphaned volumes
```bash
docker volume rm $(docker volume ls -qf dangling=true)
```


# Copy
## One specific file can be copied TO the container like:
```bash
docker cp foo.txt container_id:/foo.txt
```

## One specific file can be copied FROM the container like:
```bash
docker cp container_id:/foo.txt foo.txt
```

For emphasis, container_id is a container ID, not an image ID. (Use docker ps to view listing which includes container_ids.)

## Multiple files contained by the folder src can be copied into the target folder using:
```bash
docker cp src/. container_id:/target
# or
docker cp container_id:/src/. target
```


## Util
```bash
df -h --total
# or
sudo rm -r /path/to/folderName
```
