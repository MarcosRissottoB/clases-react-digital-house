import { HomeForm } from '../../componentes/form/homeForm'
// import { TitleContext } from '../../context/userContext'

export const Home = () => {
  const onSubmit = () => {
    console.log('Home onSubmit')
  }
  // const title = useContext(TitleContext)
  // const user = useContext(UserContext)
  return (
    // <TitleContext.Consumer>
    //   {(props) => {
    //     return<h1>{props.title}</h1>
    //   }}
    // </TitleContext.Consumer>
       <div style={{background: 'grey'}}>
         <h1> Listado de hoteles</h1>
         <HomeForm onSubmit={onSubmit}/>
       </div>
  )
}
