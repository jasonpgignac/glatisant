#Glatisant#
Questing App for use to encourage engagement with github repositories

To build: npm run build
To start: npm start
To run in dev mode use webpack-dev-server

##BACKGROUND##
This application was inspired by freeCodeCamp.org, a site that teaches students
to code by, eventually, having them contribute to projects to benefit non-profit
organizations that would normally not be able to afford software development
services. Its end goal is to inspire developers to think of their role as a
profession of service, and encourage engagement with open source projects.

The overriding metaphor of this application is that of the quests and feats of
the Knights of the Round Table. The application would gamify open source 
development by presenting issues as quests, and the developer as a Knight
Errant - fixing a particularly nasty bug would be analogous to slaying a dragon,
clearing a danger from the land, as it were. It would include a points system,
called 'Honor', that is a reminder of the good works they have accomplished in 
the past. Levels could be instituted as titles (page, squire, knight, baronet,
etc), and medals as honorifics, (Ser githubName the Brave, or Ser githubName,
Knight of the Red Garter, etc). Because we are intending to encourage new
developers as a primary goal, this would not include a leaderboard, but would
perhaps allow individual knights to display their titles, etc, in the app.

##CURRENT STATE##
At this time, the metaphor is little more than a design ethic, to give the look
of the application. The config.js file allows you to configure what repository
to point to (it defaults to freeCodeCamp). It will list issues on the main page,
let you paginate through the list, and click to see the details of specific
tickets.

##KNOWN ISSUES##
1) There is a compilation error visible when you run a build, but it seems to
have no negative effect.
2) There is a placeholder where a border graphic would be to the left of the 
issues list. A suitable graphic could not be found for free without spending a
great deal of time or money. As I do not own Photoshop, and did not wish to
spend money on stock art, it is as it is, right now. In a final version it would
tile vertically, but this was visually overpowering with the low quality image
we are placeholding with.
3) While some rudimentary security handling is built around the translation of
the markdown text from github issues to html for screen display, this should be
better tested.
4) Should be tested over a wider range of possible inputs than it currently is.
5) If the username is exceptionally long, there are several places that we could
get display bugs
6) Description text renders with visible formatting characters on the list. We
would need to decide how to handle this (rendering the md can make the page very
messy, excising the formatting characters can make it illegible)

##NEXT STEPS##
1) Auth
2) Interacting with issues (assign, close, link to PR, etc)
3) Displaying who issues are assigned to
4) Links to the original github page
5) A system to request or provide help to/from other 'knights' who are struggling
with a quest. 
6) Sharpening the drop caps and better kerning between them and the main body in
the detail screen.

Note: This app was originally created as homework for a job application.