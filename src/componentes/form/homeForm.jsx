import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const HomeForm = ({onSubmit}) => {
  const user = useContext(UserContext)
  console.log("user", user);
  return(
    <form onSubmit={onSubmit}>
      <div>
        <span>{user.name}</span>
        <br /> 
        <span>{user.lastname}</span>
      </div>
      <label htmlFor="materia-favorita">
        Selecciona tu materia favorita (Es obligatorio)
      </label>
      <select name="materia" id="materia-favorita">
        <option value="frontend">frontend II</option>
        <option value="backend">backend I </option>
        <option value="infra">Infra III</option>
      </select>
    </form>
  )
}