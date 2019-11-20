import React from 'react'
import axios from 'axios'

import withAnalytics from '../src/hocs/withAnalytics'
import Link from 'next/link'

const Detail = ({ user }) => (
    <div>
        <h1>{user.login}</h1>
        <Link href={user.html_url}>
            <a target="_blank">Acessar Perfil</a>
        </Link>
        <img src={user.avatar_url} width='200px'/>
    </div>
)

Detail.getInitialProps = async ({ query }) => {
    const response = await axios.get(`https://api.github.com/users/${query.user}`)

    return {user: response.data}
}

export default withAnalytics()(Detail)