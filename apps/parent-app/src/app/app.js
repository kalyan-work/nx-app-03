import NxWelcome from "./nx-welcome";

import { Route, Routes, Link } from "react-router-dom";
const BASE_URL = "http://localhost:9200";
function AccountsAppComponent() {
  return (
    <div class="iframe-wrapper">
      <iframe src={`${BASE_URL}/accounts`}></iframe>
    </div>
  );
}
function CustomersAppComponent() {
  return (
    <div class="iframe-wrapper">
      <iframe src={`${BASE_URL}/customers`}></iframe>
    </div>
  );
}
export function App() {
  return (
    <>
      {/* <NxWelcome title="parent-app"/> */}
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div className="wrapper-div">
        <div className="navigation-items" role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
            <li>
              <Link to="/page-2">Page 3</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </div>
        <div className="routes">
        <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{" "}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route path="/accounts" element={<CustomersAppComponent />} />
        <Route
          path="/customers"
          element={
            <div style={{ width: 500 }}>
              <iframe src={`${BASE_URL}/customers`}></iframe>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
        </div>
      </div>


    </>
  );
}
export default App;
