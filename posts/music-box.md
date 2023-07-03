---
title: 'MusicBox'
slug: 'music-box'
description: 'A mobile app to listen to your favorite songs'
coverImage: '/projects/MusicBox/coverImage.png'
technologies: [Flutter]
date: '2022-08-10T00:00:00.000Z'
repository: 'https://github.com/kingdennis-crypto/MusicBox'
draft: false
---

After making a few projects in React Native I decided to venture to the Flutter ecosystem. Once again just like with React Native I followed a few tutorials until I was confident enough to make my own application. And this is it. A app called Music Box. This app is more of a functional design for a music player app. There is a small homescreen with the top songs of the year and when you press it, it will be selected and show in the music player.

This app has also a playlist/favourites screen. In this page you can view your favourite songs and view them per playlist. This is accomplished by storing it temporary in the state.

## Music playing screen

![Music playing](/projects/MusicBox/nowPlaying.png)

When a user clicks on a music item it will open the music player shown above where the user can listen to his favourite song. On this screen there are a few UI options. There are the default buttons on a music player as the play, next, back shuffle and repeat button. These are all pressable and will trigger a function. The repeat button will even change icon depending on how much to repeat.

On this page you can also bookmark this song into your favourites tab. This will store the song in the local state for retrieval later on. When you swipe up from the bottom of the screen you can see a lyrics tab and a up next tab to better see which songs are up next.

## Playlist and Favourites

![Favourites select](/projects/MusicBox/favourites.png)

Every song that you bookmark will appear on this page. Here you can view all those songs. This is because all your bookmarked songs are stored in the local state

## Local State Management

I handled the local state storage by implementing GetX. Why did I choose GetX over bloC? Because GetX is more intuitive and easier to learn (in my opinion) and it also has other features such as easy page transfer.

So I started by making a Store Controller and extending it with a GetXController and then just adding the logics that I would need in the code

```dart
class StoreController extends GetXController {
  // Variables that are observable
  final isPlaying = false.obs

  // Functions that change the observable variables
  updateIsPlaying(bool status) {}
  addFavoriteSong(String name, String artist) {}
}
```

And in the pages I would call these functions for it to handle the state management better.

```dart
final storeController = Get.put(StoreController());

storeController.updateIsPlaying(true)
```

## Conclusion

Creating "MusicBox" using Flutter was a fun experience that once again expands my skills in mobile app development. By integrating essential music player features and local state management with GetX. I have crafted a app that is worthy of using. I look forward to further exploring the Flutter framework and creating more applications in the future.
