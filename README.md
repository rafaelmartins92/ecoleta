<h1 align="center">
    <img alt="Logo" src="https://ik.imagekit.io/rafaelmartins/logo_4JEkedE6g.png" />
    <br>
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/rafael-martins92/">
  <img alt="Made By" src="https://img.shields.io/static/v1?label=Made%20By&message=Rafael%20Martins&color=orange&style=for-the-badge">
	</a>
  
  <img alt="Languages" src="https://img.shields.io/github/languages/count/rafaelmartins92/ecoleta?style=for-the-badge">
  
  <img alt="Top Language" src="https://img.shields.io/github/languages/top/rafaelmartins92/ecoleta?style=for-the-badge">
  
  <img alt="Repo Size" src="https://img.shields.io/github/repo-size/rafaelmartins92/ecoleta?style=for-the-badge">
  
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/rafaelmartins92/ecoleta?style=for-the-badge">
</p>

<h4 align="center">
  <p>Your waste collection point is here!</p>
  
  <p>This application was based on the Next Level Week #01 from Rocketseat.</p>

  <p>The main idea is to help people find waste collection points in an efficient way.</p>
</h4>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thumbsup-how-to-contribute">How To Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="Scene" src="https://ik.imagekit.io/rafaelmartins/portfolio-scene_2x_IBgunyBkd.png">
  <img alt="Design" src="https://ik.imagekit.io/rafaelmartins/portfolio-ui-design_2x_mHayzdvsz.png">
</p>

## :rocket: Technologies

This project was developed with the following technologies:

-  [Node](https://nodejs.org/en/docs/)
-  [Express](https://expressjs.com/pt-br/)
-  [Cors](https://www.npmjs.com/package/cors)
-  [Knex](https://knexjs.org/)
-  [SQLite](https://www.sqlite.org/version3.html)
-  [React](https://reactjs.org/docs/getting-started.html)
-  [React Icons](https://react-icons.github.io/react-icons/)
-  [React Leaflet](https://react-leaflet.js.org/docs/en/installation)
-  [Axios](https://www.npmjs.com/package/axios)
-  [Sweet Alert](https://sweetalert2.github.io/)
-  [Expo](https://docs.expo.io/)
-  [React Navigation](https://reactnavigation.org/)
-  [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
-  [React Native Maps](https://www.npmjs.com/package/react-native-maps)
-  [React Native SVG](https://www.npmjs.com/package/react-native-svg)
-  [React Native Picker Select](https://www.npmjs.com/package/react-native-picker-select)
-  [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
-  [Constants](https://docs.expo.io/versions/latest/sdk/constants/)
-  [VS Code][vc]

## :information_source: How to use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Install Dependencies 

```bash
# Clone this repository
$ git clone https://github.com/rafaelmartins92/ecoleta.git

# Go into the repository
$ cd ecoleta

# Install dependencies
$ npm install

```

### Install API 

```bash
# Move yourself to the backend folder
$ cd ..
$ cd backend

# Run migrates
$ npm knex:migrate

# Run seeds
$ npm knex:seed

# Start server
$ npm dev

# Now the server is running on port:3333 - To access it go to http://localhost:3333 
 
```

### Start Web Application

```bash
# Move yourself to the web folder
$ cd ..
$ cd web

# Run application
$ yarn start

# The web application will open on port:3000 - To access it go to http://localhost:3000 
```

### Start Mobile Application

```bash
# Move yourself to the mobile folder
$ cd ..
$ cd mobile

# Run application
$ yarn start

# Expo will open, just scan the qrcode on terminal or in the expo page
# Also you can run in Xcode or Android Studio if you have any of them 

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## :thumbsup: How To Contribute

-  Make a fork;
-  Create a branck with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/rafaelmartins92/ecoleta/blob/master/LICENSE) for more information.

---
<h4 align="center">
    Made with ♥ by Rafael Martins 👋 <a href="https://www.linkedin.com/in/rafael-martins92/" target="_blank">Get in touch!</a>
</h4>

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
