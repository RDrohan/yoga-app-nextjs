# Yoga App NextJS

Simple NextJS about yoga using a [third-party yoga API](https://github.com/alexcumplido/yoga-api) to generate data.

## Installation
1. Clone repo into a directory
```sh
git clone https://github.com/RDrohan/yoga-app-nextjs.git
```
2. `cd` into the 'yoga-app-nextjs' folder

```sh
cd yoga-app-nextjs
```
3. Install dependencies

```sh
npm install
```
4. Start application using below command

```sh
npm run dev
```
5. Then go to [http://localhost:3000/](http://localhost:3000/) to access site

## Run Docker Image
1. [Install Docker](https://docs.docker.com/get-docker/) on your machine and make sure it is running

2. Build your container

```sh
docker build -t yoga-app .
```

2. Run your container

```sh
docker run -p 3000:3000 nextjs-docker
```

4. Then go to [http://localhost:3000/](http://localhost:3000/) to access site