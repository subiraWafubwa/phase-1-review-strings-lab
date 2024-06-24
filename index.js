let currentUser = 'Subira';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
let userInitial = currentUser.slice(0,1);
let shortMessage = welcomeMessage.slice(0,7);
let shortGreeting  = `${shortMessage}, ${userInitial}!`;