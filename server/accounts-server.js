Accounts.onCreateUser((options, user) => {
    user.roles = ['unauthorized']
    return user
});
  