const person = {
    name: 'Brad',
    sayHelloRegular: function () {
        // console.log('Regular: ', this.name);   
        console.log(this);
    },
    sayHelloArrow: () => console.log(this),// this this not work
}

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();