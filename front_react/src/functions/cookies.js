export const getCookieObject = () => {
    const cookies = document.cookie
    const cookieObj = {}
    if (cookies) {
        Array.prototype.forEach.call(cookies.trim().split(';'), (cookie) => {
            var array = [cookie][0].split('=').map((a) => {
                return a.trim()
            })
            var key = ~cookie.indexOf('=') ? unescape(array[0]) : ''
            var value = ~cookie.indexOf('=') ? unescape(array[1]) : unescape(array[0])
            if (!cookieObj.hasOwnProperty(key)) {
                cookieObj[key] = value
            } else {
                cookieObj[key].push(value)
            }
        })
        return cookieObj
    } else {
        return null
    }
}

export const setCookie = (username, usertoken) => {
    const exp = 60 * 60 * 24 * 31 * 3
    document.cookie = 'username=' + username + ';max-age=' + exp
    document.cookie = 'usertoken=' + usertoken + ';max-age=' + exp
}

export const removeCookie = () => {
    if (document.cookie) {
        const cookiesArray = document.cookie.split(';')
        for (var cookie of cookiesArray) {
            document.cookie = cookie + ';max-age=0'
        }
    } else {
        alert("ユーザーが見つかりません。再度ログインして下さい。")
    }
}