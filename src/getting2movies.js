export function getting2movies(list1) {
    let num1 = Math.floor(Math.random() * (19)) + 0;
    let num2 = Math.floor(Math.random() * (19)) + 0;
    let image1, image2, name1, name2;
    if (num1 == num2) {
        num1=Math.floor(Math.random() * (19)) + 0;
        num2=Math.floor(Math.random() * (19)) + 0;
    }
    if (list1.length > 0) {
        
            image1 = 'https://image.tmdb.org/t/p/original' + list1[num1].backdrop_path;
            image2 = 'https://image.tmdb.org/t/p/original' + list1[num2].backdrop_path;
            name1 = list1[num1].title;
            name2 = list1[num2].title;
        
    }
    return [name1, name2, image1, image2]
}