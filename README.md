[![Build Status](https://travis-ci.org/shubhroshekhar/magic-path.svg?branch=master&status=created)](https://travis-ci.org/github/shubhroshekhar/magic-path)

# what is this ?
Get and Set Values from JS Objects magically.

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