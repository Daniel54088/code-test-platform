# nine-web-service


<p align="center">
	<h1 align="center">Nine Web Service</h1>
</p>

<p align="center">
  <a href="https://github.com/nodejs/node"  alt="node js">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node js">
  </a>
  <a href="https://github.com/facebook/react"  alt="react">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react">
  </a>
  <a href="https://dashboard.heroku.com/"  alt="heroku">
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku">
  </a>
</p>

<!-- Used for the "back to top" links within the document -->
<div id="contents"></div>


## Getting started

**YARN install**

```sh
yarn 
```

**Start local server**

```sh
yarn dev
```

## Quick Demo

  <a href="https://nine-web-service-1.herokuapp.com/"  alt="react">https://nine-web-service-1.herokuapp.com/</a>


## Features

### Basic Overview

Importing the json url or json format contents to get the filtered data.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/overview.png">


### Expected Response
If the json url or json format conent is correct, the Output Result area will return the filtered response.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/positive.png">


### Error Handling
If the json url or json format conent is wrong, the Output Result area will return the error response.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/error.png">


### Data filtering

filterPayload function will return the filtered data. The rule will be
1. DRM enabled (drm: true)
2.  at least one episode (episodeCount > 0)

```js
export const filterPayload = dataPayload => {
    // return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).
    let filteredContent = [];
    return filteredContent = dataPayload.payload
      .filter(item => item.drm === true)
      .filter(item => item.episodeCount > 0);
  };
```

<sub>[⇧ back to top](#contents)</sub>


## Deployment

### Testing code (Jest)
- Component UI testing, making sure the element render successfully. 
- Test filtering function works as expected.


### CI / CD  (Travis & Heroku)
When merge the latest code to github main branch, It will automatically integration the code and deploy on the Heroku server 

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/travis.png">

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/heroku.png">



<sub>[⇧ back to top](#contents)</sub>


## Future plans

1. <a href="https://github.com/Daniel54088/nine-web-service/issues/4"  alt="docker">Add Docker in the app</a> 
2. <a href="https://github.com/Daniel54088/nine-web-service/issues/6"  alt="sentry">Add Sentry in the app</a>
3. Add redux testing code.


