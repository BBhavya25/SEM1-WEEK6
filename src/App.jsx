import React from 'react'
import Message from './components/message'
import ExpressionComponent from './components/ExpressionComponent'
import StyledComponent from './components/StyledComponent'
import ImageComponent from './components/ImageComponent'
import ConditionalRendering from './components/ConditionalRendering'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Button from './components/Button'
import UserCard from './components/UserCard'
import FunctionalGreeting from './components/FunctionalGreeting'
import ClassGreeting from './components/ClassGreeting'
import ClassGreet from './components/ClassGreet'
import FunctionalGreet from './components/FunctionalGreet'
import Comparison from './components/Comparison'
import ProductCard from './components/ProductCard'
import BlogPost from './components/BlogPost'
import Counter from './components/Counter'
import StyledButton from './components/StyledButton'
import Profile from './components/Profile'
import UserList from './components/UserList'
import ParentComponent from './components/ParentComponent'
import Notification from './components/Notification'
import UserCard1 from './components/UserCard1'
import Card from './components/Card'
const App = () => {
  return (
    <div>
     <h1>Hello, World!</h1>
     <Message />
     <ExpressionComponent/>
     <StyledComponent/>
     <ImageComponent/>
     <ConditionalRendering/>
     <Header/>
     <Sidebar />
     <Footer />
     <Button/>
     <UserCard/>
     <FunctionalGreeting/>
     <ClassGreeting/>
     <ClassGreet/>
     <FunctionalGreet/>
     <Comparison/>
     <ProductCard/>
     <BlogPost 
        title="Goldenrod Box" 
        content=" This is a beautifully styled blog post with a goldenrod theme." 
        author="John Doe" 
      />
      <BlogPost 
        title="React Basics" 
        content="Learn the basics of React including components and props." 
        author="Alice" 
      />
      <BlogPost 
        title="Advanced React" 
        content="Dive into React hooks, context, and performance optimization." 
        author="Bob" 
      />
      <BlogPost 
        title="Styling in React" 
        content="Explore different ways to style React components effectively." 
        author="Charlie" 
      />
      <Counter/>

      <div style={{ textAlign: 'center', margin: '20px' }}>
      <StyledButton className="primary" onClick={() => alert('Primary Button Clicked')}>
        Primary Button
      </StyledButton>
      <StyledButton className="secondary" onClick={() => alert('Secondary Button Clicked')}>
        Secondary Button
      </StyledButton>
    </div>
    <div>
      <Profile 
        name="Alice Johnson" 
        location="MPL, AP" 
        profilePicture="https://via.placeholder.com/100" 
      />
      <Profile 
        name="Bob Smith" 
        location="ANG, AP" 
        profilePicture="https://via.placeholder.com/100" 
      />
    </div>
    <UserList/>
    <ParentComponent message="Hello from App!" />
    <div>
      <Notification type="success" message="Operation was successful!" />
      <Notification type="error" message="There was an error." />
      <Notification type="info" message="This is some information." />
    </div>
    <UserCard1/>
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <button>Click Me</button>
      </Card>
    </div>

    </div>
    
  )
}

export default App