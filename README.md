# Vote badge

Embed voting badges in your markdown files.
What do you think about this project ?

[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-usefull/?label=Usefull)](https://vote-badge.cyclic.app/vote/vote-badge-readme-usefull)
[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-blank/?label=I%20don%27t%20care&color=yellow)](https://vote-badge.cyclic.app/vote/vote-badge-readme-blank)
[![Custom badge](https://vote-badge.cyclic.app/count/vote-badge-readme-useless/?label=Useless&color=red)](https://vote-badge.cyclic.app/vote/vote-badge-readme-useless)

## Embed your own voting badges

Create your badge with our tool (_soon_) or follow the instructions bellow:

1. Find a unique key which will be used to identify your vote. eg: `my-unique-key`

2. Copy the following code
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key?)](https://vote-badge.cyclic.app/vote/my-unique-key)
```
or use the [shields.io endpoint API](https://shields.io/endpoint)
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-unique-key)](https://vote-badge.cyclic.app/vote/my-unique-key)
```
3. Paste it in your README to get the following badge
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key?)](https://vote-badge.cyclic.app/vote/my-unique-key)

4. Click on the badge to vote

_Refreshing the page won't be enought to see the changes. GitHub stores the images in the cache and will refresh it few minutes later. Wait five minutes before hard-refreshing the page._

# View counter

You can also use the badge to count the number of views on your project, your profile or an issue.

![Custom badge](https://vote-badge.cyclic.app/view/vote-badge-readme-view/?label=Views&color=blue)

## Embed your own view counter

1. Find a unique key which will be used to identify your view counter. eg: `my-other-unique-key`

2. Copy the following code
```
![Custom badge](https://vote-badge.cyclic.app/view/my-other-unique-key)
```

3. Paste it in your README to get the following badge
![Custom badge](https://vote-badge.cyclic.app/view/my-other-unique-key)

4. It will be incremented everytime the page is loaded

_Refreshing the page won't be enought to see the changes. GitHub stores the images in the cache and will refresh it few minutes later. Wait five minutes before hard-refreshing the page._

# Customize the badges

- Add the parameter `label` to change the text
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome)](https://vote-badge.cyclic.app/vote/my-unique-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome)](https://vote-badge.cyclic.app/vote/my-unique-key)

- Add the parameter `color` to change the color
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome&color=blue)](https://vote-badge.cyclic.app/vote/my-unique-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome&color=blue)](https://vote-badge.cyclic.app/vote/my-unique-key)

- Add the parameter `logo` to add a logo
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-unique-key)
```
[![Custom badge](https://vote-badge.cyclic.app/count/my-unique-key/?label=Awesome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-unique-key)

- Our API is 100% compatible with Shields.io. Check their [documentation](https://shields.io) to see all the parameters you can use
