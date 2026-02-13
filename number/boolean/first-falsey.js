let isLogin = "yes"; // User is not logged in
let isAdmin = "yesAdmin"; // User is not an admin
let hasAccess = false; // User does not have access

// Check if the user can access the admin panel
hasAccess = isLogin && isAdmin; // This will be "yesAdmin" which is truthy


// OR is first truth
let isGuest = false;
let isMember = true;
let isAllowed = isGuest || isMember; // This will be "true" because isMember is truthy