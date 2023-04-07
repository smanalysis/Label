function check_mobile(str) {
    let regMobile = /^1\d{10}$/;
    return regMobile.test(str);
}

function check_password(str) {
    console.log(str);
    if (str.length < 6) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        console.log(c);
        if (!(c >= 33 && c <= 126)) {
            return false;
        }
    }
    return true;
}

function check_email(str){
    let regEmail = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;
    return regEmail.test(str);
}