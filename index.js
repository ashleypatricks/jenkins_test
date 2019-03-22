const promise1 = (name) => {
    return new Promise((resolve, reject) => {
        if(!name){
            reject("Name parameter must not be empty");
        }else{
            resolve(`Hi ${name}!`);
        }
    });
};

promise1("Ashley")
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});