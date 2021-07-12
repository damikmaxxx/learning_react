import * as axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":"ad009c48-4ac4-4b27-a112-44e98b30c51f"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getFollow(id,status){
        if (status == "follow"){
            return instance.post(`follow/${id}`)          
        }
        if(status == "unfollow"){
            return instance.delete(`follow/${id}`) 
        }
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
    },
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status})
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}