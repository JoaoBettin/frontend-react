import Header from "@/components/layout/Header"
import Button from "@/components/utils/Button"

const user = {name: "Renan", email: "email@gmail.com", photo: "urldafoto"}

const Contato = () => {
  return (
    <>
        <Header />
        <h1>Contato</h1>
        <Button titulo="Login"/> 
        <Button titulo="Cadastre-se"/>
        <Button titulo="Cancelar"/>
    </>
  )
}

export default Contato