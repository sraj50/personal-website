import React from 'react'
import { graphql } from 'gatsby'

const Template = ({ data }) => {
    const title = data.markdownRemark.frontmatter.title
    const date = data.markdownRemark.frontmatter.date
    const html = data.markdownRemark.html

    return(
        <div>
            <h1>{title}</h1>
            <div className="blogpost" dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}

export const postQuery = graphql`
    query {
        markdownRemark()
    }
`