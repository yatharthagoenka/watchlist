export const fetchData = async () => {
    try{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1");
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }
}