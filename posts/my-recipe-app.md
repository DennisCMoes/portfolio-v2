---
title: 'My Recipe App'
slug: 'my-recipe-app'
description: 'A mobile app full of great recipes'
coverImage: '/projects/MyRecipeApp/coverImage.png'
technologies: [React Native, Expo]
date: '2021-07-22T00:00:00.000Z'
repository: 'https://github.com/kingdennis-crypto/MyRecipeApp'
draft: false
---

Welcome to "My Recipe App", a mobile application with an extensive collection of delightful recipes retrieved by calling a external API. This project holds a special place in my hearts as it marks my true first venture into coding with React Native, without relying on tutorials. Prior to this, I had gained experience by watching tutorials and working on practice projects to familiarize myself with the framework.

## Recipe Retrieval

To provide users with a wide variety of recipes, I integrated an API provided by [Edamam](https://www.edamam.com/). This API allows users to browse recipes based on different categories such as breackfast, lunch, or dinner. Users can easlity find recipes they desire by selecting the appropriate category or searching it by name. Once a recipe is chosen, users can view its details on a dedicated recipe page

## Bookmarking and Personalization

![The bookmark and name page that utilize async storage](/projects/MyRecipeApp/localStorage.png)

For a better user experience I wanted to implement a easy retrieval of favourite recipes, so I implemented that with a package called Async Storage. This package can store and read data from the local data storage on the user's device. So users can now bookmark recipes they enjoy, and these bookmarks are stored using Async Storage. Furthermore, to add a personal touch, the app featured a panel where the user could enter their own name or how they wanted to be addressed. The entered name is displayed every time the app is opened, making the experience more personalized.

## Splashscreen

![The splash screen of the app](/projects/MyRecipeApp/splashScreen.png)

For first time users the app would display a small onboarding where the user would enter the name they wanted to be addressed with. Because this should only be shown for the first time a user enters the app, I would enter it in the local storage if it is the first time of the user.

```javascript
async function checkSetupScreen() {
  try {
    const value = await AsyncStorage.getItem('@FirstTime')
    console.log(value)
    if (value === 'yes') {
      setFirstTime(false)
    }
  } catch (e) {
    console.log(e)
  }
}
```

Because this needs to be checked before the app is loaded I would force the splash screen to be shown until the data was retrieved from the storage.

```javascript
useEffect(() => {
  async function prepare() {
    try {
      await SplashScreen.preventAutoHideAsync()
      await checkSetupScreen()
    } catch (e) {
      console.warn(e)
    } finally {
      setAppIsReady(true)
      await SplashScreen.hideAsync()
    }
  }

  prepare()
}, [])
```

And this is the JSON to setup the splash screen

```json
"splash": {
  "image": "./assets/splash.png",
  "resizeMode": "contain",
  "backgroundColor": "#ffffff"
}
```

## Dark Mode

![The landing page in dark mode](/projects/MyRecipeApp/darkMode.png)

Because I am a big fan of dark mode, I wanted to implement dark mode in the app. To accomplish this was pretty easy. I utilized a React Native API that would determine if the system's dark mode setting was enabled. Based on the preference the app's color scheme and styling would be adjusted accordingly:

```javascript
const colorScheme = useColorScheme()
const themeStyle = isDark ? darkStyles : styles
```

## Conclusion

Creating this app was an exciting and rewarding journey that allowed me to demonstrate my skills in React Native. With integrating APIs, utilizing packages and implementing a splash screen, I would say that I have crafted a worthy app that offers a personalized experience for all recipe enthusiasts. This project has strengthened my knowledge and passion for mobile app development.
