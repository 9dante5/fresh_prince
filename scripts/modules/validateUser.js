const validate = (user, data) => {

    const emailList = [];

    data.forEach(element => {
        emailList.push(element.email)
    });

    const posicionCorreo = emailList.indexOf(user.toLowerCase());
    return posicionCorreo;
}

export default validate;