
//----------------------------------------------------------------------------------------------------------


// fetch('myfile.txt').then(response=>{

//     if(!response.ok){
//         throw new Error('Network is not responding')
//     }
//     return response.text();

// })
// .then(data=>console.log(data)).catch(error=>console.log(error));//delete the file fetched and u will see error
;// if response show that there is no file or some error then we have to catch error also


fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{

    if(!response.ok){
        throw new Error('Network is not responding')
    }
    return response.json();

})
.then(data=>data.forEach(element=>{console.log(element.title)}))
.catch(error=>console.error(error));


