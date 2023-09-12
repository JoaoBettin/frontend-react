import Header from"@/components/layout/Header"
import './Membros.css'

const getMembers = async () => {
    const response = await fetch('http://localhost:3300/user/list')
    return await response.json()
}

const Membros = async () =>{
    const users = await getMembers()
    const nome = "João"

    return (
        <>
        <Header/>
        <h1>Membros</h1>
        <p>Nome: {nome}</p>
        <h2>Emails:</h2>
        {
            users.map((user) => {
                return (
                    <div key={user.id} className="card-user" width>
                        <img src="https://pbs.twimg.com/media/F32h5dkWQAANzry?format=jpg&name=900x900" alt={user.name} width="70px" height="70px"></img>
                    <div>
                        <p>{user.name}</p>
                        <h4>{user.email}</h4>
                    </div>
                    </div>
                ) 
            }
            )
        }
        </>
    )
}

export default Membros