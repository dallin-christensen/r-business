import React, { Component } from 'react'
import { getBusinessPosts, getBusinessBefore, getBusinessAfter } from '../../utils/api';
import Posts from '../Posts/Posts'
import upCircle from './upCircle.png'
import downCircle from './downCircle.png'
import ReactLoading from 'react-loading'
import './Feed.css'

// Feed is the main component of the application
class Feed extends Component {
  state = {
    after: '',
    before: '',
    posts: [],
  }
  async componentDidMount () {
    //fetching the data from reddit
    const { data } = await getBusinessPosts()
      .catch(console.warn)
    
    // wait 1 second before updating state
    // this is purely so you can see my loading component 😄
    setTimeout(() => {
      this.newDataToState(data)
    }, 1000)
  }

  getBefore = async () => {
    const { before } = this.state

    // fetching the before data
    const { data } = await getBusinessBefore(before)
      .catch(console.warn)

    // if there is no before data, dont update state and send alert
    if (data.children.length) this.newDataToState(data)
    else alert('no higher posts 😶')
  }
  getAfter = async () => {
    const { after } = this.state
    
    const { data } = await getBusinessAfter(after)
    this.newDataToState(data)
  }
  newDataToState = ({ after, before, children: posts }) => {
    // this was duplicated code in the methods above,
    // so I seperated and made it it's own little library method
    this.setState({
      after,
      before,
      posts,
    })
  }
  render() {
    const { posts } = this.state
    return (
      <div className='feed-container'>
        <div className='btn-container' onClick={this.getBefore}>
          <img src={upCircle} alt='upCircle' />
        </div>
        {
          posts.length // if no posts, show loading
            ? <Posts posts={posts} />
            : (
              <div className='loading-container'>
                <ReactLoading type='bars' color='#0BB5E9' width={400} />
              </div>
            )
        }
        <div className='btn-container' onClick={this.getAfter}>
          <img src={downCircle} alt='downCircle' />
        </div>
      </div>
    )
  }
}

export default Feed
