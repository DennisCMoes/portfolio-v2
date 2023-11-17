---
title: 'A Dynamic and Scalable Zoo'
slug: 'zoo'
description: 'This is a small yet dynamic application made for scalability'
coverImage: '/projects/Zoo/coverImage.png'
technologies: [Java]
date: '2023-05-25T00:00:00.000Z'
repository: 'https://github.com/kingdennis-crypto/zoo-opdracht'
draft: false
---

Welcome to my project "Zoo", it is a small yet dynamic Java application designed I made for an internship opportunity. Despite its size, I take pride in crafting a system that is both dynamic and scalable. In this post, I'll delve into the architecture and design choice that make this zoo project unique.

## Abstract Class Foundation

To lay the groundwork, I started by creating an abstract class called `Animal`. This class cannot be instantiated by itself, but it serves as a foundation for other classes to extend. The abstract class contains essential attributes like the animal's name and a greeting message.

```java
public abstract class Animal implements IAnimal {
    private final String name;
    private final String helloText;

    public Animal(String name, String helloText) {
        this.name = name;
        this.helloText = helloText;
    }

    public void sayHello() {
        System.out.println(helloText);
    }

    @Override
    public String toString() {
        return String.format("Hello my name is %s", this.name);
    }
}
```

## Extending with Specialization

Given that a zoo primarily consists of various animals, extending the abstract class becomes straightforward. Let's take the example of a `Lion` class, which not only extends the `Animal` class but also implements the `IEatMeat` interface.

```java
public class Lion extends Animal implements IEatMeat {
    public Lion(String name) {
        super(name, "roooaoaaaaar");
    }

    @Override
    public void eatMeat() {
        System.out.println("nomnomnom thx mate");
    }
}
```

## Interface Implementation and Retrieval

To enhance the dynamism of the system, I implemented a function called `getAnimalsByInterface`. This function takes a class object (interface) as a parameter and returns a list of all animals implementing that interface. For example, if we want a list of animals that eat meat, we would call this function with the `IEatMeat` interface.

```java
public <T> List<T> getAnimalsByInterface(Class<T> interfaceObj) {
    List<T> animalsWithInterface = new ArrayList<>();

    for (Animal animal : animals.values()) {
        if (interfaceObj.isInstance(animal)) {
            animalsWithInterface.add(interfaceObj.cast(animal));
        }
    }

    return animalsWithInterface;
}
```

This generic function ensures flexibility in obtaining animals based on specified interfaces, contributing to the overall adaptability of the zoo.

## Conclusion

In conclusion, this small Java project showcases the power of abstraction, specialization, and dynamic retrieval. The design of the abstract class, interface implementation, and retrieval function allows for a scalable and extensible system. Whether you're dealing with lions that roar or animals with other specific dietary habits, this zoo application shows how versitile Java could be.
