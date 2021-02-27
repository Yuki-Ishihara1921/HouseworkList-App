import axios from 'axios'
import { push } from 'connected-react-router'
import { signInAction, signOutAction } from './actions'
import { showLoginLoadingAction, hideLoadingAction } from '../loading/actions'
import { setCookie, removeCookie, getCookieObject } from '../../functions/cookies'
import { isValidEmailFormat } from '../../functions/validates'

export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("未入力の項目があります。")
            return false
        } 
        if (password !== confirmPassword) {
            alert("パスワードが一致しておりません。")
            return false
        } 
        if (!isValidEmailFormat(email)) {
            alert("メールアドレスの形式が正しくありません。再入力して下さい。")
            return false
        } 
        if (password.length < 8 ) {
            alert("パスワードは8文字以上で入力して下さい。")
            return false
        }
        else {
            const res = window.confirm("こちらの内容でアカウントを登録しますか？")
            if (!res) {
                return false
            } else {
                dispatch(showLoginLoadingAction())
                const signUpUser = {
                    name: username,
                    email: email,
                    password: password,
                    password_confirmation: confirmPassword
                }
                axios
                .post(`${process.env.REACT_APP_SERVER_URL}/api/users`, signUpUser)
                .then(response => {
                    const data = response.data
                    setCookie(data.username, data.usertoken)
                    dispatch(signInAction({
                        isSignedIn: true,
                        username: data.username,
                        usertoken: data.usertoken
                    }))
                    dispatch(hideLoadingAction())
                    dispatch(push('/'))
                })
                .catch(() => {
                    dispatch(hideLoadingAction())
                    alert("アカウントが登録されませんでした。再入力して下さい。")
                    return false
                })
            }
        }
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        dispatch(showLoginLoadingAction())
        if (email === "" || password === "") {
            dispatch(hideLoadingAction())
            alert("未入力の項目があります。")
            return false
        }
        if (!isValidEmailFormat(email)) {
            dispatch(hideLoadingAction())
            alert("メールアドレスの形式が正しくありません。再入力して下さい。")
            return false
        }
        const signInUser = {
            email: email,
            password: password
        }
        axios
        .post(`${process.env.REACT_APP_SERVER_URL}/api/sessions`, signInUser)
        .then(response => {
            const data = response.data
            dispatch(signInAction({
                isSignedIn: true,
                username: data.username,
                usertoken: data.usertoken
            }))
            setCookie(data.username, data.usertoken)
            dispatch(hideLoadingAction())
            dispatch(push('/'))
        })
        .catch(() => {
            dispatch(hideLoadingAction())
            alert("ユーザーが見つかりませんでした。")
            return false
        })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        const res = window.confirm("ログアウトしますか？")
        if (!res) {
            return false
        } else {
            removeCookie()
            dispatch(signOutAction())
            dispatch(push('/signin'))
        }
    }
}

export const listenAuthState = () => {
    return async (dispatch) => {
        const cookies = getCookieObject()
        if (cookies) {
            dispatch(signInAction({
                isSignedIn: true,
                username: cookies.username,
                usertoken: cookies.usertoken
            }))
        } else {
            dispatch(push('/signin'))
        }
    }
}