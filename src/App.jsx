import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import AboutSection from './components/AboutSection.jsx'
function App() {


  return (
    <div  className="App">
      <Header />
      <Profile />
      <AboutSection />
    </div>
  )
}

export default App
