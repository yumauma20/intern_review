const emailValidation = email => {
    if (!email) return "メールアドレスを入力してください";

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email))
        return "正しい形式でメールアドレスを入力してください";

    return "";
};

const passwordValidation = password => {
    if (!password) return "パスワードを入力してください";
    if (password.length < 8) return "パスワードは8文字以上で入力してください";

    return "";
};

const confirmPasswordValidation = confirmPassword => {
    const password = document.getElementById("password").value;
    console.log(confirmPassword);
    console.log(password);
    if (confirmPassword !== password) {
        return "パスワードが一致していません";
    }
    return "";
};

const countValidation = (text, maxLength) => {
    if (!text) return "入力してください";
    if (text.length >= maxLength)
        return maxLength + "文字以内で入力してください";

    return "";
};

class Validation {
    formValidate(type, value, maxLength) {
        // eslint-disable-next-line default-case

        switch (type) {
            case "email":
                return emailValidation(value);
            case "password":
                return passwordValidation(value);
            case "confirmPassword":
                return confirmPasswordValidation(value);
            case "companyName":
            case "jobContent":
            case "Impressions":
                return countValidation(value, maxLength);
            default:
                break;
        }
    }
}

export default Validation;
