
import axios from 'axios'


 class AuthenticationService {


    login = async (login) => {
        console.log(login)
        try {
            const response = await axios.post("http://localhost:8082/api/auth/storeLogin", login,{headers:{'Content-Type':'application/json'}} );
            
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
                console.log(localStorage.getItem('user'));
            }
            return response.data
        } catch (err) {
            console.log(err)
            throw err
        }

    }

}
export default new AuthenticationService();