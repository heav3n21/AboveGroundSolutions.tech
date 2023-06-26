import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styles from "./style";
import './index.css';
import JsaPage from "./pages/JsaPage";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  Login,
  CreateJSA
} from "./components";

const httpLink = createHttpLink({
  uri: '/graphql',
})


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }

})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


const App = () => (
  <ApolloProvider client={client}>
    <Router>

      <div className="bg-primary w-full text-lg overflow-hidden  shadow-xl" >
        <div className={`${styles.paddingX} ${styles.flexCenter} shadow-xl bg-primary shadow-black  `}>
          <div className={`${styles.boxWidth}  `}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path='homepage' element={<JsaPage/>}></Route>
          <Route path="CreateJSA" element={<CreateJSA/>}></Route>
        </Routes>


        <Footer />
      </div>
    </Router>
  </ApolloProvider>
);


export default App;
