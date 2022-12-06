[![Contributors][contributors-shield]][contributors-url]

[![Forks][forks-shield]][forks-url]

[![Stargazers][stars-shield]][stars-url]

[![Issues][issues-shield]][issues-url]

[![MIT License][license-shield]][license-url]

[![LinkedIn][linkedin-shield]][linkedin-url]


## About The Project
![[VICO SCIENCE][company-brand]](https://i1.wp.com/vicoscience.com/wp-content/uploads/2021/01/imagotipo_vicoscience_presentaciones.png?fit=210%2C100&ssl=1)

### Built With
* [Nginx](https://www.nginx.com/)
* [Html](https://www.w3.org/html/)

 
<!-- GETTING STARTED -->

## Getting Started

This example is intended for quick test server if you are setting up an Nginx server instance for the first time and as template for the proper minimal way to document the project repository

### Prerequisites

### Routing
- Check the AWS EC Instance is properly set 
- Check the AWS Route 53 zone is properly on first time or after instance reboot or stop
- Check the dns server names are properly set on the domain name service provider (NIC.com NIC.cl)
- Check security group are properly set Inbound rules Ports: 443, 80, 22

### Usage

```bash

git clone https://github.com/VICOSCIENCE/simple_front_end_web_test
cd simple_front_end_web_test
sudo docker-compose up

```


### Development environment

* npm
```sh
npm install npm@latest -g
```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

  

1. Get a free API Key at [https://example.com](https://example.com)

2. Clone the repo

```sh

git clone https://github.com/your_username_/Project-Name.git

```

3. Install NPM packages

```sh

npm install

```

4. Enter your API in `config.js`

```js

const  API_KEY = 'ENTER YOUR API';

```

  

<p  align="right">(<a  href="#top">back to top</a>)</p>

  
  
  

<!-- USAGE EXAMPLES -->

## Usage

  

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

  

_For more examples, please refer to the [Documentation](https://example.com)_

  

<p  align="right">(<a  href="#top">back to top</a>)</p>

  
  
  

<!-- ROADMAP -->

## Roadmap

  

- [x] Add Roadmap
- [x] Add Cheat Sheets
- [ ] Add a better and funnier HTML index content



<!-- CONTRIBUTING -->

## Contributing

  

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

  

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  

<p  align="right">(<a  href="#top">back to top</a>)</p>

  
  
  

<!-- LICENSE -->

<!-- CONTACT -->

## Contact

  

Cristián Aguirre - [@Crstn_Invntr](https://twitter.com/Crstn_Invntr) 

Project Link: [https://github.com/VICOSCIENCE/simple_front_end_web_test](https://github.com/VICOSCIENCE/simple_front_end_web_test)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* This readme.MD file is partially based on [othneildrew's Best-README-Template](https://github.com/VICOSCIENCE/simple_front_end_web_test)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/VICOSCIENCE/simple_front_end_web_test.svg?style=for-the-badge

[contributors-url]: https://github.com/VICOSCIENCE/simple_front_end_web_test/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/VICOSCIENCE/simple_front_end_web_test.svg?style=for-the-badge

[forks-url]: https://github.com/VICOSCIENCE/simple_front_end_web_test/network/members

[stars-shield]: https://img.shields.io/github/stars/VICOSCIENCE/simple_front_end_web_test.svg?style=for-the-badge

[stars-url]: https://github.com/VICOSCIENCE/simple_front_end_web_test/stargazers

[issues-shield]: https://img.shields.io/github/issues/VICOSCIENCE/simple_front_end_web_test.svg?style=for-the-badge

[issues-url]: https://github.com/VICOSCIENCE/simple_front_end_web_test/issues

[license-shield]: https://img.shields.io/github/license/VICOSCIENCE/simple_front_end_web_test.svg?style=for-the-badge

[license-url]: https://github.com/VICOSCIENCE/simple_front_end_web_test/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/cristianaguirre/

 

# Docker cheat sheets

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

## Remove or Delete containers

### How to Remove All Docker Containers

```bash

docker rm $(docker ps -a -q)

```

  

### How To Remove All Docker Images

```bash

docker rmi $(docker images -q)

```

### Delete dangling or orphaned volumes

```bash

docker volume rm $(docker volume ls -qf dangling=true)

```
## Copy

### One specific file can be copied TO the container like:

```bash

docker cp foo.txt container_id:/foo.txt

```
### One specific file can be copied FROM the container like:

```bash

docker cp container_id:/foo.txt foo.txt

```
For emphasis, container_id is a container ID, not an image ID. (Use docker ps to view listing which includes container_ids.)

### Multiple files contained by the folder src can be copied into the target folder using:

```bash

docker cp src/. container_id:/target

# or

docker cp container_id:/src/. target

```
# Git cheat sheet
## to download
```bash
git clone --branch dev https://github.com/VICOSCIENCE/simple_front_end_web_test
```
```bash
git pull https://github.com/VICOSCIENCE/simple_front_end_web_test
```
## to upload
Adds all the folder content
```bash
git add .
```
```bash
git commit -m "Dockerfile update to deploy"
```
```bash
git push origin master
```

## Util

```bash

df -h --total

# or

sudo rm -r /path/to/folderName

```
