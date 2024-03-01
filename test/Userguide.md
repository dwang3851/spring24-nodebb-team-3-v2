#### How to use and test new features

## Some Votes Count More

- This new feature will be automatically applied to the upvote system on the website. There should be more
  credibility with upvotes on replies that are given by the person who wrote the post themselves. Thus, reputation
  is increased more as a result of getting an upvote from the original poster.
- To user test, try upvoting using the original poster and seeing if the person who made the reply has a larger
  increase in reputation. Also, upvote using an unrelated account and see that the reputation increases the
  normal amount. Do the same with a reply to a reply and other variants for more exhaustiveness.
- I added an automated test to see that reputation does increase more in the aforementioned scenario. This can
  be found in the test/posts.js file.
- The function upvote and vote are tested.
- This functionality was previously not tested, and I orchestrated a post and reply in the test.
- Additional type checks are added for the vote function.
