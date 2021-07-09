export const FetchGoods = async () => {
    return await fetch('http://localhost:4000/goods').then(async(res) => {
        const response = await res.json();
        return response
    }).catch(err => {
        console.log('err', err)
        return err;
    })
}