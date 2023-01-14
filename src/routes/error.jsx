import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className='errorPage'>
            <h1>Lo sentimos</h1>
            <p>un error ha ocurrido</p>
            <p>{ error.statusText || error.message }</p>
        </div>
    )
}