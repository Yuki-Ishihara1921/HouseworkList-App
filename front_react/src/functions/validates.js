export const isValidEmailFormat = (email) => {
    const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
    return regex.test(email)
}

export const validPasswordMessage = (password) => {
    if (password.length >= 1 && password.length < 8) {
        return "パスワードは8文字以上です。"
    } else {
        return ""
    }
}