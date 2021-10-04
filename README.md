[![Build Status](https://travis-ci.org/shubhroshekhar/magic-path.svg?branch=master&status=created)](https://travis-ci.org/github/shubhroshekhar/magic-path)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<p align="center">

  <h1 align="center">magic-path</h1>

  <p align="center">
    🪄 Get and Set Values from JS Objects magically 🐇
    <!-- <br /> -->
    <!-- <a href="https://github.com/shubhroshekhar/pm2-telegram-notification"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <!-- <a href="https://github.com/shubhroshekhar/pm2-telegram-notification">View Demo</a>
    · -->
    <a href="https://github.com/shubhroshekhar/magic-path/issues">Report Bug</a>
    ·
    <a href="https://github.com/shubhroshekhar/magic-path/issues">Request Feature</a>
  </p>
</p>
# Installation
`npm i magic-path`

# How to Use

#### Get value😎

```
... 
import { get } from 'magic-path'; // import
...
.
...
const yourDataObject = { 
    name: "sherlock holmes", 
    address: { 
    plotNo: "221B", 
    street: "baker street"
    } 
}
get(yourDataObject,"name"); // sherlock holmes
get(yourDataObject,"address"); // ---address Object
get(yourDataObject,"address.plotNo"); // 221B

const yourArray = [{name: "SHERLOCK"},{name: "WATSON"}, {name: "moriarty"}];
get(yourArray,["name"]); // ["SHERLOCK", "WATSON","moriarty"]
...
```

#### Set value😎

```
... 
import { set } from 'magic-path'; // import
...
.
...
const yourDataObject = { 
    name: "sherlock holmes", 
    address: { 
    plotNo: "221B", 
    street: "baker street"
    } 
}
const newData = set("family.brother.name",'mycroft',yourDataObject);
{ 
    name: "sherlock holmes",
    family: {
        brother: {
            name: mycroft;
        }
    }
    address: { 
        plotNo: "221B", 
        street: "baker street"
    } 
}
...
```


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/shubhroshekhar/magic-path.svg?style=flat-square
[contributors-url]: https://github.com/shubhroshekhar/magic-path/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shubhroshekhar/magic-path.svg?style=flat-square
[forks-url]: https://github.com/shubhroshekhar/magic-path/network/members
[stars-shield]: https://img.shields.io/github/stars/shubhroshekhar/magic-path.svg?style=flat-square
[stars-url]: https://github.com/shubhroshekhar/magic-path/stargazers
[issues-shield]: https://img.shields.io/github/issues/shubhroshekhar/magic-path.svg?style=flat-square
[issues-url]: https://github.com/shubhroshekhar/magic-path/issues
[license-shield]: https://img.shields.io/github/license/shubhroshekhar/magic-path.svg?style=flat-square
[license-url]: https://github.com/shubhroshekhar/magic-path/blob/master/LICENSE.txt
