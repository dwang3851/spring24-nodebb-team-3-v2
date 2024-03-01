#### How to use and test new features

## Teacher/Student Indication

- This new feature will automatically be applied to any posts or replies on the website. Depending on the account type of a user (student/instructor), there will be an indication written next to their username, as well as a colored text box surrounding their posts/replies. 
- To user test this new feature, try creating new accounts of the student/instructor type, and making any post or reply. 
- Additional automated tests, as well as improvements to existing tests can be found inside the test/user.js file. 
- The two edited functions getUserData and getUserFields are tested in these tests. 
- Two tests are added for getUserFields, to ensure the accounttype and isStudent fields are properly saved whenever a user is created, which was previously untested. 
- Additional type checks are added for getUserData. 
- These changes are sufficient for ensuring the necessary data is passed to the post.tpl file. 

## Some Votes Count More

- This new feature will be automatically applied to the upvote system on the website. There should be more
  credibility with upvotes on replies that are given by the person who wrote the post themselves. Thus, reputation
  is increased more as a result of getting an upvote from the original poster.
- To user test, try upvoting using the original poster and seeing if the person who made the reply has a larger
  increase in reputation. Also, upvote using an unrelated account and see that the reputation increases the
  normal amount. Do the same with a reply to a reply and other variants for more exhaustiveness.
- I added an automated test to see that reputation does increase more in the aforementioned scenario. This can
  be found in the test/posts.js file. I updated existing tests to reflect new changes to reputation in the same file.
- The function upvote and vote are tested.
- This functionality was previously not tested, and I orchestrated a post and reply in the test.
- Additional type checks are added for the vote function.
