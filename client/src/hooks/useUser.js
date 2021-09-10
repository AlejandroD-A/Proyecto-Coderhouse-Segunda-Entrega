import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../store/actions'
import { login as loginService} from '../services/auth'


export default function useUser() {
    const [ state, setState ] = useState({
        loading: false,
        error: false
      })
      
    const dispatch = useDispatch()

    const user = useSelector(state => state.User)

    const login = useCallback(
      async ({ email, password }) => {
          try{
            setState({ loading: true, error:false })
            const data = await loginService({ email,password })

            dispatch(Actions.User.save(data.user))
            setState({ loading: false, error:false })
          }catch(err){
            setState({ loading: false, error: 'Invalid Credentials' })
            console.error(err)
          }
      },
      []
    )
  
    const logout = () => {
      //dispatch Logout 
    }
  
    return {
      isLogged: Boolean(user.isLogged),
      login,
      logout,
      user,
      ...state,
    }
}