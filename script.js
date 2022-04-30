let isSubscribed = true;

function addFamilyMember() {
  alert("Please contact us to add a new member in your Family Plan!");
}

function logout() {
  alert(
    "You have been logged out of the system. Please close out of all tabs."
  );
}

function toggleMembershipSubscription() {
  isSubscribed = !isSubscribed;
  document.getElementById("membershipSubscription").innerHTML = isSubscribed;
}
