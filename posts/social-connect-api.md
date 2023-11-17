---
title: 'Social Connect API'
slug: 'social-connect-api'
description: 'Linking users and data effortlessly on your social platform'
coverImage: '/projects/SocialConnect/coverImage.png'
technologies: [NodeJS, Express, TypeScript]
date: '2023-08-17T00:00:00.000Z'
repository: 'https://github.com/kingdennis-crypto/social-media-api'
draft: true
---

Allow me to introduce Social Connect, a tool designed with simplicity and flexibility in mind, tailored for use in my own project. This API provides fundamental features that may provde helpful when creating a social media platform or enhancing existing projects with basic social networking capabilities. It includes token-based authentication, access and error logging, and media upload functionalities, offering a modest yet useful set of tools for managing your social media endeavors.

## Key Features

For this project post I want to focus on the core features that empower this API:

1. **Token-Based Authentication -** The JWT-based authentication ensures security and flexibility in managing user access.
1. **Access and Error Logging -** The logging system provides vital insights into the health and performance of the API.
1. **Media Upload Enhancement -** Learn about how I want to improve the media upload functionality.

## Token based authentication

To ensure secure authentication and authorization within our API, I've implemented a JWT based authentication syste. This authentication method offers flexibility for managing user access to various routes and functionalities.

In this system, every user is required to log in to obtain a JWT token. This token serves as a digital passport that grants access to specific endpoints within the API. it validates the user's identity and authorization level, thereby ensuring that only authenticate users can perform certain action.

Let's delve into the details of this JWT-based process:

1. **User Authentication -** When a user registers or logs into the system, their credentials are validated against our database. Once their identity is confirmed, the system generates a JWT JWT token for that user.
1. **Token Authorization -** The JWT token contains encoded information about the user and their permissions. It serves as an access control mechanism, dictating what actions a user can perform and whic hroutes they can access.
1. **Route Protection -** To illustrate this process, consider the scenario where only authenticated users are allowed to post content. To enforce this restriction, we've implemented a middleware layer within our API. this middleware checks every incoming request to ensure that the user is correctly authorized to perform the requested action,
1. **Middleware Authorization Check -** When a user attempts to make a POST request to create content, the request is intercepted by the middleware. The middleware then verifies the JWT token associated with the request to ascertain whether the user has the necessary permissions to perform the action.
1. **Authorization Logic -** The middleware checks the user's JWT token to determine if it contains the required permissions for posting content. If the token grants these permissions, the request is allowed to proceed, and the content is posted. Otherwise, unauthorized access is denied, and an appropriate error response is returned.

This JWT-based authentication and authorization system not only ensures security but also provides flexibility to control and manage user access to different parts of our API.

## Access and error logging

In addition to the authentication system, we've implemented a access and error logging system within our API. This logging system plays a role in monitoring and maintaining the health and performance of the API, as well as providing valuable insights into the system behavior.

Here's a detailed breakdown of our logging system and its functionalities:

1. **Error Logging -** To ensure that we have a record of any issues that occur within the API, we've set up an error logging mechanism. Whenever an error occurs, whether it's related to application logic, database operations, or external dependencies, the details of that error are logged in the `error.log` file.
    1. **Error Timestamp -** Each error entry is timestamped, providing information about when the error occurred. This helps to pinpoint the exact timing of issues.
    1. **Error Description -** The error includes detailed descriptions of what went wrong, including error messages and any relevant contextual information.
1. **Access Logging -** In addition to error tracking, we maintain an access file to record every utility call made within the API. This will help us monitor the overall system activity and provides insights into the usage pattern.
    1. **Database Connections -** For instance, every time a connection is established with the database, this event is logged in the `access.log` file.

By maintaining these detailed access and error logs, we can efficiently diagnose and address issues.

### Singleton classess

A singleton is a design pattern used in programming to ensure that a class can only be initiated once and will provide a global point of access to that instance. In simpler terms, it ensures that there is only one instance of a class created and shared throughout the application's lifecycle

```typescript
import { Client } from 'pg'

export default class ConnectionService {
  private static instance: ConnectionService
  private client: Client

  private constructor() {}

  public static getInstance: ConnectionService {
    if (!ConnectionService.instance) {
      ConnectionService.instance = new ConnectionService()
    }

    return ConnectionService.instance
  }

  public getClient(): Client {
    return this.client
  }
}
```

The code that we will examine is called ConnectionService. This singleton handles the connection to the database. This piece of code makes sure that there is a connection and that there is only one so that we don't crowd the database.

So how does it work? Well first of all we start with a private constructor. This makes sure that instances of `ConnectionService` cannot be created directly from outside of the class.

So now for the `getInstance` method. This method is the heart of a singleton class. It checks if an instance of `ConnectionService` already exists. If not, it creates one using the private constructor. The method then returns the already existing or newly created instance.

As last there is the `getClient` method, this public method takes the client from inside the singleton and returns it so that there is only one `Client` object in the application.

In summary, this class implements the singleton pattern to ensure that only one instance is created of this class. This instance holds the connection with a PostgreSQL database. This patterns makes sure that there is only one connection with the database in the application.

> For the future I want to implement the `Pool` method instead of the `Client` method. This will make sure that I can responsibly make multiple connections to not bottleneck it or overflow it.

### Logging

Lorem ipsum elit, sit anim dolor, deserunt voluptate sed, incididunt nulla, voluptate, elit ea dolore, cillum incididunt ut. Elit est adipiscing veniam, sit, eiusmod, sint aute elit quis non, consequat in id laboris sint aliquip. Exercitation culpa dolor, ea commodo proident excepteur excepteur culpa culpa ut reprehenderit cupidatat eiusmod ut aliquip dolore.

### Custom Errors

Lorem ipsum elit, sit anim dolor, deserunt voluptate sed, incididunt nulla, voluptate, elit ea dolore, cillum incididunt ut. Elit est adipiscing veniam, sit, eiusmod, sint aute elit quis non, consequat in id laboris sint aliquip. Exercitation culpa dolor, ea commodo proident excepteur excepteur culpa culpa ut reprehenderit cupidatat eiusmod ut aliquip dolore.

### Media Upload

Lorem ipsum elit, sit anim dolor, deserunt voluptate sed, incididunt nulla, voluptate, elit ea dolore, cillum incididunt ut. Elit est adipiscing veniam, sit, eiusmod, sint aute elit quis non, consequat in id laboris sint aliquip. Exercitation culpa dolor, ea commodo proident excepteur excepteur culpa culpa ut reprehenderit cupidatat eiusmod ut aliquip dolore.

![Description](/projects/SocialConnect/Placeholder_1920x1080.png)

## Security Measures

To make this API as secure as possible I wanted to implement some security features. For example I made sure that some endpoints were only accessibly if you were logged in. This made sure that nobody without the correct rights would call a route they weren't meant to.\

### Token Based Authentication

Lorem ipsum consectetur dolor consectetur qui proident exercitation, ea, minim ea voluptate occaecat dolore ut incididunt, ad. Qui esse ex occaecat fugiat fugiat excepteur non consectetur nulla sunt sunt cupidatat, laboris aliqua non. Officia aliquip consectetur in nostrud culpa duis, ut, in, non aute dolor voluptate eu consequat enim.

### Password Encryption

Lorem ipsum consectetur dolor consectetur qui proident exercitation, ea, minim ea voluptate occaecat dolore ut incididunt, ad. Qui esse ex occaecat fugiat fugiat excepteur non consectetur nulla sunt sunt cupidatat, laboris aliqua non. Officia aliquip consectetur in nostrud culpa duis, ut, in, non aute dolor voluptate eu consequat enim.
