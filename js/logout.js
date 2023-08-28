function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
  
}