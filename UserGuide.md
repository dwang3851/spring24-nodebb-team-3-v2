#### How to use and test new features

## Teacher/Student Indication

- This new feature will automatically be applied to any posts or replies on the website. Depending on the account type of a user (student/instructor), there will be an indication written next to their username,
as well as a colored text box surrounding their posts/replies. 
- To user test this new feature, try creating new accounts of the student/instructor type, and making any post or reply
- Additional automated tests, as well as improvements to existing tests can be found inside the test/user.js file
- The two edited functions getUserData and getUserFields are tested in these tests
- Two tests are added for getUserFields, to ensure the accounttype and isStudent fields are properly saved whenever a user is created, which was previously untested. 
- Additional type checks are added for getUserData