import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  position: relative;
  top: 9rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  > div {
    max-width: 800px;
    text-align: center;
  }
`

const About = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to my Route Planner</h1>
        <h3>You may be wondering: why use this site when I can just as well fire up google maps and do my own planning?</h3>
        <p>Well, you are right to ask this question: googel maps is a wonderfull tool but if you have landed on this
          page you have a hunch that it&apos;s not what you need and you are right again</p>
        <p>This web app comes to your aid if you need to optimize the list of addresses. I built this tool with the small delivery driver
          in mind. Perhaps you received a job to do 30 or 300 addresses. You need to do this job as efficiently as possible and here is were I come to
          your aid. Just feed your list of addresses to this app, tap OPTIMIZE button and you are ready to go. After having the list in order you can
          navigate to each location using waze or google maps.</p>
        <p>I&apos;m glad to have you here! Happy deliveries!</p>
      </div>
    </Layout>
  )
}

export default About
