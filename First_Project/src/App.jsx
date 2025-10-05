import "./App.css";

import Header from "./components/header/Header.jsx";

import Footer from "./components/footer/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Container from "./components/container/Container.jsx";
import localContext from "./components/container/localcontext.js";
import { CartProvider } from "./components/cart-details/CartDetail.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function login() {
    setIsLogin(true);
  }

  function logout() {
    setIsLogin(false);
  }

  return (
    <>
      <CartProvider>
        <localContext.Provider value={[isLogin, login, logout]}>
          {isLogin ? <Header /> : null}
          <Container />
          {isLogin ? <Footer /> : null}
        </localContext.Provider>
      </CartProvider>
    </>
  );
}

export default App;
// {/* <UseRefH />
//       <br />
//       <UseRefDom /> */}
//       {/* <localContext.Provider value={[isLogin,login,logout]}>

//       </localContext.Provider> */}

//       {/* props drilling login and logout
//       {isLogin ? <Header setIslogin={setIsLogin} /> : null}

//       <Container islogin={isLogin} setIslogin={setIsLogin} /> */}

//       {/* <Routes>
//         <Route path={"/"} element={<Section />} />
//         <Route path={"/products"} element={<Products />} />
//         <Route path={"/profile"} element={<Profile />} />
//         <Route path={"/contactus"} element={<ContactUs />} />
//         <Route path={"/sign-in"} element={<SignIn />} />
//         <Route path={"/sign-up"} element={<SignUp />} />
//         <Route path={"/product-details/:id"} element={<ProductDetails />} />
//         <Route path={"/add-to-cart"} element={<Cart/>}/>
//       </Routes> */}

//       {/* <Footer /> */}
