import React from 'react';
import Layout from '../components/Layout/Layout'


const blogs = (props) => {

    return (
        <Layout title = {props.pageContext.title}>
           <div dangerouslySetInnerHTML={{__html: props.pageContext.html}} />
        </Layout>
    )
}
export default blogs