
## protect router and redirect
/helper/routes

IsUserRedirect


ProtectedRoute


## maintain user auth info
/hooks/
useAuthListener
```
  // check user in localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  
```