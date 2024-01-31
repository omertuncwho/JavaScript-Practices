var user = [];
function addUser(id, name) {
    if (typeof id === "number" && name.length > 2) {

        user.push({
            id: id,
            name: name
        });
        console.log(`id: ${id} name: ${name} user defined.`);
    }


    else {
        console.log(`User information is wrong!`);

    }
}
addUser(0, "A");
addUser(`0`, `ABC`);
addUser(0, `ABS`);
