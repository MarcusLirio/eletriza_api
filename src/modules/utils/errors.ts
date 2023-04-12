export const ResponseErrors = (res) => {
    switch(res.statusCode) {
        case 404: 
        return 'Não foi possivel encontrar'
        case 400:
        return res.message
        case 200 && 201 && 202:
        return res;
        default: 
        return res;
    }
}