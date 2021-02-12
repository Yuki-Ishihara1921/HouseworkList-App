const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
export const validateEmail = (email) => {
    if (!regex.test(email)) {
        return "正しい書式で入力して下さい。"
    } else {
        return ""
    }
}

export const isValidEmailFormat = (email) => {
    return regex.test(email)
}

export const validatePassword = (password) => {
    if (password.length >= 1 && password.length < 8) {
        return "パスワードは8文字以上です。"
    } else {
        return ""
    }
}