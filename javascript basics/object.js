function Obj(obs) {
    console.log(obj);

    let keys = Object.keys(obj);
    console.log(keys);

    let values = Object.values(obj);
    console.log(values);

    let entries = Object.entries(obj);
    console.log(entries);

    let hasProp = obj.hasOwnProperty("key1");
    console.log(hasProp);

    let newObj = Object.assign({}, obj, {
        newProperty:"newValue",
    })
    console.log(newObj);
}


const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}

Obj(obj);