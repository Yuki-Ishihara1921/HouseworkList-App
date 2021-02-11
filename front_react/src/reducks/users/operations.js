import axios from 'axios'
import { push } from 'connected-react-router'
import { setCookie, removeCookie, getCookieObject } from '../../functions/cookies'
import { signInAction, signOutAction } from './actions'

export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("未入力の項目があります。")
            return false
        } else if (password !== confirmPassword) {
            alert("パスワードが一致しておりません。")
            return false
        } else {
            const res = window.confirm("こちらの内容でアカウントを登録しますか？")
            if (!res) {
                return false
            } else {
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
                    dispatch(push('/'))
                })
                .catch(() => {
                    alert("アカウントが登録されませんでした。通信環境をご確認下さい。")
                    return false
                })
            }
        }
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        if (email === "" || password === "") {
            alert("未入力の項目があります。")
            return false
        } else {
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
                dispatch(push('/'))
            })
            .catch(() => {
                alert("ログインできませんでした。入力内容または通信環境をご確認下さい。")
                return false
            })
        }
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