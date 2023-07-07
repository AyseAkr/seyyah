# Seyyah Backend

## Table of Contents

1. [Introduction](#introduction)
2. [Running the Application](#running-the-application)
3. [API](#api)

## Introduction

This is a web backend application. It provides APIs to search and get details of travel locations.

It uses

* Maven
* Spring Boot 3
* Java 20
* [TripAdvisor API](https://www.tripadvisor.com/developers)

## Running the Application

You can import the project to your favorite IDE and run [`dev.ayse.seyyah.SeyyahApplication`](seyyah/src/main/java/dev/ayse/seyyah/SeyyahApplication.java) main class. If you want to use Maven, you can run:
```shell
mvn spring-boot:run
```

## API

The application has following API endpoints.

### Search

You can use this API to search for locations with a category.
```
GET /locations/search?searchQuery={some-location-to-search}&category={selected-category}
```

`searchQuery` parameter is for location to search. `category` parameter can be one of these values:

* `hotels`
* `attractions`
* `restaurants`

The response will include `id`, `address`, `name` and `photos` of the matching locations.

### Details of a Location

You can use this API to get details of a location by its id. You can ids from search results.
```
GET /locations/{id}
```

The response will include `locationId`, `name`, `description`, `address`, `latitude`, `longitude`, `rating`, `ratingImage`, `photos`, `subratings` and `reviews`.
