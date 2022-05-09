TODO

* [ ] Use keycloak for authentication and authorization


As admin:
* [ ] Create parking lot representation with interactive spot indicators
* [ ] Manage multiple parking lots
* [ ] Assign places to users for given time

As user:
* [ ] See my parking spot
* [ ] See my parking schedule
* [ ] Cede and access to given parking spot to another user

General idea:
- Entering the web app for the first time I see a login screen, there is no content without login.
- I log as an admin:
  - if there are parking spots they are listed as a tiles with basic info:
    - how many places are free now
    - longest registered stay
  - if there are no parking spots I get a button to start creating one.
