# Vote badge

[![Custom badge](https://img.shields.io/endpoint?label=Usefull&url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fvote-badge-readme-yes)](https://vote-badge.cyclic.app/vote/vote-badge-readme-yes)
[![Custom badge](https://img.shields.io/endpoint?label=Not%20usefull&url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fvote-badge-readme-no&color=red)](https://vote-badge.cyclic.app/vote/vote-badge-readme-no)

Embed voting badges in your markdown files.

## Embed your own badges

Create your badge with our tool (_soon_) or follow the instructions bellow:

1. Find a unique key which will be used to identify your vote. eg: `my-usernamer_my-key`
2. Copy the following code in your README
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
3. Paste it in your README
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key)](https://vote-badge.cyclic.app/vote/my-username_my-key)

## Custom your badge

The badges are fully compatible with the [shields.io endpoint API](https://shields.io/endpoint).

- Add the parameter `label` to change the text
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Add the parameter `color` to change the color
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome&color=blue)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome&color=blue)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Add the parameter `logo` to add a logo
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-username_my-key)
```
[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fvote-badge.cyclic.app%2Fcount%2Fmy-username_my-key&label=Awsome&color=blue&logo=github)](https://vote-badge.cyclic.app/vote/my-username_my-key)

- Check the [full shield.io documentation](https://shields.io/endpoint) for other customizations
