import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';


// All Screens
const Home = lazy(()=> import('./screens/HomeScreen'));
const Home1 = lazy(() => import('./screens/HomeScreen1'));
const Login = lazy(() => import('./screens/LoginScreen'));
const Register = lazy(() => import('./screens/RegisterScreen'));
const Package = lazy(() => import('./screens/PackageScreen'));
const AllPackages = lazy(() => import('./screens/AllPackagesScreen'));
const Profile = lazy(() => import('./screens/UserProfileScreen'));
const AdminPanel = lazy(() => import('./screens/AdminPanelScreen'));
const EditUser = lazy(() => import('./screens/EditUserScreen'));
const EditEmployee = lazy(() => import('./screens/EditEmployeeScreen'));
const AddEmployees = lazy(() => import('./screens/AddEmployees'));
const AddPackages = lazy(() => import('./screens/AddPackageScreen'));
const UpdatePackages = lazy(() => import('./screens/UpdatePackageScreen'));
const TermsAndPolicy = lazy(() => import('./screens/TermAndServicesScreen'));
const UpdateTermsAndPolicy = lazy(() => import('./screens/UpdateTerm&Services'));
const AboutUs = lazy(() => import('./screens/AboutUsScreen'));
const UpdateAboutUs = lazy(() => import('./screens/UpdateAboutUsScreen'));
const ContactUs = lazy(() => import('./screens/ContactUsScreen'));
const UpdateContactUs = lazy(() => import('./screens/UpdateContactUsScreen'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const SuspenseLoading = () => {
    return (
      <>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
        {/*
          <Redirect exact from="/" to="/Overview" />
          <Route path={['/Overview']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/Overview" component={Overview} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>
        */}
          <Redirect exact from="/" to="/Home" />
          <Route path={['/Home']}>
            <div>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/Home" component={Home1} />
                </motion.div>
              </Switch>
            </div>
          </Route>

          


          <Route
            path={[
              '/search',
              '/page',
              '/Login',
              '/Register',
              '/Package',
              '/AllPackages',
              '/Profile',
              '/AdminPanel',
              '/EditUser',
              '/EditEmployee',
              '/AddEmployees',
              '/AddPackages',
              '/EditPackage',
              '/Terms&Conditions',
              '/PrivacyPolicy',
              '/UpdateTerms&Conditions',
              '/UpdatePrivacyPolicy',
              '/AboutUs',
              '/UpdateAboutUs',
              '/Contactus',
              '/UpdateContactus'
            ]}>
            <div>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/search/:keyword" component={Home1} />
                  <Route path="/search/:keyword/page/:pageNumber" component={Home1} />
                  <Route path="/page/:pageNumber" component={Home1} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Register" component={Register} />
                  <Route path="/Package/:id" component={Package} />
                  <Route path="/AllPackages" component={AllPackages} />
                  <Route path="/Profile" component={Profile} />
                  <Route path="/AdminPanel" component={AdminPanel} />
                  <Route path="/EditUser/:id" component={EditUser} />
                  <Route path="/EditEmployee/:id" component={EditEmployee} />
                  <Route path="/AddEmployees" component={AddEmployees} />
                  <Route path="/AddPackages" component={AddPackages} />
                  <Route path="/EditPackage/:id" component={UpdatePackages} />
                  <Route path="/Terms&Conditions" component={TermsAndPolicy} />
                  <Route path="/PrivacyPolicy" component={TermsAndPolicy} />
                  <Route path="/UpdateTerms&Conditions" component={UpdateTermsAndPolicy} />
                  <Route path="/UpdatePrivacyPolicy" component={UpdateTermsAndPolicy} />
                  <Route path="/AboutUs" component={AboutUs} />
                  <Route path="/UpdateAboutUs" component={UpdateAboutUs} />
                  <Route path="/Contactus" component={ContactUs} />
                  <Route path="/UpdateContactus" component={UpdateContactUs} />
                 
                </motion.div>
              </Switch>
            </div>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
