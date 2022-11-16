# Vote badge

Embed voting badges in your markdown files.
What do you think about this project ?

[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-usefull?label=Usefull)](https://vote-badge.cyclic.app/vote/vote-badge-readme-yes)
[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-blank?label=I%20don%27t%20care&color=yellow)](https://vote-badge.cyclic.app/vote/vote-badge-readme-no)
[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-useless?label=Useless&color=red)](https://vote-badge.cyclic.app/vote/vote-badge-readme-no)

## Embed your own badges

Create your badge with our tool (_soon_) or follow the instructions bellow:

1. Find a unique key which will be used to identify your vote. eg: `my-usernamer_my-key`
2. Copy the following code in your README
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
or use the [shields.io endpoint API](https://shields.io/endpoint)
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
3. Paste it in your README to get the following badge
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key)](https://vote-badge.cyclic.app/vote/my-username_my-key)

4. Click on the badge to vote

5. Force refresh the page to view the changes (Your browser cache can be a bit tricky...)

## Custom badge

- Add the parameter `label` to change the text
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Add the parameter `color` to change the color
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome&color=blue)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome&color=blue)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Add the parameter `logo` to add a logo
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-username_my-key?label=Awsome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Check the [full shield.io documentation](https://shields.io) for more customizations
